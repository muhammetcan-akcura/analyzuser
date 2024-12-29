const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Genel amaçlı Python script çalıştırma fonksiyonu
function runPythonScript(scriptPath, args) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', [scriptPath, ...args]);
        let outputData = '';
        let errorData = '';

        pythonProcess.stdout.on('data', (data) => {
            outputData += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorData += data.toString();
            console.error(`Python Error: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                reject({
                    success: false,
                    error: errorData || "Script execution failed",
                    code: code
                });
                return;
            }

            try {
                const result = JSON.parse(outputData);
                resolve(result);
            } catch (error) {
                reject({
                    success: false,
                    error: "Invalid JSON response from Python script",
                    details: outputData
                });
            }
        });

        pythonProcess.on('error', (error) => {
            reject({
                success: false,
                error: "Failed to start Python script",
                details: error.message
            });
        });
    });
}

// Login endpoint
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: "E-posta ve şifre gereklidir"
            });
        }

        const result = await runPythonScript('./skype_login.py', [email, password]);
        res.json(result);
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            success: false,
            error: error.error || "Beklenmeyen bir hata oluştu",
            details: error.details || null
        });
    }
});

// Send message endpoint
app.post("/send-message", async (req, res) => {
    try {
        const { email, password, recipients, message } = req.body;

        if (!email || !password || !recipients || !message) {
            return res.status(400).json({
                success: false,
                error: "Eksik bilgi"
            });
        }

        const result = await runPythonScript('./skype_send_message.py', [
            email,
            password,
            JSON.stringify(recipients),
            message
        ]);
        res.json(result);
    } catch (error) {
        console.error("Message Sending Error:", error);
        res.status(500).json({
            success: false,
            error: error.error || "Mesaj gönderirken bir hata oluştu",
            details: error.details || null
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: "Sunucu hatası",
        details: err.message
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
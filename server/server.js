const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Genel amaçlı Python script çalıştırma fonksiyonu
function runPythonScript(scriptPath, args, res) {
    const pythonProcess = spawn('python3', [scriptPath, ...args]);
    let outputData = '';

    pythonProcess.stdout.on('data', (data) => {
        outputData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Hata: ${data}`);
        if (!res.headersSent) {
            const errorMsg = data.toString().includes('Rate limit exceeded') 
                ? "Rate limit aşıldı, lütfen daha sonra tekrar deneyin." 
                : "Kimlik doğrulama işlemi başarısız";

            res.status(500).json({
                success: false,
                error: errorMsg
            });
        }
    });

    pythonProcess.on('close', (code) => {
        if (res.headersSent) return; // Eğer yanıt gönderildiyse işlemi sonlandırın
        try {
            const result = JSON.parse(outputData);
            res.json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Yanıt işlenemedi"
            });
        }
    });
}

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: "E-posta ve şifre gereklidir"
        });
    }

    runPythonScript('./skype_login.py', [email, password], res);
});

// Send message endpoint
app.post("/send-message", (req, res) => {
    const { email, password, recipients, message } = req.body;

    if (!email || !password || !recipients || !message) {
        return res.status(400).json({
            success: false,
            error: "Eksik bilgi"
        });
    }

    runPythonScript('./skype_send_message.py', [
        email,
        password,
        JSON.stringify(recipients),
        message
    ], res);
});

// Sunucu başlatma
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));

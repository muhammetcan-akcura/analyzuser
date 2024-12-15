import React, { useState } from "react";

function App() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState(""); // Kullanıcı adı yerine e-posta
    const [password, setPassword] = useState("");
    const [contacts, setContacts] = useState([]);
    const [selectedRecipients, setSelectedRecipients] = useState([]);
    const [message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false); // Yükleme durumu

    // Giriş Doğrulama
    const handleLogin = async () => {
        setLoading(true);
        setResponseMessage(""); // Önceki hata mesajını temizle

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email, // E-posta ile giriş
                    password 
                }),
            });

            const data = await response.json();
            
            if (data.success) {
                setContacts(data.contacts);
                setStep(2);
            } else {
                setResponseMessage(data.error || "Giriş başarısız");
            }
        } catch (error) {
            setResponseMessage("Sunucu ile bağlantı kurulamadı");
        } finally {
            setLoading(false);
        }
    };

    // Mesaj Gönderme
    const handleSendMessage = async () => {
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://localhost:3001/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                    recipients: selectedRecipients,
                    message,
                }),
            });

            const data = await response.json();
            
            if (data.success) {
                setResponseMessage("Mesaj başarıyla gönderildi!");
            } else {
                setResponseMessage(data.error || "Mesaj gönderilemedi");
            }
        } catch (error) {
            setResponseMessage("Mesaj gönderme sırasında hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                {step === 1 ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Skype Girişi</h1>
                        <input
                            type="email"
                            placeholder="Skype E-posta Adresi"
                            className="w-full mb-4 px-4 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Skype Şifre"
                            className="w-full mb-4 px-4 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className={`w-full text-white py-2 rounded ${
                                loading 
                                    ? "bg-gray-400 cursor-not-allowed" 
                                    : "bg-blue-500 hover:bg-blue-600"
                            }`}
                        >
                            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                        </button>
                        {responseMessage && (
                            <p className="mt-2 text-center text-red-500 text-sm">
                                {responseMessage}
                            </p>
                        )}
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Mesaj Gönderme</h1>
                        <div className="mb-4">
                            <h2 className="text-lg font-bold">Kişiler ve Gruplar</h2>
                            <ul className="h-32 overflow-y-auto border rounded p-2">
                                {contacts.map((contact) => (
                                    <li key={contact.id} className="mb-1">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={contact.id}
                                                className="mr-2"
                                                onChange={(e) => {
                                                    const isChecked = e.target.checked;
                                                    setSelectedRecipients((prev) =>
                                                        isChecked
                                                            ? [...prev, contact.id]
                                                            : prev.filter((id) => id !== contact.id)
                                                    );
                                                }}
                                            />
                                            {contact.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <textarea
                            placeholder="Mesajınızı yazın"
                            className="w-full mb-4 px-4 py-2 border rounded"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={loading}
                            className={`w-full text-white py-2 rounded ${
                                loading 
                                    ? "bg-gray-400 cursor-not-allowed" 
                                    : "bg-green-500 hover:bg-green-600"
                            }`}
                        >
                            {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                        </button>
                        {responseMessage && (
                            <p className="mt-4 text-center text-sm text-gray-600">
                                {responseMessage}
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
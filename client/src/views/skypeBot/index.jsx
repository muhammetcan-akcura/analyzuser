import React, { useState, useEffect } from "react";
import { Clock, Search, Send, X } from "lucide-react";

function App() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contacts, setContacts] = useState([]);
    const [selectedRecipients, setSelectedRecipients] = useState([]);
    const [message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [intervalMessage, setIntervalMessage] = useState("0");
    const [searchQuery, setSearchQuery] = useState("");
    const [scheduledMessages, setScheduledMessages] = useState([]);
    const [activeIntervals, setActiveIntervals] = useState({});
    const [groups, setGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [type, setType] = useState("person");

    useEffect(() => {
        return () => {
            Object.values(activeIntervals).forEach(intervalId => clearInterval(intervalId));
        };
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                setContacts(Array.from(new Set(data.contacts.filter(contact => contact.name !== "Skype"))));
                setGroups(Array.from(new Set(data.groups.filter(group => group.name !== "Skype"))));
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

    const handleSendMessage = async (isScheduled = false) => {

        if (!message || selectedRecipients.length === 0) {
            setResponseMessage("Lütfen mesaj ve en az bir alıcı seçin");
            return;
        }

        if (isScheduled && intervalMessage !== "0") {
            const messageId = Date.now();
            const selectedContacts = contacts.filter(c => selectedRecipients.includes(c.id));
            const newScheduledMessage = {
                id: messageId,
                recipients: selectedContacts.map(c => c.name).join(", "),
                message,
                interval: parseInt(intervalMessage),
                startTime: new Date().toLocaleString(),
            };

            const intervalId = setInterval(() => {
                sendMessage();
            }, parseInt(intervalMessage) * 60 * 1000);

            setActiveIntervals(prev => ({ ...prev, [messageId]: intervalId }));
            setScheduledMessages(prev => [...prev, newScheduledMessage]);
            setResponseMessage("Mesaj zamanlandı ve gönderilmeye başlandı");
        } else {
            await sendMessage();
        }
    };

    const sendMessage = async () => {
        setLoading(true);
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

    const cancelScheduledMessage = (messageId) => {
        clearInterval(activeIntervals[messageId]);
        setActiveIntervals(prev => {
            const newIntervals = { ...prev };
            delete newIntervals[messageId];
            return newIntervals;
        });
        setScheduledMessages(prev => prev.filter(msg => msg.id !== messageId));
    };

    const toggleAllSelected = (e) => {
        ;
        e.target.checked
            ? setSelectedRecipients(contacts?.map((contact) => contact.id))
            : setSelectedRecipients([]);
    };

    const toggleAllGroupsSelected = (e) => {
        e.target.checked
            ? setSelectedGroups(groups?.map((group) => group.id))
            : setSelectedGroups([]);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {step === 1 ? (
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-center mb-6">Skype Girişi</h2>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Skype E-posta Adresi"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Skype Şifre"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onClick={handleLogin}
                                disabled={loading}
                                className={`w-full py-2 rounded-lg text-white font-medium transition-colors ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                            >
                                {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                            </button>
                            {responseMessage && (
                                <p className="text-center text-red-500 text-sm mt-2">
                                    {responseMessage}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-6">Mesaj Gönderme</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex gap-4">
                                        <select
                                            value={intervalMessage}
                                            onChange={(e) => setIntervalMessage(e.target.value)}
                                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="0">Tek Seferlik</option>
                                            <option value="1">1 dakikada bir</option>
                                            <option value="30">30 dakikada bir</option>
                                            <option value="60">1 saatte bir</option>
                                        </select>
                                        <select
                                            value={type}
                                            onChange={(e) => {
                                                setType(e.target.value);
                                                setSelectedGroups([]);
                                                setSelectedRecipients([]);
                                            }}
                                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="person">Kişi</option>
                                            <option value="group">Grup</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={type === "person" ? selectedRecipients.length === contacts.length : selectedGroups.length === groups.length}
                                            onChange={(e) => {
                                                if (type === "person") {
                                                    toggleAllSelected(e);
                                                } else {
                                                    toggleAllGroupsSelected(e);
                                                }
                                            }}
                                            className="w-4 h-4"
                                        />
                                        <span>Tümünü Seç</span>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Kişiler arasında ara"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="border rounded-lg p-4 max-h-48 overflow-y-auto">
                                    {type === "person" ? filteredContacts.map((contact) => (
                                        <label
                                            key={contact.id + "-contact"}
                                            className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedRecipients.includes(contact.id)}
                                                className="mr-3 w-4 h-4"
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
                                    )) : groups.map((group) => (
                                        <div key={group.id + "-group"} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedGroups.includes(group.id)}
                                                className="mr-3 w-4 h-4"
                                                onChange={(e) => {
                                                    const isChecked = e.target.checked;
                                                    setSelectedGroups((prev) =>
                                                        isChecked
                                                            ? [...prev, group.id]
                                                            : prev.filter((id) => id !== group.id)
                                                    );
                                                }}
                                            />
                                            <label
                                                key={group.id}
                                                className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                                            >
                                                {group.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <textarea
                                    placeholder="Mesajınızı yazın"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => handleSendMessage(false)}
                                        disabled={loading}
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Send className="h-4 w-4" />
                                        {loading ? "Gönderiliyor..." : "Şimdi Gönder"}
                                    </button>
                                    {intervalMessage !== "0" && (
                                        <button
                                            onClick={() => handleSendMessage(true)}
                                            disabled={loading}
                                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Clock className="h-4 w-4" />
                                            Zamanlı Gönder
                                        </button>
                                    )}
                                </div>

                                {responseMessage && (
                                    <p className="text-center text-sm text-gray-600">
                                        {responseMessage}
                                    </p>
                                )}
                            </div>
                        </div>

                        {scheduledMessages.length > 0 && (
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6">Zamanlı Mesajlar</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Alıcılar
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Mesaj
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Sıklık
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Başlangıç
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    İşlem
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {scheduledMessages.map((msg) => (
                                                <tr key={msg.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-[200px] truncate">
                                                        {msg.recipients}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-[200px] truncate">
                                                        {msg.message}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {msg.interval} dakikada bir
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {msg.startTime}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            onClick={() => cancelScheduledMessage(msg.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
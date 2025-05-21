import { useState, useRef } from "react";

const SendMessage = () => {
    console.log("SendMessage")

    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const timeoutRef = useRef(null);
    
    const handleSend = () => {
        setIsSending(true);
        if (message.trim()) {
        timeoutRef.current = setTimeout(() => {
            alert(`Message sent: ${message}`);
            setIsSending(false);
        }, 3000)
        setMessage("");
        }
    };

    const handleUndo = () => {
        // setIsSending(false);
        clearTimeout(timeoutRef.current);
    }
    
    return (
        <div className="send-message">
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
        {isSending && <button onClick={handleUndo}>Undo</button>}
        </div>
    );
}

export default SendMessage;
import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(
				`/api/messages/send/${selectedConversation._id}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message }),
				}
			);

			const data = await res.json();

			if (res.ok) {
				// Assuming the server returns the sent message
				const newMessage = data.newMessage; // Assuming newMessage contains the newly created message
				setMessages([...messages, newMessage]); // Add new message to messages state
			} else {
				// Handle error response from the server
				throw new Error(data.error || "Failed to send message");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};

export default useSendMessage;

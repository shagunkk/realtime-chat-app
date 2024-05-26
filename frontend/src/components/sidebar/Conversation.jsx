import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          selectedConversation?._id === conversation._id ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1 ml-3"> {/* Added margin to the left of the flex container */}
          <div className="flex gap-3 justify-between items-center"> {/* Added 'items-center' */}
            <p className="font-medium text-gray-700">{conversation.fullName}</p>
            <span className="text-lg">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="h-0.5 bg-gray-300 opacity-25" />}
    </>
  );
};

export default Conversation;
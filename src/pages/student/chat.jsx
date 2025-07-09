import React, { useState, useEffect, useRef } from "react";

const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const PlusIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const AttachmentIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
    />
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const DocumentIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const EmojiIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const FileIcon = () => (
  <div className="bg-green-200 p-2 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </div>
);

const SentCheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1 inline-block text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const SendIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

const initialConversations = [
  {
    id: 1,
    name: "Sarah A.",
    task: "MAT101 Assignment",
    message:
      "Thanks, I just received the file. I'll go through it and let you know if anything is missing...",
    time: "1 minute ago",
    unread: 1,
    avatar: "https://placehold.co/48x48/C7F7C1/404040?text=SA",
  },
  {
    id: 2,
    name: "Jared Sunn",
    task: "CSC102 Research Help",
    message:
      "Can I get feedback on my submission before I make the final edits? I'm aiming to submit tonight.",
    time: "1 minute ago",
    unread: 1,
    avatar: "https://placehold.co/48x48/E0E7FF/404040?text=JS",
  },
  {
    id: 3,
    name: "Felix O.",
    task: "PHY104 Summary Notes",
    message:
      "Please check the first file I attached earlier. I included diagrams and brief explanations too.",
    time: "3 days ago",
    files: 2,
    unread: 0,
    avatar: "https://placehold.co/48x48/FEE2E2/404040?text=FO",
  },
  {
    id: 4,
    name: "Maria Garcia",
    task: "ART230 Final Project",
    message: "Here are the final sketches.",
    time: "5 days ago",
    unread: 0,
    avatar: "https://placehold.co/48x48/D1FAE5/404040?text=MG",
  },
];

const chatHistories = {
  1: [
    {
      id: 1,
      type: "received",
      text: "Hey! Thanks again for picking up the task. The questions are mostly theory, but let me know if you need anything clarified.",
      time: "10:14 AM",
    },
    {
      id: 2,
      type: "received",
      text: "Can I send you files?",
      time: "10:14 AM",
    },
    { id: 3, type: "sent", text: "Hey! Okay, send out.", time: "10:17 AM" },
    {
      id: 4,
      type: "received",
      file: { name: "work.PDF", size: "41.36 MB" },
      time: "10:30 AM",
    },
    { id: 5, type: "divider", text: "TODAY" },
    {
      id: 6,
      type: "received",
      text: "Hello! I tweaked everything you asked. I am sending the finished file.",
      file: { name: "(52.05 Mb) NEW_STYLE.zip", size: "" },
      time: "12:00 PM",
    },
    {
      id: 7,
      type: "sent",
      text: "Perfect. Thank you! I'll mark this as completed. Appreciate the help.",
      time: "12:00 PM",
    },
    { id: 8, type: "received", text: "You are welcome!", time: "12:01 PM" },
  ],
  2: [
    {
      id: 1,
      type: "sent",
      text: "Hi Jared, just checking in on the research help.",
      time: "9:00 AM",
    },
    {
      id: 2,
      type: "received",
      text: "Can I get feedback on my submission? I'm aiming to submit tonight.",
      time: "1 minute ago",
    },
  ],
  3: [
    {
      id: 1,
      type: "received",
      text: "Please check the first file I attached earlier. I included diagrams and brief explanations too.",
      time: "3 days ago",
    },
    {
      id: 2,
      type: "sent",
      text: "Got it, Felix. Taking a look now.",
      time: "3 days ago",
    },
  ],
  4: [
    {
      id: 1,
      type: "received",
      text: "Here are the final sketches.",
      time: "5 days ago",
    },
  ],
};

function StudentChat() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState(1);
  const [chatHistory, setChatHistory] = useState(chatHistories[1]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("All");
  const [showChatMenu, setShowChatMenu] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleConversationClick = (id) => {
    setActiveConversationId(id);
    setChatHistory(chatHistories[id] || []);
    setConversations(
      conversations.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const newMsg = {
      id: Date.now(),
      type: "sent",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
    setChatHistory((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  const handleAttachmentClick = (type) => {
    setShowPlusMenu(false);
    if (type === "document") {
      fileInputRef.current?.click();
    } else {
      alert(`Opening ${type} selection...`);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const newFileMsg = {
      id: Date.now(),
      type: "sent",
      file: {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      },
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
    setChatHistory((prev) => [...prev, newFileMsg]);
  };

  const filteredConversations = conversations.filter((convo) => {
    const matchesFilter =
      searchFilter === "All" || (searchFilter === "Unread" && convo.unread > 0);
    const matchesSearch =
      convo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      convo.task.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  return (
    <div className="font-sans w-full h-screen flex bg-white overflow-hidden">
      <div className="w-full md:w-[380px] border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#404040]">Chats</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <SearchIcon className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00894E] focus:border-transparent transition"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setShowFilterMenu((prev) => !prev)}
                className="text-gray-600 text-sm font-medium p-2.5 rounded-lg hover:bg-gray-100 bg-white border border-gray-300"
              >
                Messages ▼
              </button>
              {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-20 py-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchFilter("All");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchFilter("Unread");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Unread
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {filteredConversations.map((convo) => (
            <div
              key={convo.id}
              onClick={() => handleConversationClick(convo.id)}
              className={`p-4 flex items-start space-x-4 cursor-pointer border-l-4 transition-all duration-200 ease-in-out ${
                activeConversationId === convo.id
                  ? "bg-[#C7F7C1] border-[#00894E] transform translate-x-1"
                  : "border-transparent hover:bg-gray-50"
              }`}
            >
              <img
                src={convo.avatar}
                alt={convo.name}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-md text-[#404040] truncate">
                    {convo.name}
                  </h3>
                  <p className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {convo.time}
                  </p>
                </div>
                <p className="text-sm text-green-600 font-semibold truncate flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  {convo.task}
                </p>
                <div className="flex justify-between items-end mt-1">
                  <p className="text-sm text-gray-600 truncate pr-4">
                    {convo.message}
                  </p>
                  {convo.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0">
                      {convo.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-1 flex-col bg-white">
        {activeConversation ? (
          <>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg">
                    {activeConversation.name}
                  </h3>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowChatMenu((prev) => !prev)}
                  className="text-gray-500 p-2 rounded-full hover:bg-gray-100"
                >
                  ...
                </button>
                {showChatMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Viewing profile...");
                        setShowChatMenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      View Profile
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Clearing chat...");
                        setShowChatMenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Clear Chat
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Blocking user...");
                        setShowChatMenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Block User
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow p-6 overflow-y-auto bg-[#F5F5F5]">
              <div className="space-y-2">
                {chatHistory.map((chat) =>
                  chat.type === "divider" ? (
                    <div key={chat.id} className="text-center my-4">
                      <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                        {chat.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={chat.id}
                      className={`flex items-end gap-2 ${
                        chat.type === "sent" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xl p-3 rounded-lg ${
                          chat.type === "sent"
                            ? "bg-white text-gray-800 shadow-sm"
                            : "bg-[#00894E] text-white"
                        }`}
                      >
                        {chat.text && <p className="text-sm">{chat.text}</p>}
                        {chat.file && (
                          <div className="mt-2 bg-black/10 p-2 rounded-lg flex items-center space-x-3 min-w-[250px]">
                            <FileIcon />
                            <div className="flex-grow">
                              <p className="font-semibold text-sm">
                                {chat.file.name}
                              </p>
                              {chat.file.size && (
                                <p className="text-xs opacity-90">
                                  {chat.file.size}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="text-xs mt-1 opacity-70 text-right">
                          {chat.time}{" "}
                          {chat.type === "sent" && <SentCheckmarkIcon />}
                        </div>
                      </div>
                    </div>
                  )
                )}
                <div ref={chatEndRef} />
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200 relative">
              {showPlusMenu && (
                <div className="absolute bottom-full left-4 mb-2 flex flex-col items-start gap-2">
                  <button
                    onClick={() => handleAttachmentClick("document")}
                    className="p-3 rounded-full bg-[#00894E] text-white hover:bg-green-700 transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <DocumentIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => handleAttachmentClick("image")}
                    className="p-3 rounded-full bg-[#00894E] text-white hover:bg-green-700 transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <ImageIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => handleAttachmentClick("attachment")}
                    className="p-3 rounded-full bg-[#00894E] text-white hover:bg-green-700 transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    <AttachmentIcon className="h-6 w-6" />
                  </button>
                </div>
              )}
              <form
                onSubmit={handleSendMessage}
                className="flex items-center space-x-3"
              >
                <button
                  type="button"
                  onClick={() => setShowPlusMenu((prev) => !prev)}
                  className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  <PlusIcon className="h-6 w-6" />
                </button>
                <div className="flex-grow relative">
                  <input
                    type="text"
                    placeholder="Type a message here"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="w-full bg-gray-100 rounded-full px-5 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-[#00894E]"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => alert("Emoji clicked!")}
                      className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                      <EmojiIcon className="h-6 w-6" />
                    </button>
                    <button
                      type="submit"
                      className="p-2 rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors"
                      aria-label="Send Message"
                    >
                      <SendIcon className="h-6 w-6 transform rotate-45" />
                    </button>
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </form>
            </div>
          </>
        ) : (
          <div className="flex-grow flex justify-center items-center text-gray-500">
            <p>Select a conversation to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentChat;

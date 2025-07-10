import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, MoreVertical, Paperclip, Send, Plus, Smile, Check, Video, Image, FileText  } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
// constants
const initialConversations = [
  {
    id: 1,
    name: "Sarah A.",
    task: "MAT101 Assignment",
    message: "Thanks, I just received the file. I'll go through it...",
    time: "1 minute ago",
    unread: 2,
    avatar: "https://i.pravatar.cc/48?u=sarah",
    online: true,
  },
  {
    id: 2,
    name: "Jared Sunn",
    task: "CSC102 Research Help",
    message: "Can I get feedback on my submission before I make the final edits?",
    time: "1 minute ago",
    unread: 1,
    avatar: "https://i.pravatar.cc/48?u=jared",
    online: false,
  },
  {
    id: 3,
    name: "Felix O.",
    task: "PHY104 Summary Notes",
    message: "Please check the first file I attached earlier. I included diagrams...",
    time: "3 days ago",
    files: 2,
    unread: 0,
    avatar: "https://i.pravatar.cc/48?u=felix",
    online: false,
  },
    {
    id: 4,
    name: "Jared Sunn",
    task: "CSC102 Research Help",
    message: "Can I get feedback on my submission before I make the final edits?",
    time: "1 minute ago",
    unread: 1,
    avatar: "https://i.pravatar.cc/48?u=jared2",
    online: false,
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
    { id: 2, type: "received", text: "Can I send you files?", time: "10:14 AM" },
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
    { id: 8, type: "received", text: "You are welcome!", time: "12:17 AM" },
  ],
  2: [
    { id: 1, type: "sent", text: "Hi Jared, just checking in.", time: "9:00 AM" },
    { id: 2, type: "received", text: "Can I get feedback on my submission?", time: "1 minute ago" },
  ],
  3: [{ id: 1, type: "received", text: "Here are the summary notes.", time: "3 days ago" }],
  4: [{ id: 1, type: "received", text: "Research feedback please.", time: "1 minute ago" }],
};


// child components

const ChatListItem = ({ convo, isActive, onSelect }) => (
  <div
    onClick={onSelect}
    className={`p-4 flex items-start space-x-4 cursor-pointer border-l-4 ${
      isActive ? 'bg-[#F1FEF8] border-green-600' : 'border-transparent hover:bg-gray-50'
    }`}
  >
    <img src={convo.avatar} alt={convo.name} className="w-12 h-12 rounded-full flex-shrink-0" />
    <div className="flex-grow overflow-hidden">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-md text-gray-800 truncate">{convo.name}</h3>
        <p className="text-xs text-gray-500 flex-shrink-0 ml-2">{convo.time}</p>
      </div>
      <p className="text-sm text-gray-600 font-semibold truncate">{convo.task}</p>
      <div className="flex justify-between items-end mt-1">
        <p className="text-sm text-gray-600 truncate pr-4">{convo.message}</p>
        {convo.unread > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0">
            {convo.unread}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ChatList = ({ conversations, activeConversationId, onSelectConversation }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full md:w-[380px] border-r border-gray-200 flex flex-col ">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Chats</h2>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          {/* Search Input Section */}
          <div className="relative flex-grow flex items-center">
            <Search className="h-5 w-5 text-gray-500 ml-2 absolute" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-3 text-gray-800 placeholder-gray-500 focus:outline-none bg-transparent"
            />
          </div>
          <div className="w-px h-6 bg-gray-200"></div>

          <div className="relative"> 
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 text-sm font-medium pr-2 pl-3 py-1.5 bg-white cursor-pointer"
            >
              Messages <ChevronDown size={16} className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-10">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault(); 
                      console.log('Displaying all messages');
                      setIsDropdownOpen(false); 
                    }}
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Displaying unread messages');
                      setIsDropdownOpen(false); 
                    }}
                  >
                    Unread
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <p className="p-4 text-sm font-semibold text-gray-500">Recent Chats</p>
        {conversations.map((convo) => (
          <ChatListItem
            key={convo.id}
            convo={convo}
            isActive={activeConversationId === convo.id}
            onSelect={() => onSelectConversation(convo.id)}
          />
        ))}
      </div>
    </div>
  );
};
const ChatMessage = ({ msg }) => {
  const isSent = msg.type === "sent";
  return (
    <div className={`flex items-end gap-2 ${isSent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-md p-3 rounded-lg ${
          isSent ? "bg-[#19C966] text-white" : "bg-white text-gray-800 shadow-sm"
        }`}
      >
        {msg.text && <p className="text-sm">{msg.text}</p>}
        {msg.file && (
          <div className={`mt-2 p-2 rounded-lg flex items-center space-x-3 min-w-[250px] ${isSent ? 'bg-green-700' : 'bg-gray-100'}`}>
            <div className={`p-2 rounded-lg ${isSent ? 'bg-green-500' : 'bg-green-200'}`}>
              <Paperclip className={`h-6 w-6 ${isSent ? 'text-white' : 'text-green-700'}`} />
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-sm">{msg.file.name}</p>
              {msg.file.size && <p className={`text-xs ${isSent ? 'opacity-90' : 'text-gray-500'}`}>{msg.file.size}</p>}
            </div>
          </div>
        )}
        <div className={`text-xs mt-1 text-right flex items-center justify-end ${isSent ? 'opacity-70' : 'text-gray-400'}`}>
          {msg.time} {isSent && <Check size={16} className="ml-1" />}
        </div>
      </div>
    </div>
  );
};

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [showPlusOptions, setShowPlusOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const plusButtonRef = useRef(null);
  const emojiButtonRef = useRef(null);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (plusButtonRef.current && !plusButtonRef.current.contains(event.target)) {
        setShowPlusOptions(false);
      }

      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target) &&
          emojiButtonRef.current && !emojiButtonRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setShowEmojiPicker(false); 
    }
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200"> 
      <form onSubmit={handleSubmit} className="flex items-end space-x-3 relative">
        {/* Plus Button and Options */}
        <div className="relative z-20" ref={plusButtonRef}>
          <button
            type="button"
            className="p-3 rounded-full bg-[#19C966] text-white hover:bg-green-600 transition-colors shadow-md"
            onClick={() => setShowPlusOptions(!showPlusOptions)}
          >
            <Plus className="h-6 w-6" />
          </button>

          {showPlusOptions && (
            <div className="absolute bottom-full left-0 mb-3 flex flex-col items-center space-y-2">
              <button
                type="button"
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
                title="Send Video"
                onClick={() => { alert('Video selected!'); setShowPlusOptions(false); }}
              >
                <Video className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
                title="Send Image"
                onClick={() => { alert('Image selected!'); setShowPlusOptions(false); }}
              >
                <Image className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
                title="Send Document"
                onClick={() => { alert('Document selected!'); setShowPlusOptions(false); }}
              >
                <FileText className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Type a message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full  px-4 py-3 focus:outline-none text-[#707C97]"
          />
        </div>

        {/* Emoji Button */}
        <div className="relative z-20" ref={emojiButtonRef}>
          <button
            type="button"
            className="p-3 rounded-full bg-transparent text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile className="h-6 w-6" />
          </button>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div ref={emojiPickerRef} className="absolute bottom-full right-0 mb-3">
              <EmojiPicker onEmojiClick={onEmojiClick} theme="light" width={300} />
            </div>
          )}
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="p-3 rounded-full text-white bg-[#19C966] hover:bg-green-600 transition-colors shadow-md"
          aria-label="Send Message"
        >
          <Send className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

  const ChatWindow = ({ conversation, messages, onSendMessage }) => {
    const chatEndRef = useRef(null);
    const [showChatMenu, setShowChatMenu] = useState(false); 
  
    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (chatEndRef.current && !chatEndRef.current.contains(event.target)) {
          if (showChatMenu && !event.target.closest('.chat-menu-container')) {
             setShowChatMenu(false);
          }
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showChatMenu]); 
  
    if (!conversation) {
      return (
        <div className="hidden md:flex flex-grow justify-center items-center text-gray-500 bg-gray-50">
          <p>Select a conversation to start chatting.</p>
        </div>
      );
    }
  
    return (
      <div className="hidden md:flex flex-1 flex-col min-h-screen bg-white">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={conversation.avatar} alt={conversation.name} className="w-10 h-10 rounded-full" />
              {conversation.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white" />}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">{conversation.name}</h3>
              {conversation.online && <p className="text-sm text-green-600">Online</p>}
            </div>
          </div>
  
          <div className="relative chat-menu-container"> 
            <button
              className="text-gray-500 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowChatMenu(!showChatMenu)}
            >
              <MoreVertical />
            </button>
  
            {showChatMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1 border border-gray-200"> {/* Added border */}
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
  
        <div className="flex-grow p-6 overflow-y-auto bg-[#F9F9F9]">
          <div className="space-y-4">
            {messages.map((msg) =>
              msg.type === "divider" ? (
                <div key={msg.id} className="text-center my-4">
                  <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{msg.text}</span>
                </div>
              ) : (
                <ChatMessage key={msg.id} msg={msg} />
              )
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
  
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    );
  };


// --- MAIN APP COMPONENT ---

function StudentChat() {
  const [conversations] = useState(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState(1);
  const [messages, setMessages] = useState(chatHistories[1]);

  const handleSelectConversation = (id) => {
    setActiveConversationId(id);
    setMessages(chatHistories[id] || []);
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      type: "sent",
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const activeConversation = conversations.find((c) => c.id === activeConversationId);

  return (
    <div className="w-full h-screen flex overflow-hidden  bg-gray-50">
      <ChatList
        conversations={conversations}
        activeConversationId={activeConversationId}
        onSelectConversation={handleSelectConversation}
      />
      <ChatWindow
        conversation={activeConversation}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default StudentChat;
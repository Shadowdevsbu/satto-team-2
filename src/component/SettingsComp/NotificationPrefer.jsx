import { useState, useEffect } from "react";

const NotificationPrefer = () => {
  const [emailNotif, setEmailNotif] = useState(() => {
    const storedPrefs = JSON.parse(localStorage.getItem("notificationPrefs"));
    return storedPrefs?.emailNotif ?? false;
  });

  const [chatMessages, setChatMessages] = useState(() => {
    const storedPrefs = JSON.parse(localStorage.getItem("notificationPrefs"));
    return storedPrefs?.chatMessages ?? false;
  });

  const [taskUpdates, setTaskUpdates] = useState(() => {
    const storedPrefs = JSON.parse(localStorage.getItem("notificationPrefs"));
    return storedPrefs?.taskUpdates ?? false;
  });

  useEffect(() => {
    const storedPrefs = localStorage.getItem("notificationPrefs");
    if (storedPrefs) {
      try {
        const prefs = JSON.parse(storedPrefs);

        setEmailNotif(Boolean(prefs.emailNotif));
        setChatMessages(Boolean(prefs.chatMessages));
        setTaskUpdates(Boolean(prefs.taskUpdates));
      } catch (err) {
        console.error("Error parsing notificationPrefs from localStorage", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "notificationPrefs",
      JSON.stringify({
        emailNotif,
        chatMessages,
        taskUpdates,
      })
    );
  }, [emailNotif, chatMessages, taskUpdates]);

  const Preferences = [
    {
      id: "email",
      label: "Email Notifications",
      description: "Get notified when your task receive a proposal",
      state: emailNotif,
      setState: setEmailNotif,
    },
    {
      id: "chat",
      label: "Chat Messages",
      description: "Receive chat messages via email",
      state: chatMessages,
      setState: setChatMessages,
    },
    {
      id: "taskupdate",
      label: "Task Updates",
      description: "Get notifed about task status changes",
      state: taskUpdates,
      setState: setTaskUpdates,
    },
  ];

  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
        <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>

        {Preferences.map((pref) => (
          <div
            key={pref.id}
            className="flex flex-row justify-between items-center mb-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{pref.label}</h3>
              <p className="text-sm text-gray-600">{pref.description}</p>
            </div>

            <label htmlFor="email" className="sr-only">
              {pref.label}
            </label>
            <input
              type="checkbox"
              id={pref.id}
              checked={pref.state}
              onChange={() => pref.setState(!pref.state)}
              className="h-3 rounded-full bg-gray-200 focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default NotificationPrefer;

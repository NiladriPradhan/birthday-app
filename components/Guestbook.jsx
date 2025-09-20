"use client";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Guestbook({ setIsOpened }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 🔥 Real-time listener
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // Add new wish
  const addMessage = async (e) => {
    e.preventDefault();
    if (!name || !message) return;
    setIsOpened(false);

    try {
      await addDoc(collection(db, "messages"), {
        name,
        message,
        timestamp: serverTimestamp(),
        date: new Date().toLocaleDateString(),
        image: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name || "Anonymous"
        )}&background=random`, // auto avatar
      });
      setName("");
      setMessage("");
    } catch (error) {
      console.error("❌ Error adding message:", error);
    }
  };

  return (
    <section className="px-6 bg-white relative">
      <h2 className="text-4xl font-extrabold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        💌 Guestbook
      </h2>

      {/* Input Form */}
      <form
        onSubmit={addMessage}
        className="w-full mx-auto flex flex-col gap-4 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40"
      >
        <input
          type="text"
          placeholder="✨ Your Name"
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 outline-none transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="🎂 Write your birthday wish..."
          className="p-3 border border-gray-300 rounded-md h-28 focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-black text-white font-semibold rounded-xl shadow hover:scale-105 hover:shadow-lg transition-transform"
        >
          🎉 Submit Wish
        </button>
      </form>

      {/* Wishes Feed */}
      {/* <div className="mt-12 max-w-2xl mx-auto h-80 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 shadow hover:shadow-md transition flex gap-4 items-start"
          >
            <img
              src={msg.image}
              alt={msg.name || "Anonymous"}
              className="w-12 h-12 rounded-full border shadow"
            />

            <div>
              <p className="text-gray-800 text-lg leading-relaxed">
                {msg.message}
              </p>
              <span className="text-sm text-pink-600 font-medium mt-2 block">
                — {msg.name || "Anonymous"}
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

"use client";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fallbackCards = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    date: "April 20, 2025",
    message: "🎉 Wishing you the happiest birthday ever! Keep shining ✨",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    date: "May 10, 2025",
    message: "💖 You make every day brighter. Happy Birthday! 🎂",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    date: "June 5, 2025",
    message: "🥳 Another year, another adventure. Have the best day!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Daisy Carter",
    date: "July 12, 2025",
    message: "🎂 Hope your day is filled with love, laughter & cake 🎉",
  },
];

// Reusable card
const MessageCard = ({ card }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="p-4 rounded-xl shadow-md bg-white mx-4 w-72 shrink-0"
  >
    <div className="flex gap-2 items-center">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={
          card.image ||
          "https://ui-avatars.com/api/?name=Guest&background=random"
        }
        alt={card.name}
      />
      <div>
        <p className="font-semibold">{card.name}</p>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-700">{card.message}</p>
    <p className="text-xs text-slate-500">📅 {card.date}</p>
  </motion.div>
);

export default function Messages() {
  const [data, setData] = useState(fallbackCards);

  // fetch data from Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (messages.length > 0) {
          setData(messages);
        }
      } catch (error) {
        console.error("❌ Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // duplicate cards to ensure seamless loop
  const loopedData = [...data, ...data];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50">
      <h2 className="text-5xl font-semibold text-center mt-10 mb-14 text-gray-900">
        💌 Birthday Wishes
      </h2>

      {/* First Row */}
      <div className="overflow-hidden w-full max-w-6xl mx-auto relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {loopedData.map((card, i) => (
            <MessageCard key={`row1-${i}`} card={card} />
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pink-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
      </div>

      {/* Second Row */}
      <div className="overflow-hidden w-full max-w-6xl mx-auto relative mt-10">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {loopedData.map((card, i) => (
            <MessageCard key={`row2-${i}`} card={card} />
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pink-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

// export default function Messages() {
//   const [data] = useState(cardsData);

//   // duplicate cards to ensure seamless loop
//   const loopedData = [...data, ...data];

//   return (
//     <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50">
//       <h2 className="text-3xl font-extrabold text-center mb-10 text-purple-700">
//         💌 Birthday Wishes
//       </h2>

//       {/* First Row (left to right) */}
//       <div className="overflow-hidden w-full max-w-6xl mx-auto relative">
//         <motion.div
//           className="flex gap-4"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         >
//           {loopedData.map((card, i) => (
//             <MessageCard key={`row1-${i}`} card={card} />
//           ))}
//         </motion.div>
//         <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pink-50 to-transparent pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
//       </div>

//       {/* Second Row (right to left) */}
//       <div className="overflow-hidden w-full max-w-6xl mx-auto relative mt-10">
//         <motion.div
//           className="flex gap-4"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         >
//           {loopedData.map((card, i) => (
//             <MessageCard key={`row2-${i}`} card={card} />
//           ))}
//         </motion.div>
//         <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pink-50 to-transparent pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
//       </div>
//     </section>
//   );
// }

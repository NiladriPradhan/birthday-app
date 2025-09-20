"use client";
import { motion } from "framer-motion";

const events = [
  { year: "2010", text: "Met amazing friends 🎓" },
  { year: "2015", text: "Graduated 🎉" },
  { year: "2020", text: "Achieved big goals 💪" },
];

export default function Timeline() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">🕒 Your Journey</h2>
      <div className="flex flex-col space-y-6 max-w-xl mx-auto">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl shadow-md bg-purple-100"
          >
            <p className="font-bold">{e.year}</p>
            <p>{e.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

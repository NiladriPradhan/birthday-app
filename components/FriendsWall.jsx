import React from "react";

const friends = [
  {
    id: 1,
    name: "Alice",
    message: "Happy Birthday 🎂🎉! Wishing you joy & laughter always.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "John",
    message: "Cheers to another year of amazing memories 🥳!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sophia",
    message: "Have a fantastic day filled with love & happiness 💖!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David",
    message: "May all your dreams come true this year 🌟!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const FriendsWall = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        🎊 Birthday Wishes from Friends 🎊
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="bg-white shadow-md rounded-2xl p-4 text-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={friend.image}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-purple-300"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {friend.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{friend.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendsWall;

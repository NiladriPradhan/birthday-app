import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Messages from "@/components/Messages";
import Timeline from "@/components/Timeline";
import WishesCarousel from "@/components/WishesCarousel";
import BirthdayCake from "@/components/BirthdayCake";
import Guestbook from "@/components/Guestbook";
import Education from "@/components/Education";
import ImageSlider from "@/components/ImageSlider";
import FriendsWall from "@/components/FriendsWall";
import GiftReveal from "@/components/GiftReveal";
import BirthdaySong from "@/components/BirthdaySong";

export default function Home() {
  return (
    <main className=" 
    min-h-screen text-gray-900 ">
      <Hero />
      <ImageSlider />
      <BirthdaySong />
      <GiftReveal />
      {/* <Messages /> */}
      {/* <FriendsWall /> */}
      {/* <Gallery /> */}
      {/* <Education /> */}
      {/* <Timeline /> */}
      {/* <Guestbook /> */}
    </main>
  );
}

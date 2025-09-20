import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Messages from "@/components/Messages";
import Timeline from "@/components/Timeline";
import Surprise from "@/components/Surprise";
import WishesCarousel from "@/components/WishesCarousel";
import BirthdayCake from "@/components/BirthdayCake";
import Guestbook from "@/components/Guestbook";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className=" 
    min-h-screen text-gray-900 ">
      <Hero />
      <Gallery />
      <Education />
      <Messages />
      {/* <Timeline /> */}
      {/* <Guestbook /> */}
      <Surprise />
    </main>
  );
}

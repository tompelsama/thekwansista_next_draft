import Main from "@/components/Experience/Main";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Tiles from "@/components/Tiles";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Gallery />
      <Tiles />
    </main>
  )
}

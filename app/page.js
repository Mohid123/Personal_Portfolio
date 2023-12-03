import Intro from "@/components/intro/intro";
import LightBulb from "@/components/light-bulb/light-bulb";
import MouseScroll from "@/components/mouse-scroll/mouse-scroll";
import Portfolio from "@/components/portfolio/portfolio";
import SpecialtyCard from "@/components/specialty-card/specialty-card";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between w-full min-h-screen mt-20">
      <div className="flex justify-between w-full">
        <Intro></Intro>
        <LightBulb></LightBulb>
      </div>
      <MouseScroll></MouseScroll>
      <div className="mt-36">
        <SpecialtyCard></SpecialtyCard>
      </div>
      <div className="mt-20">
        <Portfolio></Portfolio>
      </div>
    </main>
  )
}

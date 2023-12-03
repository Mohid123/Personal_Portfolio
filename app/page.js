import AccordionComp from "@/components/accordion/accordion";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import LightBulb from "@/components/light-bulb/light-bulb";
import MouseScroll from "@/components/mouse-scroll/mouse-scroll";
import Portfolio from "@/components/portfolio/portfolio";
import SpecialtyCard from "@/components/specialty-card/specialty-card";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen mt-20">
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
      <div className="mt-24">
        <p className="text-5xl font-semibold text-center mb-4" id="cont">Contact Me</p>
        <Contact></Contact>
      </div>
      <div className="my-28">
        <AccordionComp></AccordionComp>
      </div>
      <div className="mt-20 mb-5">
        <Footer></Footer>
      </div>
    </main>
  )
}

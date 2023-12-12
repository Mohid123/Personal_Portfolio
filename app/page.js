import AccordionComp from "@/components/accordion/accordion";
import Certificates from "@/components/certificates/certificates";
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
      <div className="flex flex-col w-full lg:flex-row lg:justify-between">
        <Intro></Intro>
        <LightBulb></LightBulb>
      </div>
      <MouseScroll></MouseScroll>
      <div className="lg:mt-36 mt-80">
        <SpecialtyCard></SpecialtyCard>
      </div>
      <div className="mt-20">
        <Portfolio></Portfolio>
      </div>
      <div className="mt-24">
        <p className="mb-4 text-4xl font-semibold text-center lg:text-5xl">Certificates & Awards</p>
        <Certificates></Certificates>
      </div>
      <div className="mt-24">
        <p className="mb-4 text-4xl font-semibold text-center lg:text-5xl" id="cont">Contact Me</p>
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

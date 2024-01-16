import dynamic from 'next/dynamic'
import AccordionComp from "@/components/accordion/accordion";
import Certificates from "@/components/certificates/certificates";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import LightBulb from "@/components/light-bulb/light-bulb";
import MouseScroll from "@/components/mouse-scroll/mouse-scroll";
import Portfolio from "@/components/portfolio/portfolio";
import adobe from '../public/adobe.svg';
import Image from 'next/image';
const SpecialtyCard = dynamic(() => import('../components/specialty-card/specialty-card'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen mt-20">
      <a href='/Mohid.pdf' download className='absolute right-0 p-1 bg-white rounded-md -top-14' title='Click to download Resume'>
        <Image src={adobe} alt="adobe_acrobat"/>
      </a>
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

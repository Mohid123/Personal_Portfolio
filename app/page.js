import LightBulb from "@/components/light-bulb/light-bulb";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between w-full min-h-screen mt-20">
      <div className="flex justify-between w-full bg-img">
        <div className="flex flex-col">
          <p className="mb-3 text-5xl font-bold">Hi, I'm Mohid.</p>
          <p className="mb-4 text-5xl font-bold">Full Stack Web Developer.</p>
          <p className="text-xl font-semibold">I have been working as a web developer for 4 years. I'm based in Pakistan.</p>
          <button className='rounded-lg bg-[#ee7600] font-semibold p-4 w-[25%] mt-5 custom-shadow'>Hire Me!</button>
        </div>
        <LightBulb></LightBulb>
      </div>
    </main>
  )
}

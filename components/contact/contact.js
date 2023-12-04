'use client'
export default function Contact() {
    return (
        <div className="flex items-stretch">
            <div className="lg:flex w-1/2 hidden bg-gray-600 bg-no-repeat bg-cover relative items-center border-l border-white">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-20 z-10">
                    <h1 className="lg:text-5xl text-4xl font-bold text-left tracking-wide">Got a project or an idea?</h1>
                    <p className="text-3xl my-4">Let's talk.</p>
                </div>
                <p className="text-xl my-4">

                </p>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
                <div className="absolute hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <form action="https://formspree.io/f/xvojjjpj" method="POST" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto" id="myForm">
                        <div className="pb-2 pt-4">
                            <input autoComplete="new-password" type="text" name="name" placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-black" required/>
                        </div>
                        <div className="pb-2 pt-4">
                            <input autoComplete="new-password" className="block w-full p-4 text-lg rounded-sm bg-black" type="email" name="Email" placeholder="Email" required/>
                        </div>
                        <div className="pb-2 pt-4">
                            <textarea className="block w-full p-4 text-lg rounded-sm bg-black" type="text" name="message" placeholder="Message" rows={8} required/>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-[#ee7600] focus:outline-none">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
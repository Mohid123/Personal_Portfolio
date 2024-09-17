'use client'
export default function Portfolio() {
    return (
        <div className="flex flex-col">
            <p className="text-4xl font-semibold text-center lg:text-5xl">Selected Works</p>
            <p className="text-sm font-semibold text-center">A few projects I've worked on along the way...</p>
            <div className='gap-4 mt-4 lg:columns-3 md:columns-2 columns-1'>
                <div onClick={() => window.open('https://nexus.depa.com', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">DEPA&reg; HRPMS & App Store</div>
                                <div className="text-sm opacity-100 ">
                                    A corporate app store for DEPA Interiors LLC, which provides a centralized
                                    location for managing the organization and its subsidiaries' applications and modules. The app store
                                    includes many features such as drag-and-drop form builder, Active Directory authentication, workflow
                                    creation with approval/rejection functionality, PDF forms, and much more.
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl opacity-100">
                                <div className="font-bold">DEPA&reg; HRPMS & App Store</div>
                                <div className="text-sm opacity-100 ">
                                    A corporate app store for DEPA Interiors LLC.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full aspect-video"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583589/klppdmolidnn0xewoqxl.png"
                    />
                </div>

                <div onClick={() => window.open('https://www.laptopoutlet.co.uk/', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">LaptopOutlet&#8482;</div>
                                <div className="text-sm opacity-100 ">
                                Laptop Outlet is one of the UK's leading tech retailers, offering new and refurbished tech devices, including laptops, smartphones, PCs, tablets, accessories, and much more. 
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl opacity-100">
                                <div className="font-bold">LaptopOutlet&#8482;</div>
                                <div className="text-sm opacity-100 ">
                                    One of the UK's leading tech retailers.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full aspect-video"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1726417721/sahkikl9p2pcb5tb0ljy.png"
                    />
                </div>

                <div onClick={() => window.open('https://box.co.uk/', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">BOX&#8482;</div>
                                <div className="text-sm opacity-100 ">
                                With over 1 million satisfied customers and 95% who would buy again, Box&#8482; has established itself as one of the top tech retailers in the UK! 
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl opacity-100">
                                <div className="font-bold">BOX&#8482;</div>
                                <div className="text-sm opacity-100 ">
                                    One of the UK's top tech retailers.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full aspect-video"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1726417866/tmcurwg0eaj4brzhuevp.png"
                    />
                </div>
                
                {/* second */}
                <div onClick={() => window.open('https://animetography-blog.com/', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-square rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Animetography Blog</div>
                                <div className="text-sm opacity-100 ">
                                Crafted as a Progressive Web App (PWA), this application is meticulously engineered for seamless
                                functionality across desktop and mobile devices alike. Its primary objective is to furnish users with a
                                robust platform for creating and overseeing blog posts, scheduling content, and facilitating personalized
                                blog post management within individual user sessions. Boasting a tailor-made, feature-rich text editor, the
                                application also incorporates essential functionalities such as email notifications and profile management
                                to ensure a comprehensive user experience
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Animetography Blog</div>
                                <div className="text-sm opacity-100 ">
                                  Customised robust blogging platform for creating and overseeing blog posts, scheduling content, and facilitating personalized
                                  blog post management within individual user sessions
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-square group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583590/e474la5ivfp0aapvxkfy.png"
                    />
                </div>
                {/* Second */}
                <div onClick={() => window.open('https://github.com/Mohid123/Social_Media_Manager', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-square rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div>
                            <div className="hidden p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 lg:block transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Dividis&reg; Social Media Manager</div>
                                <div className="text-sm opacity-100 ">
                                    Dividis&reg; Social Media Manager or SMM for short is a Social media management platform developed for
                                    football clubs to manage all social media accounts, posts and interactions from a single location! It provides
                                    features like scheduling posts, managing interactions and handling social media profiles of multiple platforms simultaneously.
                                </div>
                            </div>
                            <div className="block p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 lg:hidden transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Dividis&reg; Social Media Manager</div>
                                <div className="text-sm opacity-100 ">
                                    Dividis&reg; Social Media Manager is a Social media management platform developed for
                                    football clubs to manage all social media accounts, posts and interactions.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-square group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583589/lhjbifoax1vdpmpqjdrv.png"
                    />
                </div>
                {/* Third */}
                <div onClick={() => window.open('https://info.memorialdatainfo.com/', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">U.S Border Patrol Museum Dashboard</div>
                                <div className="text-sm opacity-100 ">
                                    This application is designed to manage and display the historical data of the United States Border patrol,
                                    from the old West, Prohibition, and WWII, right up to current operations. It serves to honor the
                                    bravery and dedication of the people who served their country as well as the patrons who fund this
                                    non-profit exhibit.
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">U.S Border Patrol Museum Dashboard</div>
                                <div className="text-sm opacity-100 ">
                                    Dashboard to manage the data of the U.S Border patrol museum.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-video group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583590/jsobjx79z6dbukjtejwf.png"
                    />
                </div>
                {/* Fourth */}
                <div onClick={() => window.open('https://github.com/Mohid123/Merchant_Panel', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-square rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div>
                            <div className="hidden p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0 lg:block"
                            >
                                <div className="font-bold">Divideals&trade; Merchant Panel</div>
                                <div className="text-sm opacity-100 ">
                                    Divideals&trade; Merchant Panel is an advanced dashboard tailored for merchants and sellers,
                                    offering a sophisticated platform to seamlessly publish and manage a diverse range of promotional
                                    content, including deals, vouchers, and products. Its comprehensive suite of features extends
                                    beyond content publication to encompass robust analytics, providing in-depth insights into sales and purchases
                                </div>
                            </div>
                            <div className="block p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0 lg:hidden"
                            >
                                <div className="font-bold">Divideals&trade; Merchant Panel</div>
                                <div className="text-sm opacity-100 ">
                                    Divideals&trade; Merchant Panel is an advanced dashboard tailored for merchants and sellers,
                                    offering a platform to publish and manage products, robust analytics and more.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-square group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583589/fcbehoid67mwhonilepm.png"
                    />
                </div>
                {/* Fifth */}
                <div onClick={() => window.open('https://github.com/Mohid123/Extsy-Web', '_blank').focus()} className="relative mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Extsy&reg; Dashboard</div>
                                <div className="text-sm opacity-100 ">
                                Extsy&reg; Dashboard is a Social media application boasting an Nft Marketplace, P2P trade coverage and a
                                secure crypto wallet to effortlessly send and receive coins or tokens. It has other features such as social media
                                groups, events, playlists, posting and content management
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="font-bold">Extsy&reg; Dashboard</div>
                                <div className="text-sm opacity-100 ">
                                Social media application boasting an Nft Marketplace, P2P trade coverage and a
                                secure crypto wallet to effortlessly send and receive coins or tokens.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-video group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701583591/ah257ut9soazlemtxopq.png"
                    />
                </div>
                {/* Sixth */}
                <div onClick={() => window.open('https://urooj-portfolio-new.vercel.app', '_blank').focus()} className="relative w-full mb-4 overflow-hidden cursor-pointer aspect-square rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div>
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <div className="font-bold">Data Sceinctist Portfolio</div>
                                <div className="text-sm opacity-100 ">
                                    This portfolio is a showcase application built with the functionality of allowing the user to edit the page
                                    content as needed. It uses IndexDb to store data and also has offline functionality
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-square group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701762472/l9ff60f0siub6p3zunib.png"
                    />
                </div>
                {/* Seventh */}
                <div onClick={() => window.open('https://pak-endo-admin.vercel.app', '_blank').focus()} className="relative w-full mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div className="hidden lg:block">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <div className="font-bold">PES Event Manager</div>
                                <div className="text-sm opacity-100 ">
                                    An event manager dashboard made for the Pakistan Endocrine Society. Features includes
                                    events, speakers, sponsors management/creation and advanced agenda creation/management
                                    with venues, times and dates and more.
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className="p-4 pb-10 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <div className="font-bold">PES Event Manager</div>
                                <div className="text-sm opacity-100 ">
                                    An event manager dashboard made for the Pakistan Endocrine Society used for managing
                                    events, venues, speakers and more.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-video group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701682674/xtadhbvjlg9xt3k1m0fj.png"
                    />
                </div>
                {/* Eigth */}
                <div className="relative w-full mb-4 overflow-hidden cursor-pointer aspect-video rounded-xl group">
                    <div onClick={() => window.open('https://github.com/Mohid123/Nft_Marketplace', '_blank').focus()} className="absolute inset-x-0 z-50 flex items-end text-white opacity-100 cursor-pointer lg:transition lg:duration-300 lg:ease-in-out lg:opacity-0 rounded-xl group-hover:opacity-100 from-black/80 to-transparent bg-gradient-to-t -bottom-2 pt-44">
                        <div>
                            <div className="p-4 pb-6 space-y-3 text-xl transition duration-300 ease-in-out transform translate-y-4 transform-gpu group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <div className="font-bold">NodeChain&reg; NFT Marketplace</div>
                                <div className="text-sm opacity-100 ">
                                    Web marketplace dashboard for selling and buying NFT's. It has features like gasless NFT'S
                                    crypto trading with secure payment and transactions and more.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="abc"
                        className="object-cover w-full transition duration-300 ease-in-out aspect-square group-hover:scale-110"
                        src="https://res.cloudinary.com/drgn2zip5/image/upload/v1701682674/m0izxewzzud5qcchzjs4.png"
                    />
                </div>
            </div>
        </div>
    )
}
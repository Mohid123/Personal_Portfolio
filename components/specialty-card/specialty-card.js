'use client'
import { useMediaQuery } from '@uidotdev/usehooks';
import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const SpecialtyCard = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
    const isLargeDevice = useMediaQuery("only screen and (min-width : 993px) and (max-width : 1200px)");
    const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");

    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            "JavaScript",
            "TypeScript",
            "C++",
            "HTML5",
            "CSS",
            "SASS",
            "Angular",
            "React JS",
            "Next JS",
            "Node JS",
            "Nest JS",
            "Express JS",
            "npm",
            "Git",
            "JSON",
            "Taiga UI",
            "Ignite UI",
            "REST",
            "Material UI",
            "Bootstrap 5",
            "Tailwind CSS",
            "RxJS",
            "Redux",
            "NgRx"
        ];
        const options = {
            radius: isSmallDevice || isMediumDevice ? '200': '300' ,
            maxSpeed: isSmallDevice || isMediumDevice ? 'fast' : 'normal',
            initSpeed: isSmallDevice || isMediumDevice ? 'fast': 'normal',
            keep: true,
        };
        TagCloud(container, texts, options)
    }, [])
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='w-full lg:w-1/2'>
                <p className='text-4xl font-semibold lg:text-5xl'>About me</p>
                <p className='mt-4 text-lg font-semibold'>
                    I'm an experienced full-stack web developer with my primary specialty being in crafting front end UI interfaces. I earned my bachelor's degree in Space Sciences in 2020. Over the past 4 years, I've honed my skills to specialize in crafting visually impactful frontends within the dynamic realm of web development.
                    <br></br>
                    <br></br>
                    I have had many opportunities to work both for companies and individuals which has allowed me to gain significant amounts of experience and knowledge.
                    I have worked on projects and products of a vast spectrum ranging from student portfolios and websites to E-Commerce, Healthcare, Web 3.0, GIS and much more.
                    <br></br>
                    <br></br>
                    Away from the screen, I'm an avid reader, delving into the worlds of literature and anime for inspiration. On the field, my passion for strategy and teamwork shines through in my love for cricket and football. Coding is more than a profession for me; it's a compelling journey of exploration and innovation. Let's collaborate and bring your digital aspirations to fruition! </p>
            </div>
            <div className="relative flex items-center justify-center w-full overflow-hidden lg:justify-end bg-inherit">
                <span className='font-semibold lg:text-base text-[12px] tagcloud'></span>
            </div>
        </div>
    )
}

export default SpecialtyCard
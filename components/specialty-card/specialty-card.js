'use client'
import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const SpecialtyCard = () => {
    useEffect(() => {
        return () => {
            const container = '.tagcloud';
            const texts = [
                "JavaScript",
                "TypeScript",
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
                "Material UI",
                "Bootstrap 5",
                "Tailwind CSS",
                "RxJS",
                "Redux",
                "NgRx"
            ];
            const options = {
                radius: 350 ,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            };
            TagCloud(container, texts, options)
        }
    }, [])
    return (
        <div className='flex justify-between'>
            <div className='w-1/2'>
                <p className='text-5xl font-semibold'>About me</p>
                <p className='mt-4 text-lg font-semibold'>I'm an experienced full-stack web developer with a unique background in space sciences, having earned my bachelor's degree in 2020. Over the past 4 years, I've honed my skills to specialize in crafting visually impactful frontends within the dynamic realm of web development. Away from the screen, I'm an avid reader, delving into the worlds of literature and anime for inspiration. On the field, my passion for strategy and teamwork shines through in my love for cricket and football. Coding is more than a profession for me; it's a compelling journey of exploration and innovation. Let's collaborate and bring your digital aspirations to fruition! </p>
            </div>
            <div className="relative flex justify-end w-full bg-inherit">
                <span className='tagcloud'></span>
            </div>
        </div>
    )
}

export default SpecialtyCard
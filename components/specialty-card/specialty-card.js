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
                radius: 300 ,
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
                <p className='mt-4 text-lg font-semibold'>About me About me About me About me About me About me About me About me About me About me About me About me About me About me About me About me About me </p>
            </div>
            <div className="relative flex items-center justify-end w-full bg-inherit">
                <span className='tagcloud'></span>
            </div>
        </div>
    )
}

export default SpecialtyCard
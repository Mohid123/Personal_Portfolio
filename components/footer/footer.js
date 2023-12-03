import Image from "next/image";
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';
import github from '../../public/github.svg';

export default function Footer() {
    return (
        <div className="w-full text-center border-t border-white pt-4">
            <p className="text-xl font-semibold">Mohid.</p>
            <p className="text-sm font-semibold">Full Stack Web Developer</p>
            <div className="flex justify-center gap-x-3 mt-4">
                <a href="https://twitter.com/AniMohid" target="_blank">
                    <Image src={twitter} alt="twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-mohid/" target="_blank">
                    <Image src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/Mohid123" target="_blank">
                    <Image src={github} alt="github"/>
                </a>
            </div>
            <p className="text-sm font-semibold mt-4">&copy; 2024 Mohid. All Rights Reserved</p>
        </div>
    )
}
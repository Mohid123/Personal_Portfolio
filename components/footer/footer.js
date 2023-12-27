import Image from "next/image";
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';
import github from '../../public/github.svg';
import stackoverflow from '../../public/stackoverflow.svg';

export default function Footer() {
    return (
        <div className="w-full pt-4 text-center border-t border-white">
            <p className="text-xl font-semibold">Mohid.</p>
            <p className="text-sm font-semibold">Full Stack Web Developer</p>
            <div className="flex justify-center mt-4 gap-x-3">
                {/* <a href="https://twitter.com/AniMohid" target="_blank">
                    <Image src={twitter} alt="twitter"/>
                </a> */}
                <a href="https://www.linkedin.com/in/muhammad-mohid/" target="_blank">
                    <Image src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/Mohid123" target="_blank">
                    <Image src={github} alt="github"/>
                </a>
                <a href="https://stackoverflow.com/users/12220290/mohid" target="_blank">
                    <Image src={stackoverflow} alt="so" width={17} height={17} />
                </a>
            </div>
            <p className="mt-4 text-sm font-semibold">&copy; 2024 Mohid. All Rights Reserved</p>
        </div>
    )
}
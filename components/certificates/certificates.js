import Image from "next/image";
import Angular from '../../public/Angular2.png';
import AngularJS from '../../public/AngularJS.png';
import DataStruct from '../../public/Data_Struct.jpg';
import Bootstrap from '../../public/Bootstrap.png';
import HTML from '../../public/HTML.png';
import Nodejs from '../../public/Nodejs.png';
import QT from '../../public/QT.jpeg';

export default function Certificates() {
    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <Image src={Angular} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
                <Image src={AngularJS} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
                <Image src={DataStruct} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
                <Image src={Bootstrap} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
                <Image src={HTML} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
                <Image src={Nodejs} className="lg:col-span-4 md:col-span-6 col-span-full" alt="cert"></Image>
            </div>
            <div className="flex justify-center items-center mt-6">
                <Image src={QT} alt="cert" width={470} height={430}></Image>
            </div>
        </div>
    )
}
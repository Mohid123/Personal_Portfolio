import bulbOff from '../../public/bulb-off.png';
import bulbOn from '../../public/bulb-on.png';
import Image from 'next/image'

export default function LightBulb() {
    return (
        <div className='relative w-[300px] lg:w-[500px] lg:h-[300px]'>
            <Image src={bulbOff} alt='off_bulb' width={500} height={600} priority className='absolute'></Image>
            <Image src={bulbOn} alt='on_bulb' width={500} height={600} priority className='absolute bulb-on'></Image>
        </div>
    )
}
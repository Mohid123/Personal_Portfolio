'use client';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevron from '../../public/chevron.svg';
import styles from './accordion.module.css';
import Image from 'next/image';

const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <Image className={styles.chevron} src={chevron} alt="Chevron Down" />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

export default function AccordionComp() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='border border-white rounded-xl px-2 py-1'>FAQs</p>
        <p className='lg:text-5xl text-4xl font-semibold mt-2 text-center'>Frequently Asked Questions</p>
        <div className='my-6 w-full'>
            <Accordion transition transitionTimeout={250} className='border border-white rounded-2xl px-6 py-4'>
                <AccordionItem header="Where are you from?">
                    I am from Islamabad, Pakistan.
                </AccordionItem>

                <AccordionItem header="What is your hourly rate?">
                    My hourly rate is 40$.
                </AccordionItem>

                <AccordionItem header="What are your working hours?">
                    My standard working hours are the usual 9-5. But based on the client&apos;s location and requirements I adjust my hours.
                </AccordionItem>

                <AccordionItem header="What is your phone number and email?">
                    My phone number is +92-300-4313277. My email is muhammadmohid141@gmail.com. I prefe to be contacted via email.
                </AccordionItem>

                <AccordionItem header="What kind of job type are you open to working for?">
                    I am open to working Full-Time, Part Time as well as on a Contract basis.
                </AccordionItem>

                <AccordionItem header="What kind of projects do you work on?">
                    I work on any and all kinds of projects related to the web. Corporate applications, Web 3.0, Fintech, E-Commerce and many more.
                </AccordionItem>

                <AccordionItem header="What is your area of expertise?">
                    Although I work on both the front and the back end, front end is my first love and my area of expertise.
                </AccordionItem>

            </Accordion>
        </div>
    </div>
  );
}
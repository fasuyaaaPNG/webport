import React from 'react';
import { Chivo_Mono } from 'next/font/google';
import Image from 'next/image';

const chivoMono = Chivo_Mono({
  weight: ['100', '300', '400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutPage() {
  return (
    <div className="border bg-[#DAD5DF] h-[289px] xl:h-[342px] rounded-[12px] flex flex-row">
      <div id="boxKiri" className="bg-[url('/Profile/profile.png')] bg-cover rounded-[12px] border-4 border-[#0C2937] w-[289px] h-[289px] xl:w-[340px] xl:h-[340px]"></div>
      <div className="secKanan xl:w-[860px] w-[632px] pt-[30px] xl:pt-[40px] pb-[40px]">
        <div className={`${chivoMono.className} flex items-center gap-[27px] xl:gap-[50px] w-max ml-[60px] mb-[29px]`}>
            <p className='font-extrabold text-[16px] xl:text-[18px] text-[#624D74]'>
                DHAVIN FASYA ALVIYANTO
            </p>
            <div className='flex gap-[16px] xl:gap-[20px] text-[12px] xl:text-[14px]'>
                <p>
                    April 12th, 2007
                </p>
                <p>
                    —
                </p>
                <p>
                    SMK Negeri 7 Semarang
                </p>
            </div>
        </div>
        <hr className='w-full bg-[#624D74] border-[#624D74] mb-[23px] xl:mb-[33px] h-1'/>
        <div className={`${chivoMono.className} flex flex-col justify-between ml-[60px] w-[540px] xl:w-[780px]`}>
            <p className='text-[12px] xl:text-[14px] mb-[50px] xl:mb-[80px]'>
                Hey, im using WhatsApp!:D
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur et animi soluta sed. Est necessitatibus repellat provident, asperiores ea similique pariatur fuga aperiam assumenda eveniet officia saepe inventore! Perspiciatis illo veritatis maxime nisi magnam non odio temporibus.
            </p>
            <i className='text-[8px] xl:text-[10px]'>
                “Your motto/quotes”
            </i>
        </div>
      </div>
    </div>
  );
}
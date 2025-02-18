'use client'
import { Chivo_Mono } from 'next/font/google';
import React, { useState } from 'react';
import Image from 'next/image';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillPage';
import ProjectPage from './components/ProjectPage';
import ToolsPage from './components/ToolsPage';
import CertificatesPage from './components/CertificatesPage';

const chivoMono = Chivo_Mono({
  weight: ['100', '300', '400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />;
      case 'skill':
        return <SkillPage />;
      case 'project':
        return <ProjectPage />;
      case 'tools':
        return <ToolsPage />;
      case 'certificates':
        return <CertificatesPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <> 
      <div id="headerWrapper">
        <div className='absolute h-[123px] w-full flex justify-between'>
          <div className="kiri flex ">
            <Image 
              src="/header/lt1.png" 
              alt="Header Left 1" 
              width={207} 
              height={115}
              className="h-[115px] w-[207px]"
            />
            <Image 
              src="/header/lt2.png" 
              alt="Header Left 2" 
              width={139} 
              height={86}
              className="h-[86px] w-[139px] relative right-[40px]"
            />
          </div>
          <div className="kanan flex flex-row-reverse">
            <Image 
              src="/header/rt1.png" 
              alt="Header Right 1" 
              width={50} 
              height={47}
              className="h-[47px] w-[50px]"
            />
            <Image 
              src="/header/rt2.png" 
              alt="Header Right 2" 
              width={156} 
              height={83}
              className="h-[83px] w-[156px] relative left-[50px]"
            />
            <Image 
              src="/header/rt3.png" 
              alt="Header Right 3" 
              width={218} 
              height={123}
              className="h-[123px] w-[218px] relative left-[190px]"
            />
          </div>
        </div>
        <div id='Header' className={`${chivoMono.className} text-[#DAD5DF] bg-[#0C2937] h-[123px] flex items-center`}>
          <div className="tracking-[1px] relative top-[5px] flex flex-row items-end flex-wrap ml-auto mr-auto justify-between w-[90.234%]">
            <div>
              <p className={`text-[24px] font-normal`}>
                Dhavin&apos;s Space ——
              </p>
              <p className='text-[16px] font-thin'>
                Hello there, welcome to my world
              </p>
            </div>
            <p className='text-[16px] font-thin border border-[#624D74] flex items-center p-[10px] rounded-[100px]'>
              Coding Enthusiast
            </p>
          </div>
        </div>
        <hr className='bg-[#624D74] border-[#624D74] w-full mt-[28px]'/>
        <div id="nav" className={`${chivoMono.className} font-normal text-[12px] xl:text-[14px] w-[784px] xl:w-[920px] flex justify-between ml-auto mr-auto mt-[23px] items-center`}>
          <a className='hover:cursor-pointer text-[16px] xl:text[18px] border border-[#624D74] rounded-[100px] p-[10px]'  onClick={() => setActivePage('about')}>
            About Me 0_o?
          </a>
          <a className='hover:cursor-pointer' onClick={() => setActivePage('skill')}>
            My Skill (｡- .•)?
          </a>
          <a>
            My Project (¬_¬)?
          </a>
          <a>
            Tools I Use ( •̀ - •́ )?
          </a>
          <a>
            Certificates✰
          </a>
        </div>
        <div id="content" className="mt-[67px] w-[90.234%] xl:w-[1200px] ml-auto mr-auto">
          {renderPage()}
        </div>
        <div className='absolute bottom-0 z-[-1] ml-auto mr-auto'>
          <Image 
            src="/footer/bk1.png" 
            alt="Footer Background" 
            width={218} 
            height={261}
            className="relative xl:w-[268px]"
          />
        </div>
      </div>
    </>
  );
}

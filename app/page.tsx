'use client'
import { Chivo_Mono } from 'next/font/google';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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

// Definisikan tipe untuk key halaman
type PageKey = 'about' | 'skill' | 'project' | 'tools' | 'certificates';

export default function Home() {
  // Hanya mendefinisikan state sekali dengan tipe khusus
  const [activePage, setActivePage] = useState<PageKey>('about');

  // Fungsi untuk merender halaman dengan animasi transisi
  const renderPage = () => {
    const pages: Record<PageKey, React.JSX.Element> = {
      about: <AboutPage />,
      skill: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SkillPage />
        </motion.div>
      ),
      project: <ProjectPage />,
      tools: <ToolsPage />,
      certificates: <CertificatesPage />,
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
        >
          {pages[activePage]}
        </motion.div>
      </AnimatePresence>
    );
  };

  // Definisikan array navigasi dengan tipe khusus untuk key
  const navItems: { name: string; key: PageKey }[] = [
    { name: "About Me 0_o?", key: "about" },
    { name: "My Skill (｡- .•)?", key: "skill" },
    { name: "My Project (¬_¬)?", key: "project" },
    { name: "Tools I Use ( •̀ - •́ )?", key: "tools" },
    { name: "Certificates✰", key: "certificates" }
  ];

  return (
    <> 
      <div id="headerWrapper">
        <div className="absolute h-[123px] w-full flex justify-between">
          <div className="kiri flex">
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
        
        <div id="Header" className={`${chivoMono.className} text-[#DAD5DF] bg-[#0C2937] h-[123px] flex items-center`}>
          <div className="tracking-[1px] relative top-[5px] flex flex-row items-end flex-wrap ml-auto mr-auto justify-between w-[90.234%]">
            <div>
              <motion.p
                className="text-[24px] font-normal"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Dhavin&apos;s Space ——
              </motion.p>
              <motion.p
                className="text-[16px] font-thin"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Hello there, welcome to my world
              </motion.p>
            </div>
            <motion.p
              className="text-[16px] font-thin border border-[#624D74] flex items-center p-[10px] rounded-[100px]"
              initial={{ color: "#dad5df00" }}
              animate={{ color: "#DAD5DF" }}
              transition={{ duration: 1, delay: 1 }}
            >
              Coding Enthusiast
            </motion.p>
          </div>
        </div>

        <hr className="bg-[#624D74] border-[#624D74] w-full mt-[28px]" />

        {/* Navigation Bar dengan Animasi */}
        <div id="nav" className={`${chivoMono.className} font-normal text-[12px] xl:text-[14px] w-[784px] xl:w-[920px] flex justify-between ml-auto mr-auto mt-[23px] items-center`}>
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              className={`hover:cursor-pointer p-[10px] rounded-[100px] transition-all duration-300 ${
                activePage === item.key
                  ? "text-[#000000] text-[16px] xl:text-[18px] border border-[#624D74]"
                  : "text-gray-400 hover:text-[#000000]"
              }`}
              onClick={() => setActivePage(item.key)}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div id="content" className="mt-[67px] w-[90.234%] xl:w-[1200px] ml-auto mr-auto">
          {renderPage()}
        </div>

        <Image
          src="/footer/bk1.png"
          loading="lazy"
          alt="Footer Background"
          width={218}
          height={261}
          className="absolute bottom-0 xl:w-[268px] xl:-[298px]"
        />
      </div>
    </>
  );
}

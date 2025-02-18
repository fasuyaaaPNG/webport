import { Chivo_Mono } from 'next/font/google';

const chivoMono = Chivo_Mono({
  weight: ['100', '300', '400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <> 
      <div id="headerWrapper">
        <div className='absolute h-[123px] w-full flex justify-between'>
          <div className="kiri">
            <img src="./header/kt1.png" alt="" className=' h-[47px] w-[50px]' />
          </div>
          <div className="kanan">
            <img src="./header/kt1.png" alt="" className=' h-[47px] w-[50px]' />
          </div>
        </div>
        <div id='Header' className={`${chivoMono.className} bg-[#0C2937] h-[123px] flex items-center`}>
          <div className="tracking-[1px] flex flex-row items-end flex-wrap ml-auto mr-auto justify-between w-[90.234%]">
            <div>
              <p className={`text-[24px] font-normal text-[#DAD5DF]`}>
                Dhavin's Space ——
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
      </div>
    </>
  );
}

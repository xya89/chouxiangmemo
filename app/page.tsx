import Image from "next/image";
import Link from "next/link";
import disclaimer from './data/disclaimer.json'
import { Noto_Serif_SC } from 'next/font/google'

import { Icon_AngryFace } from "public/icon";

const noto = Noto_Serif_SC({
  weight: '700',
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  const disclaimerText = disclaimer[0].target;
  const replaceText = (text) => {
    return text.replace(/本人/g, "本站")
  }

  return (
    <section className="flex flex-row justify-center w-full">
      <div className="container lg:mx-auto space-y-6 justify-center w-full items-center">
        {/* disclaimer */}
        <div className="flex flex-col flex-row mt-4 lg:flex-row justify-center items-center">
          <div className="flex flex-col text-center mb-2 lg:mb-0 text-bold">
            <p className="text-red-600 text-7xl" style={noto.style}>
              严正声明
            </p>
            <p className="mt-4 text-black dark:text-white lg:mt-20">
              {replaceText(disclaimerText).split('*').map((line, idx) => (
                <span key={idx}>{line}<br /></span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4 mx-4 lg:mt-20">
          <Link id={'enter'} href={'/'}>
            <button
              className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mx-8
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
              style={noto.style}
            >
              进入
            </button>
          </Link>
          <Link id={'exit'} href="https://www.baidu.com/">
            <button
              className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mx-8
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
              style={noto.style}
            >
              离开
            </button>
          </Link>
        </div>
        <div
          className="flex flex-col flex-row mt-4 lg:flex-row justify-center items-center">
          {/* <img src="/Genshin_Impact.webp" alt="text" /> */}
          {/* <Icon_AngryFace /> */}
        </div>



      </div>
    </section>
  );
}

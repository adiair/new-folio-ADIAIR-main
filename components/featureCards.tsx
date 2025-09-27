"use client";

import { useRef } from "react";
import { Crown, Coffee, Music2, Notebook } from "lucide-react";

export default function FeatureCards() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen mb-30 text-white flex flex-col items-center justify-center p-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-20 max-w-6xl">

        {/* Current Focus Card */}
        <div className="bg-neutral-900 border-t-2 border-dashed rounded-xl p-5 shadow-lg">
          <p className="uppercase flex gap-2 justify-left items-center text-gray-400 text-xs mb-2">
            <div className="relative flex h-2 w-2">
              <span className="relative inline-flex animate-pulse rounded-full h-2 w-2 bg-amber-400"></span>
            </div>
            Current Focus
          </p>
          <p className="flex items-center space-x-2 text-lg font-semibold">
            <span className="flex gap-2 items-center">
              <Crown className="h-5 w-5 text-emerald-400" />
              Backend Architecture
            </span>
          </p>
        </div>

        {/* Learning Card */}
        <div className="bg-neutral-900 border-t-2 border-dashed rounded-xl p-5 shadow-lg">
          <p className="uppercase flex gap-2 justify-left items-center text-gray-400 text-xs mb-2 space-x-2">
            <div className="">
              <Notebook className="h-4 w-4 text-emerald-600 -rotate-12" />
            </div>
            Learning
          </p>
          <p className="font-semibold mb-2">SpringBoot</p>
          <div className="w-full bg-neutral-700 rounded-full h-2 mb-1">
            <div className="border-2 border-emerald-800 bg-emerald-400 h-2 rounded-full w-[60%]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>In progress</span>
            <span>60%</span>
          </div>
        </div>

        {/* Coffee Count Card */}
        <div className="bg-neutral-900 border-t-2 border-dashed rounded-xl p-5 shadow-lg">
          <p className="uppercase flex gap-2 justify-left items-center text-gray-400 text-xs mb-2">
            <div className="relative flex h-2 w-2">
              <span className="relative animate-pulse inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </div>
            Coffee Count
          </p>
          <p className="relative text-2xl flex items-center space-x-2">
            <Coffee className="h-5 w-5 text-emerald-400" />
            Coffee
            <span className="absolute text-sm right-0 text-black font-semibold ml-2 bg-emerald-600 rounded-full px-2">2</span>
          </p>
          {/* <p className="text-xs mt-1 text-black font-semibold border-3 bg-emerald-500 border-emerald-800 h-6 w-30 flex justify-center items-center overflow-hidden rounded-full">
            Buy Me A Coffee
          </p> */}
        </div>

        {/* Now Playing Card (click to play) */}
        <div
          className="bg-neutral-900 border-t-2 border-dashed rounded-xl p-5 shadow-lg cursor-pointer hover:scale-98"
          onClick={handleClick}
        >
          <p className="uppercase flex gap-2 justify-left items-center text-gray-400 text-xs mb-2 space-x-2">
            <div className="">
              <Music2 className="h-4 w-4 rotate-15 text-emerald-600" />
            </div>
            Now Playing
          </p>
          <p className="font-semibold mb-2">
            2002 ft. Anne-Marie
          </p>
          <div className="w-full bg-neutral-700 rounded-full h-2 mb-1">
            <div className="border-2 border-emerald-800 bg-emerald-400 h-2 rounded-full w-[45%]"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>1:25</span>
            <span>4:10</span>
          </div>
        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/Anne-Marie - 2002 (minus).mp3" />

      </div>

      {/* Rest of your content remains unchanged */}
      <h1 className="text-2xl uppercase font-bold mt-20 mb-3">
        <span className="text-indigo-400 font-bold text-3xl">/</span>now
      </h1>
      <p className="text-gray-400 mb-10 text-center max-w-2xl">
        A snapshot of what I'm focused on at this moment in time, random thoughts, and digital
        sticky notes from my workspace.
      </p>

      {/* Section Two and Remaining Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-4xl p-5">
        {/* Current Project Card */}
        <div className="relative bg-emerald-500 text-black rotate-[-2deg] rounded-xl p-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full"></div>
          <h2 className="italic text-sm mb-2">Current Project</h2>
          <h3 className="font-bold text-xl mb-3">Reprint</h3>
          <p className="mb-5 text-sm leading-relaxed">
            • A Book collection encyclopedia
            • Implemented image-based book entry and a summary focused catalog for quick discovery
            
            • Delivered intuitive UI, ensuring smooth browsing and search across devices.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-emerald-600 text-xs px-2 py-1 rounded-md">Neon PostgreSQL</span>
            <span className="bg-emerald-600 text-xs px-2 py-1 rounded-md">Express</span>
            <span className="bg-emerald-600 text-xs px-2 py-1 rounded-md">Node</span>
          </div>
          <div className="bg-emerald-400 w-full rounded-full h-2">
            <div className="bg-amber-400 border-2 border-amber-800 h-2 rounded-full w-[90%]"></div>
          </div>
          <p className="text-xs mt-1 text-right">90% complete</p>
        </div>

        {/* Reading List Card */}
        <div className="relative bg-emerald-300 text-black rounded-xl rotate-[1.5deg] p-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full"></div>
          <h2 className="italic text-sm mb-4">To-Do's</h2>
          <ul className="space-y-3">
            <li>
              <span className="inline-block w-3 h-3 bg-emerald-700 rounded-sm shadow-lg mr-2"></span>
              <span className="font-semibold">Animations in Web designs</span>
              <span className="text-sm block text-gray-800">Learn prototyping projects in Figma</span>
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-emerald-700 rounded-sm shadow-lg mr-2"></span>
              <span className="font-semibold">Authentication in Web Apps</span>
              <span className="text-sm block text-gray-800">End to end auth functionality</span>
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-emerald-700 rounded-sm shadow-lg mr-2"></span>
              <span className="font-semibold">Learn something New</span>
              <span className="text-sm block text-gray-800">have fun ;</span>
            </li>
          </ul>
        </div>

        {/* Random Thoughts Card */}
        <div className="relative bg-emerald-500 text-black rotate-[-2deg] rounded-xl p-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow-lg rounded-full"></div>
          <h2 className="italic text-sm mb-4">Random</h2>
          <h3 className="font-bold text-lg mb-3">
            Think ...
          </h3>
          <p className="text-sm mb-5 leading-relaxed">
            ...
          </p>
          <label className="flex items-center text-sm">
            ...
          </label>
        </div>
      </div>

      {/* Latest Blog Post and Get in Touch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 w-full max-w-6xl">
        <div className="bg-neutral-900 rounded-xl p-6 shadow-lg relative">
          <p className="uppercase text-gray-400 text-xs mb-2">Latest Blog Post</p>
          <h3 className="text-xl font-semibold mb-2">Wanted to write</h3>
          <p className="text-sm text-gray-300 mb-3">
            An under the hood look at how Rust iterators work.
          </p>
          <a 
          // href={`/blog/1`} you can update it and then make ths later
          href=""
          className="text-emerald-400 text-sm font-medium hover:underline">
            Continue reading →
          </a>
          <span className="absolute top-5 right-5 border-2 border-emerald-500 text-xs px-3 py-1 rounded-full">✨ NEW</span>
        </div>

        <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <span className="bg-emerald-600 h-4 w-4 border-2 border-white rounded-full"></span>
            Get In Touch
          </p>
          <p className="text-sm text-gray-300 mb-5">
            Have an exciting project in mind or just want to chat about tech? I'm always open to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="border-emerald-600 border-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition text-center"
            >
              Contact Me →
            </a>
            <span className="bg-neutral-800 px-4 py-2 rounded-lg text-sm text-center break-all">
              adi310kokashe@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

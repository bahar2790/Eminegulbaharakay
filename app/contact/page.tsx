"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  useEffect(() => {
    window.location.href = "mailto:baharakay722@gmail.com";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#2d2b55] to-[#1a1a2e] px-4">
      {/* Üst kısım: Ad ve Logo */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/imza.png"
          alt="Emine Gülbahar Akay Logo"
          width={120}
          height={120}
          className="rounded-full shadow-lg mb-4 bg-white p-2"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center drop-shadow-lg">Emine Gülbahar Akay</h1>
        <p className="text-lg md:text-xl text-white/80 text-center mb-2">Data Scientist & Data Analyst & Business Analyst</p>
      </div>

      {/* Alt kısım: E-posta kutusu */}
      <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6 text-center">
          If your email app did not open automatically, please click the address below to contact me.
        </p>
        <a
          href="mailto:baharakay722@gmail.com"
          className="text-purple-700 text-xl font-bold underline hover:text-purple-900 transition mb-2"
        >
          baharakay722@gmail.com
        </a>
      </div>
    </div>
  );
}
  
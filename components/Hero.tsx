"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { FiGithub, FiFacebook } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-600 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>CSE Student & Software Developer</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
          Hi, I'm <span className="text-emerald-500 underline decoration-emerald-500/30">Aminur Rahman Bhuiyan Tahsin</span>
        </h1>
        
        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
          Computer Science & Engineering student passionate about database engineering, backend systems, and web technologies.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://github.com/AminurRahmanBhuiyanTahsin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 rounded-xl transition duration-200"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/Aminur.Rahman.Bhuiyan.Tahsin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 rounded-xl transition duration-200"
            aria-label="Facebook Profile"
          >
            <FiFacebook className="w-5 h-5" />
          </a>
          <a
            href="mailto:aminurtahsin0409@gmail.com"
            className="p-3 bg-white border border-zinc-200 hover:border-emerald-500 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 rounded-xl transition duration-200"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/AminurRahmanBhuiyanTahsin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20"
            >
            Explore Repos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Avatar Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white shadow-xl">
          <Image
            src="/images/Tahsin_portfolio.png"
            alt="Aminur Rahman Bhuiyan Tahsin"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
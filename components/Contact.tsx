"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FiGithub, FiFacebook } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* Left Side: Text and Socials */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Let's Work Together</h2>
            <p className="text-zinc-600 leading-relaxed">
              Have a question, a project idea, or want to collaborate? Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="space-y-4">
            <a href="mailto:aminurtahsin0409@gmail.com" className="flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition">
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl"><Mail className="w-5 h-5" /></div>
              aminurtahsin0409@gmail.com
            </a>
            <a href="https://github.com/AminurRahmanBhuiyanTahsin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition">
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl"><FiGithub className="w-5 h-5" /></div>
              GitHub Profile
            </a>
            <a href="https://www.facebook.com/Aminur.Rahman.Bhuiyan.Tahsin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 hover:text-emerald-600 transition">
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl"><FiFacebook className="w-5 h-5" /></div>
              Facebook Profile
            </a>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form className="space-y-5 bg-zinc-50 p-8 rounded-2xl border border-zinc-200" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">Your Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Your Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" placeholder="john@example.com" required />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none" placeholder="How can I help you?" required></textarea>
          </div>
          
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20">
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
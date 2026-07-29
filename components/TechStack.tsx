"use client";

import { motion } from "framer-motion";
import { Database, Terminal, Cpu, Layers } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      title: "Core Languages",
      icon: <Terminal className="w-5 h-5 text-emerald-600" />,
      skills: ["C / C++", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Databases & Backend",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      skills: ["MySQL", "MariaDB", "XAMPP Architecture", "Database Schema Design"],
    },
    {
      title: "Frameworks & Systems",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      skills: ["Next.js", "React", "Tailwind CSS", "Git & GitHub Workflow"],
    },
  ];

  return (
    <section id="techstack" className="py-20 border-t border-zinc-200">
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-zinc-900 mb-10"
      >
        Technical Capabilities
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-zinc-50 border border-zinc-200 hover:border-emerald-300 rounded-2xl p-6 transition duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-100 rounded-xl border border-emerald-200">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-zinc-600 text-sm flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-zinc-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-zinc-900">About Me</h2>
        <p className="text-zinc-600 text-lg leading-relaxed">
          I am a Computer Science & Engineering student at university, focused on understanding software systems from the ground up—from relational database architecture and query optimization to modern frontend frameworks.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          When I'm not writing code or analyzing database schemas, I actively engage in structured project planning and logistics, coordinating competitive formats and managing digital communities.
        </p>
      </motion.div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/AminurRahmanBhuiyanTahsin/repos?sort=updated&per_page=6"
        );
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub repos", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-emerald-500" />
            Live GitHub Repositories
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            Fetched dynamically directly from my GitHub account
          </p>
        </div>
        <a
          href="https://github.com/AminurRahmanBhuiyanTahsin?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm text-emerald-600 hover:underline font-medium"
        >
          View All Repos <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-48 bg-zinc-100 rounded-2xl border border-zinc-200 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-zinc-200 hover:border-emerald-400 rounded-2xl p-6 flex flex-col justify-between transition duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-lg group-hover:text-emerald-500">
                    <FiGithub className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition" />
                    <span className="truncate max-w-[180px]">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition" />
                </div>
                <p className="text-zinc-600 text-sm line-clamp-3 leading-relaxed mb-6">
                  {repo.description || "No description provided for this repository."}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 text-xs text-zinc-500">
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-md font-medium">
                  {repo.language || "Code"}
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-zinc-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
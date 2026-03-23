import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed w-screen bg-white/95 dark:bg-slate-900/95 border-b-[0.5px] border-slate-200 dark:border-slate-800 ">
      <nav className="max-w-[85%] flex justify-between items-center mx-auto px-6 py-4">
        <Link to='#' className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          Portfolio
        </Link>
        <div className="md:flex items-center gap-8 text-lg text-slate-700 dark:text-slate-300">
          <Link to='#about' className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link to='#projects' className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Projects
          </Link>
          <Link to='#contact' className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex gap-4 text-gray-700 justify-center items-center">
          <button
            onClick={toggleTheme}
            className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className='size-5' />}
          </button>
          <Link to='https://github.com/vqsantini'>
            <Github className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-5" />
          </Link>
          <Link to='https://www.linkedin.com/in/victor-santini-8964bb356/'>
            <Linkedin className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-5" />
          </Link>
          <Link to='/'>
            <Mail className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-5" />
          </Link>
        </div>
      </nav>
    </div>
  )
}
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [path, setPath] = useState('/')
  const navigate = useNavigate()

  function handlePath(path: string) {
    setPath(path)
    return (setPath(path))
  }

  function handleAboutClick(e: React.MouseEvent) {
    e.preventDefault()
    handlePath('/')
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 150)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed w-screen z-50 bg-white/95 dark:bg-slate-900 border-b-[0.5px] border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl flex justify-between sm:grid sm:grid-cols-[1fr_2fr_1fr] items-center mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <Link to='#' className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent md:text-2xl">
          Portfolio
        </Link>
        <div className="hidden sm:flex items-center justify-center gap-8 md:text-lg text-slate-700 dark:text-slate-300">
          <Link to="/" onClick={handleAboutClick} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link to='/projects' onClick={() => handlePath('projects')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Projects
          </Link>
          <Link to='/contact' onClick={() => handlePath('contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex gap-4 text-gray-700 justify-end items-center">
          <button
            onClick={toggleTheme}
            className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="size-4 md:size-5" /> : <Moon className='size-4 md:size-5' />}
          </button>
          <Link to='https://github.com/vqsantini'>
            <Github className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-4 md:size-5" />
          </Link>
          <Link to='https://www.linkedin.com/in/victor-santini-8964bb356/'>
            <Linkedin className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-4 md:size-5" />
          </Link>
          <Link to='/'>
            <Mail className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors size-4 md:size-5" />
          </Link>
        </div>
      </nav>
      <div className="flex justify-center items-center dark:bg-slate-900 sm:pb-0 pb-4">
        <div className="flex sm:hidden items-center gap-8 md:text-lg text-slate-700 dark:text-slate-300">
          <Link to="/" onClick={handleAboutClick} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link to='/projects' onClick={() => handlePath('projects')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Projects
          </Link>
          <Link to='/contact' onClick={() => handlePath('contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Introduction() {
  return (
    <section id="about" className="h-[calc(100vh-64px)] flex items-center justify-center px-6 pt-20 bg-white dark:bg-slate-900 transition-colors overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-200 dark:border-slate-700 transition-colors">
            Available for opportunities
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-100 transition-colors">
          Hi, I'm a <span></span>
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-colors">
          Specializing in AI-powered applications, machine learning, and modern web development.
          Passionate about building innovative solutions that make a difference.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400 transition-colors">
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">15+</div>
            <div>Projects Completed</div>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">5+</div>
            <div>Years Experience</div>
          </div>
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700"></div>
          <div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">10+</div>
            <div>Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
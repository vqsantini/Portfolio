import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">Contact</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full mb-4">
              <Mail className="size-6" />
            </div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Email</h3>
            <a href="mailto:victor.g.santz@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              victor.g.santz@gmail.com
            </a>
          </div>

          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full mb-4">
              <Phone className="size-6" />
            </div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Phone Number</h3>
            <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              +55 (47) 98813-5454
            </a>
          </div>

          <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full mb-4">
              <MapPin className="size-6" />
            </div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Location</h3>
            <p className="text-slate-600 dark:text-slate-400">Jaraguá do Sul, SC</p>
          </div>
        </div>

        <form className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="Project inquiry"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

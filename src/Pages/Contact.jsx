import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">

      {/* 🔵 Hero Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-center gap-16">

        {/* 📝 Left Content */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            Have questions, suggestions, or just want to say hello?
            Fill out the form and our team will respond shortly.
          </p>

          {/* Subtle Divider */}
          <div className="mt-8 w-20 h-1 bg-cyan-500 rounded-full"></div>
        </div>

        {/* 📩 Glass Form Card */}
        <div className="flex-1 w-full max-w-lg bg-slate-900/60 backdrop-blur-xl 
                        border border-white/10 rounded-3xl p-10 shadow-2xl">

          <form className="flex flex-col space-y-6 text-white">

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 
                           border border-white/10
                           text-white placeholder-gray-500
                           focus:outline-none focus:border-cyan-400
                           transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 
                           border border-white/10
                           text-white placeholder-gray-500
                           focus:outline-none focus:border-cyan-400
                           transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-white/5 
                           border border-white/10
                           text-white placeholder-gray-500
                           focus:outline-none focus:border-cyan-400
                           transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 
                         transition py-3 rounded-2xl 
                         font-semibold text-lg 
                         shadow-lg hover:scale-105 duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;

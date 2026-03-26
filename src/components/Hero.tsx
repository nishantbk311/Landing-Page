import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Zap } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center py-12 px-6 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-dark leading-tight">
          Choose Your <span className="text-brand-teal">Path</span>
        </h1>
        <p className="text-slate-600 text-lg">
          Whether you're looking for professional solutions or seeking to launch your career, we have the expertise to guide you.
        </p>
      </motion.div>

      {/* Choice Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Service Card */}
        <motion.a
          href="https://leafclutchtech.com.np/"
          whileHover={{ y: -12 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="group block relative bg-brand-dark rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[400px] cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Briefcase size={160} className="text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-brand-mint/20 rounded-2xl flex items-center justify-center mb-8">
              <Briefcase className="text-brand-mint" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Services</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md">
              Tailored solutions for your business needs. From strategy to implementation, we deliver excellence at every step.
            </p>
            <ul className="space-y-4 mb-8">
              {["Enterprise Consulting", "Digital Transformation", "Custom Development"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-medium">
                  <Zap size={18} className="text-brand-mint fill-brand-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <div className="group/btn bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 group-hover:bg-brand-mint transition-all w-full justify-center">
              Visit Services
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>

        {/* Training Card */}
        <motion.a
          href="https://ed-tech-leafclutch.vercel.app/"
          whileHover={{ y: -12 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="group block relative bg-white border-2 border-brand-dark/5 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl flex flex-col justify-between min-h-[400px] cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap size={160} className="text-brand-dark" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-8">
              <GraduationCap className="text-brand-teal" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Training & Internship</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
              Kickstart your career with hands-on experience and expert mentorship. Learn from the best in the industry.
            </p>
            <ul className="space-y-4 mb-8">
              {["Skill Development", "Real-world Projects", "Placement Support"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-dark font-medium">
                  <Zap size={18} className="text-brand-teal fill-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <div className="group/btn bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 group-hover:bg-brand-mint group-hover:text-brand-dark transition-all w-full justify-center">
              Visit Academy
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>
      </div>
    </main>
  );
}

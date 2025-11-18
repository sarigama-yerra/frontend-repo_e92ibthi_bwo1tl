import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 shadow-lg shadow-purple-500/30 ring-1 ring-white/10 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div className="">
            <p className="text-white font-semibold leading-none">AgenTraining</p>
            <p className="text-xs text-white/60 leading-none mt-1">Agentic Skills Academy</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#curriculum" className="text-white/80 hover:text-white transition">Curriculum</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white/80 hover:text-white text-sm">Login</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow-sm hover:shadow transition">Get started</a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80"><Menu size={20} /></button>
      </div>
    </header>
  );
}

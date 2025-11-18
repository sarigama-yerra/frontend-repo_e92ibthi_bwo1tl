import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background gradient aura */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.08),transparent_55%)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Curriculum />

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl p-8 sm:p-12 bg-white/5 ring-1 ring-white/10 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),rgba(59,130,246,0.25)_40%,transparent_70%)] blur-2xl" />
            <h3 className="text-2xl sm:text-3xl font-semibold">Bring agentic AI into your organization</h3>
            <p className="mt-3 text-white/70 max-w-2xl">We run private cohorts for teams of 10–50, tailored to your industry and stack. Get a syllabus, schedule, and pricing in your inbox.</p>
            <form className="mt-6 grid sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="Work email" className="col-span-2 px-4 py-3 rounded-xl bg-white/10 ring-1 ring-white/15 placeholder-white/50 focus:outline-none focus:ring-white/30" />
              <button type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow">Request details</button>
            </form>
            <p className="mt-3 text-xs text-white/60">No spam — we’ll follow up within 1 business day.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} AgenTraining. All rights reserved.</p>
          </div>
          <div className="text-white/60 text-sm">Built for teams moving from LLM demos to production agents.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),rgba(59,130,246,0.25)_35%,rgba(251,146,60,0.15)_60%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live, hands-on AI Agent training
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Train your team to think and build with agentic AI
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Master prompt engineering, tool orchestration, safety, evaluation, and production workflows. Cohort-based programs for product, data, and engineering teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow transition text-center">Enroll your team</a>
            <a href="#curriculum" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition text-center">View curriculum</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-white/70 text-sm">
            <div><p className="text-2xl font-semibold text-white">+150</p><p>Professionals trained</p></div>
            <div><p className="text-2xl font-semibold text-white">8.9/10</p><p>Average cohort rating</p></div>
            <div><p className="text-2xl font-semibold text-white">6 weeks</p><p>Program duration</p></div>
          </div>
        </div>
        <div className="h-[420px] md:h-[520px] rounded-2xl bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10 relative">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

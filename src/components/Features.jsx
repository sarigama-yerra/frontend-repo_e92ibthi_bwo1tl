import { ShieldCheck, Workflow, Bot, Brain } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Brain className="w-5 h-5" />, title: "Agentic mindset",
      desc: "Frameworks for decomposing tasks, planning, and reflective loops."
    },
    {
      icon: <Workflow className="w-5 h-5" />, title: "Tool orchestration",
      desc: "Connect LLMs with apps, APIs, and data using reliable patterns."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />, title: "Safety & governance",
      desc: "Guardrails, evals, and monitoring to ship responsibly."
    },
    {
      icon: <Bot className="w-5 h-5" />, title: "Production workflows",
      desc: "From prototyping to shipping live agents into your stack."
    },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What your team will master</h2>
          <p className="mt-3 text-white/70">A practical curriculum focused on real-world agent systems, not theory.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4">
                {i.icon}
              </div>
              <h3 className="text-white font-medium">{i.title}</h3>
              <p className="text-sm mt-1 text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Curriculum() {
  const modules = [
    {
      w: "Week 1",
      t: "Foundations of agentic AI",
      d: "Core concepts, modern LLM stack, capabilities & limitations."
    },
    {
      w: "Week 2",
      t: "Prompt patterns & planning",
      d: "Task decomposition, ReAct, reflection, and memory patterns."
    },
    {
      w: "Week 3",
      t: "Tools & retrieval",
      d: "Function calling, RAG, tool safety, and data connectors."
    },
    {
      w: "Week 4",
      t: "Evaluation & guardrails",
      d: "Offline/online evals, metrics, governance and monitoring."
    },
    {
      w: "Week 5",
      t: "Shipping agents",
      d: "From prototype to prod, observability and incident response."
    },
    {
      w: "Week 6",
      t: "Capstone build",
      d: "Team project building a domain-specific agent."
    },
  ];

  return (
    <section id="curriculum" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Cohort curriculum</h2>
          <p className="mt-3 text-white/70">Six weeks, blended live workshops and async labs.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <p className="text-xs text-white/60">{m.w}</p>
              <h3 className="mt-1 text-white font-medium">{m.t}</h3>
              <p className="text-white/70 text-sm mt-1">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

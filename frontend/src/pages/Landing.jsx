export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">🚀 CareerPilot</div>
          <div className="flex gap-6">
            <a href="#features" className="opacity-90 hover:opacity-100">Features</a>
            <a href="/app" className="bg-teal px-4 py-2 rounded">Launch Dashboard</a>
          </div>
        </div>
      </nav>
      <header className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900">Track Walk‑in Drives. Build Your Career.</h1>
          <p className="mt-4 text-gray-600">Your AI‑powered job companion for Noida, Gurugram & beyond.</p>
          <a href="/app" className="inline-block mt-6 bg-teal text-white px-6 py-3 rounded">Get Started</a>
        </div>
        <div className="h-72 bg-white rounded shadow flex items-center justify-center">Hero Illustration</div>
      </header>
      <section id="features" className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-4 gap-6">
        {[
          ['📍 Drive Tracker','Find, save, and log walk‑in drives.'],
          ['📄 Resume Builder','AI suggestions and PDF export.'],
          ['🎙️ Interview Simulator','Role‑based mock interviews.'],
          ['💡 Motivation','Daily quotes and progress.']
        ].map(([title,desc]) => (
          <div key={title} className="bg-white rounded p-5 shadow">
            <div className="text-xl font-semibold">{title}</div>
            <div className="mt-2 text-gray-600">{desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
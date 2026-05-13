import Link from "next/link";
import { ArrowRight, Leaf, Smartphone, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">AgriVision AI</span>
          </div>
          <Link
            href="/demo"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Try Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligence in Every Pocket
          </h1>
          <p className="text-xl md:text-2xl text-green-200 mb-8 leading-relaxed">
            An offline intelligent farming companion that helps farmers detect,
            understand, and treat crop problems instantly without internet.
          </p>

          {/* CTA Button */}
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/50"
          >
            View Workflow Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Unique Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Offline Intel */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-lg p-8 hover:border-green-500/60 transition-all">
              <Zap className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Offline Intel</h3>
              <p className="text-slate-300">
                Unlike competitors, our core AI runs locally. No internet needed
                for diagnosis.
              </p>
            </div>

            {/* Local Voice */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-lg p-8 hover:border-green-500/60 transition-all">
              <Smartphone className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Local Voice</h3>
              <p className="text-slate-300">
                Audio assistance in local Zambian dialects (Bemba, Nyanja)
                ensures inclusivity.
              </p>
            </div>

            {/* Smart History */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-lg p-8 hover:border-green-500/60 transition-all">
              <Leaf className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Smart History</h3>
              <p className="text-slate-300">
                Tracks farm health over time to provide deep trend analysis and
                predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How AgriVision AI Works
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { step: "1", title: "CAPTURE", desc: "Take a photo" },
              { step: "2", title: "ANALYZE", desc: "AI processes" },
              { step: "3", title: "IDENTIFY", desc: "Problem detected" },
              { step: "4", title: "RESOLVE", desc: "Get solutions" },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gradient-to-b from-green-900/50 to-slate-900/50 border border-green-500/30 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
            >
              See Interactive Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Expected Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">60%</div>
              <p className="text-xl text-white">Yield Increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">$2B+</div>
              <p className="text-xl text-white">Economic Gain</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">24/7</div>
              <p className="text-xl text-white">Expert Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            For Everyone
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smallholders",
                desc: "Primary users seeking instant, low-cost crop health support",
              },
              {
                title: "Cooperatives",
                desc: "Large farming groups optimizing group yield and pest management",
              },
              {
                title: "Extension",
                desc: "Government officers using AI to pre-diagnose field cases efficiently",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-green-900/30 to-slate-900/30 border border-green-500/20 rounded-lg p-8 hover:border-green-500/40 transition-all"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to see it in action?
        </h2>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/50"
        >
          Launch Interactive Demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/20 py-8 px-4 text-center text-slate-400">
        <p>AgriVision AI - Empowering farmers. Increasing yields. Securing food futures.</p>
        <p className="mt-2 text-sm">www.agrivisionai.com | Zambia</p>
      </footer>
    </div>
  );
}

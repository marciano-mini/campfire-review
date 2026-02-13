import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
            🔥 Campfire Research
          </h1>
          <p className="text-xl text-gray-300">
            Review & edit research findings on mobile
          </p>
        </div>

        {/* Research Documents Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link 
            href="/research" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              📊 Product Research
            </h2>
            <p className="text-gray-300">
              Deep dive into Campfire: features, UX, positioning, and opportunities
            </p>
          </Link>

          <Link 
            href="/live-testing" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              🔍 Live Testing Report
            </h2>
            <p className="text-gray-300">
              UX audit, usability issues, and grade (6/10)
            </p>
          </Link>

          <Link 
            href="/reengagement" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              📧 Re-engagement Campaign
            </h2>
            <p className="text-gray-300">
              Email sequences to re-activate 1,800 users
            </p>
          </Link>

          <Link 
            href="/competitors" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              🎯 Competitor Analysis
            </h2>
            <p className="text-gray-300">
              Watch2Gether, Teleparty, Discord, Kosmi comparison
            </p>
          </Link>

          <Link 
            href="/monetization" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              💰 Monetization Strategy
            </h2>
            <p className="text-gray-300">
              Pricing tiers, revenue models, ARR projections
            </p>
          </Link>

          <Link 
            href="/branding" 
            className="group block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
              🎨 Brand Positioning
            </h2>
            <p className="text-gray-300">
              Messaging, taglines, tone of voice, visual identity
            </p>
          </Link>
        </div>

        {/* Info Footer */}
        <div className="mt-12 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl">
          <p className="text-sm text-gray-300">
            <strong className="text-orange-400">💡 How to use:</strong> Tap any card to view the document. On each page, tap the <strong>Edit</strong> button to make changes. Your edits save automatically to your device.
          </p>
        </div>
      </div>
    </div>
  );
}

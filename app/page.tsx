import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">TikTok OAuth Demo</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          TikTok OAuth Demo
        </h2>

        <p className="max-w-2xl text-gray-300 text-lg mb-10">
          A demonstration application for testing TikTok Login and official
          TikTok API integration.
        </p>

        <button className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Continue with TikTok
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="font-bold text-xl mb-4">Secure Login</h3>
          <p className="text-gray-400">
            Authenticate users using TikTok OAuth.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="font-bold text-xl mb-4">API Integration</h3>
          <p className="text-gray-400">
            Demonstrates integration with official TikTok APIs.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h3 className="font-bold text-xl mb-4">Responsive Design</h3>
          <p className="text-gray-400">
            Works beautifully on desktop, tablet, and mobile.
          </p>
        </div>
      </section>
    </main>
  );
}
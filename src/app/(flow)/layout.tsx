import Link from "next/link"

export default function FlowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Navbar simplificada */}
      <header className="sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass bg-black/40 rounded-full px-6 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              movidev<span className="text-blue-400">.</span>
            </Link>
            <Link 
              href="/" 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Voltar ao site
            </Link>
          </div>
        </div>
      </header>
      <main className="relative">
        {children}
      </main>
    </div>
  );
}
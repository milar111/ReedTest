import Link from 'next/link';

export default function Header() {
  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="max-w-[320px] sm:max-w-md md:max-w-none mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link 
              href="/"
              className="text-xl font-semibold text-slate-100 hover:text-emerald-400 transition-colors"
            >
              REED
            </Link>
          </div>
          <form action="http://localhost:8000/logout" method="get">
            <button
              type="submit"
              className="rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-rose-700"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

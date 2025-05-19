// ... existing code ...
export function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const pref = localStorage.getItem("trendinghub-dark");
    return pref === "true" || (pref === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("trendinghub-dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("trendinghub-dark", "false");
    }
  }, [dark]);

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md bg-white/10 dark:bg-[#10131b]/70 border-b border-white/10 dark:border-[#23243c] shadow-sm flex flex-col md:flex-row md:items-center justify-between px-4 md:px-10 h-auto md:h-20 transition-all"
    >
      <div className="flex items-center gap-3 py-1 md:py-0 w-full md:w-auto justify-between">
        <a href="/" className="font-extrabold text-2xl neon-primary tracking-tight flex items-center">
          <span className="transition-transform hover:scale-105 duration-150 block drop-shadow-[0_0_12px_var(--color-primary)]" style={{ letterSpacing: '0.05em' }}>
            TrendingHub
          </span>
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      <nav
        className={`${menuOpen ? "flex" : "hidden"} flex-col md:flex-row md:flex items-start md:items-center gap-4 md:gap-8 w-full md:w-auto bg-background/80 md:bg-transparent absolute md:static left-0 top-full md:top-auto px-3 md:px-0 pb-4 md:pb-0 border-b border-white/10 md:border-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
      >
        {menu.map(({ name, link }) => (
          <a
            href={link}
            key={name}
            className="text-base md:text-lg font-medium hover:underline underline-offset-2 text-white/90 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
        <button
          onClick={() => setDark((d) => !d)}
          className="rounded p-2 bg-white/10 hover:bg-accent/60 transition text-white ml-0 md:ml-4"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="20" height="20" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M21 10.79A9 9 0 1112.21 3a7 7 0 108.79 7.79z"></path></svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" className="inline" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.24 7.24l-1.42-1.42M6.34 6.34L4.92 4.92m12.02 0l-1.42 1.42M6.34 17.66l-1.42 1.42" /></svg>
          )}
        </button>
        <TranslateButton />
      </nav>
    </header>
  );
}
// ... existing code ... <rest of the file>

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 px-6 md:px-12 lg:px-24 py-12 transition-colors">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between gap-4">
        <p className="text-sm font-mono text-zinc-500 dark:text-zinc-600">
          © 2026 Samarth Pawar
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          Built with React, TypeScript, Framer Motion & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

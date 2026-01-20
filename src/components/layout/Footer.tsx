const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between gap-4">
        <p className="text-sm font-mono text-zinc-600">
          © 2025 Samarth Pawar
        </p>
        <p className="text-sm text-zinc-600">
          Built with React, Framer Motion & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

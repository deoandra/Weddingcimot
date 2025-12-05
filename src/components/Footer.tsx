export const Footer = () => {
  return (
    <footer className="relative z-10 py-12 border-t border-yellow-500/20 bg-black/40 backdrop-blur-lg mt-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-yellow-500 mb-6 drop-shadow-sm">John & Jane</h2>
        <div className="flex justify-center gap-6 mb-8 text-neutral-400 font-medium">
          <a href="#story" className="hover:text-yellow-400 transition-colors hover:underline decoration-yellow-500/50 underline-offset-4">Our Story</a>
          <a href="#events" className="hover:text-yellow-400 transition-colors hover:underline decoration-yellow-500/50 underline-offset-4">Events</a>
          <a href="#gift" className="hover:text-yellow-400 transition-colors hover:underline decoration-yellow-500/50 underline-offset-4">Gift</a>
          <a href="#rsvp" className="hover:text-yellow-400 transition-colors hover:underline decoration-yellow-500/50 underline-offset-4">RSVP</a>
        </div>
        <p className="text-neutral-600 text-sm">
          © 2025 John & Jane's Wedding. With love.
        </p>
      </div>
    </footer>
  );
};

import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4">
      <div />
      <div className="flex items-center gap-10">
        <a href="#faq" className="font-mono text-sm uppercase tracking-widest text-primary-foreground/90 hover:text-primary-foreground transition-all">
          Blog
        </a>
        <a
          href="#early-access"
          className="btn-rig"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

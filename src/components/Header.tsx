import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[92rem] mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="Leafclutch Logo"
            className="h-14 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>
          {/* Desktop Contact Button */}
        <a
          href="https://leafclutchtech.com.np/contact"
          className="hidden md:flex"
        >
          <button className="bg-brand-dark cursor-pointer text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-brand-navy transition-all flex items-center gap-2">
            <Mail className="h-6 w-6" />
            Contact Us
          </button>
        </a>

        {/* Mobile Contact Button */}
        <a
          href="https://leafclutchtech.com.np/contact"
          className="md:hidden"
        >
          <button className="bg-brand-dark text-white p-3 rounded-lg flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />
            Contact
          </button>
        </a>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";
import { TbBrandTiktok, TbBrandDiscord } from "react-icons/tb";

const programs = [
  { name: "All Courses", href: "https://ed-tech-leafclutch.vercel.app/courses" },
  { name: "AI & ML", href: "https://ed-tech-leafclutch.vercel.app/courses/ai-ml"},
  { name: "Web Development", href: "https://ed-tech-leafclutch.vercel.app/courses/web-dev" },
  { name: "Cybersecurity", href: "https://ed-tech-leafclutch.vercel.app/courses/cybersecurity" },
  { name: "UI/UX Design", href: "https://ed-tech-leafclutch.vercel.app/courses/ui-ux" },
  { name: "Graphic Designing", href: "https://ed-tech-leafclutch.vercel.app/courses/graphic-design" },
  { name: "Data Science", href: "https://ed-tech-leafclutch.vercel.app/courses/data-science" },
];

const services = [
  { name: "All Services", href: "https://leafclutch-tech-v2.vercel.app/services/all-services" },
  { name: "Web Development", href: "https://leafclutch-tech-v2.vercel.app/services/web-development" },
  { name: "Mobile App Development", href: "https://leafclutch-tech-v2.vercel.app/services/mobile-development" },
  { name: "DevOps Solutions", href: "https://leafclutch-tech-v2.vercel.app/services/devops" },
  { name: "Cybersecurity", href: "https://leafclutch-tech-v2.vercel.app/services/cybersecurity" },
  { name: "Data Science & AI", href: "https://leafclutch-tech-v2.vercel.app/services/data-science-ai" },
  { name: "Digital Marketing", href: "https://leafclutch-tech-v2.vercel.app/services/digital-marketing" },
];

const resources = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61584902195796",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://x.com/", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/leafclutch-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/leafclutch.technologies/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@LeafclutchTechnologies",
    label: "YouTube",
  },
  {
    icon: TbBrandTiktok,
    href: "https://www.tiktok.com/@leafclutchtechnologies1",
    label: "Tiktok",
  },
  {
    icon: TbBrandDiscord,
    href: "https://discord.gg/4aDwcMZBPq",
    label: "Discord",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16 md:pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} alt="Leafclutch Logo" className="h-16" />
            </Link>

            <p className="mt-4 max-w-sm text-muted-foreground">
              Empowering innovation through cutting-edge technology solutions,
              training, and digital transformation services.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@leafclutchtech.com.np"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> info@leafclutchtech.com.np
              </a>

              <a
                href="tel:+9779766715768"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> +977-9766715768
              </a>

              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Siddharthanagar, Rupandehi
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base font-semibold text-foreground">Programs</h3>
            <ul className="mt-4 space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-[88rem] mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leafclutch Technologies. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
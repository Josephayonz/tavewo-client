import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <g transform="translate(12 12) scale(0.85) translate(-12 -12)">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </g>
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <g transform="translate(12 12) scale(0.84) translate(-12 -12)">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.1-9.3L1.5 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
    </g>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <g transform="translate(12 12) scale(0.86) translate(-12 -12)">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </g>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.6 9.88v-6.99H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.75l-.44 2.89h-2.31v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const socials = [
  { icon: InstagramIcon, href: "https://www.instagram.com/tavewoventures/" },
  { icon: XIcon, href: "#" },
  { icon: LinkedinIcon, href: "https://ng.linkedin.com/in/tavewo-ventures-625059326" },
  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61564940827447" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Division", to: "/division" },
  { label: "Investors", to: "/investors" },
  { label: "News & Insight", to: "/news" },
];

const ecosystemLinks = [
  { label: "Vescar", to: "/products" },
  { label: "RespondrNG", to: "/products" },
  { label: "TAVEWO Capital", to: "/products" },
  { label: "Technology", to: "/division" },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-navy">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>

            <img src="/images/tavewo-logo-transparent.png" alt="TAVEWO Ventures Ltd" className="h-9 w-auto mb-3" />
            <p className="text-sm text-navy/80 leading-relaxed max-w-xs font-medium">
              A technology-enabled conglomerate building Africa's most trusted corporate
              ecosystem across innovation, logistics, capital and real estate.
            </p>
            <h4 className="font-semibold mt-6 mb-3">Connect With Us</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-navy/40 flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-navy/85 font-medium">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ecosystem</h4>
            <ul className="space-y-3 text-sm text-navy/85 font-medium">
              {ecosystemLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-navy/85 transition-colors">
              <a href="tel:+2347030786368" className="flex items-center gap-3 text-sm font-medium hover:text-white transition-colors">
                <Phone size={18} className="text-[#14213d]" />
                +234 0703 078 6368 
              </a>
              <a href="tel:+2349047432641" className="flex items-center gap-3  text-sm font-medium hover:text-white transition-colors">
                <Phone size={18} className="text-[#14213d]" />
                +234 0904 743 2641
              </a>
              <a href="mailto:tavewo@tavewo.com" className="flex items-center gap-3 text-sm font-medium hover:text-white hover:underline transition-colors">
                <Mail size={18} className="text-[#14213d]" />
                tavewo@tavewo.com
              </a>
              <div className="flex items-start gap-3 text-sm font-medium">
                <MapPin size={18} className="text-[#14213d] mt-0.5 flex-shrink-0" />
                <span>24, Abebi shopping complex, Mosafejo bus stop, Ibadan, Nigeria.</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-navy/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-navy/80">
          <p className="text-sm font-medium">© 2026 TAVEWO Ventures Ltd. All rights reserved.</p>
          <p className="text-sm font-medium">Enterprise · Secure · Scalable</p>
        </div>
      </div>
    </footer>
  );
}

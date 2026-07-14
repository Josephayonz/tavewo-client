import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { MotionDiv } from "../lib/motion";
import { submitContactForm } from "../lib/api";

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

const EMPTY_FORM = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phoneNumber: "",
  projectType: "",
  message: "",
};

export default function ContactUs() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white text-center px-5 md:px-8 py-16 md:py-20">
        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow font-medium mb-4">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Let's Build Something Enterprise-Grade.
          </h1>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed">
            Partnership, investment or enterprise solutions — tell us what you're working
            on and our team will get back to you.
          </p>
        </MotionDiv>
      </section>

      {/* Form + HQ */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 items-start">
          {/* Form */}
          <Reveal as="form" onSubmit={handleSubmit} className="border border-slate-200 rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Company Name</label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Work Email</label>
                <input
                  type="email"
                  name="workEmail"
                  value={form.workEmail}
                  onChange={handleChange}
                  required
                  placeholder="Enter your work email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Phone number</label>
                <input
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Project Type</label>
              <input
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                placeholder="e.g. Partnership, Investment, Enterprise Software"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="For better assistance, please describe how we can help you..."
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={status === "submitting" ? {} : { scale: 1.03 }}
              whileTap={status === "submitting" ? {} : { scale: 0.97 }}
              className="w-full sm:w-auto rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium text-green-700"
              >
                Message sent — our team will get back to you shortly.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium text-red-600"
              >
                {errorMsg || "Something went wrong. Please try again."}
              </motion.p>
            )}
          </Reveal>

          {/* Corporate HQ card */}
          <Reveal delay={0.15} className="border border-slate-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-extrabold mb-6">Corporate HQ</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium">
                <Phone size={18} className="text-brand" /> (+234) 905821435
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <Mail size={18} className="text-brand" /> hello@Tavewo.com
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <MapPin size={18} className="text-brand" /> Corporate HQ, Lagos, Nigeria
              </li>
            </ul>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-3">
              {[InstagramIcon, XIcon, LinkedinIcon, FacebookIcon].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-96">
        <iframe
          title="TAVEWO Corporate HQ Location"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=Lagos,Nigeria&t=&z=11&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </section>
    </div>
  );
}

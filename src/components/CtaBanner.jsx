import Reveal from "./Reveal";
import { MotionLink, buttonHover } from "../lib/motion";

export default function CtaBanner() {
  return (
    <section className="px-5 md:px-8 py-14">
      <Reveal className="max-w-6xl mx-auto">
        <div className="bg-brand rounded-2xl text-center text-white px-6 md:px-16 py-12 md:py-16">
          <p className="text-blue-200 font-medium mb-3">Let's Build Together</p>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-5">
            Ready To Scale With A Trusted Partner?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're an investor, enterprise buyer or operator, our team is ready to
            explore how the TAVEWO ecosystem can accelerate what you're building.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MotionLink
              to="/division"
              {...buttonHover}
              className="rounded-lg bg-brand-dark px-6 py-3 font-semibold"
            >
              Explore Ecosystem
            </MotionLink>
            <MotionLink
              to="/contact"
              {...buttonHover}
              className="rounded-lg bg-white text-navy px-6 py-3 font-semibold"
            >
              Contact Us
            </MotionLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

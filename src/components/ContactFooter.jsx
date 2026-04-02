import { motion } from "framer-motion";
import { Mail, Phone, Download, MapPin } from "lucide-react";

const RESUME_URL = "https://media.base44.com/files/public/user_69bd77708aadee4f72a6af4d/7bf88b6b6_resumekhamvongsouk2026updatedJan28.pdf";

export default function ContactFooter() {
  return (
    <section
      id="contact"
      className="relative bg-foreground text-background py-24 md:py-40 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase opacity-50">
            006 — Contact
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-light mt-4">
            Let's <span className="italic">Connect</span>
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {/* Email */}
          <motion.a
            href="mailto:seth@khamvongsouk.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 md:gap-6 group"
          >
            <Mail size={20} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            <span className="font-body text-lg md:text-2xl lg:text-4xl tracking-tight break-all group-hover:opacity-70 transition-opacity">
              seth@khamvongsouk.com
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:3303332255"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 md:gap-6 group"
          >
            <Phone size={20} className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            <span className="font-body text-lg md:text-2xl lg:text-4xl tracking-tight group-hover:opacity-70 transition-opacity">
              330-333-2255
            </span>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 md:gap-6"
          >
            <MapPin size={20} className="opacity-50 flex-shrink-0" />
            <span className="font-body text-lg md:text-2xl lg:text-4xl tracking-tight">
              Orlando, FL
            </span>
          </motion.div>
        </div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-background/20"
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.3em] uppercase border border-background/30 px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-300"
          >
            <Download size={14} />
            <span>Download Full CV</span>
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-heading text-sm tracking-widest uppercase">
            Seth Khamvongsouk
          </span>
          <span className="font-body text-[10px] tracking-wider opacity-40">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </div>
    </section>
  );
}
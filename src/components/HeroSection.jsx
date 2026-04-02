import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/b9b0ea420_3b79267b-f3f5-4bbb-9026-5b0df266f2bf.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Seth Khamvongsouk portrait"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          Senior Infrastructure Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground leading-none"
        >
          SETH
          <br />
          <span className="italic font-light">Khamvongsouk</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-8"
        >
          Orlando, FL &mdash; 25+ Years of Enterprise Excellence
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
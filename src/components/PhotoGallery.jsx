import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PHOTOS = [
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/b1b0a265a_0d260a9b-34fe-4286-9769-8cce04a90189.jpg", aspect: "tall" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/dc1f0dfd8_d60a8373-65bd-4226-8ef2-061c80b7a650.jpg", aspect: "wide" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/99888bd7d_fe428d7a-0860-4bfb-ba0c-eba2afd72f6d.jpg", aspect: "tall" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/f5ff495db_unnamed1.jpg", aspect: "square" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/c1b993283_unnamed2.jpg", aspect: "wide" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/2b52e44df_unnamed3.jpg", aspect: "tall" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/de0bb9a70_unnamed4.jpg", aspect: "square" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/9f30f1b9f_unnamed5.jpg", aspect: "wide" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/c5bf6cb3a_unnamed6.jpg", aspect: "tall" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/e55847628_unnamed7.jpg", aspect: "square" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/4370e1e9d_unnamed8.jpg", aspect: "wide" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/f6991f656_unnamed9.jpg", aspect: "tall" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/16fdfc321_unnamed10.jpg", aspect: "square" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/9aeef64d6_unnamed11.jpg", aspect: "wide" },
  { src: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/696451ad3_unnamed.jpg", aspect: "tall" },
];

const ASPECT_CLASSES = {
  tall: "w-64 md:w-72 h-96 md:h-[28rem]",
  wide: "w-80 md:w-96 h-64 md:h-72",
  square: "w-64 md:w-72 h-64 md:h-72",
};

export default function PhotoGallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
              004 — Visual Archive
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mt-4">
              The <span className="italic">Gallery</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 gallery-scroll items-center"
      >
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`flex-shrink-0 ${ASPECT_CLASSES[photo.aspect]} relative overflow-hidden group`}
          >
            <img
              src={photo.src}
              alt={`Seth Khamvongsouk photo ${i + 1}`}
              className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
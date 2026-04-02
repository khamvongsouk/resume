import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  "Microsoft Certified Systems Engineer (MCSE)",
  "Microsoft Certified Systems Administrator (MCSA)",
  "Cisco Certified Network Administrator (CCNA)",
  "Citrix Certified Administrator (CCA) in XP",
  "Microsoft Certified Professional + Internet (MCP+I)",
];

export default function CertificationsSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
              005 — Credentials
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mt-4 mb-12">
              Certifications
            </h2>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <Award
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5 flex-shrink-0"
                  />
                  <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education + Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
              Education
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mt-4 mb-12">
              Foundation
            </h2>

            <div className="border-l border-border pl-6">
              <p className="font-heading text-xl text-foreground">
                Garfield High School
              </p>
              <p className="font-body text-xs tracking-wider text-muted-foreground mt-1">
                Graduation 1996
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <p className="font-heading text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
                "Infrastructure isn't just about servers and wires — it's the invisible architecture that empowers every person in an organization to do their best work."
              </p>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-6">
                — Seth Khamvongsouk
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
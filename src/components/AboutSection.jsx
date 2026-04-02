import { motion } from "framer-motion";

const ABOUT_IMAGE = "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/d9a86b2c0_6a981ada-a4d7-4926-98e2-7781924dd3f1.jpg";

const STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "10,000+", label: "Servers Managed" },
  { value: "53,000+", label: "Users Supported" },
  { value: "Zero", label: "Unplanned Downtime" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
            001 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={ABOUT_IMAGE}
              alt="Seth Khamvongsouk in professional setting"
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              Architecting the
              <br />
              <span className="italic">backbone</span> of
              <br />
              enterprise.
            </h2>

            <div className="space-y-6 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                Highly accomplished Senior Infrastructure Engineer with over two and a half decades of progressive experience specializing in highly available, large-scale enterprise environments. Based in Orlando, Florida, Seth has built a career defined by precision, resilience, and an unwavering commitment to zero-downtime operations.
              </p>
              <p>
                With a proven track record of architecting, deploying, and supporting critical infrastructure — including environments spanning 10,000+ servers and 53,000+ users — Seth stands as an Expert Subject Matter Expert in Microsoft Active Directory, VMware vSphere/ESXi, Azure AD/VM/SSO, and the strategic leveraging of PowerShell and VB Scripting for operational automation at massive scale.
              </p>
              <p>
                His career narrative spans the full arc of modern IT infrastructure — from the early days of Windows NT migrations through today's hybrid-cloud and software-defined data center architectures. He has consistently delivered transformational outcomes for Fortune 500 organizations, financial institutions, and public sector entities alike.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl md:text-4xl font-light text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
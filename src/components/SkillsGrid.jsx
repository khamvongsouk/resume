import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Cloud & Directory Services",
    skills: ["Azure AD/VM/SSO", "Active Directory (All Versions)", "DNS", "DHCP", "Group Policy", "ADFS", "Entra ID"],
  },
  {
    category: "Virtualization & Systems",
    skills: ["VMware vSphere/ESXi", "vSAN", "vRealize Suite", "VCF 9", "Windows Server (All Versions)", "Dell VXRails", "Hitachi UCP", "Windows Clustering", "Terminal Server"],
  },
  {
    category: "Automation & Scripting",
    skills: ["PowerShell", "VBScript", "Batch Files", "Network Boot-Disk Creation", "ADSI", "WMI"],
  },
  {
    category: "Hardware & Storage",
    skills: ["Dell PowerEdge/Blade", "HP Proliant/Blade", "IBM Servers", "Cisco UCS", "Pure Storage", "Dell VXRails", "Hitachi UCP", "SAN"],
  },
  {
    category: "Security & Operations",
    skills: ["Security Planning", "MX Logics", "Websense", "Marshall M86", "Microsoft IAS", "Tivoli", "Symantec Endpoint Protection", "Disaster Recovery"],
  },
  {
    category: "Networking & Collaboration",
    skills: ["Citrix/Netscaler", "Cisco Routers", "Juniper M40", "Exchange Server", "SQL Server", "Veritas Netbackup", "IIS"],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 md:py-40 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
            003 — Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mt-4">
            Technical <span className="italic">Mastery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <h3 className="font-heading text-xl text-foreground mb-4 pb-4 border-b border-border">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-[10px] tracking-wider uppercase px-3 py-1.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
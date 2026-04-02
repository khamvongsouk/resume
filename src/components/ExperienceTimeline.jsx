import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    period: "2011 — 2026",
    company: "FirstEnergy Corp.",
    title: "Systems Engineer V",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/182d6bde7_6eff83f7-b431-4de2-9cae-21504d7b1e38.jpg",
    summary: "Architected the global Windows Server environment for one of the largest investor-owned electric utility systems in the nation, supporting 53,000+ users with zero unplanned downtime across 15 years of continuous evolution.",
    details: [
      "Architected and led the full lifecycle design of the global Windows Server environment including Active Directory Domain, DNS/DHCP, and Group Policy standards",
      "Spearheaded large-scale VMware vSphere/ESXi 4,5,6,7,8 and VCF 9 upgrades with zero unplanned downtime",
      "Standardized global Windows Server imaging and deployment for both physical and VMware templates, reducing build time",
      "Subject Matter Expert for Active Directory and Azure AD/VM/SSO integration, resolving all Level 3 escalations",
      "Citrix and Netscaler administration across the enterprise",
      "Developed and maintained comprehensive Disaster Recovery plans for Active Directory, ensuring business continuity for 53,000+ users",
      "Mentored junior engineering staff on virtualization, AD management, and Windows server implementation",
      "Led migration from Dell VxRail hardware to HP hardware infrastructure"
    ],
  },
  {
    period: "2014 — 2025",
    company: "PNC Bank",
    title: "Technical Engineer",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/62c1db619_7fe8574a-3d78-4215-87ec-f88b506900dc.jpg",
    summary: "Primary VMware Subject Matter Expert for one of the largest financial institutions in the United States, driving virtualization strategy and site reliability across a massive converged infrastructure environment.",
    details: [
      "Primary SME for all aspects of VMware, providing critical support and design input for the virtualization team (2022-2025)",
      "Deployed and maintained Cisco UCS B (B200) and C (C125) series hardware for the virtualized environment",
      "Key SRC (Site Reliability Control) for the Wintel team (2014-2022), significantly improving time-to-resolution",
      "Managed enterprise hardware platforms including Cisco UCS, Dell VxRails, Hitachi UCP Servers, and Pure Storage",
      "Performance troubleshooting for all VMs and ESXi hosts from compute, network, and storage perspectives",
      "Change management for all VM and converged-level changes",
      "Coordinated right-sizing for over-sized VMs and over-populated environments"
    ],
  },
  {
    period: "2011",
    company: "KeyBank, NA",
    title: "Systems Engineer (Contract)",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/c7a6205bb_31fc7e90-328a-40a6-9e3b-6d8a1348466f.jpg",
    summary: "Provided Tier III VMware and Active Directory support for an environment spanning over 2,000 servers — 80% virtualized — within one of the nation's leading regional banks.",
    details: [
      "Provided Tier III VMware and Active Directory support for 2,000+ servers, 80% virtualized",
      "Automated deployment and security tasks using scripting, significantly reducing manual effort",
      "Maintained critical vendor relationships and evaluated new hardware/software technologies"
    ],
  },
  {
    period: "2006 — 2011",
    company: "Cleveland Metropolitan School District",
    title: "Senior Systems Engineer / AD Lead",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/96bb3d3ed_68ea4be4-a7ab-4634-89c7-deaf1bae69a0.jpg",
    summary: "Led the foundational migration from Windows NT to Active Directory for an entire metropolitan school district, managing 16,000+ users and 25,000+ nodes while serving as Interim Engagement Manager over a team of 12.",
    details: [
      "Led migration from Windows NT Server to Windows 2003 Active Directory domain",
      "Managed 16,000+ users and over 25,000 nodes maintaining high availability",
      "Acted as Interim Engagement Manager with direct oversight of 12 direct reports"
    ],
  },
  {
    period: "2003 — 2006",
    company: "Ohio Saving Bank",
    title: "IT Infrastructure Engineer II",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/ae3ca4f08_722eaefe-b030-40c5-b13e-1fb71da0aab5.jpg",
    summary: "Executed a Physical-to-Virtual migration for over 200 servers, pioneering early virtualization adoption and authored sophisticated automation scripts that transformed operational efficiency.",
    details: [
      "Successfully executed P2V migration for over 200 servers using VMware GSX Server",
      "Authored sophisticated administration scripts using ADSI, WMI, and VBScript",
      "Led multiple large-scale projects including full Exchange 5.5 to Exchange 2003 migration"
    ],
  },
  {
    period: "1996 — 2003",
    company: "Various Enterprise Clients",
    title: "Senior Consultant & Migration Lead",
    image: "https://media.base44.com/images/public/user_69bd77708aadee4f72a6af4d/01468719b_c382d20a-58b1-4ed2-8b40-cc4ab9af6779.jpg",
    summary: "Built a distinguished consulting career across Fortune 500 companies and major enterprises — Medical Mutual, Tremco, Borden Foods, Sterling Commerce, Blue Cross Blue Shield of Michigan, and more — delivering mission-critical migrations and infrastructure transformations.",
    details: [
      "Medical Mutual — Migrated five office locations in a mixed Novell/Microsoft environment",
      "Tremco Inc. — Executed desktop and server migrations of IBM hardware to Windows platforms",
      "Borden Foods — Consulting support for 1,000+ users including Citrix administration",
      "Sterling Commerce — Level 2/3 support during NT to Windows 2000 migration; designed hardware inventory database",
      "Adecco/Blue Cross Blue Shield — Led migration from Banyan Vines/Lotus Notes to Exchange 5.5; deployed 150+ Compaq Proliant servers",
      "Relera LLC — Managed enterprise WAN/LAN including Cisco and Juniper devices",
      "Apex Mold — Upgraded from Windows NT 4.0 to Windows 2000 Server; conducted security analysis",
      "Completed projects three months ahead of schedule, increased mail migration efficiency by 9%"
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 group"
    >
      {/* Year */}
      <div className="lg:col-span-2">
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground">
          {exp.period}
        </span>
      </div>

      {/* Image */}
      <div className="lg:col-span-3">
        <div className="overflow-hidden">
          <img
            src={exp.image}
            alt={`${exp.company} era`}
            className="w-full aspect-[4/5] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-7">
        <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground">
          {exp.company}
        </h3>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
          {exp.title}
        </p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground mt-4">
          {exp.summary}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mt-4 font-body text-xs tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors"
        >
          <span>{expanded ? "Close" : "View Details"}</span>
          <ChevronRight
            size={12}
            className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-l border-border pl-4">
                {exp.details.map((detail, i) => (
                  <li
                    key={i}
                    className="font-body text-xs leading-relaxed text-muted-foreground"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
            002 — Experience
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mt-4">
            Career <span className="italic">Evolution</span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {EXPERIENCES.map((exp, i) => (
            <div key={i}>
              <ExperienceCard exp={exp} index={i} />
              {i < EXPERIENCES.length - 1 && (
                <div className="border-b border-border mt-20 md:mt-32" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
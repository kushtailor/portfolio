/*
  ============================================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT.
  ============================================================
  Everything on your website — your name, your projects, your
  experience — lives here as plain text. To change something on
  the site, find it below and change the text between the quotes.

  RULES TO AVOID BREAKING THE PAGE:
  1. Only edit text that is INSIDE quotes "like this".
  2. Never delete a comma, a quote ", or a curly brace { }.
  3. If a line ends with a comma, keep the comma.
  4. To add a new item to a list (like a new project), copy an
     existing item (the whole { ... } block), paste it, and
     change the text inside.
  5. Save the file, refresh the page in your browser, done.
  ============================================================
*/

const SITE = {

  // ---------- TOP STATUS BAR (thin bar at the very top) ----------
  topbarStatus: "KUSH TAILOR // SEC-OPS PROFILE // STATUS: ACTIVE",

  // ---------- HERO (the big section at the top of the page) ----------
  hero: {
    eyebrow: "Aspiring Ethical Hacker & Penetration Tester",
    nameLine1: "KUSH",
    nameLine2: "TAILOR",
    tagline: "I find vulnerabilities before attackers do — driven by OSINT, OWASP fundamentals, and responsible disclosure.",
    // The 4 small boxes under your name:
    telemetry: [
      { label: "Focus",        value: "Offensive Sec",  color: "accent" },
      { label: "Clearance",    value: "Open to work", color: "" },
      { label: "Based In",     value: "Gujarat, India", color: "" },
      { label: "Mindset",      value: "Growth Mode ▲",  color: "amber" }
    ]
  },

  // ---------- ABOUT ----------
  about: {
    paragraphs: [
      "I'm Kush Tailor, an enthusiastic and hardworking with a strong passion for ethical hacking and digital security. I'm currently pursuing a Master's in Cyber Security and Digital Forensics at Parul University, building toward a professional career in ethical hacking.",
      "My hands-on experience includes independent security assessments — identifying authentication weaknesses, SQL injection indicators, and privilege-escalation risks — always following responsible disclosure practices. I also sharpen my skills through CTFs on Hack The Box and TryHackMe.",
      "I strive to challenge myself, meet demanding deadlines, and keep a growth-oriented mindset — learning continuously, adapting to new technologies, and working toward a safer digital world."
    ],
    // The small card on the right side of the About section:
    card: {
      handle: "kush tailor",
      domain: "Offensive Security & Digital Forensics",
      experience: "Emerging",
      stack: "Kali Linux",
      languages: "English, Hindi, Gujarati", 
      availability: "Open to work",
      stamp: "VERIFIED PROFILE"
    }
  },

  // ---------- SKILLS ----------
  // Each category becomes its own box. Each skill has a level label
  // (shown as text) and a percent (0-100, controls the bar length).
  skills: [
    {
      category: "Pentesting & Exploitation",
      items: [
        { name: "Burp Suite Pro", level: "INT", percent: 75 },
        { name: "Nmap",           level: "ADV", percent: 80 },
        { name: "SQLMap / Hydra", level: "INT", percent: 68 }
      ]
    },
    {
      category: "Recon & OSINT",
      items: [
        { name: "Shodan / Censys",           level: "INT", percent: 65 },
        { name: "Amass / ProjectDiscovery",   level: "INT", percent: 60 },
        { name: "OWASP Top 10 Awareness",     level: "ADV", percent: 78 }
      ]
    },
    {
      category: "Network & Protocol",
      items: [
        { name: "TCP/IP, DNS, DHCP, VLANs", level: "INT", percent: 70 },
        { name: "Wireshark (Packet Analysis)", level: "INT", percent: 62 },
        { name: "Firewall & IDS/IPS Basics",  level: "BEG", percent: 45 }
      ]
    },
    {
      category: "Scripting & Fundamentals",
      items: [
        { name: "Python (Scripting)",     level: "BEG", percent: 55 },
        { name: "Bash",                   level: "BEG", percent: 45 },
        { name: "Threat Modeling Basics",     level: "BEG", percent: 50 }
      ]
    }
  ],

  // ---------- EXPERIENCE ----------
  // Add a new job by copying one whole { ... } block below.
  experience: [
    {
      date: "2024",
      role: "Independent Bug Hunter & Pentester",
      org: "Self-directed / Responsible Disclosure",
      bullets: [
        "Conducted security assessments on web applications (Bisleri) to identify authentication weaknesses, including flaws in OTP verification workflows.",
        "Discovered and documented backend database errors indicating potential SQL injection vulnerabilities; prepared responsible-disclosure reports outlining impact and remediation.",
        "Identified improper access-control configurations that could lead to privilege-escalation risks, and recommended mitigations.",
        "Practice CTFs on Hack The Box and TryHackMe."
      ]
    },
    {
      date: "2024",
      role: "Ethical Hacking Technical Workshop",
      org: "Mindbend × SVNIT Surat",
      bullets: [
        "Gained hands-on exposure to ethical hacking methodologies and cybersecurity fundamentals.",
        "Learned practical techniques such as reconnaissance, vulnerability assessment, and basic exploitation concepts.",
        "Participated in guided lab sessions focused on real-world security scenarios."
      ]
    },
    {
      date: "2022 — 2024",
      role: "Started the Journey",
      org: "B.C.A., Veer Narmad South Gujarat University",
      bullets: [
        "Built a foundation in networking, Linux, and cybersecurity fundamentals during undergraduate study.",
        "First CTF solves and first steps into ethical hacking."
      ]
    }
  ],

  // ---------- PROJECTS ----------
  // "tag" is the small colored label in the corner of the card.
  // "tagType" controls its color: use "high", "med", or "info".
  projects: [
    {
      title: "CTF Practice",
      tag: "Offense",
      tagType: "high",
      description: "Ongoing practice solving challenges on Hack The Box and TryHackMe, covering web exploitation, recon, and privilege escalation scenarios.",
      stack: ["HTB", "TryHackMe", "Linux"]
    }
    // Add more projects here as you build them — copy one of the
    // blocks above, paste it, and fill in your own details.
  ],

  // ---------- RESEARCH ----------
  research: [
    {
      id: "ADV-01",
      title: "Authentication logic flaws in OTP verification workflows",
      description: "Identified weaknesses in an OTP verification flow during a web application security assessment (Bisleri).",
      date: "2024"
    },
    {
      id: "ADV-02",
      title: "SQL injection indicators via backend error analysis",
      description: "Discovered and documented backend database errors suggesting potential SQL injection vulnerabilities.",
      date: "2024"
    }
  ],

  // ---------- EDUCATION ----------
  education: {
    degrees: [
      { degree: "Master of Computer Application — Cyber Security & Digital Forensics (Pursuing)", institution: "Parul University, Vadodara", years: "Expected 2027" },
      { degree: "Bachelor of Computer Application", institution: "Veer Narmad South Gujarat University", years: "2022 — 2024" }
    ],
    // For certifications you've EARNED, set pending: false
    // For certifications you're WORKING TOWARD, set pending: true
    certifications: [
      { name: "INE eJPTv2",         pending: false },
      { name: "CompTIA Network+",   pending: false }
    ]
  },

  // ---------- CONTACT ----------
  contact: {
    heading: "Let's talk security.",
    description: "Open to internships, entry-level roles, and collaboration on research or CTF teams. Reach out — I read every message.",
    email: "kushntailor@gmail.com",
    linkedin: "linkedin.com/in/kushtailor",
    linkedinUrl: "https://www.linkedin.com/in/kush-tailor-169a26296/",
    github: "github.com/kushtailor",
    githubUrl: "https://github.com/kushtailor",
    // The little fake-terminal box on the right:
    terminal: [
      { prompt: true,  text: "whoami" },
      { prompt: false, text: "kush_tailor — security researcher" },
      { prompt: true,  text: "cat status.txt" },
      { prompt: false, text: "\"Open to opportunities. Send a signal.\"", highlight: true }
    ]
  },

  // ---------- FOOTER ----------
  footer: "© 2026 KUSH TAILOR — END OF FILE — ALL FINDINGS DISCLOSED RESPONSIBLY"

};

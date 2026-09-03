export const profile = {
  name: "Shah Hussain",
  role: "Software Engineer",
  focus: ".NET \u00b7 ASP.NET \u00b7 Full-Stack Systems",
  location: "Karachi, Pakistan",
  email: "sh_shussain@outlook.com",
  phone: "+92 333 8919913",
  linkedin: "https://www.linkedin.com/in/shahhussain-",
  github: "https://github.com/ShahHussain-sh",
  resume: "/Shah_Hussain_Resume.pdf",
  summary:
    "I build and maintain the systems companies run their operations on \u2014 billing platforms, CRMs, audit tools, order pipelines. Three years in, my focus has moved from writing features to owning how they behave in production: configurable rules, clean handoffs, and fewer 2am pages.",
};

export const stack = [
  {
    group: "Languages & Frameworks",
    items: [".NET Core", ".NET Framework", "C#", "VB.NET", "ASP.NET MVC", "Web API"],
  },
  {
    group: "Web",
    items: ["JavaScript", "TypeScript", "Entity Framework", "XML"],
  },
  {
    group: "Data",
    items: ["SQL Server", "PostgreSQL", "DBMS design"],
  },
  {
    group: "Tooling",
    items: ["Git", "Azure", "Google Cloud", "System Design"],
  },
];

export const experience = [
  {
    company: "TPS Worldwide",
    role: "Senior Software Engineer I",
    team: "Bill Payments Team \u2014 IRIS Bill Payment Platform",
    period: "04/2026 \u2014 Present",
    location: "Karachi",
    points: [
      "Support and extend a multi-channel bill payment platform: online and offline biller integrations, dynamic biller onboarding, and configurable processing rules.",
      "Configure the platform as a billing gateway, including grace-period logic and biller-specific settings.",
      "Resolve payment disputes through reversal processing, working directly with client stakeholders.",
      "Plan and run cutover activities to keep go-lives and releases low-risk.",
      "Investigate production issues on-site and remotely, coordinating fixes to minimize client downtime.",
    ],
  },
  {
    company: "Transviti Pvt Ltd",
    role: "Software Engineer",
    team: "CRM Revamp & Workflow Automation",
    period: "04/2025 \u2014 04/2026",
    location: "Karachi",
    points: [
      "Rebuilt core HR modules of an existing CRM \u2014 employee records, attendance, leave, timesheets.",
      "Designed a fully dynamic Appraisal Module: configurable employee selection, custom fields, date ranges, automated processing.",
      "Automated offboarding with a stage-based workflow \u2014 admin assignment, email and in-system notifications, generated PDF summaries.",
      "Built escalation-based leave automation with configurable rules.",
      "Also shipped an e-commerce system (catalog, auth, ordering, payment flow), an audit management system (scheduling, compliance tracking, role-based access), and an order & delivery platform with real-time tracking.",
    ],
  },
  {
    company: "GuruGroup LLC",
    role: "Software Engineer",
    team: "Full Stack Developer",
    period: "07/2023 \u2014 07/2025",
    location: "Remote",
    points: [
      "Built responsive, cross-browser front-ends and implemented design systems with CSS and styling frameworks.",
      "Integrated third-party libraries and APIs into product front-ends.",
      "Developed server-side logic, APIs, and authentication/authorization mechanisms.",
      "Deployed and managed server environments on Azure and Google Cloud.",
    ],
  },
];

export const projects = [
  {
    name: "ASP.Net Hostel Management Module",
    description:
      "A WinForms desktop module built on ASP.NET for managing hostel operations \u2014 resident records, room allocation, and admin workflows. Part of the IPT coursework project.",
    tags: ["C#", "ASP.NET", "WinForms"],
    url: "https://github.com/ShahHussain-sh/ASP.Net_HostelManagmentModule",
  },
  {
    name: "Online Shopping Platform",
    description:
      "A PHP-based e-commerce storefront covering product listings, cart handling, and order flow \u2014 an early full-stack build before moving into the .NET ecosystem.",
    tags: ["PHP", "MySQL", "E-commerce"],
    url: "https://github.com/ShahHussain-sh/onlineShopping_WP",
  },
  {
    name: "Car Price Predictor",
    description:
      "A regression model that estimates used-car prices from listing data, with the full cleaning, feature-engineering, and evaluation pipeline in a notebook.",
    tags: ["Python", "scikit-learn", "Data Science"],
    url: "https://github.com/ShahHussain-sh/CarPricePredictor_DS",
  },
  {
    name: "Laptop Price Predictor",
    description:
      "Predicts laptop prices from spec sheets (CPU, RAM, storage, GPU) using a trained regression pipeline, built while studying supervised learning.",
    tags: ["Python", "pandas", "scikit-learn"],
    url: "https://github.com/ShahHussain-sh/LaptopPricePredictor",
  },
  {
    name: "Subnet Calculator",
    description:
      "A command-line tool for computing subnet masks, host ranges, and network addresses \u2014 built for a Computer Networks course.",
    tags: ["Python", "Networking"],
    url: "https://github.com/ShahHussain-sh/Subnet_CN",
  },
  {
    name: "AI Supply Chain Project",
    description:
      "A university project applying AI techniques to a supply-chain planning problem, covering the modeling and evaluation stages.",
    tags: ["Python", "AI"],
    url: "https://github.com/ShahHussain-sh/ProjectsAI_Supply_Uni",
  },
];

export const education = [
  {
    school: "FAST National University (FAST-NU)",
    degree: "BS, Computer Science",
    period: "08/2019 \u2014 07/2023",
    detail:
      "Coursework: Programming Fundamentals, OOP, Data Structures, Algorithms, Software Design, Databases, Artificial Intelligence, Software Engineering, Data Science, Web & App Development.",
  },
  {
    school: "Army Public College, Faisal",
    degree: "Intermediate, Pre-Engineering",
    period: "2017 \u2014 2019",
    detail: null,
  },
];

export const certificates = [
  { name: "Supervised Learning with scikit-learn", source: "DataCamp" },
  { name: "Importing & Cleaning Data with Python", source: "DataCamp" },
  { name: "Plotting Data with Matplotlib", source: "DataCamp" },
];

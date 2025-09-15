// src/data/jobsData.js

export const categories = [
  "All",
  "Technology",
  "Business",
  "Creative",
  "Healthcare",
  "Trades"
];

export const jobs = [
  // Technology (1 - 10)
  {
    id: 1,
    title: "Frontend Developer (React/Next.js)",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Build responsive UIs with React, Next.js and TailwindCSS.",
    jobType: "Full-time",
    pay: "From ₦300,000 / month",
    longDesc: {
      responsibilities: [
        "Implement responsive user interfaces using React and Next.js.",
        "Translate Figma/Sketch designs into reusable components.",
        "Integrate frontend components with REST/GraphQL APIs.",
        "Optimize UI for performance and accessibility."
      ],
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in JavaScript, HTML, CSS and TailwindCSS",
        "Experience with React and Next.js",
        "Familiarity with Git and modern frontend tooling"
      ],
      benefits: [
        "Competitive salary",
        "Flexible work hours",
        "Learning & development budget"
      ]
    }
  },
  {
    id: 2,
    title: "Backend Engineer (Node.js)",
    category: "Technology",
    location: "Remote",
    shortDesc: "Design and build scalable server-side APIs with Node.js.",
    jobType: "Full-time",
    pay: "From ₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Build RESTful and GraphQL APIs using Node.js and Express.",
        "Design and maintain databases (SQL/NoSQL).",
        "Ensure authentication, authorization and security practices.",
        "Collaborate with frontend and DevOps teams for deployments."
      ],
      requirements: [
        "3+ years in backend development with Node.js",
        "Experience with PostgreSQL, MongoDB or MySQL",
        "Understanding of authentication and security best practices",
        "Familiarity with cloud platforms (AWS/GCP/Azure)"
      ],
      benefits: [
        "Remote-first culture",
        "Health allowance",
        "Paid time off"
      ]
    }
  },
  {
    id: 3,
    title: "Full-Stack Developer (JavaScript)",
    category: "Technology",
    location: "Lagos / Hybrid",
    shortDesc: "Work across frontend and backend to deliver end-to-end features.",
    jobType: "Full-time",
    pay: "From ₦400,000 / month",
    longDesc: {
      responsibilities: [
        "Develop frontend features with React and backend services with Node.js.",
        "Build API integrations and manage data models.",
        "Ship and maintain production code and run deployments.",
        "Participate in design and code reviews."
      ],
      requirements: [
        "Solid understanding of JavaScript (ES6+)",
        "Experience with React and Node.js",
        "Comfort with SQL/NoSQL databases",
        "Familiarity with CI/CD and cloud deployments"
      ],
      benefits: [
        "Stock options (where applicable)",
        "Career growth opportunities",
        "Flexible schedule"
      ]
    }
  },
  {
    id: 4,
    title: "UI/UX Designer",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Design intuitive, accessible interfaces and prototypes.",
    jobType: "Full-time",
    pay: "From ₦250,000 / month",
    longDesc: {
      responsibilities: [
        "Create wireframes, high-fidelity mockups and prototypes.",
        "Conduct user research and usability testing.",
        "Collaborate with engineers to ensure design fidelity.",
        "Maintain and evolve the design system."
      ],
      requirements: [
        "Portfolio with production design work",
        "Proficiency in Figma, Sketch or Adobe XD",
        "Knowledge of accessibility and interaction design",
        "Good communication and collaboration skills"
      ],
      benefits: [
        "Design tool subscriptions",
        "Mentorship and workshops",
        "Flexible working arrangement"
      ]
    }
  },
  {
    id: 5,
    title: "Cloud Engineer (AWS/Azure)",
    category: "Technology",
    location: "Remote",
    shortDesc: "Manage cloud infrastructure, automation and reliability.",
    jobType: "Full-time",
    pay: "From ₦450,000 / month",
    longDesc: {
      responsibilities: [
        "Design and operate scalable cloud infrastructure.",
        "Automate deployments using IaC (Terraform/CloudFormation).",
        "Ensure security, monitoring and backup strategies.",
        "Collaborate with teams for production reliability."
      ],
      requirements: [
        "Experience with AWS, Azure or GCP",
        "Knowledge of Docker and Kubernetes",
        "Familiarity with monitoring and logging tools",
        "Scripting skills (Bash, Python, etc.)"
      ],
      benefits: [
        "Certification support",
        "Remote-friendly work",
        "Competitive compensation"
      ]
    }
  },
  {
    id: 6,
    title: "Mobile App Developer (React Native)",
    category: "Technology",
    location: "Lagos / Remote",
    shortDesc: "Build cross-platform mobile apps using React Native.",
    jobType: "Full-time",
    pay: "From ₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Develop and maintain mobile applications with React Native.",
        "Integrate mobile apps with backend APIs and services.",
        "Optimize app performance and battery usage.",
        "Publish and maintain releases on App Store and Play Store."
      ],
      requirements: [
        "Experience with React Native or native mobile frameworks",
        "Strong JavaScript skills",
        "Understanding of app deployment processes",
        "Knowledge of mobile UX patterns"
      ],
      benefits: [
        "Mobile device stipend",
        "Flexible remote options",
        "Health allowance"
      ]
    }
  },
  {
    id: 7,
    title: "QA Tester / Automation Engineer",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Ensure software quality with manual and automated testing.",
    jobType: "Full-time",
    pay: "From ₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Write and execute test plans and test cases.",
        "Implement automated tests using tools like Cypress or Jest.",
        "Report, track and verify defects.",
        "Collaborate in agile teams to ensure delivery quality."
      ],
      requirements: [
        "Experience in manual and automated testing",
        "Familiarity with testing frameworks (Cypress, Jest, Selenium)",
        "Attention to detail and clear reporting skills",
        "Experience with CI integration is a plus"
      ],
      benefits: [
        "Testing tools access",
        "Training opportunities",
        "Paid leave"
      ]
    }
  },
  {
    id: 8,
    title: "DevOps Engineer",
    category: "Technology",
    location: "Remote",
    shortDesc: "Automate deployments and maintain CI/CD pipelines.",
    jobType: "Full-time",
    pay: "From ₦400,000 / month",
    longDesc: {
      responsibilities: [
        "Build and maintain CI/CD pipelines and release processes.",
        "Manage containerized deployments using Docker/Kubernetes.",
        "Implement monitoring, alerting and incident response.",
        "Automate infrastructure and configuration management."
      ],
      requirements: [
        "Experience with Jenkins, GitHub Actions or GitLab CI",
        "Knowledge of container orchestration",
        "Scripting experience (Bash/Python)",
        "Strong troubleshooting skills"
      ],
      benefits: [
        "Remote work",
        "Certification reimbursement",
        "Flexible hours"
      ]
    }
  },
  {
    id: 9,
    title: "Data Analyst",
    category: "Technology",
    location: "Lagos / Remote",
    shortDesc: "Turn data into insights and business decisions.",
    jobType: "Full-time",
    pay: "From ₦300,000 / month",
    longDesc: {
      responsibilities: [
        "Collect, clean and analyze datasets.",
        "Build dashboards and reports to inform stakeholders.",
        "Identify trends and present actionable insights.",
        "Collaborate with product and business teams."
      ],
      requirements: [
        "Proficiency in SQL and Excel",
        "Experience with visualization tools (Tableau/Power BI)",
        "Basic knowledge of Python or R",
        "Strong analytical and communication skills"
      ],
      benefits: [
        "Learning budget",
        "Health allowance",
        "Flexible work"
      ]
    }
  },
  {
    id: 10,
    title: "Cybersecurity Specialist",
    category: "Technology",
    location: "Remote",
    shortDesc: "Protect systems and networks from security threats.",
    jobType: "Full-time",
    pay: "From ₦450,000 / month",
    longDesc: {
      responsibilities: [
        "Monitor networks and systems for vulnerabilities.",
        "Implement security controls and incident response.",
        "Conduct penetration tests and security assessments.",
        "Educate team members about security best practices."
      ],
      requirements: [
        "Experience in network and application security",
        "Familiarity with security tools (Wireshark, IDS, SIEM)",
        "Certifications (Security+, CEH) are a plus",
        "Strong analytical skills"
      ],
      benefits: [
        "Security training allowance",
        "Remote work options",
        "Competitive pay"
      ]
    }
  },

  // Business & Management (11 - 20)
  {
    id: 11,
    title: "Project Manager",
    category: "Business",
    location: "Lagos",
    shortDesc: "Lead project delivery, timelines and cross-functional teams.",
    jobType: "Full-time",
    pay: "From ₦300,000 / month",
    longDesc: {
      responsibilities: [
        "Plan and oversee project execution and delivery.",
        "Coordinate across teams and manage stakeholder expectations.",
        "Track progress, budgets, and mitigate risks.",
        "Maintain project documentation and perform retrospectives."
      ],
      requirements: [
        "Experience managing software or business projects",
        "Familiarity with Agile frameworks (Scrum/Kanban)",
        "Strong organizational and communication skills",
        "Experience with tools like Jira or Trello"
      ],
      benefits: [
        "Professional development",
        "Performance bonuses",
        "Flexible work schedule"
      ]
    }
  },
  {
    id: 12,
    title: "Business Analyst",
    category: "Business",
    location: "Lagos",
    shortDesc: "Analyze business processes and translate needs to product teams.",
    jobType: "Full-time",
    pay: "From ₦250,000 / month",
    longDesc: {
      responsibilities: [
        "Gather and document business requirements.",
        "Create user stories and acceptance criteria.",
        "Analyze processes and propose improvements.",
        "Work closely with stakeholders and development teams."
      ],
      requirements: [
        "Experience in business analysis or product support",
        "Strong documentation and stakeholder management skills",
        "Understanding of data and KPIs",
        "Good communication skills"
      ],
      benefits: [
        "Career growth paths",
        "Training and workshops",
        "Health allowance"
      ]
    }
  },
  {
    id: 13,
    title: "Human Resources Manager",
    category: "Business",
    location: "Lagos",
    shortDesc: "Manage recruitment, policies and employee relations.",
    jobType: "Full-time",
    pay: "From ₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Lead recruitment and onboarding processes.",
        "Manage HR policies, benefits and compliance.",
        "Support managers on employee relations and performance.",
        "Drive employee engagement initiatives."
      ],
      requirements: [
        "Experience in HR generalist or managerial roles",
        "Knowledge of employment law and HR systems",
        "Strong interpersonal skills",
        "Confidentiality and professionalism"
      ],
      benefits: [
        "Health benefits",
        "Professional development",
        "Work-life balance initiatives"
      ]
    }
  },
  {
    id: 14,
    title: "Marketing Manager",
    category: "Business",
    location: "Remote",
    shortDesc: "Drive marketing strategy, campaigns and brand growth.",
    jobType: "Full-time",
    pay: "From ₦280,000 / month",
    longDesc: {
      responsibilities: [
        "Develop and execute marketing strategies.",
        "Manage campaigns across channels (digital, email, social).",
        "Analyze campaign performance and optimize spend.",
        "Collaborate with product and sales for go-to-market plans."
      ],
      requirements: [
        "Experience in digital marketing and campaign management",
        "Familiarity with analytics and marketing tools",
        "Creative mindset and strong communication skills",
        "Experience with budgets and ROI tracking"
      ],
      benefits: [
        "Performance bonuses",
        "Flexible working hours",
        "Training allowance"
      ]
    }
  },
  {
    id: 15,
    title: "Operations Manager",
    category: "Business",
    location: "Lagos",
    shortDesc: "Oversee daily operations and improve processes.",
    jobType: "Full-time",
    pay: "From ₦270,000 / month",
    longDesc: {
      responsibilities: [
        "Manage operational workflows and vendor relationships.",
        "Implement process improvements for efficiency.",
        "Monitor KPIs and report to leadership.",
        "Support cross-functional teams with operational needs."
      ],
      requirements: [
        "Experience in operations or logistics",
        "Strong organizational skills",
        "Analytical approach to process improvement",
        "Good communication and leadership"
      ],
      benefits: [
        "Competitive pay",
        "Health plan",
        "Career development"
      ]
    }
  },
  {
    id: 16,
    title: "Financial Analyst",
    category: "Business",
    location: "Lagos",
    shortDesc: "Analyze financial data to support business decisions.",
    jobType: "Full-time",
    pay: "From ₦300,000 / month",
    longDesc: {
      responsibilities: [
        "Prepare financial models and forecasts.",
        "Analyze budgets, revenue and expense drivers.",
        "Provide insights to leadership for strategic decisions.",
        "Support month-end reporting and variance analysis."
      ],
      requirements: [
        "Strong Excel and financial modelling skills",
        "Experience with accounting or finance roles",
        "Analytical mindset and attention to detail",
        "Knowledge of financial systems"
      ],
      benefits: [
        "Performance-based bonuses",
        "Professional development support",
        "Health benefits"
      ]
    }
  },
  {
    id: 17,
    title: "Sales Executive",
    category: "Business",
    location: "Lagos / Remote",
    shortDesc: "Generate leads and close deals to hit sales targets.",
    jobType: "Full-time",
    pay: "Basic + Commission",
    longDesc: {
      responsibilities: [
        "Identify and qualify prospects.",
        "Pitch products/services and negotiate deals.",
        "Manage client relationships and pipelines.",
        "Meet or exceed monthly sales targets."
      ],
      requirements: [
        "Proven sales experience",
        "Strong communication and negotiation skills",
        "Self-motivated and target-driven",
        "Familiarity with CRM systems"
      ],
      benefits: [
        "Attractive commission structure",
        "Sales incentives",
        "Career progression"
      ]
    }
  },
  {
    id: 18,
    title: "Customer Relationship Manager",
    category: "Business",
    location: "Lagos",
    shortDesc: "Manage client success and long-term partnerships.",
    jobType: "Full-time",
    pay: "From ₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Onboard and support customers to achieve outcomes.",
        "Monitor account health and address issues.",
        "Build long-term relationships and renewals.",
        "Act as liaison between customers and internal teams."
      ],
      requirements: [
        "Experience in customer success or account management",
        "Strong communication and problem-solving skills",
        "Customer-focused mindset",
        "Ability to manage multiple accounts"
      ],
      benefits: [
        "Training and development",
        "Performance rewards",
        "Flexible work options"
      ]
    }
  },
  {
    id: 19,
    title: "Product Manager",
    category: "Business",
    location: "Lagos / Hybrid",
    shortDesc: "Define product vision and lead cross-functional teams.",
    jobType: "Full-time",
    pay: "From ₦400,000 / month",
    longDesc: {
      responsibilities: [
        "Define product roadmap and prioritize features.",
        "Work with engineering and design to ship products.",
        "Gather user feedback and iterate on the product.",
        "Measure product performance and KPIs."
      ],
      requirements: [
        "Experience in product management or related role",
        "Strong strategic and analytical skills",
        "Excellent stakeholder communication",
        "Familiarity with product analytics tools"
      ],
      benefits: [
        "Leadership opportunities",
        "Competitive salary",
        "Growth & mentorship"
      ]
    }
  },
  {
    id: 20,
    title: "Administrative Assistant",
    category: "Business",
    location: "Lagos",
    shortDesc: "Provide administrative support to teams and executives.",
    jobType: "Full-time",
    pay: "From ₦120,000 / month",
    longDesc: {
      responsibilities: [
        "Manage schedules, correspondence and filing.",
        "Support HR and finance with basic tasks.",
        "Coordinate meetings and travel arrangements.",
        "Perform general office duties as assigned."
      ],
      requirements: [
        "Good organizational skills",
        "Proficiency with MS Office",
        "Strong communication",
        "Attention to detail"
      ],
      benefits: [
        "Stable employment",
        "Training opportunities",
        "Paid leave"
      ]
    }
  },

  // Creative & Media (21 - 30)
  {
    id: 21,
    title: "Graphic Designer",
    category: "Creative",
    location: "Remote",
    shortDesc: "Create visuals for web, social, and print.",
    jobType: "Full-time",
    pay: "From ₦180,000 / month",
    longDesc: {
      responsibilities: [
        "Design marketing assets, logos and UI elements.",
        "Work with content and product teams on creative deliverables.",
        "Maintain brand consistency across channels.",
        "Prepare files for web and print production."
      ],
      requirements: [
        "Proficiency in Adobe Creative Suite or Figma",
        "Strong portfolio of design work",
        "Attention to typography and layout",
        "Good collaboration skills"
      ],
      benefits: [
        "Creative tool subscriptions",
        "Remote-friendly",
        "Portfolio growth opportunities"
      ]
    }
  },
  {
    id: 22,
    title: "Content Writer",
    category: "Creative",
    location: "Lagos / Remote",
    shortDesc: "Write blog posts, marketing copy, and product content.",
    jobType: "Full-time",
    pay: "From ₦150,000 / month",
    longDesc: {
      responsibilities: [
        "Produce SEO-friendly articles and marketing copy.",
        "Collaborate with designers and product teams.",
        "Research topics and verify information.",
        "Edit and proofread content before publishing."
      ],
      requirements: [
        "Excellent writing and editing skills",
        "Basic knowledge of SEO",
        "Ability to meet deadlines",
        "Portfolio of published work"
      ],
      benefits: [
        "Flexible schedule",
        "Exposure to varied projects",
        "Content training"
      ]
    }
  },
  {
    id: 23,
    title: "Copywriter",
    category: "Creative",
    location: "Lagos",
    shortDesc: "Write persuasive marketing copy and ad headlines.",
    jobType: "Full-time",
    pay: "From ₦160,000 / month",
    longDesc: {
      responsibilities: [
        "Craft compelling ad copy and landing page content.",
        "Collaborate with creative and marketing teams.",
        "Test messaging and iterate based on performance.",
        "Maintain brand voice across campaigns."
      ],
      requirements: [
        "Strong copywriting and editing skills",
        "Understanding of conversion-focused writing",
        "Ability to work with briefs and deadlines",
        "Portfolio of ad or marketing copy"
      ],
      benefits: [
        "Performance bonuses",
        "Creative workshops",
        "Flexible working"
      ]
    }
  },
  {
    id: 24,
    title: "Video Editor",
    category: "Creative",
    location: "Remote",
    shortDesc: "Edit promotional and social videos with creative flair.",
    jobType: "Contract",
    pay: "From ₦120,000 / month (contract)",
    longDesc: {
      responsibilities: [
        "Edit footage into polished videos for social and web.",
        "Add motion graphics and sound design when needed.",
        "Collaborate with content and marketing teams.",
        "Optimize videos for platform delivery."
      ],
      requirements: [
        "Experience with Premiere Pro, Final Cut, or DaVinci Resolve",
        "Portfolio of video editing work",
        "Good sense of pacing and storytelling",
        "Ability to meet tight deadlines"
      ],
      benefits: [
        "Remote contract work",
        "Creative freedom",
        "Tool access"
      ]
    }
  },
  {
    id: 25,
    title: "Social Media Manager",
    category: "Creative",
    location: "Lagos",
    shortDesc: "Plan and run social campaigns to grow brand presence.",
    jobType: "Full-time",
    pay: "From ₦180,000 / month",
    longDesc: {
      responsibilities: [
        "Develop content calendars and run campaigns.",
        "Engage with audiences and monitor performance.",
        "Create social creatives with the creative team.",
        "Report on growth and optimize strategies."
      ],
      requirements: [
        "Experience running social media accounts",
        "Familiarity with analytics tools",
        "Good copy and creative understanding",
        "Ability to manage multiple channels"
      ],
      benefits: [
        "Performance incentives",
        "Flexible hours",
        "Learning resources"
      ]
    }
  },
  {
    id: 26,
    title: "Photographer",
    category: "Creative",
    location: "Lagos",
    shortDesc: "Shoot and retouch images for campaigns and product.",
    jobType: "Contract",
    pay: "Per assignment",
    longDesc: {
      responsibilities: [
        "Plan and execute photoshoots for products and campaigns.",
        "Edit and retouch images for web and print.",
        "Collaborate with design and marketing teams.",
        "Manage file delivery and archiving."
      ],
      requirements: [
        "Portfolio of photography work",
        "Proficiency in photo editing tools",
        "Good lighting and composition skills",
        "Reliable equipment"
      ],
      benefits: [
        "Freelance flexibility",
        "Exposure to brand shoots",
        "Creative collaboration"
      ]
    }
  },
  {
    id: 27,
    title: "Illustrator",
    category: "Creative",
    location: "Remote",
    shortDesc: "Create custom illustrations for web and marketing.",
    jobType: "Freelance",
    pay: "Per project",
    longDesc: {
      responsibilities: [
        "Produce vector and raster illustrations for web use.",
        "Work with design to match brand style.",
        "Deliver assets optimized for multiple sizes.",
        "Iterate based on feedback."
      ],
      requirements: [
        "Strong illustration portfolio",
        "Proficiency with Illustrator/Procreate",
        "Ability to meet art direction",
        "Good communication"
      ],
      benefits: [
        "Remote freelance work",
        "Creative variety",
        "Portfolio growth"
      ]
    }
  },
  {
    id: 28,
    title: "Brand Strategist",
    category: "Creative",
    location: "Lagos",
    shortDesc: "Define brand positioning and communication strategies.",
    jobType: "Full-time",
    pay: "From ₦320,000 / month",
    longDesc: {
      responsibilities: [
        "Develop brand strategies and messaging frameworks.",
        "Work with marketing and design to execute brand plans.",
        "Conduct competitive and market analysis.",
        "Ensure brand consistency across touchpoints."
      ],
      requirements: [
        "Experience in branding or marketing strategy",
        "Strong analytical and creative thinking",
        "Excellent presentation skills",
        "Portfolio of past brand work"
      ],
      benefits: [
        "Strategic leadership role",
        "Competitive salary",
        "Growth opportunities"
      ]
    }
  },
  {
    id: 29,
    title: "Motion Graphics Designer",
    category: "Creative",
    location: "Remote",
    shortDesc: "Create animated visuals for product and marketing.",
    jobType: "Contract",
    pay: "Per project",
    longDesc: {
      responsibilities: [
        "Design and animate motion graphics for video and web.",
        "Collaborate with creative teams to bring concepts to life.",
        "Deliver optimized animations for multiple platforms.",
        "Iterate based on feedback and performance data."
      ],
      requirements: [
        "Experience with After Effects or similar",
        "Portfolio of motion work",
        "Understanding of timing and storytelling",
        "Ability to manage project timelines"
      ],
      benefits: [
        "Remote creative work",
        "Exposure to diverse projects",
        "Tool access"
      ]
    }
  },
  {
    id: 30,
    title: "Public Relations Specialist",
    category: "Creative",
    location: "Lagos",
    shortDesc: "Manage public image, media relations and PR campaigns.",
    jobType: "Full-time",
    pay: "From ₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Develop PR strategies and press materials.",
        "Build relationships with media and influencers.",
        "Coordinate press events and communications.",
        "Monitor coverage and report on PR impact."
      ],
      requirements: [
        "Experience in PR or communications",
        "Strong writing and relationship-building skills",
        "Crisis communications experience is a plus",
        "Good organizational skills"
      ],
      benefits: [
        "Media training",
        "Networking opportunities",
        "Performance incentives"
      ]
    }
  },

  // Healthcare & Education (31 - 40)
  {
    id: 31,
    title: "Registered Nurse",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Provide patient care and support clinical operations.",
    jobType: "Full-time",
    pay: "From ₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Deliver direct patient care and monitor health status.",
        "Administer medications and treatments as prescribed.",
        "Document patient information accurately.",
        "Collaborate with medical staff for care plans."
      ],
      requirements: [
        "Valid nursing license",
        "Clinical experience in a hospital or clinic",
        "Strong communication and empathy",
        "Ability to work shifts"
      ],
      benefits: [
        "Health insurance",
        "Shift allowances",
        "Professional development"
      ]
    }
  },
  {
    id: 32,
    title: "Medical Laboratory Scientist",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Perform lab tests and ensure result accuracy.",
    jobType: "Full-time",
    pay: "From ₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Run laboratory tests and analyze results.",
        "Maintain lab equipment and quality control.",
        "Report accurate and timely findings.",
        "Adhere to safety and regulatory standards."
      ],
      requirements: [
        "Degree in Medical Laboratory Science",
        "Experience with lab equipment and protocols",
        "Attention to detail",
        "Good record-keeping"
      ],
      benefits: [
        "Health benefits",
        "Professional growth",
        "Technical training"
      ]
    }
  },
  {
    id: 33,
    title: "Pharmacist",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Dispense medications and advise patients on drug use.",
    jobType: "Full-time",
    pay: "From ₦240,000 / month",
    longDesc: {
      responsibilities: [
        "Dispense prescription medications accurately.",
        "Provide drug counseling to patients.",
        "Manage pharmacy inventory and orders.",
        "Ensure regulatory compliance."
      ],
      requirements: [
        "Valid pharmacy degree and license",
        "Knowledge of drug interactions",
        "Customer service skills",
        "Inventory management"
      ],
      benefits: [
        "Competitive pay",
        "Health allowance",
        "Professional development"
      ]
    }
  },
  {
    id: 34,
    title: "General Practitioner (Doctor)",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Provide primary care and clinical assessments.",
    jobType: "Full-time",
    pay: "From ₦600,000 / month",
    longDesc: {
      responsibilities: [
        "Perform clinical examinations and diagnose conditions.",
        "Prescribe treatments and follow-up plans.",
        "Coordinate with specialists when needed.",
        "Maintain accurate patient records."
      ],
      requirements: [
        "Medical degree and license to practice",
        "Clinical experience",
        "Excellent diagnostic and bedside manner",
        "Ability to work with multidisciplinary teams"
      ],
      benefits: [
        "Competitive remuneration",
        "Medical staff benefits",
        "Continuing education"
      ]
    }
  },
  {
    id: 35,
    title: "Primary School Teacher",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Teach and care for primary-school learners.",
    jobType: "Full-time",
    pay: "From ₦120,000 / month",
    longDesc: {
      responsibilities: [
        "Plan and deliver lessons according to curriculum.",
        "Assess student progress and provide feedback.",
        "Create a safe and inclusive classroom environment.",
        "Communicate with parents about student development."
      ],
      requirements: [
        "Degree or diploma in education",
        "Classroom teaching experience",
        "Patience and strong communication skills",
        "Classroom management skills"
      ],
      benefits: [
        "Teacher training",
        "School benefits",
        "Holiday periods"
      ]
    }
  },
  {
    id: 36,
    title: "University Lecturer",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Deliver lectures and support research in your field.",
    jobType: "Full-time",
    pay: "From ₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Teach undergraduate and postgraduate courses.",
        "Supervise student research and projects.",
        "Publish research and participate in academic activities.",
        "Contribute to curriculum development."
      ],
      requirements: [
        "Advanced degree (MSc/PhD preferred)",
        "Teaching and research experience",
        "Strong subject-matter expertise",
        "Good communication and academic writing"
      ],
      benefits: [
        "Research funding support",
        "Academic leave",
        "Development opportunities"
      ]
    }
  },
  {
    id: 37,
    title: "Education Consultant",
    category: "Healthcare",
    location: "Remote",
    shortDesc: "Advise institutions on curriculum and learning strategies.",
    jobType: "Contract",
    pay: "Project-based",
    longDesc: {
      responsibilities: [
        "Assess curricula and recommend improvements.",
        "Train teachers and education leaders.",
        "Develop learning materials and programs.",
        "Evaluate educational outcomes and impact."
      ],
      requirements: [
        "Experience in education development",
        "Strong analytical and training skills",
        "Excellent communication",
        "Project management experience"
      ],
      benefits: [
        "Project-based flexibility",
        "Consulting fees",
        "Remote work"
      ]
    }
  },
  {
    id: 38,
    title: "School Administrator",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Oversee school operations and administration.",
    jobType: "Full-time",
    pay: "From ₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Manage admissions, staff, and school logistics.",
        "Ensure compliance and student welfare.",
        "Coordinate parent and community engagement.",
        "Oversee budgeting and school planning."
      ],
      requirements: [
        "Experience in school administration",
        "Strong organizational skills",
        "Leadership and interpersonal skills",
        "Understanding of education regulations"
      ],
      benefits: [
        "Professional development",
        "Health benefits",
        "Structured work schedule"
      ]
    }
  },
  {
    id: 39,
    title: "Psychologist (Counselling)",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Provide counselling and mental health support services.",
    jobType: "Full-time",
    pay: "From ₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Conduct assessments and provide counselling.",
        "Develop treatment plans and referrals.",
        "Maintain confidential records and ethical practice.",
        "Work with multidisciplinary teams for patient care."
      ],
      requirements: [
        "Degree in Psychology and relevant licensure",
        "Clinical counselling experience",
        "Strong communication and empathy",
        "Confidentiality and professionalism"
      ],
      benefits: [
        "Supervision and training",
        "Health benefits",
        "Flexible scheduling"
      ]
    }
  },
  {
    id: 40,
    title: "Physiotherapist",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Provide physical rehabilitation and therapy services.",
    jobType: "Full-time",
    pay: "From ₦190,000 / month",
    longDesc: {
      responsibilities: [
        "Assess patients' physical conditions and plan therapy.",
        "Provide treatments and track progress.",
        "Educate patients on exercises and prevention.",
        "Coordinate with medical staff for care plans."
      ],
      requirements: [
        "Degree or diploma in physiotherapy",
        "Clinical experience in rehabilitation",
        "Manual therapy skills",
        "Good patient communication"
      ],
      benefits: [
        "Professional development",
        "Clinic support",
        "Healthcare benefits"
      ]
    }
  },

  // Skilled Trades & Miscellaneous (41 - 50)
  {
    id: 41,
    title: "Electrician",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Install and maintain electrical systems for residential and commercial sites.",
    jobType: "Full-time",
    pay: "From ₦120,000 / month",
    longDesc: {
      responsibilities: [
        "Install wiring, outlets and lighting systems.",
        "Diagnose and repair electrical faults.",
        "Follow safety codes and standards.",
        "Provide maintenance and preventive checks."
      ],
      requirements: [
        "Technical certificate or apprenticeship",
        "Practical electrical installation experience",
        "Knowledge of safety protocols",
        "Good problem-solving skills"
      ],
      benefits: [
        "Tool allowances",
        "On-the-job training",
        "Overtime pay"
      ]
    }
  },
  {
    id: 42,
    title: "Plumber",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Install and repair plumbing systems in residential and commercial buildings.",
    jobType: "Full-time",
    pay: "From ₦110,000 / month",
    longDesc: {
      responsibilities: [
        "Install and repair pipes, fixtures and water systems.",
        "Diagnose leaks and plumbing issues.",
        "Ensure compliance with codes and safety.",
        "Provide maintenance and service inspections."
      ],
      requirements: [
        "Plumbing certification or apprenticeship",
        "Practical plumbing experience",
        "Attention to detail and safety",
        "Customer service skills"
      ],
      benefits: [
        "Tool allowance",
        "Stable contracts",
        "Training opportunities"
      ]
    }
  },
  {
    id: 43,
    title: "Carpenter",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Construct and fit wooden structures and furniture.",
    jobType: "Full-time",
    pay: "From ₦100,000 / month",
    longDesc: {
      responsibilities: [
        "Measure, cut, assemble and install wood components.",
        "Build furniture, cabinets and frames.",
        "Follow project specifications and blueprints.",
        "Perform finishing and quality checks."
      ],
      requirements: [
        "Carpentry apprenticeship or trade experience",
        "Skill with hand and power tools",
        "Ability to read plans and measurements",
        "Physical stamina"
      ],
      benefits: [
        "Tool support",
        "Steady on-site work",
        "Opportunity for specialization"
      ]
    }
  },
  {
    id: 44,
    title: "Automotive Mechanic",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Diagnose and repair vehicles for performance and safety.",
    jobType: "Full-time",
    pay: "From ₦140,000 / month",
    longDesc: {
      responsibilities: [
        "Inspect and diagnose vehicle systems.",
        "Perform repairs, servicing and maintenance.",
        "Use diagnostic tools and maintain records.",
        "Advise customers on vehicle condition and repairs."
      ],
      requirements: [
        "Automotive repair certification or experience",
        "Knowledge of vehicle systems",
        "Use of diagnostic equipment",
        "Customer service orientation"
      ],
      benefits: [
        "Tool allowances",
        "Overtime pay",
        "Training and certifications"
      ]
    }
  },
  {
    id: 45,
    title: "Welder",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Perform welding tasks for fabrication and repair projects.",
    jobType: "Full-time",
    pay: "From ₦100,000 / month",
    longDesc: {
      responsibilities: [
        "Weld and fabricate metal structures.",
        "Read welding blueprints and follow specifications.",
        "Maintain welding equipment and safety protocols.",
        "Inspect welds for quality."
      ],
      requirements: [
        "Welding certification",
        "Experience with MIG/TIG or stick welding",
        "Safety awareness and PPE usage",
        "Attention to weld quality"
      ],
      benefits: [
        "Tool support",
        "Jobsite travel allowance",
        "Skill development"
      ]
    }
  },
  {
    id: 46,
    title: "Driver (Logistics)",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Transport goods and ensure timely deliveries across routes.",
    jobType: "Full-time",
    pay: "From ₦90,000 / month",
    longDesc: {
      responsibilities: [
        "Deliver goods safely and on schedule.",
        "Perform vehicle safety checks and maintenance reporting.",
        "Handle delivery documentation and customer handoffs.",
        "Follow route planning and logistics instructions."
      ],
      requirements: [
        "Valid driver's license",
        "Experience with delivery or logistics driving",
        "Good time management and customer service",
        "Familiarity with local routes"
      ],
      benefits: [
        "Fuel/transport allowance",
        "Overtime compensation",
        "Stable work"
      ]
    }
  },
  {
    id: 47,
    title: "Chef / Cook",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Prepare meals, manage kitchen tasks and ensure food quality.",
    jobType: "Full-time",
    pay: "From ₦120,000 / month",
    longDesc: {
      responsibilities: [
        "Prepare dishes according to menu and quality standards.",
        "Manage kitchen hygiene and food safety.",
        "Assist with menu planning and inventory.",
        "Coordinate with service staff for timely delivery."
      ],
      requirements: [
        "Culinary training or experience",
        "Knowledge of food safety practices",
        "Ability to work in a fast-paced environment",
        "Creativity and teamwork"
      ],
      benefits: [
        "Meal allowance",
        "Training opportunities",
        "Shift differentials"
      ]
    }
  },
  {
    id: 48,
    title: "Security Officer",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Protect property, staff and assets through patrol and monitoring.",
    jobType: "Full-time",
    pay: "From ₦70,000 / month",
    longDesc: {
      responsibilities: [
        "Monitor premises and perform security patrols.",
        "Report incidents and maintain logs.",
        "Control access and ensure visitor protocols.",
        "Work with emergency response as needed."
      ],
      requirements: [
        "Security training or certification preferred",
        "Good observation and reporting skills",
        "Ability to work in shifts",
        "Professional demeanor"
      ],
      benefits: [
        "Shift allowances",
        "Uniform provision",
        "On-the-job training"
      ]
    }
  },
  {
    id: 49,
    title: "Tailor / Fashion Maker",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Design and tailor clothing to specifications.",
    jobType: "Full-time",
    pay: "From ₦80,000 / month",
    longDesc: {
      responsibilities: [
        "Cut, sew and finish clothing to client specifications.",
        "Take measurements and provide fitting advice.",
        "Maintain sewing equipment and workspace.",
        "Manage timelines for client orders."
      ],
      requirements: [
        "Experience in tailoring or dressmaking",
        "Sewing and pattern-making skills",
        "Attention to detail",
        "Customer service skills"
      ],
      benefits: [
        "Tool and material support",
        "Client exposure",
        "Flexible scheduling"
      ]
    }
  },
  {
    id: 50,
    title: "Cleaner / Janitor",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Maintain cleanliness and sanitation of office or facility spaces.",
    jobType: "Full-time",
    pay: "From ₦50,000 / month",
    longDesc: {
      responsibilities: [
        "Perform cleaning tasks across assigned areas.",
        "Manage cleaning supplies and equipment.",
        "Follow health and safety protocols.",
        "Report maintenance issues to supervisors."
      ],
      requirements: [
        "Experience in cleaning or facility maintenance",
        "Reliable and punctual",
        "Basic knowledge of cleaning chemicals and safety",
        "Team player"
      ],
      benefits: [
        "Stable employment",
        "Training on safety",
        "Overtime pay"
      ]
    }
  }
];

export default jobs;

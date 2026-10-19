/**
 * Content for the corporate pages: Home, About, Safety, Quality, Subcontractors.
 * EDITORS: every heading, paragraph and image path on those pages lives here.
 * Images are files in /public/assets (originals downloaded from anscollc.com).
 */

export type Service = { icon: string; title: string; text: string };
export type Tile = { image: string; title: string; text: string };

/* ------------------------------ HOME ------------------------------ */
export const home = {
  meta: {
    title: "Ansco & Associates - Premium National Telecom Service Provider",
    description:
      "Ansco offers full turnkey solutions and supplies all of the expertise needed to take telecom projects from planning to execution.",
    ogImage: "/assets/home-og.jpg",
  },
  hero: {
    title: "A Leading Telecommunications Service Provider",
    cta: { label: "Our Company", href: "/about/" },
    poster: "/assets/home-og.jpg",
    // Original Vimeo background loop (third-party embed).
    video:
      "https://player.vimeo.com/video/723335998?h=209daa55e0&badge=0&autopause=0&player_id=0&app_id=584791&autoplay=1&loop=1&background=1",
  },
  whatWeDo: {
    title: "What We Do",
    text: "Ansco & Associates, LLC supplies all of the expertise needed to take telecom projects from planning to execution. Offering full turnkey solutions, we can take on all of the heavy lifting required to build a successful telecommunications system.",
    items: [
      { icon: "/assets/ansco-construction-icon.png", title: ["OSP Construction", "& Maintenance"] },
      { icon: "/assets/ansco-wireless.png", title: ["Wireless"] },
      { icon: "/assets/tcs-cable-splicing.png", title: ["Fiber Splicing"] },
      { icon: "/assets/tcs-engineering.png", title: ["Engineering", "& Design"] },
    ],
  },
  panels: {
    whoWeAre: {
      href: "/about/",
      image: "/assets/home-who-we-are.jpg",
      title: "Who We Are",
      text: "Our Atlanta-based firm continues to expand its foothold, with over 40 locations and 1,400 crew members to date. We’ve recruited and continue to seek out the industry’s best talent, dedicating our resources to actively nurturing their skills through ongoing education, training and field experience.",
    },
    careers: {
      href: "/careers/",
      image: "/assets/home-careers.jpg",
      title: "Careers",
      text: "Ansco is always on the lookout for extraordinary talent. Our workforce, tenured and newcomers alike, are dedicated to jobsite safety, quality workmanship, and continued industry education and experience. Learn more about Ansco and consider applying to join our team.",
    },
    subcontractors: {
      href: "/subcontractors/",
      image: "/assets/home-subs.jpg",
      title: "Subcontractors",
      text: "Grow your business under the Ansco banner. Discover our opportunities for subcontractors.",
    },
  },
  services: {
    title: "Our Services",
    text: "Ansco offers comprehensive telecom services, covering everything from system conceptualization to turnkey construction.",
    items: [
      {
        icon: "/assets/ansco-construction-icon.png",
        title: "OSP Construction & Maintenance",
        text: "We at Ansco have spent decades working on some of the country’s most impressive projects. Our veterans leverage this experience to provide our customers with swift, smart, high quality construction services that keep our projects on schedule and on budget.",
      },
      {
        icon: "/assets/ansco-wireless.png",
        title: "Wireless",
        text: "Our specialized team has been in the wireless game since its inception, so we’ve had the opportunity to develop our skills and learn about the industry’s best-kept secrets. This allows us to provide our customers with wireless infrastructure of the highest quality.",
      },
      {
        icon: "/assets/tcs-cable-splicing.png",
        title: "Fiber Splicing",
        text: "Fostering the strongest connections takes careful work by skilled experts. We train our people to perform fiber and copper splicing operations with the most advanced degree of speed and efficiency.",
      },
      {
        icon: "/assets/tcs-engineering.png",
        title: "Engineering & Design",
        text: "We are prepared to deliver all of the design planning and documentation for any telecom project. Drafting, specification, and permitting is all taken care of, eliminating worry over technicalities.",
      },
    ] satisfies Service[],
  },
  contact: {
    image: "/assets/home-contact.jpg",
    title: "Contact Us",
    text: "The team at Ansco is eager to hear from you. Whether you’ve got questions about our services, our people or our equipment, we welcome your inquiries.",
  },
};

/* ------------------------------ ABOUT ------------------------------ */
export const about = {
  meta: { title: "About Us", description: "For the past 4 decades, Ansco & Associates, LLC has been a trusted name in the telecom industry.", ogImage: "/assets/about-og.jpg" },
  hero: { title: "About Us", image: "/assets/Aerial-perfect-shot-of-bucket-man.webp" },
  intro: {
    title: "Ansco & Associates",
    text: "For the past 4 decades, Ansco & Associates, LLC has been a trusted name in the telecom industry. Starting in Greensboro, North Carolina, and now boasting a national network, we offer providers dependable service for engineering, constructing, and maintaining systems of all types.",
  },
  // EDIT: counter values (animated on scroll)
  counters: [
    { value: 43, label: ["Years", "in Business"] },
    { value: 1424, label: ["Company", "Employees"] },
    { value: 1700, label: ["Vehicle", "Fleet"] },
    { value: 44, label: ["Strategic", "Locations"] },
  ],
  history: {
    title: "Linking the United States Since 1979",
    images: ["/assets/Linking-Southeast.webp", "/assets/Linking-Southeast-LOWER-PHOTO.webp"],
    paragraphs: [
      "After winning our first Master Contract with Southern Bell in 1981, Ansco has continued on a path of excellence by rapidly increasing both our geographical footprint and services offered. Our wireline services have grown to include a full suite of construction, engineering, and turnkey services for some of the largest telecommunications companies in the US.",
      "Ansco wireless services have grown to include program and construction management, real estate and site acquisition, civil construction, tower construction, line and antenna installation, site testing, carrier upgrades, small cell construction, and site maintenance.",
      "Ansco is headquartered just outside of Atlanta, GA with over 40 field offices and over 1,400 skilled and talented employees.",
    ],
  },
  mvv: {
    icon: "/assets/target-icon.png",
    title: "Mission - Vision - Values",
    mission: "Serve customers skillfully. Deliver results with discipline. Accountable in all we do.",
    vision: "To connect America.",
    values: [
      { term: "People:", text: "Our people are at the heart of everything we do. They are our most important resource. Every day, we strive to create and maintain a healthy environment in which they can grow their skills, work collaboratively, and deliver high quality services to our customers." },
      { term: "Safety:", text: "An instinctually safe culture is our goal, ensuring our teams, and everyone who comes in contact with our work, gets home safely each day." },
      { term: "Integrity:", text: "We hold ourselves accountable to one another and treat others with respect.  We are honest, forthright, and ethical in the work we perform and deliver every day." },
      { term: "Innovation:", text: "We continually challenge ourselves to improve our performance and solve problems, driving innovation, informed but unconstrained by our past experiences." },
      { term: "Customers:", text: "Customers are at the forefront of everything we do. By understanding their needs and exceeding their expectations, we strive to be valued partners, delivering the high quality our customers require and building enduring relationships." },
      { term: "Sustainability:", text: "We manage all aspects of our operations with accountability, understanding the economic, environmental, and social impacts our operations create for our people, stakeholders and the communities in which we work." },
    ],
  },
  services: [
    {
      image: "/assets/Construction-and-Maintenance.webp",
      title: "Construction & Maintenance",
      paragraphs: ["Whether it’s an aerial or buried installation, Ansco can handle all telecom, wireless and wireline, construction and maintenance projects, along with civil and tower/antennae work. Our team delivers turnkey solutions for all types of builds. We adhere to a strict schedule of preventative upkeep, and in the event of inclement weather or other unforeseen disturbances, our team is ready to respond right away."],
    },
    {
      image: "/assets/wireless.webp",
      title: "Wireless",
      paragraphs: ["We’ve developed the specialized skills and approach necessary to create wireless systems that stand up to today’s ever-rising standards. From real estate and site acquisition to cell tower construction and carrier upgrades, we cover every aspect of wireless installation, maintenance, and expansion."],
    },
    {
      image: "/assets/fiber-splicing.webp",
      title: "Fiber Splicing",
      paragraphs: ["Maintaining optimal system output requires strong connections that accommodate the fastest speeds. Our team of certified fiber splicing specialists use the industry’s most modern equipment and methods to perform top tier splicing services for both copper and fiber cables. These skills are kept up to date year after year, with ongoing education that keeps our service on the cutting edge."],
    },
    {
      image: "/assets/Engineering.webp",
      title: "Engineering & Design",
      paragraphs: [
        "Ansco offers comprehensive design and engineering services.  Including estimates, surveys, CAD drafting – from planning to permitting, we address all engineering needs to prepare each project for construction.",
      ],
      list: [
        "Underground and aerial outside plant engineering (fiber, copper, and coax)",
        "Project planning and estimating",
        "High level desktop survey",
        "CAD Drafting",
        "Fiber Optic Design (FTTx, Cell Backhaul, Interoffice)",
      ],
      after: "Our engineering team participates in ongoing technical training to ensure our skills, tools and methodologies are always up to date with the latest best industry practices to best meet the expectations and specifications of our customers.",
    },
    {
      image: "/assets/project-managment.webp",
      title: "Project Management",
      paragraphs: ["Our team of professionals have the experience and insights necessary to plan and execute projects, as well as adapt to any changes and challenges that surface. No matter what obstacles arise, we’ll be sure to overcome them on budget and time."],
    },
  ] as { image: string; title: string; paragraphs: string[]; list?: string[]; after?: string }[],
};

/* ------------------------------ SAFETY ------------------------------ */
export const safety = {
  meta: { title: "Safety", description: "Ansco believes safety is more than rules and procedures – it’s a mindset.", ogImage: "/assets/safety-og.jpg" },
  hero: { title: "Moving Forward In Safety Excellence", image: "/assets/safety-banner.jpg" },
  intro: {
    title: "Safety",
    image: "/assets/Safety-content-top-1.jpg",
    logo: "/assets/headway-logo.png",
    paragraphs: [
      "Ansco believes safety is more than rules and procedures – it’s a mindset. Headway™ safety program is the preferred path when mitigating risk on the job. Our multi-step strategy and intensive training empowers workers to recognize and enforce natural safety techniques, so they always get home safe.",
      "It’s just one of the ways we take care of the most talented people in the field. We are well known for industry-leading innovation and superior quality of work, and our Headway™ safety program reinforces our commitment to the people, places and environments we touch every day.",
    ],
  },
  vision: {
    title: "Safety Vision",
    text: "Lead with an instinctually safe culture, ensuring the utmost protection for our employees, customers, and the communities in which we work.",
    alwaysTitle: "A.L.W.A.Y.S.",
    alwaysText: "We believe that to create a best-in-class safety program, all employees must commit to a core list of safeguards. The safeguards are designed to protect against the most common causes of severe injury. They are foundational to our safety culture.",
    alwaysCta: "Click to View",
  },
  panels: [
    { href: "https://careers.anscollc.com/ansco", image: "/assets/careers.webp", title: "Careers", text: "Want to join our team? Discover careers!" },
    { href: "/subcontractors/", image: "/assets/Subcontractors.webp", title: "Subcontractors", text: "Want to be a subcontractor? Find out how here!" },
  ],
  training: {
    title: "Training",
    image: "/assets/training.webp",
    image2: "/assets/saftey-2-use-right-side-of-image-if-need-a-taller-image-dude-covered-in-safety-gear.webp",
    text: "Our employees are actively engaged in training, reporting, and auditing safety programs and protocols daily. Employee training spans several phases, beginning at their onboarding.",
    phases: [
      "New Hire Safety Orientation",
      "Task and job-specific documented safety qualification training",
      "Third-party safety certifications",
      "Field mentoring with Qualified Person",
      "Ongoing evaluation and continued education as identified via recurring documented field visits (JSO, Gatecheck, etc)",
    ],
    specializedTitle: "Specialized job focused safety training, for all construction and infrastructure job functions and work types:",
    specialized: [
      "Emergency Work (Line strikes, natural disaster recovery, etc)",
      "Working around utility and power poles",
      "Fire Prevention",
      "Stop work Authority (for example: No reprisal policy)",
      "Aerial construction",
      "Underground construction",
    ],
    otherTitle: "Other programs include:",
    other: [
      { title: "Driver Safety Program", text: "" },
      { title: "CertusLearn Training", text: "Internally developed digital training content is tailored to our industry’s specific tasks, hazards, and regulations." },
      { title: "OSHA", text: "To ensure the safety and wellness of all our team, at a minimum we adopt and follow all OSHA standards and training regulations." },
    ],
  },
  onSite: {
    title: "On-site Safety",
    text: "Along with a detailed and descriptive safety manual, we employ several techniques to ensure we are continuously evaluating and minimizing our risk.",
    tiles: [
      { image: "/assets/ccg-jtsa.jpg", title: "The Job Task Safety Assessment (JTSA)", text: "Creation of a Safety Action Plan prior to commencement of any work to control the risk associated with each hazard." },
      { image: "/assets/ccg-jso.jpg", title: "Job Safety Observation (JSO)", text: "This evaluation is completed by supervisors and managers every 45 days at a minimum." },
      { image: "/assets/gate-checks.jpg", title: "Gate checks", text: "Trucks, equipment, and all PPE are checked daily at field locations." },
      { image: "/assets/ccg-dvir.jpg", title: "Daily Vehicle Inspection Record (DVIR)", text: "Drivers inspect their vehicles at every use ensuring vehicles are safe to be driven on roadways." },
      { image: "/assets/ccg-inspection.jpg", title: "Jobsite Inspection", text: "Performance of routine safety jobsite inspection for subcontractors." },
      { image: "/assets/ccg-post-incident.jpg", title: "Post-incident Reviews", text: "Review aimed to identify the cause of an incident for future prevention." },
      { image: "/assets/ccg-root-cause.jpg", title: "Root Cause Analysis", text: "Specialized proprietary tool developed to identify incident root causes." },
      { image: "/assets/ccg-deviation.jpg", title: "Deviation Notification", text: "An automatic alert to notify supervisors that a deviation has occurred." },
    ] satisfies Tile[],
  },
};

/* ------------------------------ QUALITY ------------------------------ */
export const quality = {
  meta: { title: "Quality", description: "RIGHTWAY™ is Ansco’s Quality Management System and our preferred framework for ensuring excellence in our operations.", ogImage: "/assets/quality-hero.png" },
  hero: { title: "Deliver excellence, exceed expectations", image: "/assets/quality-hero.png" },
  rightway: {
    title: "At Ansco, We Prioritize Doing Things the RIGHTWAY™",
    image: "/assets/quality-picture-1.png",
    paragraphs: [
      "RIGHTWAY™, is our Quality Management System (QMS) and it is our preferred framework for ensuring excellence in our operations. Our structured approach and comprehensive training empower our workforce to proactively maintain and improve quality in all aspects of our business. We adhere to all legal requirements and policies governing health and safety, sustainability, and codes of conduct for our employees and the contractors we hire.",
      "Our commitment is to meet our customers' expectations while maintaining a superior standard of execution. Our staff and personnel are highly qualified through experience and training. We recognize that quality is crucial to our success, and we will educate our employees to ensure our work meets our customers' satisfaction.  We are proud of our teams and stand behind our work.",
    ],
    // The first letter of each term spells R-I-G-H-T-W-A-Y.
    acrostic: [
      { term: "Responsible.", text: "We are capable.  We understand and take great pride in our obligation to our customers and communities." },
      { term: "Innovative.", text: "We continuously challenge ourselves to improve our performance and solve problems." },
      { term: "Goal-oriented.", text: "We are committed to accomplishing the targets set by both our internal and external customers." },
      { term: "High Standards.", text: "We adhere to the highest standards and strive for excellence in all areas of our work." },
      { term: "Thorough.", text: "At our core, we are committed to executing every task with precision and thoroughness, regardless of its scale or timeframe." },
      { term: "Well Managed.", text: "Our teams are effectively managed, from planning to execution, with the right controls and competencies in place." },
      { term: "Accurate.", text: "Our work is carefully reviewed to ensure accuracy and attention to detail." },
      { term: "Yielding Excellence.", text: "We are committed to achieving excellence in all aspects and areas of our work." },
    ],
  },
  committed: {
    title: "We are Committed to Quality",
    images: ["/assets/quality-picture-3.png", "/assets/quality-picture-4.png"],
    paragraphs: [
      "The team's goal is to provide a high-quality project while minimizing rework and expediting schedules. We have several processes in place to ensure our quality goals are met.",
      "At the heart of our philosophy is a commitment to provide the highest level of professionalism and the best value to our customers on every project. Ansco repeatedly demonstrates that commitment, completing all our projects on time, within budget and to the highest of quality standards. That level of performance doesn't happen by accident.",
    ],
    // Original Vimeo embed on the Quality page.
    video: "https://player.vimeo.com/video/1084752315?h=e389982bdf&dnt=1&app_id=122963",
  },
  panels: [
    { href: "https://careers.anscollc.com/ansco", image: "/assets/careers.webp", title: "Careers", text: "Want to join our team? Discover Ansco Careers" },
    { href: "/contact/", image: "/assets/home-contact.jpg", title: "Contact Us", text: "The team at Ansco is eager to hear from you." },
  ],
};

/* ------------------------------ SUBCONTRACTORS ------------------------------ */
export const subcontractors = {
  meta: { title: "Subcontractors", description: "Ansco utilizes experienced partners for many phases of telecommunication infrastructure process.", ogImage: "/assets/subs-og.jpg" },
  hero: { title: "Come Work With The Best Of The Best", image: "/assets/subs-banner.jpg" },
  partner: {
    title: "Become a Partner",
    image: "/assets/subcontractor-1-updated.jpg",
    paragraphs: [
      "Ansco utilizes experienced partners for many phases of telecommunication infrastructure process across all the locations where we operate.",
      "If you are a contractor and would like to be considered for future projects, please complete and submit the Subcontractor Information form.",
      "Your information will be sent to the Regional Project Manager in the location(s) you specified your company is available to work and someone will get back to you within 24-48 hours.",
    ],
    cta: "Fill Out Your Information",
  },
  requirements: {
    title: "Requirements for Subcontractor Onboarding",
    image: "/assets/subcontractors-3-just-in-case-u-need-it.webp",
    items: [
      "An executed Subcontractor Agreement and Non Disclosure.",
      "Compliance with ICP employee audit for employment eligibility prior to performing work on our project(s).",
      "Provide certificates of insurance that assure full compliance with flow-down contract insurance requirements in our customer contracts.",
      "Participation in Dycom’s Pollution Program, with an estimated charge of $475 per year.",
      "Adhere to all industry, regulatory, local and company construction and safety requirements.",
      "Compliance with our customer’s badging requirements.",
    ],
    conduct: "We are committed to conducting business with the highest standards of integrity and ethics, and with abiding respect for corporate citizenship and sustainability. Please",
    conductLink: "click here to download our supplier code of conduct.",
    reportText: "To report Supplier concerns or issues, please contact us at",
    reportPhone: "888-818-1480",
    reportPhoneHref: "tel:8888181480",
  },
};

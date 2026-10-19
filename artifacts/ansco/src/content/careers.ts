/**
 * Content for the careers section: Careers, Opportunities, Benefits, Life@Ansco.
 * EDITORS: change copy, featured job postings and images here.
 * Job links point to the live Dycom SAP SuccessFactors career site.
 */

export type Job = { title: string; location: string; url: string };
export type Category = { image: string; title: string; text: string };
export type Benefit = { icon: string; title: string; text: string };

export const careers = {
  meta: { title: "Careers", description: "Connect to a career with purpose. Discover careers, benefits and life at Ansco." },
  hero: { title: "Connecting People, Building Possibilities", image: "/assets/careersheader-wireless.png" },
  searchTitle: "Connect to Your Next Opportunity",
  purposeLead: "Connect to a career with purpose.",
  purposeText:
    "The connections we make here are meaningful. Our teams connect communities, cities, and families across the country — and we're proud of that. Our people have stable, long-lasting careers because we prioritize safety, security, and support. People rely on us and we always show up.",
  boxes: [
    { image: "/assets/CMI_0993.jpg", title: "Careers", text: "We offer a wide variety of career opportunities. Connect to your potential; join a team that makes an impact nationwide.", href: "/opportunities/" },
    { image: "/assets/iStock-1282722001.jpg", title: "Benefits", text: "Connect to a full suite of exceptional first-class benefits as a member of the Ansco family.", href: "/benefits/" },
    { image: "/assets/Pole-School-7.jpg", title: "Life@Ansco", text: "We are an organization that values our people above all else. Our supportive environment ensures you can work with peace of mind. Discover and fulfill your career potential with our training and growth opportunities.", href: "/life/" },
  ],
  // Original Vimeo embed on the Careers page.
  video: "https://player.vimeo.com/video/758786817?h=2653ea595d",
  ctaImage: "/assets/RS163__CGC2944.jpg",
};

export const opportunities = {
  meta: { title: "Opportunities", description: "Check out current job openings and job categories at Ansco & Associates." },
  hero: { title: "Connecting You to Possiblities", image: "/assets/LP-SKU-1-IMG-BG-en-us-1664477108107-scaled-e1746813618950.jpg", cta: "Connect to Current Opportunities" },
  jobsTitle: "Check Out These Jobs!",
  // EDIT: featured postings (snapshot from the live site; "Explore all openings" links to the full list).
  jobs: [
    { title: "Laborer Telecom Underground", location: "Atlanta, GA, US, 30341", url: "https://dycomind.jobs.hr.cloud.sap/ansco/job/Atlanta-Laborer-Telecom-Underground-GA-30341/1440998500/?feedId=430600&utm_source=CareerSite" },
    { title: "Supervisor Telecom Construction Underground", location: "Jonesboro, GA, US, 30238", url: "https://dycomind.jobs.hr.cloud.sap/ansco/job/Jonesboro-Supervisor-Telecom-Construction-Underground-GA-30238/1440867300/?feedId=430600&utm_source=CareerSite" },
    { title: "Laborer Telecom Aerial", location: "Macon, GA, US, 31204", url: "https://dycomind.jobs.hr.cloud.sap/ansco/job/Macon-Laborer-Telecom-Aerial-GA-31204/1440809200/?feedId=430600&utm_source=CareerSite" },
    { title: "Foreman Telecom Pole Anchors Operator", location: "Savannah, GA, US, 31405", url: "https://dycomind.jobs.hr.cloud.sap/ansco/job/Savannah-Foreman-Telecom-Pole-Anchors-Operator-GA-31405/1440807900/?feedId=430600&utm_source=CareerSite" },
    { title: "Foreman Telecom Pole Anchors Operator", location: "Macon, GA, US, 31204", url: "https://dycomind.jobs.hr.cloud.sap/ansco/job/Macon-Foreman-Telecom-Pole-Anchors-Operator-GA-31204/1440808800/?feedId=430600&utm_source=CareerSite" },
  ] satisfies Job[],
  exploreLabel: "Explore all openings",
  categoriesTitle: "Job Categories Just for You",
  categories: [
    { image: "/assets/Corporate-Support-scaled.jpg", title: "Corporate Support", text: "Our Corporate Support teams provide expertise to ensure success across the company, positions including human resources and finance." },
    { image: "/assets/Operations.jpg", title: "Operations", text: "Our Operations team provides expertise in the following areas: program and project management, safety, fleet and business development." },
    { image: "/assets/Wireless-Option1.png", title: "wireless construction", text: "Complete wireless construction including: site acquisition and testing, new site builds, civil work, line and antenna." },
    { image: "/assets/OSP-Construction-scaled.png", title: "OSP construction", text: "Complete OSP construction including: aerial installations and underground construction – street cutting, rock sawing and manhole placement, directional boring and emergency restoration." },
    { image: "/assets/Engineering-scaled.jpg", title: "Engineering", text: "Complete mapping, engineering and design services including, field services, CAD services, on-site staff support and subscriber service installations." },
    { image: "/assets/Splicing-scaled.jpg", title: "Splicing", text: "Splicing, testing and cutover of copper, coax and fiber optics." },
  ] satisfies Category[],
};

export const benefits = {
  meta: { title: "Benefits", description: "As a member of our team, you'll enjoy a full suite of exceptional first-class benefits." },
  hero: { title: "Connect to a Full Suite of Exceptional Benefits", image: "/assets/LP-SKU-1-IMG-BG-en-us-1666338210612.jpg", cta: "Connect to Current Opportunities" },
  intro: "Our success depends on your health and well-being. As a member of our team, you'll enjoy a full suite of exceptional first-class benefits.",
  // Grouping verified against the original markup: Health slider, then Finance slider (401k..Dependent Care, title column on the right), then LIfestyle.
  groups: [
    {
      title: "Health",
      image: "/assets/iStock-960073156-scaled.jpg",
      items: [
        { icon: "/assets/medical.png", title: "Medical, Dental, Vision", text: "Your health is important, and we're committed to providing you with a variety of comprehensive plans and programs to meet your health needs." },
        { icon: "/assets/surgery.png", title: "Surgery Plus", text: "An optional service that provides a dedicated care advocate, who will refer you to a network of Surgeons of Excellence, that may save you money on non-emergency surgical procedures." },
        { icon: "/assets/teledoc.png", title: "Teledoc", text: "You deserve to access the care you need whenever and wherever you need it. Connect with board-certified doctors by phone or video 24/7/365." },
        { icon: "/assets/flex.png", title: "Flexible Spending", text: "Contribute pre-tax money to cover eligible medical expenses." },
        { icon: "/assets/hsa.png", title: "health savings account", text: "You can use your HSA to pay for medical needs such as doctor visits, eyeglasses, hearing aids, and over-the-counter drugs. And because your balance carries over every year, you can also use your account to build a nest egg for health care expenses when you retire." },
      ],
    },
    {
      title: "Finance",
      image: "/assets/iStock-1265643942.jpg",
      items: [
        { icon: "/assets/401k.png", title: "401 (k)", text: "Your money works harder for you. Save money for your retirement - all your before-tax contributions and any money your contributions earn grow tax-deferred until you withdraw them." },
        { icon: "/assets/stock.png", title: "employee stock purchase", text: "Employees may enroll in our Employee Stock Purchase plan to purchase common stock of Dycom Industries, Inc." },
        { icon: "/assets/insurance.png", title: "Life insurance, Critical Illness/Accident Insurance, Short- and Long-term disability", text: "Enjoy extra peace of mind knowing that you can support your family in the case of unexpected life event." },
        { icon: "/assets/education.png", title: "Education Assistance", text: "We support your efforts to further your education by providing tuition reimbursement assistance when you pursue higher education in the form of an associates, bachelors, or masters-level degree." },
        { icon: "/assets/parent.png", title: "Parental Leave", text: "At Dycom we understand the importance of a parents' time with their newly born or adopted child and offer paid leave for parents." },
        { icon: "/assets/parent.png", title: "Dependent Care", text: "Contribute pre-tax money to cover eligible dependent care services that are required while you (and your spouse) work." },
      ],
    },
    {
      title: "LIfestyle",
      image: "/assets/iStock-1319979660.jpg",
      items: [
        { icon: "/assets/assistance.png", title: "Employee Assistance Program", text: "Sometimes we know what a day brings, and sometimes we're challenged by the unexpected. The Employee Assistance Program provides access to a range of support and therapeutic services." },
        { icon: "/assets/pto.png", title: "paid time off and holidays", text: "Enjoy accrued time off that increases with tenure and paid company holidays." },
        { icon: "/assets/retailer.png", title: "Retailer discounts!", text: "Enjoy several different retailer discounts!" },
      ],
    },
  ] as { title: string; image: string; items: Benefit[] }[],
};

export const life = {
  meta: { title: "Life@Ansco", description: "We share a common vision of connecting America. Discover life, values and growth at Ansco." },
  hero: { title: "Connect to a Career With a Purpose", image: "/assets/LP-SKU-1-IMG-BG-en-us-1666338390508-e1747933494181.jpg", cta: "Connect to Current Opportunities" },
  searchTitle: "Connect to Your Next Opportunity",
  standFor: {
    title: "What We Stand For",
    paragraphs: [
      "We share a common vision of connecting America. Our ability to deliver to our customers and connect communities online relies on our engaged workforce. The values we hold define our culture. The values guide us in our dealings with one another, with our customers, and with the communities where we live.",
      "Team members strive to treat each other with respect, value different perspectives and experiences; keep our and others' safety at the forefront of our minds, and uphold the highest ethical standards.",
      "What we do and how we do it is based on a set of six core values: safety, people, innovation, integrity, customer focus and sustainability.",
      "We take time to ensure these values inform every aspect of our operations and are embedded in systems, processes and policies to drive employee engagement, organizational performance, customer satisfaction and loyalty.",
    ],
    image: "/assets/Ansco.png",
  },
  workWithUs: {
    title: "We Want You to Work with Us!",
    text: "Ansco is a great place to work! But don't just take our word for it, hear what some of our employees have to say.",
  },
  growth: {
    title: "Talent Development and Growth",
    text: "We provide opportunities for our people to learn and develop the skills and knowledge to be successful in their current role as well as to prepare them for future growth within the company.",
    items: [
      { image: "/assets/LP-SKU-27-IMG_1-en-us-1663221195222.jpg", title: "Education Assistance Program", text: "Employees with more than 6 months of service can participate in the company's Education Assistance Program, which provides reimbursement for associate, bachelor's and master's degree programs for any employee. Participants are eligible for a maximum of $7,500 annually, with uncapped reimbursement for each degree program." },
      { image: "/assets/LP-SKU-27-IMG_2-en-us-1666524551519.jpg", title: "Online Professional Development Resources and Training Programs", text: "Our entire team has access to LinkedIn Learning's Library of over 10,000 professional development courses." },
      { image: "/assets/LP-SKU-27-IMG_3-en-us-1666524590263.jpg", title: "On-the-Job Training", text: "Continuous learning is the surest path to continuous success. Learn everyday from the best of the best. Our team is made up of both tenured professionals and newcomers alike. All our employees are provided with opportunities to enhance their skills and expand their expertise." },
    ],
  },
  workforce: {
    title: "Our Workforce",
    image: "/assets/LP-SKU-D4-2-IMG-en-us-1658739310614.png",
    preview: "We believe in fostering a work environment where our people are treated with respect, can be productive, and are empowered to thrive personally and professionally. As a company that operates across the U.S., we live in, work in, and serve a wide variety of communities and it is important to us that our workforce reflects these communities.",
    full: [
      "We believe in fostering a work environment where our people are treated with respect, can be productive, and are empowered to thrive personally and professionally. As a company that operates across the U.S., we live in, work in, and serve a wide variety of communities and it is important to us that our workforce reflects these communities.",
      "Our people bring their own experiences, backgrounds and talents to work every day. Our commitment is to provide an engaging environment that attracts the very best talent and provides opportunities for them to develop and grow with us.",
      "We hold ourselves accountable to one another and treat others with respect. This respect takes the form of our commitment to fair safety and employment conditions, as well as the fundamental protections that empower our company.",
    ],
  },
};

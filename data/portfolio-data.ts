import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Abhishek Singh Rawat",
    initials: "AR",
    roleBadge: "BUSINESS ANALYST & DATA STRATEGIST",
    title: "Business Analyst & Data Analytics Professional",
    headline:
      "Bridging the gap between raw data pipelines, predictive models, and executive business strategy.",
    shortBio:
      "MBA in Business Analytics candidate at UPES with a technical BCA foundation in Computer Applications and 1+ years of industry experience as a Junior Business Analyst at S. K. Meditech. Proven track record in PostgreSQL, SQL, Python, R, and Power BI.",
    aboutParagraphs: [
      "I am an analytics professional and business analyst focused on turning complex, high-volume datasets into clear strategic decisions. My foundation blends technical computer applications (BCA) with business acumen and advanced analytics training (MBA in Business Analytics at UPES).",
      "During my tenure as a Junior Business Analyst at S. K. Meditech Pvt. Ltd., I analyzed operational and commercial data to identify performance patterns, pinpoint bottlenecks, and compile data-backed reports that guided management planning. I routinely interfaced with cross-functional stakeholders to translate operational challenges into structured requirements and automated reporting workflows.",
      "My analytical portfolio highlights end-to-end data pipelines and predictive modeling—ranging from engineering Customer 360 retention models on 18.4M+ streaming records achieving 0.985 ROC-AUC, to evaluating 5.4M+ urban transit rides and biometric telemetry to design customer acquisition and engagement initiatives.",
    ],
    location: "Lucknow / Dehradun, India",
    email: "abhisheksinghrawat22@gmail.com",
    phone: "+91 8400043070",
    linkedin: "https://www.linkedin.com/in/abhisheksinghrawatlink/",
    linkedinDisplay: "abhisheksinghrawatlink",
    github: "https://github.com/arawat837",
    githubDisplay: "arawat837",
    resumeUrl: "/Abhishek_Singh_Rawat_Resume.pdf",
    portraitUrl: "/photo.jpg",
    metrics: [
      {
        value: "0.985",
        label: "Model ROC-AUC",
        subtext: "93% Recall on 18.4M streaming records",
      },
      {
        value: "5.4M+",
        label: "Rides Analyzed",
        subtext: "Customer segmentation & conversion in R",
      },
      {
        value: "18.4M+",
        label: "Data Points Processed",
        subtext: "Customer 360 PostgreSQL data pipeline",
      },
      {
        value: "1.4+ Yrs",
        label: "Industry Experience",
        subtext: "Business Analyst at S. K. Meditech",
      },
    ],
  },
  projects: [
    {
      id: "kkbox-churn-analytics",
      title: "KKBOX Customer Retention & Subscription Analytics",
      tagline: "Customer 360 Pipeline & Machine Learning Churn Early-Warning System",
      shortDescription:
        "Engineered an enterprise Customer 360 data pipeline and predictive churn model over 18.4M+ streaming records and 1.4M transactions, achieving 0.985 ROC-AUC and 93% recall.",
      problem:
        "Subscription services experience silent customer attrition without real-time behavioral visibility before billing renewal cycles. Business leaders lacked unified subscriber metrics to prioritize high-risk customer segments.",
      approach:
        "Architected an integrated PostgreSQL data mart merging 970K+ subscribers, 1.4M transactions, and 18.4M streaming activity logs. Engineered behavioral frequency and payment recency features, followed by training Logistic Regression and Gradient Boosting classifiers in Python.",
      impact:
        "Achieved a 0.985 ROC-AUC and 93% churn recall rate. Built executive Power BI dashboards enabling marketing and retention teams to trigger automated renewal incentives 14 days before subscription expiration.",
      visualType: "kkbox",
      featuredMetric: {
        value: "0.985 ROC-AUC",
        label: "93% Churn Recall Rate",
      },
      metrics: [
        { label: "Subscribers Unified", value: "970K+" },
        { label: "Transactions Processed", value: "1.4M" },
        { label: "Streaming Records", value: "18.4M" },
        { label: "Model ROC-AUC", value: "0.985" },
      ],
      technologies: [
        "PostgreSQL",
        "SQL",
        "Python",
        "Power BI",
        "Scikit-Learn",
        "Gradient Boosting",
      ],
      keyInsights: [
        "Identified subscription auto-renew cancellation as the primary early-warning churn indicator",
        "Streaming frequency dropped by >45% in the final 3 weeks before churn among churned cohorts",
        "Gradient Boosting achieved 93% recall, minimizing false negatives for at-risk enterprise accounts",
      ],
      githubUrl: "https://github.com/arawat837/kkbox-customer-retention-analytics",
      demoUrl: "#projects",
    },
    {
      id: "cyclistic-bike-share",
      title: "Cyclistic Bike-Share Behavioral Analytics",
      tagline: "Large-Scale Urban Mobility Analysis & Membership Conversion Strategy",
      shortDescription:
        "Analyzed 5.4M+ bike-share trips using R and ggplot2 to uncover behavioral disparities between casual riders and annual members, formulating conversion strategies.",
      problem:
        "Cyclistic's long-term profitability depends on maximizing annual memberships over single-ride casual passes. Leadership needed empirical proof of behavioral differences to design targeted marketing conversion campaigns.",
      approach:
        "Processed and cleaned 5.4M+ ride records using R. Engineered custom temporal and route features (trip durations, peak hours, day-of-week seasonality, and start-destination station popularity) to segment rider cohorts.",
      impact:
        "Revealed that casual riders take 2.3x longer trips concentrated heavily on weekend leisure routes, whereas annual members exhibit routine weekday commuter spikes. Recommended weekday-transition incentives and digital station targeting.",
      visualType: "cyclistic",
      featuredMetric: {
        value: "5.4M+",
        label: "Rides Evaluated via R",
      },
      metrics: [
        { label: "Rides Analyzed", value: "5.4M+" },
        { label: "Casual Trip Multiplier", value: "2.3x" },
        { label: "Key Segments", value: "Casual vs Member" },
        { label: "Tool Used", value: "R / ggplot2" },
      ],
      technologies: [
        "R",
        "ggplot2",
        "Data Wrangling",
        "Exploratory Data Analysis",
        "Customer Segmentation",
        "Business Strategy",
      ],
      keyInsights: [
        "Annual members follow strict bimodal commute schedules (8 AM & 5 PM peaks on weekdays)",
        "Casual riders peak Friday through Sunday afternoon with significantly higher trip durations",
        "Recommended seasonal promotional passes and geofenced in-app conversion offers near top waterfront docks",
      ],
      githubUrl: "https://github.com/arawat837/cyclistic-bike-share-case-studys",
      demoUrl: "#projects",
    },
    {
      id: "bellabeat-wellness-analytics",
      title: "Bellabeat Smart Device Wellness Analytics",
      tagline: "Wearable Biometric Analysis & Data-Driven Product Strategy",
      shortDescription:
        "Analyzed multi-dimensional Fitbit biometric telemetry across activity intensity, sleep stages, and calorie burn using R to develop data-driven engagement and wellness recommendations.",
      problem:
        "Bellabeat aimed to expand its share of the global smart device market for women. The company needed actionable insights from consumer smart device usage patterns to guide product feature prioritization and companion app marketing.",
      approach:
        "Conducted exploratory data analysis in R across activity, sleep, calories, weight, and heart-rate telemetry. Evaluated correlation matrices between daily steps, sedentary hours, active intervals, and sleep efficiency.",
      impact:
        "Uncovered significant midday sedentary behavior and a direct relationship between moderate daytime physical activity and REM sleep latency. Designed user engagement recommendations including personalized nudges and sleep coaching features.",
      visualType: "bellabeat",
      featuredMetric: {
        value: "360°",
        label: "Biometric Data Analysis",
      },
      metrics: [
        { label: "Data Domains", value: "Activity, Sleep, Heart" },
        { label: "Primary Correlation", value: "Steps vs Sleep Quality" },
        { label: "Sedentary Discovery", value: "Midday Work Hours" },
        { label: "Outcome", value: "App Feature Roadmap" },
      ],
      technologies: [
        "R",
        "Biometric Telemetry",
        "Exploratory Data Analysis",
        "Statistical Modeling",
        "Product Strategy",
        "Data Visualization",
      ],
      keyInsights: [
        "Users accumulated an average of 12+ hours of sedentary time outside of sleep periods",
        "Consistent daily step count (>7,500 steps) strongly correlated with lower time-to-fall-asleep",
        "Formulated app coaching recommendations: automated hydration/movement nudges and restorative sleep forecasting",
      ],
      githubUrl: "https://github.com/arawat837/bellabeat-case-study",
      demoUrl: "#projects",
    },
  ],
  experience: [
    {
      id: "sk-meditech",
      role: "Junior Business Analyst",
      company: "S. K. Meditech Pvt. Ltd.",
      location: "Lucknow, India",
      period: "1 year 5 months",
      durationBadge: "1 Year 5 Months",
      summary:
        "Delivered operational intelligence, performance reporting, and process enhancement for healthcare technology operations and business management.",
      achievements: [
        "Analyzed business and operational data across functional units to identify performance trends, operational bottlenecks, and concrete opportunities for process improvement.",
        "Compiled and presented comprehensive executive business reports and analytical documentation to support management decision-making and quarterly operational planning.",
        "Coordinated with internal stakeholders to gather business requirements, evaluate operational challenges, and support structured improvements in business processes.",
        "Monitored and evaluated daily and monthly business activities, organized operational information architectures, and communicated key findings directly to relevant stakeholders.",
      ],
      technologies: [
        "Business Analytics",
        "SQL",
        "Microsoft Excel",
        "Operational Reporting",
        "Stakeholder Coordination",
        "Process Improvement",
      ],
    },
  ],
  education: [
    {
      id: "upes-mba",
      degree: "Master of Business Administration (MBA)",
      field: "Business Analytics",
      institution: "UPES (University of Petroleum and Energy Studies)",
      location: "Dehradun, India",
      period: "2026 – Present",
      statusBadge: "Currently Enrolled",
      focusAreas: [
        "Predictive Business Analytics",
        "Data-Driven Strategic Management",
        "Business Intelligence & Visualization",
        "Advanced Statistics & Quantitative Methods",
        "Enterprise Decision Modeling",
      ],
    },
    {
      id: "garhwal-bca",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      institution: "Maharaja Agrasen Himalayan Garhwal University",
      location: "India",
      period: "Graduated May 2023",
      grade: "CGPA: 7.1",
      statusBadge: "Completed",
      focusAreas: [
        "Database Management Systems (DBMS)",
        "SQL & Relational Architecture",
        "Object-Oriented Programming (Java / Python)",
        "Software Engineering Principles",
        "Data Structures & Algorithms",
      ],
    },
    {
      id: "st-francis-isc",
      degree: "Class 12th (ISC)",
      field: "Higher Secondary Education",
      institution: "St. Francis College",
      location: "Lucknow, India",
      period: "Completed",
      focusAreas: ["Mathematics", "Computer Science", "Sciences"],
    },
    {
      id: "cms-icse",
      degree: "Class 10th (ICSE)",
      field: "Secondary Education",
      institution: "City Montessori School",
      location: "Lucknow, India",
      period: "Completed",
      focusAreas: ["Academic Foundations", "Mathematics", "Science"],
    },
  ],
  skills: [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      subtitle: "Data manipulation, querying, statistical analysis, and modeling",
      iconName: "database",
      skills: [
        "Python",
        "R",
        "SQL",
        "PostgreSQL",
        "Microsoft Excel",
        "Data Analysis",
        "Data Visualization",
        "Statistical Modeling",
        "Churn Prediction",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence & BI",
      subtitle: "Dashboarding, executive metrics, and operational reporting",
      iconName: "chart-bar",
      skills: [
        "Power BI",
        "Executive Dashboards",
        "Microsoft Excel (Advanced)",
        "Data Storytelling",
        "KPI Architecture",
        "Operational Reporting",
        "Requirements Gathering",
        "Process Improvement",
      ],
    },
    {
      id: "ai-technology",
      title: "AI & Modern Analytics",
      subtitle: "AI-assisted workflows, API integrations, and modern toolchains",
      iconName: "cpu",
      skills: [
        "Gemini API",
        "AI-Assisted Development",
        "Antigravity",
        "Predictive Modeling",
        "Workflow Automation",
      ],
    },
    {
      id: "programming-languages",
      title: "Programming & Foundations",
      subtitle: "Core software engineering and structured query languages",
      iconName: "code",
      skills: [
        "Python",
        "SQL",
        "R",
        "Java",
        "Relational Data Modeling",
        "Git & Version Control",
      ],
    },
  ],
  certifications: [
    {
      id: "google-data-analytics",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      badgeText: "Verified Professional Credential",
      description:
        "Rigorous professional certification program demonstrating rigorous end-to-end analytical competencies: data cleaning, structured SQL problem solving, statistical calculations in R, Tableau dashboard creation, and data-driven storytelling.",
      skillsGained: [
        "SQL Querying & Data Cleaning",
        "R Programming & Analysis",
        "Data Visualization & Dashboards",
        "Spreadsheet Data Modeling",
        "Analytical Problem Solving",
      ],
    },
  ],
  leadership: [
    {
      id: "academic-leadership",
      title: "Academic & Project Leadership",
      description:
        "Applying analytical and technology skills to solve real-world problems and mentor cross-disciplinary teams.",
      points: [
        "Collaborated on academic and independent projects involving data analytics, UX design, AI-assisted development, and business problem-solving.",
        "Applied analytical and technology skills to develop portfolio projects spanning data analysis, web applications, and AI-enabled solutions.",
        "Synthesized technical research and business implications to communicate complex data findings clearly to academic peers and commercial stakeholders.",
      ],
    },
  ],
};

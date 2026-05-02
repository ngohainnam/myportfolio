export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "💡I'm a Data Science student with a strong interest in Artificial Intelligence, Machine Learning, and Computer Vision.\n💻  I enjoy building real-world projects, especially in AI systems, data analysis, and computer vision applications.\n🎓  Currently pursuing a Master of Data Science at Deakin University, after completing a Bachelor of Computer Science (AI).\n🌱  I'm continuously learning more about Deep Learning, RAG systems, and scalable AI deployment.\n🚀  I have experience working with Python, TensorFlow, and building end-to-end ML systems with cloud deployment.\n🤝  Open to collaboration, internships, and opportunities in AI, Data Science, and Software Engineering.\n💬  Feel free to reach out for projects, ideas, or discussions in these areas!",
    className: "lg:col-span-5 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full opacity-10",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Melbourne, open to remote collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech I work with",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "KASH – AI Personal Finance Dashboard",
    des: "Full-stack finance dashboard that analyses CSV bank data, tracks spending, and provides AI insights using Gemini API.",
    img: "/kash.png",
    techStack: [
      { name: "Next.js 16", icon: "/nextdotjs.svg" },
      { name: "React 19", icon: "/react.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "Clerk", icon: "/clerk.svg" },
      { name: "Google Gemini", icon: "/googlegemini.svg" },
      { name: "Tailwind CSS v4", icon: "/tailwindcss.svg" },
      { name: "shadcn/ui", icon: "/shadcnui.svg" },
      { name: "Recharts", icon: "/recharts.svg" },
    ],
    link: "https://github.com/ngohainnam/kash",
  },
  {
    id: 2,
    title: "RAGtivity – RAG Chatbot System",
    des: "Deployed a retrieval-augmented generation chatbot using embeddings, MongoDB, and cloud storage with CI/CD pipeline.",
    img: "/ragtivity.png",
    techStack: [
      { name: "React + Vite", icon: "/react.svg" },
      { name: "React Router", icon: "/reactrouter.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "Node.js + Express", icon: "/nodedotjs.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "AWS S3", icon: "/s3.svg" },
      { name: "Python + FastAPI", icon: "/fastapi.svg" },
      { name: "LangChain", icon: "/langchain.svg" },
    ],
    link: "https://github.com/RAGtivity/RAGtivity",
  },
  {
    id: 3,
    title: "CoinCheck – Real-Time Crypto Dashboard",
    des: "A real-time cryptocurrency dashboard built with Next.js and TypeScript. Streams live price, trades, and OHLCV data using Binance WebSocket and CoinGecko API.",
    img: "/coincheck.png",
    techStack: [
      { name: "Next.js 16", icon: "/nextdotjs.svg" },
      { name: "React 19", icon: "/react.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS v4", icon: "/tailwindcss.svg" },
      { name: "shadcn/ui", icon: "/shadcnui.svg" },
      { name: "Binance API", icon: "/binance.svg" },
      { name: "Vercel", icon: "/vercel.svg" },
    ],
    link: "https://github.com/ngohainnam/coincheck",
  },
  {
    id: 4,
    title: "Roomify – AI Floor Plan to 3D Rendering",
    des: "AI web app that converts 2D floor plans into photorealistic 3D renders with custom design control and interactive comparison tools.",
    img: "/roomify.png",
    techStack: [
      { name: "React 19", icon: "/react.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Vite", icon: "/vite.svg" },
      { name: "Tailwind CSS v4", icon: "/tailwindcss.svg" },
      { name: "React Router v7", icon: "/reactrouter.svg" },
      { name: "Google Gemini", icon: "/googlegemini.svg" },
    ],
    link: "https://github.com/ngohainnam/Roomify",
  },
  {
    id: 5,
    title: "CloudEvents RSVP Platform – Serverless Event Management",
    des: "Built a serverless AWS event RSVP system where users can view events and submit responses, using Lambda, API Gateway, Aurora MySQL, and DynamoDB with a static frontend hosted on S3 and CloudFront.",
    img: "/rsvp_aws_project.png",
    techStack: [
      { name: "AWS Lambda (Node.js)", icon: "/lambda.svg" },
      { name: "API Gateway", icon: "/apigateway.svg" },
      { name: "S3", icon: "/s3.svg" },
      { name: "CloudFront", icon: "/cloudfront.svg" },
      { name: "Aurora MySQL", icon: "/aurora.svg" },
      { name: "DynamoDB", icon: "/dynamodb.svg" },
      { name: "CloudWatch", icon: "/cloudwatch.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "HTML5", icon: "/html5.svg" },
      { name: "CSS3", icon: "/css3.svg" },
    ],
    link: "https://github.com/ngohainnam/rsvp_aws_project",
  },
];

export const testimonials = [
  {
    quote:
      "Kent was an amazing contribution to the team. He went above and beyond throughout! We could depend on him to do many tasks. And when there was a task that needed doing that was out of the ordinary, Kent’s name would be one of the first to come to mind as someone who would be able to adapt to and handle the task adeptly. And just expertly take it on and get it done. We will miss Kent’s dependability, thoroughness, attention to detail and high standards he set for himself in every task we allocated to him. I know that Kent will do exceedingly well at any task or project he contributes to in the future.",
    name: "Marita Cheng",
    title: "CEO of Aubot Pty Ltd",    
    img: "/marita_cheng.jpg",  
  },

  {
    quote:
      "In resolving team-related challenges, Nam demonstrated excellent leadership and coordination. Although he was not the appointed team leader, he took initiative when the group was struggling. There was a lot of internal confusion, poor coordination, and uneven contributions among members. This created real risks for the project’s success. Nam quietly stepped in and came up with a clear and practical solution. He reassigned key modules to the members who were actively contributing and allocated smaller tasks to others. This made the workflow much more efficient. \nAs a client of the application Nams team developed, I am super impressed by the final delivered application. A lot of this was achieved due to Nam’s sense of responsibility, proactiveness and care. His quality of setting high standard and delivering quality work impressed us as a client.",
    name: "Tanjila Kanji",
    title: "Client of FINNEY - AI Financial Literacy App",    
    img: "/tanjila_kanji.jpg",  
  },

  {
    quote:
      "In his individual assignments, Nam produced clear, insightful visualisations with well-defined and interpretive storytelling. His ability to translate complex datasets into compelling business insights was outstanding for an undergraduate student, as he was the top 10 overall score in the assignment and top 3 overall score in the test. In his group work, it was truly remarkable when he was a reliable and effective collaborate, taking care of designing the Tableau Dashboards. His team delivered a high-quality outcome, which stood out for its clarity, depth of analysis, and strategic relevance to business decision-making.",
    name: "Minh Duc Nguyen",
    title: "SoBLE Teaching Sessional - Business Technology and Entrepreneurship",    
    img: "/minh_duc_nguyen.jpg",  
  },
];

export const companies = [
  {
    id: 1,
    name: "Aubot",
    img: "/aubot_logo.png",
    invertLight: true,
  },
  {
    id: 2,
    name: "Swinburne",
    img: "/swinburne logo.png",
    invertLight: false,
  },
];

export const workExperience = [
  {
    year: "2026 – 2027",
    role: "Master of Data Science (Professional)",
    org: "Deakin University",
    meta: "Melbourne, VIC · GPA: 3.5",
    description: "Studying data analysis, machine learning, and real-world applications.",
    logo: "/deakin-logo.png",
    invertLight: false, // original looks good on light
    invertDark: true,   // invert dark: black→white, white→black
  },
  {
    year: "2025",
    role: "Software Engineer Intern",
    org: "Aubot Pty Ltd",
    description:
      "Designed and implemented both programming content in Python and C, including lectures and hands-on exercises.\nConducted user testing and verified bugs in exercises to ensure accuracy and effectiveness.\nTook initiative in visualizing complex programming concepts to enhance student understanding, leading to positive recognition from the team and CEO for independence, attention to detail, and high-quality content delivery.",
    logo: "/aubot_logo.png",
    invertLight: true,  // white logo → invert to black in light
    invertDark: false,  // keep white in dark
  },
  {
    year: "2023 – 2025",
    role: "Bachelor of Computer Science (AI)",
    org: "Swinburne University of Technology",
    meta: "Melbourne, VIC · GPA: 3.75",
    description: "Focused on AI, programming, and software development.",
    logo: "/swinburne logo.png",
    invertLight: false, // no invert
    invertDark: false,  // no invert
  },
  {
    year: "2022 – 2023",
    role: "Diploma of Information Technology",
    org: "Swinburne University of Technology",
    meta: "Melbourne, VIC · GPA: 4.0",
    description: "Built strong foundation in programming and IT fundamentals.",
    logo: "/swinburne logo.png",
    invertLight: false,
    invertDark: false,
  },
];
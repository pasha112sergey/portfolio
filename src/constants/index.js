import project1 from "../assets/projects/django.jpg";
import myVideo from "../assets/projects/VideoGame.mp4";
import project2 from "../assets/projects/tkinter.jpg";
import project3 from "../assets/projects/ascii.jpg";
import project4 from "../assets/projects/linux.png";
import depop_demo from "../assets/projects/depop_demo.png";
import rotating_cube from "../assets/projects/rotating_cube.png";

export const HERO_CONTENT = `Hi there! My name is Sergey and I'm currently a Junior at Stony Brook University studying Computer Science and Applied Mathematics & Statistics. As I transition towards looking for major-specific work in tech and finance, I wanted to take a chance to highlight the professional experiences that significantly affected my career development. I found it hard to communicate the responsibilities, achievements and skills I obtained through a one-page resume, so I created this website! Take a look around if you're interested. 
Outside of career and academics, I enjoy a plethora of hobbies. I love skateboarding, playing chess, watching movies, and I recently began rock climbing! I'm currently reading the Idiot by Fyodor Dostoevsky, rewatching Breaking Bad (for the 8th time), and enjoying listening to Hail the Sun!`;

export const ABOUT_TEXT = `I was born in Moscow, and my family moved to Brooklyn, NY in 2015. I always loved math and science growing up, but the pivotal moment happened when after 7th grade, I attended a 3 week summer camp at Art of Problem Solving Iniative's Bridge to Enter Advanced Mathematics at Bard College. This camp introduced me to proof-based and competition math, which grasped my attention––the problems required creative out-of-the-box thinking, which was a refreshing change of pace from public school education. From that moment, I knew I wanted to study and pursue intellectually engaging work within maths. So, I took up both Computer Science and Applied Mathematics & Statistics at Stony Brook University! 

Right around the time I was seriously considering career paths in the first semester of my Sophomore year, I met my now good friend in the Business major who introduced me to finance. He invited me to join the Investment Club and its Fourier Investment Fund project. Shortly after, I began as a Junior Analyst in the materials sector.

I was quite intimidated––I was not familiar with the jargon, workflows, or responsibilities of a financial analyst. Nonetheless, I began working with 3 other analysts on a semester-long equity research venture to pitch a stock to the fund. I was responsible for conducting the risk analysis for our chosen company: Southern Copper Corporation (SCCO). I soon found myself consumed and obsessed by the work––I loved doing in-depth research on this company and its operations, I loved diving into its 10-Ks, reading up on the news in the copper market (which is something I never thought I would say), and I began to build an understanding of the implications and risks involved with investing. I also helped my team perform valuations using DCF and Monte Carlo simulations, and I helped our portfolio manager with some mathematical modeling and optimization of the entire portfolio. By the end of the semseter, our pitch was approved, and our stock is currently generating around 15% ROI!

This hands-on experience filled me with vigor and drive to pursue finance as a career while giving me a chance to apply the math I love! So, I am currently looking for roles in Quantitative analysis, Risk analysis, Equity Research, and Software Engineering!`;

export const EXPERIENCES = [
    {
        year: "2025 - Present",
        role: "Undergraduate Research Assistant",
        company:
            "Stony Brook University - Websheets Web Application Development Environment",
        description: `• Scaled and modernized the React front-end for a research-based, spreadsheet-like programming language aimed at improving data access and security in web application development.

• Refactored the React codebase to scalable best practices by replacing scattered state logic and excessive prop drilling with context layers and a centralized reducer, enhancing maintainability and increasing efficiency.

• Documented development progress and delivered timely technical updates in weekly team meetings, ensuring effective collaboration.`,
        technologies: ["React", "Presentation", "Communication"],
        link: "",
    },

    {
        year: "2025 - Present",
        role: "Junior Analyst of Materials Sector",
        company: "Fourier Investment Fund of Stony Brook University",
        description: `• Contributed to the fund’s Mean-Variance Portfolio Optimization by using Python to calculate optimal asset weights that maximize returns under tailored risk, diversification, and ESG constraints.

        • Conducted equity research by reviewing 10-K reports, assessing growth catalysts, evaluating business operations and risks, and delivering summarized weekly reports to support investment decisions.

• Performed equity valuation using Python Monte Carlo and Excel Discounted Cash Flow (DCF) models, validating results against third-party price forecasts and backtesting model outputs for robustness.

• Prepared and delivered an actionable investment proposal to a 30+ member student fund by combining financial modeling, risk analysis, and market research that was approved and is now generating 15% ROI.
    `,
        technologies: [
            "Financial Analysis",
            "Risk Analysis",
            "Equity Research",
            "Presentation",
            "Communication",
        ],
        link: "https://www.linkedin.com/company/fourier-fund-of-stony-brook-university/posts/?feedView=all",
    },
    {
        year: "2023 - Present",
        role: "Client Support Technician",
        company: "Stony Brook University Division of Information Technology ",
        description: `• Completed 3 IT qualification levels and provided technical support with a 95% successful ticket-resolution rate ensuring fast and effective service delivery.

        • Provided real-time IT support via Cisco WebEx phone calls, efficiently interpreting complex technical problems and policies and presenting actionable and timely solutions, maintaining an average call time of 8 minutes.
`,
        technologies: [
            "Communication",
            "Leadership",
            "Teamwork",
            "IT Operations",
        ],
        link: "https://it.stonybrook.edu/",
    },
    {
        year: "2023 - 2025 (Seasonal)",
        role: "Teaching Assistant and Counselor",
        company:
            "Bridge To Enter Advanced Mathematics and Art Of Problem Solving Initiative",
        description: `• Mentored 6th–7th grade students in Python programming, logic, and advanced math concepts, combining instruction with guidance in problem-solving and critical thinking.

        • Oversaw daily activities and group dynamics, resolving conflicts and adapting instruction to student needs while coordinating closely with fellow staff.
`,
        technologies: [
            "Leadership",
            "Communication",
            "Teaching",
            "Conflict Management",
        ],
        link: "https://www.beammath.org/",
    },
];

export const PROJECTS = [
    {
        id: "rotating-cube",
        title: "Small Projects in C and C++ --> C funsies!",
        description: `I created a repository on GitHub to document and publish some fun small projects. Currently, the repo includes a small ASCII console printing script, an SDL3 electric fields simulator, and a tiny SDL3 3D graphics project in C++. I may also start a YouTube channel soon to document the development process! I try to not use AI`,
        mediaType: "image",
        mediaSrc: rotating_cube,
        technologies: ["C", "C++", "SDL3", "Linux"],
        link: "https://github.com/pasha112sergey/daily_coding/tree/main/c_funsies",
    },
    {
        id: "depop-ext",
        title: "SendPop - Chrome Extension",
        description: `My father owns an e-commerce business where he sells belts, belt buckles, and necklaces on Etsy, Amazon, and eBay. As a member of the younger generation, I saw an opportunity to expand his business: depop.

        This is a newer, less established platform marketed as an online thrift store where people sell their used items. I've been shopping on it for years now, and I noticed that my dad's choice of Western styles could score big on the platform. I introduced him to the opportunity, but he was reluctant to learn the ins and outs of this new website. To test the waters, he gave me some of his samples and defective items to sell. Seeing as depop is a more casual platform where people don't put a lot of effort into their listings, I put them up with terrible pictures for dirt cheap, and waited.

        As I suspected, they sold almost instantly! I also discovered that Depop's policy is extremely friendly towards sellers: low fees, and the buyer pays shipping. This way, I could list the items for low prices, yet still keep a nice profit margin.

        However, a problem quickly surfaced. With me being busy at Stony Brook with classes, clubs, activities, and the rest of college life, I had very little time to actually process orders. For each order, I had to get the shipping label, username, and item, and manually send an email to my dad. Now this doesn't seem like much, but on especially good sales days, this took up to 30 minutes of monotonous, repetitive "labor". Sure, time I had, but time I didn't want to spend.

        So, motivated by an internshipless summer, a desire to pad my resume with a cool project, and the boredom of sending those emails, I set out to build a Chrome Extension to automate the process. I used Google's ManifestV3 to develop the extension, JavaScript and HTML to run it, and (perhaps contentiously) Tailwind CSS to style it. 

        Currently, the application is working and has already successfully sent over 300 emails to my dad. The total process of shipping all orders now takes around 2 minutes, while before, it took around 2 minutes per order. This is a massive improvement, and I'm very happy with the result!

        I'm awaiting unlisted publication on the Chrome Extension Store, but due to security concerns and its extremely narrow purpose, I will unfortunately not be able to release it publicly. 

        I extensively documented the development process and functionality in the GitHub README file and made a demo video - check it out on LinkedIn! 

        Sensitive user data is blurred. Note: after sending, the sent usernames appear highlighted in yellow to signify that they have already been shipped.`,
        mediaType: "image",
        mediaSrc: depop_demo,
        technologies: [
            "JavaScript",
            "HTML",
            "Tailwind CSS",
            "Google API",
            "ManifestV3",
        ],
        link: "https://www.linkedin.com/posts/ssafronov1_my-father-owns-an-e-commerce-business-where-activity-7339159330153279489-xFK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6WDwBrr3TTFzd1zEX32qifS_G0T1lTCQ",
    },
    {
        id: "game",
        title: "Video Game Project",
        description: `Back in 2022, seeing that I didn't have much extracurriculars to add to my college applications, I took on a project that turned out to be one of the most challenging yet rewarding experiences: creating a fully functional video game level. This game, built in the Unity Game Engine with C#, represents over 300 hours of consistent effort over 9 months! I took a deep dive into C# programming and object-oriented principles, both of which I learned from scratch before attending college. Check out the video demo on my LinkedIn page by clicking the title!`,
        mediaType: "video",
        mediaSrc: myVideo,
        technologies: ["Unity", "C#", "Object-Oriented Programming"],
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7279716305186820097/",
    },
    {
        id: "linux-fs",
        title: "Linux File System Emulator",
        description: `For my Systems Fundamentals class, I built an emulation of the Linux filesystem in C. I learned how to implement complex recursive and hierarchical directories and files, and how to handle file operations, path navigation, permissions and much more. This project also included the implementation of the storage of filesystem data. 
    
    I built and documented procedures to handle low-level storage mechanisms and memory management by creating inode structures, fixed-size data blocks, and permission bits, similar to real Linux OS data management. My implementation also supported complex file operations and path resolution.`,
        mediaType: "image",
        mediaSrc: project4,
        technologies: ["C", "Systems Programming"],
        link: "",
    },
    {
        id: "django-ims",
        title: "Django Inventory Management System",
        description: `I’m thrilled to share my latest development journey—an inventory management system built using Django, deployed on Heroku, and powered by a PostgreSQL database hosted on Railway!

    While the project’s front-end is intentionally simple, the system has proven its scalability—successfully handling over 500 inventory items during testing! Currently, it supports 15 user accounts, each with their own dedicated database records, ensuring personalized data management. I used Django for backend development and user authentication. PostgreSQL on Railway for robust and scalable data storage, Heroku for seamless deployment and scalability, Git for version control and collaboratiom and I learned SendGrid for secure email password resets!`,
        mediaType: "image",
        mediaSrc: project1,
        technologies: ["Django", "PostgreSQL", "HTML", "CSS", "Heroku"],
        link: "https://django-inventory-sys-2b0592905f9a.herokuapp.com/",
    },
    {
        id: "python-tkinter",
        title: "Python Tkinter Application with Computer Vision Processing",
        description: `I developed a Python-based Tkinter application leveraging OpenCV to assist my father's personalization business by improving item alignment for custom laser engraving, boosting efficiency by 30%.

    The challenge was ensuring precise alignment, as misalignment led to product waste and reduced customer satisfaction. With no existing solutions for this niche, I built a tailored application. I implemented real-time video processing with overlayed alignment grids and custom silhouette cutouts, offering visual guides that streamlined operations and reduced manual adjustments. Using OpenCV, I developed algorithms to assess positioning accuracy and provide immediate feedback, achieving a 75% reduction in misalignment errors. I focused on usability and performance, ensuring the application remained responsive and user-friendly for operators. An iterative approach allowed for continuous improvements based on real-world feedback.The final product received positive feedback for its ease of use and impact on accuracy. This project strengthened my skills in Python, Tkinter, and OpenCV while enhancing my ability to develop practical solutions.
`,
        mediaType: "image",
        mediaSrc: project2,
        technologies: ["React", "Django", "PostgreSQL", "HTML", "CSS"],
        link: "https://github.com/pasha112sergey/EzCad_Helper",
    },
    {
        id: "ascii",
        title: "Image URL to ASCII Art Generator",
        description: `As my first web project, I created a web application that translates image web URLs into ASCII art, accessed by over 100 users! This project showcased my ability to self-learn programming skills and engage users effectively. I integrated multiple APIs for image and input processing, demonstrating my adaptability in learning and applying new frameworks. The full-stack architecture efficiently processed over 100 image requests without disruptions, highlighting robust server interactions.`,
        mediaType: "image",
        mediaSrc: project3,
        technologies: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/pasha112sergey/Image-to-ASCII",
    },
];

export const CONTACT = {
    phoneNo: "+1 (646) 714-1388",
    email: "sergey.safronov268@gmail.com",
};

export const EDUCATION = {
    gpa: `GPA: 4.0`,
    date: `September 2023 - Present`,
    about: `I'm a current Junior at Stony Brook University in Long Island, New York, pursuing a B.S. in Computer Science and Applied Mathematics & Statistics. My academic background is centered around Object Oriented Programming with Java and Python. I've developed strong academic and practical skills in data structures, algorithms and functional programming, as well a fundamental understanding of systems. I also gained valuable leadership experience during my work with the Department of Information Technology, and as the Treasurer and Secretary of Skateboarding Club. I also have a great foundation in mathematics including computation theory, combinatorics, algorithms, linear algebra, probability, and statistics. Check out more information and details about my involvements below!`,
};

export const CLUB = {
    name: "Skateboarding Club at Stony Brook University",
    description: `I've been a member of the Skateboarding Club at Stony Brook University for almost 3 years now, and throughout my particiaption, I've gained valuable leadership and community experience. During my first semester at Stony Brook, I joined the executive board as the Treasurer, where I helped the skateboarding community grow on campus. In that first semester, we gained official club status after extensive deliberation and negotiations with university administrators. In my role as the Treasurer, I managed an $8,000 budget and helped organize two musical community events with over 750 total attendees. I also helped market the events through social media campaigns, thoughtful advertisements and using university resources and connections. Today, we have a growing community of 150+ members and a consistent turnout of around 30 members per meeting!`,
    hook: `Check out some of my promotions for our events! With these edits, we were able to reach over 30,000 combined views!`,
    urls: [
        `https://www.instagram.com/p/C5q-Dr9Jk8I/`,
        `https://www.instagram.com/p/C3VjoWgJkJX/`,
        `https://www.instagram.com/p/DI2HgKDyP8R/`,
        `https://www.instagram.com/reel/DI2HgKDyP8R/`,
    ],
};

import React from 'react'

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
};

const ProfileCard =(props)=>{
  const {resData} =props;
  console.log(resData.last_name)
  return(
    <div className='w-1/2 border-1 border-2 hover:bg-gray-300 hover:cursor-pointer'>
      
      <div className='flex'>
        <div className='w-1/4'><img src='https://augmntx.com/assets/img/noimage.jpg' className='rounded-full' /></div>
        <div className='flex-col'>
          <div><span>{resData.last_name}</span>  <span>{resData.first_name}</span></div>
          <div><span>{resData.primary_title}</span> <span>{resData.experience} years</span> </div>
          <div className='m-1'>
            <span className='card-header-pills border-2 rounded-full p-1'>{resData.skills[0]}</span>
            <span className='card-header-pills border-2 rounded-full p-1'>{resData.skills[1]}</span>
            <span className='card-header-pills border-2 rounded-full p-1'>{resData.skills[2]}</span>
            </div>
        </div>
      </div>

      <div className='flex-col'>
        <div> <span>{truncateText(resData.bio,100)}</span> </div>
        <div className='flex'> 
          <span className='font-bold'>Industries:</span> 
          <span className=''>{resData.profile_industries.join(",")} </span>
        </div>
        <div className='flex justify-between'>
          <span><a>Hire {resData.last_name} {resData.first_name}</a></span>
          <span><a>Download PDF</a></span>
        </div>
       
      </div>
      
    </div>
  )
}

const cardList = [

  {
        "unique_id": "AXF3137",
        "id": "3171",
        "first_name": "J",
        "last_name": "Rathod",
        "profile_url": "Frontend-Developer-Rathod-J",
        "city": "Ahmedabad",
        "bio": "A passionate front-end developer who specializes in React js and JavaScript.js having 10 years of experience. I am capable of managing both simple and sophisticated online projects, including static websites.  I have a love for turning my clients' ideas into websites that accurately represent their business. Here are some of the areas where I can directly assist you:\r\n◼ UI/UX Design: Figma, Sketch, Adobe Photoshop, Adobe Illustrator\r\n◼ Front-end Development: HTML5, CSS3, React.js, WordPress Elementor, JavaScript, jQuery\r\n◼ CSS Libraries: Bootstrap, Tailwind, Ant Design, Material UI\r\n◼ Website Optimization & SEO\r\n◼ Pixel-prefect Frontend Development in static HTML/CSS or React.js",
        "experience": "11",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Frontend Developer",
        "userPhoto": "uploads/Rathod_AXF3143_AugmntX.webp",
        "profile_industries": [
              "Consumer Goods and Services",
              "Public Service"
        ],
        "skills": [
              "PHP",
              "HTML CSS JavaScript",
              "React JS",
              "Figma",
              "UI UX Design"
        ]
  },
  {
        "unique_id": "AXO3018",
        "id": "3154",
        "first_name": "S",
        "last_name": "Shri",
        "profile_url": "Salesforce-Developer-Shri-S",
        "city": "Vadodara",
        "bio": "Seeking a challenging role at a reputed organization to utilize my skills\r\ngained through Intellipaat, maverick digital & SmartBridge for the\r\nSalesforce Developer which can help me to contribute in growth of\r\norganization as well as enhance my knowledge by exploring new things.",
        "experience": "4",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Salesforce Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Financial Services",
              "Manufacturing",
              "real estate"
        ],
        "skills": [
              "Lightning Web Component",
              "Apex",
              "Salesforce CPQ",
              "Visualforce",
              "Workflow Automation"
        ]
  },
  {
        "unique_id": "AXO3146",
        "id": "3152",
        "first_name": "G",
        "last_name": "Kevadia",
        "profile_url": "Full-Stack-Developer-Kevadia-G",
        "city": "Ahmedabad",
        "bio": "●\t15+ years of IT experience in the development of enterprise solutions, specializing in Web based applications using Open Source Technologies.\r\n●\tSoftware Development Life Cycle (SDLC) experience including Requirement, Specification, Analysis/Design, and Testing as per the Software Development Life Cycle process (Agile, Waterfall, Incremental, Prototype).\r\n●\tProficient in developing Web solutions using various technologies using different Frameworks/Open Source like Laravel, CakePHP, Drupal, Yii, & Code Igniter.\r\n●\tAbility to learn & grasp through research & analysis, Good communication skills, well-motivated and efficient team player.\r\n●\tDeveloped dynamic and interactive websites that ensured high traffic, page views, and user experience.\r\n●\tExcellent in envisioning and adapting to upcoming and latest technologies and great contributor of knowledge transfer and positive attitude towards learning new technologies.\r\n",
        "experience": "15",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Full Stack Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Health and Fitness"
        ],
        "skills": [
              "PHP",
              "MySQL",
              "JavaScript",
              "jQuery",
              "AWS",
              "Node JS",
              "React",
              "Angular"
        ]
  },
  {
        "unique_id": "AXO3021",
        "id": "3144",
        "first_name": "P",
        "last_name": "T ",
        "profile_url": "Java-Developer-T--P",
        "city": "Vadodra",
        "bio": "This experienced software developer has a Bachelor's degree in Computer Application and specializes in Java, Spring Boot, and a range of other technologies. They have worked on various projects in different domains, including Android app development and e-commerce websites. Their skills extend to React JS, Python, MySQL, and more. This developer is also an active Tech Mentor, sharing knowledge in programming languages and data structures with college students. Their expertise includes React JS, Java, Spring Boot, Microservices, and a solid foundation in computer science fundamentals.",
        "experience": "3",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Java Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Cybersecurity",
              "Ecommerce",
              "Entertainment",
              "FinTech",
              "HR Technology",
              "Telecommunications"
        ],
        "skills": [
              "Java",
              "Spring Boot",
              "J2EE",
              "Microservices",
              "PostgreSQL",
              "Bit Bucket",
              "MySQL",
              "AWS"
        ]
  },
  {
        "unique_id": "AXF3126",
        "id": "3132",
        "first_name": "H",
        "last_name": "Patel",
        "profile_url": "UI-UX-Designer-Patel-H",
        "city": "Surat",
        "bio": "I am an experienced UI/UX designer with a career spanning since 2020. My journey in the field has equipped me with a deep understanding of user interface and user experience principles. Over the years, I have honed my skills in creating intuitive, visually appealing, and user-centric digital experiences.",
        "experience": "3",
        "country": "India",
        "country_code": "IN",
        "primary_title": "UI/UX Designer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Information Technology"
        ],
        "skills": [
              "UI UX design",
              "Figma",
              "Adobe Photoshop",
              "ADOBE XD",
              "APP DESIGN"
        ]
  },
  {
        "unique_id": "AXO3054",
        "id": "3105",
        "first_name": "P",
        "last_name": "S ",
        "profile_url": "Software-Developer-S--P",
        "city": "Vadodra",
        "bio": "An enthusiastic engineering fresher who is a self-starter & capable to use technical skills for the betterment of the organization. A bachelor’s degree in Computer Engineering has enhanced my skills & knowledge in the programming languages and looking forward to work in a competitive environment that enhances overall learning. My career goal is to solve problems in an effective & creative manner in a challenging position & to secure a challenging position in a reputable organization to expand my leanings, knowledge & skills. I can work efficiently in a team & also lead it. ",
        "experience": "3",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Software Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "B2B",
              "Ecommerce",
              "Government",
              "HR Technology",
              "Voting"
        ],
        "skills": [
              "J2EE",
              "J2SE",
              "Spring Boot",
              "Hibernate",
              "AWS Server less",
              "AWS Services",
              "Microservices",
              "Jenkins",
              "MySQL",
              "Docker",
              "HTTPS",
              "Oracle",
              "Eclipse IDEE",
              "WAMP",
              "TOMCAT",
              "IBM DB2",
              "PLSQL",
              "SQL Server",
              "HTTP",
              "Netbeans"
        ]
  },
  {
        "unique_id": "AXF3008",
        "id": "3061",
        "first_name": "M",
        "last_name": "Khatri",
        "profile_url": "Full-Stack-Web-Developer-Khatri-M",
        "city": "Bangalore",
        "bio": "I am a dedicated professional with 4 Years of experience in IT. Proven track record in and as Full Stack Developer. I thrive in collaborative environments and am eager to contribute my skills to augmntx Success.",
        "experience": "4",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Full Stack Web Developer",
        "userPhoto": "uploads/Khatti_AXF3017_AugmntX.webp",
        "profile_industries": [
              "Education",
              "Information Technology"
        ],
        "skills": [
              "Laravel",
              "Git",
              "Docker",
              "VueJs",
              "React JS",
              "Python 3",
              "Django"
        ]
  },
  {
        "unique_id": "AXF2974",
        "id": "3004",
        "first_name": "A",
        "last_name": "Amir",
        "profile_url": "Software-Engineer-Amir-A",
        "city": "Egypt",
        "bio": "Frontend developer based in Egypt with a passion for frontend development and building innovative web-based projects. Worked on many projects both personal and for clients using HTML, CSS, JavaScript, PHP & React. Seeking opportunities to apply my technical skills and contribute to a dynamic software development team as a frontend developer/software engineer.",
        "experience": "0",
        "country": "Egypt",
        "country_code": "EG",
        "primary_title": "Software Engineer",
        "userPhoto": "uploads/Amir_AXF2986_AugmntX.webp",
        "profile_industries": [
              "Software developement"
        ],
        "skills": [
              "React JS",
              "HTML",
              "CSS",
              "JavaScript",
              "PHP",
              "C++",
              "C#",
              "Python"
        ]
  },
  {
        "unique_id": "AXF2807",
        "id": "2970",
        "first_name": "S",
        "last_name": "Usman",
        "profile_url": "Front-end-Developer-Usman-S",
        "city": "Riyadh",
        "bio": "I am a quick learner, problem solver and also interested to learn and do something new. I have also Leadship skill and I am a team player. I have a weakness which is I concentrate on one thing at a time.",
        "experience": "1",
        "country": "Saudi Arabia",
        "country_code": "SA",
        "primary_title": "Front-end Developer",
        "userPhoto": "uploads/Usman_AXF2813_AugmntX.webp",
        "profile_industries": [
              "Ecommerce"
        ],
        "skills": [
              "JavaScript",
              "Node.js",
              "Express.js",
              "React JS",
              "MongoDB"
        ]
  },
  {
        "unique_id": "AXF2837",
        "id": "2944",
        "first_name": "A",
        "last_name": "Patel",
        "profile_url": "Salesforce-Developer-Patel-A",
        "city": "Pune",
        "bio": "I have 3 years of experience in salesforce , in which I worked On Configuration like creating app, objects, fields, formula fields, validation rule, page layout, record type, lightning record page etc. In automation I have worked on flow, approval process, process builder. In Customization I have Worked On Apex Trigger And Apex Classes(Sync & Async).",
        "experience": "3",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Salesforce Developer",
        "userPhoto": "uploads/Patel_AXF2843_AugmntX.webp",
        "profile_industries": [
              "Cloud Computing"
        ],
        "skills": [
              "HTML",
              "Javascrip",
              "CSS",
              "Apex",
              "Java",
              "LWC"
        ]
  },
  {
        "unique_id": "AXF1461",
        "id": "2940",
        "first_name": "S",
        "last_name": "Natarajan",
        "profile_url": "Project-Manager-Natarajan-S",
        "city": "Coimbatore",
        "bio": "7+ Years of experience in Business Analysis and Requirement Management, Functional design/Application design, Change management, Process / Team Management, Project Management / PMO and Transformation driven roles in various domains such as Ecommerce, Sports and Open Source Web Platforms. Results Focused, Quality driven Business Analyst with a proven track record implementing complex projects on an agile timeline\r\n ",
        "experience": "6",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Project Manager",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Ecommerce",
              "High Tech"
        ],
        "skills": [
              "Requirement Gathering",
              "Agile Methodologies",
              "Client Management",
              "User manual documentation",
              "Scrum",
              "Project Management",
              "IT Project Management"
        ]
  },
  {
        "unique_id": "AXF2914",
        "id": "2921",
        "first_name": "M",
        "last_name": "Khalid",
        "profile_url": "Front-end-developer-Khalid-M",
        "city": "Zagazig",
        "bio": "I am a passionate student pursuing a degree in Computer and Systems Engineering at Zagazig University. With a strong interest in software development, I have dedicated myself to mastering the art of creating full-stack applications. My academic journey has equipped me with a solid foundation in the fundamentals of software development, and I am continuously honing my skills to stay at the forefront of this dynamic field. I am enthusiastic about leveraging technology to solve real-world problems and am excited about the opportunities that lie ahead in my academic and professional journey.",
        "experience": "1",
        "country": "Egypt",
        "country_code": "EG",
        "primary_title": "Front end developer",
        "userPhoto": "uploads/Khalid_AXF2921_AugmntX.webp",
        "profile_industries": [
              "Software developement",
              "Software development"
        ],
        "skills": [
              "HTML",
              "Javascript",
              "CSS",
              "Reactjs",
              "Nextjs"
        ]
  },
  {
        "unique_id": "AXO2766",
        "id": "2772",
        "first_name": "P",
        "last_name": "Chinchole",
        "profile_url": "React-with-Next-JS--Chinchole-P",
        "city": "Pune",
        "bio": "Professional who puts in a lot of effort and has expertise in designing and creating user interfaces, testing and debugging software utilizing the newest technologies, and has a solid foundation in application development and web design. I'm attempting to make use of my abilities, expertise, and enthusiasm for a Company.",
        "experience": "2",
        "country": "India",
        "country_code": "IN",
        "primary_title": "React with Next JS",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "HR Technology",
              "NA",
              "Packaging",
              "Supply Chain"
        ],
        "skills": [
              "JavaScript",
              "Java",
              "C ++",
              "MongoDB",
              "MySQL",
              "Express JS",
              "React"
        ]
  },
  {
        "unique_id": "AXF2746",
        "id": "2755",
        "first_name": "S",
        "last_name": "Vaggu",
        "profile_url": "Salesforce-Administrator-Vaggu-S",
        "city": "Hyderabad",
        "bio": "Highly skilled Salesforce administrator with over 3.9 years of experience in working mainly on Service cloud, Sales cloud and Community cloud. I bring a strong commitment to quality and a proven ability to deliver exceptional value to clients. Experienced Salesforce Developer with expertise in SFDC.\r\nSalesforce.com CRM, Force.com, creating Flow, Process Builder, Approval Processes, Validation Rules, Workflow rules, Reports, and Dashboards. Extensive experience in SOQL & SOSL queries, security, data migration, workflow automation and collaboration. Proven track record in implementing solutions for various business needs, optimizing workflows, and enhancing user experience. Strong team player with excellent communication and problem-solving skills.",
        "experience": "4",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Salesforce Administrator",
        "userPhoto": "uploads/Vaggu_AXF2752_AugmntX.webp",
        "profile_industries": [
              "Financial Services",
              "Sales"
        ],
        "skills": [
              "Salesforce Admin",
              "Salesforce Data Model",
              "Salesforce CRM",
              "Salesforce Lightning",
              "Salesforce Development"
        ]
  },
  {
        "unique_id": "AXO2683",
        "id": "2716",
        "first_name": "S",
        "last_name": "Jaiswar",
        "profile_url": "Angular-Developer-Jaiswar-S",
        "city": "Mumbai",
        "bio": "Results-oriented PHP and Angular developer with 2.5 years of experience. Proﬁcient in Laravel, AngularJS, and delivering high-quality code within project timelines. Skilled in analyzing business requirements, identifying optimization opportunities, and implementing scalable solutions. Strong problem-solving abilities and a passion for staying updated with emerging technologies. Effective communicator and collaborative team player dedicated to delivering exceptional results.",
        "experience": "2",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Angular Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Ecommerce",
              "Education",
              "NA",
              "real estate"
        ],
        "skills": [
              "TypeScript",
              "MySQL",
              "Angular",
              "VSCode",
              "Bootstrap",
              "HTML",
              "jQuery"
        ]
  },
  {
        "unique_id": "AXO2679",
        "id": "2679",
        "first_name": "A",
        "last_name": "Sharma",
        "profile_url": "Oracle-Technical-Developer-Sharma-A",
        "city": "Mumbai",
        "bio": "I have 8 years of experience as an Oracle Technical Developer, specializing in Oracle E-Business Suite and its integration with Salesforce and banking systems. My commitment is to deliver high-quality technical solutions.",
        "experience": "8",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Oracle Technical Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Finance",
              "Integration"
        ],
        "skills": [
              "Oracle E-Business Suite",
              "SQL",
              "PL/SQL",
              "Oracle Workflow",
              "Forms",
              "Reports",
              "XML Publisher",
              "Dell Boomi"
        ]
  },
  {
        "unique_id": "AXO2637",
        "id": "2676",
        "first_name": "B",
        "last_name": "Rajput",
        "profile_url": "PHP-developer-Rajput-B",
        "city": "Indore",
        "bio": "● I Have 4+ years of experience in Core php, Codeigniter and Laravel development.\r\n● Establishing and guiding the website’s architecture\r\n● Ensuring high-performance and availability, and managing all technical aspects of \r\nthe CMS\r\n● Helping formulate an effective, responsive design and turning it into a working theme \r\nand custom scripts.\r\n● Good knowledge and experience in MySql, AJAX, XML,Java Script etc.\r\n● Excellent code reviews and code debugging skills.\r\n● Strong experience in writing MySql queries.\r\n● Understanding of MVC (Model View Controller) software architectural pattern.\r\n● Documenting bug reports and any code changes.\r\n● Possess good verbal and written communication skills",
        "experience": "4",
        "country": "India",
        "country_code": "IN",
        "primary_title": "PHP developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Entertainment",
              "Insurance"
        ],
        "skills": [
              "HTML",
              "HTML 5",
              "PHP",
              "JavaScript",
              "API",
              "MySQL",
              "React JS",
              "jQuery",
              "MongoDB"
        ]
  },
  {
        "unique_id": "AXO2237",
        "id": "2638",
        "first_name": "B",
        "last_name": "Malvi",
        "profile_url": "Software-Developer-Malvi-B",
        "city": "Vasai",
        "bio": "Highly motivated and detail - oriented software developer with experience in Core PHP & other frameworks for full - stack web development and Python for backend scripting. Skilled in MVC frameworks, frontend technologies, and API development.",
        "experience": "3",
        "country": "India",
        "country_code": "IN",
        "primary_title": "Software Developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Communications and Media",
              "Human Resources"
        ],
        "skills": [
              "PHP",
              "Python",
              "HTML",
              "JavaScript",
              "Nginx",
              "REST APIs",
              "FastAPI",
              "Docker",
              "CodeIgniter",
              "Django",
              "MySQL",
              "WordPress"
        ]
  },
  {
        "unique_id": "AXO2611",
        "id": "2613",
        "first_name": "R",
        "last_name": "Bhalekar",
        "profile_url": "IT-Consultant-and-CTO-Bhalekar-R",
        "city": "Mumbai",
        "bio": "I'm an experienced IT Consultant and CTO hailing from the vibrant city of Mumbai, India. With 8 years of diverse IT expertise, I'm on a relentless journey to elevate my career and unleash my full potential. I aspire to contribute my skills and knowledge to your esteemed organization, seeking opportunities for growth while embracing new challenges. Let's embark on this exciting journey together and make a meaningful impact in the world of technology",
        "experience": "8",
        "country": "India",
        "country_code": "IN",
        "primary_title": "IT Consultant and CTO",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Automotive",
              "Information Technology"
        ],
        "skills": [
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
              "GIT",
              "AWS",
              "SVN",
              "PHP",
              "C",
              "C++",
              "Java"
        ]
  },
  {
        "unique_id": "AXO2598",
        "id": "2610",
        "first_name": "T",
        "last_name": "AT",
        "profile_url": "PHP-developer-AT-T",
        "city": "Mumbai",
        "bio": "A dedicated Sr. PHP Developer with over 4 years of experience in crafting web solutions. Proficient in PHP, CodeIgniter, Laravel, and MySQL, I have successfully delivered 20+ projects, including dynamic websites, CMS systems, and real estate management portals. My passion for coding and commitment to excellence drive me to create efficient, user-friendly applications. With a B.Sc. in IT and a strong technical skill set, I am ready to tackle new challenges and contribute to innovative projects in the software development field.",
        "experience": "4",
        "country": "India",
        "country_code": "IN",
        "primary_title": "PHP developer",
        "userPhoto": "https://augmntx.com/assets/img/noimage.jpg",
        "profile_industries": [
              "Automotive",
              "Education",
              "Finance",
              "Non Profit",
              "Real Estate",
              "Technology"
        ],
        "skills": [
              "PHP",
              "Code Igniter",
              "GIT",
              "MySQL",
              "HTML",
              "Laravel",
              "CSS",
              "jQuery",
              "JavaScript",
              "ReactJs",
              "VueJs",
              "Composer",
              "Bit Bucket",
              "GitHub",
              "NPM"
        ]
  }

];


const Body = () => {
  return (
    <div className='mx-10 flex'>
        <div className='w-1/4 flex-col my-10'>
            <div><span className='font-bold'>Hiring Resources</span></div>

            <div className='flex-col my-1'><span> <a href='https://blog.augmntx.com/how-to-hire-ios-developers/' > Guide to Hiring devs  </a> </span></div>
            <div className='flex-col my-1'><span> <a href='https://blog.augmntx.com/ios-job-template/' > Job Template  </a> </span></div>
            <div className='flex-col my-1'><span> <a href='https://blog.augmntx.com/common-interview-questions-for-ios/' > Interview Questions  </a> </span></div>
            <div className='flex-col my-1'><span> <a href='https://blog.augmntx.com/resource-outsourcing-mistakes/' > Common Mistakes </a> </span></div>      
            
            <div><span className='font-bold'>Need help?</span></div>
            <div className='flex-col my-1'><span> <a href='https://calendly.com/superlabs/discovery' > Book a meeting </a> </span></div>
            <div className='flex-col my-1'><span> <a href='https://wa.me/+919820045154' > Chat with a expert </a> </span></div>


        </div>


        <div className='w-3/4 flex flex-wrap'>

          
          {cardList.map((card) =>(
            <ProfileCard resData={card} />
          ))}
          

</div>    

          

          

        

          {/* <ProfileCard  resData={cardList[3]}/> */}
       

   
 

          
            
      
  



       

    </div>
   
  )
}

export default Body
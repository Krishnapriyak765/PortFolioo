import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Vidya from '../assets/vidya.png'
import Manapuram from '../assets/Manapuram.png'
import Crm from '../assets/crm.jpg'
import Hr from '../assets/hrSoftware.png'

export const HERO_CONTENT = 'I am an ASP.NET Core Developer with over one year of professional experience in software development, system engineering, and database management. I specialize in designing, developing, and managing enterprise-grade web applications, leveraging ASP.NET Core for robust backend development, HTML and JavaScript for responsive and dynamic user interfaces, and SQL for efficient database design and management.'



export const ABOUT_TEXT = 'I am a dedicated and versatile Full Stack Developer with a passion for building efficient and user-centric web applications. With over 1 year of professional experience, I have specialized in working with ASP.NET Core Web API, ASP.NET Core MVC, and PL/SQL, contributing to robust and scalable enterprise solutions. My journey has taken me into the financial sector, where I honed my skills developing and managing critical business applications.During my tenure, I contributed to the development of the MEBS application module, designed to streamline branch operations and ensure seamless management of branch details. Additionally, I played a key role in the HRMS module, which optimizes human resources processes and supports core HR operations. These projects allowed me to solve complex business challenges, ensuring high-quality outcomes and a positive impact on organizational efficiency.'
;

export const EXPERIENCES = [
  {
    year: "Nov:2023 - Present",
    role: "Junior Full Stack Developer",
    company: "Manappuram Finance Limited",
    description: 'Collaborated with designers and backend engineers to build a user-friendly and performant ASP.NET Core web application for Manappuram Finance Limited, developing and maintaining scalable web applications using ASP.NET Core (MVC), creating designs with front-end technologies such as JavaScript, HTML, CSS, and Bootstrap, integrating RESTful APIs via AJAX in JavaScript, familiarizing with PL/SQL on live servers, and monitoring performance while troubleshooting issues related to the ASP.NET web application',
    technologies: ["Javascript", "html", "css", "Asp.Net Core Mvc","Asp.net Core Web Api","pl/sql","flutterFlow","PostMan"],
    imgae:Manapuram
  },
];

export const Education = [
  {
    year: "2019 - 2023",
    role: "Computer Science",
    company: "Vidya Academy Of Science and Tecnoladgy",
    description: 'I have completed my Bachelor of Technology in Computer Science from Vidya Academy of Science and Technology, where I gained a strong foundation in software development, programming, and problem-solving. Throughout my academic journey, I developed a keen interest in applying technical skills to real-world challenges and am now eager to contribute to the tech industry.',
    image: Vidya
  },
];

export const PROJECTS = [
  {
    title: "DOTNET MEBS APPLICATION",
    image: Crm,
    description:
      "At Manappuram Finance, I contributed to the MEBS application by developing report generation features to track employee benefits and creating a course verification system for validating training and certifications. I worked closely with cross-functional teams to enhance system functionality, ensuring efficient benefit management and accurate reporting.",
    technologies: ["HTML", "CSS", "Js", "PL/Sql", "Asp.net Core Mvc","Asp.net Core Web Api"],
  },
  {
    title: "Task Management App",
    image: Hr,
    description:
      "At Manappuram Finance, I worked on the HRMS application, contributing to the development of key modules such as the leave application system and generating reports for employee punch-ins. I collaborated with cross-functional teams to streamline leave management processes and provide accurate reports for employee attendance, improving overall HR efficiency.",
    technologies: ["HTML", "CSS", "Js", "PL/Sql", "Asp.net Core Mvc","Asp.net Core Web Api"],
  },

  
];

export const CONTACT = {
  address: "Chanassery House , Edamuttam PO ,Thrissur",
  phoneNo: "8848012893",
  email: "nanduvbabu@gmail.com",
};

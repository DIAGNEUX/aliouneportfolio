import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  export const gridItems = [
    {
      id: 1,
      title: "Salut, moi c’est Alioune DIAGNE",
      description: "Je suis actuellement en 3e année en Conception Développeur d’Applications.",
      className: "md:col-span-1 md:row-span-1 h-[90vh]", // ✅ 90vh dans la première colonne
      imgClassName: "",
      titleClassName: "justify-end",
      img: "/ma_photo.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Quelques Stats",
      className: "relative md:col-span-1 md:row-span-1 h-[40vh] flex flex-col text-white text-lg font-semibold",
      stats: [
        { id: 1, label: "Projets Réalisés", value: "20" },
        { id: 2, label: "Années d'Expérience", value: "03" },
        { id: 3, label: "Technologies Utilisées", value: "05" }, 
      ],
    },    
    {
      id: 3,
      title: "Découvrez mon parcours et mes expériences en détail",
      description: "Découvrez mon parcours et mes expériences en détail",
      className: "md:col-span-1 md:row-span-1 h-[40vh]",
      imgClassName: "h-48",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "md:col-span-1 md:row-span-1 h-[90vh]", // ✅ 90vh pour la troisième colonne
      imgClassName: "h-48",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Contact moi",
      description: "The Inside Scoop",
      className: "md:col-span-1 md:row-span-1 h-[50vh]", // ✅ 50vh pour le cinquième élément
      imgClassName: "h-48",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Le meilleur moyen de prédire l’avenir,c’est de le coder.",
      description: "CITATION",
      className: "md:col-span-2 md:row-span-1 h-[50vh]", // ✅ 50vh pour le sixième élément
      imgClassName: "h-48",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "",
    },
  ];
  
  
  
  
  export const projects = [
    {
      id: 1,
      title: "UniBook - Bibliotheque universitaire",
      des: "Creation d'une application de gestion de bibliotheque universitaire permettant aux utilisateurs de rechercher et emprunter des livres.",
      img: "/home.png",
      iconLists: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "/ts.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
      weblink: "https://diagneux.github.io/bibliotheque_universitaire/",
    },
    {
      id: 2,
      title: "M2L - Site E-commerce",
      des: "Creation d'un site e-commerce pour une association de sports et de loisirs.",
      img: "/Ecommerce.png",
      iconLists: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "/node.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
      weblink: "/Ap3 doc.pdf",
    },
    {
      id: 3,
      title: "QuizMovie -  Streaming",
      des: "site web de streaming permettant aux utilisateurs d'avoir des information sur les films et faire des Quiz.",
      img: "/streaming.png",
      iconLists: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "/ts.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
      weblink: "https://diagneux.github.io/Streaming/",
    },
    {
      id: 4,
      title: "BTS Portfolio",
      des: "creation d'un portfolio de BTS",
      img: "/btsportfolio.png",
      iconLists: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "/three.svg"],
      weblink: "https://diagneux.github.io/monportfolio/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const mescompetences = [
    {
      id: 1,
      title: "Frontend",
      className: "md:col-span-2",
      leslangagesimg: [
        { id: 1, nom: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { id: 2, nom: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { id: 3, nom: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { id: 4, nom: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { id: 5, nom: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { id: 6, nom: "Vue.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { id: 7, nom: "Nuxt.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" },
        { id: 8, nom: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { id: 9, nom: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { id: 10, nom: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
      ],
    },
    {
      id: 2,
      title: "Backend",
      className: "md:col-span-2",
      leslangagesimg: [
        { id: 1, nom: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { id: 2, nom: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { id: 3, nom: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { id: 4, nom: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        { id: 5, nom: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { id: 6, nom: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { id: 7, nom: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { id: 8, nom: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      className: "md:col-span-2",
      leslangagesimg: [
        { id: 1, nom: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { id: 2, nom: "Framer Motion", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
        { id: 3, nom: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
        { id: 4, nom: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { id: 5, nom: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/DIAGNEUX"
    },
    {
      id: 2,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/alioune-diagne-281635253/"
    },
  ];
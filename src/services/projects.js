export const projects = [
    {
        id: 1,
        title: "Metallica Fan Site",
        shortDescription: "Fan site built with Astro and React, integrating multiple music APIs.",
        description: "A fan site dedicated to Metallica, built with Astro for static site generation and React for dynamic components. It consumes data from Spotify, SetlistFM, and LastFM APIs to display albums, songs, and the latest concert setlists. Styled with TailwindCSS and deployed to production.",
        image: "/images/projects/metallica.png",
        url: "https://metallica.freddyromo.dev/",
        technologies: ["Astro", "React", "TailwindCSS"],
        gitHub: "https://github.com/FreddyRomoCH/metallica"
    },
    {
        id: 2,
        title: "TO-DO list Vanilla JS",
        shortDescription: "Task management app built with Vanilla JavaScript.",
        description: "A small web application to manage daily tasks. Built with JavaScript, HTML and CSS, using LocalStorage to persist data. Users can add new tasks, delete them, and mark them as completed.",
        image: "/images/projects/todo-vanilla-js.png",
        url: "https://todo-list-vanillajs.freddyromo.dev/",
        technologies: ["JavaScript", "HTML", "CSS"],
        gitHub: "https://github.com/FreddyRomoCH/todo-list-vanilla-js"
    },
    {
        id: 3,
        title: "Guess Who",
        shortDescription: "Digital version of the classic character guessing board game.",
        description: "A React-based web version of the classic 'Guess Who?' board game. Styled with TailwindCSS and using React Context API for state management.",
        image: "/images/projects/guess-who.png",
        url: "https://guesswho.freddyromo.dev/",
        technologies: ["React", "TailwindCSS", "Context API"],
        gitHub: "https://github.com/FreddyRomoCH/Guess-Who-BoardGame"
    },
    {
        id: 4,
        title: "My Recipes",
        shortDescription: "Recipe management app with Supabase authentication and database.",
        description: "A web application where users can register, log in and manage their own recipes. Built with React and TailwindCSS, using React Router for navigation. It includes a Node.js backend hosted on Render, connected to a Supabase PostgreSQL database for authentication and data storage. Deployed on Render.",
        image: "/images/projects/my-recipes.png",
        url: "https://recipes.freddyromo.dev/",
        technologies: ["React (JavaScript)", "TailwindCSS", "Supabase", "Node.js", "React Router"],
        gitHub: "https://github.com/FreddyRomoCH/my-recipes"
    },
    {
        id: 5,
        title: "Travel Blog (Headless)",
        shortDescription: "Headless blog using WordPress as CMS and Astro for the frontend.",
        description: "A personal travel blog built with a headless architecture. WordPress is used as the CMS for content management, while Astro with TypeScript and TailwindCSS powers the frontend. The project focuses on fast builds, SEO, and a clean authoring workflow.",
        image: "/images/projects/travel-blog.png",
        url: "https://travelblog.freddyromo.dev/",
        technologies: ["Astro", "TypeScript", "TailwindCSS", "WordPress (Headless)"],
        gitHub: "https://github.com/FreddyRomoCH/travel-blog"
    }
]
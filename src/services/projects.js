export const projects = [
    {
        id: 1,
        title: "Metallica Fanpage",
        shortDescription: "Fanpage of the band Metallica.",
        description: "Fanpage of the band Metallica. It uses Astro to generate static pages and React to create dinamics components. It fetches data from the Spotify, SetlistFM and LastFM APIs to show the albums and songs and latest live concerts of the band.",
        image: "/images/projects/metallica.png",
        url: "https://metallica.freddyromo.dev/",
        technologies: ["Astro", "React", "TailwindCSS", "API Fetch"],
        gitHub: "https://github.com/FreddyRomoCH/metallica"
    },
    {
        id: 2,
        title: "TO-DO list Vanilla JS",
        shortDescription: "Simple TO-DO list built with Vanilla JS.",
        description: "Simple TO-DO list built with Vanilla JS. It uses LocalStorage to store the tasks and allows to add, delete and mark tasks as completed.",
        image: "/images/projects/todo-vanilla-js.png",
        url: "https://todo-list-vanillajs.freddyromo.dev/",
        technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
        gitHub: "https://github.com/FreddyRomoCH/todo-list-vanilla-js"
    },
    {
        id: 3,
        title: "Guess Who",
        shortDescription: "Boardgame of guessing the character.",
        description: "Classic bordgame of guessing the character. Built with React and TailwindCSS. It uses UseContext to manage the state of the game.",
        image: "/images/projects/guess-who.png",
        url: "https://guesswho.freddyromo.dev/",
        technologies: ["React", "TailwindCSS", "UseContext"],
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
    }
]
export const projects = [
    {
        id: 1,
        title: "Metallica Fanpage",
        shortDescription: "Fanpage of the band Metallica.",
        description: "Fanpage of the band Metallica. It uses Astro to generate static pages and React to create dinamics components. It fetches data from the Spotify, SetlistFM and LastFM APIs to show the albums and songs and latest live concerts of the band.",
        image: "/images/projects/metallica.png",
        url: "https://metallica.onrender.com/",
        technologies: ["Astro", "React", "TailwindCSS", "API Fetch"],
        gitHub: "https://github.com/FreddyRomoCH/metallica"
    },
    {
        id: 2,
        title: "My Recipes",
        shortDescription: "Web Site to store recipes (Still in progress).",
        description: "Web Site built with React to store recipes. It uses React Router to navigate between pages and TailwindCSS for styling. In the future it will have backend to add recipes manually and a login system where you'll be able to manage your own recipes.",
        image: "/images/projects/my-recipes.png",
        url: "https://my-own-recipes.onrender.com/",
        technologies: ["React", "TailwindCSS", "React Router", "UseContext", "API Fetch"],
        gitHub: "https://github.com/FreddyRomoCH/my-own-recipes"
    },
    {
        id: 3,
        title: "Guess Who",
        shortDescription: "Boardgame of guessing the character.",
        description: "Classic bordgame of guessing the character. Built with React and TailwindCSS. It uses UseContext to manage the state of the game.",
        image: "/images/projects/guess-who.png",
        url: "https://guess-who-m59i.onrender.com/",
        technologies: ["React", "TailwindCSS", "UseContext"],
        gitHub: "https://github.com/FreddyRomoCH/Guess-Who-BoardGame"
    }
]
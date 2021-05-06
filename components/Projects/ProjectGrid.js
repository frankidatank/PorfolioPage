import { Fragment } from "react";
import ProjectTiles from "./ProjectTiles";
const Projects = [
  {
    title: "Frankies-Fix (Blog)",
    description:
      "A personal Blog created with NextJS, uses features like SSR, MongoDB",
    image: "/images/frankiesblog.png",
    link: "https://frankies-fix.vercel.app/",
  },
  {
    title: "betterSpotify",
    description:
      "Spotify web player with lyrics, made using ReactJS, and Spotify API",
    image: "/images/betterSpotify.png",
    link: "https://github.com/frankidatank/betterSpotify",
  },
  {
    title: "chromeFriend",
    description:
      "SF Hacks 2021 Project, me and my team collaberated to build a chrome extention that helps with your productivity!",
    image: "/images/chromeFriend.png",
    link: "https://github.com/kchan438/SFHacks_Project",
  },
];

export default function ProjectGrid(props) {
  return (
    <section>
      <div className=" grid text-center pb-6 pt-5 font-extrabold tracking-tight text-gray-900 text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        <h2>Projects</h2>
      </div>
      <div className="mx-9 my-auto p-2 md:grid md:grid-cols-3 sm:flex ">
        {Projects.map((proj) => (
          <ProjectTiles key={proj.title} projects={proj} />
        ))}
      </div>
    </section>
  );
}

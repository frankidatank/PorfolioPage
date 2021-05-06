import Image from "next/image";
import Link from "next/link";

export default function ProjectTiles(props) {
  const { title, description, image, link } = props.projects;

  return (
    <div className="bg-indigo-600 p-8 pt-px shadow-lg rounded border-8 border-gray-900 m-1 md:m-2 hover:bg-opacity-75">
      <a href={link} target="_blank">
        <div className="w-full max-h-80  overflow-hidden object-cover rounded-sm">
          <Image src={image} width={200} height={140} layout="responsive" />
        </div>
        <div className="rounded w-3/4 ml-6 md:ml-12 mt-4 table text-center bg-white">
          <div className="leading-10 text-md md:text-xl font-bold underline">
            <h3>{title}</h3>
          </div>
          <div className="text-sm md:text-lg">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

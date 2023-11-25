import Image from "next/image";

interface IProjectCard {
  cardData: {
    date: string;
    name: string;
    link: string;
    image: string;
    description: string;
    technologies: string[];
  };
}

const ProjectCard = ({ cardData }: IProjectCard) => {
  return (
    <div className="p-9 w-full cursor-pointer hover:bg-cardHoverBackground transition-all duration-200 flex rounded-md items-center group gap-4">
      <div className="w-2/5 h-28 self-start relative">
        <Image
          src={cardData.image}
          alt="project-image"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-3/5 sm:w-full">
        <div className="flex items-center gap-3">
          <a
            href={cardData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor group-hover:text-badgeText transition-colors duration-200 font-semibold"
          >
            {cardData.name}
          </a>
          <Image src="/link.svg" alt="link" height={20} width={20} />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-semibold text-textColorMuted text-sm">
            {cardData.date}
          </p>
        </div>
        <p className="text-textColorMuted mt-2 text-sm group-hover:text-textColor transition-colors">
          {cardData.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {cardData.technologies.length !== 0 &&
            cardData.technologies.map((tech) => (
              <p
                key={tech}
                className="px-2 py-1 rounded-full text-badgeText bg-badgeBg text-xs"
              >
                {tech}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

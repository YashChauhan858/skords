import Image from "next/image";

const SocialHandler = () => {
  const socialHandler = [
    {
      link: "https://www.instagram.com/c0de.brew/?igshid=NGExMmI2YTkyZg%3D%3D",
      image: "/instagram.svg",
      alt: "instagram",
    },
    {
      link: "https://medium.com/@MeowMeow-afk",
      image: "/medium.svg",
      alt: "medium",
    },
    {
      link: "https://github.com/YashChauhan858/",
      image: "/github.svg",
      alt: "github",
    },
    {
      link: "https://www.linkedin.com/in/yashchauhan858/",
      image: "/linkedIn.svg",
      alt: "linkedIn",
    },
  ];
  return (
    <section>
      <ul className="list-none flex items-center gap-5 mt-28 lg:flex-col lg:mt-0">
        {socialHandler.map((link) => (
          <li key={link.alt}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <Image
                className="icon-color cursor-pointer hover:icon-color-white transition-all duration-150"
                src={link.image}
                alt={link.alt}
                width={25}
                height={25}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialHandler;

import ProjectCard from "@/components/ProjectCard/ProjectCard";

const portfolio = () => {
  const projectData = [
    {
      id: 1,
      name: "CUSTOM REACT BOILERPLATE",
      date: "Jan 2022",
      image: "/boiler.jpg",
      technologies: [
        "React.js",
        "Redux",
        "Webpack",
        "Typescript",
        "Docker",
        "Eslint",
        "React-Query",
      ],
      link: "https://github.com/YashChauhan858/React-ts-webpack-boilerplate#readme",
      description:
        "A react boilerplate from scratch with best known practices for better and maintainable code base with great production optimization settings.",
    },
    {
      id: 11,
      name: "Store Api",
      date: "Nov 2023",
      image: "/boiler.jpg",
      technologies: ["Node.js", "Express", "Redis", "Docker", "Docker compose"],
      link: "https://github.com/YashChauhan858/Store-Api/blob/main/README.md",
      description:
        "Its a store api that provides advance searching, sorting and pagination functionality along with the power of redis in memory caching and dockerized container",
    },
    {
      id: 2,
      name: "COVID TRACKER",
      date: "Apr 2021",
      image: "/covid-tracker.png",
      technologies: ["React.js", "Bootstrap"],
      link: "https://github.com/YashChauhan858/Covid-19-App/blob/main/README.md",
      description:
        "A real time Covid-19 cases count tracker which tracks worldwide and country wide data on daily and overall basis.",
    },
    {
      id: 3,
      name: "E-SHOPPING",
      date: "Jan 2021",
      image: "/amazon-app.png",
      technologies: ["React.js", "Redux"],
      link: "https://github.com/YashChauhan858/Amazon-Clone",
      description:
        "A frontend web app for E-shopping application with cart functionality that uses redux for data management.",
    },
  ];
  return (
    <main className="">
      <div className="w-[50%] mx-auto">
        {projectData?.length !== 0 &&
          projectData?.map((cardData) => (
            <ProjectCard key={cardData.id} cardData={cardData} />
          ))}
      </div>
    </main>
  );
};

export default portfolio;

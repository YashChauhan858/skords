const AboutMe = () => {
  return (
    <section className="w-1/2">
      <p className="text-textColorMuted w-9/12 tracking-wide leading-relaxed lg:w-full">
        As a frontend developer , I specialize in building robust, scalable web
        applications using modern technologies such as
        <span className="text-badgeText ml-1">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </span>
        ,
        <span className="text-badgeText ml-1">
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
        </span>
        ,
        <span className="text-badgeText ml-1">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </span>
        ,
        <span className="text-badgeText ml-1">
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker
          </a>
        </span>
        ,
        <span className="text-badgeText ml-1">
          <a
            href="https://webpack.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webpack
          </a>
        </span>{" "}
        and
        <span className="text-badgeText ml-1">
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
        </span>
        .
        <br className="block mt-5" />
        My passion for creating dynamic, interactive user experiences drives me
        to stay up-to-date with the latest developments in front-end
        development. Over the course of my career, I have honed my skills in
        designing and implementing complex UI components, integrating RESTful
        APIs and GraphQL endpoints, and utilizing state management libraries
        like Redux to maintain application state across a variety of contexts.
      </p>
    </section>
  );
};

export default AboutMe;

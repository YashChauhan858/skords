import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex">
        <div className="w-1/2">
          <h1 className="font-semibold text-3xl text-textColor">
            Hi there, im Yash Chauhan
          </h1>
          <p className="font-semibold text-lg text-textColorMuted mt-2">
            Front-end developer
          </p>
          <p className="mt-4 pl-3 text-sm w-3/5 lg:w-[80%] text-textColorMuted tracking-wide lg:pl-0">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </div>
        {/* About section */}
        <AboutMe />
      </section>
    </main>
  );
}

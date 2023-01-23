import Project from "../Project";
import SectionTitle from "../SectionTitle";

const MyWork = () => {
  return (
    <section className="px-4 md:px-16">
      <SectionTitle>My Work</SectionTitle>
      <div className="grid gap-2 grid-cols-4">
        <Project width="4" />
        <Project width="2" />
        <Project width="2" />
      </div>
    </section>
  );
};

export default MyWork;

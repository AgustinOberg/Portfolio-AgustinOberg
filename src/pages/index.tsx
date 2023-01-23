import {
  AboutMe,
  Header,
  MyWork,
  Presentation,
  SectionSpacer,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <SectionSpacer />
      <MyWork />
      <SectionSpacer />
      <AboutMe />
      <SectionSpacer />
      <Contact />
      <SectionSpacer />
      <Footer />
    </>
  );
}

import {
  AboutMe,
  Header,
  MyWork,
  Presentation,
  SectionSpacer,
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
    </>
  );
}

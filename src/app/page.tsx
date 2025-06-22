import Landing from "@/components/Landing";
import Section from "@/components/Section";

import Content from "@/content/index.json";

export function generateMetadata() {
  return {
    title: Content.title,
    description: Content.description,
  };
}

export default function Home() {
  return (
    <>
      <Landing {...Content.landing} />
      {Content.sections.map((section) => (
        <Section {...section} key={section.title} />
      ))}
    </>
  );
}

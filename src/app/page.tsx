import ReactMarkdown from "react-markdown";
import Markdown from "@/markdown";
import Landing from "@/components/Landing";
import rehypeFigure from "@/lib/rehype-figure";
import remarkDirective from "remark-directive";
import remarkParseDirective from "@/lib/remark-parse-directive";
import Figure from "@/components/Figure";
import Section from "@/components/Section";

export function generateMetadata() {
  const data = Markdown.getPage("/");

  return data.metadata;
}

export default function Home() {
  const data = Markdown.getPage("/");

  return (
    <ReactMarkdown
      remarkPlugins={[remarkDirective, remarkParseDirective]}
      rehypePlugins={[rehypeFigure]}
      components={{
        section: Section,
        figure: Figure,
        // @ts-expect-error Custom component
        landing: Landing,
      }}
    >
      {data.content}
    </ReactMarkdown>
  );
}

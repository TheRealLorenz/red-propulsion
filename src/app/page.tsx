import ReactMarkdown from "react-markdown";
import Markdown from "@/markdown";
import Landing from "@/components/Landing";
import sectionize from "remark-sectionize";
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
      remarkPlugins={[remarkDirective, remarkParseDirective, sectionize]}
      rehypePlugins={[rehypeFigure]}
      components={{
        section: Section,
        h2: ({ children }) => (
          <h2 className="text-4xl md:text-5xl mb-4 font-bold underline">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="text-xl md:text-2xl mb-4">{children}</p>
        ),
        figure: Figure,
        // @ts-expect-error Custom component
        landing: Landing,
      }}
    >
      {data.content}
    </ReactMarkdown>
  );
}

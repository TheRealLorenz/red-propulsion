import ReactMarkdown from "react-markdown";
import getMarkdown from "@/markdown";
import Landing from "@/components/Landing";
import sectionize from "remark-sectionize";
import WithDivider from "@/components/WithDivider";
import rehypeFigure from "@/lib/rehype-figure";

export function generateMetadata() {
  const data = getMarkdown("index.md");

  return data.metadata;
}

function Section({ children }: { children?: React.ReactNode }) {
  return (
    <div className="group even:bg-red-400 border-background even:border-red-400 border-t">
      <WithDivider className="fill-red-400 group-[:nth-child(even)]:fill-background group-[:nth-child(even)]:stroke-background group-[:last-child]:fill-none">
        <section className="max-w-200 p-10 mx-auto text-xl md:text-2xl [&>h2]:text-4xl [&>h2]:md:text-5xl [&>h2]:mb-4 [&>h2]:font-bold">
          {children}
        </section>
      </WithDivider>
    </div>
  );
}

function Figure({ children }: { children?: React.ReactNode }) {
  return (
    <figure className="mx-auto w-fit m-4 italic text-center text-base [&>figcaption]:mt-2">
      {children}
    </figure>
  );
}

export default function Home() {
  const data = getMarkdown("index.md");

  return (
    <div>
      <Landing />
      <ReactMarkdown
        remarkPlugins={[sectionize]}
        rehypePlugins={[rehypeFigure]}
        components={{
          section: Section,
          figure: Figure,
        }}
      >
        {data.content}
      </ReactMarkdown>
    </div>
  );
}

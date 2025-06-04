import ReactMarkdown from "react-markdown";
import Markdown from "@/markdown";
import Landing from "@/components/Landing";
import sectionize from "remark-sectionize";
import WithDivider from "@/components/WithDivider";
import rehypeFigure from "@/lib/rehype-figure";
import Bounded from "@/components/Bounded";

export function generateMetadata() {
  const data = Markdown.getPage("index.md");

  return data.metadata;
}

function Section({ children }: { children?: React.ReactNode }) {
  return (
    <div className="group even:bg-background-alt border-background even:border-background-alt border-t">
      <WithDivider className="fill-background-alt group-[:nth-child(even)]:fill-background group-[:nth-child(even)]:stroke-background group-[:last-child]:fill-none">
        <Bounded>
          <section>{children}</section>
        </Bounded>
      </WithDivider>
    </div>
  );
}

function Figure({ children }: { children?: React.ReactNode }) {
  return (
    <figure className="mx-auto w-fit my-8 italic text-center text-base [&>figcaption]:mt-2">
      {children}
    </figure>
  );
}

export default function Home() {
  const data = Markdown.getPage("index.md");

  return (
    <div>
      <Landing />
      <ReactMarkdown
        remarkPlugins={[sectionize]}
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
        }}
      >
        {data.content}
      </ReactMarkdown>
    </div>
  );
}

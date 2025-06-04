import Markdown from "@/markdown";
import ReactMarkdown from "react-markdown";
import WithDivider from "./WithDivider";

type WithChildren = {
  children?: React.ReactNode;
};

function LandingTitle({ children }: WithChildren) {
  return <h1 className="text-6xl md:text-8xl font-bold">{children}</h1>;
}

function Subtitle({ children }: WithChildren) {
  return <p className="text-3xl md:text-4xl">{children}</p>;
}

export default function Landing() {
  const component = Markdown.getComponent("landing.md");

  return (
    <WithDivider absolute className="fill-red-400">
      <div className="h-dvh flex flex-col items-center justify-center">
        <ReactMarkdown
          components={{
            h1: LandingTitle,
            p: Subtitle,
          }}
        >
          {component}
        </ReactMarkdown>
      </div>
    </WithDivider>
  );
}

import Markdown from "@/markdown";
import ReactMarkdown from "react-markdown";
import WithDivider from "./WithDivider";

type WithChildren = {
  children?: React.ReactNode;
};

function LandingTitle({ children }: WithChildren) {
  return (
    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold block">
      {children}
    </h1>
  );
}

function Subtitle({ children }: WithChildren) {
  return (
    <p className="text-2xl md:text-4xl lg:text-6xl text-center">{children}</p>
  );
}

export default function Landing() {
  const component = Markdown.getComponent("landing.md");

  return (
    <WithDivider absolute className="fill-background-alt">
      <div className="h-dvh flex flex-col items-center justify-center w-content">
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

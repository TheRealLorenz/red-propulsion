import ReactMarkdown from "react-markdown";
import ShowOnScroll from "@/components/ShowOnScroll";
import Markdown from "@/markdown";

export default function Navbar() {
  const content = Markdown.getComponent("navbar.md");

  return (
    <ShowOnScroll>
      <div className="fixed w-full font-2xl font-bold bg-background p-2 z-100">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </ShowOnScroll>
  );
}

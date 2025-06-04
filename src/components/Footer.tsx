import Markdown from "@/markdown";
import ReactMarkdown from "react-markdown";

export default function Footer() {
  const component = Markdown.getComponent("footer.md");

  return (
    <div className="w-full bg-background-dark text-background p-6 text-center md:text-left md:p-12">
      <ReactMarkdown
        components={{
          a: ({ children, href }) => (
            <a href={href} className="underline">
              {children}
            </a>
          ),
          h1: ({ children }) => (
            <h1 className="text-xl font-bold mb-4">{children}</h1>
          ),
          ul: ({ children }) => (
            <div className="flex justify-center md:justify-start list-none gap-4 m-4 [&>*]:w-10">
              {children}
            </div>
          ),
        }}
      >
        {component}
      </ReactMarkdown>
    </div>
  );
}

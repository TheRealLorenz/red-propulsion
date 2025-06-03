import getMarkdown from "@/markdown";
import ReactMarkdown from "react-markdown";

export default function Footer() {
  const data = getMarkdown("footer.md");

  return (
    <div className="w-full bg-background-dark p-6 text-center md:text-left md:p-12">
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
        }}
      >
        {data.content}
      </ReactMarkdown>
    </div>
  );
}

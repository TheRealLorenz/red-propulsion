import ShowOnScroll from "@/components/ShowOnScroll";

type Props = {
  children?: React.ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <ShowOnScroll>
      <div className="fixed w-full flex bg-background p-2 z-100 items-center shadow">
        {/* <ReactMarkdown */}
        {/*   components={{ */}
        {/*     h1: ({ children }) => ( */}
        {/*       <h1 className="text-xl font-bold mr-2">{children}</h1> */}
        {/*     ), */}
        {/*     ul: ({ children }) => ( */}
        {/*       <div className="flex items-center"> {children} </div> */}
        {/*     ), */}
        {/*     li: ({ children }) => ( */}
        {/*       <div className="mb-0 mt-1 hover:underline mx-2">{children}</div> */}
        {/*     ), */}
        {/*   }} */}
        {/* > */}
        {/*   {content} */}
        {/* </ReactMarkdown> */}
        {children}
      </div>
    </ShowOnScroll>
  );
}

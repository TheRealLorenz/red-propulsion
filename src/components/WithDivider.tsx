type Props = {
  children: React.ReactNode;
  absolute?: boolean;
  className?: string;
};

function Divider({ absolute }: { absolute?: boolean }) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`${absolute ? "absolute" : ""} bottom-0 fill-inherit`}
    >
      <path d="M 0 0 L 0 120 1200 120 1200 100 z"></path>
    </svg>
  );
}

export default function WithDivider({ children, absolute, className }: Props) {
  return (
    <div className={`${className} relative`}>
      {children}
      <Divider absolute={absolute} />
    </div>
  );
}

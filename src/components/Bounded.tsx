type Props = {
  children: React.ReactNode;
};

export default function Bounded({ children }: Props) {
  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "2rem",
        marginInline: "auto",
      }}
    >
      {children}
    </div>
  );
}

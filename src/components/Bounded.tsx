type Props = {
  children: React.ReactNode;
};

export default function Bounded({ children }: Props) {
  return <div className="max-w-200 p-4 mx-auto">{children}</div>;
}

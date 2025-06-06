type Props = {
  children?: React.ReactNode;
};

export default function Figure({ children }: Props) {
  return (
    <figure className="mx-auto w-fit my-8 italic text-center text-base [&>figcaption]:mt-2">
      {children}
    </figure>
  );
}

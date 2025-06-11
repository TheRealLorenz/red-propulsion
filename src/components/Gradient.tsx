import styles from "./Gradient.module.css";

type Props = {
  children?: React.ReactNode;
  type?: string;
};

const typeClassMapping: { [key: string]: string } = {
  red: "red-gradient",
};

export default function Gradient({ children, type }: Props) {
  return (
    <span className={type && styles[typeClassMapping[type]]}>{children}</span>
  );
}

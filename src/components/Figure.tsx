import styles from "./Figure.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Figure({ children }: Props) {
  return <figure className={styles.main}>{children}</figure>;
}

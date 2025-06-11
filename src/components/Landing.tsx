import styles from "./Landing.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Landing({ children }: Props) {
  return <div className={styles.landing}>{children}</div>;
}

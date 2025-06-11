import styles from "./Footer.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Footer({ children }: Props) {
  return <div className={styles.main}>{children}</div>;
}

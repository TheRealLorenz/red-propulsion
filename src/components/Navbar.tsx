import ShowOnScroll from "@/components/ShowOnScroll";
import styles from "./Navbar.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <ShowOnScroll>
      <div className={styles.navbar}>{children}</div>
    </ShowOnScroll>
  );
}

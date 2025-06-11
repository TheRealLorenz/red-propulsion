import Bounded from "@/components/Bounded";
import styles from "./Section.module.css";

type Props = { children?: React.ReactNode };

export default function Section({ children }: Props) {
  return (
    <div className={styles.section}>
      <Bounded>
        <section>{children}</section>
      </Bounded>
    </div>
  );
}

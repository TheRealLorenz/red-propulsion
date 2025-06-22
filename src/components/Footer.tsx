import styles from "./Footer.module.css";

type Props = {
  title: string;
  body: string;
  social_links: { name: string; link: string }[];
};

export default function Footer({ title, body }: Props) {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

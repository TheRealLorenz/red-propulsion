import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function RichText({ content }: Props) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

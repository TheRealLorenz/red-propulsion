type CardProps = {
  title: string;
  body: string;
};

function Card({ title, body }: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

type Props = {
  cards: CardProps[];
};

export default function CardsSection({ cards }: Props) {
  return (
    <div>
      {cards.map((card, i) => (
        <Card {...card} key={i} />
      ))}
    </div>
  );
}

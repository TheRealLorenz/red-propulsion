import WithDivider from "@/components/WithDivider";
import Bounded from "@/components/Bounded";

type Props = { children?: React.ReactNode };

export default function Section({ children }: Props) {
  return (
    <div className="group even:bg-background-alt border-background even:border-background-alt border-t">
      <WithDivider className="fill-background-alt group-[:nth-child(even)]:fill-background group-[:nth-child(even)]:stroke-background group-[:last-child]:fill-none">
        <Bounded>
          <section>{children}</section>
        </Bounded>
      </WithDivider>
    </div>
  );
}

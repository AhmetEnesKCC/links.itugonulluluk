import { LabelIconButtonProps } from "@/types/home";
import { Button } from "./ui/button";
import Link from "next/link";

const LabelIconButton = (props: LabelIconButtonProps) => {
  return (
    <Link href={props.link} target="_blank">
      <Button variant={"outline"} className="min-h-[48px] w-full">
        <div className="justify-between  items-center flex w-full h-full gap-x-4">
          <span className="text-ellipsis overflow-hidden text-left w-full">
            {props.label}
          </span>
          <div className="h-full w-max">{props.icon}</div>
        </div>
      </Button>
    </Link>
  );
};

export default LabelIconButton;

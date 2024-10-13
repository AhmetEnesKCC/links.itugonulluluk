import { LabelIconButtonProps } from "@/types/home";
import { Button } from "./ui/button";
import Link from "next/link";

const LabelIconButton = (props: LabelIconButtonProps) => {
  return (
    <Button variant={"outline"} className="min-h-[48px] ">
      <Link href={props.link} target="_blank" className="w-full h-full">
        <div className="justify-between  items-center flex w-full h-full gap-x-4">
          <span className="text-ellipsis overflow-hidden">{props.label}</span>{" "}
          <div className="h-full">{props.icon}</div>
        </div>
      </Link>
    </Button>
  );
};

export default LabelIconButton;

import { IconButtonProps } from "@/types/home";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { tailwindColors } from "@/constants/tailwind-config";
import clsx from "clsx";
import { Badge } from "./ui/badge";

const IconLink = (props: IconButtonProps) => {
  return (
    <Button
      style={{
        pointerEvents: props.soon ? "none" : "unset",

        backgroundColor: props.soon
          ? tailwindColors.foreground
          : tailwindColors.background,
      }}
      variant={"outline"}
      className={clsx(
        "min-w-[48px] min-h-[48px] rounded-md relative aspect-square flex items-center justify-center",
        !props.soon ? "hover:!bg-accent" : "hover:!bg-accent-foreground"
      )}
    >
      <Link
        as={"a"}
        className="flex-1 self-stretch aspect-square  "
        href={props.link}
      >
        {React.cloneElement(props.icon, {
          color: props.soon
            ? tailwindColors.background
            : tailwindColors.foreground,
        })}
        {props.soon && (
          <Badge variant={"secondary"} className="mt-1">
            <span className="text-xs">Yakında</span>
          </Badge>
        )}
      </Link>
    </Button>
  );
};

export default IconLink;

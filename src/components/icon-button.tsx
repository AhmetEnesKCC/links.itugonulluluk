import { IconButtonProps } from "@/types/home";
import { Button } from "./ui/button";
import React from "react";
import { tailwindColors } from "@/constants/tailwind-config";
import clsx from "clsx";
import { Badge } from "./ui/badge";
import Link from "next/link";

const IconLink = (props: IconButtonProps) => {
  return (
    <Link href={props.link} target="_blank">
      <Button
        style={{
          pointerEvents: props.soon ? "none" : "unset",

          backgroundColor: props.soon
            ? tailwindColors.foreground
            : tailwindColors.background,
        }}
        variant={"outline"}
        className={clsx(
          "min-w-[48px] min-h-[48px] rounded-md relative aspect-square p-2 ",
          !props.soon ? "hover:!bg-accent" : "hover:!bg-accent-foreground"
        )}
      >
        {React.cloneElement(props.icon, {
          color: props.soon
            ? tailwindColors.background
            : tailwindColors.foreground,
        })}
        <div className="absolute bottom-[-18px]">
          {props.soon && (
            <Badge variant={"secondary"} className="">
              <span className="text-[10px]">Yakında</span>
            </Badge>
          )}
        </div>
      </Button>
    </Link>
  );
};

export default IconLink;

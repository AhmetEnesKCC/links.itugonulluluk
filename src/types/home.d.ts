import React from "react";

export type IconButtonProps = {
  icon: React.JSX.Element;
  link: string;
  soon?: boolean;
};

export interface LabelIconButtonProps extends IconButtonProps {
  label: string;
}

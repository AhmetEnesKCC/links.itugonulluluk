import { tailwindConfig } from "./tailwind-config";

export const commonProps = {
  color: tailwindConfig.theme.colors.foreground,
  className: "flex-1 w-full h-full",
};

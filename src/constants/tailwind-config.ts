import resolveConfig from "tailwindcss/resolveConfig";
import localConfig from "@/../tailwind.config";
import { Config } from "tailwindcss";
import { Colors } from "@/types/tailwind-types";
import { ThemeConfig } from "tailwindcss/types/config";
import { DefaultColors } from "tailwindcss/types/generated/colors";

type TailwindColors = Omit<ThemeConfig, "colors"> & {
  colors: DefaultColors & Colors;
};

type TailwindConfig = Omit<Config, "theme"> & {
  theme: Omit<ThemeConfig, "colors"> & TailwindColors;
};

// @ts-expect-error content is not defined
export const tailwindConfig = resolveConfig<TailwindConfig>(localConfig);

export const tailwindColors = tailwindConfig.theme.colors;

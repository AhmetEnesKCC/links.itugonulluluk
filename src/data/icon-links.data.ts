import { commonProps } from "@/constants/props";
import { IconButtonProps } from "@/types/home";
import * as SI_ICONS from "react-icons/si";

export const iconLinks: IconButtonProps[] = [
  {
    icon: SI_ICONS.SiInstagram(commonProps),
    link: "https://www.instagram.com/itugonulluluk?igsh=MTV5eGpwbjNvYjZoaQ%3D%3D",
  },
  {
    icon: SI_ICONS.SiX(commonProps),
    link: "https://x.com/itugonulluluk",
  },
  {
    icon: SI_ICONS.SiYoutube(commonProps),
    link: "https://www.youtube.com/@itugonulluluk",
  },

  {
    icon: SI_ICONS.SiLinkedin(commonProps),
    link: "https://www.linkedin.com/company/it%C3%BC-g%C3%B6n%C3%BCll%C3%BCl%C3%BCk-kul%C3%BCb%C3%BC/",
  },
  {
    icon: SI_ICONS.SiAppstore(commonProps),
    link: "",
    soon: true,
  },
  {
    icon: SI_ICONS.SiGoogleplay(commonProps),
    link: "",
    soon: true,
  },
];

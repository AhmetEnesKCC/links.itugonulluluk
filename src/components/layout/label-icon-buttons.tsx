import { labelIconLinks } from "@/data/label-icon-links.data";
import LabelIconButton from "../label-icon-button";

const LabelIconButtons = () => {
  return (
    <div className="flex flex-col px-6 gap-y-6 mt-12">
      {labelIconLinks.map((labelIconLink) => (
        <LabelIconButton key={labelIconLink.link} {...labelIconLink} />
      ))}
    </div>
  );
};

export default LabelIconButtons;

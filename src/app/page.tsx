import Hero from "@/components/layout/hero";
import IconButtons from "@/components/layout/icon-buttons";
import LabelIconButtons from "@/components/layout/label-icon-buttons";

export default function Home() {
  return (
    <div className="mb-[120px]">
      <Hero />
      <IconButtons />
      <LabelIconButtons />
    </div>
  );
}

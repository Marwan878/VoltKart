import { ChevronLeft } from "lucide-react";
import { type ComponentPropsWithoutRef } from "react";
import ArrowContainer from "./ArrowContainer";

export default function PreviousArrow(
  props: Readonly<ComponentPropsWithoutRef<"button">>
) {
  const { className, style, onClick } = props;
  return (
    <ArrowContainer
      className={className}
      style={{ ...style, transform: "translateX(-1.5rem)" }}
      onClick={onClick}
    >
      <ChevronLeft
        size={24}
        color="black"
        aria-label="Show previous product."
      />
    </ArrowContainer>
  );
}

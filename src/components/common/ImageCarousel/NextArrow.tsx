import { ChevronRight } from "lucide-react";
import { type ComponentPropsWithoutRef } from "react";
import ArrowContainer from "./ArrowContainer";

export default function NextArrow(
  props: Readonly<ComponentPropsWithoutRef<"button">>
) {
  const { className, style, onClick } = props;
  return (
    <ArrowContainer
      className={className}
      style={{ ...style, transform: "translateX(1.5rem)" }}
      onClick={onClick}
    >
      <ChevronRight size={24} color="black" aria-label="Show next product." />
    </ArrowContainer>
  );
}

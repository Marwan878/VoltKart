import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className="fw-bold fs-1 border-bottom border-black mb-5 text-center"
      style={{ paddingBlockEnd: "0.2rem" }}
    >
      <span className="border-bottom border-2 border-black">
        <RevealOnScroll>{children}</RevealOnScroll>
      </span>
    </h2>
  );
}

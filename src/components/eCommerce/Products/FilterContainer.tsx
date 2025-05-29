export default function FilterContainer({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <div
      className="border-bottom border-2 border-black py-3"
      style={{ maxWidth: 300 }}
    >
      <h5 className="mb-3">{heading}</h5>
      {children}
    </div>
  );
}

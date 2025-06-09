export default function Option({
  children,
  className,
  style,
  as,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly as?: React.ElementType;
}) {
  const Component = as || "span";

  return (
    <Component
      style={{
        cursor: "pointer",
        minWidth: "2.5rem",
        fontSize: "0.8rem",
        ...style,
      }}
      className={`border-1 p-1 border d-inline-block text-center ${className}`}
    >
      {children}
    </Component>
  );
}

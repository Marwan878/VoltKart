export default function StorageOption<T extends React.ElementType>({
  children,
  className,
  style,
  as,
  isSelected,
  ...rest
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly as?: T;
  readonly isSelected?: boolean;
} & React.ComponentPropsWithoutRef<T>) {
  const Component = as ?? "span";

  return (
    <Component
      style={{
        minWidth: "2.5rem",
        fontSize: "0.8rem",
        ...style,
      }}
      className={`border-1 p-1 border d-inline-block text-center ${
        isSelected ? "bg-primary text-white" : "border-black"
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

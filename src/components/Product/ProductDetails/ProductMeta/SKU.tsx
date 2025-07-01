export default function SKU({ sku }: { readonly sku: string }) {
  return (
    <div>
      <span>SKU: </span>
      <span>{sku}</span>
    </div>
  );
}

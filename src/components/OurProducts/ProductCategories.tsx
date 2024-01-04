
type Product = {
  id: string,
  img: string,
  title: string,
  description: string,
  details: string,
  price: number;
};

type Props = {
  products: Product[];
};

 export const ProductCategories = ({products}: Props) => {
  return (
    <ul className="flex gap-4 items-center justify-end">
    {products.map((product) => (
      <li key={product.id} className="common-product-style">
        {product.title}
      </li>
    ))}
  </ul>
  )
}
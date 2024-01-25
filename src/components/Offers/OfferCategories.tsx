// import { ProductCategory } from "@/shared/types";

type Product = {
  id: string,
  img: string,
  title: string,
  description: string,
  details: string,
  price?: number,

};

type OffersProps = {
  products: Product[];
};

 export const OfferCategories: React.FC <OffersProps> = ({products}) => {
  // const getTextColor = (category: ProductCategory): string => {
  //   switch (category) {
  //     case ProductCategory.ForSalat:
  //       return 'text-salat-50';
  //     case ProductCategory.Italian:
  //       return 'text-italian-50';
  //     // ... додайте інші категорії
  //     default:
  //       return 'text-red-100'; // Це буде ваша стандартна клас-заглушка
  //   }
  // }

  return (
    <ul className="flex gap-4 items-center justify-end">
    {products.map((product) => (
      <li key={product.id} className={`common-product-style `}>
        {product.title}
      </li>
    ))}
  </ul>
  )
}
// // import { ProductCategories } from "../ProductCategories";


// type Product = {
//     id: string;
//     img: string;
//     title: string;
//     description: string;
//     details: string;
//     price: number;
// };

// // type ProductItemProps = {
// //     product: Product,
// //     products: Product[],
// // };
// type Props = {

//     products: Product[],
//     product: Product,
    
    
// };


// export const ProductItem= ({ product } : Props)  => {
//   return (
//     <li key={product.id}>
//     <div className="flex gap-4">
//         <img alt="oil image" src={product.img} className="w-[423px]" />

//         <div >
//             {/* <ProductCategories products={products} /> */}
//             <h2>Масло {product.title}</h2>
//             <p>{product.description}</p>
//             <p>{product.details}</p>
//             <p>Ціна 250мл `{product.price} грн`</p>
//         </div>
//     </div>
// </li>
//   )
// }
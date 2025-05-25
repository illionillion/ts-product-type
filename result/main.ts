// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
type ProductType<T extends string> = `Product_${T}`;

type Product<T extends string> = {
  id: string;
  name: string;
  type: ProductType<T>;
};

type Quotation<P extends Product<any>> = {
  id: string;
  productId: string;
  productType: P["type"];
  price: number;
};

declare const keyHolder: Product<"KeyHolder">;

type KeyHolderProduct = Product<"KeyHolder">;

// OK
const keyHolderGoodQuotation: Quotation<KeyHolderProduct> = {
  id: "quotation_q1",
  productId: "product_p1",
  productType: "Product_KeyHolder",
  price: 42000,
};

// NG: 型エラーになる（productTypeが合わない）
// const keyHolderBadQuotation: Quotation<KeyHolderProduct> = {
//   id: "quotation_q2",
//   productId: "product_p2",
//   productType: "Product_Leaflet", // 型エラー
//   price: 10000,
// };

// NG: 型引数を省略できないので、Product_だけの型は許容されない
// const test: Quotation<Product> = {
//   id: "",
//   price: 11,
//   productId: "",
//   productType: "Product_", // 型エラー
// }
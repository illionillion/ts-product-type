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
type ProductType<T extends string = string> = `Product_${T}`;

type Product<T extends string = string> = {
  id: string;
  name: string;
  type: ProductType<T>;
};

type Quotation<P extends Product = Product> = {
  id: string;
  productId: string;
  productType: P["type"];
  price: number;
};

declare const keyHolder: Product<"KeyHolder">;

// OK
const keyHolderGoodQuotation: Quotation<typeof keyHolder> = {
  id: "quotation_q1",
  productId: "product_p1",
  productType: "Product_KeyHolder",
  price: 42000,
};


// const keyHolderBadQuotation: Quotation<typeof keyHolder> = {
//   id: "quotation_q2",
//   productId: "product_p2",
//   productType: "Product_Leaflet", // ←ここがエラーになるべき
//   price: 10000,
// };

// Type '"Product_Leaflet"' is not assignable to type '"Product_KeyHolder"'.
// ←この型エラーが出て「一見安全そう」に見える


// ジェネリクス型の引数を省略している場合、
// 型引数がデフォルト値に置き換えられるため、
// Product__が代入されることになる。
const test: Quotation<Product> = {
  id: "",
  price: 11,
  productId: "",
  productType: "Product__" // ←この型エラーが出ない
}
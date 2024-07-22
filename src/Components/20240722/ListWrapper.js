import { List } from "./List";
export function ListWrapper() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Lamarr",
    imageUrl:
      "https://i.imgur.com/WohslsL_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  };
  return (
    <>
      <List products={products} user={user} />
    </>
  );
}

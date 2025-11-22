import { productsDb, type Product } from "../data/mockProducts";

/** User roles used in the app */
export type UserRole = "MANAGER" | "STORE_KEEPER";

/** Hard-coded demo users */
const USERS = [
  {
    id: "1",
    name: "Maya Manager",
    email: "manager@demo.com",
    password: "password123",
    role: "MANAGER" as UserRole,
    token: "token-manager",
  },
  {
    id: "2",
    name: "Sam Keeper",
    email: "keeper@demo.com",
    password: "password123",
    role: "STORE_KEEPER" as UserRole,
    token: "token-keeper",
  },
];

export async function fakeLoginApi(email: string, password: string) {
  await new Promise((res) => setTimeout(res, 400));

  const user = USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: user.token,
  };
}

export async function getProducts(): Promise<Product[]> {
  await new Promise((res) => setTimeout(res, 300));
  return [...productsDb];
}

export async function getProductById(
  id: string
): Promise<Product | undefined> {
  await new Promise((res) => setTimeout(res, 200));
  return productsDb.find((p) => p.id === id);
}

export async function saveProduct(product: Product): Promise<Product> {
  await new Promise((res) => setTimeout(res, 300));

  if (product.id) {
    const index = productsDb.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      productsDb[index] = { ...product };
      return productsDb[index];
    }
  }

  // CREATE new product
  const newProduct: Product = {
    ...product,
    id: (productsDb.length + 1).toString(),
  };

  productsDb.push(newProduct);
  return newProduct;
}


export async function deleteProduct(id: string): Promise<void> {
  await new Promise((res) => setTimeout(res, 200));

  const index = productsDb.findIndex((p) => p.id === id);
  if (index !== -1) {
    productsDb.splice(index, 1);
  }
}


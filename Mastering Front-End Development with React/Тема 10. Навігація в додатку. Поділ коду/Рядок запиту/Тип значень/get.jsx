const [searchParams] = useSearchParams();

const name = searchParams.get("name");
console.log(name, typeof name); // "hoodie", string

const maxPrice = searchParams.get("maxPrice");
console.log(maxPrice, typeof maxPrice); // "500", string

const inStock = searchParams.get("inStock");
console.log(inStock, typeof inStock); // "true", string

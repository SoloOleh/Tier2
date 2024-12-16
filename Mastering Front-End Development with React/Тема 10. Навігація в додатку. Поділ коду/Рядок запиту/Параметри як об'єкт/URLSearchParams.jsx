const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams]
);
const { name, maxPrice, inStock } = params;

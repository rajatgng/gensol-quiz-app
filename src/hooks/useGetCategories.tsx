import { useEffect, useState } from "react";
import { ICategory } from "../models/quiz";
import { fetchCategories } from "../services/quiz";

export function useGetCategories({
  onSuccess,
}: {
  onSuccess?: (res: ICategory[]) => void;
}) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [catLoading, setCatLoading] = useState(false);

  useEffect(() => {
    const storedCategoriesStr = localStorage.getItem("categories");
    const storedCategories = storedCategoriesStr
      ? JSON.parse(storedCategoriesStr)
      : [];
      // check if stored in local storage
    if (storedCategories.length) {
      setCategories(storedCategories);
      onSuccess?.(storedCategories);
    } else {
      setCatLoading(true);
      fetchCategories()
        .then((res) => {
          setCategories(res);
          onSuccess?.(res);
          setCatLoading(false);
          localStorage.setItem("categories", JSON.stringify(res)); // store in local storage as optimize api call
        })
        .catch(() => {
          setError("Unable to fetch categories");
          setCatLoading(false);
        });
    }
  }, []);

  return { categories, error, catLoading };
}

export default useGetCategories;

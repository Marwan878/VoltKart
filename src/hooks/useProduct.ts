import { supabase } from "@lib/supabase";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { TProduct, TLoading } from "@types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [status, setStatus] = useState<TLoading>("idle");
  const [error, setError] = useState<string | null>(null);

  const isWishlisted = useAppSelector((state) =>
    state.wishlist.productIds.includes(id as string)
  );

  const quantity = useAppSelector(
    (state) =>
      state.cart.products.find((product) => product.product_id === id)
        ?.quantity ?? 1
  );

  useEffect(() => {
    if (!id) {
      return;
    }

    const getProduct = async () => {
      try {
        setStatus("pending");
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          setError(error.message);
          setStatus("failed");
          throw new Error(error.message);
        }

        setProduct({ ...data, quantity, isWishlisted });
        setStatus("succeeded");
      } catch (error) {
        console.error(error);
      } finally {
        setStatus("idle");
      }
    };

    getProduct();
  }, [dispatch, id, isWishlisted, quantity]);

  return { product, status, error, setProduct };
};

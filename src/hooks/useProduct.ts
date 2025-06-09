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

        setProduct(data);
        setStatus("succeeded");
      } catch (error) {
        console.error(error);
      } finally {
        setStatus("idle");
      }
    };

    getProduct();
  }, [dispatch, id]);

  const isWishlisted = useAppSelector((state) =>
    state.wishlist.itemsId.includes(id as string)
  );
  const quantity = useAppSelector(
    (state) =>
      state.cart.products.find((product) => product.id === id)?.quantity ?? 1
  );

  return { product, quantity, isWishlisted, status, error };
};

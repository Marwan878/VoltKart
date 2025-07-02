import { supabase } from "@lib/supabase";
import { useAppDispatch } from "@store/hooks";
import { TLoading, TProduct } from "@types";
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

  return { product, status, error, setProduct };
};

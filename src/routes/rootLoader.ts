import { supabase } from "@lib/supabase";
import { store } from "@store";
import { setCartItemsIdentifiers } from "@store/cart/cartSlice";
import { setWishlistItemsIdentifiers } from "@store/wishlist/wishlistSlice";

export async function rootLoader() {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  // Load cart from database
  const { data: cartItemsIds, error: cartItemsIdsError } = await supabase
    .from("cart_items")
    .select("product_id, sku, quantity")
    .eq("user_id", data.user.id);

  if (cartItemsIdsError) {
    console.error("Error fetching cart items ids", cartItemsIdsError);
    return null;
  }

  store.dispatch(setCartItemsIdentifiers(cartItemsIds));

  // Load wishlist from database
  const { data: wishlistItemsIds, error: wishlistItemsIdsError } =
    await supabase
      .from("wishlist_items")
      .select("product_id")
      .eq("user_id", data.user.id);

  if (wishlistItemsIdsError) {
    console.error("Error fetching wishlist items ids", wishlistItemsIdsError);
    return null;
  }

  store.dispatch(
    setWishlistItemsIdentifiers(wishlistItemsIds.map((item) => item.product_id))
  );

  return null;
}

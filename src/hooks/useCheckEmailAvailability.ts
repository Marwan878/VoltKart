import { supabase } from "@lib/supabase";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
    useState<TStatus>("idle");

  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
    setEmailAvailabilityStatus("checking");
    try {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("email", email);

      if (data) {
        setEmailAvailabilityStatus("notAvailable");
      } else {
        setEmailAvailabilityStatus("available");
      }
    } catch (error) {
      setEmailAvailabilityStatus("failed");
      throw error;
    }
  };

  const resetCheckEmailAvailability = () => {
    setEmailAvailabilityStatus("idle");
    setEnteredEmail(null);
  };

  return {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
};
export default useCheckEmailAvailability;

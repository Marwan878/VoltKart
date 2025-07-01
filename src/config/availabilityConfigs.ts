import { type AvailabilityCheckConfig } from "@types";

export const EMAIL_AVAILABILITY_CONFIG: AvailabilityCheckConfig = {
  availableMessage: "Email is available",
  unavailableMessage: "Email is already in use",
  checkingMessage: "Checking email availability...",
  errorMessage: "Failed to check email availability",
};

export const PASSWORD_AVAILABILITY_CONFIG: AvailabilityCheckConfig = {
  availableMessage: "Password is correct",
  unavailableMessage: "Password is incorrect, please try again.",
  checkingMessage: "Checking password availability...",
  errorMessage: "Failed to check password availability",
};

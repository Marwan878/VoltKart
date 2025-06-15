export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "user" | "admin";
};

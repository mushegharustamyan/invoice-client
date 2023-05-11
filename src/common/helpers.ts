import { useNavigate } from "react-router";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  return (role: string | null) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "accountant":
        navigate("/invoices");
        break;
      default:
        console.log("no user")
        navigate("/");
    }
  };
};

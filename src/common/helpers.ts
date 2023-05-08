import { useNavigate } from "react-router";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  return (role: string) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "accountant":
        navigate("/invoices");
        break;
      default:
        navigate("/");
    }
  };
};

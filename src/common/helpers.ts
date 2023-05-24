import { useNavigate , redirect} from "react-router";

export const useCustomNavigate = () => {
  const navigate = useNavigate()
  return (role: string | null) => {
    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "accountant":
        navigate("/invoices");
        break;
      case "HOD":
      case "viewer":
      case "contributer":
        navigate("/department")
        break
      default:
        console.log("no user")
        navigate("/");
      }
    };
};

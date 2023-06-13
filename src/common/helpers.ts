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
        navigate("/");
      }
    };
};

export const amountFormating = (amount: number) => {
  let result = ""

  const amountSymbols = String(amount).split("")

  for(let i = amountSymbols.length - 1 ; i >= 0 ; i--) {
    result += amountSymbols[amountSymbols.length - 1 - i]
    if(i % 3 === 0) {
      result += "."
    }
  }

  return result + "00"
}

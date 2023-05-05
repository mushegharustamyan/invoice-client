import { useSelector } from "react-redux";
import { IChildrenProps, IUser } from "../../utils/types";
import { RootState } from "../..";
import { useNavigate } from "react-router";

export const AuthLayout = (props: IChildrenProps) => {
  const data = useSelector<RootState>(state => state.userReducer) as IUser

  const navigate = useNavigate()

  return <section>
    {
      data.token ? <>{navigate("/invoices")}</> : <>{props.children}</>
    }
  </section>
}
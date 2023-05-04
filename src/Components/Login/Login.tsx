import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"

export const Login = () => {
  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <Input width={350} text="Email" />
          <Input width={350} text="Password" />
          <Button width={350} text="Sign In"/>
        </div>
      </form>
    </div>
  )
}
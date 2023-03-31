import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"

export const Login = () => {
  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <Input text="Email:" width={400}/>
        <Input text="Password:" width={400}/>
        <Button text={"Log in"} width={400}/>
      </div>
    </form>
  )
}
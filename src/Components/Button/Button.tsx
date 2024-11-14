import { useContext } from "react";
import style from "./Button.module.scss";
import { Obj } from "../../Сontext/Context";
interface IProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  btnType?: "primary" | "secondary";
  value: string;
}
const Button = ({
  children,
  isDisabled = false,
  btnType = "primary",
  value,
}: IProps) => {
  const objFromContext = useContext(Obj);
  console.log(objFromContext);
  return (
    <button
      className={btnType === "secondary" ? `btn ${style.secondary}` : "btn"}
      disabled={isDisabled}
      onClick={() => console.log(value)}
    >
      {children}
    </button>
  );
};
export default Button;

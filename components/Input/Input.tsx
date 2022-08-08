import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(function InputRef(
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return <input className={cn(styles.input, className)} {...props} ref={ref} />;
});

export default Input;

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import { ArrowIcon } from "./arrow";
import cn from "classnames";

const Button = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: arrow === "right",
            [styles.down]: arrow === "down",
          })}
        >
          {ArrowIcon}
        </span>
      )}
    </button>
  );
};

export default Button;

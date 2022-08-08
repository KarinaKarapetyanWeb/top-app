import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef(function TextareaRef(
  { children, className, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element {
  return (
    <textarea className={cn(styles.textarea, className)} ref={ref} {...props}>
      {children}
    </textarea>
  );
});

export default Textarea;

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  children: ReactNode;
}

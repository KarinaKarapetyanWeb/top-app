import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FormHTMLAttributes,
  ReactNode,
} from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  productId: string;
}

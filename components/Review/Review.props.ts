import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ReviewModel } from "../../interfaces/product.interface";

export interface ReviewProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  review: ReviewModel;
}

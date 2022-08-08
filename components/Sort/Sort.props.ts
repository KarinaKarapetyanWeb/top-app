import { toUnicode } from "punycode";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (srtTpe: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}

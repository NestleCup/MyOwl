import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLDivElement
  > {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}
export enum SortEnum {
  Rating,
  Price,
}

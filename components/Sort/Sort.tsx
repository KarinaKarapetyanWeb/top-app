import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import { sortIcon } from "./sort-icon";

const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        className={cn(styles.sortItem, {
          [styles.active]: sort == SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
        type="button"
      >
        {sortIcon} По рейтингу
      </button>
      <button
        className={cn(styles.sortItem, {
          [styles.active]: sort == SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
        type="button"
      >
        {sortIcon} По цене
      </button>
    </div>
  );
};

export default Sort;

import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";
import cn from "classnames";
import { reviewIcon } from "./icons";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Rating from "../Rating/Rating";

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={cn(styles.review, className, {})} {...props}>
      {reviewIcon}
      <div className={styles.author}>
        <span className={styles.name}>{name}:</span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMM yyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Review;

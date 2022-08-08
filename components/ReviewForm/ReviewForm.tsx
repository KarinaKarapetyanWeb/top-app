import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import { closeIcon } from "./closeIcon";
import { useForm } from "react-hook-form";
import { ReviewForm } from "../../interfaces/reviewForm.interface";

const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<ReviewForm>();

  const onSubmit = (data: ReviewForm) => {
    console.log(data);
  };

  return (
    <form
      className={cn(className, {})}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.reviewForm}>
        <Input
          {...register("name")}
          className={styles.input}
          placeholder="Имя"
        />
        <Input
          {...register("title")}
          className={styles.input}
          placeholder="Заголовок отзыва"
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Rating rating={0} isEditable />
        </div>
        <Textarea
          {...register("description")}
          placeholder="Текст отзыва"
          className={styles.description}
        >
          {}
        </Textarea>
        <div className={styles.btnWrap}>
          <Button appearance="primary" type="submit">
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={cn(styles.message, styles.success)}>
        <p className={styles.messageTitle}>Ваш отзыв отправлен</p>
        <button className={styles.closeBtn} type="button">
          {closeIcon}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;

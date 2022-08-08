import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { products } from "../../helpers/icons";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import Image from "next/image";
import { useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);

  return (
    <>
      <Card className={cn(styles.product, className, {})}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt="Превью продукта"
            width={70}
            height={70}
          />
        </div>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.price}>
          {priceRu(+product.price)}
          {product.oldPrice && (
            <Tag color="green" className={styles.oldPrice}>
              {priceRu(+product.price - +product.oldPrice)}
            </Tag>
          )}
        </div>
        <p className={styles.credit}>
          {priceRu(+product.credit)}/<span className={styles.month}>мес.</span>
        </p>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((category) => (
            <Tag color="ghost" key={category}>
              {category}
            </Tag>
          ))}
        </div>
        <p className={styles.priceTitle}>Цена</p>
        <p className={styles.creditTitle}>Кредит</p>
        <p className={styles.rateTitle}>
          {product.reviewCount}{" "}
          {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
        </p>
        <div className={cn(styles.hr, styles.hr1)}>
          <hr />
        </div>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.feature}>
          {product.characteristics.map((characteristic) => (
            <div key={characteristic.name} className={styles.characteristic}>
              <span className={styles.characteristicName}>
                {characteristic.name}
              </span>
              <span className={styles.characteristicValue}>
                {characteristic.value}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.advantagesBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <p className={styles.advTitle}>Преимущества</p>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <p className={styles.advTitle}>Недостатки</p>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <div className={cn(styles.hr, styles.hr2)}>
          <hr />
        </div>
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        color="blue"
        className={cn(styles.review, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}
      >
        {product.reviews.map((review) => (
          <div key={review._id}>
            <Review key={review._id} review={review} />
            <div className={cn(styles.hr)}>
              <hr />
            </div>
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </>
  );
};

export default Product;

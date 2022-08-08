import styles from "./HhData.module.css";
import cn from "classnames";
import Card from "../Card/Card";
import { HhDataProps } from "./HhData.props";
import { rateIcon } from "./rate";
import { priceRu } from "../../helpers/helpers";

const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hhData}>
      <Card className={styles.hhCardTotal}>
        <p className={styles.title}>Всего вакансий</p>
        <p className={styles.totalValue}>{count}</p>
      </Card>
      <div className={styles.salary}>
        <Card className={styles.hhCardSalary}>
          <p className={styles.title}>Начальный</p>
          <p className={styles.salaryValue}>{priceRu(juniorSalary)}</p>
          <div className={styles.rate}>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
          </div>
        </Card>
        <Card className={styles.hhCardSalary}>
          <p className={styles.title}>Средний</p>
          <p className={styles.salaryValue}>{priceRu(middleSalary)}</p>
          <div className={styles.rate}>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
          </div>
        </Card>
        <Card className={styles.hhCardSalary}>
          <p className={styles.title}>Профессионал</p>
          <p className={styles.salaryValue}>{priceRu(seniorSalary)}</p>
          <div className={styles.rate}>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
            <span>{rateIcon}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HhData;

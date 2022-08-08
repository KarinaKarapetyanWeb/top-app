import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import { check } from "./check";

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div className={styles.advantageWrapper}>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          {check}
          <div>
            <h3 className={styles.title}>{advantage.title}</h3>
            <p className={styles.desc}>{advantage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;

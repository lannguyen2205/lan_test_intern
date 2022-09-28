import styles from "./TrendCard.module.scss";
import { TrendsList } from "../../data/TrendsList";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function TrendCard() {
  return (
    <>
      <div className={cx("TrendCard")}>
        <h3>Trends for you</h3>
        {TrendsList.map((trend, id) => {
          return (
            <div className={cx("trend")} key={id}>
              <span>#{trend.name}</span>
              <span>{trend.shares}k shares</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default TrendCard;

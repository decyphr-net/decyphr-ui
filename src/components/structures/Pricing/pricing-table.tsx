import React from 'react';
import styles from './Pricing.module.scss';


type PricingTableProps = {
  children: typeof PricingCard[];
}

type PricingCardProps = {
  name: string;
  cost: number;
  benefits: string[];
  isCurrent: boolean;
  textClass?: string;
  additionalClass?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({ name, cost, benefits, isCurrent, textClass, additionalClass }: PricingCardProps) => (
  <div className={`${styles["pricing-plan"]} ${styles[textClass]} ${styles[additionalClass]}`}>
    <div className={`${styles["plan-header"]}`}>{name}</div>
    <div className={`${styles["plan-price"]}`}>
      <span className={`${styles["plan-price-amount"]} ${textClass}`}>
        <span className={`${styles["plan-price-currency"]}`}>$</span>
        {cost}
      </span>
      /month
    </div>
    <div className={`${styles["plan-items"]}`}>
      {benefits.map((benefit) => {
        return (
          <div className={`${styles["plan-item"]}`}>
            {benefit}
          </div>
        )
      })}
    </div>
    <div className={`${styles["plan-footer"]}`}>
      <button className={`button is-fullwidth ${textClass}`} disabled={isCurrent}>Upgrade</button>
    </div>
  </div>
)

export const PricingTable: React.FC<PricingTableProps> = ({ children }: PricingTableProps) => (
  <div className={`${styles["pricing-table"]}`}>
    {children}
  </div>
)

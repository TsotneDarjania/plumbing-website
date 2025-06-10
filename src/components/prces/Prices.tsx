import styles from "./PricingPlans.module.css";

const plans = [
  {
    title: "Basic",
    price: "$49",
    description: "For small repairs & minor issues.",
    features: ["1-hour visit", "Minor leak fix", "Basic inspection"],
  },
  {
    title: "Standard",
    price: "$99",
    description: "Popular for typical home plumbing needs.",
    features: ["2-hour service", "Drain cleaning", "Pipe check & fix"],
    popular: true,
  },
  {
    title: "Premium",
    price: "$149",
    description: "Full-service coverage for complex tasks.",
    features: ["3-hour service", "Advanced diagnostics", "Priority support"],
  },
];

export default function PricingPlans() {
  return (
    <section class={styles.pricingSection}>
      <div class={styles.header}>
        <h2>Our Pricing Plans</h2>
        <p>Choose the service that best fits your plumbing needs.</p>
      </div>

      <div class={styles.planGrid}>
        {plans.map((plan) => (
          <div class={`${styles.card} ${plan.popular ? styles.popular : ""}`}>
            {plan.popular && <div class={styles.ribbon}>Most Popular</div>}
            <h3>{plan.title}</h3>
            <p class={styles.price}>{plan.price}</p>
            <p class={styles.description}>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li>✔ {feature}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

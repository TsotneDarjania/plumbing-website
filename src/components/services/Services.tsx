import styles from "./Services.module.css";

const services = [
  {
    title: "სასწრაფო შეკეთება",
    description:
      "მილების გახეთქვის, გაჟონვის და გადაუდებელი შეკეთების 24/7 მომსახურება..",
    icon: "🛠️",
  },
  {
    title: "წყალგაყვანილობა",
    description: "გაჭედილი მილების სწრაფი და ეფექტური გაწმენდა.",
    icon: "🚿",
  },
  {
    title: "მილების დაყენება",
    description:
      "საცხოვრებელი და კომერციული სანტექნიკის პროფესიონალური მონტაჟი.",
    icon: "🧰",
  },
  {
    title: "ონკანის შეკეთება",
    description:
      "ფარული გაჟონვის სწრაფად აღმოსაჩენად და გამოსასწორებლად მოწინავე ხელსაწყოები.",
    icon: "💧",
  },
];

export default function Services() {
  return (
    <section id="our_service" class={styles.servicesSection}>
      <div class={styles.header}>
        <h2>ჩვენი სერვისი</h2>
        <p>საიმედო, სწრაფი და ხელმისაწვდომი გადაწყვეტილებები</p>
      </div>

      <div class={styles.servicesGrid}>
        {services.map((service) => (
          <div class={styles.serviceCard}>
            <div class={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

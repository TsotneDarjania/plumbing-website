import styles from "./Services.module.css";

const services = [
  {
    title: "სასწრაფო შეკეთება",
    description:
      "მილების გახეთქვის, გაჟონვის და გადაუდებელი შეკეთების 24/7 მომსახურება.",
    icon: "🛠️",
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
    <>
      <div class={styles.asd} id="our_service"></div>
      {/* SERVICES SECTION */}
      <div class={styles.servicesSection}>
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
      </div>

      {/* OUTSTANDING SECTION */}
      <div class={styles.additionalSection}>
        <div class={styles.additionalText}>
          <h2>გათბობის სრული მომსახურება</h2>
          <p>
            ვასრულებთ <strong>გათბობის ნებისმიერი სახის სამუშაოებს</strong>, მათ
            შორის
            <strong> საკვამურების აშენებას</strong> (ასეთის საჭიროების
            შემთხვევაში),
            <strong> იატაკის გათბობის</strong> და{" "}
            <strong>კედლის გათბობის მონტაჟს</strong>,<strong> პანელური</strong>,{" "}
            <strong>სექციური</strong> და
            <strong> დეკორატიული რადიატორების მონტაჟს</strong>, ასევე
            <strong> მილგაყვანილობას</strong> როგორც პლასტმასის, ასევე მეტალის
            მილით. შესაძლებელია მონტაჟი <strong>ჩვენი მასალით</strong> ან
            <strong> მხოლოდ ჩვენი ხელობით</strong>. რა თქმა უნდა,
            <strong> ხელობაზე პასუხისმგებლობითა და გარანტიით</strong>.
          </p>
        </div>

        <div class={styles.additionalContent}>
          <div class={styles.imageWrapper}>
            <img src="/1.jfif" alt="Left side" class={styles.sideImage} />
          </div>

          <div class={styles.videoWrapper}>
            <video autoplay muted loop playsinline class={styles.video}>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div class={styles.imageWrapper}>
            <img src="/2.jfif" alt="Right side" class={styles.sideImage} />
          </div>
        </div>
      </div>
    </>
  );
}

import styles from "./Experience.module.css";

const images = [
  "/gallery/work-1.jfif",
  "/gallery/work-2.jfif",
  "/gallery/work-3.jfif",
  "/gallery/work-4.jfif",
  "/gallery/work-5.jfif",
  "/gallery/work-6.jfif",
  "/gallery/work-7.jfif",
  //   "/gallery/work-8.jfif",
  "/gallery/work-9.jfif",
];

export default function Experience() {
  return (
    <section id="gallery" class={styles.experienceSection}>
      <div class={styles.header}>
        <h2>ჩვენი გამოცდილება</h2>
        <p>
          გაეცანით ჩვენს შესრულებულ სამუშაოებს — ხარისხი ყველაფერზე მეტყველებს.
        </p>
      </div>

      <div class={styles.gallery}>
        {images.map((src) => (
          <div class={styles.imageWrapper}>
            <img
              src={src}
              alt="Plumbing work"
              class={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

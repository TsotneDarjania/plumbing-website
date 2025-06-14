import { createSignal } from "solid-js";
import styles from "./Slider.module.css";

// You can use this format to pair image with text:
const slides = [
  {
    image: "/plumbing1.jpg",
    title: "ვაკეთებთ სანტექნიკა გათბობას",
    description: "ხარისხი და გამოცდილება ჩვენი მთავარი უპირატესობებია.",
  },
  {
    image: "/plumbing2.jfif",
    title: "მოგვწერეთ ნომერზე",
    description: "+995 (ნომერი)",
  },
  {
    image: "/plumbing3.jfif",
    title: "მრავალმხრივი სერვისი",
    description:
      "ქვაბის კალონკის მონტაჟი, ვანის აქსესუარების, უნიტაზი, დუში, სარკე ",
  },
];

export default function Slider() {
  const [current, setCurrent] = createSignal(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div class={styles.slider}>
      <div
        class={styles.slides}
        style={{ transform: `translateX(-${current() * 100}%)` }}
      >
        {slides.map((slide) => (
          <div class={styles.slide}>
            <img src={slide.image} alt={slide.title} class={styles.image} />
            <div class={styles.textOverlay}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button class={styles.prev} onClick={prevSlide}>
        ‹
      </button>
      <button class={styles.next} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

import styles from "@/styles/components/carousel.module.scss"
import { useState } from "react"
import { Icon } from "../icons"
import { IconArrowLeft, IconArrowRight } from "../icons/icons"

interface CarouselProps {
  children: React.ReactNode[]
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [current, setCurrent] = useState(0)
  const handleNext = () => {
    setCurrent((prev) => (prev === children.length - 1 ? 0 : prev + 1))
  }
  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? children.length - 1 : prev - 1))
  }
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__container}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children.map((item, index) => {
          return (
            <div className={styles.carousel__container__item} key={index}>
              {item}
            </div>
          )
        })}
      </div>
      <button
        className={`${styles.carousel__button} ${styles.left}`}
        onClick={handlePrevious}
      >
        <Icon icon={IconArrowLeft} />
      </button>
      <button
        className={`${styles.carousel__button} ${styles.right}`}
        onClick={handleNext}
      >
        <Icon icon={IconArrowRight} />
      </button>
    </div>
  )
}

export default Carousel

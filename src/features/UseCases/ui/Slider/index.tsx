import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button, Text } from "@/shared/ui";
import { Trans, useTranslation } from "next-i18next";

interface Slide {
  blueTitle: string;
  whiteTitle: string;
  description: string;
  bgcolor: string;
  img: string;
}

const slides = [
  {
    blueTitle: "Instant Auto Sales:",
    whiteTitle: "Boost conversion",
    description:
      "Immediately deliver digital products and services to your users.",
    img: "/images/case-1.webp",
  },
  {
    blueTitle: "Channels integration:",
    whiteTitle: "Seamless access",
    description: "Automatically unlock exclusive content to your users.",
    img: "/images/case-2.webp",
  },
  {
    blueTitle: "Endless customization:",
    whiteTitle: "with Webhooks",
    description:
      "Receive successful payment notifications in real-time. Integrate to any scenario of your service.",
    img: "/images/case-3.webp",
  },
];

export const UseCasesSlider = function UseCasesSlider() {
  const { t } = useTranslation("common");
  const [width, setWidth] = useState(1600);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = ({ activeIndex }: SwiperCore) => {
    setActiveSlide(activeIndex);
  };

  const handlePaginationClick = (page: number) => () => {
    setActiveSlide(page);
    swiper?.slideTo(page);
  };

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={25}
        className={styles.swiper}
        direction={width > 1400 ? "vertical" : "horizontal"}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiper}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.img} className={styles.slide}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className={styles.slideImg}
            />
            <div className={styles.slideInfo}>
              <div className={styles.slideInfoText}>
                <Trans>
                  <Text
                    className={styles.slideTitle}
                    variant="h2"
                    isStableColor
                    color="blue"
                    component="h2"
                  >
                    {item.blueTitle}{" "}
                    <Text
                      variant="h2"
                      color="white"
                      isStableColor
                      component="span"
                      style={{ display: "inline" }}
                    >
                      {item.whiteTitle}
                    </Text>
                  </Text>
                </Trans>
                <Text
                  className={styles.slideDescription}
                  variant="base"
                  component="p"
                  isStableColor
                  color="white"
                >
                  {t(item.description)}
                </Text>
              </div>
              <a href="/" className={styles.slideButton}>
                <Button variant="primary"> {t("Open API Docs")}</Button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}>
        <Text variant="description" color="white" isStableColor>
          0{activeSlide + 1}
        </Text>
        {slides.map((slide, index) => (
          <button
            onClick={handlePaginationClick(index)}
            key={slide.img}
            className={classNames(styles.paginationLine, {
              [styles.selected]: index === activeSlide,
            })}
          />
        ))}
        <Text variant="description" color="white" isStableColor>
          0{slides.length}
        </Text>
      </div>
    </div>
  );
};

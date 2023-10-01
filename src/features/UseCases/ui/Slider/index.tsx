"use client";
import React, { FC, useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button, Card, Text } from "@/shared/ui";
import Image from "next/image";

interface Slide {
  blueTitle: string;
  whiteTitle: string;
  description: string;
  bgcolor: string;
  img: string;
}

const slides = [
  {
    blueTitle: "Instant Auto Sales: ",
    whiteTitle: "Boost conversion",
    description:
      "Immediately deliver digital products and services to your users.",
    img: "/case-1.webp",
  },
  {
    blueTitle: "Channels integration: ",
    whiteTitle: "Seamless access",
    description: "Automatically unlock exclusive content to your users.",
    img: "/case-2.webp",
  },
  {
    blueTitle: "Endless customization: ",
    whiteTitle: "with Webhooks",
    description:
      "Receive successful payment notifications in real-time. Integrate to any scenario of your service.",
    img: "/case-3.webp",
  },
];

export const UseCasesSlider = function UseCasesSlider() {
  const [width, setWidth] = useState(1600);
  console.log("🚀 ~ file: index.tsx:46 ~ UseCasesSlider ~ width:", width);
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
        {slides.map((item, index) => (
          <SwiperSlide key={item.img} className={styles.slide}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className={styles.slideImg}
            />
            <div className={styles.slideInfo}>
              <div className={styles.slideInfoText}>
                <Text
                  className={styles.slideTitle}
                  variant="h2"
                  color="blue"
                  component="h2"
                >
                  {item.blueTitle}
                  <Text
                    className={styles.slideTitleWhite}
                    variant="h2"
                    color="white"
                    component="span"
                  >
                    {item.whiteTitle}
                  </Text>
                </Text>
                <Text
                  className={styles.slideDescription}
                  variant="base"
                  component="p"
                  color="white"
                >
                  {item.description}
                </Text>
              </div>
              <Button className={styles.slideButton} variant="primary">
                Open API Docs
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}>
        <Text
          variant="description"
          color="white"
          className={styles.paginationPage}
        >
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
        <Text
          variant="description"
          color="white"
          className={styles.paginationPage}
        >
          0{slides.length}
        </Text>
      </div>
    </div>
  );
};

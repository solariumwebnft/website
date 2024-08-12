import { StaticImageData } from "next/image";
import image from "../../assets/images/murangu.webp";

interface CardProps {
  src: StaticImageData;
  title: string;
  price?: number;
}

export const SliderContentData = () => {
  const cardContent: CardProps[] = [
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
    { src: image, title: "titulo" },
  ];
  return { cardContent };
};

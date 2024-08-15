import { StaticImageData } from "next/image";
import image from "../../assets/images/murangu.webp";
import character from "/public/character.svg";
import cristal from "/public/cristal-carroussel.svg";
import base from "/public/base-carroussel.svg";
interface CardProps {
  src: StaticImageData;
  title: string;
  price?: number;
}

export const SliderContentData = () => {
  const cardContent: CardProps[] = [
    { src: character, title: "Monocelhudao-san" },
    { src: cristal, title: "Minerio espacial" },
    { src: base, title: "Base" },
    { src: cristal, title: "Minerio espacial" },
    { src: character, title: "Monocelhudao-san" },
    { src: base, title: "Base" },
    { src: character, title: "Monocelhudao-san" },
    { src: cristal, title: "Minerio espacial" },
    { src: base, title: "Base" },
    { src: cristal, title: "Minerio espacial" },
    { src: character, title: "Monocelhudao-san" },
    { src: base, title: "Base" },
    { src: cristal, title: "Minerio espacial" },
    { src: character, title: "Monocelhudao-san" },
    { src: base, title: "Base" },
    { src: cristal, title: "Minerio espacial" },
    { src: character, title: "Monocelhudao-san" },
    { src: base, title: "Base" },
    { src: character, title: "Monocelhudao-san" },
  ];
  return { cardContent };
};

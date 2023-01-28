import { persistValue, clearValue, retrieveValue } from "./persistence";
import { v4 as uuidv4 } from "uuid";

type State = {
  images: Image[];
};

export type Image = {
  id: string;
  name: string;
  src: string;
};

export enum ToolType {
  PENCIL = "PENCIL",
  ERASER = "ERASER",
}

export type ToolAttributes = {
  type: ToolType;
  strokeWidth: number;
  colour: string;
};

export const state: State = {
  images: retrieveValue("images") || [
    {
      id: "9c34c7d4-ec37-4df2-94b0-8ca0696dd504",
      name: "asdf",
      src: "/images/peppa-pig-2.svg",
    },
    {
      id: "a81392f0-66dd-4cf5-9e31-390284a3312f",
      name: "asdf",
      src: "/images/elephant-1.png",
    },
    {
      id: "7c1161c2-b9ad-488e-b66a-b18b0f2136be",
      name: "asdf",
      src: "/images/hatched_duck_icon_funny_black_white_cartoon_sketch_6847052.svg",
    },
    {
      id: "59bb6b53-19b1-48d8-bf3f-50eaceac47ea",
      name: "asdf",
      src: "/images/vecteezy_cute-little-monkey-outline-coloring-page-for-kids-animal_7908842.svg",
    },
    {
      id: "fca4e651-89ee-42f0-b5c0-856870220942",
      name: "asdf",
      src: "/images/elephant-1.png",
    },
    {
      id: "d315b92c-76d0-4742-a066-b42e8ec189b5",
      name: "asdf",
      src: "/images/elephant-1.png",
    },
  ],
};

export function getImage(id: string): Image | null {
  return (
    state.images.find((image) => {
      return image.id === id;
    }) || null
  );
}

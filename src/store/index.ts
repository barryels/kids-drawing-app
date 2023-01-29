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
      name: "fish-1",
      src: "/images/fish-1.svg",
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

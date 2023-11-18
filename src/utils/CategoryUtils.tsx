import { useTheme } from "styled-components";

export function CategoryUtils() {
  const theme = useTheme();

  interface Colors {
    all: string;
    work: string;
    food: "#F75A68";
    shop: "#00B37E";
    [key: string]: string;
  }

  const colors: Colors = {
    all: "black",
    work: "#0096c7",
    food: theme.colors.red,
    shop: theme.colors.green_500,
  };

  const buttons = [
    {
      label: "Work",
      value: "work",
      color: "blue",
    },
    {
      label: "Food",
      value: "food",
      color: "red",
    },
    {
      label: "Shop",
      value: "shop",
      color: "green",
    },
  ];

  return { colors, buttons };
}

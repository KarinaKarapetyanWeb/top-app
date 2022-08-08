import { FirstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
import { books, courses, products, services } from "./icons";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    id: TopLevelCategory.Courses,
    route: "courses",
    name: "Курсы",
    icon: courses,
  },
  {
    id: TopLevelCategory.Services,
    route: "servises",
    name: "Сервисы",
    icon: services,
  },
  {
    id: TopLevelCategory.Books,
    route: "books",
    name: "Книги",
    icon: books,
  },
  {
    id: TopLevelCategory.Products,
    route: "products",
    name: "Продукты",
    icon: products,
  },
];

export const priceRu = (price: number) =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

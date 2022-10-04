import axios from "axios";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Paragraph from "../components/Paragraph/Paragraph";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { MenuItem } from "../interfaces/menu.interface";
import { WithLayout } from "../layout/Layout";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button
        appearance="primary"
        onClick={() => undefined}
        arrow="right"
        type="button"
      >
        Кнопка
      </Button>
      <Button
        appearance="ghost"
        onClick={() => undefined}
        arrow="right"
      >
        Кнопка
      </Button>
      <Paragraph size="s">Текст параграфа</Paragraph>
      <Paragraph size="m">Текст параграфа</Paragraph>
      <Paragraph size="l">Текст параграфа</Paragraph>
      <Tag>Ссылка</Tag>
      <Tag color="red">Ссылка</Tag>
      <Tag color="green">Ссылка</Tag>
      <Tag color="grey">Ссылка</Tag>
      <Tag color="primary">Ссылка</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default WithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

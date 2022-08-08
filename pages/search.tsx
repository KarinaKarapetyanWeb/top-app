import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { WithLayout } from "../layout/Layout";

interface SearchProps extends Record<string, unknown> {}

function Search({}: SearchProps): JSX.Element {
  return <>Search</>;
}

export default WithLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
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

import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { firstLevelMenu } from "../../helpers/helpers";
import { MenuItem } from "../../interfaces/menu.interface";
import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { WithLayout } from "../../layout/Layout";
import TopPageComponent from "../../page-components/TopPageComponent/TopPageComponent";

interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
}

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
  return (
    <TopPageComponent
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default WithLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const mItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: mItem.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((m) => m.pages.map((p) => `/${mItem.route}/${p.alias}`))
    );
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: firstCategoryItem.id,
      }
    );
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
    );
    const { data: products } = await axios.post<ProductModel[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        firstCategory: firstCategoryItem.id,
        menu,
        page,
        products,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

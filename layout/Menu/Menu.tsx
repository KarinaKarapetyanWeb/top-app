import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { PageItem } from "../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import { FirstLevelMenuItem } from "../../interfaces/menu.interface";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((menuItem) => {
          if (menuItem._id.secondCategory === secondCategory) {
            menuItem.isOpened = !menuItem.isOpened;
          }
          return menuItem;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((firstLevelM) => {
          return (
            <div key={firstLevelM.route}>
              <Link href={`/${firstLevelM.route}`}>
                <a>
                  <div
                    className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]:
                        firstLevelM.id == firstCategory,
                    })}
                  >
                    {firstLevelM.icon}
                    <span>{firstLevelM.name}</span>
                  </div>
                </a>
              </Link>
              {firstLevelM.id == firstCategory && buildSecondLevel(firstLevelM)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((secondLevelM) => {
          const path = router.asPath.split("/")[2];

          if (secondLevelM.pages.map((page) => page.alias).includes(path)) {
            secondLevelM.isOpened = true;
          }
          return (
            <div key={secondLevelM._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(secondLevelM._id.secondCategory)}
              >
                {secondLevelM._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: secondLevelM.isOpened,
                })}
              >
                {buildThirdLevel(secondLevelM.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => {
      return (
        <Link href={`/${route}/${page.alias}`} key={page.category}>
          <a
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]:
                `/${route}/${page.alias}` == router.asPath,
            })}
          >
            {page.category}
          </a>
        </Link>
      );
    });
  };

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
};

export default Menu;

import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import { searchIcon } from "./icon";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const goToSearch = (evt) => {
    evt.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  return (
    <form className={cn(styles.search, className, {})} {...props}>
      <Input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
      <Button
        appearance="primary"
        className={styles.button}
        aria-label="Поиск"
        onClick={(evt) => goToSearch(evt)}
        type="submit"
      >
        {searchIcon}
      </Button>
    </form>
  );
};

export default Search;

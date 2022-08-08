import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Menu from "../Menu/Menu";
import { logo } from "../logo";
import Search from "../../components/Search/Search";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside {...props} className={cn(className, styles.sidebar)}>
      {logo}
      <Search />
      <Menu />
    </aside>
  );
};

export default Sidebar;

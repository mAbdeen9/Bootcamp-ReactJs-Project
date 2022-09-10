import { NavLink } from "react-router-dom";

const myLink = (props) => {
  return (
    <NavLink
      className={(navData) =>
        navData.isActive
          ? props.classes.activeLink
          : props.classes.notActiveLink
      }
      to={props.path}
    >
      {props.link}
    </NavLink>
  );
};

export default myLink;

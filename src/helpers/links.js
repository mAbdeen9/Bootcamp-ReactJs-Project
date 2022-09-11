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

function links(classes) {
  const home = myLink({
    link: (
      <span className={classes.logo}>
        Real<i className="bi bi-geo-fill"></i>App
      </span>
    ),
    path: "/home",
    classes: classes,
  });

  const about = myLink({
    link: <span style={{ padding: "0 10px" }}> About </span>,
    path: "/about",
    classes: classes,
  });

  const SignIn = myLink({
    link: <span> Sign in </span>,
    path: "/sign-in",
    classes: classes,
  });

  const SignUp = myLink({
    link: <span> Sign up </span>,
    path: "/sign-up",
    classes: classes,
  });

  const SignUpBiz = myLink({
    link: <span> Sign up business </span>,
    path: "/sing-up-biz",
    classes: classes,
  });

  return { home, about, SignIn, SignUp, SignUpBiz };
}

export default links;

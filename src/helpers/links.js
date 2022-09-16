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

function links(classes, handelShowMenu, signOut) {
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
    link: <span onClick={handelShowMenu}> Sign in </span>,
    path: "/sign-in",
    classes: classes,
  });

  const SignUp = myLink({
    link: <span onClick={handelShowMenu}> Sign up </span>,
    path: "/sign-up",
    classes: classes,
  });

  const SignUpBiz = myLink({
    link: <span onClick={handelShowMenu}> Sign up business </span>,
    path: "/sign-up-biz",
    classes: classes,
  });

  const SignOut = myLink({
    link: <span onClick={signOut}>Sign out</span>,
    path: "/",
    classes: classes,
  });

  const MyCard = myLink({
    link: <span> My Cards </span>,
    path: "/my-cards",
    classes: classes,
  });
  return { home, about, SignIn, SignUp, SignUpBiz, SignOut, MyCard };
}

export default links;

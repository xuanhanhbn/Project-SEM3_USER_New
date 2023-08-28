import { useRouteMatch, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customLink: {
    fontSize: "15px",
    paddingTop: ".9rem",
    paddingBottom: ".9rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "#fff",
    fontWeight: 600,
    opacity: 1,

    "&:hover": {
      color: "#eec857",
    },
  },
});

const CustomLink = ({ label, to, activeOnlyWhenExact }: any) => {
  const classes = useStyles();
  const routeActive = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

  return (
    <Box>
      <Link
        to={to}
        className={classes.customLink}
        style={{ color: routeActive ? "#eec857" : "#fff" }}
      >
        {label}
      </Link>
    </Box>
  );
};

export default CustomLink;

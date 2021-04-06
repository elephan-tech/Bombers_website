import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    linkBase: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      fontWeight: "bold",
      fontSize: 18,
      textDecoration: "none",
      margin: 8,
      padding: "8px 16px",
      minWidth: 100,
      color: "#e2e2e2",
    },
    a: {
      minHeight: 60,

      "&:hover , &:active": {
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundImage: (props) =>
          props.component === "a" ? 'url("/line.png")' : "none",
        backgroundSize: "80% auto",
      },
    },
    button: {
      borderRadius: 8,
      margin: "auto",
      background: (props) => theme.palette[props.bg || "primary"].main,
      "&:hover": {
        background: (props) => theme.palette[props.bg || "primary"].light,
      },
    },
    div: {
      cursor: "pointer",
    },
    span: {
      display: "inline",
      margin: 8,
    },
  }),
  { name: "link" }
);

export default useStyles;

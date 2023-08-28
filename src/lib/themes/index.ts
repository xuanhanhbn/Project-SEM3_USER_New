import { PaletteMode } from "@mui/material";
import { deepOrange, grey, common } from "@mui/material/colors";

export const getDesignTokens = (mode?: PaletteMode): any => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          divider: common["black"],
          background: {
            default: common["white"],
            paper: common["white"],
          },
          text: {
            primary: "#8B8B8B",
            secondary: "#FF64AE"
          },
          primary: {
            main: "#091156"
          },
          secondary: {
            main: "#FF64AE"
          }
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: grey[500],
          background: {
            default: common["black"],
            paper: common["black"],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    "fontFamily": `"Poppins",sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    h2: {
      color: "#091156",
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "55px"
    },
    h3: {
      color: "#091156",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "40px"
    },
    subtitle1: {
      color: "#091156",
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "1px"
    },
    subtitle2: {
      color: "#FF64AE",
      fontSize: "16px",
      fontWeight: 600,
    },
    button: {
      textTransform: 'none'
    }
  }
});

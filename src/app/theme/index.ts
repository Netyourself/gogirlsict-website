import { extendTheme } from "@chakra-ui/react";

interface CustomTheme {
  colors: {
    primary: string; // pink primary color
    secondary: string; // purple secondary color
    black: string;
    white: string;
    gray: string;
    gray100: string;
    gray600: string;
    primary500: string; // pink primary 500
    primary600: string; // pink primary 600
    secondary500: string; // purple secondary 500
    secondary600: string; // purple secondary 600
  };
  fonts: {
    heading: string;
    body: string;
  };
}

const branding = extendTheme({
  colors: {
    primary: "#e91e63", // Main pink color
    secondary: "#9b59b6", // Secondary purple color
    //pink: "#DA4424", //Pink version light

    //pink: "#E9574F", // dark salmon pink
    black: "#000000",
    white: "#ffffff",
    gray: "#808080",
    gray100: "#f7fafc",
    gray600: "#808080",
    primary500: "#e91e63",
    primary600: "#d81b60",
    secondary500: "#9b59b6",
    secondary600: "#8e44ad",
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray100",
        color: "gray600",
      },
      a: {
        // color: "secondary500",
        color: "white",

        _hover: {
          // color: "secondary600",
          color: "gray.100",
        },
      },
      button: {
        bg: "primary500",
        color: "white",
        _hover: {
          bg: "primary600",
        },
        _active: {
          bg: "primary600",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "0 0 0 3px rgba(233, 30, 99, 0.6)", // Outline with pink color
        },
      },
      variants: {
        solid: {
          bg: "primary500",
          color: "white",
          _hover: {
            bg: "primary600",
          },
          _active: {
            bg: "primary600",
          },
        },
        outline: {
          borderColor: "primary500",
          color: "primary500",
          _hover: {
            bg: "primary600",
          },
        },
        link: {
          // color: "primary500",
          // _hover: {
          //   color: "primary600",
          // },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "secondary600",
      },
    },
    Link: {
      baseStyle: {
        // color: "secondary500",
        // _hover: {
        //   color: "secondary600",
        // },
      },
    },
    Navbar: {
      baseStyle: {
        bg: "primary500",
        color: "white",
        _hover: {
          bg: "primary600",
        },
      },
    },
    Footer: {
      baseStyle: {
        bg: "primary500",
        color: "white",
        _hover: {
          bg: "primary600",
        },
      },
    },
  },
}) as CustomTheme;

export default branding;

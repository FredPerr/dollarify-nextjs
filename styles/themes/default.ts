import { createTheme } from "@mui/material/styles";


const defaultTheme = createTheme({
    typography: {
        fontWeightRegular: 400,
        fontFamily: [
            '"Poppins"',
            'sans-serif'
        ].join(',')
    },
    palette: {
        mode: 'light',
        primary: {
            main: "#1c7d5a",
            dark: "#106446",
            light: "#2c9670",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#757575",
            dark: "#525252",
            light: "#757575",
        },
        background: {
            default: "#FFFFFF",
            paper: "#E8E8E8",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
})

export default defaultTheme;
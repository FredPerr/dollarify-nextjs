import { Box as MuiBox, BoxProps } from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled } from "@mui/system"


const StyledBox = styled(MuiBox)(({ theme }) => ({
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}))


interface StyledBoxProps extends MUIStyledCommonProps {
    children?: React.ReactNode,
    variant?: string,
}


const Box = ({ children, variant = "blank", ...props }: StyledBoxProps) => {

    if (!props.sx)
        props.sx = {}

    if (variant == "filled")
        props.sx = { ...props.sx, bgcolor: 'primary.main', color: 'primary.contrastText', width: 'fit-content', boxShadow: 1, cursor: 'default' }
    else if (variant == "outlined")
        props.sx = { ...props.sx, border: '1px solid white', borderColor: 'grey.600', color: 'text.primary', width: 'fit-content' }

    return (
        <StyledBox {...props}>
            {children}
        </StyledBox>
    )
}

export { Box }
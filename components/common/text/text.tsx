
import { Typography, TypographyProps } from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled, SxProps } from "@mui/system"


const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary
}))


interface StyledTextProps extends TypographyProps, Omit<MUIStyledCommonProps, 'sx'> {
    sx?: SxProps,
}


const Text = ({ children, ...props }: StyledTextProps) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    )
}

export { Text }
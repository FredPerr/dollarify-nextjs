
import { Typography } from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled } from "@mui/system"


const StyledText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary
}))


interface StyledTextProps extends MUIStyledCommonProps {
    children: React.ReactNode,
}


const Text = ({ children, ...props }: StyledTextProps) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    )
}

export { Text }
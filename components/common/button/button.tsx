import {
    Button as MuiButton
} from "@mui/material"
import React from "react"
import {MUIStyledCommonProps, styled} from "@mui/system"


const StyledMuiButton = styled(MuiButton)(({theme})=>({
    margin: theme.spacing(1)
}))


interface StyledButtonProps extends MUIStyledCommonProps {
    children? : React.ReactNode
}


const Button = ({ children, ...props }: StyledButtonProps) => {
    return (
        <StyledMuiButton {...props}>
            {children}
        </StyledMuiButton>
    )
}

Button.defaultProps = {
    variant: 'contained',
    color: 'primary'
}


export { Button }
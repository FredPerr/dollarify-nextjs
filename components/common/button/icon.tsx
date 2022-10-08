import {
    IconButton as MuiIconButton
} from "@mui/material"
import React from "react"
import {MUIStyledCommonProps, styled} from "@mui/system"


const StyledMuiIconButton = styled(MuiIconButton)(({theme})=>({
    margin: theme.spacing(1)
}))


interface StyledIconButtonProps extends MUIStyledCommonProps {
    icon: React.ReactNode,
}


const IconButton = ({ icon, ...props }: StyledIconButtonProps) => {
    return (
        <StyledMuiIconButton {...props}>
            {icon}
        </StyledMuiIconButton>
    )
}

IconButton.defaultProps = {
    color: 'primary'
}


export { IconButton }
import {
    Button,
    ButtonProps
} from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled, SxProps } from "@mui/system"
import Link from "next/link"


const StyledMuiAnchorButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1)
}))


interface StyledAnchorProps extends ButtonProps, Omit<MUIStyledCommonProps, 'sx'> {
    href: string,
    content: string | React.ReactNode,
    sx?: SxProps,
}


const AnchorButton = ({ content, href, ...props }: StyledAnchorProps) => {
    return (
        <Link href={href}>
            <StyledMuiAnchorButton {...props}>{content}</StyledMuiAnchorButton>
        </Link>
    )
}


export { AnchorButton }
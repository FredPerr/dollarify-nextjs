import {
    Typography, Button, TypographyProps
} from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled, SxProps } from "@mui/system"
import Link from "next/link"


const StyledMuiAnchorButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    cursor: 'pointer'
}))

const StyledMuiAnchorText = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(1),
    cursor: 'pointer', 
    textDecoration: 'underline',
    color: theme.palette.primary.main
}))


interface StyledAnchorProps extends TypographyProps, Omit<MUIStyledCommonProps, 'sx'> {
    href: string,
    text: string | React.ReactNode,
    sx?: SxProps
}


const AnchorText = ({ text, href, ...props }: StyledAnchorProps) => {
    return (
        <Link href={href}>
            <StyledMuiAnchorText {...props}>{text}</StyledMuiAnchorText>
        </Link>
    )
}


export { AnchorText }
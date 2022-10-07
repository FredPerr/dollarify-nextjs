import {
    Typography, TypographyProps
} from "@mui/material"
import React from "react"
import { MUIStyledCommonProps, styled, SxProps } from "@mui/system"
import Link from "next/link"


const StyledMuiAnchorText = styled(Typography)(({ theme }) => ({
    cursor: 'pointer', 
    color: theme.palette.primary.main
}))


interface StyledAnchorProps extends TypographyProps, Omit<MUIStyledCommonProps, 'sx'> {
    href: string,
    content: string | React.ReactNode,
    sx?: SxProps,
}


const AnchorText = ({ content, href, ...props }: StyledAnchorProps) => {
    return (
        <Link href={href}>
            <StyledMuiAnchorText {...props}>{content}</StyledMuiAnchorText>
        </Link>
    )
}


export { AnchorText }
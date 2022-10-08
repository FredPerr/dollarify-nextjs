import { Anchor } from "../common/anchor"
import LogoNameColorSvg from "@/public/images/logos/name-color.svg?url"
import LogoNameContrastSvg from "@/public/images/logos/name-contrast.svg?url"
import LogoSquareContrastSvg from "@/public/images/logos/square-contrast.svg?url"
import LogoSquareColorSvg from "@/public/images/logos/square-color.svg?url"
import Image, { ImageProps } from "next/image"


interface SquareLogoProps extends Omit<ImageProps, 'src'> {
    href?: string,
    contrast?: boolean
}


const SquareLogo = ({ href, contrast, ...props }: SquareLogoProps) => {
    return (
        <Anchor enabled={Boolean(href)} href={href ? href : ""}>
            <Image src={contrast ? LogoSquareContrastSvg : LogoSquareColorSvg} {...props} />
        </Anchor>
    )
}

const NameLogo = ({ href, contrast, ...props }: SquareLogoProps) => {
    return (
            <Anchor enabled={Boolean(href)} href={href ? href : ""}>
                <Image src={contrast ? LogoNameContrastSvg : LogoNameColorSvg} {...props} />
            </Anchor>
    )
}


export { SquareLogo, NameLogo }
import Link, {LinkProps} from "next/link"
import { UrlObject } from "url"

interface AnchorProps extends LinkProps {
    href: string | UrlObject,
    enabled?: boolean,
    children: React.ReactNode
}

const Anchor = ({href, enabled, children, ...props}: AnchorProps)=> {
    if (!enabled)
        return <>{children}</>
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}

export { Anchor };
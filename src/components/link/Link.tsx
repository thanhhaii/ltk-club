import React, { ReactNode } from "react"
import Link, {LinkProps} from 'next/link';

export type CustomLinkProps = LinkProps & {
	children: ReactNode
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...props }) => {
	return (
		<Link {...props}>
			<a>{children}</a>
		</Link>
	)
}

export default CustomLink;

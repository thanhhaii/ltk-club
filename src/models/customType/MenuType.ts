import { MenuProps } from "antd"

export type AntdMenuPropsType = MenuProps['items'] & {
	pathName: string
}

import React from "react"
import { BookOutlined, DropboxOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Menu, MenuProps } from "antd"
import pathNameHelper from "../../../helpers/pageHelpers/pathNameHelper"
import Link from "next/link"

const menuProps: MenuProps["items"] = [
	{
		key: pathNameHelper.manage.members,
		label: (
			<Link href={pathNameHelper.manage.members}>
				Danh sách thành viên
			</Link>
		),
		icon: <UserOutlined />,
	},
	{
		key: pathNameHelper.manage.papers,
		label: (
			<Link href={pathNameHelper.manage.papers}>
				Giấy tờ
			</Link>
		),
		icon: <BookOutlined />,
	},
	{
		key: pathNameHelper.manage.storage,
		label: (
			<Link href={pathNameHelper.manage.storage}>
				Thông tin lưu trữ
			</Link>
		),
		icon: <DropboxOutlined />,
	},
]

export type SideBarLayoutProps = {
	pathname: string
}

const SideBarLayout: React.FC<SideBarLayoutProps> = ({ pathname }) => {
	return (
		<Layout.Sider width={250} className="site-layout-background">
			<Menu
				mode="inline"
				defaultSelectedKeys={[pathname]}
				style={{ height: "100%", borderRight: 0 }}
				items={menuProps}
			/>
		</Layout.Sider>
	)
}

export default SideBarLayout

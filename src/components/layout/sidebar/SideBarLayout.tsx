import React from "react"
import { BookOutlined, DropboxOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Menu, MenuProps } from "antd"

const menuProps: MenuProps["items"] = [
	{
		key: "ListMember",
		label: "Danh sách thành viên",
		icon: <UserOutlined />,
	},
	{
		key: "kindOfPapers",
		label: "Giấy tờ",
		icon: <BookOutlined />,
	},
	{
		key: "storage",
		label: "Thông tin lưu trữ",
		icon: <DropboxOutlined />
	},
]

const SideBarLayout: React.FunctionComponent = () => {
	return (
		<Layout>
			<Layout.Sider width={250} className="site-layout-background">
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					style={{ height: "100%", borderRight: 0 }}
					items={menuProps}
				/>
			</Layout.Sider>
		</Layout>
	)
}

export default SideBarLayout

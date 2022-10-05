import React from "react"
import { Col, Form, Input, Row } from "antd"
import Paper from "@components/paper/Paper"

export type SearchMemberProps = {
	onSearchMember?: () => void
}

const SearchMember: React.FC<SearchMemberProps> = () => {
	return (
		<Paper className="mb-5">
			<Form layout="vertical">
				<Row gutter={12}>
					<Col span={6}>
						<Form.Item
							label="Họ và tên"
						>
							<Input placeholder="Tìm kiếm theo họ và tên" />
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Paper>
	)
}

export default SearchMember

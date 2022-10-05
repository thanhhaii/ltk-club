import React from "react"
import { Layout, Table } from "antd"
import Paper from "@components/paper/Paper"
import { columnsName } from "../../../helpers/tables/memberPageHelper"
import SearchMember from "@containers/manage/members/SearchMember"

export type MemberContainerProps = {}

const MemberContainer: React.FC<MemberContainerProps> = () => {
	return (
		<>
			<Paper className="mb-5">
				<h1 className="mb-0 text-xl">Manage Member Page</h1>
			</Paper>
			<SearchMember />
			<Paper className="mb-5">
				<Table
					columns={columnsName}
				/>
			</Paper>
		</>
	)
}

export default MemberContainer

import { Member } from '@models/entities/Member';
import { ColumnsType } from 'antd/es/table';

export const columnsName: ColumnsType<Member> = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
  },
  {
    key: 'fullName',
    dataIndex: 'fullName',
    title: 'Họ và tên',
  },
  {
    key: 'email',
    dataIndex: 'email',
    title: 'Email',
  },
  {
    key: 'phoneNumber',
    dataIndex: 'phoneNumber',
    title: 'Số điện thoại',
  },
  {
    key: 'class',
    dataIndex: ['profile', 'class'],
    title: 'Lớp học',
  },
  {
    key: 'sex',
    dataIndex: ['profile', 'sex'],
    title: 'Giới tính',
  },
];


import React from 'react';
import { Layout } from "antd"
import HeaderLayout from "@components/layout/header/Header"
import SideBarLayout from '../sidebar/SideBarLayout';

export type Props = {

}

const DashboardLayout: React.FC<Props> = () => {
  return (
    <Layout className="h-screen">
      <HeaderLayout />
      <SideBarLayout />
    </Layout>
  )
}

export default DashboardLayout;

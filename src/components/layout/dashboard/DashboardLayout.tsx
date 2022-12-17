import React, { PropsWithChildren, ReactNode } from 'react';
import { Layout } from 'antd';
import HeaderLayout from '@components/layout/header/Header';
import SideBarLayout from '../sidebar/SideBarLayout';
import { useRouter } from 'next/router';

export type Props = PropsWithChildren<ReactNode> & {}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <Layout className="h-screen">
      <HeaderLayout />
      <Layout>
        <SideBarLayout pathname={router.pathname} />
        <Layout className="px-5 py-5">
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

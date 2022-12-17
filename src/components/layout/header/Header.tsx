import { Layout } from 'antd';
import Image from 'next/image';
import IconClub from 'public/images/logocaulacbo.png';

const HeaderLayout: React.FunctionComponent = () => {
  return (
    <Layout.Header className="header flex items-center justify-between">
      <Image src={IconClub} alt="LogoCLB" className="brightness-0 invert" width={50} height={50} />
      <h3 className="text-white text-xl mb-0">CLB Kỹ Năng Lý Thường Kiệt</h3>
      <Image src={IconClub} alt="LogoCLB" className="brightness-0 invert" width={50} height={50} />
    </Layout.Header>
  );
};

export default HeaderLayout;

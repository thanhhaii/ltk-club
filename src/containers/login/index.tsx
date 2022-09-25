import React from 'react';
import { Input, Form, Row, Col } from "antd"
import Image from 'next/image'
import FormInput from "../../components/formComponents/input"
import IconClub from "public/images/logocaulacbo.png";

export type LoginPageProps = {

};

const LoginPageContainer: React.FC<LoginPageProps> = () => {
  const [form] = Form.useForm();

  return (
    <main className="container mx-auto h-screen flex items-center justify-center">
      <div className="shadow-lg bg-white rounded-lg p-5">
        <Form form={form} layout="vertical">
          <Row gutter={[24,0]}>
            <Col span={24} className="text-center">
              <div className="relative">
                <Image src={IconClub} alt="logoCLB" width={100} height={100}/>
              </div>
            </Col>
            <Col span={24}>
              <Form.Item label="Email" required>
                <FormInput size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Password" required>
                <Input.Password size="large" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default LoginPageContainer;

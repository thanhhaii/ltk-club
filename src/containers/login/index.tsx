// Vendor
import React from 'react';
import { Input, Form, Row, Col, Button } from 'antd';
import Image from 'next/image';
import { LoginOutlined } from '@ant-design/icons';
import { GoogleLogin } from '@react-oauth/google';

// Src
import IconClub from 'public/images/logocaulacbo.png';
import { LoginFormProps } from '@models/form/login';
import { useAppDispatch } from '@infrastructure/storage/storageHooks';
import { authAction } from '@infrastructure/reducer/authReducer/authReducer';


export type LoginPageProps = {};

const LoginPageContainer: React.FC<LoginPageProps> = () => {
  // Hooks
  const [form] = Form.useForm<LoginFormProps>();
  const dispatch = useAppDispatch();

  return (
	  <main className="container mx-auto h-screen flex items-center justify-center">
      <div className="shadow-lg bg-white rounded-3xl p-10 w-5/6 sm:w-2/3 md:3/5 lg:w-2/5 xl:w-1/3">
		  <Form form={form} layout="vertical">
          <Row gutter={[24, 0]}>
			  <Col span={24} className="text-center">
              <div className="relative mb-3">
				  <Image src={IconClub} alt="logoCLB" width={70} height={70} />
              </div>
              <h1 className="text-2xl uppercase">Đăng nhập</h1>
			  </Col>
			  <Col span={24}>
              <Form.Item
                name="username"
                label="Tên tài khoản"
                rules={[
					  { required: true, message: 'Tên tài khoản không được để trống' },
                ]}
                required>
				  <Input
					  size="large"
					  placeholder="Số điện thoại / Email"
				  />
              </Form.Item>
			  </Col>
			  <Col span={24}>
              <Form.Item
                name="password"
                label="Mật khẩu"
                required
                rules={[
					  { required: true, message: 'Mật khẩu không được để trống' },
                ]}
              >
				  <Input.Password size="large" autoComplete="false" placeholder="Mật khẩu" />
              </Form.Item>
			  </Col>
			  <Col span={24} className="pt-2">
              <Button
                type="primary"
                icon={<LoginOutlined />}
                htmlType="submit"
                size="large">
				  Đăng nhập
              </Button>
			  </Col>
			  <Col span={24}>
              <div className="mt-4">
				  <p>Bạn chưa có tài khoản?&nbsp;
                  <span className="font-medium text-blue-500 cursor-pointer">Liên hệ Admin!</span>
				  </p>
              </div>
			  </Col>
			  <Col span={24}>
              <GoogleLogin
                onSuccess={(value) => {
					  dispatch(authAction.googleLogin(value));
                }}
                // onError={handleSignInGoogleFailed}
                size="large"
              />
			  </Col>
          </Row>
		  </Form>
      </div>
	  </main>
  );
};

export default LoginPageContainer;

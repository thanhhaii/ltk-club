import React from 'react';
import classnames from 'classnames';
import { Input, InputProps } from 'antd';

export type FormInputProps = InputProps & {};

const FormInput: React.FC<FormInputProps> = ({
											   ...props
											 }) => {
  return <Input  {...props} className={classnames('!rounded-md', props.className)} />;
};

export default FormInput;

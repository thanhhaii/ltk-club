import React, { PropsWithChildren, ReactNode } from 'react';
import classnames from 'classnames';

export type Paper = PropsWithChildren<ReactNode> & {
  className?: string
}

const Paper: React.FC<Paper> = ({ children, className }) => {
  return (
    <div className={classnames('bg-white rounded-lg p-4', className)}>
      {children}
    </div>
  );
};

export default Paper;

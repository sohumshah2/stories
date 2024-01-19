import React, { ReactNode } from 'react';
import './title-bar.css';

interface TitleBarProps {
  title?: ReactNode;
  aside?: ReactNode;
}
const TitleBar: React.FC<TitleBarProps> = ({ title, aside }) => (
  <div className="mb-4">
    <div className="titleBar__wrap">
      { title && <h4 className="mb-2">{ title }</h4> }
      { aside && <h6>{ aside }</h6>}
    </div>
    <hr />
  </div>
);

export default TitleBar;
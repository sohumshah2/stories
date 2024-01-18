import './main-layout.css';
import React, {ReactNode} from 'react'

interface MainLayoutProps {
  children: ReactNode;
}

interface MainLayoutComponent extends React.FC<MainLayoutProps> {
  Column: React.FC<{ children: ReactNode }>;
}

const MainLayout: MainLayoutComponent = ({ children }) => (
  <main className="mainLayout">
    {children}
  </main>
);

MainLayout.Column = ({ children }) => (
  <div className="mainLayout__col">
    {children}
  </div>
);

export default MainLayout;
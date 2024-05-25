// components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        Footer Content
      </footer>
    </div>
  );
};

export default Layout;


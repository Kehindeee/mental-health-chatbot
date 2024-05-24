// components/Layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Mental Health Support</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        Footer Content
      </footer>
    </div>
  );
};

export default Layout;

import React from 'react';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
}

/**
 * A full-screen layout component that centers its content.
 * Ideal for authentication pages like login or sign-up.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      {children}
    </main>
  );
};

export default MainAppLayout;

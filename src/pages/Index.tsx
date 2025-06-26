import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Auth/LoginCard';

/**
 * The main login page for the application.
 * This page utilizes the MainAppLayout to provide a consistent,
 * centered layout for the authentication card.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;

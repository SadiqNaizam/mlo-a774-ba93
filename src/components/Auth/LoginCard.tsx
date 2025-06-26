import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';

const LoginCard: React.FC = () => {
  return (
    <Card className="w-full max-w-[400px] shadow-md bg-card">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold text-center text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginCard;

import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";
import QuizPage from "@/components/QuizPage";

type Page = 'login' | 'dashboard' | 'quiz';
type UserType = 'student' | 'teacher' | null;

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userType, setUserType] = useState<UserType>(null);

  const handleLogin = (type: 'student' | 'teacher') => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage('login');
  };

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  switch (currentPage) {
    case 'login':
      return <LoginPage onLogin={handleLogin} />;
    case 'dashboard':
      return (
        <Dashboard 
          userType={userType!} 
          onStartQuiz={handleStartQuiz}
          onLogout={handleLogout}
        />
      );
    case 'quiz':
      return <QuizPage onBack={handleBackToDashboard} />;
    default:
      return <LoginPage onLogin={handleLogin} />;
  }
};

export default Index;

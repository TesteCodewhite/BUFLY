import { useState } from "react";
import LandingPage from "./LandingPage";
import LoginPage from "../components/LoginPage";
import MainDashboard from "../components/MainDashboard";
import QuizPage from "../components/QuizPage";

type Page = 'landing' | 'login' | 'dashboard' | 'quiz';
type UserType = 'student' | 'teacher' | null;

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userType, setUserType] = useState<UserType>(null);

  const handleGetStarted = (type: 'student' | 'teacher') => {
    setUserType(type);
    setCurrentPage('login');
  };

  const handleLogin = (type: 'student' | 'teacher') => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage('landing');
  };

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  switch (currentPage) {
    case 'landing':
      return <LandingPage onGetStarted={handleGetStarted} />;
    case 'login':
      return <LoginPage onLogin={handleLogin} />;
    case 'dashboard':
      return (
        <MainDashboard 
          userType={userType!} 
          onLogout={handleLogout}
        />
      );
    case 'quiz':
      return <QuizPage onBack={handleBackToDashboard} />;
    default:
      return <LandingPage onGetStarted={handleGetStarted} />;
  }
};

export default Index;

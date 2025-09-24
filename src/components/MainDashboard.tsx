import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  User, 
  Settings,
  Bell,
  LogOut,
  Plus,
  BarChart3,
  Trophy,
  Star,
  Clock,
  Heart
} from "lucide-react";

// Import the specific function pages
import TurmasPage from "./dashboard/TurmasPage";
import ProgressoPage from "./dashboard/ProgressoPage";
import AtividadesPage from "./dashboard/AtividadesPage";
import PerfilPage from "./dashboard/PerfilPage";
import ConfiguracoesPage from "./dashboard/ConfiguracoesPage";

interface MainDashboardProps {
  userType: 'student' | 'teacher';
  onLogout: () => void;
}

type DashboardPage = 'main' | 'turmas' | 'progresso' | 'atividades' | 'perfil' | 'configuracoes';

export default function MainDashboard({ userType, onLogout }: MainDashboardProps) {
  const [currentPage, setCurrentPage] = useState<DashboardPage>('main');

  const isStudent = userType === 'student';
  const isTeacher = userType === 'teacher';

  // Function cards configuration
  const functionCards = [
    {
      id: 'turmas',
      title: 'Turmas',
      description: isStudent 
        ? 'Veja suas turmas e participe das atividades' 
        : 'Gerencie suas turmas e acompanhe estudantes',
      icon: <Users className={`w-8 h-8 ${isStudent ? 'text-primary' : 'text-secondary'}`} />,
      color: isStudent ? 'bg-primary/10 border-primary/20' : 'bg-secondary/10 border-secondary/20',
      stats: isStudent ? '3 turmas ativas' : '5 turmas • 127 alunos'
    },
    {
      id: 'progresso',
      title: 'Progresso',
      description: isStudent 
        ? 'Acompanhe sua evolução e conquistas' 
        : 'Dashboards e relatórios detalhados',
      icon: <TrendingUp className={`w-8 h-8 ${isStudent ? 'text-accent' : 'text-primary'}`} />,
      color: isStudent ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20',
      stats: isStudent ? '87% de evolução' : 'Média: 84% aproveitamento'
    },
    {
      id: 'atividades',
      title: 'Atividades',
      description: isStudent 
        ? 'Participe de quizzes e exercícios divertidos' 
        : 'Crie e edite atividades com templates',
      icon: <BookOpen className={`w-8 h-8 ${isStudent ? 'text-secondary' : 'text-accent'}`} />,
      color: isStudent ? 'bg-secondary/10 border-secondary/20' : 'bg-accent/10 border-accent/20',
      stats: isStudent ? '12 novas atividades' : '24 atividades criadas'
    },
    {
      id: 'perfil',
      title: 'Perfil',
      description: isStudent 
        ? 'Personalize seu avatar e veja suas conquistas' 
        : 'Suas informações profissionais',
      icon: <User className={`w-8 h-8 ${isStudent ? 'text-emerald-500' : 'text-slate-600'}`} />,
      color: isStudent ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200',
      stats: isStudent ? '15 badges conquistadas' : 'Professor desde 2020'
    },
    {
      id: 'configuracoes',
      title: 'Configurações',
      description: isStudent 
        ? 'Ajuste acessibilidade e preferências' 
        : 'Relatórios, exportação e configurações',
      icon: <Settings className={`w-8 h-8 ${isStudent ? 'text-purple-500' : 'text-indigo-600'}`} />,
      color: isStudent ? 'bg-purple-50 border-purple-200' : 'bg-indigo-50 border-indigo-200',
      stats: isStudent ? 'Modo dislexia ativo' : 'Backup automático ativo'
    }
  ];

  // Quick stats for main dashboard
  const quickStats = isStudent ? [
    { label: 'Pontos Totais', value: '2,847', icon: <Star className="w-5 h-5 text-yellow-500" /> },
    { label: 'Sequência Atual', value: '12 dias', icon: <Trophy className="w-5 h-5 text-orange-500" /> },
    { label: 'Tempo Estudado', value: '47h', icon: <Clock className="w-5 h-5 text-blue-500" /> },
    { label: 'Nível', value: 'Avançado', icon: <Heart className="w-5 h-5 text-pink-500" /> }
  ] : [
    { label: 'Total de Alunos', value: '127', icon: <Users className="w-5 h-5 text-blue-600" /> },
    { label: 'Atividades Criadas', value: '24', icon: <BookOpen className="w-5 h-5 text-green-600" /> },
    { label: 'Taxa de Sucesso', value: '94%', icon: <BarChart3 className="w-5 h-5 text-purple-600" /> },
    { label: 'Feedback Positivo', value: '98%', icon: <Heart className="w-5 h-5 text-red-500" /> }
  ];

  // Render specific page
  const renderPage = () => {
    switch (currentPage) {
      case 'turmas':
        return <TurmasPage userType={userType} onBack={() => setCurrentPage('main')} />;
      case 'progresso':
        return <ProgressoPage userType={userType} onBack={() => setCurrentPage('main')} />;
      case 'atividades':
        return <AtividadesPage userType={userType} onBack={() => setCurrentPage('main')} />;
      case 'perfil':
        return <PerfilPage userType={userType} onBack={() => setCurrentPage('main')} />;
      case 'configuracoes':
        return <ConfiguracoesPage userType={userType} onBack={() => setCurrentPage('main')} />;
      default:
        return null;
    }
  };

  // If we're not on the main page, render the specific page
  if (currentPage !== 'main') {
    return renderPage();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-primary/5 to-accent/5' : 'bg-gradient-to-r from-secondary/5 to-primary/5'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-serif font-bold text-foreground">Bufly</h1>
              <Badge variant={isStudent ? "default" : "secondary"} className="px-3 py-1">
                {isStudent ? 'Estudante' : 'Professor'}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
              
              <Avatar className="w-8 h-8">
                <AvatarFallback className={`${isStudent ? 'bg-primary' : 'bg-secondary'} text-white font-semibold`}>
                  {isStudent ? 'A' : 'P'}
                </AvatarFallback>
              </Avatar>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={onLogout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            {isStudent ? 'Olá, Estudante!' : 'Bem-vindo, Professor!'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isStudent 
              ? 'Pronto para continuar sua jornada de aprendizado?' 
              : 'Vamos criar experiências incríveis de aprendizado hoje?'
            }
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  {stat.icon}
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Function Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functionCards.map((card) => (
            <Card 
              key={card.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${card.color} hover:scale-105`}
              onClick={() => setCurrentPage(card.id as DashboardPage)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm">
                      {card.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif text-foreground">
                        {card.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {card.stats}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {card.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group"
                >
                  Acessar
                  <Plus className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
            {isStudent ? 'Atividade Recente' : 'Atividades das Turmas'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-sans text-foreground">
                  {isStudent ? 'Próximas Atividades' : 'Turmas Mais Ativas'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className={`w-3 h-3 rounded-full ${isStudent ? 'bg-primary' : 'bg-secondary'}`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {isStudent ? `Quiz de Matemática ${item}` : `Turma ${item}A - Português`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isStudent ? 'Disponível em 2 horas' : '12 alunos ativos hoje'}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-sans text-foreground">
                  {isStudent ? 'Conquistas Recentes' : 'Feedback dos Alunos'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isStudent ? 'bg-accent' : 'bg-primary'}`}>
                      {isStudent ? '🏆' : '⭐'}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {isStudent ? `Badge: Expert em ${item === 1 ? 'Matemática' : item === 2 ? 'Português' : 'Ciências'}` : `Avaliação: ${5} estrelas`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isStudent ? 'Conquistada hoje' : `Atividade de ${item === 1 ? 'História' : item === 2 ? 'Geografia' : 'Biologia'}`}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
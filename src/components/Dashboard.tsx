import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bell, 
  User, 
  Edit3, 
  Users, 
  Trophy,
  TrendingUp,
  Clock,
  BookOpen,
  Target
} from "lucide-react";

interface DashboardProps {
  userType: 'student' | 'teacher';
  onStartQuiz: () => void;
  onLogout: () => void;
}

export default function Dashboard({ userType, onStartQuiz, onLogout }: DashboardProps) {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  // Mock data
  const classes = [
    { id: '1', name: 'Turma A', subject: 'Matemática', students: 25, progress: 75 },
    { id: '2', name: 'Turma B', subject: 'Português', students: 22, progress: 60 },
    { id: '3', name: 'Turma C', subject: 'Ciências', students: 28, progress: 85 },
    { id: '4', name: 'Turma D', subject: 'História', students: 20, progress: 45 },
  ];

  const students = [
    { id: '1', name: 'Ana Clara', score: 57, position: 1, avatar: '👩' },
    { id: '2', name: 'João Pedro', score: 52, position: 2, avatar: '👨' },
    { id: '3', name: 'Maria Silva', score: 48, position: 3, avatar: '👩' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Elegant Header */}
      <header className="bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-serif font-bold text-charcoal">Bufly</h1>
              <nav className="hidden md:flex space-x-6">
                <button className="font-sans text-charcoal hover:text-sapphire elegant-underline">
                  Turmas
                </button>
                <button className="font-sans text-charcoal/60 hover:text-sapphire elegant-underline">
                  Relatórios
                </button>
                <button className="font-sans text-charcoal/60 hover:text-sapphire elegant-underline">
                  Criar
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-charcoal/60" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-ruby text-white text-xs flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5 text-charcoal/60" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="font-sans border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-background"
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-2">
            Visão Geral das Turmas
          </h2>
          <p className="text-lg font-sans text-charcoal/70">
            Gerencie suas turmas e acompanhe o progresso dos alunos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Classes */}
          <div className="lg:col-span-1 space-y-6">
            {classes.map((classItem) => (
              <Card
                key={classItem.id}
                className="bg-slate border border-sapphire/20 hover:border-sapphire/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedClass(classItem.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-serif text-lg text-background mb-1">
                        {classItem.name} - {classItem.subject}
                      </CardTitle>
                      <div className="flex items-center text-background/70 text-sm font-sans">
                        <Users className="w-4 h-4 mr-1" />
                        {classItem.students} alunos
                      </div>
                    </div>
                    {userType === 'teacher' && (
                      <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-sans text-background/70">
                      <span>Progresso</span>
                      <span>{classItem.progress}%</span>
                    </div>
                    <div className="w-full bg-charcoal/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full progress-crystal rounded-full transition-all duration-500"
                        style={{ width: `${classItem.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Middle Column - Main Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-background border border-charcoal/20 border-dashed">
              <CardHeader>
                <CardTitle className="font-sans text-lg text-charcoal flex items-center space-x-3">
                  <div className="w-10 h-10 bg-sapphire rounded flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-background" />
                  </div>
                  <span>Ações Principais</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-serif font-semibold text-xl text-charcoal mb-6">
                    {selectedClass ? `Turma ${selectedClass}` : 'Matemática Básica'}
                  </h3>
                  <div className="space-y-4">
                    <Button 
                      size="lg"
                      onClick={onStartQuiz}
                      className="w-full h-14 bg-sapphire text-background hover:bg-sapphire/90 font-sans font-medium shadow-lg hover:shadow-xl transition-all"
                    >
                      <Clock className="w-5 h-5 mr-3" />
                      Gerenciar Tarefas
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={onStartQuiz}
                      className="w-full h-14 border-2 border-emerald text-emerald hover:bg-emerald hover:text-background font-sans font-medium transition-all"
                    >
                      <Target className="w-5 h-5 mr-3" />
                      Gerenciar Turma
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Statistics */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Chart */}
            <Card className="bg-background border border-charcoal/20 border-dashed">
              <CardHeader>
                <CardTitle className="font-sans text-lg text-charcoal flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-emerald" />
                  <span>Acertos Gerais</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 mx-auto relative">
                  {/* Elegant circular progress */}
                  <div className="w-full h-full rounded-full border-4 border-charcoal/20 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-emerald border-r-transparent border-b-transparent transform rotate-45 progress-crystal"></div>
                    <div className="absolute inset-4 rounded-full bg-background border border-charcoal/10 flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-charcoal">57%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Rankings */}
            <Card className="bg-background border border-charcoal/20 border-dashed">
              <CardHeader>
                <CardTitle className="font-sans text-lg text-charcoal flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber" />
                  <span>Ranking</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {students.map((student, index) => (
                  <div
                    key={student.id}
                    className="flex items-center space-x-4 p-3 rounded border border-charcoal/10"
                  >
                    <Badge 
                      variant={index === 0 ? 'default' : 'secondary'}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold ${
                        index === 0 ? 'bg-amber text-charcoal' : 'bg-charcoal/10 text-charcoal'
                      }`}
                    >
                      #{student.position}
                    </Badge>
                    <div className="w-8 h-8 bg-charcoal/10 rounded-full flex items-center justify-center text-sm">
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <span className="font-sans font-medium text-charcoal">
                        {student.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-sans font-semibold text-emerald">
                        {student.score}pts
                      </div>
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
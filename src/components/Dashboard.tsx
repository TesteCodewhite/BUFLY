import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bell, 
  User, 
  Settings, 
  Plus, 
  Edit3, 
  Users, 
  Trophy,
  TrendingUp,
  Clock
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
    { id: '1', name: 'Aluno 1', score: 57, position: 1, avatar: '👤' },
    { id: '2', name: 'Aluno 2', score: 52, position: 2, avatar: '👤' },
    { id: '3', name: 'Aluno 3', score: 48, position: 3, avatar: '👤' },
  ];

  return (
    <div className="min-h-screen bg-soft-gradient">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-dyslexic font-bold text-primary">Bufly</h1>
              <p className="text-muted-foreground font-dyslexic hidden sm:block">
                Seja bem-vindo!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="font-dyslexic"
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Classes/Activities */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-dyslexic text-lg">
                    {userType === 'teacher' ? 'Suas Turmas' : 'Suas Atividades'}
                  </CardTitle>
                  {userType === 'teacher' && (
                    <Button size="sm" variant="success">
                      <Plus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {classes.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="p-4 rounded-xl bg-secondary-light hover:bg-secondary transition-colors cursor-pointer border-2 border-transparent hover:border-secondary"
                    onClick={() => setSelectedClass(classItem.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-dyslexic font-bold">
                          {classItem.name.split(' ')[1]}
                        </div>
                        <div>
                          <h3 className="font-dyslexic font-semibold text-foreground">
                            {classItem.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-dyslexic">
                            {classItem.subject}
                          </p>
                        </div>
                      </div>
                      {userType === 'teacher' && (
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-dyslexic">
                        <span>Progresso</span>
                        <span>{classItem.progress}%</span>
                      </div>
                      <Progress value={classItem.progress} className="h-2" />
                    </div>
                    {userType === 'teacher' && (
                      <div className="flex items-center mt-3 text-sm text-muted-foreground font-dyslexic">
                        <Users className="w-4 h-4 mr-1" />
                        {classItem.students} alunos
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Main Content */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-dyslexic text-lg flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    📚
                  </div>
                  <span>Turma</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <h3 className="font-dyslexic font-semibold text-xl mb-4">
                    {selectedClass ? `Turma ${selectedClass}` : 'Matemática Básica'}
                  </h3>
                  <div className="flex justify-center space-x-4 mb-6">
                    <Button 
                      variant="accent" 
                      size="lg"
                      onClick={onStartQuiz}
                      className="font-dyslexic"
                    >
                      <Clock className="w-5 h-5 mr-2" />
                      Gerenciar Tarefas
                    </Button>
                    <Button 
                      variant="success" 
                      size="lg"
                      onClick={onStartQuiz}
                      className="font-dyslexic"
                    >
                      Gerenciar Turma
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Statistics/Leaderboard */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Statistics */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-dyslexic text-lg flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>Acertos por questão: 57%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-32 h-32 mx-auto relative">
                  {/* This would be a proper chart in a real app */}
                  <div className="w-full h-full rounded-full border-8 border-muted relative">
                    <div className="absolute inset-0 rounded-full border-8 border-success border-r-transparent border-b-transparent transform rotate-45"></div>
                    <div className="absolute inset-4 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-lg font-dyslexic font-bold text-foreground">57%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Rankings */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="font-dyslexic text-lg flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-warning" />
                  <span>Ranking</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {students.map((student, index) => (
                  <div
                    key={student.id}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-secondary-light"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <Badge 
                        variant={index === 0 ? 'default' : 'secondary'}
                        className="w-8 h-8 rounded-full flex items-center justify-center font-dyslexic font-bold"
                      >
                        #{student.position}
                      </Badge>
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        👤
                      </div>
                      <span className="font-dyslexic font-semibold text-foreground">
                        {student.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-dyslexic font-semibold text-foreground">
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
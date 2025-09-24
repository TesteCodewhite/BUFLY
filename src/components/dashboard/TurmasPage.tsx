import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Plus,
  MoreHorizontal,
  Calendar,
  Clock,
  Trophy,
  Star
} from "lucide-react";

interface TurmasPageProps {
  userType: 'student' | 'teacher';
  onBack: () => void;
}

export default function TurmasPage({ userType, onBack }: TurmasPageProps) {
  const isStudent = userType === 'student';

  // Mock data for classes
  const studentClasses = [
    {
      id: '1',
      name: 'Matemática Básica',
      teacher: 'Prof. Ana Silva',
      color: 'bg-blue-500',
      students: 28,
      progress: 78,
      nextActivity: 'Quiz sobre Frações',
      dueDate: '2 horas'
    },
    {
      id: '2',
      name: 'Português',
      teacher: 'Prof. Carlos Lima',
      color: 'bg-green-500',
      students: 25,
      progress: 65,
      nextActivity: 'Redação sobre Meio Ambiente',
      dueDate: '1 dia'
    },
    {
      id: '3',
      name: 'Ciências',
      teacher: 'Prof. Maria Santos',
      color: 'bg-purple-500',
      students: 30,
      progress: 90,
      nextActivity: 'Experimento sobre Densidade',
      dueDate: '3 dias'
    }
  ];

  const teacherClasses = [
    {
      id: '1',
      name: 'Turma 7A - Matemática',
      subject: 'Matemática',
      students: 28,
      progress: 78,
      activeStudents: 24,
      completedActivities: 12,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      name: 'Turma 7B - Matemática',
      subject: 'Matemática',
      students: 25,
      progress: 65,
      activeStudents: 22,
      completedActivities: 10,
      color: 'bg-blue-600'
    },
    {
      id: '3',
      name: 'Turma 8A - Matemática',
      subject: 'Matemática',
      students: 30,
      progress: 85,
      activeStudents: 28,
      completedActivities: 15,
      color: 'bg-blue-700'
    },
    {
      id: '4',
      name: 'Turma 8B - Matemática',
      subject: 'Matemática',
      students: 26,
      progress: 72,
      activeStudents: 23,
      completedActivities: 11,
      color: 'bg-blue-800'
    },
    {
      id: '5',
      name: 'Turma 9A - Matemática',
      subject: 'Matemática',
      students: 24,
      progress: 88,
      activeStudents: 22,
      completedActivities: 14,
      color: 'bg-blue-900'
    }
  ];

  const classes = isStudent ? studentClasses : teacherClasses;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-primary/5 to-accent/5' : 'bg-gradient-to-r from-secondary/5 to-primary/5'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Turmas</h1>
                <p className="text-sm text-muted-foreground">
                  {isStudent ? 'Suas turmas e atividades' : 'Gerencie suas turmas'}
                </p>
              </div>
            </div>
            
            {!isStudent && (
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Nova Turma
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {isStudent ? (
          // Student View
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <Card key={classItem.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 ${classItem.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-serif text-foreground mb-1">
                          {classItem.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{classItem.teacher}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {classItem.students} alunos
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-semibold text-foreground">{classItem.progress}%</span>
                      </div>
                      <Progress value={classItem.progress} className="h-2" />
                    </div>
                    
                    {/* Next Activity */}
                    <div className="bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Próxima Atividade</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{classItem.nextActivity}</p>
                      <div className="flex items-center space-x-1 text-xs text-destructive">
                        <Clock className="w-3 h-3" />
                        <span>Entrega em {classItem.dueDate}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Acessar Turma
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Teacher View
          <div className="space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total de Alunos</p>
                      <p className="text-2xl font-bold text-foreground">133</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Atividades Ativas</p>
                      <p className="text-2xl font-bold text-foreground">18</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                      <p className="text-2xl font-bold text-foreground">87%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Feedback Médio</p>
                      <p className="text-2xl font-bold text-foreground">4.8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <Card key={classItem.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className={`h-2 ${classItem.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-serif text-foreground mb-1">
                          {classItem.name}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {classItem.subject}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{classItem.students}</p>
                        <p className="text-xs text-muted-foreground">Total Alunos</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{classItem.activeStudents}</p>
                        <p className="text-xs text-muted-foreground">Ativos Hoje</p>
                      </div>
                    </div>
                    
                    {/* Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progresso Médio</span>
                        <span className="font-semibold text-foreground">{classItem.progress}%</span>
                      </div>
                      <Progress value={classItem.progress} className="h-2" />
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Gerenciar
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Relatórios
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
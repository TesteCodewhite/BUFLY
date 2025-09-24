import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  TrendingUp, 
  Trophy,
  Star,
  Calendar,
  BarChart3,
  PieChart,
  Target,
  Award,
  Clock,
  BookOpen,
  Users
} from "lucide-react";

interface ProgressoPageProps {
  userType: 'student' | 'teacher';
  onBack: () => void;
}

export default function ProgressoPage({ userType, onBack }: ProgressoPageProps) {
  const isStudent = userType === 'student';

  // Student progress data
  const studentStats = {
    totalPoints: 2847,
    level: 'Avançado',
    streak: 12,
    accuracy: 87,
    completedActivities: 45,
    badges: 15,
    timeStudied: '47h 23m',
    rank: 3
  };

  const studentSubjects = [
    { name: 'Matemática', progress: 89, color: 'bg-blue-500', points: 1250 },
    { name: 'Português', progress: 76, color: 'bg-green-500', points: 890 },
    { name: 'Ciências', progress: 92, color: 'bg-purple-500', points: 1340 },
    { name: 'História', progress: 65, color: 'bg-orange-500', points: 567 }
  ];

  const achievements = [
    { title: 'Matemático Expert', description: '100 problemas resolvidos', icon: '🔢', earned: true },
    { title: 'Leitor Voraz', description: '10 textos completos', icon: '📚', earned: true },
    { title: 'Cientista Curioso', description: '5 experimentos realizados', icon: '🔬', earned: true },
    { title: 'Sequência de Ouro', description: '30 dias consecutivos', icon: '🏆', earned: false },
    { title: 'Perfeccionista', description: '95% de acerto em uma matéria', icon: '⭐', earned: false },
    { title: 'Colaborador', description: 'Ajudar 5 colegas', icon: '🤝', earned: false }
  ];

  // Teacher analytics data
  const teacherStats = {
    totalStudents: 133,
    averageScore: 84,
    completionRate: 92,
    activitiesCreated: 24,
    feedback: 4.8,
    engagement: 87
  };

  const classPerformance = [
    { class: 'Turma 7A', average: 87, completion: 94, students: 28 },
    { class: 'Turma 7B', average: 82, completion: 89, students: 25 },
    { class: 'Turma 8A', average: 90, completion: 96, students: 30 },
    { class: 'Turma 8B', average: 78, completion: 85, students: 26 },
    { class: 'Turma 9A', average: 85, completion: 91, students: 24 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-accent/5 to-primary/5' : 'bg-gradient-to-r from-primary/5 to-secondary/5'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Progresso</h1>
                <p className="text-sm text-muted-foreground">
                  {isStudent ? 'Acompanhe sua evolução' : 'Dashboards e relatórios'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {isStudent ? (
          // Student Progress View
          <div className="space-y-8">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{studentStats.totalPoints}</p>
                  <p className="text-sm text-muted-foreground">Pontos Totais</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{studentStats.streak}</p>
                  <p className="text-sm text-muted-foreground">Dias Seguidos</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{studentStats.accuracy}%</p>
                  <p className="text-sm text-muted-foreground">Precisão</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{studentStats.badges}</p>
                  <p className="text-sm text-muted-foreground">Badges</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="subjects" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="subjects">Matérias</TabsTrigger>
                <TabsTrigger value="achievements">Conquistas</TabsTrigger>
                <TabsTrigger value="ranking">Ranking</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studentSubjects.map((subject, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-serif text-foreground">
                            {subject.name}
                          </CardTitle>
                          <Badge variant="outline">{subject.points} pts</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-semibold text-foreground">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-3" />
                        </div>
                        <div className={`h-2 ${subject.color} rounded-full`}></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className={`border-0 shadow-lg ${achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-muted/30'}`}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{achievement.icon}</div>
                        <h3 className={`font-semibold mb-2 ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <Badge className="mt-3 bg-green-500 text-white">Conquistado!</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ranking" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">Ranking da Turma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Ana Silva', points: 3240, position: 1, avatar: '👩' },
                        { name: 'Pedro Santos', points: 3100, position: 2, avatar: '👨' },
                        { name: 'Você', points: 2847, position: 3, avatar: '🙂', isUser: true },
                        { name: 'Maria Costa', points: 2650, position: 4, avatar: '👩' },
                        { name: 'João Lima', points: 2400, position: 5, avatar: '👨' }
                      ].map((student, index) => (
                        <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${student.isUser ? 'bg-primary/10 border border-primary/30' : 'bg-muted/30'}`}>
                          <Badge variant={student.position <= 3 ? "default" : "secondary"} className="w-8 h-8 rounded-full flex items-center justify-center">
                            #{student.position}
                          </Badge>
                          <div className="text-2xl">{student.avatar}</div>
                          <div className="flex-1">
                            <p className={`font-semibold ${student.isUser ? 'text-primary' : 'text-foreground'}`}>
                              {student.name}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-foreground">{student.points}</p>
                            <p className="text-sm text-muted-foreground">pontos</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          // Teacher Analytics View
          <div className="space-y-8">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.totalStudents}</p>
                  <p className="text-sm text-muted-foreground">Total Alunos</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.averageScore}%</p>
                  <p className="text-sm text-muted-foreground">Nota Média</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.completionRate}%</p>
                  <p className="text-sm text-muted-foreground">Taxa Conclusão</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.activitiesCreated}</p>
                  <p className="text-sm text-muted-foreground">Atividades</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.feedback}</p>
                  <p className="text-sm text-muted-foreground">Avaliação</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                  <p className="text-2xl font-bold text-foreground">{teacherStats.engagement}%</p>
                  <p className="text-sm text-muted-foreground">Engajamento</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="classes" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="classes">Desempenho das Turmas</TabsTrigger>
                <TabsTrigger value="analytics">Análises Detalhadas</TabsTrigger>
                <TabsTrigger value="reports">Relatórios</TabsTrigger>
              </TabsList>

              <TabsContent value="classes" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">Performance por Turma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {classPerformance.map((classData, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground">{classData.class}</h3>
                            <Badge variant="outline">{classData.students} alunos</Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Nota Média</span>
                                <span className="font-semibold text-foreground">{classData.average}%</span>
                              </div>
                              <Progress value={classData.average} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted-foreground">Taxa de Conclusão</span>
                                <span className="font-semibold text-foreground">{classData.completion}%</span>
                              </div>
                              <Progress value={classData.completion} className="h-2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif text-foreground">Engajamento por Período</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                        <p className="text-muted-foreground">Gráfico de Engajamento</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-serif text-foreground">Distribuição de Notas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
                        <p className="text-muted-foreground">Gráfico de Distribuição</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <PieChart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="font-semibold text-foreground mb-2">Relatório Semanal</h3>
                      <p className="text-sm text-muted-foreground mb-4">Resumo da semana passada</p>
                      <Button variant="outline" className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-600" />
                      <h3 className="font-semibold text-foreground mb-2">Relatório Mensal</h3>
                      <p className="text-sm text-muted-foreground mb-4">Análise completa do mês</p>
                      <Button variant="outline" className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                      <h3 className="font-semibold text-foreground mb-2">Relatório Personalizado</h3>
                      <p className="text-sm text-muted-foreground mb-4">Escolha período e métricas</p>
                      <Button variant="outline" className="w-full">Configurar</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
}
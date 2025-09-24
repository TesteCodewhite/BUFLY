import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  BookOpen, 
  Plus,
  Play,
  Clock,
  Users,
  Star,
  Edit,
  Copy,
  Trash2,
  Search,
  Filter
} from "lucide-react";

interface AtividadesPageProps {
  userType: 'student' | 'teacher';
  onBack: () => void;
}

export default function AtividadesPage({ userType, onBack }: AtividadesPageProps) {
  const isStudent = userType === 'student';

  // Student activities
  const studentActivities = [
    {
      id: '1',
      title: 'Quiz: Frações e Decimais',
      subject: 'Matemática',
      dueDate: '2 horas',
      difficulty: 'Fácil',
      points: 50,
      status: 'pending',
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Redação: Meio Ambiente',
      subject: 'Português',
      dueDate: '1 dia',
      difficulty: 'Médio',
      points: 75,
      status: 'pending',
      color: 'bg-green-500'
    },
    {
      id: '3',
      title: 'Experimento: Densidade',
      subject: 'Ciências',
      dueDate: '3 dias',
      difficulty: 'Difícil',
      points: 100,
      status: 'pending',
      color: 'bg-purple-500'
    },
    {
      id: '4',
      title: 'Quiz: Segunda Guerra Mundial',
      subject: 'História',
      dueDate: 'Concluído',
      difficulty: 'Médio',
      points: 75,
      status: 'completed',
      score: 85,
      color: 'bg-orange-500'
    }
  ];

  // Teacher activities
  const teacherActivities = [
    {
      id: '1',
      title: 'Quiz: Equações do 1º Grau',
      subject: 'Matemática',
      classes: ['7A', '7B'],
      responses: 45,
      totalStudents: 53,
      averageScore: 87,
      status: 'active',
      created: '2 dias atrás'
    },
    {
      id: '2',
      title: 'Atividade: Interpretação de Texto',
      subject: 'Português',
      classes: ['8A'],
      responses: 28,
      totalStudents: 30,
      averageScore: 92,
      status: 'active',
      created: '1 semana atrás'
    },
    {
      id: '3',
      title: 'Experimento Virtual: Fotossíntese',
      subject: 'Ciências',
      classes: ['9A'],
      responses: 0,
      totalStudents: 24,
      averageScore: 0,
      status: 'draft',
      created: 'Hoje'
    }
  ];

  const activities = isStudent ? studentActivities : teacherActivities;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-secondary/5 to-accent/5' : 'bg-gradient-to-r from-accent/5 to-primary/5'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Atividades</h1>
                <p className="text-sm text-muted-foreground">
                  {isStudent ? 'Suas atividades e quizzes' : 'Crie e gerencie atividades'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {!isStudent && (
                <>
                  <Button variant="outline" className="gap-2">
                    <Copy className="w-4 h-4" />
                    Templates
                  </Button>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Nova Atividade
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {isStudent ? (
          // Student Activities View
          <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex space-x-2">
              <Button variant="default" size="sm">Todas</Button>
              <Button variant="outline" size="sm">Pendentes</Button>
              <Button variant="outline" size="sm">Concluídas</Button>
              <Button variant="outline" size="sm">Atrasadas</Button>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${activity.status === 'completed' ? 'bg-green-50' : ''}`}>
                  <div className={`h-1 ${activity.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-serif text-foreground mb-2">
                          {activity.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {activity.subject}
                          </Badge>
                          <Badge variant={activity.difficulty === 'Fácil' ? 'default' : activity.difficulty === 'Médio' ? 'secondary' : 'destructive'} className="text-xs">
                            {activity.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-primary">
                          {activity.points} pts
                        </div>
                        {activity.status === 'completed' && (
                          <div className="text-sm text-green-600 font-semibold">
                            {activity.score}%
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>
                          {activity.status === 'completed' ? 'Concluído' : `Entrega em ${activity.dueDate}`}
                        </span>
                      </div>
                      {activity.status === 'completed' && (
                        <div className="flex items-center space-x-1 text-sm text-green-600">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Finalizado</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full" 
                      variant={activity.status === 'completed' ? 'outline' : 'default'}
                      disabled={activity.status === 'completed'}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {activity.status === 'completed' ? 'Ver Resultado' : 'Iniciar Atividade'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          // Teacher Activities View
          <div className="space-y-6">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex space-x-2">
                <Button variant="default" size="sm">Todas</Button>
                <Button variant="outline" size="sm">Ativas</Button>
                <Button variant="outline" size="sm">Rascunhos</Button>
                <Button variant="outline" size="sm">Arquivadas</Button>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Search className="w-4 h-4" />
                  Buscar
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filtros
                </Button>
              </div>
            </div>

            {/* Activities List */}
            <div className="space-y-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-serif font-semibold text-foreground">
                            {activity.title}
                          </h3>
                          <Badge 
                            variant={activity.status === 'active' ? 'default' : activity.status === 'draft' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {activity.status === 'active' ? 'Ativa' : activity.status === 'draft' ? 'Rascunho' : 'Arquivada'}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{activity.subject}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Turmas: {activity.classes.join(', ')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Criado {activity.created}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">{activity.responses}</p>
                            <p className="text-sm text-muted-foreground">Respostas</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">{activity.totalStudents}</p>
                            <p className="text-sm text-muted-foreground">Total Alunos</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">{activity.averageScore || 0}%</p>
                            <p className="text-sm text-muted-foreground">Nota Média</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-6">
                        <Button size="sm" variant="outline" className="gap-2">
                          <Edit className="w-4 h-4" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Copy className="w-4 h-4" />
                          Duplicar
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2 text-destructive hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Templates */}
            <Card className="border-2 border-dashed border-border/50 mt-8">
              <CardHeader>
                <CardTitle className="text-lg font-serif text-foreground text-center">
                  Templates Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <BookOpen className="w-6 h-6" />
                    <span>Quiz Múltipla Escolha</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Edit className="w-6 h-6" />
                    <span>Atividade Dissertativa</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Star className="w-6 h-6" />
                    <span>Atividade Gamificada</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  User, 
  Edit,
  Camera,
  Trophy,
  Star,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Book,
  Heart,
  Target
} from "lucide-react";

interface PerfilPageProps {
  userType: 'student' | 'teacher';
  onBack: () => void;
}

export default function PerfilPage({ userType, onBack }: PerfilPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const isStudent = userType === 'student';

  // Student profile data
  const studentProfile = {
    name: 'Ana Clara Santos',
    email: 'ana.santos@escola.com',
    class: '8º Ano B',
    school: 'Escola Inclusiva São Paulo',
    joinDate: 'Março 2024',
    level: 'Avançado',
    totalPoints: 2847,
    badges: 15,
    streak: 12,
    achievements: [
      { title: 'Matemático Expert', icon: '🔢', description: '100 problemas resolvidos', earned: true },
      { title: 'Leitor Voraz', icon: '📚', description: '10 textos completos', earned: true },
      { title: 'Cientista Curioso', icon: '🔬', description: '5 experimentos realizados', earned: true },
      { title: 'Sequência de Ouro', icon: '🏆', description: '30 dias consecutivos', earned: false },
      { title: 'Perfeccionista', icon: '⭐', description: '95% de acerto', earned: false },
      { title: 'Colaborador', icon: '🤝', description: 'Ajudar 5 colegas', earned: false }
    ]
  };

  // Teacher profile data
  const teacherProfile = {
    name: 'Prof. Carlos Silva',
    email: 'carlos.silva@escola.com',
    subject: 'Matemática',
    school: 'Escola Inclusiva São Paulo',
    experience: '8 anos',
    education: 'Licenciatura em Matemática - USP',
    classes: 5,
    students: 133,
    rating: 4.8,
    specializations: ['Educação Inclusiva', 'Dislexia', 'TDAH', 'Gamificação']
  };

  const profile = isStudent ? studentProfile : teacherProfile;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-emerald-50 to-blue-50' : 'bg-gradient-to-r from-slate-50 to-blue-50'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Perfil</h1>
                <p className="text-sm text-muted-foreground">
                  {isStudent ? 'Suas informações e conquistas' : 'Suas informações profissionais'}
                </p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
              className="gap-2"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? 'Cancelar' : 'Editar'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarFallback className={`text-2xl font-bold ${isStudent ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {isStudent ? 'A' : 'C'}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="icon" className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full">
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <h2 className="text-xl font-serif font-bold text-foreground mb-2">
                  {profile.name}
                </h2>
                
                {isStudent ? (
                  <>
                    <p className="text-muted-foreground mb-4">{studentProfile.class}</p>
                    <div className="space-y-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                        Nível {studentProfile.level}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {studentProfile.totalPoints} pontos • {studentProfile.badges} badges
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground mb-2">{teacherProfile.subject}</p>
                    <p className="text-sm text-muted-foreground mb-4">{teacherProfile.experience} de experiência</p>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{teacherProfile.rating}</span>
                      <span className="text-sm text-muted-foreground">avaliação</span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {isStudent && (
              <Card className="border-0 shadow-lg mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-foreground flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Estatísticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sequência atual</span>
                    <span className="font-semibold">{studentProfile.streak} dias</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total de pontos</span>
                    <span className="font-semibold">{studentProfile.totalPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Badges conquistadas</span>
                    <span className="font-semibold">{studentProfile.badges}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Membro desde</span>
                    <span className="font-semibold">{studentProfile.joinDate}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground">
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    {isEditing ? (
                      <Input id="name" value={profile.name} className="mt-1" />
                    ) : (
                      <p className="text-foreground font-medium mt-1">{profile.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    {isEditing ? (
                      <Input id="email" type="email" value={profile.email} className="mt-1" />
                    ) : (
                      <p className="text-foreground font-medium mt-1">{profile.email}</p>
                    )}
                  </div>
                  
                  {isStudent ? (
                    <>
                      <div>
                        <Label htmlFor="class">Turma</Label>
                        {isEditing ? (
                          <Input id="class" value={studentProfile.class} className="mt-1" />
                        ) : (
                          <p className="text-foreground font-medium mt-1">{studentProfile.class}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="school">Escola</Label>
                        {isEditing ? (
                          <Input id="school" value={studentProfile.school} className="mt-1" />
                        ) : (
                          <p className="text-foreground font-medium mt-1">{studentProfile.school}</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Label htmlFor="subject">Matéria</Label>
                        {isEditing ? (
                          <Input id="subject" value={teacherProfile.subject} className="mt-1" />
                        ) : (
                          <p className="text-foreground font-medium mt-1">{teacherProfile.subject}</p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="education">Formação</Label>
                        {isEditing ? (
                          <Input id="education" value={teacherProfile.education} className="mt-1" />
                        ) : (
                          <p className="text-foreground font-medium mt-1">{teacherProfile.education}</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
                
                {isEditing && (
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>
                      Salvar Alterações
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {isStudent ? (
              // Student Achievements
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    Conquistas e Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studentProfile.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className={`p-4 rounded-lg border-2 transition-all ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' 
                            : 'bg-muted/30 border-muted-foreground/20'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h3 className={`font-semibold ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {achievement.title}
                            </h3>
                            <p className={`text-sm ${achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                              {achievement.description}
                            </p>
                            {achievement.earned && (
                              <Badge className="mt-1 bg-green-500 text-white text-xs">
                                Conquistado!
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Teacher Professional Info
              <>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">
                      Informações Profissionais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-3xl font-bold text-primary">{teacherProfile.classes}</p>
                        <p className="text-sm text-muted-foreground">Turmas Ativas</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-secondary">{teacherProfile.students}</p>
                        <p className="text-sm text-muted-foreground">Total de Alunos</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-accent">{teacherProfile.rating}</p>
                        <p className="text-sm text-muted-foreground">Avaliação Média</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">
                      Especializações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {teacherProfile.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
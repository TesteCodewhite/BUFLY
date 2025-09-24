import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Star,
  ChevronRight,
  Brain,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: (userType: 'student' | 'teacher') => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [selectedUserType, setSelectedUserType] = useState<'student' | 'teacher' | null>(null);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Professora de Matemática",
      avatar: "MS",
      rating: 5,
      comment: "O Bufly transformou completamente como meus alunos com dislexia participam das aulas. Eles agora se sentem incluídos e confiantes!"
    },
    {
      name: "João Pedro",
      role: "Estudante, 14 anos",
      avatar: "JP",
      rating: 5,
      comment: "Finalmente encontrei uma plataforma que entende minhas dificuldades. As cores e fontes me ajudam muito a focar!"
    },
    {
      name: "Ana Carolina",
      role: "Coordenadora Pedagógica",
      avatar: "AC",
      rating: 5,
      comment: "Implementamos o Bufly em nossa escola e vimos 40% de melhoria no engajamento dos alunos neurodivergentes."
    },
    {
      name: "Lucas Santos",
      role: "Estudante, 16 anos",
      avatar: "LS",
      rating: 5,
      comment: "Com TDAH, sempre tive problemas para me concentrar. O Bufly torna o aprendizado divertido e eu consigo prestar atenção!"
    }
  ];

  const steps = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Professores Criam",
      description: "Educadores desenvolvem atividades interativas e inclusivas adaptadas para diferentes estilos de aprendizagem."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Alunos Participam",
      description: "Estudantes engajam com quizzes gamificados, usando recursos de acessibilidade personalizados."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Progresso Visível",
      description: "Acompanhamento detalhado do desenvolvimento, com relatórios claros e insights pedagógicos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-foreground">Bufly</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="font-sans text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#depoimentos" className="font-sans text-muted-foreground hover:text-foreground transition-colors">
                Depoimentos
              </a>
              <Button variant="outline" onClick={() => onGetStarted('teacher')}>
                Entrar
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Aprendizagem Inclusiva e Engajante
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              BUFLY
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-sans font-semibold text-muted-foreground mb-8 leading-relaxed">
              Transformando a educação para estudantes com{" "}
              <span className="text-primary font-bold">dislexia</span> e{" "}
              <span className="text-secondary font-bold">TDAH</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Uma plataforma educacional que adapta o aprendizado às necessidades individuais, 
              promovendo inclusão e sucesso acadêmico através de tecnologia acessível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => onGetStarted('student')}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Sou Estudante
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => onGetStarted('teacher')}
              >
                <Shield className="w-5 h-5 mr-2" />
                Sou Educador
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma abordagem simples e eficaz para revolucionar o aprendizado inclusivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center border border-border/50 mb-4">
                      {step.icon}
                    </div>
                    <CardTitle className="font-serif text-xl text-card-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              O Que Dizem Nossos Usuários
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação e sucesso no aprendizado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
            Transforme o Aprendizado Hoje Mesmo
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Junte-se a milhares de educadores e estudantes que já descobriram 
            uma nova forma de ensinar e aprender
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => onGetStarted('student')}
            >
              Cadastrar-se como Estudante
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => onGetStarted('teacher')}
            >
              Cadastrar-se como Professor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">Bufly</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 Bufly. Transformando a educação inclusiva.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
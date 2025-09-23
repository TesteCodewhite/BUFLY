import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, GraduationCap, Eye, EyeOff } from "lucide-react";
import pencilIcon from "@/assets/pencil-icon.png";
import bookIcon from "@/assets/book-icon.png";

interface LoginPageProps {
  onLogin: (userType: 'student' | 'teacher') => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // In a real app, this would validate credentials
    onLogin(userType);
  };

  return (
    <div className="min-h-screen bg-primary-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 opacity-20 animate-gentle-bounce">
        <img src={pencilIcon} alt="" className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20 animate-gentle-bounce" style={{ animationDelay: '1s' }}>
        <img src={bookIcon} alt="" className="w-32 h-32" />
      </div>
      
      {/* Floating shapes for visual appeal */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="text-4xl font-dyslexic font-bold text-primary mb-2">
            Bufly
          </CardTitle>
          <div className="space-y-2">
            <h2 className="text-xl font-dyslexic font-semibold text-foreground">
              Bem-vindo
            </h2>
            <p className="text-muted-foreground font-dyslexic">
              Faça login para acessar a página
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant={userType === 'student' ? 'user' : 'inactive'}
              size="lg"
              onClick={() => setUserType('student')}
              className="h-16 flex-col gap-2"
            >
              <User className="w-6 h-6" />
              <span className="font-dyslexic font-semibold">Aluno</span>
            </Button>
            <Button
              variant={userType === 'teacher' ? 'teacher' : 'inactive'}
              size="lg"
              onClick={() => setUserType('teacher')}
              className="h-16 flex-col gap-2"
            >
              <GraduationCap className="w-6 h-6" />
              <span className="font-dyslexic font-semibold">Professor</span>
            </Button>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-dyslexic font-medium text-foreground">
              Email
            </label>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-base font-dyslexic border-2 focus:border-primary rounded-xl"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-dyslexic font-medium text-foreground">
              Senha
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 text-base font-dyslexic border-2 focus:border-primary rounded-xl pr-12"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 hover:bg-muted/50"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            variant={userType === 'teacher' ? 'teacher' : 'user'}
            size="lg"
            className="w-full h-14 text-lg font-dyslexic font-semibold"
          >
            Entrar
          </Button>

          {/* Accessibility Notice */}
          <div className="text-center text-sm text-foreground font-dyslexic leading-relaxed flex items-center justify-center gap-2 bg-secondary-light p-3 rounded-lg">
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs">♿</div>
            <span className="font-semibold">Plataforma inclusiva para estudantes com dislexia e TDAH</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
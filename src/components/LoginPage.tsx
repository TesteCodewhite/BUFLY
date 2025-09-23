import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, GraduationCap, Eye, EyeOff, Feather } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Stained Glass Header Effect */}
      <div className="w-full h-32 stained-glass-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Geometric shapes for stained glass effect */}
          <div className="absolute top-4 left-1/4 w-16 h-16 bg-emerald/20 transform rotate-45 animate-gentle-float"></div>
          <div className="absolute top-8 right-1/3 w-12 h-12 bg-amber/20 transform rotate-12 animate-gentle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-4 left-1/3 w-20 h-8 bg-sapphire/20 transform -rotate-12 animate-gentle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-8 right-1/4 w-14 h-14 bg-ruby/20 transform rotate-45 animate-gentle-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <h1 className="text-5xl font-serif font-bold text-charcoal">
                Bufly
              </h1>
              <Feather className="w-8 h-8 text-sapphire transform rotate-12" />
            </div>
            <p className="text-lg font-sans text-charcoal/80">
              Bem-vindo à sua biblioteca de<br />conhecimento.
            </p>
          </div>

          {/* Login Card */}
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="pb-6">
              {/* User Type Selection */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={userType === 'student' ? 'default' : 'ghost'}
                  size="lg"
                  onClick={() => setUserType('student')}
                  className={`h-16 flex-col gap-2 border ${
                    userType === 'student' 
                      ? 'bg-sapphire text-background hover:bg-sapphire/90' 
                      : 'bg-transparent border-sapphire text-sapphire hover:bg-sapphire/5'
                  }`}
                >
                  <User className="w-6 h-6" />
                  <span className="font-sans font-medium">Aluno</span>
                </Button>
                <Button
                  variant={userType === 'teacher' ? 'default' : 'ghost'}
                  size="lg"
                  onClick={() => setUserType('teacher')}
                  className={`h-16 flex-col gap-2 border ${
                    userType === 'teacher' 
                      ? 'bg-sapphire text-background hover:bg-sapphire/90' 
                      : 'bg-transparent border-sapphire text-sapphire hover:bg-sapphire/5'
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                  <span className="font-sans font-medium">Professor</span>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base font-sans border-0 border-b-2 border-charcoal/30 bg-transparent rounded-none focus:border-sapphire focus:ring-0 px-0"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-base font-sans border-0 border-b-2 border-charcoal/30 bg-transparent rounded-none focus:border-sapphire focus:ring-0 px-0 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent text-charcoal/60 hover:text-sapphire"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                onClick={handleLogin}
                className="w-full h-12 text-base font-sans font-medium bg-sapphire text-background hover:bg-sapphire/90 rounded transition-all duration-300"
              >
                Entrar
              </Button>

              {/* Accessibility Notice */}
              <div className="text-center text-sm text-charcoal/70 font-sans leading-relaxed mt-8 p-4 border border-emerald/20 rounded bg-emerald/5">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-emerald rounded-full flex items-center justify-center text-white text-xs">♿</div>
                  <span className="font-medium text-charcoal">Plataforma Inclusiva</span>
                </div>
                <p>Para estudantes com dislexia e TDAH</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
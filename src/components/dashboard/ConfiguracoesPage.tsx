import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Settings,
  Eye,
  Volume2,
  Palette,
  FileText,
  Download,
  Upload,
  Bell,
  Shield,
  HelpCircle,
  Moon,
  Sun,
  Type,
  Contrast,
  ZoomIn
} from "lucide-react";

interface ConfiguracoesPageProps {
  userType: 'student' | 'teacher';
  onBack: () => void;
}

export default function ConfiguracoesPage({ userType, onBack }: ConfiguracoesPageProps) {
  const [dyslexiaMode, setDyslexiaMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState([16]);
  const [contrast, setContrast] = useState([100]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const isStudent = userType === 'student';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`border-b ${isStudent ? 'bg-gradient-to-r from-purple-50 to-indigo-50' : 'bg-gradient-to-r from-indigo-50 to-slate-50'} border-border/50`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Configurações</h1>
                <p className="text-sm text-muted-foreground">
                  {isStudent ? 'Personalize sua experiência' : 'Configurações da conta e sistema'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <Tabs defaultValue={isStudent ? "accessibility" : "account"} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="accessibility">
              {isStudent ? 'Acessibilidade' : 'Conta'}
            </TabsTrigger>
            <TabsTrigger value="appearance">Aparência</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value={isStudent ? "privacy" : "reports"}>
              {isStudent ? 'Privacidade' : 'Relatórios'}
            </TabsTrigger>
          </TabsList>

          {/* Accessibility Tab (Students) / Account Tab (Teachers) */}
          <TabsContent value="accessibility" className="space-y-6">
            {isStudent ? (
              <>
                {/* Accessibility Features */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                      <Eye className="w-5 h-5 text-purple-500" />
                      Recursos de Acessibilidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Dyslexia Mode */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="dyslexia-mode" className="text-base font-medium">
                          Modo Dislexia
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Ativa fonte especial e espaçamento otimizado para leitura
                        </p>
                      </div>
                      <Switch
                        id="dyslexia-mode"
                        checked={dyslexiaMode}
                        onCheckedChange={setDyslexiaMode}
                      />
                    </div>

                    {/* Font Size */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Tamanho da Fonte</Label>
                      <div className="space-y-2">
                        <Slider
                          value={fontSize}
                          onValueChange={setFontSize}
                          max={24}
                          min={12}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Pequeno (12px)</span>
                          <span>Atual: {fontSize[0]}px</span>
                          <span>Grande (24px)</span>
                        </div>
                      </div>
                    </div>

                    {/* Contrast */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Contraste</Label>
                      <div className="space-y-2">
                        <Slider
                          value={contrast}
                          onValueChange={setContrast}
                          max={150}
                          min={50}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Baixo (50%)</span>
                          <span>Atual: {contrast[0]}%</span>
                          <span>Alto (150%)</span>
                        </div>
                      </div>
                    </div>

                    {/* Sound Effects */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="sound-effects" className="text-base font-medium">
                          Efeitos Sonoros
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Sons para feedback e interações
                        </p>
                      </div>
                      <Switch
                        id="sound-effects"
                        checked={soundEnabled}
                        onCheckedChange={setSoundEnabled}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Focus Assistance */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">
                      Assistência de Foco (TDAH)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Tempo de Sessão</Label>
                        <Select defaultValue="25">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutos</SelectItem>
                            <SelectItem value="25">25 minutos</SelectItem>
                            <SelectItem value="45">45 minutos</SelectItem>
                            <SelectItem value="60">60 minutos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Intervalo entre Sessões</Label>
                        <Select defaultValue="5">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 minutos</SelectItem>
                            <SelectItem value="10">10 minutos</SelectItem>
                            <SelectItem value="15">15 minutos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="break-reminders" className="text-base font-medium">
                          Lembretes de Pausa
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Notificações para fazer pausas regulares
                        </p>
                      </div>
                      <Switch id="break-reminders" defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              // Teacher Account Settings
              <>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">
                      Informações da Conta
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Nome Completo</Label>
                        <p className="text-foreground font-medium">Prof. Carlos Silva</p>
                      </div>
                      <div>
                        <Label>E-mail</Label>
                        <p className="text-foreground font-medium">carlos.silva@escola.com</p>
                      </div>
                      <div>
                        <Label>Escola</Label>
                        <p className="text-foreground font-medium">Escola Inclusiva São Paulo</p>
                      </div>
                      <div>
                        <Label>Matéria</Label>
                        <p className="text-foreground font-medium">Matemática</p>
                      </div>
                    </div>
                    <Button variant="outline">Editar Informações</Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-foreground">
                      Preferências do Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="auto-save" className="text-base font-medium">
                          Salvamento Automático
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Salva automaticamente as atividades criadas
                        </p>
                      </div>
                      <Switch
                        id="auto-save"
                        checked={autoSave}
                        onCheckedChange={setAutoSave}
                      />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-500" />
                  Aparência
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Tema</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant={!darkMode ? "default" : "outline"}
                      className="flex flex-col h-20 gap-2"
                      onClick={() => setDarkMode(false)}
                    >
                      <Sun className="w-5 h-5" />
                      <span>Claro</span>
                    </Button>
                    <Button
                      variant={darkMode ? "default" : "outline"}
                      className="flex flex-col h-20 gap-2"
                      onClick={() => setDarkMode(true)}
                    >
                      <Moon className="w-5 h-5" />
                      <span>Escuro</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex flex-col h-20 gap-2"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Auto</span>
                    </Button>
                  </div>
                </div>

                {/* Color Scheme */}
                {isStudent && (
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Esquema de Cores</Label>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { name: 'Azul', color: 'bg-blue-500' },
                        { name: 'Verde', color: 'bg-green-500' },
                        { name: 'Roxo', color: 'bg-purple-500' },
                        { name: 'Rosa', color: 'bg-pink-500' }
                      ].map((scheme, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="flex flex-col h-16 gap-2"
                        >
                          <div className={`w-6 h-6 rounded-full ${scheme.color}`}></div>
                          <span className="text-xs">{scheme.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Notificações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="notifications" className="text-base font-medium">
                      Ativar Notificações
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações sobre atividades e atualizações
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                {notifications && (
                  <div className="space-y-4 pl-4 border-l-2 border-border">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-activities">Novas Atividades</Label>
                      <Switch id="new-activities" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="deadlines">Prazos de Entrega</Label>
                      <Switch id="deadlines" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="achievements">
                        {isStudent ? 'Conquistas' : 'Feedback dos Alunos'}
                      </Label>
                      <Switch id="achievements" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="reminders">Lembretes de Estudo</Label>
                      <Switch id="reminders" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab (Students) / Reports Tab (Teachers) */}
          <TabsContent value={isStudent ? "privacy" : "reports"} className="space-y-6">
            {isStudent ? (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Privacidade e Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="profile-visibility" className="text-base font-medium">
                        Perfil Público
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir que outros vejam seu progresso
                      </p>
                    </div>
                    <Switch id="profile-visibility" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="share-achievements" className="text-base font-medium">
                        Compartilhar Conquistas
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar badges no ranking da turma
                      </p>
                    </div>
                    <Switch id="share-achievements" defaultChecked />
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2">Dados e Privacidade</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Download className="w-4 h-4" />
                        Baixar Meus Dados
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Política de Privacidade
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    Relatórios e Exportação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex flex-col gap-2">
                      <Download className="w-5 h-5" />
                      <span>Exportar Notas</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex flex-col gap-2">
                      <FileText className="w-5 h-5" />
                      <span>Relatório de Progresso</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex flex-col gap-2">
                      <Upload className="w-5 h-5" />
                      <span>Importar Dados</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex flex-col gap-2">
                      <Settings className="w-5 h-5" />
                      <span>Configurar Backup</span>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2">Backup Automático</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Seus dados são automaticamente salvos na nuvem a cada 24 horas
                    </p>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Último backup: hoje às 03:00
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
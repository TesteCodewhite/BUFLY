import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizPageProps {
  onBack: () => void;
}

export default function QuizPage({ onBack }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showFeedback, setShowFeedback] = useState(false);

  // Mock quiz data
  const questions: Question[] = [
    {
      id: 1,
      text: "Qual é o resultado da operação 15 + 8?",
      options: ["21", "23", "25", "27"],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Quantos minutos há em uma hora?",
      options: ["50 minutos", "60 minutos", "70 minutos", "80 minutos"],
      correctAnswer: 1
    },
    {
      id: 3,
      text: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
      correctAnswer: 2
    }
  ];

  // Initialize answers array
  useEffect(() => {
    setAnswers(new Array(questions.length).fill(null));
  }, [questions.length]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setTimeLeft(30);
        } else {
          // Quiz finished - show results or go back
          alert('Quiz finalizado!');
          onBack();
        }
      }, 1500);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-soft-gradient">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onBack}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-dyslexic font-bold text-primary">
                Questão {currentQuestion + 1}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-dyslexic font-medium">{timeLeft}s</span>
              </div>
              <Badge variant="outline" className="font-dyslexic">
                {currentQuestion + 1}/{questions.length}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-dyslexic text-muted-foreground mb-2">
            <span>Progresso</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Question Card */}
        <Card className="shadow-xl border-0 mb-8">
          <CardHeader className="bg-primary-gradient text-white rounded-t-xl">
            <CardTitle className="font-dyslexic text-xl text-center">
              Questão {currentQuestion + 1}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="bg-secondary-light rounded-xl p-6 mb-8">
              <p className="font-dyslexic text-lg leading-relaxed text-foreground">
                {question.text}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectOption = index === question.correctAnswer;
                
                let variant: 'outline' | 'success' | 'destructive' | 'secondary' = 'outline';
                
                if (showFeedback) {
                  if (isCorrectOption) {
                    variant = 'success';
                  } else if (isSelected && !isCorrectOption) {
                    variant = 'destructive';
                  } else {
                    variant = 'secondary';
                  }
                } else if (isSelected) {
                  variant = 'secondary';
                }

                return (
                  <Button
                    key={index}
                    variant={variant}
                    size="xl"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className="w-full justify-start h-16 text-left font-dyslexic text-base relative"
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="flex-1">{option}</span>
                      {showFeedback && isCorrectOption && (
                        <span className="text-success">✓</span>
                      )}
                      {showFeedback && isSelected && !isCorrectOption && (
                        <span className="text-destructive">✗</span>
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Feedback Message */}
            {showFeedback && (
              <div className={`mt-6 p-4 rounded-xl text-center font-dyslexic font-semibold ${
                isCorrect 
                  ? 'bg-success/10 text-success border-2 border-success/20' 
                  : 'bg-destructive/10 text-destructive border-2 border-destructive/20'
              }`}>
                {isCorrect ? 'Parabéns! Resposta correta!' : 'Ops! Tente novamente na próxima.'}
              </div>
            )}

            {/* Next Button */}
            {selectedAnswer !== null && !showFeedback && (
              <div className="mt-8 text-center">
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="font-dyslexic font-semibold px-12"
                >
                  {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Accessibility Helper */}
        <div className="fixed bottom-4 right-4">
          <Button
            variant="accent"
            size="icon"
            className="w-12 h-12 rounded-full shadow-lg"
            title="Assistente de Acessibilidade"
          >
            <User className="w-6 h-6" />
          </Button>
        </div>
      </main>
    </div>
  );
}
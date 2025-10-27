import { ChatInterface } from "@/components/ChatInterface";
import { Hand, Sparkles, Heart, Star, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute top-32 left-1/4 w-6 h-6 text-accent animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-1/4 right-1/4 w-5 h-5 text-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-1/3 left-1/3 w-4 h-4 text-primary animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <Zap className="absolute top-2/3 right-1/3 w-5 h-5 text-accent animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-hero shadow-glow mb-4 animate-in zoom-in duration-700 relative">
            <Hand className="w-12 h-12 text-primary-foreground animate-pulse" />
            <div className="absolute inset-0 rounded-full gradient-rainbow animate-gradient opacity-50 blur-xl"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold gradient-rainbow bg-clip-text text-transparent animate-gradient animate-in fade-in slide-in-from-top-4 duration-700">
            SignSpeak
          </h1>
          <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent max-w-2xl mx-auto animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            Transform your words into visual sign language instantly ✨
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-in fade-in slide-in-from-top-6 duration-700 delay-200">
            Breaking down communication barriers with AI-powered translation
          </p>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="px-4 pb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 relative z-10">
        <ChatInterface />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm border-t relative z-10" style={{ 
        borderImage: 'linear-gradient(90deg, hsl(270 91% 65%), hsl(330 85% 65%), hsl(180 100% 55%)) 1'
      }}>
        <p className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
          SignSpeak • Making communication accessible for everyone 💜
        </p>
      </footer>
    </div>
  );
};

export default Index;

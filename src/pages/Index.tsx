import { ChatInterface } from "@/components/ChatInterface";
import { Hand } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero shadow-glow mb-4 animate-in zoom-in duration-700">
            <Hand className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-top-4 duration-700">
            SignSpeak
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            Transform your words into visual sign language instantly. Breaking down communication barriers with AI-powered translation.
          </p>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="px-4 pb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <ChatInterface />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>SignSpeak • Making communication accessible for everyone</p>
      </footer>
    </div>
  );
};

export default Index;

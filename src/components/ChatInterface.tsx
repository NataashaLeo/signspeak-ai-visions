import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  imageUrl?: string;
  isUser: boolean;
  timestamp: Date;
}

const MAX_CHARS = 100;

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim() || isLoading) return;
    
    if (inputText.length > MAX_CHARS) {
      toast.error(`Message too long! Maximum ${MAX_CHARS} characters allowed.`);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("generate-sign-language", {
        body: { text: inputText },
      });

      if (error) {
        console.error("Error calling function:", error);
        toast.error("Failed to generate sign language. Please try again.");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Sign language for: "${inputText}"`,
        imageUrl: data.imageUrl,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      toast.success("Sign language generated!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const charsRemaining = MAX_CHARS - inputText.length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Messages Area */}
      <Card className="min-h-[500px] p-6 shadow-card gradient-card">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p className="text-center">
              Type a message below to see it translated into sign language!
              <br />
              <span className="text-sm">(Keep it short - max {MAX_CHARS} characters)</span>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground shadow-primary"
                      : "bg-card border-2 border-accent shadow-card"
                  }`}
                >
                  <p className="text-sm mb-2">{message.text}</p>
                  {message.imageUrl && (
                    <img
                      src={message.imageUrl}
                      alt="Sign language representation"
                      className="rounded-lg mt-3 w-full"
                    />
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="bg-card border-2 border-accent rounded-2xl p-4 shadow-card">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Generating sign language...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      {/* Input Area */}
      <Card className="p-4 shadow-card">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a short message... (max 100 characters)"
              className="resize-none pr-16 min-h-[80px] text-base"
              maxLength={MAX_CHARS}
              disabled={isLoading}
            />
            <div
              className={`absolute bottom-3 right-3 text-xs font-medium transition-smooth ${
                charsRemaining < 20 ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              {charsRemaining}
            </div>
          </div>
          <Button
            type="submit"
            disabled={!inputText.trim() || isLoading || inputText.length > MAX_CHARS}
            className="w-full gradient-hero shadow-primary hover:shadow-glow transition-smooth"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Convert to Sign Language
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

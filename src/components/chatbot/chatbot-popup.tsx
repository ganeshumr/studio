'use client';

import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@/components/ui/prompt-input';
import {ArrowUp, Bot, Square, X, User} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import {cn} from '@/lib/utils';
import {jaagaAiAssistant} from '@/ai/flows/jaaga-ai-assistant';
import { ScrollArea } from '../ui/scroll-area';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hello! I am JaaGa’s AI Assistant. How can I help you with your property questions today?',
    },
  ]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {role: 'user', text: input};
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await jaagaAiAssistant(input);
      const botMessage: Message = {role: 'bot', text: response};
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage: Message = {
        role: 'bot',
        text: 'Sorry, I am having trouble connecting. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleValueChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="fixed -bottom-[80%] right-4 z-50">
      <TooltipProvider>
        <div
          className={cn(
            'flex flex-col items-end gap-2',
            isOpen && 'pointer-events-none'
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className={cn(
                  'rounded-full w-14 h-14 bg-primary shadow-lg transition-all duration-300',
                  isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )}
                onClick={() => setIsOpen(true)}
              >
                <Bot className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>JaaGa Bot</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Card
          className={cn(
            'w-[380px] h-[600px] md:w-[400px] md:h-[600px] flex flex-col transition-all duration-300 shadow-xl',
            isOpen
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 font-headline text-lg">
              <Bot className="h-6 w-6 text-primary" />
              JaaGa Bot
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
             <ScrollArea className="h-full w-full" ref={scrollAreaRef}>
                 <div className="space-y-4 pr-4">
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={cn(
                        'flex items-start gap-3',
                        message.role === 'user' && 'justify-end'
                        )}
                    >
                        {message.role === 'bot' && (
                        <div className="bg-primary text-primary-foreground p-2 rounded-full flex-shrink-0">
                            <Bot className="h-5 w-5" />
                        </div>
                        )}
                        <div
                        className={cn(
                            'p-3 rounded-lg max-w-[80%]',
                            message.role === 'bot'
                            ? 'bg-muted'
                            : 'bg-primary text-primary-foreground'
                        )}
                        >
                        <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                        </div>
                        {message.role === 'user' && (
                        <div className="bg-muted text-muted-foreground p-2 rounded-full flex-shrink-0">
                            <User className="h-5 w-5" />
                        </div>
                        )}
                    </div>
                    ))}
                    {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground p-2 rounded-full">
                        <Bot className="h-5 w-5" />
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        </div>
                        </div>
                    </div>
                    )}
                 </div>
            </ScrollArea>
          </CardContent>
          <div className="p-4 border-t">
            <PromptInput
              value={input}
              onValueChange={handleValueChange}
              isLoading={isLoading}
              onSubmit={handleSubmit}
              className="w-full"
            >
              <PromptInputTextarea placeholder="Ask me anything..." />
              <PromptInputActions className="justify-end pt-2">
                <PromptInputAction
                  tooltip={isLoading ? 'Stop generation' : 'Send message'}
                >
                  <Button
                    variant="default"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={handleSubmit}
                    disabled={!input || isLoading}
                  >
                    {isLoading ? (
                      <Square className="size-5 fill-current" />
                    ) : (
                      <ArrowUp className="size-5" />
                    )}
                  </Button>
                </PromptInputAction>
              </PromptInputActions>
            </PromptInput>
          </div>
        </Card>
      </TooltipProvider>
    </div>
  );
}

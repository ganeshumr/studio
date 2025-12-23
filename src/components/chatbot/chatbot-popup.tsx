
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@/components/ui/prompt-input';
import { ArrowUp, Bot, Square, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';

export function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!input) return;
    setIsLoading(true);
    // Simulate a response
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleValueChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <TooltipProvider>
        <div className={cn("flex flex-col items-end gap-2", isOpen && "pointer-events-none")}>
           <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        className={cn("rounded-full w-14 h-14 bg-primary shadow-lg transition-transform duration-300 ease-in-out", 
                                   isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                        )}
                        onClick={() => setIsOpen(true)}
                    >
                        <Bot className="h-7 w-7" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>JaaGa Bot</p>
                </TooltipContent>
            </Tooltip>
        </div>

        <Card
          className={cn(
            'w-[350px] h-[500px] flex flex-col transition-all duration-300 ease-in-out shadow-xl',
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
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            {/* Chat messages would go here */}
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! How can I help you today?</p>
              </div>
            </div>
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

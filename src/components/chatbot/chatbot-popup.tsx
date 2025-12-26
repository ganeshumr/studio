
'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@/components/ui/prompt-input'
import { ArrowUp, Bot, Square, X, User } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { jaagaAiAssistant } from '@/ai/flows/jaaga-ai-assistant'
import { ScrollArea } from '@/components/ui/scroll-area'

type Message = {
  role: 'user' | 'bot'
  text: string
}

export function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hello! I am JaaGa’s AI Assistant. How can I help you with your property questions today?',
    },
  ])

  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom on new message
  useEffect(() => {
    const viewport = scrollRef.current?.querySelector(
      'div[data-radix-scroll-area-viewport]'
    )
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight
    }
  }, [messages])

  const handleSubmit = async () => {
    if (!input.trim()) return

    setMessages(prev => [...prev, { role: 'user', text: input }])
    setInput('')
    setIsLoading(true)

    try {
      const response = await jaagaAiAssistant(input)
      setMessages(prev => [...prev, { role: 'bot', text: response }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: 'Sorry, something went wrong. Please try again later.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* BOT BUTTON */}
      <div className="fixed bottom-4 right-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full w-14 h-14 bg-primary shadow-lg"
                onClick={() => setIsOpen(true)}
              >
                <Bot className="h-7 w-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>JaaGa Bot</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* CHAT CARD */}
      <div
        className={cn(
          'fixed z-50 transition-all duration-300',
          'bottom-4 right-4 sm:bottom-24 sm:right-4',
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        )}
      >
        <Card className="w-[calc(100vw-2rem)] h-[calc(100vh-5rem)] sm:w-[380px] sm:h-[500px] flex flex-col shadow-xl">
          {/* HEADER (FIXED) */}
          <CardHeader className="shrink-0 flex flex-row items-center justify-between border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-6 w-6 text-primary" />
              JaaGa Bot
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          {/* MESSAGES (ONLY THIS SCROLLS) */}
          <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
            <ScrollArea className="flex-1 px-4" ref={scrollRef}>
              <div className="space-y-4 py-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3',
                      msg.role === 'user' && 'justify-end'
                    )}
                  >
                    {msg.role === 'bot' && (
                      <div className="bg-primary text-primary-foreground p-2 rounded-full shrink-0">
                        <Bot className="h-5 w-5" />
                      </div>
                    )}

                    <div
                      className={cn(
                        'p-3 rounded-lg max-w-[80%] text-sm whitespace-pre-wrap',
                        msg.role === 'bot'
                          ? 'bg-muted'
                          : 'bg-primary text-primary-foreground'
                      )}
                    >
                      {msg.text}
                    </div>

                    {msg.role === 'user' && (
                      <div className="bg-muted p-2 rounded-full shrink-0">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-3">
                    <div className="bg-primary p-2 rounded-full">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-muted px-4 py-3 rounded-lg">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          {/* INPUT (FIXED) */}
          <div className="shrink-0 border-t p-4">
            <PromptInput
              value={input}
              onValueChange={setInput}
              isLoading={isLoading}
              onSubmit={handleSubmit}
            >
              <PromptInputTextarea placeholder="Ask me anything…" />
              <PromptInputActions className="justify-end pt-2">
                <PromptInputAction tooltip="Send">
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={handleSubmit}
                    disabled={!input || isLoading}
                  >
                    {isLoading ? (
                      <Square className="h-4 w-4 fill-current" />
                    ) : (
                      <ArrowUp className="h-4 w-4" />
                    )}
                  </Button>
                </PromptInputAction>
              </PromptInputActions>
            </PromptInput>
          </div>
        </Card>
      </div>
    </>
  )
}

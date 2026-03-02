import { google } from '@ai-sdk/google';
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { buildSystemPrompt } from '@/utils/chat/buildSystemPrompt';

export const maxDuration = 30;

const systemPrompt = buildSystemPrompt();

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash-lite'),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 1024,
    temperature: 0.7,
  });

  return result.toUIMessageStreamResponse();
}

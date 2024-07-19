import { z } from 'zod';

export const problemZodSchema = z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.string().optional(),
    testCases: z.array(z.object({
        input: z.string(),
        output: z.string()
    })),
    codeStubs: z.array(z.object({
        language: z.string(),
        startSnippet: z.string(),
        userSnippet: z.string(),
        endSnippet: z.string().optional()
    })),
    editorial: z.string().optional()
}).strict();

export type ProblemDto = z.infer<typeof problemZodSchema>;
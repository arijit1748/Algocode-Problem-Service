import { z } from 'zod';

export const problemZodSchema = z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.string().optional(),
    testCases: z.array(z.object({
        input: z.string(),
        output: z.string()
    })),
    editorial: z.string().optional()
}).strict();

export type ProblemDto = z.infer<typeof problemZodSchema>;
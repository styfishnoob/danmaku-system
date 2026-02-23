import { z } from "zod";
import { createPlatformObject } from "@/src/utils/types/platforms";

export const SelectorsSchema = z.object({
  video: z.object({
    canvas: createPlatformObject(z.string()),
  }),

  chat: z.object({
    container: createPlatformObject(z.string()),
    cell: createPlatformObject(z.string()),
    contents: createPlatformObject(z.string()),
    userName: createPlatformObject(z.string()),
    messages: createPlatformObject(z.string()),
    emotes: createPlatformObject(z.string()),
  }),
});

export type Selectors = z.infer<typeof SelectorsSchema>;

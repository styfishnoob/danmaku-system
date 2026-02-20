import { z } from "zod";
import { createPlatformObject } from "@/utils/types/platforms";

export const SettingsSchema = z.object({
  enable: createPlatformObject(z.boolean()),
  fontFamily: createPlatformObject(z.string()),
  fontSize: createPlatformObject(z.number()),
  fontOpacity: createPlatformObject(z.number()),
  displayTime: createPlatformObject(z.number()),
  displayLimit: createPlatformObject(z.number()),
  displayRange: createPlatformObject(z.number()),
});

export type Settings = z.infer<typeof SettingsSchema>;

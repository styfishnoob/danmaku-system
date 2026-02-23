import { z } from "zod";

export const PlatformsSchema = z.enum(["youtube", "twitch", "kick", "openrec", "twicas"]);
export type Platforms = z.infer<typeof PlatformsSchema>;

export const createPlatformObject = <T extends z.ZodTypeAny>(itemSchema: T) => {
  const shape = PlatformsSchema.options.reduce(
    (acc, platform) => {
      acc[platform] = itemSchema;
      return acc;
    },
    {} as Record<Platforms, T>,
  );

  return z.object(shape);
};

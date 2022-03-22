import { FastifyTypeProvider } from "fastify";
import z, { ZodTypeAny } from "zod";

export interface zodTypeProvider extends FastifyTypeProvider {
  output: this["input"] extends ZodTypeAny ? z.infer<this["input"]> : never;
}

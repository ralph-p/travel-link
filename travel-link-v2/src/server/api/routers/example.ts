import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { getSoapResponse, numberToWordsXml, getNumberToWordsBody } from "~/server/helper/soap";

export const exampleRouter = createTRPCRouter({
  numToWords: publicProcedure
    .input(z.object({ number: z.number() }))
    .query(async ({ input }) => {
      const url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso";

      const xml = numberToWordsXml(input.number)
      const body = await getSoapResponse(url, xml)
      const response = getNumberToWordsBody(body)
      
      return {
        number: response,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

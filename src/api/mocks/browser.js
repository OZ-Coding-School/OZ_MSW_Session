import { setupWorker } from "msw/browser";
import { handlers as commentHandlers } from "./comments/handlers";
import { handlers as authHandlers } from "./auth/handlers";

export const worker = setupWorker(...commentHandlers, ...authHandlers);

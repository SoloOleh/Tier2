import { Router } from "express";

import { registerController, loginController } from "../controllers/authControllers.js";

import validateBody from "../helpers/validateBody.js";

import { registerSchema, loginSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/register", validateBody(registerSchema), registerController);

authRouter.post("/login", validateBody(loginSchema), loginController);

export default authRouter;
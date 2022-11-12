import { Router } from "express";
import { container } from "tsyringe";
import { AppController } from '../controllers/AppController';

export const router = Router()

const appController = container.resolve(AppController)

router.post('/signup', appController.signup)
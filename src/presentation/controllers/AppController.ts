import { Request, Response } from "express";
import { injectable } from "tsyringe";
import { SignupComand } from "../../application/comands/signupComands";

@injectable()
export class AppController {

    constructor(
        private signupCmd: SignupComand
    ){}
    
    signup =async (req:Request, res:Response) => {
        
        const {username, name, password} = req.body

        try {
            
            const user = await this.signupCmd.execute({name,username,password})

            return res.status(201).json(user)

        } catch (error:any) {
            
            res.status(400).json({message: error.message})
        }
    }
}

import { inject, injectable } from 'tsyringe';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { INJECTTS } from '../../infraestructure/ioc-container';

interface SignupRequestModel{
    name: string
    username: string
    password: string
}

@injectable()
export class SignupComand {
    
    constructor(
        @inject(INJECTTS.USER_REPO)
        private userRepository: UserRepository
    ){}

    async execute(request:SignupRequestModel):Promise<User> {
        
        if(await this.userRepository.exists(request.username)){
            throw new Error("Já existe este username");
            
        }

        const user_ = new User()
        Object.assign(user_, request)

        return this.userRepository.save(user_)
    }
}

import { User } from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';

export class TypeORMUserRepository implements UserRepository{
   
    async exists(username: string): Promise<boolean> {
        const user = await User.findOneBy({username})
        return user ? true : false
    }

    async save(obj: User): Promise<User> {
        return await obj.save()
    }
    
    getById(id: number): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    delete(obj: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
}
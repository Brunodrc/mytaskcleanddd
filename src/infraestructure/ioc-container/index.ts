import { container } from "tsyringe";
import { TypeORMUserRepository } from '../../persistense/typeorm/repositories/TypeORMUserRepository';

export enum INJECTTS{
    USER_REPO = 'USER_REPOSITORY'
}

container.registerSingleton(
    INJECTTS.USER_REPO, TypeORMUserRepository
)
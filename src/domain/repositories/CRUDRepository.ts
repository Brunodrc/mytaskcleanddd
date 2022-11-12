
//Promise<T | null>

export interface CrudRepository<T>{
    save(obj:T): Promise<T>
    getById(id:number): Promise<T | null>
    getAll(): Promise<T[]>
    delete(obj:T): Promise<void>
}
export interface CreateTableUseCaseOptions{
    base:number;
    limit?:number;
}

export interface CreateTableUseCase {
execute:(options:CreateTableUseCaseOptions)=>string
}

export class CreateTable implements CreateTableUseCase{        
    execute({base,limit=10}:CreateTableUseCaseOptions){
        let body = "";
        for (let i = 1; i <=limit; i++) {
            body += `${base} X ${i} = ${(base * i)}\n`;        
        }
        return body;
    }
}
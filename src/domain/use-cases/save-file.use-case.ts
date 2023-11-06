import fs from "fs";


export interface Options {
    outputPath?: string, fileContent: string, titleFile?: string
}
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
    execute({ outputPath = "outputs", fileContent, titleFile = "table" }: Options) {
        try {
            fs.mkdirSync(outputPath, { recursive: true });
            fs.writeFileSync(`${outputPath}/${titleFile}.txt`, fileContent);            
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }
}
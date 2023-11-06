import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface Runoptions {
    base: number;
    limit: number;
    fileName: string;
    destination: string;
    showTable: boolean;
}

export class ServerApp {

    static run({ base, limit, showTable,fileName,destination }: Runoptions) {
        console.log(`Server running ...`);
        const fileContent = new CreateTable()
            .execute({ base, limit });
        if (showTable) {
            console.log(fileContent);
        }
        const wasCreated = new SaveFile()
            .execute({ outputPath:destination,fileContent, titleFile: fileName });
        (wasCreated)
            ? console.log("created")
            : console.log("not created")

    }


}
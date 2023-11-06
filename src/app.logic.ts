import  fs from "fs";
import { yarg } from "./plugins/yargs.plugin";


const {b:base,l:limit,s:showTable}= yarg;

const outputPath = "outputs";
let header ="===============================\n";
header+=`           Tabla de ${base}          \n`;
header+="===============================\n";
let body = "";
for (let i = 1; i <=limit; i++) {
    body += `${base} X ${i} = ${(base * i)}\n`;        
}
body = header + body;
if (showTable){
    console.log(body);
}

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, body);
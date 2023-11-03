import  fs from "fs";


const base =5;
const outputPath = "outputs";
let header ="===============================\n";
header+=`           Tabla de ${base}          \n`;
header+="===============================\n";
let body = "";
for (let i = 1; i <=10; i++) {
    body += `${base} X ${i} = ${(base * i)}\n`;        
}
body = header + body;
console.log(body);
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, body);
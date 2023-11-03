import { yarg as argv } from "./plugins/yargs.plugin"


(async () => {
    console.log("Antes");
    await main();
    console.log("Despues");
})();

async function main() {

}


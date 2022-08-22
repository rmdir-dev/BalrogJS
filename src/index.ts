import {mainModule} from "./app/main-module";
import {Balrog} from "./framework/balrog";
import {IModule} from "./framework/module/module";

export const balrog = new Balrog();
balrog.initBalrog(mainModule as IModule);
console.log("BALROG INIT DONE");

import {WebRoot} from "./web-root";
import {BalrogRouter} from "./routing/balrog-router";
import {IModule} from "./module/module";

export class Balrog
{
    webRoot: WebRoot;
    router: BalrogRouter;

    constructor() {
        this.webRoot = new WebRoot();
        this.router = new BalrogRouter(this.webRoot);
    }

    initBalrog(mainModule: IModule)
    {
        mainModule.init(this.router);
    }
}

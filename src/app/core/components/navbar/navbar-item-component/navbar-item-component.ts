import {component, Component} from "../../../../../framework/components/component";
import {balrog} from "../../../../../index";
import {NavbarItemConfig} from "../menu-provider";

export enum NavbarItemType
{
    BUTTON = 0,
    FORM = 1
}

@component({
    name: 'navbar-item-component',
    template: 'navbar-item-component.html',
    dirname: __dirname,
    extends: 'li'
})
export class NavbarItemComponent extends Component
{
    item?: NavbarItemConfig;

    constructor(value: string, route: string) {
        super('li');
    }

    onInit() {
        console.log("INIT NAVBAR ITEM");
    }
}

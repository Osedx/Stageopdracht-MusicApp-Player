import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

// show the toplist if it has x amount of songs

export interface IAppConfig {
    showToplistCount : number;
}

export const AppConfig : IAppConfig = {
    showToplistCount : 10
};
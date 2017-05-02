import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

// show the toplist if it has x amount of songs
// addFromToplist -> add song from toplist if playlist.count <= x
// maxCheckAdding -> max number of times a random song from toplist is taken and checked if in playlist

export interface IAppConfig {
    showToplistCount: number;
    addFromToplist: number;
    maxCheckAdding: number;
}

export const AppConfig: IAppConfig = {
    showToplistCount: 10,
    addFromToplist: 10,
    maxCheckAdding: 10,
};

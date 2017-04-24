import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class SettingService {
    public showToplistCount: number;
    public addFromToplist: number;
    public maxCheckAdding: number;

    constructor(@Inject(APP_CONFIG) private config: IAppConfig) {
    this.showToplistCount = config.showToplistCount;
    this.addFromToplist = config.addFromToplist;
    this.maxCheckAdding = config.maxCheckAdding;
    }
}

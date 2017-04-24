import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../services/settings.service';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    public showToplist: boolean = false;
constructor(public settingService: SettingService, public dataService: DataService) {}
public ngOnInit() {
    this.getCountToplist();
}
    public getCountToplist() {
        this.dataService.getCountToplist().subscribe(
    (data) => {
            console.log(data);
            console.log(this.settingService.showToplistCount);
            if (data >= this.settingService.showToplistCount) {this.showToplist = true; }
            },
    (error) => {console.log(error); } ); }
}

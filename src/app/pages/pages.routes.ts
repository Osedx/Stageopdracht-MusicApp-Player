import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

import { PlaylistPageComponent }  from './playlistpage/playlistpage.component';
import { ToplistPageComponent }  from './toplistpage/toplistpage.component';

let pagesRoutes: Routes = [
    {path: 'toplist', component: ToplistPageComponent},
    {path: 'playlist', component: PlaylistPageComponent},
    {path : '', pathMatch: 'full', redirectTo : 'playlist'},
    {path: '**', component: NoContentComponent }
];

export const PagesRoutes = RouterModule.forRoot(pagesRoutes);

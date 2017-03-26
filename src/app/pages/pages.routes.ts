import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { NoContentComponent } from './no-content/no-content.component';

import { PlaylistPageComponent }  from './playlistpage/playlistpage.component';

let pagesRoutes: Routes = [
  {path: '', component: PlaylistPageComponent },
  {path: 'playlist', component: PlaylistPageComponent},
//  {path: '/toplist', component: AboutComponent },
  {path: '**', component: NoContentComponent }
];

export const PagesRoutes = RouterModule.forRoot(pagesRoutes);

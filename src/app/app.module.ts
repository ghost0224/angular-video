import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, NgModule, ViewChild} from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ControlsComponent } from './controls/controls.component';
import {LocalStorage} from './common/local.storage';
import { PlayerParentComponent } from './player-parent/player-parent.component';
import {HttpModule, JsonpModule} from '@angular/http';
import { NewComponent } from './new/new.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {path: '', component: PlayerParentComponent},
  {path: 'list', component: VideoListComponent},
  {path: 'new', component: NewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlaylistComponent,
    ControlsComponent,
    PlayerParentComponent,
    NewComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule, HttpModule, JsonpModule, RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule
  ],
  exports: [RouterModule],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}

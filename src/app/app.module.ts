import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, NgModule, ViewChild} from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ControlsComponent } from './controls/controls.component';
import {LocalStorage} from './common/local.storage';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlaylistComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}

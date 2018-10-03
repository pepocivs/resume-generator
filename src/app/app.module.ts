import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { StructureComponent } from './components/structure/structure.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    StructureComponent,
    TimelineComponent,
    InfoBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

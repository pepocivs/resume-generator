import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/** Templates */
import { TimelineTemplate } from './templates/timeline/timeline.template';
import { ArtisticTemplate } from './templates/artistic/artistic.template';
import { DefaultTemplate } from './templates/default/default.template';

/** Components */
import { ArtStructureComponent } from './components/art-template/structure/structure.component';
import { ArtProfileHeaderComponent } from './components/art-template/profile-header/profile-header.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { StructureComponent } from './components/structure/structure.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { SimpleBlockComponent } from './components/simple-block/simple-block.component';
import { ColumnBlockComponent } from './components/column-block/column-block.component';
import { HalfColumnBlockComponent } from './components/half-column-block/half-column-block.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { ProjectsBlockComponent } from './components/projects-block/projects-block.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineTemplate,
    ArtisticTemplate,
    DefaultTemplate,
    ProfileHeaderComponent,
    StructureComponent,
    ArtStructureComponent,
    ArtProfileHeaderComponent,
    TimelineComponent,
    InfoBlockComponent,
    SimpleBlockComponent,
    ColumnBlockComponent,
    HalfColumnBlockComponent,
    TextBlockComponent,
    ProjectsBlockComponent,
    SocialBlockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/** Templates */
import { ArtisticTemplate } from './templates/artistic/artistic.template';
import { DefaultTemplate } from './templates/default/default.template';
import { TimelineTemplate } from './templates/timeline/timeline.template';
import { TwoColumnsTemplate } from './templates/two-columns/twoColumns.template';

/** Components */
import { ColumnBlockComponent } from './components/column-block/column-block.component';
import { DashedTitleComponent } from './components/dashed-title/dashedTitle.component';
import { HalfColumnBlockComponent } from './components/half-column-block/half-column-block.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { ProfileHeaderExpandedComponent } from './components/profile-header-expanded/ProfileHeaderExpanded.component';
import { ProfileHeaderLiteComponent } from './components/profile-header-lite/ProfileHeaderLite.component';
import { ProfileHeaderTwoColumnsComponent } from './components/profile-header-two-columns/profileHeaderTwoColumns.component';
import { ProjectsBlockComponent } from './components/projects-block/projects-block.component';
import { SimpleBlockComponent } from './components/simple-block/simple-block.component';
import { SocialBlockComponent } from './components/social-block/social-block.component';
import { StructureExpandedComponent } from './components/structure-expanded/structureExpanded.component';
import { StructureLiteComponent } from './components/structure-lite/structureLite.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TwoColumnsBarsComponent } from './components/two-columns-bars/twoColumnsBars.component';
import { TwoColumnsBlockComponent } from './components/two-columns-block/twoColumnsBlock.component';

@NgModule({
  declarations: [
    AppComponent,

    ArtisticTemplate,
    DefaultTemplate,
    TimelineTemplate,
    TwoColumnsTemplate,

    ColumnBlockComponent,
    DashedTitleComponent,
    HalfColumnBlockComponent,
    InfoBlockComponent,
    ProfileHeaderExpandedComponent,
    ProfileHeaderLiteComponent,
    ProfileHeaderTwoColumnsComponent,
    ProjectsBlockComponent,
    SimpleBlockComponent,
    SocialBlockComponent,
    StructureExpandedComponent,
    StructureLiteComponent,
    TextBlockComponent,
    TimelineComponent,
    TwoColumnsBarsComponent,
    TwoColumnsBlockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

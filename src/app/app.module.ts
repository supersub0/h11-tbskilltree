import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SkilltreeComponent } from './skilltree.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SkillService } from './skill.service';
import { SafePipe } from './safepipe';

@NgModule({
  declarations: [
      SafePipe,
      AppComponent,
      SkilltreeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [
      SkillService,
      HttpClient
  ],
  bootstrap: [
      AppComponent,
      SkilltreeComponent
  ]
})

export class AppModule { }

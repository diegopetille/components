import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importação do que vai usar lá na injeção do app-root
import { appC } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [appC,  ItemDetailComponent, ResumeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}

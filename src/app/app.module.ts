import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importação do que vai usar lá na injeção do app-root
import { appC } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent  } from './contact/contact.component';

@NgModule({
  declarations: [appC,  ItemDetailComponent, ResumeComponent, ContactComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}

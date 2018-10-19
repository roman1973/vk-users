import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import '../polyfills';
import { MaterialModule } from './material.modules';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directiev';
import { SearchPipe } from './search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    UserComponent,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

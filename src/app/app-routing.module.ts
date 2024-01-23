import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { CredGuard } from './cred.guard';

const routes: Routes = [
  {"path": "", component: LoginComponent},
  {"path": "menu", component: MenuComponent, canActivate: [CredGuard]},
  {"path": "news", component: NewsComponent, canActivate: [CredGuard]},
  {"path": "weather", component: WeatherComponent, canActivate: [CredGuard]},
  {"path": "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

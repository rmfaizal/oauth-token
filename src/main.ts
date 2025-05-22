import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';

//if (environment.production) {
  //enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));

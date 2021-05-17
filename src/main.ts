/**
 * Entry point of the application
 * It helps in creating browser environment for the application to run
 */ 
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/**
 * main.ts file calls bootstrapModule(AppModule) and tells builder to bootstrap the app
 * Appmodule here is app.module.ts
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

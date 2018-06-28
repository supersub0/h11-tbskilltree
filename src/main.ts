import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
declare var device;

// Enable production mode unless running locally.
if (!/localhost/.test(document.location.host)) {
  enableProdMode();

  document.addEventListener(
    'deviceready',
    function() {
      alert(device.platform);
    },
    false
  );
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), { provide: LOCALE_ID, useValue: 'es' }, provideAnimationsAsync(), provideAnimationsAsync(),]
};

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DefaultDataServiceConfig, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { destinationServiceConfig } from './destination/state/destination-data.service.config';
import { entityConfig } from './destination/state/destination.metadata';
import { appState } from './state/app.state';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(),
    provideState(appState),
    provideAnimations(),
    provideEffects(),
    { provide: DefaultDataServiceConfig, useValue: destinationServiceConfig },
    provideEntityData(entityConfig, withEffects()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
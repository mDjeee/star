import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { provideEffects } from '@ngrx/effects';
import { planetsReducer } from './store/planets/planets.reducer';
import { PlanetsEffects } from './store/planets/planets.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([]),
    provideRouter(routes, withViewTransitions(), withComponentInputBinding(), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideAnimations(),
    provideAnimations(),
    provideHttpClient(withJsonpSupport(), withInterceptors([tokenInterceptor])),
    provideStore({
      routerStore: routerReducer,
      planets: planetsReducer,
    }),
    provideEffects([PlanetsEffects]),
    provideRouterStore({ }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
  ]
};

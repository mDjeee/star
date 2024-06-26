import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import {
  provideRouter,
  RouterOutlet,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { provideEffects } from '@ngrx/effects';
import { planetsReducer } from './store/planets/planets.reducer';
import { PlanetsEffects } from './store/planets/planets.effects';
import { FilmsEffects } from './store/films/films.effects';
import { filmsReducer } from './store/films/films.reducer';
import { PeopleEffects } from './store/people/people.effects';
import { peopleReducer } from './store/people/people.reducer';
import { speciesReducer } from './store/species/species.reducer';
import { SpeciesEffects } from './store/species/species.effects';
import { starshipsReducer } from './store/starships/starships.reducer';
import { StarshipsEffects } from './store/starships/starships.effects';
import { vehiclesReducer } from './store/vehicles/vehicles.reducer';
import { VehiclesEffects } from './store/vehicles/vehicles.effects';
import { BrowserModule } from '@angular/platform-browser';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      BrowserModule, BrowserAnimationsModule
    ]),
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    provideAnimations(),
    provideHttpClient(withJsonpSupport(), withInterceptors([tokenInterceptor])),
    provideStore({
      routerStore: routerReducer,
      planets: planetsReducer,
      films: filmsReducer,
      people: peopleReducer,
      species: speciesReducer,
      starships: starshipsReducer,
      vehicles: vehiclesReducer,
      auth: authReducer,
    }),
    provideEffects([
      PlanetsEffects,
      FilmsEffects,
      PeopleEffects,
      SpeciesEffects,
      StarshipsEffects,
      VehiclesEffects,
      AuthEffects,
    ]),
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

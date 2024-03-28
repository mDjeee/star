import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'home',
    title: 'Star Wars',
    data: { state: 'one' },
    loadComponent: () => import('./pages/home/home.component')
      .then(mod => mod.HomeComponent)
  },
  { path: 'films',
    title: 'Films',
    data: { state: 'two' },
    loadComponent: () => import('./pages/films/films.component')
      .then(mod => mod.FilmsComponent)
  },
  { path: 'people',
    title: 'People',
    data: { state: 'three' },
    loadComponent: () => import('./pages/people/people.component')
      .then(mod => mod.PeopleComponent)
  },
  { path: 'planets',
    title: 'Planets',
    data: { state: 'four' },
    loadComponent: () => import('./pages/planets/planets.component')
      .then(mod => mod.PlanetsComponent)
  },
  { path: 'species',
    title: 'Species',
    data: { state: 'five' },
    loadComponent: () => import('./pages/species/species.component')
      .then(mod => mod.SpeciesComponent)
  },
  { path: 'starships',
    title: 'Starships',
    data: { state: 'six' },
    loadComponent: () => import('./pages/starships/starships.component')
      .then(mod => mod.StarshipsComponent)
  },
  { path: 'vehicles',
    title: 'Vehicles',
    canActivate: [authGuard],
    data: { state: 'seven' },
    loadComponent: () => import('./pages/vehicles/vehicles.component')
      .then(mod => mod.VehiclesComponent)
  },
  { path: 'login',
    title: 'Login',
    data: { state: 'eight' },
    loadComponent: () => import('./pages/login/login.component')
      .then(mod => mod.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

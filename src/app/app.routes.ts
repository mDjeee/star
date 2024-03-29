import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'home',
    title: 'Star Wars',
    data: { state: 'one' },
    loadComponent: () => import('./modules/home/home.component')
      .then(mod => mod.HomeComponent)
  },
  { path: 'films',
    title: 'Films',
    canActivate: [authGuard],
    data: { state: 'two' },
    loadComponent: () => import('./modules/films/films.component')
      .then(mod => mod.FilmsComponent)
  },
  { path: 'people',
    title: 'People',
    canActivate: [authGuard],
    data: { state: 'three' },
    loadComponent: () => import('./modules/people/people.component')
      .then(mod => mod.PeopleComponent)
  },
  { path: 'planets',
    title: 'Planets',
    canActivate: [authGuard],
    data: { state: 'four' },
    loadComponent: () => import('./modules/planets/planets.component')
      .then(mod => mod.PlanetsComponent)
  },
  { path: 'species',
    title: 'Species',
    canActivate: [authGuard],
    data: { state: 'five' },
    loadComponent: () => import('./modules/species/species.component')
      .then(mod => mod.SpeciesComponent)
  },
  { path: 'starships',
    title: 'Starships',
    canActivate: [authGuard],
    data: { state: 'six' },
    loadComponent: () => import('./modules/starships/starships.component')
      .then(mod => mod.StarshipsComponent)
  },
  { path: 'vehicles',
    title: 'Vehicles',
    canActivate: [authGuard],
    data: { state: 'seven' },
    loadComponent: () => import('./modules/vehicles/vehicles.component')
      .then(mod => mod.VehiclesComponent)
  },
  { path: 'login',
    title: 'Login',
    data: { state: 'eight' },
    loadComponent: () => import('./modules/login/login.component')
      .then(mod => mod.LoginComponent)
  },
  { path: 'logout',
    title: 'Logout',
    data: { state: 'nine' },
    loadComponent: () => import('./modules/logout/logout.component')
      .then(mod => mod.LogoutComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: '404',
    loadComponent: () => import('./modules/not-found/not-found.component')
      .then(mod => mod.NotFoundComponent)
  }
];

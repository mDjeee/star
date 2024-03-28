import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home',
    title: 'Star Wars',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/home/home.component')
      .then(mod => mod.HomeComponent)
  },
  { path: 'films',
    title: 'Films',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/films/films.component')
      .then(mod => mod.FilmsComponent)
  },
  { path: 'people',
    title: 'People',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/people/people.component')
      .then(mod => mod.PeopleComponent)
  },
  { path: 'planets',
    title: 'Planets',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/planets/planets.component')
      .then(mod => mod.PlanetsComponent)
  },
  { path: 'species',
    title: 'Species',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/species/species.component')
      .then(mod => mod.SpeciesComponent)
  },
  { path: 'starships',
    title: 'Starships',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/starships/starships.component')
      .then(mod => mod.StarshipsComponent)
  },
  { path: 'vehicles',
    title: 'Vehicles',
    data: { animation: 'isRight' },
    loadComponent: () => import('./pages/vehicles/vehicles.component')
      .then(mod => mod.VehiclesComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

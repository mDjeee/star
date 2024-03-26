import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',
    title: 'Star Wars',
    loadComponent: () => import('./pages/home/home.component')
      .then(mod => mod.HomeComponent)
  },
  { path: 'films',
    title: 'Films',
    loadComponent: () => import('./pages/films/films.component')
      .then(mod => mod.FilmsComponent)
  },
  { path: 'people',
    title: 'People',
    loadComponent: () => import('./pages/people/people.component')
      .then(mod => mod.PeopleComponent)
  },
  { path: 'planets',
    title: 'Planets',
    loadComponent: () => import('./pages/planets/planets.component')
      .then(mod => mod.PlanetsComponent)
  },
  { path: 'species',
    title: 'Species',
    loadComponent: () => import('./pages/species/species.component')
      .then(mod => mod.SpeciesComponent)
  },
  { path: 'starships',
    title: 'Starships',
    loadComponent: () => import('./pages/starships/starships.component')
      .then(mod => mod.StarshipsComponent)
  },
  { path: 'vehicles',
    title: 'Vehicles',
    loadComponent: () => import('./pages/vehicles/vehicles.component')
      .then(mod => mod.VehiclesComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

import { Routes } from '@angular/router';

import { CharacterListComponent } from './components/rickAndMorty/character-list/character-list'; 
import { CharacterDetailComponent } from './components/rickAndMorty/character-detail/character-detail'; 
import { SimpsonsListComponent } from './components/simpsons/character-list/simpsons-list'; 
import { SimpsonsDetailComponent } from './components/simpsons/character-detail/simpsons-detail'; 
import { DragonBallList } from './components/dragonBall/character-list/dragon-ball-list';
import { DragonBallDetail } from './components/dragonBall/character-detail/dragon-ball-detail';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'rick-and-morty', 
        pathMatch: 'full'
    },

   
    {
        path: 'rick-and-morty', 
        component: CharacterListComponent 
    },
    {
        path: 'rick-and-morty/:id', 
        component: CharacterDetailComponent 
    },

    
    {
        path: 'dragon-ball',
        component: DragonBallList 
    },
    {
        path: 'dragon-ball/:id', 
        component: DragonBallDetail 
    },

    
    {
        path: 'simpsons',
        component: SimpsonsListComponent 
    },
    {
        path: 'simpsons/:id', 
        component: SimpsonsDetailComponent 
    },

    {
        path: '**',
        redirectTo: 'rick-and-morty'
    }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';

const routes: Routes = [
  { path: '', component: PokedexComponent},
  { path: 'faq', component: FaqComponent },
  { path: 'detalle/:id', component: DetallePokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

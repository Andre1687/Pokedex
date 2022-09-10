import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FilterComponent } from './pages/pokedex/components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    FaqComponent,
    FilterComponent,
    DetallePokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

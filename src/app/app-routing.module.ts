import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetModule } from './modules/character-sheet/character-sheet.module';
import { CharacterSheetContainerComponent } from './modules/character-sheet/components/character-sheet-container/character-sheet-container.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'character'
  },
  {
    path: 'character',
    loadChildren: () => CharacterSheetModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

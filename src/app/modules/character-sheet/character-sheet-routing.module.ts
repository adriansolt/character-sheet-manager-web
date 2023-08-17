import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetContainerComponent } from './components/character-sheet-container/character-sheet-container.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterSheetContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule { }

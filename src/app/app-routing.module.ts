import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreatorModule } from './modules/character-creator/character-creator.module';
import { CharacterSheetModule } from './modules/character-sheet/character-sheet.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'character-creator',
  },
  {
    path: 'character-sheet',
    loadChildren: () => CharacterSheetModule,
  },
  {
    path: 'character-creator',
    loadChildren: () => CharacterCreatorModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

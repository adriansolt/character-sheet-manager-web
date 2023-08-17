import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { CharacterSheetContainerComponent } from './components/character-sheet-container/character-sheet-container.component';
import { CharacterSheetAttributesComponent } from './components/character-sheet-attributes/character-sheet-attributes.component';
import { CharacterSheetAttributeComponent } from './components/character-sheet-attribute/character-sheet-attribute.component';

@NgModule({
  imports: [
    SharedModule,
    CharacterSheetRoutingModule,
  ],
  providers: [],
  declarations: [
    CharacterSheetContainerComponent,
    CharacterSheetAttributesComponent,
    CharacterSheetAttributeComponent
  ],
  exports: [
    CharacterSheetContainerComponent,
    CharacterSheetAttributesComponent,
    CharacterSheetAttributeComponent
  ]
})
export class CharacterSheetModule { }

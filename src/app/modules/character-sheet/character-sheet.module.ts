import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { CharacterSheetContainerComponent } from './components/container/character-sheet-container.component';
import { CharacterSheetBasicInfoComponent } from './components/basic-info/character-sheet-basic-info.component';
import { CharacterSheetCombatStylesInfoComponent } from './components/combat-styles-info/character-sheet-combat-styles-info.component';
import { CharacterSheetCharacteristicsComponent } from './components/characteristics/character-sheet-characteristics.component';
import { CharacterSheetAttributesComponent } from './components/attributes/character-sheet-attributes.component';
import { CharacterSheetAdditionalInfoComponent } from './components/additional-info/character-sheet-additional-info.component';
import { CharacterSheetAbilitiesComponent } from './components/abilities/character-sheet-abilities.component';

const components = [
  CharacterSheetContainerComponent,
  CharacterSheetCharacteristicsComponent,
  CharacterSheetBasicInfoComponent,
  CharacterSheetCombatStylesInfoComponent,
  CharacterSheetAttributesComponent,
  CharacterSheetAdditionalInfoComponent,
  CharacterSheetAdditionalInfoComponent,
  CharacterSheetAbilitiesComponent
]

@NgModule({
  imports: [
    SharedModule,
    CharacterSheetRoutingModule,
  ],
  providers: [],
  declarations: components,
  exports: components
})
export class CharacterSheetModule { }

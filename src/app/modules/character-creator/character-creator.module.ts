import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterCreatorRoutingModule } from './character-creator-routing.module';
import { CharacterCreatorContainerComponent } from './components/container/character-creator-container.component';
import { CharacterCreatorCultureAbilitiesWithoutChoicesPipe } from './pipes/culture-abilities-without-choices/character-creator-culture-abilities.pipe';
import { CharacterCreatorCultureAbilities1ChoicesPipe } from './pipes/culture-abilities-1-choices/character-creator-culture-abilities-1-choices.pipe';
import { CharacterCreatorCultureAbilities2ChoicesPipe } from './pipes/culture-abilities-2-choices/character-creator-culture-abilities-2-choices.pipe';

const components = [
  CharacterCreatorContainerComponent,
  CharacterCreatorCultureAbilitiesWithoutChoicesPipe,
  CharacterCreatorCultureAbilities1ChoicesPipe,
  CharacterCreatorCultureAbilities2ChoicesPipe
]

@NgModule({
  imports: [
    SharedModule,
    CharacterCreatorRoutingModule,
  ],
  declarations: components,
  exports: components
})
export class CharacterCreatorModule { }

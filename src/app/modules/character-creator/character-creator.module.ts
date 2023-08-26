import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterCreatorRoutingModule } from './character-creator-routing.module';
import { CharacterCreatorContainerComponent } from './components/container/character-creator-container.component';

const components = [
  CharacterCreatorContainerComponent
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

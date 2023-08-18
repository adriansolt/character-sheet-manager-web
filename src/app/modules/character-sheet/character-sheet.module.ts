import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { CharacterSheetContainerComponent } from './components/container/character-sheet-container.component';
import { CharacterSheetAttributesComponent } from './components/attributes/character-sheet-attributes.component';
import { CharacterSheetBasicInfoComponent } from './components/basic-info/character-sheet-basic-info.component';

@NgModule({
  imports: [
    SharedModule,
    CharacterSheetRoutingModule,
  ],
  providers: [],
  declarations: [
    CharacterSheetContainerComponent,
    CharacterSheetAttributesComponent,
    CharacterSheetBasicInfoComponent
  ],
  exports: [
    CharacterSheetContainerComponent,
    CharacterSheetAttributesComponent,
    CharacterSheetBasicInfoComponent
  ]
})
export class CharacterSheetModule { }

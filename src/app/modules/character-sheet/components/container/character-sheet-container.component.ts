import { Component } from '@angular/core';
import { habilidadesBasicas, habilidadesProfesionales } from '../abilities/character-sheet-abilities.component';

@Component({
  selector: 'character-sheet-container',
  templateUrl: './character-sheet-container.component.html',
  styleUrls: ['./character-sheet-container.component.scss'],
})
export class CharacterSheetContainerComponent {
  basicAbilities = habilidadesBasicas;
  professionalAbilities = habilidadesProfesionales;
}

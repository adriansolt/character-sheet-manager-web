import { Component, Input } from '@angular/core';
import { Ability } from '../../models/ability';

@Component({
  selector: 'character-sheet-abilities',
  templateUrl: './character-sheet-abilities.component.html',
  styleUrls: ['./character-sheet-abilities.component.scss'],
})
export class CharacterSheetAbilitiesComponent {
  @Input() abilities: Ability[];

  displayedColumns = [
    'name',
    'base',
    'culture',
    'culturePoints',
    'profession',
    'professionPoints',
    'agePoints',
    'experiencePoints',
    'fumblePoints',
    'trainingPoints',
    'total',
  ];

  getTotal(ability: Ability): number {
    return (
      Number(ability.characteristic1.value.current ?? 0) +
      Number(ability.characteristic2.value.current ?? 0) +
      Number(ability.culturePoints ?? 0) +
      Number(ability.professionPoints ?? 0) +
      Number(ability.agePoints ?? 0) +
      Number(ability.experiencePoints ?? 0) +
      Number(ability.fumblePoints ?? 0) +
      Number(ability.trainingPoints ?? 0)
    );
  }
}

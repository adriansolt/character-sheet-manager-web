import { Pipe, PipeTransform } from '@angular/core';
import { Habilidad } from 'src/app/modules/character-sheet/models/ability';
import { CULTURA } from 'src/app/modules/character-sheet/models/additional-info';

@Pipe({
  name: 'cultureAbilitiesWithoutChoices'
})
export class CharacterCreatorCultureAbilitiesWithoutChoicesPipe implements PipeTransform {

  transform(value: Habilidad[], cultura: CULTURA): Habilidad[] {
    return value.filter((habilidad) =>
    habilidad.culturas?.some(
      (c: CULTURA) => c === cultura && !habilidad.escoger1 && !habilidad.escoger2
    ) 
  );
  }

}

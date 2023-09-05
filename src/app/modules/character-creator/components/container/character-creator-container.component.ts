import { Component } from '@angular/core';
import { MatChipListbox } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import {
  CLASE_SOCIAL_BARBARA,
  CLASE_SOCIAL_CIVILIZADA,
  CLASE_SOCIAL_NOMADA,
  CLASE_SOCIAL_PRIMITIVA,
  CULTURA,
  PROFESION,
  PRONOMBRE,
} from 'src/app/modules/character-sheet/models/additional-info';
import { CharacterCreatorInfoDialogComponent } from '../info-dialog/character-creator-info-dialog.component';
import {
  habilidadesBasicas,
  habilidadesProfesionales,
} from 'src/app/modules/character-sheet/components/abilities/character-sheet-abilities.component';
import { Habilidad } from 'src/app/modules/character-sheet/models/ability';

@Component({
  selector: 'app-character-creator-container',
  templateUrl: './character-creator-container.component.html',
  styleUrls: ['./character-creator-container.component.scss'],
})
export class CharacterCreatorContainerComponent {
  profesiones: PROFESION[] = Object.values(PROFESION);
  profesion: PROFESION = PROFESION.Asistente;
  nombre = '';
  edad = '';
  altura = '';
  peso = '';
  cultura: CULTURA = CULTURA.Civilizada;
  culturas: CULTURA[] = Object.values(CULTURA);
  claseSocial: string = CLASE_SOCIAL_CIVILIZADA.Paria;
  habilidadesBasicas =  habilidadesBasicas;
  habilidadesProfesionales = habilidadesProfesionales;

  constructor(public dialog: MatDialog) {}

  clasesSocialesPorCultura(): any[] {
    switch (this.cultura) {
      case CULTURA.Barbara:
        return Object.values(CLASE_SOCIAL_BARBARA);
      case CULTURA.Nomada:
        return Object.values(CLASE_SOCIAL_NOMADA);
      case CULTURA.Primitiva:
        return Object.values(CLASE_SOCIAL_PRIMITIVA);
      default:
        return Object.values(CLASE_SOCIAL_CIVILIZADA);
    }
  }

  openDialog(event: any, info: any) {
    event.stopPropagation();
    console.log(info);
    this.dialog.open(CharacterCreatorInfoDialogComponent, {
      data: info,
    });
  }
}

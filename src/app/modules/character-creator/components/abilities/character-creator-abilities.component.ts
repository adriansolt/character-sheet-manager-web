import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habilidad } from "../../../character-sheet/models/ability";
import { CULTURA } from "../../../character-sheet/models/additional-info";

@Component({
  selector: 'app-character-creator-abilities',
  templateUrl: './character-creator-abilities.component.html',
  styleUrls: ['./character-creator-abilities.component.scss']
})
export class CharacterCreatorAbilitiesComponent {
  @Input() habilidades: Habilidad[];
  @Input() cultura: CULTURA;
  @Output() dialogEmitter: EventEmitter<any> = new EventEmitter<any>();

  emitDialogInfo(info: {event: any, info: any}) {
    this.dialogEmitter.emit(info);
  }
}

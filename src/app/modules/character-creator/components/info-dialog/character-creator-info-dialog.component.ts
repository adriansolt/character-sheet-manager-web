import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-creator-info-dialog',
  templateUrl: './character-creator-info-dialog.component.html',
  styleUrls: ['./character-creator-info-dialog.component.scss']
})
export class CharacterCreatorInfoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

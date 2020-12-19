import { Component, OnInit, Input } from '@angular/core';
import type { secretSantaItemObj } from '../secret-santa-board/secret-santa-board.component';
import { SecretSantaBoardComponent } from '../secret-santa-board/secret-santa-board.component';

export type name = {
  name: string;
  visible: boolean;
};

@Component({
  selector: 'app-secret-santa-card',
  templateUrl: './secret-santa-card.component.html',
  styleUrls: ['./secret-santa-card.component.scss'],
})
export class SecretSantaCardComponent
  extends SecretSantaBoardComponent
  implements OnInit {
  @Input() name: name = { name: '', visible: false };
  @Input() par: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log();
  }
}

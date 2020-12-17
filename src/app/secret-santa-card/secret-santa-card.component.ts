import { Component, OnInit, Input } from '@angular/core';
import type { secretSantaItemObj } from '../secret-santa-board/secret-santa-board.component';

@Component({
  selector: 'app-secret-santa-card',
  templateUrl: './secret-santa-card.component.html',
  styleUrls: ['./secret-santa-card.component.scss'],
})
export class SecretSantaCardComponent implements OnInit {
  @Input() match: secretSantaItemObj;
  constructor() {}

  ngOnInit(): void {}
}

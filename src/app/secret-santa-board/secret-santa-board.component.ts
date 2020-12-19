import { Component, OnInit } from '@angular/core';
// creado type para la propiedad //
export type secretSantaItemObj = {
  name: string;
  par: string;
  visible: boolean;
};

@Component({
  selector: 'app-secret-santa-board',
  templateUrl: './secret-santa-board.component.html',
  styleUrls: ['./secret-santa-board.component.scss'],
})
export class SecretSantaBoardComponent implements OnInit {
  //Lista de persona que participan //
  friendList: string[] = [
    'Adonay',
    'Sunil',
    'Luis-Clar',
    'Jacobo',
    'Elisa',
    'Angelines',
    'Paloma',
    'Luis-Marin',
    'Angelines',
    'Monica',
    'Elisabeht',
  ];
  //propidedad + el type //
  visible: boolean = true;
  secretSantaList: secretSantaItemObj[] = [];

  constructor() {}

  ngOnInit(): void {
    //llamada del metodo//
    this.buildSecretSanta();
  }

  buildSecretSanta() {
    // desordenando la lista con shuffle
    let persona = this.shuffle(this.friendList);
    //creo una lista vacia para el push de santaList
    let lista: string = '';
    if (persona.lenght % 2 != 0) {
      lista = persona.pop();
    }

    let totalPersona = persona.lenght;

    // haciendo push a la lista de santaList
    persona.forEach((item, i) => {
      let pareja = i === totalPersona - 1 ? 0 : i + 1;
      let pares: secretSantaItemObj = {
        name: item,
        par: persona[pareja],
        visible: true,
      };
      if (lista != '') {
        this.secretSantaList.push({
          name: item,
          par: persona[pareja] || 'Buscando amigos por ti!!',
          visible: true,
        });
      }
    });
  }

  // funcion shuffle que le pasamos la lista de nombres y devuelve una lista desordenada
  shuffle(item) {
    let currentIndex = item.length,
      temporaryValue: string,
      randomIndex: number;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = item[currentIndex];
      item[currentIndex] = item[randomIndex];
      item[randomIndex] = temporaryValue;
    }
    return item;
  }

  // cambiar entre el true o false el boton para que aparezca la pareja
  onclick() {
    this.visible = !this.visible;
  }
}

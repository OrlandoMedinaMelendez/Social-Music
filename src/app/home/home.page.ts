import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infor = [
    {
      nombre:'Ariana Grande',
      img: 'assets/img/ariana.jpg ',
      des:'Premios',
      fuente: 'Cantante y actriz Ariana Grande ha ganado más de 102 premios durante su carrera. En 2019, Grande lanzó su quinto álbum de estudio, Thank U, Siguiente , que incluye el primer sencillo Thank u next . Grande fue nominada para dos premios en las 61ª Entrega Anual del Grammy , ganando su primer premio al Mejor Álbum Vocal Pop por Edulcorante .'
    },
    {
      nombre:'Jonas Brothers',
      img: ' assets/img/jonas.jpg ',
      des:'Grammys',
      fuente:'Los integrantes de la agrupación de música pop estadounidense Jonas Brothers, se dijeron tristes por tener que '
    },
    {
      nombre:'Dua lipa',
      img: 'assets/img/dualipa.jpg ',
      des:'Dua Lipa ha vuelto a cambiar de color de pelo y ahora lo lleva en un tono muy acorde con esta temporada',
      fuente:'Desde que empezó la cuarentenaDua Lipa no ha parado de experimentar con su cabello. '
    }
  ];

  vertical={
    direction:"vertical",
  };
 
  horizontal={
    direction:"horizontal",
    loop: true,
  };  

  constructor() {}

}

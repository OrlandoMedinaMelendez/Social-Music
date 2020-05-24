import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-music-genres',
  templateUrl: './music-genres.page.html',
  styleUrls: ['./music-genres.page.scss'],
})
export class MusicGenresPage implements OnInit {

  private genres = [
    {
      id: '2',
      title:'Banda',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png',
      artits : ['BandaMs Julion Alvarez'],
      redirectTo: '../../genres/banda'
    },
    {
      id: '3',
      title:'Electronica',
      imgURL: 'https://1000marcas.net/wp-content/uploads/2019/12/Avicii-Logo.png',
      artits : ['Avicci'],
      redirectTo: './genres/electronica'
    },
    {
      id: '1',
      title:'K-pop',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
      artits : ['BTS Twice Loona'],
      redirectTo: './genres/kpop'
    },
    {
      id: '4',
      title:'Pop',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/41gc9yYoYgL._AC_.jpg',
      artits : ['Ariana Grande Bruno Mars'],
      redirectTo: './genres/pop'
    },
    {
      id: '5',
      title:'Rock',
      imgURL: 'https://mott.pe/noticias/wp-content/uploads/2018/01/Portada-Beatles.jpg',
      artits : ['The Beatles'],
      redirectTo: './genres/rock'
    }
  ]

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  routingVia(){
    this.router.navigate(['']);
  }

}

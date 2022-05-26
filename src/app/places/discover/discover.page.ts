import { PlacesService } from './../places.service';
import { Person } from './../place.model';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {


  getPerson: Person[];
  constructor(private PlacesService: PlacesService,private menuCtrl: MenuController) { }

  ngOnInit() {
    this.getPerson=this.PlacesService.persons;
  }

  openMenu()
  {
    this.menuCtrl.toggle();
  }
}

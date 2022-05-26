import { PlacesService } from './../places.service';
import { Person } from './../place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  getPerson: Person[];
  constructor(private PlacesService: PlacesService) { }

  ngOnInit() {
    this.getPerson=this.PlacesService.persons;
  }

}

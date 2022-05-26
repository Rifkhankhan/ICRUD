import { PlacesService } from './../../places.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './../../place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {

   person:Person;

  constructor(private route: ActivatedRoute,private navCtrl: NavController,private PlacesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId'))
      {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.person=this.PlacesService.getperson(paramMap.get('placeId'));

      //  this.person=this.PlacesService.persons.find(
      //   p => p.name ===paramMap.get('placeId')
      // );
    });
  }

}

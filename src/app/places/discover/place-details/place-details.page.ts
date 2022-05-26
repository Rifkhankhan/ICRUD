import { Person } from './../../place.model';
import { PlacesService } from './../../places.service';
import { CreateBookingComponent } from './../../booking/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController ,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  place: Person;

  // eslint-disable-next-line max-len
  constructor(private router: Router,private navCtrl: NavController,private modalController: ModalController,private placesService: PlacesService) { }

  ngOnInit() {
    // this.router.paramMap.subscribe(paramMap =>{
    //   if(!paramMap.has('placeId'))
    //   {
    //     this.navCtrl.navigateBack('/places/tabs/discover');
    //     return;
    //   }
    //   this.place=this.placesService.getplace(paramMap.get('placeId'));
    // });
  }

  onBookPlace()
  {
    // this.router.navigateByUrl('/places/tabs/discover');
        // this.navCtrl.pop();

    this.modalController.create({
        component:CreateBookingComponent,
        componentProps:{selcetedPlace: this.place}
    }).then(modalEl =>{modalEl.present()});
  }

}

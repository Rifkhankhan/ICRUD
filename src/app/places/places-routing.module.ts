import { BookingPageModule } from '././booking/booking.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path:'tabs',
    component:PlacesPage,
    children:[
        {
          path:'discover',
          children:[
            {
              path:'',
              loadChildren:()=>import('./discover/discover.module').then(m=>m.DiscoverPageModule)
            },
            {
              path:':placeId',
              loadChildren:()=>import('./discover/place-details/place-details.module').then(m=>m.PlaceDetailsPageModule)
            }
          ]

        },
        {
          path:'offers',
          children:[
            {
              path:'edit:placeId',
             loadChildren:()=>import('./offers/edit-offer/edit-offer.module').then(m=>m.EditOfferPageModule)
            },
            {
              path:'',
              loadChildren:()=>import('./offers/offers.module').then(m=>m.OffersPageModule)
            },
            {
              path:'new',
              loadChildren:()=>import('./offers/new-offer/new-offer.module').then(m=>m.NewOfferPageModule)
            },
            {
              path:':placeId',
              loadChildren:()=>import('./offers/offer-booking/offer-booking.module').then(m=>m.OfferBookingPageModule)
            }
          ]
        },
        {
          path:'booking',
          children:[
            {
              path:'',
              loadChildren:()=>import('./booking/booking.module').then(m=>m.BookingPageModule)
            },
            {
              path:'create-booking',
              loadChildren:()=>import('./booking/create-booking/create-booking.component').then(m=>m.CreateBookingComponent)
            }
          ]
        },
        {
          path:'',
          redirectTo:'/places/tabs/discover',
          pathMatch:'full'
        }

    ]
  },
  {
    path:'',
    redirectTo:'/places/tabs/discover',
    pathMatch:'full'

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { HotelOffersService } from 'src/app/services/hotel-offers/hotel-offers.service';
import { HotelOffersModel } from 'src/app/services/hotel-offers/models/hotel.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  
  constructor(private hotelOffersSvc: HotelOffersService) { }
  
  hotels: any[] = [];

  ngOnInit(): void { }

  selectHotel(event: any) {
    const params: HotelOffersModel = {
      hotelIds: event.hotelIds,
      adults: event.adults,
      roomQuantity: event.roomQuantity,
    }

    this.hotelOffersSvc.getToken().subscribe((res: any) => {
      this.hotelOffersSvc.getHotelOffers(params, res.access_token)?.subscribe((res: any) => this.hotels = res.data);
    });
  }

}

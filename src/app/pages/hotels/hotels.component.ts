import { Component, OnInit } from '@angular/core';
import { HotelOffersService } from 'src/app/services/hotel-offers/hotel-offers.service';
import { HotelOffersModel } from 'src/app/services/hotel-offers/models/hotel.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  private token: string = '';

  constructor(private hotelOffersSvc: HotelOffersService) { }

  ngOnInit(): void {
    const params: HotelOffersModel = {
      hotelIds: 'HLLON101',
      adults: 1,
    }

    this.hotelOffersSvc.getToken().subscribe((res: any) => {
      this.hotelOffersSvc.getHotelOffers(params, res.access_token)?.subscribe(res => console.log(res));
    });

  }

}

import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotelOffersService } from 'src/app/services/hotel-offers/hotel-offers.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private hotelOffersSvc: HotelOffersService) { }

  @Output() filter = new EventEmitter<[string]>();
  filterForm = new FormGroup({
    hotelIds: new FormControl(),
    adults: new FormControl(),
    roomQuantity: new FormControl(),
  })
  hotelList: any = [];
  hotelId: [string] = [''];

  ngOnInit(): void {
  }

  searchHotel(name: string) {
    this.hotelOffersSvc.getToken().subscribe((res: any) => {
      this.hotelOffersSvc.getHotelName({ keyword: name, subType: 'HOTEL_GDS'}, res.access_token)
        ?.subscribe((res: any) => this.hotelList = res.data);
    });
  }

  selectHotel(id: [string]) {
    this.hotelId = id;
  }

  search() {
    this.filter.emit(this.filterForm.value);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { HotelOffersResponseModel } from 'src/app/services/hotel-offers/models/hotel-response.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  columns: any[] = [
    { name: 'Nombre' }, 
    { name: 'Huéspedes' }, 
    { name: 'Habitaciones' }, 
    { name: 'Precio' },
  ];

  @Input() hotels: any = {};

  ngOnInit(): void {
  }

}

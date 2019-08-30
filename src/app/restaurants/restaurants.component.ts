import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants : Restaurant[] = []

  constructor(private restaurantsService: RestaurantsService) { }

  //metodo do ciclo de vida - chamado toda vez que o componente for chamado na tela
  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}

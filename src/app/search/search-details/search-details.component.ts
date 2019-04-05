import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'sp-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  id: string;
  availabilities: string;
  price: string;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.price = this.route.snapshot.queryParamMap.get('price');
    this.availabilities = this.route.snapshot.queryParamMap.get(
      'availabilities'
    );
  }

  /**
   * This is the back function which takes user back one step
   * @returns returns nothing
   */
  back(): void {
    this.location.back();
  }
}

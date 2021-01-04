import { Component, OnInit, ViewEncapsulation } from "@angular/core";

interface City {
  name: string,
  id: number
}

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class TopMenuComponent implements OnInit {

  selectedCity: City;
  cities: City[];

  constructor() {
    this.cities = [
      { id: 1, name: " " },
      { id: 2, name: " " },
      { id: 3, name: " " },
    ];
  }

  ngOnInit(): void { }
}

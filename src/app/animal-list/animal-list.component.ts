import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-animal-component',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Array<Animal> = [
    new Animal("horse", "horse"),
    new Animal("raptor", "dinosaur"),
    new Animal("red panda", "bear"),
    new Animal("emu", "bird"),
    new Animal("dashun", "dog")
  ];

  constructor() { }

  ngOnInit() {
  }
}

class Animal {
  constructor(
    public name: string,
    public species: string
  ) { }
}

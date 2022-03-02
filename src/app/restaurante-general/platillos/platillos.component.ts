import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/models/dto/Platillo.dto';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {

  constructor() { }

  platillo: Platillo = new Platillo();

  ngOnInit(): void {
  }

}

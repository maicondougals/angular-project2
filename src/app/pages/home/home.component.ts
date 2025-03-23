import { Component } from '@angular/core';

import { trigger, transition, style, animate } from '@angular/animations';




@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

  animations: [
    trigger('homeContainer', [
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'scale(.9)' 
        }), 
        animate('0.5s ease-out', style({ 
          transform: 'scale(1)',
          opacity:1

        }))
      ])
      
    ])
  ]

})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";

import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
  animations: [

    trigger('routeAnimations', [
      transition('Home => Sobre', [
        style({ 
          opacity: 0,
          transform: 'scale(1.2)' 
        }), 
        animate('0.5s ease-out', style({ 
          transform: 'scale(1)',
          opacity:1

        }))
      ]),

      transition('Sobre => Home', [
        style({ 
          transform: 'scale(1.2)',
          opacity:0
        }), 
        animate('.5s ease-out', style({ 
          opacity: 1,
          transform: 'scale(1)' 
         })) // Nova página entra da esquerda
      ])
    ])
    
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}

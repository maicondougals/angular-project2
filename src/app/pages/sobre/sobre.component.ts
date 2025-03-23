import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
  standalone: true, 
})
export class SobreComponent {
  words: string[] = ['Desenvolvimento de Layout', 'Desenvolvimento Web', 'Artes autorais', 'Hospedagem'];

  isClicked = [false, false]; // Array para controlar o estado de cada botão

  toggleClick(index: number) {
    if (!this.isClicked[index]) { // Evita múltiplos cliques
      this.isClicked[index] = true; // Aplica a animação
  
      setTimeout(() => {
        this.isClicked[index] = false; // Remove a animação após 1 segundo
  
        // Abre o link correspondente ao índice clicado
        if (index === 0) {
          window.open('https://wa.me/61998497382', '_blank');
        } else if (index === 1) {
          window.open('https://www.instagram.com/studiosmacro.com.br', '_blank');
        }
      }, 200); // Tempo de espera antes de abrir o link
    }
  }
}

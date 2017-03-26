import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div>
    <h1 class="error">404: page doesn't exist :)</h1>
    </div>
  `,
  styles: [`
    .error {
      text-align: center;   
      color: red;
      position: relative;
      top: 20px;
    }
  `]
})
export class NoContentComponent {

}

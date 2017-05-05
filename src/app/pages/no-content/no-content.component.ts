import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div>
    <h1 class="error">404: Nothing to see here...</h1>
    </div>
  `,
  styles: [`
    .error {
      text-align: center;   
      color: white;
      position: relative;
      top: 20px;
      height: calc(100vh - 260px);
    }
  `]
})
export class NoContentComponent {

}

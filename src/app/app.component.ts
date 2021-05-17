import { Component } from '@angular/core';
/**
 * this component made by using the @component decorator
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart-application';
}

/**
 * Now after this the compiler has all details about the components of app
 * and ready to use
 */
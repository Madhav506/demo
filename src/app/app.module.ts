import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DataService } from './services/data.service';
/**
 * this app.module.ts is the module created with @NgModule decorator 
 * this decorator has declarations of all the components
 */
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    SortComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    ModalModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]//bootstapping the appcomponent
})
export class AppModule { }

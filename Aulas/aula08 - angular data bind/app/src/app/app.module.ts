import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TextInterpolationComponent } from './components/views/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './components/views/property-binding/property-binding.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { EventBindingComponent } from './components/views/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './components/views/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextInterpolationComponent,
    PropertyBindingComponent,
    ButtonComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //adicionado p/ two way bindind
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

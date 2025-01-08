import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyCustomElementComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    // Convert the component into a custom element
    const customElement = createCustomElement(MyCustomElementComponent, { injector });
    customElements.define('my-custom-element', customElement);
  }

  // Angular Elements requires manual bootstrapping
  ngDoBootstrap() {}
}

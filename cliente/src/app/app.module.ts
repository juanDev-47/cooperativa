import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClienteFormComponent,
    ClienteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-top-right',
      progressBar: true,
      progressAnimation: 'increasing',
      timeOut: 6000

    })
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

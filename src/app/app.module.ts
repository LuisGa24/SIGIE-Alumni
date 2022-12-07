import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocenteModule } from './docente/docente.module';
import { DocenteRoutingModule } from './docente/docente-routing.module';
import { ServicesModule } from './services/services.module';
import { PublicarConsultaModule } from './components/publicar-consulta.module'
import { PublicarConsultaRoutingModule } from './components/publicar-consulta-routing.module'
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    FlexLayoutModule,
    DocenteModule,
    DocenteRoutingModule,
    ServicesModule,
    PublicarConsultaModule,
    PublicarConsultaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

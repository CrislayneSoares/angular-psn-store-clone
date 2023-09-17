import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { MenuBarModule } from "./components/menu-bar/menu-bar.module";
import { PageCoverComponent } from './components/page-cover/page-cover.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        MenuBarComponent,
        CardLabelComponent,
        CardPricingComponent,
        PageCoverComponent,
        TitleButtonComponent,
        CollectionsComponent,
        FooterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuBarModule
    ]
})
export class AppModule { }

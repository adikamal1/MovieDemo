import { NgModule } from '@angular/core';
import{RootComponent} from './root.component'
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsStubService } from './accounts/services/accounts.stub.service';
import { AccountsService } from './accounts/services/accounts.service';
import { NavComponent } from 'src/app/nav/nav.component';
import {MovieComponent} from '../app/Movies/movies.component';
import { MovieDataService } from 'src/app/services/MovieDataService';
import { HttpClientModule } from '@angular/common/http';
import { SidePanelComponent } from 'src/app/side-panel/side-panel.component';

@NgModule({
declarations:[RootComponent,NavComponent,MovieComponent,SidePanelComponent],
bootstrap:[RootComponent],
imports:[BrowserModule,AccountsModule,HttpClientModule],
providers:[MovieDataService,{provide:AccountsService,useClass:AccountsStubService}]
})

export class RootModule{}


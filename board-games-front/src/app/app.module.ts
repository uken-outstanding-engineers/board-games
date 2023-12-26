import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardGamesPanelComponent } from './board-games-panel/board-games-panel.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {RatingModule} from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';

import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmationService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    BoardGamesPanelComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MenubarModule,
    AppRoutingModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    RatingModule,
    InputTextModule,
    HttpClientModule,
    ToastModule,
    FileUploadModule,
    TabViewModule,
    CalendarModule, //start
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

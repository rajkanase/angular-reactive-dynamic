import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// prime ng imports
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectConfiguratorComponent } from "./components/project-configurator/project-configurator.component";
import { ScrollTableComponent } from './components/scroll-table/scroll-table.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TagInputModule } from 'ngx-chips';
import { NgxChipsComponent } from './components/ngx-chips/ngx-chips.component';

@NgModule({
  declarations: [AppComponent, ProjectConfiguratorComponent, ScrollTableComponent, ChartsComponent, DynamicFormComponent, NgxChipsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    TagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

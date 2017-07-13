import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';

import { AppComponent } from './components/main/app.component';
import { AppRoutes } from './routes/app.routing';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule} from './components/shared/navbar/navbar.module';
import { FixedPluginModule} from './components/shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UserComponent }   from './components/user/user.component';
import { JustificantesComponent }   from './components/justificantes/justificantes.component';
import { TypographyComponent }   from './components/typography/typography.component';
import { IconsComponent }   from './components/icons/icons.component';
import { MapsComponent }   from './components/maps/maps.component';
import { NotificationsComponent }   from './components/notifications/notifications.component';
import { UpgradeComponent }   from './components/upgrade/upgrade.component';
import { LoginComponent }   from './components/login/login.component';
import { JustificantesService } from './services/justificantes.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    JustificantesComponent,
    TypographyComponent,
    LoginComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    FormsModule,
    DataTablesModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [JustificantesService],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { Routes } from '@angular/router';

import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { UserComponent }   from '../components/user/user.component';
import { JustificantesComponent }   from '../components/justificantes/justificantes.component';
import { TypographyComponent }   from '../components/typography/typography.component';
import { IconsComponent }   from '../components/icons/icons.component';
import { MapsComponent }   from '../components/maps/maps.component';
import { NotificationsComponent }   from '../components/notifications/notifications.component';
import { UpgradeComponent }   from '../components/upgrade/upgrade.component';
import { LoginComponent }   from '../components/login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'justificantes',
        component: JustificantesComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]

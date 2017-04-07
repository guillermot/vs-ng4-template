import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { GridDataComponent } from './grid-data/grid-data.component';

export const MODULE_ROUTES: Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'user-form', component: UserFormComponent },
    { path: 'user-form-reactive', component: UserFormReactiveComponent },
    { path: 'user-form-reactive/:id', component: UserFormReactiveComponent },
    { path: 'grid-data/:page', component: GridDataComponent }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UpgradeComponent,
    UserFormComponent,
    UserFormReactiveComponent,
    GridDataComponent
]

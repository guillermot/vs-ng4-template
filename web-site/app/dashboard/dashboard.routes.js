"use strict";
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var icons_component_1 = require("./icons/icons.component");
var table_component_1 = require("./table/table.component");
var notifications_component_1 = require("./notifications/notifications.component");
var typography_component_1 = require("./typography/typography.component");
var maps_component_1 = require("./maps/maps.component");
var upgrade_component_1 = require("./upgrade/upgrade.component");
var user_form_component_1 = require("./user-form/user-form.component");
var user_form_reactive_component_1 = require("./user-form-reactive/user-form-reactive.component");
var grid_data_component_1 = require("./grid-data/grid-data.component");
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    { path: 'user-form', component: user_form_component_1.UserFormComponent },
    { path: 'user-form-reactive', component: user_form_reactive_component_1.UserFormReactiveComponent },
    { path: 'user-form-reactive/:id', component: user_form_reactive_component_1.UserFormReactiveComponent },
    { path: 'grid-data/:page', component: grid_data_component_1.GridDataComponent }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    upgrade_component_1.UpgradeComponent,
    user_form_component_1.UserFormComponent,
    user_form_reactive_component_1.UserFormReactiveComponent,
    grid_data_component_1.GridDataComponent
];
//# sourceMappingURL=dashboard.routes.js.map
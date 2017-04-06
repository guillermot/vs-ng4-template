"use strict";
var sidebar_metadata_1 = require("./sidebar.metadata");
exports.ROUTES = [
    { path: 'dashboard', title: 'Dashboard', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'User profile', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-user' },
    { path: 'table', title: 'Table List', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-map-marker' },
    { path: 'notifications', title: 'Notifications', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-bell' },
    { path: 'upgrade', title: 'Upgrade to PRO', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-rocket' },
    {
        path: 'custom',
        title: 'Custom',
        menuType: sidebar_metadata_1.MenuType.LEFT,
        icon: 'pe-7s-user',
        items: [
            { path: 'user-form', title: 'Template Form' },
            { path: 'user-form-reactive', title: 'Reactive Form' },
            { path: 'grid-data', title: 'Grid Data' }
        ]
    }
];
//# sourceMappingURL=sidebar-routes.config.js.map
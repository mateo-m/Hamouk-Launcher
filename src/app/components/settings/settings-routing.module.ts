import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../providers/auth-guard.service';

import { SettingsComponent } from './settings.component';
import { SettingsAboutComponent } from './settings-about/settings-about.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsJavaComponent } from './settings-java/settings-java.component';
import { SettingsLauncherComponent } from './settings-launcher/settings-launcher.component';
import { SettingsMinecraftComponent } from './settings-minecraft/settings-minecraft.component';

const routes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SettingsAccountComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'account',
                component: SettingsAccountComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'minecraft',
                component: SettingsMinecraftComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'java',
                component: SettingsJavaComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'about',
                component: SettingsAboutComponent,
                canActivate: [AuthGuard]
            },
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }

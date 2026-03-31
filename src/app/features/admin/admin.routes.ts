import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

export const adminPanelRoutes: Routes = [
  {
    path: '',
    component: AdminShellComponent,
    children:[
      { 
        path: 'panel',
        component: AdminPanelComponent, 
      }, 
      {
        path: 'projects',
        component: AdminProjectsComponent, 
      }, 
      {
        path: 'blog',
        component: AdminBlogComponent, 
      },
    ]
  },
  { 
    path: 'login', 
    component: AuthComponent,
  }, 
];

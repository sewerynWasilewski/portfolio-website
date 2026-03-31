import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';
import { BlogComponent } from './features/blog/blog.component';
import { BlogDetailsComponent } from './features/blog/blog-details/blog-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/:project_id',
    component: ProjectDetailsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:blog_id',
    component: BlogDetailsComponent,
  },
  { 
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.adminPanelRoutes)
  }
];
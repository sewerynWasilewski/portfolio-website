import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProjectOverview, ProjectsAPIService } from '../../core/services/projects-api.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsAPIService);

  readonly techFilter$ = this.route.queryParamMap.pipe(
    map((params) => params.get('tech')?.trim().toLowerCase() ?? '')
  );

  readonly filteredProjects$ = this.techFilter$.pipe(
    map((tech) => {
      if (!tech) {
        return this.projectsService.getAllProjects();
      }

      return this.projectsService.getProjectsByTechnology(tech);
    })
  );

  readonly pageTitle$ = this.techFilter$.pipe(
    map((tech) => (tech ? `Projects filtered by: ${tech}` : 'Projects'))
  );

  trackByProject(index: number, project: ProjectOverview): string {
    return project.id;
  }
}
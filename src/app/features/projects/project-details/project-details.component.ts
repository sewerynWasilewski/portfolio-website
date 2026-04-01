import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MarkdownRendererComponent } from '../../../shared/components/markdown-renderer/markdown-renderer.component';
import { ProjectsAPIService } from '../../../core/services/projects-api.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink, MarkdownRendererComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsAPIService);

  readonly projectId = this.route.snapshot.paramMap.get('project_id') ?? '';
  readonly project = this.projectsService.getProjectDetails(this.projectId);
}
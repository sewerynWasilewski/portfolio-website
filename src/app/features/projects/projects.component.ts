import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  href?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private readonly route = inject(ActivatedRoute);

  readonly projects: readonly Project[] = [
    {
      id: 'homelab',
      title: 'Homelab',
      description: 'My personal space to learn and practice DevOps topics and also host this very website.',
      year: '2023',
      technologies: ['proxmox', 'terraform', 'ansible', 'docker', 'linux'],
    },
    {
      id: '3d-renderer',
      title: '3D Renderer',
      description: 'A renderer that uses a frame graph approach to manage different GPU resources.',
      year: '2023',
      technologies: ['cpp', 'opengl', 'vulkan'],
    },
    {
      id: 'myteacher',
      title: 'myTeacher',
      description: 'An app for e-lessons where teachers get all they need to teach their students online.',
      year: '2023',
      technologies: ['angular', 'js', 'mysql'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'My personal website presenting projects, blog posts and technologies I work with.',
      year: '2026',
      technologies: ['angular', 'css', 'blog'],
    },
  ];

  readonly techFilter = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => params.get('tech')?.trim().toLowerCase() ?? '')
    ),
    { initialValue: '' }
  );

  readonly filteredProjects = computed(() => {
    const tech = this.techFilter();

    if (!tech) {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.technologies.some((item) => item.toLowerCase() === tech)
    );
  });

  readonly pageTitle = computed(() =>
    this.techFilter() ? `Projects filtered by: ${this.techFilter()}` : 'Projects'
  );

  trackByProject(index: number, project: Project): string {
    return project.id;
  }
}
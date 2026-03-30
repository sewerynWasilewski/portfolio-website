import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  content: string;
};

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);

  readonly projects: readonly ProjectDetails[] = [
    {
      id: 'homelab',
      title: 'Homelab',
      description: 'My personal space to learn and practice DevOps topics.',
      year: '2023',
      technologies: ['proxmox', 'terraform', 'ansible', 'docker', 'linux'],
      content: 'This is a mock detailed description of my homelab project.',
    },
    {
      id: '3d-renderer',
      title: '3D Renderer',
      description: 'A renderer that uses a frame graph approach.',
      year: '2023',
      technologies: ['cpp', 'opengl', 'vulkan'],
      content: 'This is a mock detailed description of my renderer project.',
    },
    {
      id: 'myteacher',
      title: 'myTeacher',
      description: 'An app for e-lessons.',
      year: '2023',
      technologies: ['angular', 'js', 'mysql'],
      content: 'This is a mock detailed description of the myTeacher project.',
    },
    {
      id: 'portfolio',
      title: 'myTeacher',
      description: 'An app for e-lessons.',
      year: '2023',
      technologies: ['angular', 'js', 'mysql'],
      content: 'This is a mock detailed description of my portoflio project.',
    },
  ];

  readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('project_id') ?? '')),
    { initialValue: '' }
  );

  readonly project = computed(() =>
    this.projects.find((item) => item.id === this.projectId()) ?? null
  );
}
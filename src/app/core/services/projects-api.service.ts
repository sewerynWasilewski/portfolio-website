import { Injectable } from '@angular/core';

export type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  content: string;
};

export type ProjectOverview = Omit<ProjectDetails, 'content'>;

@Injectable({ providedIn: 'root' })
export class ProjectsAPIService {
  private readonly projects: readonly ProjectDetails[] = [
    {
      id: 'homelab',
      title: 'Homelab',
      description: 'My personal space to learn and practice DevOps topics.',
      year: '2023',
      technologies: ['proxmox', 'terraform', 'ansible', 'docker', 'linux'],
      content:
        '### This is a mock detailed description of my homelab project.\n- test1\n- test2\n- test3\n```bash\nterraform apply\n```',
    },
    {
      id: '3d-renderer',
      title: '3D Renderer',
      description: 'A renderer that uses a frame graph approach.',
      year: '2023',
      technologies: ['cpp', 'opengl', 'vulkan'],
      content:
        '### This is a mock detailed description of my renderer project.\n- test1\n- test2\n- test3\n```cpp\nint main() {}\n```',
    },
    {
      id: 'myteacher',
      title: 'myTeacher',
      description: 'An app for e-lessons.',
      year: '2023',
      technologies: ['angular', 'js', 'mysql'],
      content:
        '### This is a mock detailed description of my myTeacher project.\n- test1\n- test2\n- test3\n```ts\nconsole.log("myteacher");\n```',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'My personal portfolio website.',
      year: '2023',
      technologies: ['angular', 'js', 'css'],
      content:
        '### This is a mock detailed description of my portfolio project.\n- test1\n- test2\n- test3\n```ts\nconsole.log("portfolio");\n```',
    },
  ];

  getAllProjects(): ProjectOverview[] {
    return this.projects.map(({ content, ...rest }) => rest);
  }

  getProjectDetails(projectId: string): ProjectDetails | null {
    return this.projects.find((item) => item.id === projectId) ?? null;
  }

  getProjectOverview(projectId: string): ProjectOverview | null {
    const project = this.getProjectDetails(projectId);

    if (!project) {
      return null;
    }

    const { content, ...rest } = project;
    return rest;
  }

  getProjectsByTechnology(tech: string): ProjectOverview[] {
    const normalizedTech = tech.trim().toLowerCase();

    return this.getAllProjects().filter((project) =>
      project.technologies.some((item) => item.toLowerCase() === normalizedTech)
    );
  }

  getFeaturedProjects(limit = 3): ProjectOverview[] {
    return this.getAllProjects().slice(0, limit);
  }
}
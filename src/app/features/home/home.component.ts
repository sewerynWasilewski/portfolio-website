import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsAPIService, ProjectOverview } from '../../core/services/projects-api.service';

type Technology = {
  name: string;
  icon: string;
  query: string;
};

type HomeProject = ProjectOverview & {
  href: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly projectsService = inject(ProjectsAPIService);

  readonly technologies: Technology[] = [
    { name: 'Angular', icon: 'assets/icons/angular.svg', query: 'angular' },
    { name: 'Ansible', icon: 'assets/icons/ansible.svg', query: 'ansible' },
    { name: 'AWS', icon: 'assets/icons/aws.svg', query: 'aws' },
    { name: 'GCP', icon: 'assets/icons/gcp.svg', query: 'gcp' },
    { name: 'Azure', icon: 'assets/icons/azure.svg', query: 'azure' },
    { name: 'Cloudflare', icon: 'assets/icons/cloudflare.svg', query: 'cloudflare' },
    { name: 'DigitalOcean', icon: 'assets/icons/digital-ocean.svg', query: 'digital-ocean' },
    { name: 'Terraform', icon: 'assets/icons/terraform.svg', query: 'terraform' },
    { name: 'Bash', icon: 'assets/icons/bash.svg', query: 'bash' },
    { name: 'C', icon: 'assets/icons/c.svg', query: 'c' },
    { name: 'C++', icon: 'assets/icons/cpp.svg', query: 'cpp' },
    { name: 'JavaScript', icon: 'assets/icons/js.svg', query: 'js' },
    { name: 'Python', icon: 'assets/icons/python.svg', query: 'python' },
    { name: 'Git', icon: 'assets/icons/git.svg', query: 'git' },
    { name: 'GitLab', icon: 'assets/icons/gitlab.svg', query: 'gitlab' },
    { name: 'Grafana', icon: 'assets/icons/grafana.svg', query: 'grafana' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg', query: 'mysql' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg', query: 'postgresql' },
    { name: 'Kubernetes', icon: 'assets/icons/kubernetes.svg', query: 'kubernetes' },
    { name: 'Docker', icon: 'assets/icons/docker.svg', query: 'docker' },
    { name: 'Proxmox', icon: 'assets/icons/proxmox.svg', query: 'proxmox' },
    { name: 'Linux', icon: 'assets/icons/linux.svg', query: 'linux' },
    { name: 'Ubuntu', icon: 'assets/icons/ubuntu.svg', query: 'ubuntu' },
    { name: 'Raspberry Pi', icon: 'assets/icons/raspberry-pi.svg', query: 'raspberry-pi' },
    { name: 'Vulkan', icon: 'assets/icons/vulkan.svg', query: 'vulkan' },
    { name: 'OpenGL', icon: 'assets/icons/opengl.svg', query: 'opengl' },
  ];

  readonly projects: HomeProject[] = this.projectsService
    .getFeaturedProjects(3)
    .map((project) => ({
      ...project,
      href: `/projects/${project.id}`,
    }));

  trackByTech(index: number, tech: Technology): string {
    return tech.query;
  }

  trackByProject(index: number, project: HomeProject): string {
    return project.id;
  }
}
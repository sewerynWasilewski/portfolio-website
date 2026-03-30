import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Technology = {
  name: string;
  icon: string;
  query: string;
};

type Project = {
  title: string;
  description: string;
  href: string;
  year: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly technologies: Technology[] = [
    { name: 'Angular', icon: 'assets/icons/angular.svg', query: 'angular' },
    { name: 'Ansible', icon: 'assets/icons/ansible.svg', query: 'ansible' },
    { name: 'AWS', icon: 'assets/icons/aws.svg', query: 'aws' },
    { name: 'Azure', icon: 'assets/icons/azure.svg', query: 'azure' },
    { name: 'Bash', icon: 'assets/icons/bash.svg', query: 'bash' },
    { name: 'C', icon: 'assets/icons/c.svg', query: 'c' },
    { name: 'C++', icon: 'assets/icons/cpp.svg', query: 'cpp' },
    { name: 'Cloudflare', icon: 'assets/icons/cloudflare.svg', query: 'cloudflare' },
    { name: 'DigitalOcean', icon: 'assets/icons/digital-ocean.svg', query: 'digital-ocean' },
    { name: 'Docker', icon: 'assets/icons/docker.svg', query: 'docker' },
    { name: 'Git', icon: 'assets/icons/git.svg', query: 'git' },
    { name: 'GitLab', icon: 'assets/icons/gitlab.svg', query: 'gitlab' },
    { name: 'GCP', icon: 'assets/icons/gcp.svg', query: 'gcp' },
    { name: 'Grafana', icon: 'assets/icons/grafana.svg', query: 'grafana' },
    { name: 'JavaScript', icon: 'assets/icons/js.svg', query: 'js' },
    { name: 'Kubernetes', icon: 'assets/icons/kubernetes.svg', query: 'kubernetes' },
    { name: 'Linux', icon: 'assets/icons/linux.svg', query: 'linux' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg', query: 'mysql' },
    { name: 'OpenGL', icon: 'assets/icons/opengl.svg', query: 'opengl' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg', query: 'postgresql' },
    { name: 'Proxmox', icon: 'assets/icons/proxmox.svg', query: 'proxmox' },
    { name: 'Python', icon: 'assets/icons/python.svg', query: 'python' },
    { name: 'Raspberry Pi', icon: 'assets/icons/raspberry-pi.svg', query: 'raspberry-pi' },
    { name: 'Terraform', icon: 'assets/icons/terraform.svg', query: 'terraform' },
    { name: 'Ubuntu', icon: 'assets/icons/ubuntu.svg', query: 'ubuntu' },
    { name: 'Vulkan', icon: 'assets/icons/vulkan.svg', query: 'vulkan' },
  ];

  readonly projects: Project[] = [
    {
      title: 'Homelab',
      description: 'My personal space to learn and practice DevOps topics and also host this very website.',
      href: '/projects/homelab',
      year: '2023',
    },
    {
      title: '3D Renderer',
      description: 'A renderer that uses a frame graph approach to manage different GPU resources.',
      href: '/projects/3d-renderer',
      year: '2023',
    },
    {
      title: 'myTeacher',
      description: 'An app for e-lessons where teachers get all they need to teach their students online.',
      href: '/projects/myteacher',
      year: '2023',
    },
  ];

  trackByTech(index: number, tech: Technology): string {
    return tech.query;
  }

  trackByProject(index: number, project: Project): string {
    return project.title;
  }
}
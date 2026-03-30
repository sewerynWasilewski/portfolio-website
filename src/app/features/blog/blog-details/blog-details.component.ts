import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

type BlogDetails = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  technologies: string[];
  content: string;
};

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  private readonly route = inject(ActivatedRoute);

  readonly blogs: readonly BlogDetails[] = [
    {
      id: 'terraform-state-basics',
      title: 'Terraform State Basics',
      excerpt: 'A short introduction to Terraform state.',
      date: '2026-03-20',
      technologies: ['terraform'],
      content: 'This is a mock detailed blog post about Terraform state.',
    },
    {
      id: 'ansible-role-structure',
      title: 'How I Structure Ansible Roles',
      excerpt: 'A practical way to keep roles clean.',
      date: '2026-03-18',
      technologies: ['ansible', 'linux'],
      content: 'This is a mock detailed blog post about Ansible role structure.',
    },
    {
      id: 'proxmox-vm-networking',
      title: 'Proxmox VM Networking Notes',
      excerpt: 'A few lessons learned while setting up networking.',
      date: '2026-03-15',
      technologies: ['proxmox', 'linux'],
      content: 'This is a mock detailed blog post about Proxmox networking.',
    },
  ];

  readonly blogId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('blog_id') ?? '')),
    { initialValue: '' }
  );

  readonly blog = computed(() =>
    this.blogs.find((item) => item.id === this.blogId()) ?? null
  );
}
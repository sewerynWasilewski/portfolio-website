import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  technologies: string[];
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  private readonly route = inject(ActivatedRoute);

  readonly blogs: readonly BlogPost[] = [
    {
      id: 'terraform-state-basics',
      title: 'Terraform State Basics',
      excerpt: 'A short introduction to how Terraform state works and what to watch out for.',
      date: '2026-03-20',
      technologies: ['terraform'],
    },
    {
      id: 'ansible-role-structure',
      title: 'How I Structure Ansible Roles',
      excerpt: 'A practical way to keep Ansible roles clean and reusable.',
      date: '2026-03-18',
      technologies: ['ansible', 'linux'],
    },
    {
      id: 'proxmox-vm-networking',
      title: 'Proxmox VM Networking Notes',
      excerpt: 'A few lessons learned while setting up bridges, NAT and internal networks.',
      date: '2026-03-15',
      technologies: ['proxmox', 'linux'],
    },
  ];

  readonly techFilter = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => params.get('tech')?.trim().toLowerCase() ?? '')
    ),
    { initialValue: '' }
  );

  readonly filteredBlogs = computed(() => {
    const tech = this.techFilter();

    if (!tech) {
      return this.blogs;
    }

    return this.blogs.filter((post) =>
      post.technologies.some((item) => item.toLowerCase() === tech)
    );
  });

  trackByBlog(index: number, blog: BlogPost): string {
    return blog.id;
  }
}
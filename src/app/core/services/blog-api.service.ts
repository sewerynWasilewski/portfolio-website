import { Injectable } from '@angular/core';

export interface Blog { 
  name: string, 
  
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  postNewBlogPost(): void{ 

  }

  editBlogPost(): void{ 

  }

  deleteBlogPost(): void{ 

  }
}

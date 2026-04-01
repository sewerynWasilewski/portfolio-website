import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MarkdownRendererComponent } from '../markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-markdown-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MarkdownRendererComponent],
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.css',
})
export class MarkdownEditorComponent {
  content = new FormControl<string>(`# Hello

To jest przykładowy wpis.

## Kod

\`\`\`ts
const hello = 'world';
console.log(hello);
\`\`\`

:::note
To jest note box.
:::

:::warning
To jest warning box.
:::

![Przykład obrazu](https://placehold.co/900x450)
`, { nonNullable: true });
}
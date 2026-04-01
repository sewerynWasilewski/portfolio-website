import { Component } from '@angular/core';
import { MarkdownEditorComponent } from '../../shared/components/markdown-editor/markdown-editor.component';

@Component({
  selector: 'app-markdown-playground',
  standalone: true,
  imports: [MarkdownEditorComponent],
  templateUrl: './markdown-playground.component.html',
  styleUrl: './markdown-playground.component.css',
})
export class MarkdownPlaygroundComponent {}
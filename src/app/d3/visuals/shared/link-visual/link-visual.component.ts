import { Component, Input } from '@angular/core';
import { Link } from '../../../';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        stroke-width="20"
        [attr.x1]="link.source.x + link.source.r/2"
        [attr.y1]="link.source.y + link.source.r/2"
        [attr.x2]="link.target.x + link.target.r/2"
        [attr.y2]="link.target.y + link.target.r/2"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}

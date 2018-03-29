import { Component, Input } from '@angular/core';
import { Node } from '../../../';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g>
      <svg:rect
        class="node"
        [attr.fill]="node.color"
        [attr.height]="node.r"
        [attr.width]="node.r"
        [attr.x]="node.x"
        [attr.y]="node.y">
      </svg:rect>
      <svg:text
        [attr.x]="node.x + node.r/2"
        [attr.y]="node.y + node.r/2"
        class="node-name"
        [attr.font-size]="node.r * 0.6">
        {{node.value}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}

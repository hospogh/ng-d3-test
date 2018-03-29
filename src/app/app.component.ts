import {Component} from '@angular/core';
import APP_CONFIG from './app.config';
import {Node, Link} from './d3';
import {ITournament, ITournamentMapped} from './models/ITournament';
import TOURNAMET_DATA from './tournamets/fakeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const count = APP_CONFIG.COUNT;
    const getIndex = number => number - 1;

    /** constructing the nodes and links arrays */
    TOURNAMET_DATA.forEach(v => {
      const sourceNode = new Node(v.id, v.value);
      this.nodes.push(sourceNode);
      if (v.parentId) {
        const targetNode = this.nodes.find(n => n.id === v.parentId);
        targetNode.linkCount++;
        sourceNode.linkCount++;
        this.links.push(new Link(v.id, v.parentId));
      }
    });
  }

  /*
    mapFromData(data: ITournament[]): ITournamentMapped[] {
      return data.reduce((acc, val, ind, arr) => {
        const children = arr.filter(elem => {
          const status = elem.parentId === val.id;
          return ;
        });
        acc.push({value: val.value, children});

        return acc;
      }, []);
    }*/
}

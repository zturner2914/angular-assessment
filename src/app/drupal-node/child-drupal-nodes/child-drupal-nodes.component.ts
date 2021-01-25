import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-drupal-nodes',
  templateUrl: './child-drupal-nodes.component.html',
  styleUrls: ['./child-drupal-nodes.component.scss']
})
export class ChildDrupalNodesComponent implements OnInit {
  @Input() drupalnodes;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { DrupalnodeService } from '../shared/services/drupalnode.service';
let drupalNode;
@Component({
  selector: 'app-drupal-node',
  templateUrl: './drupal-node.component.html',
  styleUrls: ['./drupal-node.component.scss']
})
export class DrupalNodeComponent implements OnInit {
  drupalnodes = null;
  constructor(private drupalnodeService: DrupalnodeService) { }

  ngOnInit(): void {
    this.drupalnodeService.getNode('10386').subscribe(drupalnodes => this.drupalnodes = drupalnodes);
  }
  

}

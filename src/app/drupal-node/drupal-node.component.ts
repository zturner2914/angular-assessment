import { Component, OnInit } from '@angular/core';
import { DrupalnodeService } from '../shared/services/drupalnode.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-drupal-node',
  templateUrl: './drupal-node.component.html',
  styleUrls: ['./drupal-node.component.scss']
})
export class DrupalNodeComponent implements OnInit {
  drupalnodes = null;
  id = null;

  childrenData = [
    { name: 'Zach'}
  ];  
  constructor(
    private drupalnodeService: DrupalnodeService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.drupalnodeService.getNode(this.id).subscribe(drupalnodes => this.drupalnodes = drupalnodes);
  }
  

}

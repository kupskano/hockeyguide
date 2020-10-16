import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.page.html',
  styleUrls: ['./guide-details.page.scss'],
})
export class GuideDetailsPage implements OnInit {
  id: any;
  title: any;
  rule1: any;
  rule2: any;
  rule3: any;
  rule4: any;
  ImageUrl: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.rule1 = this.actRoute.snapshot.paramMap.get('rule1');
    this.rule2 = this.actRoute.snapshot.paramMap.get('rule2');
    this.rule3 = this.actRoute.snapshot.paramMap.get('rule3');
    this.rule4 = this.actRoute.snapshot.paramMap.get('rule4');
    this.ImageUrl = this.actRoute.snapshot.paramMap.get('ImageUrl');
  }

}

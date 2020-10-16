import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-typehere-details',
  templateUrl: './typehere-details.page.html',
  styleUrls: ['./typehere-details.page.scss'],
})
export class TypehereDetailsPage implements OnInit {
  id: any;
  title:any;
  tag1: any;
  tag2: any;
  tag3: any;
  tag4: any;
  tag5: any;
  tag6: any;
  tag7: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.tag1 = this.actRoute.snapshot.paramMap.get('tag1');
    this.tag2 = this.actRoute.snapshot.paramMap.get('tag2');
    this.tag3 = this.actRoute.snapshot.paramMap.get('tag3');
    this.tag4 = this.actRoute.snapshot.paramMap.get('tag4');
    this.tag5 = this.actRoute.snapshot.paramMap.get('tag5');
    this.tag6 = this.actRoute.snapshot.paramMap.get('tag6');
    this.tag7 = this.actRoute.snapshot.paramMap.get('tag7');
  }

}

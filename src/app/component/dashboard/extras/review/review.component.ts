import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../../../service/review.service';
declare var $: any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  data : any;
   

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  	this.reviewService.index().subscribe(m => 
    {
      this.data = m;
      setTimeout(() => $('#datatable').DataTable(), 1000);
    });
  	
  	
  }

}

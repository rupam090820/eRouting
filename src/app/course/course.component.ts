import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import DataShare:
import { DataShare } from '../Shared/DataShare';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public studentList:any=[];

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.studentList=DataShare.studentInfo.map((item:any)=>{
      return item['course'];
    });
    console.log(this.studentList);
  }
  select(std_id:any){
  console.log('courseStd'+std_id);
  this.route.navigate(['student',std_id]);
  // this.route.navigateByUrl('student');
  }
}

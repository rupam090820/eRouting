import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import DataShare :
import { DataShare } from '../Shared/DataShare';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public studentData: any = [];
  public studentList: any = [];
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let student_id = this.actRoute.snapshot.paramMap.get('id');
    console.log('stdCom' + student_id);
    //  this.studentData=DataShare.studentInfo.find((item:any)=>{
    //   return item.std_id==student_id;
    //  });
    //  console.log(this.studentData);


    if (student_id != '' && student_id != null) {
      this.studentData = DataShare.studentInfo.find((item: any) => {
        return item.std_id == student_id
      });
      console.log(this.studentData);
    }

    else {
      this.studentList = DataShare.studentInfo;
      console.log(this.studentList);
    }

  }

}

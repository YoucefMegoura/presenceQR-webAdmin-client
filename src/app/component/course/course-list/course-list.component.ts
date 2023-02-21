import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../model/course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courssList: Course[] | null | undefined;

  public myAngularxQrCode: string = "";


  showModal: boolean = false;

  constructor(public courseService: CourseService) {

    this.myAngularxQrCode = 'Your QR code data string';

  }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(value => {
      this.courssList = value;
    });
  }


  toggleModal(course: Course | null){
    if (course) {
      this.myAngularxQrCode = JSON.stringify(course);
    }
    this.showModal = !this.showModal;

  }

}

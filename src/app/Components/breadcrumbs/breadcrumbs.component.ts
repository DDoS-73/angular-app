import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  title = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    // });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const url = val.url.split('/');
        if (url[2]?.length > 10) {
          this.title = this.courseService.getItemByID(url[2]).title;
        } else {
          this.title = '';
        }
      }
    });
  }
}

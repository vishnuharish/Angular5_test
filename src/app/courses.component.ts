import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl:'./courses.component.html'
})
export class CourseComponent {
  courses = [
            {"name": "Introduction",
               "description1": {
                 "title":"What is Angular",
                 "content":"Angular is a Front-End framework built with TypeScript",
                 "code":""
               },
               "description2": {
                 "title":"Pre-requisites for Angular",
                 "content":" Basic Knowledge About TypeScript and JavaScript.",
                 "code":""
               },
               "description3": {
                 "title":" Basic Building Blocks of Angular",
                 "content":"Components, Template, Data Binding, Service ",
                 "code":""
               },
               "description4": {
                 "title":"Course Contents",
                 "content":" Installation of angular and building Basic application on angular",
                 "code":"",
               }
             },
             {"name": "Installation",
                "description1": {
                  "title":"NPM Package",
                  "content":"To Install angular",
                  "code": 'npm install -g @angular/cli'
                },
                "description2": {
                  "title":"First app in Angular ",
                  "content":"To Create a new app use",
                  "code":'ng new <your-app-name>'
                },
                "description3": {
                  "title":"Publish the App",
                  "content":"To Bring up the app in browser. ",
                  "code":'ng serve'
                },
                "description4": {
                  "title":"What's Next?",
                  "content":"Please copy the tutorial from ",
                  "code":"\\\\pcz-ee209448\\tutorials\\codeschool angular"
                }
              }
              ]
test : string = "";
}

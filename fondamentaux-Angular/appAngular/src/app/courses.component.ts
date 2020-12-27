import { Component } from "@angular/core";

@Component({
    selector:  'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {

    title ="la liste de mes cours";
    courses =['laravel','symphony','Angular','VueJS','FireBase'];
    getTitle(){
        return this.title;
    }
}
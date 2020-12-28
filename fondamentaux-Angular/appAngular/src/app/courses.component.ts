import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:  'courses',
    template: `

<div class="container">
<ul>
<li class="list-group-item">Title: {{ course.titre | lowercase | uppercase}}</li>
<li class="list-group-item">Ratting: {{ course.avis |number:'2.2-2' }}</li>
<li class="list-group-item">Students: {{ course.participants }}</li>
<li class="list-group-item">Price: {{ course.prix | currency: 'CAD': 'code' :'3.1-1'}}</li>      <!-- : 'code' :'symbol'-->
<li class="list-group-item">ReleaseDate: {{ course.publicationDate | date :'fullDate' }}</li>     <!--  'shortDate'/ 'yyyy-mm-dd'-->
</ul>
</div>

    <h1 [style.backgroundColor]="isActive ? 'blue':'red'">{{ title }}</h1>
    <h2 [textContent]="seconde"></h2>
    <!-- <img src="{{ image }}" [alt]="title"> -->
     <img [src]="image" [alt]="title">
     <!-- <button class="btn btn-primary" [class.active]="isActive">submit</button> -->
    <div (click)="onClickDiv()">
     <button (click)="onClick($event)" class="btn btn-primary" >submit</button>
     </div>

    <!-- <input #email type="text" (keyup.enter)="onKeyUp(email)">-->
    <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()">
    <!-- l'utilisation du ngmodel pour que le template soit influencer par le component et le component par le template c'est la notion du tow way databinding [()]-->
    <p>{{ email }}</p> 
    
    `
})
export class CoursesComponent {
    isActive= false;
    title ="la liste de mes cours";
    seconde="les proprités binding";
    image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_s5kRgyHbNqE9ta7c5JGkMfbkEa5G4odqw&usqp=CAU";
    courses ;
    constructor (coursesService: CoursesService){
       
        this.courses = coursesService.getCourses();
    }
    onClick($event){
        $event.stopPropagation();
        console.log('button clicked',$event);
    }
    onClickDiv() {
        console.log('div is clicked');
    }
    email: string = "me@gmail.com";
    onKeyUp(){
      // console.log('angular key');
      // console.log($event.target.value);  pour les bonne pratique on fait d'une autre maniere
      // creation d'un pointeur sur le tag html ici c'est :#email, pour le récupererer , email.value
     // console.log(email.value);

     console.log(this.email);
    }
    getTitle(){
        return this.title;
    }


    course ={
        titre: 'Formation Complete sur angular',
        avis:  '4.4764',
        participants: 123,
        prix: 455.22,
        publicationDate: new Date(2020, 12, 27)
    }
}
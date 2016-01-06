    import { Component,View ,enableProdMode,Output, EventEmitter} from 'angular2/core';
    import {CORE_DIRECTIVES,FORM_DIRECTIVES  } from 'angular2/common';
    import { bootstrap } from 'angular2/platform/browser';
    import { HerosFactory } from './heros-factory';
    import { Hero } from './hero';
    enableProdMode();
    @Component({
        selector: 'my-app',
        template:`
     <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [ngClass]="getSelectedClass(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>{{selectedHero.name}}
    <div><input [(ngModel)]="selectedHero.name"  placeholder="name"></div>
  </div>
  <div>`,
     styles:[`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
      `]
  
  ,    directives: [CORE_DIRECTIVES,FORM_DIRECTIVES]
    })
  
  export  class AppComponent {
    
     constructor(){
         
         HerosFactory.getAll().then((data:Hero[])=>
             this.heroes=data         
         )
     }	  
     public selectedHero :Hero;
     
     getSelectedClass(hero: Hero) {
      return { 'selected': hero === this.selectedHero };
    }
     
     onSelect(hero: Hero) { 
       this.selectedHero = hero; 
      }
     
     
     
        public heroes : Hero[];
      
       
	 }
    var HEROES: Hero[] = [
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Tornado" },
      { "id": 21, "name": "Torn" }
    ];
   
    
    
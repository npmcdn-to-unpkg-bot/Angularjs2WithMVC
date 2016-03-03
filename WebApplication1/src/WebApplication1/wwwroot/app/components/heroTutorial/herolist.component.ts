﻿import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/src/common/directives/core_directives";
import {ApiHeroService} from "./apihero.service";
import {Hero} from './hero';
import {HeroDetailsComponent} from './herodetails.component';

@Component({
	selector: "heroes",
	templateUrl: "partial/hero",
	//providers: [ApiHeroService],
	directives: [CORE_DIRECTIVES, HeroDetailsComponent],
	styles: [`
	  .selected {
		background-color: #CFD8DC !important;
		color: green;
	  }
	  .heroes {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 10em;
	  }
	  .heroes li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
	  }
	  .heroes li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
	  }
	  .heroes li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
	  }
	  .heroes .text {
		position: relative;
		top: -3px;
	  }
	  .heroes .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
	  }
	`]
})
export class HeroListComponent implements OnInit {
	constructor(private service: ApiHeroService) { }

	public heros: Hero[];
	public selectedhero: Hero;

	ngOnInit(){
		this.getHeros();
	}

	getHeros() {
		this.service.get(json=> {
			if (json) {
				if (!this.heros) {
					this.heros = [];
				}
				this.heros = json.heros;
				//console.log(this.heros);
			}
		});
	}

	getStaticHeros() {
		this.heros =
			[		
				{ "id": 11, "name": "Mr. Nice" },
				{ "id": 12, "name": "Narco" },
				{ "id": 13, "name": "Bombasto" },
				{ "id": 14, "name": "Celeritas" },
				{ "id": 15, "name": "Magneta" },
				{ "id": 16, "name": "RubberMan" },
				{ "id": 17, "name": "Dynama" },
				{ "id": 18, "name": "Dr IQ" },
				{ "id": 19, "name": "Magma" },
				{ "id": 20, "name": "Tornado" }
			];

	}

	onselect(hero: Hero) {
		this.selectedhero = hero;
		console.log(this.selectedhero.name);
	}
}
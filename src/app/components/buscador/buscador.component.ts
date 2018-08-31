import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private _heroesService:HeroesService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);

      this.heroes = this._heroesService.findHeroes(params['termino']);

      console.log(this.heroes);

    });
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}

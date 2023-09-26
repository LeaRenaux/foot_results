import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/common/interfaces/match';
import { MatchService } from 'src/app/common/services/match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
  providers:[MatchService]
})
export class MatchDetailComponent implements OnInit {
  
  match!: Match ;

  constructor(
    private matchService : MatchService, 
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id']
   
    this.match = this.matchService.show(id)
  }
  

}

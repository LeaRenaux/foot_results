import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Match } from '../interfaces/match'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'
import { matches } from '../mocks/matches'

@Injectable({
  providedIn: 'root'
})

export class MatchService {
  constructor(private http: HttpClient) { }

  list():Match[] {
    // API is down
    // return this.http.get<Match[]>(environment.apiBaseUrl + 'matches').pipe(
    //   map((res: Match[]) => {
    //     return res
    //   })
    // )
    return matches
  }

  show(id: number): Match {
    // API is down
    // return this.http.get<Match>(environment.apiBaseUrl + 'matches/' + id ).pipe(
    //   map((res: Match) => {
    //     return res
    //   })
    // )
    const match = matches.find((match) => match.id = id)
    console.log(id)
    console.log(match)
    return match! 
  }
}

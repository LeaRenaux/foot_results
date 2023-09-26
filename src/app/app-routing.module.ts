import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component';
import { MatchListComponent } from './resources/matches/match-list/match-list.component';

const routes: Routes = [
  {
    path: "",
    component: MatchListComponent
  },
  {
    path: "matches/:id",
    component: MatchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

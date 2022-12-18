import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './components/members/members.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

const routes: Routes = [
  {
    path: '', component: MembersComponent
  },
  {
    path: 'detail/:id', component: MemberDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
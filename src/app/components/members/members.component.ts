import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  showSpinner = true;
  members=[];

  constructor( private memberService: MembersService) { }

  ngOnInit(): void {
  }

  getMembers() {
    this.memberService.getUsers()
    .subscribe((res: any) => {
      const newRes = res.data.concat(res.data);
      this.members = newRes;
      this.showSpinner = false;
    });
  }
  
}


// export interface GithubApi {
//   items: GithubIssue[];
//   total_count: number;
// }

// export interface GithubIssue {
//   created_at: string;
//   number: string;
//   state: string;
//   title: string;
// }

import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/classes/member';
import { MembersService } from 'src/app/services/members.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  showSpinner = true;
  membersList: Array<Member> = [];
  member: Member = new Member;

  constructor(private memberService: MembersService,private router:Router) {}

  ngOnInit() {
    this.memberService.getUsers().subscribe(
      myData => {
        this.membersList = myData;
        this.showSpinner = false;
      },
      myErr => { alert(myErr.message); });
  }

   getMemberById(id: number) {
    this.memberService.getUser(id).subscribe(
      myData => {
        this.member = myData;},
      myErr => {
        alert(myErr.message);
      });
  }
}

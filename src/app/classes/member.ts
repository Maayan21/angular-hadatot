export class Member {
  constructor(
    public id: string = '',
    public name: string = '',
    public birthDate: Date = new Date(),
    public country: string = '',
    public zip: number = 0,
    vipMember: boolean = false
  ) {}
}

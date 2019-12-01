export class Qoutes {
  showDescription: boolean;
  constructor(public id: number,public author: string,public qoute: string,public datecreated: Date, public upvotes: number, public downvotes: number, public submited_by: string){
    this.showDescription=false;
  }
}
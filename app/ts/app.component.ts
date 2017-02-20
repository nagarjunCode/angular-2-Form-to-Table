import {Component} from 'angular2/core';


@Component({

    selector: 'my-app',
    templateUrl: 'app/ts/app.components.html'
})

export class AppComponent {
editMode:boolean=false;


tname:string;
temail:string;
tage:string;
tphno:string;
tId : number;
tdata:TableData [];

constructor(){
  
this.tdata=[];

}

appendOrReplace(name: string,email: string, age: string, phno: string){

      if(this.editMode){
     
      this.tdata[this.tId].name=this.tname;
      this.tdata[this.tId].email=this.temail;
      this.tdata[this.tId].age=this.tage;
      this.tdata[this.tId].phno=this.tphno;
      this.editMode=false;
      
      }

      else
       {
      this.tdata.push( new TableData(name,email,age,phno) );
      console.log(this.tdata);
      
       }

      this.tname="";
      this.tage="";
      this.tphno="";
      this.temail="";
   
}




deleteRow(i){
      this.tdata.splice(i,1);

      
  }

editRow(i){

      this.tname=this.tdata[i].name;
      this.temail=this.tdata[i].email;
      this.tage=this.tdata[i].age;
      this.tphno=this.tdata[i].phno;
      this.editMode=true;
      this.tId = i;

  }

}


export class TableData{

	name: string;
    email: string;
    age: string;
    phno: string;
    constructor(name:string, email:string,age:string,phno:string){
        
        this.name = name;
        this.email = email;
        this.age = age;
        this.phno = phno;
        
    }
}

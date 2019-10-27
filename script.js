var list = {
name : "suman",
lastname : "dhakal",
show:function(){
  document.write(this.name +" " + this.lastname)
}
}


class cals{
constructor(a,b){
  console.log(a + b);
}
name = "suman";

get(){
  return this.name ;
}


}



//list.show();
var obj = new cals();
var name = obj.get();
console.log(name);

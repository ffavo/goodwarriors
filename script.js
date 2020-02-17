var wrapperEle = document.body.querySelector(".wrapper");



var warriorList = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

warriorList = warriorList.filter((warrior) => {
  let goodWarrior = true
  if (warrior.health < 10){
    goodWarrior = false
  }
  if (warrior.damage < 2){
    goodWarrior = false
  }
  if (warrior.warrior == false){
    goodWarrior = false
  }
  return goodWarrior
 
});

 


for(var i=0; i < warriorList.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=warriorList[i].name+" " +warriorList[i].damage;

 if (warriorList[i].name == "Mavis"){
    ele.style.color = "red";
  }else{
    ele.style.color = "black";
  }
  wrapperEle.appendChild(ele);
}
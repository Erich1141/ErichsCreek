

export function intDate(date) {
  const reformatDate = new Date(date);

  const dateOnly = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(reformatDate);

  const timeOnly = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(reformatDate);

  console.log("Date:", dateOnly);
  console.log("Time:", timeOnly);

  return { dateOnly, timeOnly };
}

export function grabStations(box){
  var data=localStorage.getItem("list")
  var result=JSON.parse(data)
 for (var i of result){
  var map=new Map(Object.entries(i))
var create=document.createElement("div")
create.style.whiteSpace="pre-wrap"
var length=map.get("value").length;
if(length>4){
var final=20+(4-length)
length=final
console.log(length)

}
else{
  length=20
  console.log(length)
}

var text=`${map.get("value")}${" ".repeat(length)}${map.get("text")}`

create.textContent=text
box.append(create)


  
 }







}

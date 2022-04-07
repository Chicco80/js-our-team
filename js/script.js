let team = [
{
    img :"../img/wayne-barnett-founder-ceo.jpg",
    fullname : "Weyne Barnett",
    role : "Founder & CEO"

},
{
    img :"../img/angela-caroll-chief-editor.jpg",
    fullname : "Angela Carrol",
    role : "Chief Editor"

},
{
    img :"../img/walter-gordon-office-manager.jpg",
    fullfullname : "Walter Gordon",
    role : "Office Manager"

},
{
    img :"../img/angela-lopez-social-media-manager.jpg",
    fullname : "Angela Lopez",
    role : "Social Media Manager"

},
{
    img :"../img/scott-estrada-developer.jpg",
    fullname : "Scott Estrada",
    role : "Developer"

},
{
    img :"../img/barbara-ramos-graphic-designer.jpg",
    fullname : "Barbara Ramos",
    role : "Graphic Desiner"

}

];
// console.log(team)

let template ="";

for(let i = 0; i < team.length; i++){
    // console.log(team[i].img)
    // console.log(team[i].role)
    for (let key in team[i]){
    // console.log(key);
    // console.log(team[i][key])
    template = `
    <div class="team-card">
      <div class="card-image">
       <img src="${team[i].img}"/>
    </div>
     <div class="card-text">
      <h3>${team[i].fullname}</h3>
      <p>${team[i].role}</p>
     </div>
    </div> 
      `;
      
      
  
    }
    let teamContainer = document.querySelector(".team-container");
    console.log("leggi prima",template)
    teamContainer.innerHTML += template;
    console.log("leggi",template)

}

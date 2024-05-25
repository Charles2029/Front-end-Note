

// Add your code here
const favoriteBand={

    name:"Queen-Band",
    nationality:"London, England",
    genre:"	Rock",
    members:4,
    formed:1970,
    split:false,
    albums:[
        {name:"queen",
            released:1973
        },
        {name:"Made in Heaven",

            released:1995
        }],

}
let bandInfo =`${favoriteBand.name} is a ${favoriteBand.nationality} band formed in ${favoriteBand.formed}.
 They play ${favoriteBand.genre} music and have ${favoriteBand.members} members.
  Their first album, "${favoriteBand.albums[0].name}", was released in ${favoriteBand.albums[0].released}.`;
;
// Don't edit the code below here!

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
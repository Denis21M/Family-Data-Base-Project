const members = [
    {name:"Bacon", 
    BN: "BN:  Bacon Chinazom Mmakogu",
    DOB: "DOB:  14.07.1990",
    POB: "POB:  Uli Nigeria",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Hobbies/Likes:  Frontend development, Football",
    image:"Bacon.jpg",
    }, 
    
    {name:"Denisa", 
    BN: "BN:  Denisa Parmova",
    DOB: "DOB:  13.06.1992",
    POB: "POB:  Ostrava Czech Rep.",
    Nationality: "Nationality:  Czech",
    Hobbies: "Hobbies/Likes:  Cooking, Mobile Games, Baking",
    image:"./Deni.jpg",
    },
                
    {name:"Sebastian", 
    BN: "BN:  Sebastian Rostislav Parma",
    DOB: "DOB:  02.07.2015",
    POB: "POB:  Ostrava Czech Rep.",
    Nationality: "Nationality:  Czech",
    Hobbies: "Hobbies/Likes:  Basket Ball, Video Games, Building things",
    image:"./sebastian.jpg",
    }, 
                
    {name:"Denis", 
    BN: "BN:  Denis Chinazom Mmakogu",
    DOB: "DOB:  18.02.2021",
    POB: "POB:  Ostrava Czech",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Hobbies/Likes:  Lego, Football, Chocolates",
    image:"./Nazom.jpg",
    }, 
                
    {name:"Christian", 
    BN: "BN:  Christian Isioma Mmakogu",
    DOB: "DOB:  28.10.2024",
    POB: "POB:  Ostrava Czech",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Hobbies/Likes:  Sucking, Crying, Sleeping",
    image:"./Isioma.jpg",
    },

    {name:"Adolphus", 
    BN: "BN:  Adolphus Uche Mmakogu",
    DOB: "DOB:  20.01.1970",
    POB: "POB:  Uli Nigeria",
    Nationality: "Nationality:  Polish-Nigerian",
    Hobbies: "Hobbies/Likes:  Football, Philosophy, Ping pong",
    image:"./Okpara.jpg",
    },

    
    {name:"Euginia", 
    BN: "BN:  Late Mrs Ezinne E.A. Mmakogu",
    DOB: "DOB:  10.03.1951",
    POB: "POB:  Eziani, Nigeria",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Hobbies/Likes:  Farming, Bean-cake baking, Sharing Love",
    image:"./Ezinne.jpg",
        },

    {name:"Innocent", 
    BN: "BN:  Late Mr Innocent A. Mmakogu",
    DOB: "DOB:  01.01.1935",
    POB: "POB:  Uli, Nigeria",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Hobbies/Likes:  Business, News Papers, Provision",
    image:"./Amuzienwa.jpg",
    },
    ];

    function saveMembersToLocalStorage() {
        localStorage.setItem('members', JSON.stringify(members));
    }
    

    function addNewMember(name, BN, DOB, POB, Nationality, Hobbies, image) {
        const newMember = { name, BN, DOB, POB, Nationality, Hobbies, image };
        members.push(newMember);
        saveMembersToLocalStorage();
        alert('New member added successfully!');
    }

function searchFamilyMembers(){
    const search = document.getElementById("value").value;
    const output = document.getElementById("output");
    const pictures = document.getElementById("pictures");

    const birth = document.getElementById("DOB");
    const place = document.getElementById("POB");
    const country = document.getElementById("Nationality");
    const hobby = document.getElementById("hobbies");
    const onBirth = document.getElementById("BN");

    if (!search){
        alert("Please enter a first name, hint: Bacon or Denisa");
        return;
    }

    const match = members.find(member => member.name.toLowerCase() === search.toLowerCase());

        if (match){
            output.textContent = ("Hello" + " " + search + ";" +" " + "Congratulations, your name is in the family database.");
            output.style.color = "green";
            pictures.src = match.image;
            pictures.style.display = `block`;
            birth.innerHTML = match.DOB;
            place.innerHTML = match.POB;
            country.innerHTML = match.Nationality;
            hobby.innerHTML = match.Hobbies;
            onBirth.innerHTML = match.BN;
           } 
           
           else {
               output.textContent = ("Hello" + " " + search + ";" +" " + "Unfortunately, your name can NOT be found in the family database, hint: Bacon or Denisa.");
               pictures.src = "";
               pictures.style.display = ` `;
               birth.innerHTML = "";
               place.innerHTML = "";
               country.innerHTML = "";
               hobby.innerHTML = "";
               onBirth.innerHTML = "";
        }
    }

    document.getElementById("personal").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
       
        const name = document.getElementById("name").value.trim();
        const BN = `BN:  ${document.getElementById("BN").value.trim()}`;
        const DOB = `DOB:  ${document.getElementById("DOB").value.trim()}`;
        const POB = `POB:  ${document.getElementById("POB").value.trim()}`;
        const Nationality = `Nationality:  ${document.getElementById("Nationality").value.trim()}`;
        const Hobbies = `Hobbies:  ${document.getElementById("hobbies").value.trim()}`;
        const image = document.getElementById("image").value.trim();
    
        
        const newMember = {
            name,
            BN,
            DOB,
            POB,
            Nationality,
            Hobbies,
            image
        };
    
        
        members.push(newMember);
    
      
        console.log("New member added:", newMember);
        console.log("Updated members array:", members);
    
    
        document.getElementById("personal").reset();

        addNewMember(name, BN, DOB, POB, Nationality, Hobbies, image);
    });
    
    
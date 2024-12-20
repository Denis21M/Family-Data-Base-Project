let members = JSON.parse(localStorage.getItem('members')) || [
    {name:"Bacon", 
    BN: "BN:  Bacon Chinazom Mmakogu",
    DOB: "DOB:  14.07.1990",
    POB: "POB:  Uli Nigeria",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Hobbies:  Frontend development, Football",
    image:"profile.jpg",
    }, 
    
    {name:"Denisa", 
    BN: "BN:  Denisa Parmova",
    DOB: "DOB:  13.06.1992",
    POB: "POB:  Ostrava Czech Rep.",
    Nationality: "Nationality:  Czech",
    Hobbies: "Hobbies:  Cooking, Mobile Games, Baking",
    image:"./Deni.jpg",
    },
                
    {name:"Sebastian", 
    BN: "BN:  Sebastian Rostislav Parma",
    DOB: "DOB:  02.07.2015",
    POB: "POB:  Ostrava Czech Rep.",
    Nationality: "Nationality:  Czech",
    Hobbies: "Hobbies:  Basket Ball, Video Games, Building things",
    image:"./sebinek.jpg",
    }, 
                
    {name:"Denis", 
    BN: "BN:  Denis Chinazom Mmakogu",
    DOB: "DOB:  18.02.2021",
    POB: "POB:  Ostrava Czech",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Hobbies:  Lego, Football, Chocolates",
    image:"./Nazom%20jr.jpg",
    }, 
                
    {name:"Christian", 
    BN: "BN:  Christian Isioma Mmakogu",
    DOB: "DOB:  28.10.2024",
    POB: "POB:  Ostrava Czech",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Hobbies:  Sucking, Crying, Sleeping",
    image:"./Chris.jpg",
    }
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
    
    
const members = [
    {name:"Bacon", 
    image:"profile.jpg",
    BN: "BN: Bacon Chinazom Mmakogu",
    DOB: "DOB: 14.07.1990",
    POB: "POB: Uli Nigeria",
    Nationality: "Nationality: Nigerian",
    Hobbies: "Hobbies: Frontend development, Football, Ping Pong",
    }, 
    
    {name:"Denisa", 
    image:"./Deni.jpg",
    BN: "BN: Denisa Parmova",
    DOB: "DOB: 13.06.1992",
    POB: "POB: Ostrava Czech Rep.",
    Nationality: "Nationality: Czech",
    Hobbies: "Hobbies: Cooking, Mobile Games, Baking",
    },
                
    {name:"Sebastian", 
    image:"./sebinek.jpg",
    BN: "BN: Sebastian Rostislav Parma",
    DOB: "DOB: 02.07.2015",
    POB: "POB: Ostrava Czech Rep.",
    Nationality: "Nationality: Czech",
    Hobbies: "Hobbies: Basket Ball, Video Games, Building things",
    }, 
                
    {name:"Denis", 
    image:"./Nazom%20jr.jpg",
    BN: "BN: Denis Chinazom Mmakogu",
    DOB: "DOB: 18.02.2021",
    POB: "POB: Ostrava Czech",
    Nationality: "Nationality: Czech-Nigerian",
    Hobbies: "Hobbies: Lego figures, Football, Eating Chocolates",
    }, 
                
    {name:"Christian", 
    image:"./Chris.jpg",
    BN: "BN: Christian Isioma Mmakogu",
    DOB: "DOB: 28.10.2024",
    POB: "POB: Ostrava Czech",
    Nationality: "Nationality: Czech-Nigerian",
    Hobbies: "Hobbies: Sucking, Crying, Sleeping",
    }
    ];

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
               output.style.color = "red";
               pictures.src = "";
               pictures.style.display = ` `;
               birth.innerHTML = "";
               place.innerHTML = "";
               country.innerHTML = "";
               hobby.innerHTML = "";
               onBirth.innerHTML = "";
        }
    }

    function handleError(img) {
        if (img.src.endsWith('placeholder.jpg')) {
            img.style.display = 'none';
            return;
        }
        img.src = 'placeholder.jpg';
        img.style.display = 'block'; 
    }
    
    
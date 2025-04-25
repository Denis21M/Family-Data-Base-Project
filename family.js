const members = [
    {name:"Bacon", 
    BN: "BN:  Bacon Chinazom Mmakogu",
    DOB: "DOB:  14.07.1990",
    POB: "POB:  Uli Nigeria",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  11th/ 6th Son",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Likes:  Frontend development, Football, Ping Pong",
    image:"./media/Bacon.jpg",
    }, 
    
    {name:"Denisa", 
    BN: "BN:  Denisa Parmova",
    DOB: "DOB:  13.06.1992",
    POB: "POB:  Ostrava Czech Rep.",
    Sex: "Sex:  Female",
    Connection: "Connection/Position:  Bacon(Partner)",
    Nationality: "Nationality:  Czech",
    Hobbies: "Likes:  Cooking, Mobile Games, Baking",
    image:"./media/Deni.jpg",
    },
                
    {name:"Sebastian", 
    BN: "BN:  Sebastian Rostislav Parma",
    DOB: "DOB:  02.07.2015",
    POB: "POB:  Ostrava Czech Rep.",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  Bacon(Step-son)",
    Nationality: "Nationality:  Czech",
    Hobbies: "Likes:  Basket Ball, Video Games, Building things",
    image:"./media/Sebastian.jpg",
    }, 
                
    {name:"Denis", 
    BN: "BN:  Denis Chinazom Mmakogu",
    DOB: "DOB:  18.02.2021",
    POB: "POB:  Ostrava Czech",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  Bacon(Ist son)",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Likes:  Lego, Football, Chocolates",
    image:"./media/Nazom.jpg",
    }, 
                
    {name:"Christian", 
    BN: "BN:  Christian Isioma Mmakogu",
    DOB: "DOB:  28.10.2024",
    POB: "POB:  Ostrava Czech",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  Bacon(2nd son)",
    Nationality: "Nationality:  Czech-Nigerian",
    Hobbies: "Likes:  Sucking, Crying, Sleeping",
    image:"./media/Isioma.jpg",
    },

    {name:"Adolphus", 
    BN: "BN:  Adolphus Uche Mmakogu",
    DOB: "DOB:  20.01.1970",
    POB: "POB:  Uli Nigeria",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  1st, 1st Son",
    Nationality: "Nationality:  Polish-Nigerian",
    Hobbies: "Likes:  Football, Philosophy, Ping pong",
    image:"./media/Okpara.jpg",
    },

    
    {name:"Eugenia", 
    BN: "BN:  Late Mrs Ezinne E.A. Mmakogu",
    DOB: "DOB:  10.03.1951",
    POB: "POB:  Eziani, Nigeria",
    Sex: "Sex:  Female",
    Connection: "Connection/Position:  Mother",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Likes:  Farming, Bean-cake baking, Sharing Love",
    image:"./media/Ezinne.jpg",
        },

    {name:"Innocent", 
    BN: "BN:  Late Mr Innocent A. Mmakogu",
    DOB: "DOB:  01.01.1935",
    POB: "POB:  Uli, Nigeria",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  Father",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Likes:  Business, News Papers, Provision",
    image:"./media/Amuzienwa.jpg",
    },

    {name:"Pamela", 
    BN: "BN:  Pamela Amaka Mmakogu",
    DOB: "DOB: 20.12.1984",
    POB: "POB:  Uli, Nigeria",
    Sex: "Sex:  Female",
    Connection: "Connection/Position:  5th, 2nd Daughter",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Likes:  Travelling, Movies, Games",
    image:"./media/Pamela.jpg",
    },

    {name:"Geofrey", 
    BN: "BN:  Geofrey Ifeanyi Mmakogu",
    DOB: "DOB: 18.11.1984",
    POB: "POB:  Uli, Nigeria",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  7th, 5th Son",
    Nationality: "Nationality:  Nigerian",
    Hobbies: "Likes:  Beer, Luxury Brands, Eating",
    image:"./media/Geo.jpg",
    },

    {name:"Miracle", 
    BN: "BN:  Miracle Chidera Obidiegwu",
    DOB: "DOB: 12.05.2021",
    POB: "POB:  Toronto, Canada",
    Sex: "Sex:  Male",
    Connection: "Connection/Position:  Pamela(1st Son)",
    Nationality: "Nationality:  Canadian-Nigerian",
    Hobbies: "Likes:  Travelling, Movies, Games",
    image:"./media/Chidera.jpg",
    },

    {name:"Simona", 
    BN: "BN:  Simona Mmakogu",
    DOB: "DOB: 30.10.1983",
    POB: "POB:  Harvirov, Czech Rep",
    Sex: "Sex:  Female",
    Connection: "Connection/Position:  Geofrey(Wife)",
    Nationality: "Nationality:  Czech",
    Hobbies: "Likes:  Flowers, Cooking, Cleaning",
    image:"./media/Simona.jpg",
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
    const sex = document.getElementById("Sex");
    const connection = document.getElementById("Connection");


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
            sex.innerHTML = match.Sex;
            connection.innerHTML = match.Connection;
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
               sex.innerHTML = "";
               connection.innerHTML = "";
        }
    }

    document.getElementById("personal").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
       
        const name = document.getElementById("name").value.trim();
        const BN = `BN:  ${document.getElementById("BN").value.trim()}`;
        const DOB = `DOB:  ${document.getElementById("DOB").value.trim()}`;
        const POB = `POB:  ${document.getElementById("POB").value.trim()}`;
        const Sex = `Sex:  ${document.getElementById("Sex").value.trim()}`;
        const Connection = `Connection:  ${document.getElementById("Connection").value.trim()}`;
        const Nationality = `Nationality:  ${document.getElementById("Nationality").value.trim()}`;
        const Hobbies = `Hobbies:  ${document.getElementById("hobbies").value.trim()}`;
        const image = document.getElementById("image").value.trim();
    
        
        const newMember = {
            name,
            BN,
            DOB,
            POB,
            Sex,
            Connection,
            Nationality,
            Hobbies,
            image
        };
    
        
        members.push(newMember);
    
      
        console.log("New member added:", newMember);
        console.log("Updated members array:", members);
    
    
        document.getElementById("personal").reset();

        addNewMember(name, BN, DOB, POB,Sex, Connection, Nationality, Hobbies, image);
    });
    
    
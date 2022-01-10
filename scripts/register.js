let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av.Lion",
        Number:"34",
        zip:"2210",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[
        {
            name:"Chucky",
            age:10,
            gender:"Male",
            breed:"Doberman",
            service:"Consult",
            ownerName:"Jazmin",
            contactPhone:"665-234-3532"
        },
        {
            name:"Querubin",
            age:10,
            gender:"Female",
            breed:"Pastor Aleman",
            service:"Consult",
            ownerName:"Jojo",
            contactPhone:"665-344-3532"
        },
        {
            name:"Jojo",
            age:1,
            gender:"Male",
            breed:"Chihuahua",
            service:"Consult",
            ownerName:"Omar",
            contactPhone:"665-344-3532"
        }

    ]
}
//display the information of the pat saloon address on the footer
function displayInfo(){
    document.getElementById("footer-info").innerHTML=`
    <p>${saloon.address.street},
    ${saloon.address.Number}, ZIP
    Code: ${saloon.address.zip}</p>
    <p>${saloon.address.city}
    ${saloon.address.state},
    </p>`
}

function displayPetNames(){
    console.log(saloon.pets[0].name);
    console.log(saloon.pets[1].name);
    console.log(saloon.pets[2].name);
}

function viewAlert(){
    
    alert("Pets are registered: " + saloon.pets.length);
}
displayInfo();
viewAlert();
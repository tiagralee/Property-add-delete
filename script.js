(async function(){

    const results = [{
        "price": "$726,500",
        "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
        },
        "id": "1",
        "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        "price": "$560,520",
        "agency": {
            "brandingColors": {
                "primary": "#fcfa3b"
            },
            "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
        },
        "id": "2",
        "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }, {
        "price": "$826,500",
        "agency": {
            "brandingColors": {
                "primary": "#57B5E0"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
        },
        "id": "3",
        "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
    }];

    const saved_properties = [{
        "price": "$526,500",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
        },
        "id": "4",
        "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }];



    results.forEach(item=> {
        var container = document.getElementById("Results_List").insertAdjacentHTML('beforeend',`

        <div class="Card" id="${item.id}">
            <div class="Card_Header" style="background-color: ${item.agency.brandingColors.primary};">
                <img src="${item.agency.logo}"/>
            </div>
            <div class="Card_Body" style="background-color: ${item.agency.brandingColors.primary}">
                <img src="${item.mainImage}" style="max-width: 100%"/>
            </div>
            <div class="Card_Footer" style="background-color: ${item.agency.brandingColors.primary}; ">
                <button class="Results_Button" id="${item.id}_Button">Add Property</button>
                <div class="Card_Price">${item.price}</div>
            </div>
        </div>
        `)

    });

    saved_properties.forEach(item=>{

        var container = document.getElementById("Property_List").insertAdjacentHTML('beforeend',`
        

        <div class="Card" id="${item.id}">
            <div class="Card_Header" style="background-color: ${item.agency.brandingColors.primary};">
               <img src="${item.agency.logo}"/>
            </div>
            <div class="Card_Body" style="background-color: ${item.agency.brandingColors.primary}">
                <img src="${item.mainImage}" style="max-width: 100%"/>
            </div>
            <div class="Card_Footer" style="background-color: ${item.agency.brandingColors.primary};">
                <button  class="Saved_Button" id="${item.id}_Button">Remove Property</button>
                <div class="Card_Price" style="color:white;">${item.price}</div>
            </div>
        </div>

        
        `)

    });



    var results_list=document.getElementById("Results_List");
    var property_list=document.getElementById("Property_List");

    var Card_3=document.getElementById("3");
    var Button_3=document.getElementById("3_Button");
    var saved_Card_3=Card_3.cloneNode(true);
    saved_Card_3.id="saved_3_Card"
    var saved_Card_3_Button=saved_Card_3.childNodes[5].childNodes[1];
    saved_Card_3_Button.className="Saved_Button";

    Card_3.onmouseover=function(){
        Button_3.style.visibility="visible";
    }

    Card_3.onmouseout=function(){
        Button_3.style.visibility="hidden";
    }

    var Card_1=document.getElementById("1");
    var Button_1=document.getElementById("1_Button");
    var saved_Card_1=Card_1.cloneNode(true);
    saved_Card_1.id="saved_1_Card";
    var saved_Card_1_Button=saved_Card_1.childNodes[5].childNodes[1];
    saved_Card_1_Button.className="Saved_Button";
    
    Card_1.onmouseover=function(){
        Button_1.style.visibility="visible";
    }

    Card_1.onmouseout=function(){
        Button_1.style.visibility="hidden";
    }

    var Card_2=document.getElementById("2");
    var Button_2=document.getElementById("2_Button");
    var saved_Card_2=Card_2.cloneNode(true);
    saved_Card_2.id="saved_2_Card"
    var saved_Card_2_Button=saved_Card_2.childNodes[5].childNodes[1];
    saved_Card_2_Button.className="Saved_Button";


    Card_2.onmouseover=function(){
        Button_2.style.visibility="visible";
    }

    Card_2.onmouseout=function(){
        Button_2.style.visibility="hidden";
    }

    var Card_4=document.getElementById("4");
    var Button_4=document.getElementById("4_Button");
    Card_4.onmouseover=function(){
        Button_4.style.visibility="visible";
    }

    Card_4.onmouseout=function(){
        Button_4.style.visibility="hidden";
    }


    Button_1.onclick=function(){
        if(Button_1.className=="Results_Button"){
            property_list.appendChild(saved_Card_1);
        }
    }

    Button_2.onclick=function(){
        if(Button_2.className=="Results_Button"){            
            property_list.appendChild(saved_Card_2);
        }
    }

    Button_3.onclick=function(){
        if(Button_3.className=="Results_Button"){
            property_list.appendChild(saved_Card_3);
        }
    }

    Button_4.onclick=function(){
            property_list.removeChild(Card_4);
    }

    


    saved_Card_1.onmouseover=function(){
        saved_Card_1_Button.style.visibility="visible";
    }
    saved_Card_1.onmouseout=function(){
        saved_Card_1_Button.style.visibility="hidden";
    }
    saved_Card_1_Button.onclick=function(){
        property_list.removeChild(saved_Card_1);
    }
    


    saved_Card_2.onmouseover=function(){
        saved_Card_2_Button.style.visibility="visible";
    }
    saved_Card_1.onmouseout=function(){
        saved_Card_2_Button.style.visibility="hidden";
    }
    saved_Card_2_Button.onclick=function(){
        property_list.removeChild(saved_Card_2);
    }



    saved_Card_3.onmouseover=function(){
        saved_Card_3_Button.style.visibility="visible";
    }
    saved_Card_3.onmouseout=function(){
        saved_Card_3_Button.style.visibility="hidden";
    }
    saved_Card_3_Button.onclick=function(){
        property_list.removeChild(saved_Card_3);
    }




    


}());

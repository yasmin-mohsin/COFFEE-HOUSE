var xhr = new XMLHttpRequest();
var dataOffer;
var imgOff=document.getElementsByClassName("imgOff");
var discOffer=document.getElementsByClassName("discOffer");
var discripOffer=document.getElementsByClassName("discripOffer");

xhr.open("get","../data/OFFERS.json");

xhr.onreadystatechange=function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            dataOffer=JSON.parse(xhr.responseText);
            for(var i=0;i<dataOffer.length;i++){
                imgOff[i].src=dataOffer[i].src;
                discOffer[i].innerHTML=dataOffer[i].discount;
                discripOffer[i].innerHTML=dataOffer[i].discription;

            }
        }
    }
}

xhr.send();
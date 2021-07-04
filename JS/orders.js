var xhr = new XMLHttpRequest();
var dataOffer;
var imgOff=document.getElementsByClassName("imgOff");
var prodName=document.getElementsByClassName("prodName");
var prodDiscrip=document.getElementsByClassName("prodDiscrip");

xhr.open("get","../data/orders.json");

xhr.onreadystatechange=function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            dataOffer=JSON.parse(xhr.responseText);
            for(var i=0;i<dataOffer.length;i++){
                imgOff[i].src=dataOffer[i].src;
                prodName[i].innerHTML=dataOffer[i].prodName;
                prodDiscrip[i].innerHTML=dataOffer[i].prodDiscription;

            }
        }
    }
}

xhr.send();
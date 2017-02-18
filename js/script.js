window.onload = function(){
    // your code

    var name=document.getElementById("a_name");
    var ice=document.getElementById('ice-cream');
    var one=document.getElementById("1");
    var two=document.getElementById("2");
    var three=document.getElementById("3");
    var four=document.getElementById("4");
    var five=document.getElementById("5");
    var six=document.getElementById("6");
    var seven=document.getElementById("7");
    var eight=document.getElementById("8");
    var nine=document.getElementById("9");
    var ten=document.getElementById("10");
    var form=document.getElementById("total");
    var ans=document.getElementById("ans");
    var quest=document.getElementById("quest");
    var ok_name=false;
    var ok_ice=false;
    var hyd_test=0;
    var ok_hyd=false;
    document.getElementById("submit").onclick = function (e) {
      e.preventDefault();
      console.log('hello!');
      if(name.value=="two" || name.value=="2"){
        console.log(name.value);
        ok_name=true;
      }

      if(ice.value!='default'){
        ok_ice=true;
      }

      hyd_test=$('input[name=hyd]:checked').val();
      if(hyd_test!=undefined){
        ok_hyd=true;
      }

      if(ok_name && ok_hyd && ok_ice){
          form.style.display = 'none';
          quest.style.height='0px';
          ans.style.display='block';
      }else{
        if(!ok_name && !ok_hyd && !ok_ice){
            alert("Error! You did not answer any of of the questions correctly.");
        }else if(!ok_name && !ok_hyd){
            alert("Error! You did not answer the first and second question correctly.");
        }else if(!ok_name && !ok_ice){
          alert("Error! You did not answer the first and third question correctly.");
        }else if(!ok_ice && !ok_hyd){
          alert("Error! You did not answer the second and third question.");
        }else if(!ok_name ){
          alert("Error! You did not answer the first question correctly.");
        }else if(!ok_hyd){
          alert("Error! You did not answer the second question.");
        }else if(!ok_ice){
          alert("Error! You did not answer the third question.");
        }

      }
      //

    };
};

        var additionalDetailsPresent = 0;
        var dietDetailsPresent = 0;
        var quantityComing = 1;
        var listNames
        var listNamesBreak
        
        function quantityChange(){
          console.log("quantityChange() fired");
          var quan = document.getElementById("quantity").value;
          console.log("ln 47");
          var addlGuestDiv = document.getElementById("addlGuestDetails");
          console.log(quan + " guests.");
          if (quan > quantityComing) {
            while (quan > quantityComing) {
              if (quan > 1 && quantityComing == 1) {
              	//listNamesBreak = document.createElement("br");
              	listNames = document.createTextNode("Please list the names of the other guests in your party:");
                addlGuestDiv.appendChild(listNamesBreak);
                appendChild(listNames);
              }
            

              var addlGuestName = document.createElement("input");
              addlGuestName.type = "text";
              addlGuestName.placeholder = "Additional Guest " + quantityComing;
              addlGuestName.id = "addlGuestName";
              var addlGuestFieldName = "additionalGuest" + quantityComing;
              console.log(addlGuestFieldName);
              addlGuestName.name = addlGuestFieldName;
              listNamesBreak = document.createElement("br");
              addlGuestDiv.appendChild(listNamesBreak);
              addlGuestDiv.appendChild(addlGuestName);
              
  						quantityComing++;
            }
            
          }
          
          else if (quan < quantityComing) {
          if (quan == 1 && quantityComing != 1) {
            	addlGuestDiv.removeChild(listNames);
              addlGuestDiv.removeChild(listNamesBreak);
            }
          	while (quan < quantityComing) {
            	console.log("while loop");
              addlGuestDiv.removeChild(addlGuestDiv.lastChild);
              addlGuestDiv.removeChild(addlGuestDiv.lastChild);

              quantityComing--;
            }
            
          }
          
        }

				function partyComing(coming){
            var additionalDetails = document.getElementById("additionalDetails");
                        
            if(coming == 1 && additionalDetailsPresent == 0) {
            	console.log("Adding Additional Details");
              additionalDetailsPresent = 1
              
              document.getElementById('additionalDetails').style.display = 'block';
              
            }
            else if (coming == 0 && additionalDetailsPresent == 1) {
            	additionalDetailsPresent = 0;
            	dietDetailsPresent = 0;
              //quantityComing = 1;
              console.log("Removing Additional Details");
              
              //Need to reset these inputs
              document.getElementById('email').value = "";
              document.getElementById('tel').value = "";
              document.getElementById('quantity').value = 1;
              quantityChange();
              
              document.getElementById('additionalDetails').style.display = 'none';
            
            }
        }
        
        function dietDetailsFn(hasDiet){                        
            if(hasDiet == 1 && dietDetailsPresent == 0) {
            	console.log("Adding Diet Details");
              dietDetailsPresent = 1
              
              document.getElementById('dietDetailsDiv').style.display = 'block';
              
            }
            else if (hasDiet == 0 && dietDetailsPresent == 1) {
            	dietDetailsPresent = 0;
              console.log("Removing Diet Details");
              
              document.getElementById('dietDetailsDiv').value = "";
              
              document.getElementById('dietDetailsDiv').style.display = 'none';
            
            }
        }
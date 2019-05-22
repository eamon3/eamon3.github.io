---
layout: page
permalink: /rsvp/
title: RSVP
---

<!--<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">-->
<script src="/form.js"></script>

<form class="pure-form-stacked" action="https://getform.io/f/0cff5cfd-5ab5-4d3c-8f95-50be1ec60926" method="POST">
    <div id="BasicInfo">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name">
      <!--<br>-->
      <label for="coming">Will you/your party be able to attend?</label>
      <input type="radio" id="coming" name="coming" value="yes" onclick="partyComing(1)"> Yes! 
      <input type="radio" name="coming" id="coming" value="no" onclick="partyComing(0)"> No.
      <!--<br><br>-->
      </div>
    
    <div id="additionalDetails" style="display:none">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email">
      <!--<br>-->
      <label for="tel">Phone Number</label>
      <input type="tel" id="tel" name="tel">
      <!--<br>-->
      <label for="quantity">How many guests are in your party, including yourself?</label>
      <select name="quantity" id="quantity" onchange="quantityChange()">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      
      <div id="addlGuestDetails">
      
      </div>
      
      <!--<br>-->
      
      <label for="diet">Does anyone in your party have dietary restrictions?</label>
      <input type="radio" id="diet" name="diet" value="yes" onclick="dietDetailsFn(1)"> Yes
      <input type="radio" id="diet" name="diet" value="no" onclick="dietDetailsFn(0)"> No
      
      <div id="dietDetailsDiv" style="display:none">
        <!--<br>-->
        <label for="dietDetails">Please describe: </label>
        <textarea id="dietDetails" name="dietDetails"></textarea>
      </div>
      
    </div>
    <!--<br>-->
    <input type="submit" value="Submit!">

</form>
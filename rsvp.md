---
layout: page
permalink: /rsvp/
title: RSVP
---

<!--<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">-->
<script src="/form.js"></script>

<form class="pure-form-stacked" action="https://getform.io/f/0cff5cfd-5ab5-4d3c-8f95-50be1ec60926" method="POST">
    <div id="BasicInfo">
      <p>
        <label for="name">Your Name</label>
        <br>
        <input type="text" id="name" name="name">
      </p>
      
      <p>
        <label for="coming">Will you/your party be able to attend?</label>
        <br>
        <input type="radio" id="coming" name="coming" value="yes" onclick="partyComing(1)"> Yes!
        <br>
        <input type="radio" name="coming" id="coming" value="no" onclick="partyComing(0)"> No
      </p>
      </div>
    
    <div id="additionalDetails" style="display:none">
      <p>
        <label for="email">Email Address</label>
        <br>
        <input type="email" id="email" name="email">
      </p>

      <p>
        <label for="tel">Phone Number</label>
        <br>
        <input type="tel" id="tel" name="tel">
      </p>

      <p>
        <label for="quantity">How many guests are in your party, including yourself?</label>
        <br>
        <select name="quantity" id="quantity" onchange="quantityChange()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
      
      <div id="addlGuestDetails">
      
      </div>
      
      <p>      
        <label for="diet">Does anyone in your party have dietary restrictions?</label>
        <br>
        <input type="radio" id="diet" name="diet" value="yes" onclick="dietDetailsFn(1)"> Yes
        <br>
        <input type="radio" id="diet" name="diet" value="no" onclick="dietDetailsFn(0)"> No
      
        <br>
        
        <div id="dietDetailsDiv" style="display:none">
          <label for="dietDetails">Please describe the restrictions: </label>
          <textarea id="dietDetails" name="dietDetails"></textarea>
        </div>
      </p>
      
    </div>
    <input type="submit" value="Submit!">

</form>
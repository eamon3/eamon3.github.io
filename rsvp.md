---
layout: page
permalink: /rsvp/
title: RSVP
---

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140670048-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-140670048-1');
  </script>
</head>

<script src="/form.js"></script>

<form action="https://getform.io/f/0cff5cfd-5ab5-4d3c-8f95-50be1ec60926" method="POST" onsubmit="alert('Your RSVP has been received. Thank you.');">
    <div id="BasicInfo">
      <p>
        <label for="name">Your Name</label>
        <br>
        <input type="text" id="name" name="name" required>
      </p>
      
      <p>
        Will you/your party be able to attend?
        <br>
        <input type="radio" id="coming" name="coming" value="yes" onclick="partyComing(1)" required> Yes!
        <br>
        <input type="radio" name="coming" id="coming" value="no" onclick="partyComing(0)" required> No
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
      
        <span id="addlGuestDetails">
        </span>
      </p>
      
      <p>      
        Does anyone in your party have dietary restrictions?
        <br>
        <input type="radio" id="diet" name="diet" value="yes" onclick="dietDetailsFn(1)"> Yes
        <br>
        <input type="radio" id="diet" name="diet" value="no" onclick="dietDetailsFn(0)"> No
      
        <br>
        
        <div id="dietDetailsDiv" style="display:none">
          <label for="dietDetails">Please describe the restrictions: </label>
          <br>
          <textarea id="dietDetails" name="dietDetails" rows="5" cols="33"></textarea>
        </div>
      </p>
      
    </div>
    <input type="submit" value="Submit!">

</form>
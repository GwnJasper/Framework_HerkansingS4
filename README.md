# Framework_HerkansingS4
Framework voor de herkansing van Semester 4 FHICT

Dit framework zorgt ervoor dat je de vloeiend naar een gedeelte van je website kunt scrollen door middel van een menu. Dit framework is ideaal voor one page websites. Je hoeft niets aan te passen in het javascript bestand. Alle variabele gaan via het html bestand. 


Hoe gebruik je mijn framework?
1. Download het javascript bestand en koppel deze aan je HTML.

2. Voeg het volgende toe aan je <a> tag: 
   ```ruby
    href="#" onclick="return false;" onmousedown="autoScrollTo('div1');"
    ```
    De regel hieronder laat zien wat je kunt aanpassen.
    ```ruby
    href="#" onclick="return false;" onmousedown="autoScrollTo('id van de div waar je heen wilt scrollen');"
    ```

3. Voeg de input toe voor de variabele:
    ```ruby
   <input type="input" id="distance" value="10">
   <input type="input" id="speed" value="25">
   ```
   Deze line zorgt er voor dat je in je html de variabele aan kunt passen. Op deze manier zie je invoervelden op je 
   pagina staan. Om deze 
   weg te halen verander je alleen het type naar "hidden". 

4. Voeg de terug naar boven knop toe.
     ```ruby
    <a href="#" onclick="return false;" onmousedown="resetScroller('myheading');"> Go Back To Top</a>
     ```

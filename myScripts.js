// Vysvetlím, ako som naprogramoval dropdown alebo rozbaľovaciu ponuku. Najprv si napíšete premennú v angličtine variable 
// v JavaScripte skratka var. Premennú si môžete nazvať, ako chcete napríklad aj v angličtine alebo, aj v slovenčine to je jedno. 
// Pomocou document.qerySelector sa dotknete v HTML kóde tagu ul. Či ste to dobre spravili môžete si to skontrolovať v developerskej 
// konzole. Napíšete jednoducho console.log a do zátvorky napíšete premennú, ktorú ste si predtým nazvali, ako ste chceli. Keď vám 
// konzola vypíše celý ul tag tak to máte dobre. Potom pomocou style.display none dokážete to, že sa váš celý ul tag spolu aj s textom 
// schová, aby ho nebolo vidieť na vašej internetovej stránke. Ďalej pomocou querySelector si vyberieme v HTML kóde class btn. Ale 
// pozor, keď vyberiete class musíte dať pred tým bodku napríklad .btn. Potom pomocou addEventListener, čo je funkcia, ktorá čaká, že sa 
// niečo spraví, ako napríklad, že sa klikne myšou alebo sa pohne myšou. Ja som vybral nájazd myšou mouseenter. Čiže ak nabehnete myšou 
// na tlačítko tak sa spustí nejaká funkcia. Tú funkciu si musíte určiť, že aká funkcia sa má stať. V mojom prípade to je, že sa má 
// objaviť text, ktorý je napísaný v ul tagu, keď nabehnete myšou na tlačítko. Preto si pomocou querySelector vyberieme v HTML kóde ul tag 
// a pomocou style.display block sa vám pri nájazde myšou na tlačítko objaví text, ktorí ste napísali v HTML do ul tagu. Potom, aby 
// vám text, ktorí ste napísali do ul tagu zmizol, keď s myšou z neho odídete tak to musíte spraviť tak, že pomocou querySelector sa 
// dotknete ul tagu pomocou funkcie addEventListener zvolíte tentokrát mouseleave, čo je odídenie s myšou a potom ešte určíte 
// funkciu, čo sa má stať, keď s ul tagu odídete s myšou. Tak má sa stať to, že, keď odídete s ul tagu myšou tak má zmiznúť text, ktorí 
// ste napísali do ul tagu. Takže napíšete function potom pomocou document.querySelector sa dotknete ul tagu a pomocou style.display none 
// vám zmizne text, keď odídete s myšou s ul tagu. Určite sa to dá naprogramovať aj inak no ja som to naprogramoval takto. 
// Dúfam, že som to dobre vysvetlil a nemáte v tom guláš :)))))))))))))))))))))))))))))))))))))))))))))))) 

var historia = document.querySelector("ul").style.display = "none";
console.log(historia);

document.querySelector(".btn").addEventListener("mouseenter", function() {
    document.querySelector("ul").style.display = "block";
});

document.querySelector("ul").addEventListener("mouseleave", function() {
    document.querySelector("ul").style.display = "none";
});
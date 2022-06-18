//********************************************
//                BARBARIAN                  *
//                                           *
//           palace software 1988            *
//                                           *
//       remake de la version AMIGA 500      *
//                                           *
//       en javascript par FL en 2015        *
//                                           *
//       http://barbarian.1987.free.fr       *
//                                           *
//          merci a olivier V. et            *
//      et a devellopez.com pour l aide      *
//                                           *
//********************************************



// Creation du canvas
var canvas = document.createElement("canvas");
var canvasContext = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 400;
document.body.appendChild(canvas);


// compatibilité multi-navigateur
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// definition des entrées clavier
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// chargement de la police du texte
canvasContext.fillStyle = "rgb(250, 250, 250)";
canvasContext.font = "24px Helvetica";
canvasContext.textAlign = "left";
canvasContext.textBaseline = "top";

//creation de fonction "stop" pour le son
HTMLAudioElement.prototype.stop = function()
{ this.pause();
this.currentTime = 0.0;
};



// *************** declaration et chargement des images *************** 

// decors
var titre = new Image();
titre.src = "ressources/decors/titre.png";
canvasContext.drawImage(titre, 0, 0);

var decor2 = new Image();
var arbreG2 = new Image();
var arbreD2 = new Image();
decor2.src = "ressources/decors/foret.png";
arbreG2.src = "ressources/decors/foretARBREG.png";
arbreD2.src = "ressources/decors/foretARBRED.png";

var decor1 = new Image();
var arbreG1 = new Image();
var arbreD1 = new Image();
decor1.src = "ressources/decors/plaine.png";
arbreG1.src = "ressources/decors/plaineARBREG.png";
arbreD1.src = "ressources/decors/plaineARBRED.png";

var decor3 = new Image();
var arbreG3 = new Image();
var arbreD3 = new Image();
decor3.src = "ressources/decors/trone.png";
arbreG3.src = "ressources/decors/troneARBREG.png";
arbreD3.src = "ressources/decors/troneARBRED.png";

var decor4 = new Image();
var arbreG4 = new Image();
var arbreD4 = new Image();
decor4.src = "ressources/decors/arene.png";
arbreG4.src = "ressources/decors/areneARBREG.png";
arbreD4.src = "ressources/decors/areneARBRED.png";

// sprites joueurA

var deboutA = new Image();
var assis1A = new Image ();
var assis2A = new Image ();
var attente1A = new Image ();
var attente2A = new Image ();
var attente3A = new Image ();
//var protegeHA = new Image ();
var cou2A = new Image ();
var cou3A = new Image ();
var devant1A = new Image ();
var devant2A = new Image ();
var devant3A = new Image ();
var genou1A = new Image ();
var genou3A = new Image ();
var marche1A = new Image ();
var marche2A = new Image ();
var marche3A = new Image ();
var saut1A = new Image ();
var saut2A = new Image ();
var vainqueur1A = new Image ();
var vainqueur2A = new Image ();
var vainqueur3A = new Image ();
var retourne1A = new Image ();
var retourne2A = new Image ();
var retourne3A = new Image ();
var front1A = new Image ();
var front2A = new Image ();
var front3A = new Image ();
var toile1A = new Image ();
var toile2A = new Image ();
var toile3A = new Image ();
var toile4A = new Image ();
var tombe1A = new Image ();
var tombe2A = new Image ();
var tombe3A = new Image ();
var protegeDevantA = new Image ();
var protegeHautA = new Image ();
var couptete1A = new Image ();
var couptete2A = new Image ();
var touche1A = new Image ();
var touche2A = new Image ();
var touche3A = new Image ();
var pied1A = new Image ();
var pied2A = new Image ();
var decap1A = new Image ();
var decap2A = new Image ();
var decap3A = new Image ();
var decap4A = new Image ();
var mort1A = new Image ();
var mort2A = new Image ();
var mort3A = new Image ();
var mort4A = new Image ();;
var roulade1A = new Image ();
var roulade2A = new Image ();
var roulade3A = new Image ();
var roulade4A = new Image ();
var roulade5A = new Image ();
var roulade6A = new Image ();
var tete1A = new Image ();
var tete2A = new Image ();
var tete3A = new Image ();
var tete4A = new Image ();
var tete5A = new Image ();
var tete6A = new Image ();

// sprites joueurB

var deboutB = new Image();
var assis1B = new Image ();
var assis2B = new Image ();
var attente1B = new Image ();
var attente2B = new Image ();
var attente3B = new Image ();
//var protegeHB = new Image ();
var cou2B = new Image ();
var cou3B = new Image ();
var devant1B = new Image ();
var devant2B = new Image ();
var devant3B = new Image ();
var genou1B = new Image ();
var genou3B = new Image ();
var marche1B = new Image ();
var marche2B = new Image ();
var marche3B = new Image ();
var saut1B = new Image ();
var saut2B = new Image ();
var vainqueur1B = new Image ();
var vainqueur2B = new Image ();
var vainqueur3B = new Image ();
var retourne1B = new Image ();
var retourne2B = new Image ();
var retourne3B = new Image ();
var front1B = new Image ();
var front2B = new Image ();
var front3B = new Image ();
var toile1B = new Image ();
var toile2B = new Image ();
var toile3B = new Image ();
var toile4B = new Image ();
var tombe1B = new Image ();
var tombe2B = new Image ();
var tombe3B = new Image ();
var protegeDevantB = new Image ();
var protegeHautB = new Image ();
var couptete1B = new Image ();
var couptete2B = new Image ();
var touche1B = new Image ();
var touche2B = new Image ();
var touche3B = new Image ();
var pied1B = new Image ();
var pied2B = new Image ();
var decap1B = new Image ();
var decap2B = new Image ();
var decap3B = new Image ();
var decap4B = new Image ();
var mort1B = new Image ();
var mort2B = new Image ();
var mort3B = new Image ();
var mort4B = new Image ();;
var roulade1B = new Image ();
var roulade2B = new Image ();
var roulade3B = new Image ();
var roulade4B = new Image ();
var roulade5B = new Image ();
var roulade6B = new Image ();
var tete1B = new Image ();
var tete2B = new Image ();
var tete3B = new Image ();
var tete4B = new Image ();
var tete5B = new Image ();
var tete6B = new Image ();

//   chargement des sprites A

deboutA.src = "ressources/spritesA/debout.png";
assis1A.src = "ressources/spritesA/assis1.png";
assis2A.src = "ressources/spritesA/assis2.png";
attente1A.src = "ressources/spritesA/attente1.png";
attente2A.src = "ressources/spritesA/attente2.png";
attente3A.src = "ressources/spritesA/attente3.png";
//protegeHA.src = "ressources/spritesA/protegeH.png";
cou2A.src = "ressources/spritesA/cou2.png";
cou3A.src = "ressources/spritesA/cou3.png";
devant1A.src = "ressources/spritesA/devant1.png";
devant2A.src = "ressources/spritesA/devant2.png";
devant3A.src = "ressources/spritesA/devant3.png";
genou1A.src = "ressources/spritesA/genou1.png";
genou3A.src = "ressources/spritesA/genou3.png";
marche1A.src = "ressources/spritesA/marche1.png";
marche2A.src = "ressources/spritesA/marche2.png";
marche3A.src = "ressources/spritesA/marche3.png";
saut1A.src = "ressources/spritesA/saut1.png";
saut2A.src = "ressources/spritesA/saut2.png";
vainqueur1A.src = "ressources/spritesA/vainqueur1.png";
vainqueur2A.src = "ressources/spritesA/vainqueur2.png";
vainqueur3A.src = "ressources/spritesA/vainqueur3.png";
retourne1A.src = "ressources/spritesA/retourne1.png";
retourne2A.src = "ressources/spritesA/retourne2.png";
retourne3A.src = "ressources/spritesA/retourne3.png";
front1A.src = "ressources/spritesA/front1.png";
front2A.src = "ressources/spritesA/front2.png";
front3A.src = "ressources/spritesA/front3.png";
toile1A.src = "ressources/spritesA/toile1.png";
toile2A.src = "ressources/spritesA/toile2.png";
toile3A.src = "ressources/spritesA/toile3.png";
toile4A.src = "ressources/spritesA/toile4.png";
tombe1A.src = "ressources/spritesA/tombe1.png";
tombe2A.src = "ressources/spritesA/tombe2.png";
tombe3A.src = "ressources/spritesA/tombe3.png";
protegeDevantA.src = "ressources/spritesA/protegeD.png";
protegeHautA.src = "ressources/spritesA/protegeH.png";
couptete1A.src = "ressources/spritesA/tete1.png";
couptete2A.src = "ressources/spritesA/tete2.png";
touche1A.src = "ressources/spritesA/touche2.png";
touche2A.src = "ressources/spritesA/touche1.png";
touche3A.src = "ressources/spritesA/touche2.png";
pied1A.src = "ressources/spritesA/pied1.png";
pied2A.src = "ressources/spritesA/pied2.png";
decap1A.src = "ressources/spritesA/decap1.png";
decap2A.src = "ressources/spritesA/decap2.png";
decap3A.src = "ressources/spritesA/decap3.png";
decap4A.src = "ressources/spritesA/decap4.png";
mort1A.src = "ressources/spritesA/assis1.png";
mort2A.src = "ressources/spritesA/mort2.png";
mort3A.src = "ressources/spritesA/mort3.png";
mort4A.src = "ressources/spritesA/mort4.png";
roulade1A.src = "ressources/spritesA/roulade1.png";
roulade2A.src = "ressources/spritesA/roulade2.png";
roulade3A.src = "ressources/spritesA/roulade3.png";
roulade4A.src = "ressources/spritesA/roulade4.png";
roulade5A.src = "ressources/spritesA/roulade5.png";
roulade6A.src = "ressources/spritesA/roulade6.png";
tete1A.src = "ressources/spritesA/tetedecap1.png";
tete2A.src = "ressources/spritesA/tetedecap2.png";
tete3A.src = "ressources/spritesA/tetedecap3.png";
tete4A.src = "ressources/spritesA/tetedecap4.png";
tete5A.src = "ressources/spritesA/tetedecap5.png";
tete6A.src = "ressources/spritesA/tetedecap6.png";

var imageA = new Image();
imageA= deboutA;


//   chargement des sprites B

var imageB = new Image();

        deboutB.src = "ressources/spritesB/IA0/debout.png";
        assis1B.src = "ressources/spritesB/IA0/assis1.png";
        assis2B.src = "ressources/spritesB/IA0/assis2.png";
        attente1B.src = "ressources/spritesB/IA0/attente1.png";
        attente2B.src = "ressources/spritesB/IA0/attente2.png";
        attente3B.src = "ressources/spritesB/IA0/attente3.png";
        //protegeHB.src = "ressources/spritesB/IA0/protegeH.png";
        cou2B.src = "ressources/spritesB/IA0/cou2.png";
        cou3B.src = "ressources/spritesB/IA0/cou3.png";
        devant1B.src = "ressources/spritesB/IA0/devant1.png";
        devant2B.src = "ressources/spritesB/IA0/devant2.png";
        devant3B.src = "ressources/spritesB/IA0/devant3.png";
        genou1B.src = "ressources/spritesB/IA0/genou1.png";
        genou3B.src = "ressources/spritesB/IA0/genou3.png";
        marche1B.src = "ressources/spritesB/IA0/marche1.png";
        marche2B.src = "ressources/spritesB/IA0/marche2.png";
        marche3B.src = "ressources/spritesB/IA0/marche3.png";
        saut1B.src = "ressources/spritesB/IA0/saut1.png";
        saut2B.src = "ressources/spritesB/IA0/saut2.png";
        vainqueur1B.src = "ressources/spritesB/IA0/vainqueur1.png";
        vainqueur2B.src = "ressources/spritesB/IA0/vainqueur2.png";
        vainqueur3B.src = "ressources/spritesB/IA0/vainqueur3.png";
        retourne1B.src = "ressources/spritesB/IA0/retourne1.png";
        retourne2B.src = "ressources/spritesB/IA0/retourne2.png";
        retourne3B.src = "ressources/spritesB/IA0/retourne3.png";
        front1B.src = "ressources/spritesB/IA0/front1.png";
        front2B.src = "ressources/spritesB/IA0/front2.png";
        front3B.src = "ressources/spritesB/IA0/front3.png";
        toile1B.src = "ressources/spritesB/IA0/toile1.png";
        toile2B.src = "ressources/spritesB/IA0/toile2.png";
        toile3B.src = "ressources/spritesB/IA0/toile3.png";
        toile4B.src = "ressources/spritesB/IA0/toile4.png";
        tombe1B.src = "ressources/spritesB/IA0/tombe1.png";
        tombe2B.src = "ressources/spritesB/IA0/tombe2.png";
        tombe3B.src = "ressources/spritesB/IA0/tombe3.png";
        protegeDevantB.src = "ressources/spritesB/IA0/protegeD.png";
        protegeHautB.src = "ressources/spritesB/IA0/protegeH.png";
        couptete1B.src = "ressources/spritesB/IA0/tete1.png";
        couptete2B.src = "ressources/spritesB/IA0/tete2.png";
        touche1B.src = "ressources/spritesB/IA0/touche2.png";
        touche2B.src = "ressources/spritesB/IA0/touche1.png";
        touche3B.src = "ressources/spritesB/IA0/touche2.png";
        pied1B.src = "ressources/spritesB/IA0/pied1.png";
        pied2B.src = "ressources/spritesB/IA0/pied2.png";
        decap1B.src = "ressources/spritesB/IA0/decap1.png";
        decap2B.src = "ressources/spritesB/IA0/decap2.png";
        decap3B.src = "ressources/spritesB/IA0/decap3.png";
        decap4B.src = "ressources/spritesB/IA0/decap4.png";
        mort1B.src = "ressources/spritesB/IA0/assis1.png";
        mort2B.src = "ressources/spritesB/IA0/mort2.png";
        mort3B.src = "ressources/spritesB/IA0/mort3.png";
        mort4B.src = "ressources/spritesB/IA0/mort4.png";
        roulade1B.src = "ressources/spritesB/IA0/roulade1.png";
        roulade2B.src = "ressources/spritesB/IA0/roulade2.png";
        roulade3B.src = "ressources/spritesB/IA0/roulade3.png";
        roulade4B.src = "ressources/spritesB/IA0/roulade4.png";
        roulade5B.src = "ressources/spritesB/IA0/roulade5.png";
        roulade6B.src = "ressources/spritesB/IA0/roulade6.png";
        tete1B.src = "ressources/spritesB/IA0/tetedecap1.png";
        tete2B.src = "ressources/spritesB/IA0/tetedecap2.png";
        tete3B.src = "ressources/spritesB/IA0/tetedecap3.png";
        tete4B.src = "ressources/spritesB/IA0/tetedecap4.png";
        tete5B.src = "ressources/spritesB/IA0/tetedecap5.png";
        tete6B.src = "ressources/spritesB/IA0/tetedecap6.png";

var imageB = new Image();
imageB= deboutB;

var drax1B = new Image ();
drax1B.src = "ressources/sprites/drax1.png";
var drax2B = new Image ();
drax2B.src = "ressources/sprites/drax2.png";

var mariannaB = new Image ();
mariannaB.src = "ressources/sprites/marianna.png";

// sprites du gnome
var gnome1 = new Image();
var gnome2 = new Image ();
var gnome3 = new Image ();
var gnome4 = new Image ();
gnome1.src = "ressources/sprites/gnome1.png";
gnome2.src = "ressources/sprites/gnome2.png";
gnome3.src = "ressources/sprites/gnome3.png";
gnome4.src = "ressources/sprites/gnome4.png";


//   divers sprites

var tachesang = new Image();
tachesang.src = "ressources/sprites/sang.png";

var spriteombre = new Image();
spriteombre.src = "ressources/spritesA/teteombre.png";


var feu1 = new Image();
feu1.src = "ressources/sprites/feu1.png";
var feu2 = new Image();
feu2.src = "ressources/sprites/feu2.png";
var feu3 = new Image();
feu3.src = "ressources/sprites/feu3.png";


var gicle1 = new Image();
var gicle2 = new Image();
var gicle3 = new Image();
gicle1.src = "ressources/sprites/gicle1.png";
gicle2.src = "ressources/sprites/gicle2.png";
gicle3.src = "ressources/sprites/gicle3.png";


var serpent1A = new Image();
serpent1A.src = "ressources/decors/serpent1A.png";
var serpent2A = new Image();
serpent2A.src = "ressources/decors/serpent2A.png";
var serpent3A = new Image();
serpent3A.src = "ressources/decors/serpent3A.png";
var serpent4A = new Image();
serpent4A.src = "ressources/decors/serpent4A.png";

var serpent1B = new Image();
serpent1B.src = "ressources/decors/serpent1B.png";
var serpent2B = new Image();
serpent2B.src = "ressources/decors/serpent2B.png";
var serpent3B = new Image();
serpent3B.src = "ressources/decors/serpent3B.png";
var serpent4B = new Image();
serpent4B.src = "ressources/decors/serpent4B.png";



// *************** chargement  des sons *************** 

var attente = new Audio("ressources/sound/attente.mp3");
var cling = new Audio("ressources/sound/block1.mp3");
var cling2 = new Audio("ressources/sound/block2.mp3");
var cling3 = new Audio("ressources/sound/block3.mp3");
var coupdetete = new Audio("ressources/sound/coupdetete.mp3");
var coupdepied = new Audio("ressources/sound/coupdepied.mp3");
var decapite = new Audio("ressources/sound/decapite.mp3");
var epee = new Audio("ressources/sound/epee.mp3");
var feu = new Audio("ressources/sound/feu.mp3");
var mortdecap = new Audio("ressources/sound/mortdecap.mp3");
var mortKO = new Audio("ressources/sound/mortKO.mp3");
var prepare = new Audio("ressources/sound/prepare.mp3");
var protege = new Audio("ressources/sound/protege.mp3");
var roule = new Audio("ressources/sound/roule.mp3");
var tete = new Audio("ressources/sound/tete.mp3");
var tombe = new Audio("ressources/sound/tombe.mp3");
var touche = new Audio("ressources/sound/touche.mp3");
var touche2 = new Audio("ressources/sound/touche2.mp3");
var touche3 = new Audio("ressources/sound/touche3.mp3");
var grogne1 = new Audio("ressources/sound/grogne1.mp3");
var grogne2 = new Audio("ressources/sound/grogne2.mp3");


// *************** declaration des variables *************** 
var GOTOU = 100; 

var partie=0;
var demo=0;
var chronometre = 0;
var AI$ = "0"
var scoreA = 0;
var scoreB = 0;

var xA = 0;
var xB = 37;
var yAttA = 17;
var xAttA = 15;
var yAttB = 17;
var xAttB = 27;
var yFA = 15;
var yFB = 15;
var yTA = 16;
var yTB = 16;
var yMA = 18;
var yMB = 18;
var yGA = 20;
var yGB = 20;
var xFA = xA + 4;
var xTA = xA + 4;
var xMA = xA + 4;
var xGA = xA + 4;
var xFB = xB;
var xTB = xB;
var xMB = xB;
var xGB = xB;
var sens = 6;
var joueurA = 64;
var joueurB = 64;
var decapiteA = 1;
var decapiteB = 1;
var vieA = 12;
var vieB = 12;
var temps = 0;
var reftemps = 1;
var attenteA = 1;
var attenteB = 1;
var entree = 1 ;
var Aoccupe = 0;
var Boccupe = 0;
var spriteavanceA = 0;
var spritereculeA = 0;
var spriteavanceB = 0;
var spritereculeB = 0;
var sangA = 0;
var sangB = 0;
var serpentA = 1;
var serpentB = 1;
var sangdecapA = 0;
var sangdecapB = 0;
var chrono = 1;
var ySPRt = 111;
var xSPRt = xA + 3;
var gnome = 0;
var xGNOME = 1;
var numerotete = 1;
var numerognome = 1;
var football = 0;
var sortieA = 0;
var sortieB = 0;
var protegeDA = 0;
var protegeDB = 0;
var protegeHA = 0;
var protegeHB = 0;
var tempsfini = 0;
var gnometire = 1;
var bonusA = 0;
var bonusB = 0;
var infoBdegatF = 0;
var infoBdegatT = 0;
var infoBdegatG = 0;
var infocoupA = 0;
var infocoupB = 0;
var infoAdegatF = 0;
var infoAdegatT = 0;
var infoAdegatG = 0;
var jeu = 1;
var entreesorcier = 0;
var attaqueA = 0;
var attaqueB = 0;
var transition = 0;
var transitionfinie = 0;
//var afficheFINAL = 0;
var choixCLING = 0;
var choixTOUCHE = 0;
var songrogne = 0;
var lancerintro = 0;
var version = 0;
var assisA = 0;
var assisB = 0;
var xSPRt2 = 0;
var sensimageA = 6;	
var sensimageB = 6;
var a2=0;
var b2=0;
var a4=0;
var b4=0;
var arret = 0;
var distance = 0;


// variables de lancement du jeu;

	chronometre = 60;

   // demo;
   partie = 1, decorS = 2, IA = 4, sorcier = 0, marianna = 0, demo = 1;


   // 1 joueur;
   //partie = 1, decorS = 2, IA = 0, sorcier = 0, marianna = 0, demo = 0;
   //partie = 1, decorS = 4, IA = 7, sorcier = 0, marianna = 0, demo = 0; // sorcier;

   // mode vs;
   //partie = 2, decorS = 2, IA = 0, sorcier = 0, marianna = 0;

GOTOU = 100;




var render = function () { // ***************listing BARBARIAN******************


if ( GOTOU == 100 ) { // affichage du titre et de l'ecran pendant quelques secondes

	temps = temps + 1;

	if (temps >= 100 ) { 
		canvasContext.drawImage(decor2, 0, 0);
		canvasContext.fillStyle = "rgb(0,0,0)";
		canvasContext.fillText("demonstration", 245, 375)
     		canvasContext.fillText("00000", 196, 108);
      		canvasContext.fillText("00000", 380, 108);
		canvasContext.fillText(IA, 308, 108);

 	} else { canvasContext.drawImage(titre, 0, 0) };

	if (temps >= 200 ) { GOTOU = 8 };
};


//menu ;
      if ( GOTOU == 8 ) {


          if ( IA == 0 ) { AI$ = "0" };
          if ( IA == 1 ) { AI$ = "1" };
          if ( IA == 2 ) { AI$ = "2" };
          if ( IA == 3 ) { AI$ = "3" };
          if ( IA == 4 ) { AI$ = "4" };
          if ( IA == 5 ) { AI$ = "5" };
          if ( IA == 6 ) { AI$ = "6" };
          if ( IA == 7 ) { AI$ = "7" };

        // mise en data des spritesB;

        deboutB.src = "ressources/spritesB/IA" + AI$ + "/debout.png";
        assis1B.src = "ressources/spritesB/IA" + AI$ + "/assis1.png";
        assis2B.src = "ressources/spritesB/IA" + AI$ + "/assis2.png";
        attente1B.src = "ressources/spritesB/IA" + AI$ + "/attente1.png";
        attente2B.src = "ressources/spritesB/IA" + AI$ + "/attente2.png";
        attente3B.src = "ressources/spritesB/IA" + AI$ + "/attente3.png";
        //protegeHB.src = "ressources/spritesB/IA" + AI$ + "/protegeH.png";
        cou2B.src = "ressources/spritesB/IA" + AI$ + "/cou2.png";
        cou3B.src = "ressources/spritesB/IA" + AI$ + "/cou3.png";
        devant1B.src = "ressources/spritesB/IA" + AI$ + "/devant1.png";
        devant2B.src = "ressources/spritesB/IA" + AI$ + "/devant2.png";
        devant3B.src = "ressources/spritesB/IA" + AI$ + "/devant3.png";
        genou1B.src = "ressources/spritesB/IA" + AI$ + "/genou1.png";
        genou3B.src = "ressources/spritesB/IA" + AI$ + "/genou3.png";
        marche1B.src = "ressources/spritesB/IA" + AI$ + "/marche1.png";
        marche2B.src = "ressources/spritesB/IA" + AI$ + "/marche2.png";
        marche3B.src = "ressources/spritesB/IA" + AI$ + "/marche3.png";
        saut1B.src = "ressources/spritesB/IA" + AI$ + "/saut1.png";
        saut2B.src = "ressources/spritesB/IA" + AI$ + "/saut2.png";
        vainqueur1B.src = "ressources/spritesB/IA" + AI$ + "/vainqueur1.png";
        vainqueur2B.src = "ressources/spritesB/IA" + AI$ + "/vainqueur2.png";
        vainqueur3B.src = "ressources/spritesB/IA" + AI$ + "/vainqueur3.png";
        retourne1B.src = "ressources/spritesB/IA" + AI$ + "/retourne1.png";
        retourne2B.src = "ressources/spritesB/IA" + AI$ + "/retourne2.png";
        retourne3B.src = "ressources/spritesB/IA" + AI$ + "/retourne3.png";
        front1B.src = "ressources/spritesB/IA" + AI$ + "/front1.png";
        front2B.src = "ressources/spritesB/IA" + AI$ + "/front2.png";
        front3B.src = "ressources/spritesB/IA" + AI$ + "/front3.png";
        toile1B.src = "ressources/spritesB/IA" + AI$ + "/toile1.png";
        toile2B.src = "ressources/spritesB/IA" + AI$ + "/toile2.png";
        toile3B.src = "ressources/spritesB/IA" + AI$ + "/toile3.png";
        toile4B.src = "ressources/spritesB/IA" + AI$ + "/toile4.png";
        tombe1B.src = "ressources/spritesB/IA" + AI$ + "/tombe1.png";
        tombe2B.src = "ressources/spritesB/IA" + AI$ + "/tombe2.png";
        tombe3B.src = "ressources/spritesB/IA" + AI$ + "/tombe3.png";
        protegeDevantB.src = "ressources/spritesB/IA" + AI$ + "/protegeD.png";
        protegeHautB.src = "ressources/spritesB/IA" + AI$ + "/protegeH.png";
        couptete1B.src = "ressources/spritesB/IA" + AI$ + "/tete1.png";
        couptete2B.src = "ressources/spritesB/IA" + AI$ + "/tete2.png";
        touche1B.src = "ressources/spritesB/IA" + AI$ + "/touche2.png";
        touche2B.src = "ressources/spritesB/IA" + AI$ + "/touche1.png";
        touche3B.src = "ressources/spritesB/IA" + AI$ + "/touche2.png";
        pied1B.src = "ressources/spritesB/IA" + AI$ + "/pied1.png";
        pied2B.src = "ressources/spritesB/IA" + AI$ + "/pied2.png";
        decap1B.src = "ressources/spritesB/IA" + AI$ + "/decap1.png";
        decap2B.src = "ressources/spritesB/IA" + AI$ + "/decap2.png";
        decap3B.src = "ressources/spritesB/IA" + AI$ + "/decap3.png";
        decap4B.src = "ressources/spritesB/IA" + AI$ + "/decap4.png";
        mort1B.src = "ressources/spritesB/IA" + AI$ + "/assis1.png";
        mort2B.src = "ressources/spritesB/IA" + AI$ + "/mort2.png";
        mort3B.src = "ressources/spritesB/IA" + AI$ + "/mort3.png";
        mort4B.src = "ressources/spritesB/IA" + AI$ + "/mort4.png";
        roulade1B.src = "ressources/spritesB/IA" + AI$ + "/roulade1.png";
        roulade2B.src = "ressources/spritesB/IA" + AI$ + "/roulade2.png";
        roulade3B.src = "ressources/spritesB/IA" + AI$ + "/roulade3.png";
        roulade4B.src = "ressources/spritesB/IA" + AI$ + "/roulade4.png";
        roulade5B.src = "ressources/spritesB/IA" + AI$ + "/roulade5.png";
        roulade6B.src = "ressources/spritesB/IA" + AI$ + "/roulade6.png";
        tete1B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap1.png";
        tete2B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap2.png";
        tete3B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap3.png";
        tete4B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap4.png";
        tete5B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap5.png";
        tete6B.src = "ressources/spritesB/IA" + AI$ + "/tetedecap6.png";


        GOTOU = 16;

      };


     //               *********************************************************;
     //               *****************    variables       ********************;
     //               *********************************************************;

     //variables ;
     if ( GOTOU == 16 ) {

     GOTOU = 0;

    xA = 0, xB = 37;
    yAttA = 17, xAttA = 15;
    yAttB = 17, xAttB = 27;
    yFA = 15, yFB = 15 ;
    yTA = 16, yTB = 16 ;
    yMA = 18, yMB = 18 ;
    yGA = 20, yGB = 20 ;
    xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
    xFB = xB, xTB = xB, xMB = xB, xGB = xB;
    sens = 6;
    joueurA = 64;
    joueurB = 64;
    decapiteA = 1;
    decapiteB = 1;
    vieA = 12;
    vieB = 12;
    temps = 1;
    reftemps = 1;
    attenteA = 1;
    attenteB = 1;
    entree = 1 ;
    Aoccupe = 0;
    Boccupe = 0;
    spriteavanceA = 0;
    spritereculeA = 0;
    spriteavanceB = 0;
    spritereculeB = 0;
    sangA = 0;
    sangB = 0;
    serpentA = 1;
    serpentB = 1;
    sangdecapA = 0;
    sangdecapB = 0;
    chrono = 1;
    ySPRt = 111;
    xSPRt = xA + 3;
    gnome = 0;
    xGNOME = 1;
    numerotete = 1;
    numerognome = 1;
    football = 0;
    sortieA = 0;
    sortieB = 0;
    protegeDA = 0;
    protegeDB = 0;
    protegeHA = 0;
    protegeHB = 0;
    tempsfini = 0;
    gnometire = 1;
    bonusA = 0;
    bonusB = 0;
    infoBdegatF = 0;
    infoBdegatT = 0;
    infoBdegatG = 0;
    infocoupA = 0;
    infocoupB = 0;
    infoAdegatF = 0;
    infoAdegatT = 0;
    infoAdegatG = 0;
    jeu = 1;
    entreesorcier = 0;
    attaqueA = 0;
    attaqueB = 0;
    //couleurok = 0;
    //couleurtete = 0;

    transition = 0;
    transitionfinie = 0;

    //afficheFINAL = 0;
    //afficheMARIANNA = 0;

    choixCLING = 0;
    choixTOUCHE = 0;
    songrogne = 0;

    lancerintro = 0;
    version = 0;
    assisA = 0;
    assisB = 0;
    xSPRt2 = 0;
	sensimageA = 6;
	sensimageB = 6;
	a2=0;
	b2=0;
	a4=0;
	b4=0;
	arret = 0;


      };

     //                   ************************************;
     //                   *******   DEBUT DU JEU    **********;
     //                   ************************************;



     // entrees clavier permanentes;


     // arret de la partie
     if (13 in keysDown) { arret = 1 } else { arret = 0 };

     // message cache
	if (86 in keysDown) { version = 1 } else { version = 0 }; // V





      if ( GOTOU == 0 ) { temps = temps + 1 };



      //                    ************* scenes d animation************;


       if ( GOTOU == 0 && jeu == 2 ) { GOTOU = 23 };


       if ( GOTOU == 0 && sorcier == 1 ) {
           if ( xA <= 10 ) {

		feu.stop();

              sens = 6;

              Aoccupe = 1;
              joueurA = 777, spriteA = 6213; // joueurA=fini

              Boccupe = 1;
              joueurB = 777, marianna = 1, spriteB = 6969;

              //xAttB=40;
              xA = 21, xB = 16;

              jeu = 2;

              GOTOU = 31;

           };

          GOTOU = 23;
       };


       if ( GOTOU == 0 && bonusA == 1 ) {
          scoreA = scoreA + 10, chronometre = chronometre - 1;
           if ( chronometre < 1 ) {
              chronometre = 0, scoreA = scoreA - 10;
               if ( xB >= 39 ) { sortieA = 1, Aoccupe = 0 };
           };
       };

       if ( GOTOU == 0 && bonusB == 1 ) {
          scoreB = scoreB + 10, chronometre = chronometre - 1;
           if ( chronometre < 1 ) {
              chronometre = 0, scoreB = scoreB - 10;
               if ( xA >= 39 ) { sortieB = 1, Boccupe = 0 };
           };
       };

      if ( GOTOU == 0 && entree == 1 ) {
          if ( xA >= 13 || xB <= 22 ) { entree = 0 };
      };

      if ( GOTOU == 0 && sortieA == 1 ) {

          if ( joueurB == 95 || joueurB == 910 ) {
              if ( xA >= 39 ) {

                  //******* round solo gagne en inverse;
                   if ( partie == 1 ) {
                       if ( demo == 1 ) {
				mortKO.stop(), mortdecap.stop();
                           if ( transition == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                           if ( GOTOU == 0 && transitionfinie == 1 ) { scoreA = 0, scoreB = 0, temps = 0 , GOTOU = 100 }; // ex goto 8
                       };

                       if ( GOTOU == 0 && transition == 1 ) { GOTOU = 26 };

                       if ( GOTOU == 0 && transitionfinie == 1 ) { IA = IA + 1 };

                       if ( GOTOU == 0 && IA > 7 ) {
                          IA = 7, sorcier = 1;
                          sens = 9;
                          joueurB = 666, joueurA = 94;
                          xA = 35, xB = 6;
                          entree = 0, sortieA = 0;
                          entreesorcier = 1;
                          Boccupe = 1 ;
                          reftempsB = temps;
                          //couleurok = 0;
                          GOTOU = 26;
                       };
                      // changement de decor;
                       if ( GOTOU == 0 ) {
                           if ( IA == 0 ) { decorS = 2 };
                           if ( IA == 1 ) { decorS = 1 };
                           if ( IA == 2 ) { decorS = 2 };
                           if ( IA == 3 ) { decorS = 1 };
                           if ( IA == 4 ) { decorS = 3 };
                           if ( IA == 5 ) { decorS = 4 };
                           if ( IA == 6 ) { decorS = 3 };
                           if ( IA == 7 ) { decorS = 4 };

                           if ( demo == 1 ) { decorS = 2 };
                       };

                       if ( GOTOU == 0 && transitionfinie == 1 ) { GOTOU = 8 };

                       if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 26 };
                       if ( GOTOU == 0 ) { GOTOU == 8 };
                   };


                 //******* round VS gagne en inverse;
                  if ( GOTOU == 0 && partie == 2 ) {
                     if ( GOTOU == 0 && transition ==1 ) { GOTOU = 26 };
                      if ( GOTOU == 0 && transitionfinie == 1 ) {
                         chronometre = 60;
				mortKO.stop(), mortdecap.stop();
                          if ( decorS == 2 ) { decorS = 1, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 1 ) { decorS = 3, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 3 ) { decorS = 4, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 4 ) { decorS = 2, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 ) { GOTOU = 16 };// ex32
                      };
                      if ( GOTOU == 0 ) { transition = 1, reftemps = temps, GOTOU = 26 };
                  };
              };
          };



          if ( GOTOU == 0 && tempsfini == 0 ) {
             if ( xA <= 1 && xB >= 39 ) {
                  //******* round solo gagne;
                   if ( partie == 1 ) {
                       if ( demo == 1 ) {
				mortKO.stop(), mortdecap.stop();
                           if ( transition == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                           if ( GOTOU == 0 && transitionfinie == 1 ) { scoreA = 0, scoreB = 0, temps = 0 , GOTOU = 100 }; // ex goto 8
                       };

                       if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };

                       if ( GOTOU == 0 && transitionfinie == 1 ) { IA = IA + 1 };

                       if ( GOTOU == 0 && IA > 7 ) {
                          IA = 7, sorcier = 1;
                          sens = 9;
                          joueurB = 666, joueurA = 94;
                          xA = 35, xB = 6;
                          entree = 0, sortieA = 0;
                          entreesorcier = 1;
                          Boccupe = 1 ;
                          reftempsB = temps;
                          //couleurok = 0;
                          GOTOU = 26;
                       };
                      // changement de decor;
                       if ( GOTOU == 0 ) {
                           if ( IA == 0 ) { decorS = 2 };
                           if ( IA == 1 ) { decorS = 1 };
                           if ( IA == 2 ) { decorS = 2 };
                           if ( IA == 3 ) { decorS = 1 };
                           if ( IA == 4 ) { decorS = 3 };
                           if ( IA == 5 ) { decorS = 4 };
                           if ( IA == 6 ) { decorS = 3 };
                           if ( IA == 7 ) { decorS = 4 };

                           if ( demo == 1 ) { decorS = 2 };
                       };

                       if ( GOTOU == 0 && transitionfinie == 1 ) { GOTOU = 8 };

                       if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                       if ( GOTOU == 0 ) { GOTOU = 8 };
                   };


                 //******* round VS gagne;
                  if ( GOTOU == 0 && partie == 2 ) {

                      if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };
                      if ( GOTOU == 0 && transitionfinie == 1 ) {
                         chronometre = 60;
				mortKO.stop(), mortdecap.stop();
                          if ( decorS == 2 ) { decorS = 1, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 1 ) { decorS = 3, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 3 ) { decorS = 4, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 && decorS == 4 ) { decorS = 2, GOTOU = 16 };// ex32
                          if ( GOTOU == 0 ) { GOTOU = 16 };// ex32
                      };

                      if ( GOTOU == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };

                  };
              };
         };

       if ( GOTOU == 0 && tempsfini == 1 ) {
              if ( sens == 6 ) {
                  if ( xA < 1 && xB >= 39 ) {
                     chronometre = 60;
                     GOTOU = 16;
                   };
               }; 
              if ( GOTOU == 0 && sens == 9 ) {
                   if ( xB < 1 && xA >= 39 ) {
                     chronometre = 60;
                     GOTOU = 16;
                    };
               };

          };

          if ( GOTOU == 0 ) { GOTOU = 22 };
      };


       if ( GOTOU == 0 && sortieB == 1 ) {
           if ( xB < 1 ) {
               if ( joueurA == 95 || joueurA == 910 ) {

                  //********** partie solo perdue par mort inversee;
                    if ( partie == 1 ) {
                        if ( demo == 1 ) {
				mortKO.stop(), mortdecap.stop();
                            if ( transition == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                            if ( GOTOU == 0 && transitionfinie == 1 ) { scoreA = 0, scoreB = 0, temps = 0 , GOTOU = 100 }; // ex goto 8
                        };

                        if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };
                        if ( GOTOU == 0 && transitionfinie == 1 ) {
                           IA = 0, scoreA = 0, scoreB = 0;
                           decorS = 2, GOTOU = 8;
                        };

                        if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };

                        if ( GOTOU == 0 ) { GOTOU = 8 };

                    };

                  //******* round VS perdu en inverse;
                   if ( GOTOU == 0 && partie == 2 ) {
                       if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };
                       if ( GOTOU == 0 && transitionfinie == 1 ) {
                          chronometre = 60;
				mortKO.stop(), mortdecap.stop();
                           if ( decorS == 2 ) { decorS = 1, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 1 ) { decorS = 3, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 3 ) { decorS = 4, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 4 ) { decorS = 2, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 ) { GOTOU = 16 };// ex32
                       };
                       if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };

                    };
               };
           };



           if ( GOTOU == 0 && tempsfini == 0 ) {
               if ( xA >= 39 && xB >= 39 ) {
                  //********** partie solo perdue;
                    if ( partie == 1 ) {
                        if ( demo == 1 ) {
				mortKO.stop(), mortdecap.stop();
                            if ( transition == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                            if ( GOTOU == 0 && transitionfinie == 1 ) { scoreA = 0, scoreB = 0, temps = 0 , GOTOU = 100 }; // ex goto 8
                        };

                        if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };
                        if ( GOTOU == 0 && transitionfinie == 1 ) {
                           IA = 0, scoreA = 0, scoreB = 0;
                           decorS = 2, GOTOU = 8;
                        };

                        if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };
                        if ( GOTOU == 0 ) { GOTOU = 8 };
                    };

                  //******* round VS perdu;
                   if ( GOTOU == 0 && partie == 2 ) {
                       if ( GOTOU == 0 && transition == 1 ) { GOTOU = 31 };
                       if ( GOTOU == 0 && transitionfinie == 1 ) {
                          chronometre = 60;
							mortKO.stop(), mortdecap.stop();
                           if ( decorS == 2 ) { decorS = 1, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 1 ) { decorS = 3, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 3 ) { decorS = 4, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 && decorS == 4 ) { decorS = 2, GOTOU = 16 };// ex32
                           if ( GOTOU == 0 ) { GOTOU = 16 };// ex32
                       };
                       if ( GOTOU == 0 && sorcier == 0 ) { transition = 1, reftemps = temps, GOTOU = 31 };

                   };
               };
           };

           if ( GOTOU == 0 ) { GOTOU = 21 };

       };

    if ( GOTOU == 0 && gnome == 1 ) { GOTOU = 12 };



     //                   ************************************;
     //                   *******GESTION DES DEGATS***********;
     //                   ************************************;

     //degats ;
      if ( GOTOU == 23 ) { GOTOU = 0 };


     //degats sur joueurA;

      if ( GOTOU == 0 && sorcier == 1 ) {

           if ( xA < 31 ) {
               if ( xAttB >= xTA && xAttB <= xA + 2 ) {
                   if ( yAttB == yTA ) {
                      gnome = 0;
                       if ( jeu == 0 ) { GOTOU = 26 };
                       if ( GOTOU == 0 ) { joueurA = 6500, Aoccupe = 1, reftemps = temps, sangA = 0 };
                       if ( GOTOU == 0 ) { joueurB = 6660, spriteB = 6661, Boccupe = 1, reftempsB = temps, sangB = 0 }; // sorcierfini
                       if ( GOTOU == 0 ) { jeu = 0, GOTOU = 26 };
                   };
               };

               if ( GOTOU == 0 && xAttB >= xGA ) {
                   if ( yAttB == yGA ) {
                      gnome = 0;
                       if ( jeu == 0 ) { GOTOU = 26 };
                       if ( GOTOU == 0 ) { joueurA = 6500, Aoccupe = 1, reftemps = temps, sangA = 0 };
                       if ( GOTOU == 0 ) { joueurB = 6660, spriteB = 6661, Boccupe = 1, reftempsB = temps, sangB = 0 };
                       if ( GOTOU == 0 ) { jeu = 0, GOTOU = 26 };
                   };
               };
           };

           if ( GOTOU == 0 && Aoccupe == 1 ) { GOTOU = 26 };
           if ( GOTOU == 0 ) { sangA = 0, GOTOU = 22 };

      };


      if ( GOTOU == 0 && sens == 6 ) {
           if ( xA < xB ) {
               if ( xAttB <= xFA && yAttB == yFA ) {
                   if ( joueurA == 613 ) { joueurA = 20002, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 619, infoAdegatF = infoAdegatF + 1, GOTOU = 26 };
               };

               if ( GOTOU == 0 && xAttB <= xTA && yAttB == yTA ) {
                   if ( joueurB == 617 ) { joueurA = 619, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 620, scoreB = scoreB + 250, infoAdegatT = infoAdegatT + 1, GOTOU = 26 };
               }; 

               if ( GOTOU == 0 && xAttB <= xMA && yAttB == yMA ) {
                   if ( joueurA == 612 ) { joueurA = 2000, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 620, scoreB = scoreB + 250, GOTOU = 26 };
               };

               if ( GOTOU == 0 && xAttB <= xGA && yAttB == yGA ) {
                   if ( joueurB == 618 ) { joueurA = 619, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurB == 615 ) { joueurA = 619, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurA == 612 ) { joueurA = 2000, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurB == 611 ) { joueurA = 619, infoAdegatG = infoAdegatG + 1, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 620, scoreB = scoreB + 100, infoAdegatG = infoAdegatG + 1, GOTOU = 26 };
               };
           };

      };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( xA > xB ) {
               if ( xAttB >= xFA && yAttB == yFA ) {
                   if ( joueurA == 913 ) { joueurA = 20002, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 919, infoAdegatF = infoAdegatF + 1, GOTOU = 26 };
               };

               if ( GOTOU == 0 && xAttB >= xTA && yAttB == yTA ) {
                   if ( joueurB == 917 ) { joueurA = 919, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 920, scoreB = scoreB + 250, infoAdegatT = infoAdegatT + 1, GOTOU = 26 };
               };
               if ( GOTOU == 0 && xAttB >= xMA && yAttB == yMA ) {
                   if ( joueurA == 912 ) { joueurA = 2000, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 920, scoreB = scoreB + 250, GOTOU = 26 };
               };
               if ( GOTOU == 0 && xAttB >= xGA && yAttB == yGA ) {
                   if ( joueurB == 918 ) { joueurA = 919, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurB == 915 ) { joueurA = 919, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurA == 912 ) { joueurA = 2000, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurB == 911 ) { joueurA = 919, infoAdegatG = infoAdegatG + 1, GOTOU = 26 };
                   if ( GOTOU == 0 ) { joueurA = 920, scoreB = scoreB + 100, infoAdegatG = infoAdegatG + 1, GOTOU = 26 };
               };
           };
       };



      if ( GOTOU == 0 && Aoccupe == 1 ) { GOTOU = 26 }; // important pour les animations
      if ( GOTOU == 0 ) { sangA = 0 };


     //               *********************************************************;
     //               ***************** evenements clavier ********************;
     //               *********************************************************;


     //clavier ;
      if ( GOTOU == 22 ) { GOTOU = 0 };



     //                       remise a zero  du pave virtuel;
      if ( GOTOU == 0 ) {

         x1 = 7, y1 = 7;
         levier1 = 5; // neutre

          if ( demo == 0 ) {
             //                       ENTREE DES TOUCHES;

              if ( 38 in keysDown ) { y1 = y1 - 1 };
              if ( 40 in keysDown ) { y1 = y1 + 1 };
              if ( 39 in keysDown ) { x1 = x1 + 1 };
              if ( 37 in keysDown ) { x1 = x1 - 1 };

             // touche A;
             if ( 16 in keysDown ) { attaqueA = 1 } else { attaqueA = 0 };



             //                       amplitude du pave virtuel;
              if ( y1 > 9 ) { y1 = 9 };
              if ( y1 < 5 ) { y1 = 5 };
              if ( x1 > 9 ) { x1 = 9 };
              if ( x1 < 5 ) { x1 = 5 };


             //                        position du "levier"  virtuel;

              if ( sens == 6 ) {
                  if ( x1 == 6 && y1 == 6 ) { levier1 = 1 };
                 // hautG;
                  if ( x1 == 8 && y1 == 6 ) { levier1 = 3 };
                 // hautD;
                  if ( x1 == 6 && y1 == 8 ) { levier1 = 7 };
                 //basG;
                  if ( x1 == 8 && y1 == 8 ) { levier1 = 9 };
                 //basD;
                  if ( x1 == 6 && y1 == 7 ) { levier1 = 4 };
                 //gauche;
                  if ( x1 == 8 && y1 == 7 ) { levier1 = 6 };
                 //droite;
                  if ( x1 == 7 && y1 >= 8 ) { levier1 = 2 };
                 //bas;
                  if ( x1 == 7 && y1 == 6 ) { levier1 = 8 };
                 //haut;
              }; 
          };

          if ( sens == 9 ) {
              if ( x1 <= 6 && y1 <= 6 ) { levier1 = 3 }; 
              if ( x1 >= 8 && y1 <= 6 ) { levier1 = 1 };
              if ( x1 <= 6 && y1 >= 8 ) { levier1 = 9 };
              if ( x1 >= 8 && y1 >= 8 ) { levier1 = 7 };
              if ( x1 <= 6 && y1 == 7 ) { levier1 = 4 }; 
              if ( x1 >= 8 && y1 == 7 ) { levier1 = 6 };
              if ( x1 == 7 && y1 >= 8 ) { levier1 = 2 };
              if ( x1 == 7 && y1 <= 6 ) { levier1 = 8 }; 
          }; 
      }; 
     //                       **********************************;
     //                       ******* animations  auto *********;
     //                       **********************************;

      if ( GOTOU == 0 && entree == 1 ) {
         if ( lancerintro == 0 ) { prepare.play(), lancerintro = 1 };
         levier1 = 6, GOTOU = 25;
      };

      if ( GOTOU == 0 && sortieA == 1 ) {
          if ( sens == 9 ) { levier1 = 6, GOTOU = 25 };
          if ( GOTOU == 0 ) { sens = 6, levier1 = 4, GOTOU = 25 };
      };

      if ( GOTOU == 0 && entreesorcier == 1 ) {
          if ( GOTOU == 0 && xA <= 29 ) { entreesorcier = 0, GOTOU = 26 }; 
          if ( GOTOU == 0 ) { levier1 = 4, GOTOU = 25 };
      }; 

     //                   ************************************;
     //                   **********   MODE DEMO   ***********;
     //                   ************************************;



       if ( GOTOU == 0 && demo == 1 ) {
 
           if ( sens == 6 ) {
              distance = xB - xA;
 
               if ( distance >= 15 ) { //  quand trop loin;
                  joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26;
               };


               if ( GOTOU == 0 && distance == 12 && joueurB == 64 ) { joueurA = 61400, reftemps = temps, Aoccupe = 1, GOTOU = 26 };

               if ( GOTOU == 0 && distance == 9 ) {
                   if ( GOTOU == 0 && attenteB > 50 ) { joueurA = 61400, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && joueurB == 6150 ) { joueurA = 68, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && Boccupe == 1 ) { joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
               };

               if ( GOTOU == 0 && distance < 9 && distance > 6 ) { // distance de combat 1;

                  // pour se rapprocher;
                   if ( joueurB == 6150 ) { joueurA = 68, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && levier2 == 4 ) { joueurA = 618, reftemps = temps, Aoccupe = 1, GOTOU = 26 };

                   if ( GOTOU == 0 && joueurB == 67 ) { joueurA = 613, reftemps = temps, GOTOU = 26 };


                  //pour eviter les degats repetitifs;
                   if ( GOTOU == 0 && infoAdegatG > 4 ) {
                       if ( joueurB == 61002 || joueurB == 68 ) { joueurA = 68, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   };
                   if ( GOTOU == 0 && infoAdegatG > 2 ) {
                       if ( joueurB == 61002 || joueurB == 68 ) { joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   };

                   if ( GOTOU == 0 && infoAdegatT > 2 ) {
                       if ( joueurB == 63 ) { joueurA = 68, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   };

                   if ( GOTOU == 0 && infoAdegatF > 2 ) {
                       if ( joueurB == 67 ) { joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   };

                  //pour alterner les attaques;

                   if ( GOTOU == 0 && infocoupA == 0 ) { joueurA = 66, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 1 ) { joueurA = 67, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 2 ) { joueurA = 618, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 3 ) { joueurA = 618, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 4 ) { joueurA = 63, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 5 ) { levier1 = 4, infocoupA = 0, GOTOU = 25 };


               };

               if ( GOTOU == 0 && distance <= 6 ) {

                   if ( joueurB == 66 ) { joueurA = 612, reftemps = temps, GOTOU = 26 };

                   if ( GOTOU == 0 && infoAdegatG > 4 ) {
                       if ( joueurB == 61002 || joueurB == 68 ) { joueurA = 68, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   };
                   if ( GOTOU == 0 && infoAdegatG > 2 ) {
                       if ( joueurB == 611 ) { joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                       if ( GOTOU == 0 ) {
			if ( joueurB == 61002 || joueurB == 68 ) { joueurA = 615, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
			};
                   };

                   if ( GOTOU == 0 && infocoupA == 0 ) { joueurA = 611, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 1 ) { joueurA = 617, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 2 ) { joueurA = 618, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 3 ) { joueurA = 68, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 4 ) { joueurA = 68, infocoupA = infocoupA + 1, reftemps = temps, Aoccupe = 1, GOTOU = 26 };
                   if ( GOTOU == 0 && infocoupA == 5 ) { levier1 = 4, infocoupA = 0, GOTOU = 25 };

               };


           };
 
 
           if ( GOTOU == 0 && sens == 9 ) { GOTOU = 8 };

       };





     //                       redirection suivant les touches;

      if ( GOTOU == 0 && levier1 == 1 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 3 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 7 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 9 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 2 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 8 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 4 ) { GOTOU = 25 };
      if ( GOTOU == 0 && levier1 == 6 ) { GOTOU = 25 };


     //                       action si aucune touche n//a ete touch‚e;
      if ( GOTOU == 0 ) {
         spriteavanceA = 0;
         spritereculeA = 0;

         protegeDA = 0, protegeHA = 0;

         attenteA = attenteA + 1;
         levier1 = 5 ;
      }; 

     // pour se relever;
      if ( GOTOU == 0 ) { assisA = 0 };
      if ( GOTOU == 0 && joueurA == 61002 ) { joueurA = 61000, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
      if ( GOTOU == 0 && joueurA == 9102 ) { joueurA = 9106, Aoccupe = 1, reftemps = temps, GOTOU = 26 };


     //attente des 5 secondes;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( attenteA > 300 ) { joueurA = 61, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
      };
      if ( GOTOU == 0 && sens == 9 ) {
          if ( attenteA > 300 ) { joueurA = 91, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
      };

     // etat debout;
      if ( GOTOU == 0 && sens == 6 ) { joueurA = 64 };
      if ( GOTOU == 0 && sens == 9 ) { joueurA = 94 };


      if ( GOTOU == 0 ) { GOTOU = 26 };



     //               *********************************************************;
     //               ***************** ACTIONS suivant clavier ***************;
     //               *********************************************************;

     //action ;
      if ( GOTOU == 25 ) { GOTOU = 0 };

      if ( GOTOU == 0 ) { attenteA = 1}; // remise a zero de l//attente


     //                       droite,gauche, decapite, devant (normal);


      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 6 ) {
             protegeDA = 0;
              if ( GOTOU == 0 && spriteavanceA == 1 ) { joueurA = 691, GOTOU = 26};
              if ( GOTOU == 0 && spriteavanceA == 2 ) { joueurA = 692, GOTOU = 26};
              if ( GOTOU == 0 && spriteavanceA == 3 ) { joueurA = 693, GOTOU = 26};
              if ( GOTOU == 0 && spriteavanceA == 4 ) { joueurA = 694, GOTOU = 26};
              if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26};
              if ( GOTOU == 0 ) { joueurA = 69, reftemps = temps, GOTOU = 26};
          };

          if ( GOTOU == 0 && levier1 == 4 ) {
             protegeHA = 0;
              if ( GOTOU == 0 && spritereculeA == 1 ) { joueurA = 6901, GOTOU = 26};
              if ( GOTOU == 0 && spritereculeA == 2 ) { joueurA = 6902, GOTOU = 26};
              if ( GOTOU == 0 && spritereculeA == 3 ) { joueurA = 6903, GOTOU = 26};
              if ( GOTOU == 0 && spritereculeA == 4 ) { joueurA = 6904, GOTOU = 26};
              if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26};
              if ( GOTOU == 0 ) { joueurA = 690, reftemps = temps, GOTOU = 26};
          };
      };

      //                       droite, gauche, decapite, devant (inverse);

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier1 == 6 ) {
              protegeHA = 0;
               if ( GOTOU == 0 && spritereculeA == 1 ) { joueurA = 9901, GOTOU = 26};
               if ( GOTOU == 0 && spritereculeA == 2 ) { joueurA = 9902, GOTOU = 26};
               if ( GOTOU == 0 && spritereculeA == 3 ) { joueurA = 9903, GOTOU = 26};
               if ( GOTOU == 0 && spritereculeA == 4 ) { joueurA = 9904, GOTOU = 26};
               if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26};
               if ( GOTOU == 0 ) { joueurA = 990, reftemps = temps, GOTOU = 26};
           };

           if ( GOTOU == 0 && levier1 == 4 ) {
              protegeDA = 0;
               if ( GOTOU == 0 && spriteavanceA == 1 ) { joueurA = 991, GOTOU = 26};
               if ( GOTOU == 0 && spriteavanceA == 2 ) { joueurA = 992, GOTOU = 26};
               if ( GOTOU == 0 && spriteavanceA == 3 ) { joueurA = 993, GOTOU = 26};
               if ( GOTOU == 0 && spriteavanceA == 4 ) { joueurA = 994, GOTOU = 26};
               if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26};
               if ( GOTOU == 0 ) { joueurA = 99, reftemps = temps, GOTOU = 26};
           };
       };


     //                           saute, attaque cou;

      if ( GOTOU == 0 && sens == 6 ) {
          if ( GOTOU == 0 && levier1 == 8 ) {
             protegeDA = 0, protegeHA = 0;
             joueurA = 616, Aoccupe = 1, reftemps = temps, GOTOU = 26;
          };
      };

      if ( GOTOU == 0 && sens == 9 ) {
          if ( levier1 == 8 ) {
             protegeDA = 0, protegeHA = 0;
             joueurA = 916, Aoccupe = 1, reftemps = temps, GOTOU = 26;
          };
      };


     //                               assis, attaque genou;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 2 ) {
              if ( attaqueA == 1 && demo == 0 ) { joueurA = 68, Aoccupe = 1, reftemps = temps, GOTOU = 26};
              if ( assisA == 1 ) { joueurA = 61002, GOTOU = 26};
              if ( GOTOU == 0 ) { joueurA = 6100, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };
      if ( GOTOU == 0 && sens == 9 ) {
          if ( levier1 == 2 ) {
              if ( attaqueA == 1 && demo == 0 ) { joueurA = 98, Aoccupe = 1, reftemps = temps, GOTOU = 26};
              if ( assisA == 1 ) { joueurA = 9102, GOTOU = 26};
              if ( GOTOU == 0 ) { joueurA = 9100, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };


     //                               roulade AV, coup de pied;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 9 ) {
              if ( attaqueA == 1 && demo == 0 ) { joueurA = 611, Aoccupe = 1, reftemps = temps, GOTOU = 26};
             if ( GOTOU == 0 ) { joueurA = 615, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };
      if ( GOTOU == 0 && sens == 9 ) {
          if ( levier1 == 9 ) {
	     if ( attaqueA == 1 && demo == 0 ) { joueurA = 911, Aoccupe = 1, reftemps = temps, GOTOU = 26};
             if ( GOTOU == 0 ) { joueurA = 915, Aoccupe = 1, reftemps = temps, GOTOU = 26};              
          };
      };



     //                               roulade AR, coup sur front;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 7 ) {
              if ( attaqueA == 1 && demo == 0 ) { joueurA = 67, Aoccupe = 1, reftemps = temps, GOTOU = 26};
             if ( GOTOU == 0 ) { joueurA = 6150, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };
      if ( GOTOU == 0 && sens == 9 ) {
          if ( levier1 == 7 ) {
              if ( attaqueA == 1 && demo == 0 ) { joueurA = 97, Aoccupe = 1, reftemps = temps, GOTOU = 26};
             if ( GOTOU == 0 ) { joueurA = 9159, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };

     //                                   protection Haute, araignee;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 1 ) {
              if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 618, Aoccupe = 1, reftemps = temps, GOTOU = 26};	
              if ( GOTOU == 0 && protegeHA == 1 ) { joueurA = 613, GOTOU = 26};
              if ( GOTOU == 0 ) { joueurA = 6131, Aoccupe = 1, reftemps = temps, GOTOU = 26};
          };
      };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier1 == 1 ) {
               if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 918, Aoccupe = 1, reftemps = temps, GOTOU = 26};
               if ( GOTOU == 0 && protegeHA == 1 ) { joueurA = 913, GOTOU = 26};
               if ( GOTOU == 0 ) { joueurA = 9131, Aoccupe = 1, reftemps = temps, GOTOU = 26};
           };
       };


     //                                   protection devant, coup de tete;
      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier1 == 3 ) {
		if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 617, Aoccupe = 1, reftemps = temps, GOTOU = 26};              
		if ( protegeDA == 1 ) { joueurA = 612, GOTOU = 26};
              	if ( GOTOU == 0 ) { joueurA = 6121, Aoccupe = 1, reftemps = temps, GOTOU = 26};              
          };
      };
       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier1 == 3 ) {
               if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 917, Aoccupe = 1, reftemps = temps, GOTOU = 26};
               if ( protegeDA == 1 ) { joueurA = 912, GOTOU = 26};
               if ( GOTOU == 0 ) { joueurA = 9121, Aoccupe = 1, reftemps = temps, GOTOU = 26};
           };
       };

     //               ********************************************;
     //               *************GESTION DES ETATS**************;
     //               ********************************************;
     //gestion ;
      if ( GOTOU == 26 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurA == 61 ) { // attente;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
           if ( GOTOU == 0 && temps > reftemps + 100 ) { Aoccupe = 0, attenteA = 1, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 74 ) { spriteA = 62001, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 60 ) { spriteA = 62002, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 46 ) { spriteA = 62003, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 62002, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) { attente.play(), spriteA = 62001, GOTOU = 1 };		
          GOTOU = 1;
       };


      if ( GOTOU == 0 && joueurA == 91 ) { // attenteR;
         xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          if ( GOTOU == 0 && temps > reftemps + 100 ) { Aoccupe = 0, attenteA = 1, joueurA = 94, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 74 ) { spriteA = 921, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 60 ) { spriteA = 922, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 46 ) { spriteA = 923, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 922, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 20 ) { GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 19 ) { attente.play(), spriteA = 921, GOTOU = 1 };
         GOTOU = 1;
      };


      if ( GOTOU == 0 && joueurA == 64 ) { // debout;
         spriteA = 64;
         decapiteA = 1;
         sangA = 0;
         xAttA = xA, yAttA = 14;
         yFA = 15, yTA = 16, yMA = 18, yGA = 20;
         xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          if ( GOTOU == 0 && demo == 1 ) {
              if ( GOTOU == 0 && temps > reftemps + 10 ) { Aoccupe = 0 };
          };
         GOTOU = 1;
      };

      if ( GOTOU == 0 && joueurA == 94 ) { // deboutR;
         spriteA = 94;
         decapiteA = 1;
         sangA = 0;
         xAttA = xFA + 4, yAttA = 14;
         yFA = 15, yTA = 16, yMA = 18, yGA = 20;
         xFA = xA, xTA = xA, xMA = xA, xGA = xA;
         GOTOU = 1;
      }; 


     //                               avance;

      if ( GOTOU == 0 && joueurA == 69 ) { //avance;
          if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
          if ( GOTOU == 0 ) { xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4, xAttA = xA };
          if ( GOTOU == 0 ) { spriteA = 691, spriteavanceA = 1, xA = xA + 1, GOTOU = 1 };        
      };

     if ( GOTOU == 0 && joueurA == 691 ) { // avance1;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 ) { xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4, xAttA = xA };
         if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA + 1, spriteA = 692, spriteavanceA = 2, GOTOU = 1 };
     };


     if ( GOTOU == 0 && joueurA == 692 ) { //avance2;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 ) { xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4, xAttA = xA, spriteA = 692 };
         if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA + 1, spriteA = 693, spriteavanceA = 3, GOTOU = 1 };
     };

     if ( GOTOU == 0 && joueurA == 693 ) { // avance3;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 ) { xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4, xAttA = xA, spriteA = 693 };
         if ( GOTOU == 0 && temps > reftemps + 27 ) { xA = xA + 1, spriteA = 64, spriteavanceA = 4, GOTOU = 1 };
     };

     if ( GOTOU == 0 && joueurA == 694 ) { //avance4;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entree == 0 ) { joueurA = 66, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 ) { xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4, xAttA = xA, spriteA = 64 };
         if ( GOTOU == 0 && temps > reftemps + 36 ) { joueurA = 64, reftemps = temps, spriteavanceA = 0, GOTOU = 1 };
     };


      //                                avance inversee;

       if ( GOTOU == 0 && joueurA == 99 ) { //avanceR;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { xFA = xA, xTA = xA, xMA = xA, xGA = xA, xAttA = xA + 4 };
           if ( GOTOU == 0 ) { spriteA = 991, spriteavanceA = 1, xA = xA - 1, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 991 ) { //avance1R;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { xFA = xA, xTA = xA, xMA = xA, xGA = xA, xAttA = xA + 4 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA - 1, spriteA = 992, spriteavanceA = 2, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 992 ) { // avance2R;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { xFA = xA, xTA = xA, xMA = xA, xGA = xA, xAttA = xA + 4, spriteA = 992 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA - 1, spriteA = 993, spriteavanceA = 3, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 993 ) { //avance3R;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { xFA = xA, xTA = xA, xMA = xA, xGA = xA, xAttA = xA + 4, spriteA = 993 };
           if ( GOTOU == 0 && temps > reftemps + 27 ) { xA = xA - 1, spriteA = 94, spriteavanceA = 4, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 994 ) { //avance4;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && entreesorcier == 0 ) { joueurA = 96, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { xFA = xA, xTA = xA, xMA = xA, xGA = xA, xAttA = xA + 4, spriteA = 94 };
           if ( GOTOU == 0 && temps > reftemps + 36 ) { joueurA = 94, reftemps = temps, spriteavanceA = 0, GOTOU = 1 };
       };


     //                               recule;
      if ( GOTOU == 0 && joueurA == 690 ) { //recule;
         xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
         xAttA = xA;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 ) { spriteA = 693, spritereculeA = 1, xA = xA - 1 };
         GOTOU = 1;
      };

     if ( GOTOU == 0 && joueurA == 6901 ) { //recule1;
        xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
        xAttA = xA;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA - 1, spriteA = 692, spritereculeA = 2 };
        GOTOU = 1;
     };

     if ( GOTOU == 0 && joueurA == 6902 ) { //recule2;
        xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
        xAttA = xA;
        spriteA = 692;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA - 1, spriteA = 691, spritereculeA = 3 };
        GOTOU = 1;
     };

     if ( GOTOU == 0 && joueurA == 6903 ) { //recule3;
        xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
        xAttA = xA;
        spriteA = 691;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 && temps > reftemps + 27 ) { xA = xA - 1, spriteA = 64, spritereculeA = 4 };
        GOTOU = 1;
     };

     if ( GOTOU == 0 && joueurA == 6904 ) { //recule4;
        xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
        xAttA = xA;
        spriteA = 64;
         if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 61400, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
         if ( GOTOU == 0 && temps > reftemps + 36 ) { joueurA = 64, reftemps = temps, spritereculeA = 0 };
        GOTOU = 1;
     };


      //                               recule inverse;

       if ( GOTOU == 0 && joueurA == 990 ) { //reculeR;
          xAttA = xA + 4;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
          if ( GOTOU == 0 ) { spriteA = 993, spritereculeA = 1, xA = xA + 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9901 ) { //recule1R;
          xAttA = xA + 4;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA + 1, spriteA = 992, spritereculeA = 2 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9902 ) { //recule2r;
          xAttA = xA + 4;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          spriteA = 992;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA + 1, spriteA = 991, spritereculeA = 3 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9903 ) { //recule3R;
          xAttA = xA + 4;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          spriteA = 991;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 27 ) { xA = xA + 1, spriteA = 94, spritereculeA = 4 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9904 ) { //recule4R;
          xAttA = xA + 4;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          spriteA = 94;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 && sortieA == 0 ) { joueurA = 9140, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 36 ) { joueurA = 94, reftemps = temps, spritereculeA = 0 };
          GOTOU = 1;
       };


      if ( GOTOU == 0 && joueurA == 616 ) { //saute;           
          xAttA = xA, xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          decapiteA = 0;
          yGA = yMA, yAttA = 14;
	   if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 63, Aoccupe = 1, reftemps = temps, GOTOU = 26 };

           if ( GOTOU == 0 && temps > reftemps + 51 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 50 ) { spriteA = 64, xMA = xA + 4, xGA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 6161, xMA = xA + 4, xGA = xA + 1, decapiteA = 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 6162, xMA = xA + 1, xGA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6161, xMA = xA + 4, xGA = xA + 1, GOTOU = 1 };
       };

      if ( GOTOU == 0 && joueurA == 916 ) { //sauteR;
         xAttA = xA + 4, xFA = xA, xTA = xA, xMA = xA, xGA = xA;
         decapiteA = 0;
         yGA = yMA, yAttA = 14;
          if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 93, Aoccupe = 1, reftemps = temps, GOTOU = 26 };

          if ( GOTOU == 0 && temps > reftemps + 51 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 50 ) { spriteA = 94, xMA = xA, xGA = xA, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 9161, xMA = xA, xGA = xA + 1, decapiteA = 1, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 9162, xMA = xA + 3, xGA = xA + 3, GOTOU = 1 };
          if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9161, xMA = xA, xGA = xA + 3, GOTOU = 1 };
      };

       if ( GOTOU == 0 && joueurA == 6100 ) { //assis;
          xAttA = xA;
          xFA = xA, xTA = xA, xMA = xA + 4, xGA = xA + 4;
          spriteA = 61;
           if ( GOTOU == 0 && temps > reftemps + 5 ) { joueurA = 61002, GOTOU = 1 };
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 68, Aoccupe = 1, reftemps = temps };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 61002 ) { //assis2;
          Aoccupe = 0;
          assisA = 1;
          xAttA = xA;
          xFA = xA, xTA = xA, xMA = xA + 4, xGA = xA + 4;
          spriteA = 61002;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 68, Aoccupe = 1, reftemps = temps };
           if ( GOTOU == 0 && demo == 1 ) {
               if ( GOTOU == 0 && temps > reftemps + 10 ) { Aoccupe = 0 };
              GOTOU = 1;
           };
          GOTOU = 1;
       };


       if ( GOTOU == 0 && joueurA == 61000 ) { //releve;
          xAttA = xA, yAttA = 14;
          xFA = xA, xTA = xA, xMA = xA + 4, xGA = xA + 4;
          spriteA = 61;
           if ( GOTOU == 0 && temps > reftemps + 5 ) { joueurA = 64, Aoccupe = 0, GOTOU = 1 };
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 68, Aoccupe = 1, reftemps = temps };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9100 ) { //assisR;
          xAttA = xA + 4;
          xFA = xA + 4, xTA = xA + 4, xMA = xA, xGA = xA + 4;
          spriteA = 91;
           if ( GOTOU == 0 && temps > reftemps + 5 ) { joueurA = 9102, GOTOU = 1 };
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 98, Aoccupe = 1, reftemps = temps };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9102 ) { //assis2R;
          Aoccupe = 0;
          assisA = 1;
          xAttA = xA + 4;
          xFA = xA + 4, xTA = xA + 4, xMA = xA, xGA = xA + 4;
          spriteA = 9102;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 98, Aoccupe = 1, reftemps = temps };
           if ( GOTOU == 0 && demo == 1 ) {
               if ( GOTOU == 0 && temps > reftemps + 10 ) { Aoccupe = 0 };
              GOTOU = 1;
           };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9106 ) { //releveR;
          xAttA = xA + 4, yAttA = 14;
          xFA = xA + 4, xTA = xA + 4, xMA = xA, xGA = xA;
          spriteA = 91;
           if ( GOTOU == 0 && temps > reftemps + 5 ) { joueurA = 94, Aoccupe = 0, GOTOU = 1 };
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 98, Aoccupe = 1, reftemps = temps };
          GOTOU = 1;
       };


       if ( GOTOU == 0 && joueurA == 615 ) { //rouladeAV;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20, yAttA = yGA, xAttA = xA, yTA = yGA;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { yTA = 16, joueurA = 611, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 49 ) {
              spriteA = 64, xTA = xA + 4, xMA = xA + 4, yTA = 16 ;
              Aoccupe = 0, xA = xA + 1, joueurA = 61500, GOTOU = 4;
           };
           if ( GOTOU == 0 && temps > reftemps + 45 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 42 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 41 ) { xA = xA + 1, spriteA = 6156, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 38 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { xA = xA + 1, spriteA = 6155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 33 ) { xA = xA + 1, spriteA = 6155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 29 ) { xA = xA + 1, spriteA = 6154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA + 1, spriteA = 6154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA + 1, xAttA = xA + 5, spriteA = 6153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { xA = xA + 1, xAttA = xA + 5, spriteA = 6153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { xA = xA + 1, spriteA = 6152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA + 1, spriteA = 6152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA + 1, spriteA = 6151, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { xA = xA + 1, spriteA = 6151, roule.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6151, GOTOU = 1 };
       };

      //finderoulade ;
       if ( GOTOU == 4 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurA == 61500 ) {
           if ( GOTOU == 0 && xA < xB ) {
              joueurA = 64;
              spriteA = 64;
              xAttA = xA, yAttA = 17;
              yFA = 15, yTA = 16, yMA = 18, yGA = 20;
              xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
              GOTOU = 1;
           };
           if ( GOTOU == 0 && xA > xB - 1 ) {
              joueurA = 614, yAttA = 14, Aoccupe = 1, reftemps = temps;
              joueurB = 614, yAttB = 14, Boccupe = 1, reftempsB = temps;
              GOTOU = 31;
           };
       };

       if ( GOTOU == 0 && joueurA == 915 ) { //rouladeAVR
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20, yAttA = yGA, xAttA = xA + 4, yTA = yGA;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 911, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 49 ) {
              spriteA = 94, xTA = xA, xMA = xA ;
              Aoccupe = 0, xA = xA - 1, joueurA = 9150, GOTOU = 5;
           };
           if ( GOTOU == 0 && temps > reftemps + 45 ) { yTA = 16, spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 42 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 41 ) { xA = xA - 1, spriteA = 9156, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 38 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { xA = xA - 1, spriteA = 9155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 33 ) { xA = xA - 1, spriteA = 9155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 29 ) { xA = xA - 1, spriteA = 9154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA - 1, spriteA = 9154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA - 1, xAttA = xA - 1, spriteA = 9153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { xA = xA - 1, xAttA = xA - 1, spriteA = 9153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { xA = xA - 1, spriteA = 9152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA - 1, spriteA = 9152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA - 1, spriteA = 9151, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { xA = xA - 1, spriteA = 9151, roule.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9151, GOTOU = 1 };
       };

      //finderouladeR ;
       if ( GOTOU == 5 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurA == 9150 ) {
           if ( GOTOU == 0 && xA > xB ) {
              joueurA = 94;
              spriteA = 94;
              xAttA = xA + 4, yAttA = 17;
              yFA = 15, yTA = 16, yMA = 18, yGA = 20;
              xFA = xA, xTA = xA, xMA = xA, xGA = xA;
              GOTOU = 1;
           };
           if ( GOTOU == 0 && xA < xB + 1 ) {
              joueurA = 914, yAttA = 14, Aoccupe = 1, reftemps = temps;
              joueurB = 914, yAttB = 14, Boccupe = 1, reftempsB = temps;
              GOTOU = 31;
           }; 

       };


       if ( GOTOU == 0 && joueurA == 6150 ) { //rouladeAR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20, yAttA = yGA, xAttA = xA;

           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 67, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 44 ) {
              spriteA = 64, xTA = xA + 4, xMA = xA + 4 ;
              Aoccupe = 0, joueurA = 64, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 41 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 38 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { xA = xA - 1, spriteA = 6151, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 33 ) { xA = xA - 1, spriteA = 6151, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 29 ) { xA = xA - 1, spriteA = 6152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA - 1, spriteA = 6152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA - 1, spriteA = 6153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { xA = xA - 1, spriteA = 6153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { xA = xA - 1, spriteA = 6154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA - 1, spriteA = 6154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA - 1, spriteA = 6155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };				
           if ( GOTOU == 0 && temps > reftemps + 1 ) { xA = xA - 1, spriteA = 6156, roule.play(),GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6156, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 9159 ) { //rouladeARR;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20, yAttA = yGA, xAttA = xA + 4;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 97, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 && temps > reftemps + 44 ) {
              spriteA = 94, xTA = xA, xMA = xA;
              Aoccupe = 0, joueurA = 94, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 41 ) { spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 38 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { xA = xA + 1, spriteA = 9151, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 33 ) { xA = xA + 1, spriteA = 9152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 29 ) { xA = xA + 1, spriteA = 9152, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA + 1, spriteA = 9153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA + 1, spriteA = 9153, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { xA = xA + 1, spriteA = 9154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { xA = xA + 1, spriteA = 9154, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { xA = xA + 1, spriteA = 9155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA + 1, spriteA = 9155, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { xA = xA + 1, spriteA = 9156, roule.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9156, GOTOU = 1 };
       };


          if ( GOTOU == 0 && joueurA == 6131 ) { //protegeH1;
              if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 618, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
	     if ( GOTOU == 0 ) {
	             xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
        	     xAttA = xA;
	             yGA = 20;
		};
              if ( GOTOU == 0 && temps > reftemps + 3 ) { protegeHA = 1, spriteA = 613, Aoccupe = 0, GOTOU = 1 };
              if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
              if ( GOTOU == 0 && temps > reftemps + 1 ) { protege.play(), xA = xA - 1, spriteA = 691, GOTOU = 1 };              
              if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 691, GOTOU = 1 };
          };

          if ( GOTOU == 0 && joueurA == 613 ) { //protegeH;
	     if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 618, Aoccupe = 1, reftemps = temps, GOTOU = 26 };             
	     if ( GOTOU == 0 ) {
    		     xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
	             xAttA = xA;
        	     yGA = 20;
	             spriteA = 613;            
	             GOTOU = 1;
		};
          };

       if ( GOTOU == 0 && joueurA == 9131 ) { //protegeHR1;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 918, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
	     if ( GOTOU == 0 ) {
          	xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          	xAttA = xA + 4;
          	yGA = 20;
	     };
           if ( GOTOU == 0 && temps > reftemps + 3 ) { protegeHA = 1, joueurA = 913, Aoccupe = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { protege.play(), xA = xA + 1, spriteA = 991, GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 991, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 913 ) { //protegeHR;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 918, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
	     if ( GOTOU == 0 ) {
           	xFA = xA, xTA = xA, xMA = xA, xGA = xA;
           	xAttA = xA + 4;
           	yGA = 20;
           	spriteA = 913;
          	GOTOU = 1;
	     };
       };


       if ( GOTOU == 0 && joueurA == 6121 ) { //protegeD1;
              if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 617, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
              if ( GOTOU == 0 ) { 
		xAttA = xA;
                 yGA = 20;
                 xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
                 decapiteA = 0;
                 spriteA = 613;
	      };
              if ( GOTOU == 0 && temps > reftemps + 3 ) { joueurA = 612, protegeDA = 1, Aoccupe = 0, GOTOU = 1 };
              if ( GOTOU == 0 && temps > reftemps + 1 ) { GOTOU = 1 };
              if ( GOTOU == 0 && temps >= reftemps ) { protege.play(), GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 612 ) { //protegeD;
		if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 617, Aoccupe = 1, reftemps = temps, GOTOU = 26 };             
		if ( GOTOU == 0 ) {
			 xAttA = xA;
		         yGA = 20;
	             	 xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
	             	 decapiteA = 0;
	             	 spriteA = 612, GOTOU = 1;
		 };
       };

       if ( GOTOU == 0 && joueurA == 9121 ) { //protegeDR1;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 917, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) { 
		xAttA = xA + 4;
	          yGA = 20;
        	  xFA = xA, xTA = xA, xMA = xA, xGA = xA;
	          decapiteA = 0;
        	  spriteA = 913;
	   };
           if ( GOTOU == 0 && temps > reftemps + 3 ) { spriteA = 912, protegeDA = 1, Aoccupe = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { protege.play(), GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 912 ) { //protegeDR;
           if ( GOTOU == 0 && attaqueA == 1 && demo == 0 ) { joueurA = 917, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
           if ( GOTOU == 0 ) {
		   xAttA = xA + 4;
        	   yGA = 20;
	           xFA = xA, xTA = xA, xMA = xA, xGA = xA;
	           decapiteA = 0;
	           spriteA = 912;
		   GOTOU = 1;
	   };
       };

       if ( GOTOU == 0 && joueurA == 63 ) { //cou;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 632, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) {
              spriteA = 633;
               if ( joueurB == 63 && spriteB == 633 && distance < 12 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xTA = xA, xAttA = xA + 7, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 632, yAttA = yTA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 631, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 93 ) { //couR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 932, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) {
              spriteA = 933;
               if ( joueurB == 93 && spriteB == 933 && distance < 12 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xTA = xA + 4, xAttA = xA - 3, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 932, yAttA = yTA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 931, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 66 ) { // devant;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 662, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 663, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) {
              spriteA = 663;
               if ( joueurB == 66 && spriteB == 663 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
               if ( GOTOU == 0 && joueurB == 612 && distance < 7 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xMA = xA, xAttA = xA + 6, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 662, yAttA = yMA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 661, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 96 ) { // devantR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 962, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 963, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) {
              spriteA = 963;
               if ( joueurB == 96 && spriteB == 963 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING ==1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
               if ( GOTOU == 0 && joueurB == 912 && distance < 7 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xMA = xA + 4, xAttA = xA - 2, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 962, yAttA = yMA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 961, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 68 ) { //genou;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA + 4;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 61002, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { spriteA = 682, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 683, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) {
              spriteA = 683 ;
               if ( joueurB == 68 && spriteB == 683 && distance < 11 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xGA = xA, xAttA = xA + 7, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 682, yAttA = yGA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 681, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 98 ) { //genouR;
          yGA = 20;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { Aoccupe = 0, joueurA = 9102, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { spriteA = 982, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 983, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) {
              spriteA = 983;
               if ( joueurB == 98 && spriteB == 983 && distance < 11 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xGA = xA + 4, xAttA = xA - 3, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 982, yAttA = yGA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 981, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 618 ) { // araignee;
          xFA = xA + 4, xTA = xA + 4, xMA = xA, xGA = xA + 4;
          yAttA = yGA, xAttA = xA, yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 30 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) {
              epee.play();
              spriteA = 6184;
              distance = xB - xA;
               if ( joueurB == 618 && distance <= 9 ) { 
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xAttA = xA + 5, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { spriteA = 6183, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 6182, xAttA = xA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6181, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 918 ) { // araigneeR;
          xFA = xA, xTA = xA, xMA = xA + 4, xGA = xA;
          yAttA = yGA, xAttA = xA + 4, yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 30 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) {
              epee.play();
              spriteA = 9184;
              distance = xA - xB;
               if ( joueurB == 918 && distance <= 9 ) { 
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
                  GOTOU = 1;
               };
              xAttA = xA - 1, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { spriteA = 9183, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 9182, xAttA = xA + 4, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9181, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 611 ) { //coupdepied;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          spriteA = 6111, yAttA = yGA, yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 40 ) { Aoccupe = 0, spriteA = 64, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 6111, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { spriteA = 6112, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { spriteA = 6112, xAttA = xA + 5, GOTOU = 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 911 ) { //coupdepiedR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          spriteA = 9111, yAttA = yGA, yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 40 ) { Aoccupe = 0, spriteA = 94, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 9111, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { spriteA = 9112, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { spriteA = 9112, xAttA = xA - 1, GOTOU = 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 617 ) { //coupdetete;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 30 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA - 1, spriteA = 6171, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { spriteA = 6172, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { xA = xA + 1, spriteA = 6172, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { spriteA = 6171, yAttA = yTA, GOTOU = 1 };
	   if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6171, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 917 ) { //coupdeteteR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20, yTA = 16;
           if ( GOTOU == 0 && temps > reftemps + 30 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 26 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { xA = xA + 1, spriteA = 9171, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 11 ) { spriteA = 9172, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { xA = xA - 1, spriteA = 9172, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { spriteA = 9171, yAttA = yTA, GOTOU = 1 };
	   if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9171, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 61400 ) { //decapite;
          decapiteA = 0;
          xFA = xA + 3, xTA = xA + 2, xMA = xA + 2, xGA = xA + 4;
           if ( GOTOU == 0 && temps > reftemps + 44 ) { Aoccupe = 0, spriteA = 64, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { spriteA = 632, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 35 ) { spriteA = 633, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { spriteA = 633, xTA = xA, xAttA = xA + 6, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 32 ) { spriteA = 633, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 632, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 27 ) { spriteA = 631, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 24 ) { xA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { spriteA = 6143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) { spriteA = 6143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 6142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { xA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { spriteA = 6142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 12 ) { xA = xA + 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { spriteA = 6141, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) { xA = xA + 1, spriteA = 6141, decapite.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6141, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 9140 ) { //decapiteR;
          decapiteA = 0;
          xFA = xA + 1, xTA = xA + 2, xMA = xA + 2, xGA = xA;
           if ( GOTOU == 0 && temps > reftemps + 44 ) { Aoccupe = 0, spriteA = 94, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { spriteA = 932, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 35 ) { spriteA = 933, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 34 ) { spriteA = 933, xTA = xA + 4, xAttA = xA - 2, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 32 ) { spriteA = 933, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 932, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 27 ) { spriteA = 931, yAttA = yTA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 24 ) { xA = xA - 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 22 ) { spriteA = 9143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 21 ) { xA = xA - 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) { spriteA = 9143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { xA = xA - 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 9142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { xA = xA - 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 13 ) { spriteA = 9142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 12 ) { xA = xA - 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { spriteA = 9141, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) { xA = xA - 1, spriteA = 9141, decapite.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9141, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 67 ) { //front;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 40 ) { Aoccupe = 0, joueurA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { spriteA = 672, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 673, xAttA = xA, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) {
              spriteA = 673, distance = xB - xA;
               if ( joueurB == 67 && spriteB == 673 && distance < 11 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
               if ( joueurB == 613 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xFA = xA, xAttA = xA + 7, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 672, yAttA = yFA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps ) { spriteA = 671, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 97 ) { //frontR;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yGA = 20;
           if ( GOTOU == 0 && temps > reftemps + 40 ) { Aoccupe = 0, joueurA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 25 ) { spriteA = 972, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 17 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 973, xAttA = xA + 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) {
              spriteA = 973, distance = xA - xB;
               if ( joueurB == 97 && spriteB == 973 && distance < 11 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
               if ( joueurB == 913 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xFA = xA + 4, xAttA = xA - 3, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteA = 972, yAttA = yFA, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps ) { spriteA = 971, GOTOU = 1 };
       };

      if ( GOTOU == 0 && joueurA == 614 ) { //retourne;
         xAttA = xA, xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
         yAttA = 14;
         spriteA = 6141;
          if ( GOTOU == 0 && temps > reftemps + 21 ) { joueurA = 94, Aoccupe = 0, sens = 9, spriteA = 94, spriteB = 94, couleurok = 0, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 14 ) { spriteA = 6143, GOTOU = 1 };
          if ( GOTOU == 0 && temps > reftemps + 7 ) { spriteA = 6142, GOTOU = 1 };
         GOTOU = 1;
      };

       if ( GOTOU == 0 && joueurA == 914 ) { //retourneR;
          xAttA = xA + 4, xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yAttA = 14;
          spriteA = 9141;
           if ( GOTOU == 0 && temps > reftemps + 21 ) { joueurA = 64, Aoccupe = 0, sens = 6, couleurok = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { spriteA = 9143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 7 ) { spriteA = 9142, GOTOU = 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 621 ) { //vainqueur;
          spriteA = 6211;
          decapiteA = 1;
          sangA = 0;
          xAttA = xA, yGA = 20, yAttA = 14;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          //psgvol 0,0;
           if ( GOTOU == 0 && temps > reftemps + 100 ) { spriteA = 6211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 86 ) { spriteA = 6212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { spriteA = 6213, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { spriteA = 6212, GOTOU = 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 921 ) { //vainqueurR;
          spriteA = 9211;
          decapiteA = 1;
          sangA = 0;
          xAttA = xFA + 4, yGA = 20, yAttA = 14;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          //psgvol 0,0;
           if ( GOTOU == 0 && temps > reftemps + 100 ) { spriteA = 9211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 86 ) { spriteA = 9212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 37 ) { spriteA = 9213, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { spriteA = 9212, GOTOU = 1 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 62100 ) { //vainqueurKO;
          decapiteA = 1;
          sangA = 0;
          xAttA = xA, yGA = 20 ;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;

           if ( GOTOU == 0 && temps > reftemps + 230 ) {
              gnome = 1, reftemps = temps;
              xGNOME = 3;
              xSPRt = 270;
              GOTOU = 31;
           };

           if ( GOTOU == 0 && temps > reftemps + 205 ) { spriteA = 6211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 195 ) { spriteA = 6212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 140 ) { spriteA = 6213, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 123 ) { spriteA = 6212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 105 ) { spriteA = 6211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 100 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 75 ) { spriteA = 6111, spriteB = 6104, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 71 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 70 ) { spriteA = 6112, spriteB = 6103, xB = xB + 2, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 55 ) { spriteA = 6111, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 36 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 35 ) {
              distance = xB - xA;
               if ( GOTOU == 0 && distance < 5 ) { spriteA = 693, xA = xA - 1 };
               if ( GOTOU == 0 && distance > 5 ) { spriteA = 693, xA = xA + 1 };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 64, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 23 ) { spriteA = 6143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { spriteA = 6142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) { spriteA = 6141 };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 9210 ) { //vainqueurKOR;
          decapiteA = 1;
          sangA = 0;
          xAttA = xFA + 4, yGA = 20;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;

           if ( GOTOU == 0 && temps > reftemps + 230 ) {
              gnome = 1, reftemps = temps;
              xGNOME = 3;
              xSPRt = 270;
              GOTOU = 31;
           };

           if ( GOTOU == 0 && temps > reftemps + 205 ) { spriteA = 9211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 195 ) { spriteA = 9212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 140 ) { spriteA = 9213, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 123 ) { spriteA = 9212, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 105 ) { spriteA = 9211, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 100 ) { spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 75 ) { spriteA = 9111, spriteB = 9104, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 71 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 70 ) { spriteA = 9112, spriteB = 9103, xB = xB - 2, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 55 ) { spriteA = 9111, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 36 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 35 ) {
              distance = xA - xB;
               if ( GOTOU == 0 && distance < 5 ) { spriteA = 993, xA = xA + 1 };
               if ( GOTOU == 0 && distance > 5 ) { spriteA = 993, xA = xA - 1 };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 94, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 23 ) { spriteA = 9143, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { spriteA = 9142, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) { spriteA = 9141 };
          GOTOU = 1;
       };


      //                               ******degats******;
       if ( GOTOU == 0 && joueurA == 620 ) { //touche;
          attenteA = 0;
          xAttA = xA;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
          yFA = 15, yTA = 16, yMA = 18, yGA = 20;
           if ( GOTOU == 0 && joueurB == 611 ) { joueurA = 619, GOTOU = 26 };

           if ( GOTOU == 0 ) { sangA = 1, serpentA = 1 };

           if ( GOTOU == 0 && joueurB == 61400 && decapiteA == 1 ) {
              joueurA = 65, Aoccupe = 1, reftemps = temps;
              xSPRt = xA + 3, scoreB = scoreB + 250;
              sangA = 0, GOTOU = 34;
           };

           if ( GOTOU == 0 ) { vieA = vieA - 1 };
           if ( GOTOU == 0 && vieA <= 0 ) {
              //psgvol 0,0;
              joueurA = 610, Aoccupe = 1, reftemps = temps, sangA = 1, GOTOU = 34;
           };

           if ( GOTOU == 0 ) {
              joueurA = 6201, Aoccupe = 1, reftemps = temps, decapiteA = 1;
              GOTOU = 1;
           };
       };


       if ( GOTOU == 0 && joueurA == 6201 ) { //touche1;
          attenteA = 0;
          xAttA = xA;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
           if ( GOTOU == 0 && temps > reftemps + 20 ) {
              spriteA = 64, Aoccupe = 0;
              joueurA = 64, GOTOU = 1;
           }; 
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 6204, GOTOU = 1 };
          // pour serpent;
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { xA = xA - 1, sangA = 0, spriteA = 6203, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA - 2, spriteA = 6202, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) {
              xA = xA - 1, spriteA = 6201;
              choixTOUCHE = choixTOUCHE + 1;
               if ( choixTOUCHE > 3 ) { choixTOUCHE = 1 };
               if ( choixTOUCHE == 1 ) { touche.play() };
               if ( choixTOUCHE == 2 ) { touche2.play() };
               if ( choixTOUCHE == 3 ) { touche3.play() };
              GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6201, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 920 ) { //toucheR;
          attenteA = 0;
          xAttA = xA + 4;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
          yFA = 15, yTA = 16, yMA = 18, yGA = 20;
           if ( GOTOU == 0 && joueurB == 911 ) { joueurA = 919, GOTOU = 26 };

           if ( GOTOU == 0 ) { sangA = 1, serpentA = 1 };

           if ( GOTOU == 0 && joueurB == 9140 && decapiteA == 1 ) {
              joueurA = 95, Aoccupe = 1, reftemps = temps;
              xSPRt = xA + 3, scoreB = scoreB + 250;
              sangA = 0, GOTOU = 34;
           };

           if ( GOTOU == 0 ) { vieA = vieA - 1 };

           if ( GOTOU == 0 && vieA <= 0 ) {
              //psgvol 0,0;
              joueurA = 910, Aoccupe = 1, reftemps = temps, sangA = 1, GOTOU = 34;
           };

           if ( GOTOU == 0 ) {
              joueurA = 9201, Aoccupe = 1, reftemps = temps, decapiteA = 1;
              GOTOU = 1;
           };
       };

       if ( GOTOU == 0 && joueurA == 9201 ) { //touche1R;
          attenteA = 0;
          xAttA = xA + 4;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
           if ( GOTOU == 0 && temps > reftemps + 20 ) {
              spriteA = 94, Aoccupe = 0;
              joueurA = 94, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 9204, GOTOU = 1 };
          //pour serpent;
           if ( GOTOU == 0 && temps > reftemps + 11 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { xA = xA + 1, sangA = 0, spriteA = 9203, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { xA = xA + 2, spriteA = 9202, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) {
              xA = xA + 1, spriteA = 9201;
              choixTOUCHE = choixTOUCHE + 1;
               if ( choixTOUCHE > 3 ) { choixTOUCHE = 1 };
               if ( choixTOUCHE == 1 ) { touche.play() };
               if ( choixTOUCHE == 2 ) { touche2.play() };
               if ( choixTOUCHE == 3 ) { touche3.play() };
              GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9201, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 619 ) { //tombe;
          //psgvol 0,0;
          xAttA = xA;
          attenteA = 0;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;

          sangA = 1;
          serpentA = 1;
          vieA = vieA - 1, scoreB = scoreB + 100;

           if ( GOTOU == 0 && joueurB == 615 ) { vieA = vieA + 1, sangA = 0, serpentA = 0, scoreB = scoreB - 100 };

           if ( GOTOU == 0 && vieA <= 0 ) {
              //psgvol 0,0;
              joueurA = 610, Aoccupe = 1, reftemps = temps, sangA = 1;
               if ( GOTOU == 0  ) {
			if ( joueurB == 617 || joueurB == 611 ) { sangA = 0 };
		};
              GOTOU = 34;
           };

           if ( GOTOU == 0 ) { 
			if ( joueurB == 617 || joueurB == 611 ) { scoreB = scoreB + 150, sangA = 0 };
		};

           if ( GOTOU == 0 ) { joueurA = 6191, Aoccupe = 1, reftemps = temps, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 6191 ) { //tombe1;
          xAttA = xA;
          attenteA = 0;
          xFA = xA, xTA = xA, xMA = xA, xGA = xA;
           if ( GOTOU == 0 && temps > reftemps + 25 ) {
              spriteA = 64, xA = xA - 1, joueurA = 64, Aoccupe = 0, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 6194, GOTOU = 1 };
          // tombe4 pour serpent;
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 6193, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { sangA = 0, xA = xA - 2, spriteA = 6192, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) {
              xA = xA - 2;
              tombe.play();
               if ( joueurB == 611 ) { tombe.stop(), coupdepied.play() };
               if ( joueurB == 617 ) { tombe.stop(), coupdetete.play() };
              GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6191, GOTOU = 1 };
       };


       if ( GOTOU == 0 && joueurA == 919 ) { //tombeR;
          //psgvol 0,0;
          xAttA = xA + 4;
          attenteA = 0;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;

          sangA = 1;
          serpentA = 1;
          vieA = vieA - 1, scoreB = scoreB + 100;

           if ( GOTOU == 0 && joueurB == 915 ) { vieA = vieA + 1, sangA = 0, serpentA = 0, scoreB = scoreB - 100 };

           if ( GOTOU == 0 && vieA <= 0 ) {
              //psgvol 0,0;
              joueurA = 910, Aoccupe = 1, reftemps = temps, sangA = 1;
               if ( GOTOU == 0  ) {
				if ( joueurB == 917 || joueurB == 911 ) { sangA = 0 };
				};
              GOTOU = 34;
           };

           if ( GOTOU == 0  ) {
				if ( joueurB == 917 || joueurB == 911 ) { scoreB = scoreB + 150, sangA = 0 };
			};

           if ( GOTOU == 0 ) { joueurA = 9191, Aoccupe = 1, reftemps = temps, GOTOU = 1 };
       };

       if ( GOTOU == 0 && joueurA == 9191 ) { //tombe1r;
          xAttA = xA + 4;
          attenteA = 0;
          xFA = xA + 4, xTA = xA + 4, xMA = xA + 4, xGA = xA + 4;
           if ( GOTOU == 0 && temps > reftemps + 25 ) {
              spriteA = 94, xA = xA + 1, joueurA = 94, Aoccupe = 0, GOTOU = 1;
           };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { spriteA = 9194, GOTOU = 1 };
          // pour serpent;
           if ( GOTOU == 0 && temps > reftemps + 16 ) { spriteA = 9193, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 9 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 8 ) { sangA = 0, xA = xA + 2, spriteA = 9192, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) {
              xA = xA + 2;
              tombe.play();
               if ( joueurB == 911 ) { tombe.stop(), coupdepied.play() };
               if ( joueurB == 917 ) { tombe.stop(), coupdetete.play() };
              GOTOU = 1;
           };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9191, GOTOU = 1 };
       };



      //                               bruit des epees  et decapitation loupee;
       if ( GOTOU == 0 && sens == 6 ) {

           if ( GOTOU == 0 && joueurA == 2000 ) { //clingD;

               if ( GOTOU == 0 && joueurB == 61400 && decapiteA == 0 ) { joueurA = 620, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
               if ( GOTOU == 0 && joueurB == 68 ) { joueurA = 620, Aoccupe = 1, reftemps = temps, GOTOU = 26 };

               if ( GOTOU == 0 ) { joueurA = 612, GOTOU = 1 };
           };

           if ( GOTOU == 0 && joueurA == 20002 ) { //clingH;
              joueurA = 613, GOTOU = 1;
           };

       };

       if ( GOTOU == 0 && sens == 9 ) {

           if ( GOTOU == 0 && joueurA == 2000 ) {
               if ( GOTOU == 0 && joueurB == 9140 && decapiteA == 0 ) { joueurA = 920, Aoccupe = 1, reftemps = temps, GOTOU = 26 };
               if ( GOTOU == 0 && joueurB == 98 ) { joueurA = 920, Aoccupe = 1, reftemps = temps, GOTOU = 26 };

               if ( GOTOU == 0 ) { joueurA = 912, GOTOU = 1 };
           };

           if ( GOTOU == 0 && joueurA == 20002 ) {
              joueurA = 913, GOTOU = 1;
           };

       };



     //                                   *************************************;
     //                                   **********gestion de la mort*********;
     //                                   *************************************;

     //mort ;
      if ( GOTOU == 34 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurA == 610 ) { //mort;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { sangA = 0, spriteA = 6102, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { spriteA = 6101, mortKO.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 6101, joueurB = 62100, Boccupe = 1, reftempsB = temps };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 910 ) { //mortR;
           if ( GOTOU == 0 && temps > reftemps + 35 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { sangA = 0, spriteA = 9662, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 2 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { spriteA = 9101, mortKO.play(), GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) { spriteA = 9101, joueurB = 9210, Boccupe = 1, reftempsB = temps };
          GOTOU = 1;
       }; 

       if ( GOTOU == 0 && joueurA == 65 ) { //mortdecap;
           if ( GOTOU == 0 && temps > reftemps + 90 ) { spriteA = 654, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 80 ) { spriteA = 653, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 70 ) { sangdecapA = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 60 ) { sangdecapA = 6, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 50 ) { sangdecapA = 5, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { sangdecapA = 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 652, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { sangdecapA = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { sangdecapA = 3, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { sangdecapA = 2, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { sangdecapA = 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) {
              spriteA = 651, joueurB = 621, Boccupe = 1, reftempsB = temps, mortdecap.play();
           };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 95 ) { //mortdecapR;
           if ( GOTOU == 0 && temps > reftemps + 90 ) { spriteA = 954, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 80 ) { spriteA = 953, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 70 ) { sangdecapA = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 60 ) { sangdecapA = 6, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 50 ) { sangdecapA = 5, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 40 ) { sangdecapA = 4, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 30 ) { spriteA = 952, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 20 ) { sangdecapA = 0, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 14 ) { sangdecapA = 3, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 10 ) { sangdecapA = 2, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { sangdecapA = 1, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 5 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps >= reftemps ) {
              spriteA = 951, joueurB = 921, Boccupe = 1, reftempsB = temps, mortdecap.play();
           };
          GOTOU = 1;
       };

       if ( GOTOU == 0 && joueurA == 6500 ) { //mortsorcier;
           if ( temps > reftemps + 51 ) { joueurA = 6660, GOTOU = 1 };
          // sorcierfini;
           if ( GOTOU == 0 && temps > reftemps + 50 ) { sangA = 0, spriteA = 9104, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 36 ) { GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 35 ) { sangA = 0, spriteA = 9103, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 15 ) { sangA = 0, spriteA = 9662, GOTOU = 1 };
           if ( GOTOU == 0 && temps > reftemps + 1 ) { spriteA = 9101, GOTOU = 1 };
           if ( GOTOU == 0 ) { spriteA = 9101, GOTOU = 1 };
       };



     //                         **************************************;
     //                         *********     joueur 2    ************;
     //                         **************************************;
     //debut joueur 2;
      if ( GOTOU == 1 ) { GOTOU = 0 };


      if ( GOTOU == 0 ) {
		if ( sorcier == 1 || marianna == 1 ) { sangB = 0, GOTOU = 24 };
	 };

      if ( GOTOU == 0 && sortieA == 1 ) {
          if ( joueurB == 610 || joueurB == 65 || joueurB == 910 || joueurB == 95 ) { GOTOU = 2 };
      };

      if ( GOTOU == 0 && sortieB == 1 ) { GOTOU = 21 };


      //                           ************degats sur joueurB************;

       if ( GOTOU == 0 && sens == 6 ) {
           if ( xB > xA ) {
               if ( xAttA >= xFB && yAttA == yFB ) {
                   if ( joueurB == 613 ) { joueurB = 20002, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 619, infoBdegatF = infoBdegatF + 1, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA >= xTB && yAttA == yTB ) {
                   if ( joueurA == 617 ) { joueurB = 619, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 620, scoreA = scoreA + 250, infoBdegatT = infoBdegatT + 1, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA >= xMB && yAttA == yMB ) {
                   if ( joueurB == 612 ) { joueurB = 2000, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 620, scoreA = scoreA + 250, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA >= xGB && yAttA == yGB ) {
                   if ( joueurA == 618 ) { joueurB = 619, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurA == 615 ) { joueurB = 619, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurB == 612 ) { joueurB = 2000, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurA == 611 ) { joueurB = 619, infoBdegatG = infoBdegatG + 1, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 620, scoreA = scoreA + 100, infoBdegatG = infoBdegatG + 1, GOTOU = 24 };
               };
           };
       };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( xB < xA ) {
               if ( xAttA <= xFB && yAttA == yFB ) {
                   if ( joueurB == 913 ) { joueurB = 20002, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 919, infoBdegatF = infoBdegatF + 1, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA <= xTB && yAttA == yTB ) {
                   if ( joueurA == 917 ) { joueurB = 919, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 920, scoreA = scoreA + 250, infoBdegatT = infoBdegatT + 1, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA <= xMB && yAttA == yMB ) {
                   if ( joueurB == 912 ) { joueurB = 2000, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 920, scoreA = scoreA + 250, GOTOU = 24 };
               };

               if ( GOTOU == 0 && xAttA <= xGB && yAttA == yGB ) {
                   if ( joueurA == 918 ) { joueurB = 919, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurA == 915 ) { joueurB = 919, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurB == 912 ) { joueurB = 2000, GOTOU = 24 };
                   if ( GOTOU == 0 && joueurA == 911 ) { joueurB = 919, infoBdegatG = infoBdegatG + 1, GOTOU = 24 };
                   if ( GOTOU == 0 ) { joueurB = 920, scoreA = scoreA + 100, infoBdegatG = infoBdegatG + 1, GOTOU = 24 };
               };
           };
       };


      if ( GOTOU == 0 && Boccupe == 1 ) { GOTOU = 24 }; // important pour les animations
      if ( GOTOU == 0 ) { sangB = 0 };

     //                       ********************************************;
     //                       ******* evenements clavier joueurB *********;
     //                       ********************************************;

     //clavierB ;
      if ( GOTOU == 21 ) { GOTOU = 0 };


      if ( GOTOU == 0 ) {

         x2 = 7, y2 = 7;
         levier2 = 5; // neutre

          if ( partie == 2 ) {
             //                       ENTREE DES TOUCHES;

              if ( 73 in keysDown ) { y2 = y2 - 1 };
              if ( 75 in keysDown ) { y2 = y2 + 1 };
              if ( 76 in keysDown ) { x2 = x2 + 1 };
              if ( 74 in keysDown ) { x2 = x2 - 1 };


             if ( 32 in keysDown ) { attaqueB = 1 } else { attaqueB = 0 };



             //                       amplitude du pave virtuel;
              if ( y2 > 9 ) { y2 = 9 };
              if ( y2 < 5 ) { y2 = 5 };
              if ( x2 > 9 ) { x2 = 9 };
              if ( x2 < 5 ) { x2 = 5 };

             //                        position du "levier"  virtuel;

              if ( sens == 6 ) {
                  if ( x2 <= 6 && y2 <= 6 ) { levier2 = 1 }; 
                 // hautG;
                 if ( x2 >= 8 && y2 <= 6 ) { levier2 = 3 };
                 // hautD;
                  if ( x2 <= 6 && y2 >= 8 ) { levier2 = 7 };
                 //basG;
                  if ( x2 >= 8 && y2 >= 8 ) { levier2 = 9 };
                 // basD;
                  if ( x2 <= 6 && y2 == 7 ) { levier2 = 4 }; 
                 // gauche;
                  if ( x2 >= 8 && y2 == 7 ) { levier2 = 6 };
                 // droite;
                  if ( x2 == 7 && y2 >= 8 ) { levier2 = 8 };
                 // bas;
                  if ( x2 == 7 && y2 <= 6 ) { levier2 = 2 }; 
                 // haut;
              };

              if ( sens == 9 ) {
                  if ( x2 <= 6 && y2 <= 6 ) { levier2 = 1 }; 
                  if ( x2 >= 8 && y2 <= 6 ) { levier2 = 3 };
                  if ( x2 <= 6 && y2 >= 8 ) { levier2 = 7 };
                  if ( x2 >= 8 && y2 >= 8 ) { levier2 = 9 };
                  if ( x2 <= 6 && y2 == 7 ) { levier2 = 4 }; 
                  if ( x2 >= 8 && y2 == 7 ) { levier2 = 6 };
                  if ( x2 == 7 && y2 >= 8 ) { levier2 = 8 };
                  if ( x2 == 7 && y2 <= 6 ) { levier2 = 2 }; 
              }; 
          }; 
      };

     //                       **********************************;
     //                       ******* animations  auto *********;
     //                       **********************************;

	if ( GOTOU == 0 && entree == 1 ) {
		levier2 = 4, GOTOU = 20;
	};


      if ( GOTOU == 0 && sortieB == 1 ) {
          if ( GOTOU == 0 && sens == 9 ) { levier2 = 4, GOTOU = 20 };

          if ( GOTOU == 0 ) { sens = 6, levier2 = 6, GOTOU = 20 };
      };


      //                       *****************************************;
      //                       ******* Intelligence Artificielle *******;
      //                       *****************************************;


       if ( GOTOU == 0 && partie == 1 ) {

          // ***************************IA de 1,2,3,6;
           if ( IA == 0 || IA == 1 || IA == 2 || IA == 3 || IA == 6 ) {
               if ( sens == 6 ) {
                  distance = xB - xA;

                   if ( GOTOU == 0 && distance >= 15 ) { //  quand trop loin;
                      joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24;
                   };

                   if ( GOTOU == 0 && IA == 6 ) {
                       if ( distance < 15 ) {
                           if ( joueurA == 61400 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       };
                   };

                   if ( GOTOU == 0 && IA == 3 ) {
                       if ( distance < 15 ) {
                           if ( infoBdegatT > 2 ) {
                               if ( joueurA == 61400 ) { joueurB = 61002, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && joueurA == 61400 ) { joueurB = 612, reftempsB = temps, GOTOU = 24 };
                       };
                   };


                   if ( GOTOU == 0 && distance == 12 && joueurA == 64 ) { joueurB = 61400, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                   if ( GOTOU == 0 && distance > 9 && distance < 15 ) { // pour se rapprocher;
                       if ( levier1 == 4 ) { joueurB = 64, GOTOU = 24 };
                       if ( GOTOU == 0 ) { levier2 = 4, GOTOU = 20 };
                   };

                   if ( GOTOU == 0 && distance == 9 ) {
                       if ( attenteA > 50 ) { levier2 = 4, GOTOU = 20 };
                       if ( GOTOU == 0 && joueurA == 6150 ) { joueurB = 66, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && Aoccupe == 1 ) { levier2 = 4, GOTOU = 20 };

                   };

                   if ( GOTOU == 0 && distance < 9 && distance > 6 ) { // distance de combat 1;
                      // pour autoriser les croisements;
                       if ( demo == 0 && joueurA == 615 ) { joueurB = 616, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                      // pour se rapprocher;
                       if ( GOTOU == 0 && joueurA == 6150 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && levier1 == 4 ) { joueurB = 618, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                      //pour eviter les degats repetitifs;

                       if ( GOTOU == 0 && IA > 1 ) {
                           if ( infoBdegatG > 4 ) {
                               if ( joueurA == 61002 || joueurA == 68 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 61002 || joueurA == 615 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatT > 2 ) {
                               if ( joueurA == 63 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatF > 2 ) {
                               if ( joueurA == 67 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                       };


                      //pour alterner les attaques;
                       if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 611, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 64, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 618, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 64, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 61002, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 5 ) { joueurB = 68, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 6 ) { levier2 = 4, infocoupB = 0, GOTOU = 20 };

                   };

                   if ( GOTOU == 0 && distance <= 6 ) {

                      // pour autoriser les croisements;
                       if ( demo == 0 && joueurA == 616 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                       if ( GOTOU == 0 && IA == 3 ) {
                           if ( joueurA == 66 ) { joueurB = 612, reftempsB = temps, GOTOU = 24 };
                       };

                       if ( GOTOU == 0 && IA == 2 ) {
                           if ( joueurA == 68 ) { joueurB = 616, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       };

                       if ( GOTOU == 0 && IA > 1 ) {
                           if ( infoBdegatG > 4 ) {
                               if ( joueurA == 61002 || joueurA == 68 ) { joueurB = 611, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0 && IA > 2 ) {
                                   if ( joueurA == 618 ) { joueurB = 618, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 611 ) { joueurB = 611, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0 ) {
                                  if ( joueurA == 61002 || joueurA == 68 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };
                       };

                       if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 611, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 617, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 618, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 64, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 61002, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 5 ) { joueurB = 68, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 6 ) { joueurB = 64, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 7 ) { levier2 = 4, infocoupB = 0, GOTOU = 20 };

                   };
               };


               if ( GOTOU == 0 && sens == 9 ) {

                  distance = xA - xB;

                   if ( GOTOU == 0 && distance >= 15 ) { //  quand trop loin;
                      joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24;
                   };

                   if ( GOTOU == 0 && IA == 6 ) {
                       if ( distance < 15 ) {
                           if ( joueurA == 9140 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       };
                   };

                   if ( GOTOU == 0 && IA == 3 ) {
                       if ( distance < 15 ) {
                           if ( infoBdegatT > 2 ) {
                               if ( joueurA == 9140 ) { joueurB = 9102, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && joueurA == 9140 ) { joueurB = 912, reftempsB = temps, GOTOU = 24 };
                       };
                   };

                   if ( GOTOU == 0 && distance == 12 && joueurA == 94 ) { joueurB = 9140, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                   if ( GOTOU == 0 && distance > 9 && distance < 15 ) { // pour se rapprocher;
                       if ( levier1 == 6 ) { joueurB = 94, GOTOU = 24 };
                       if ( GOTOU == 0 ) { levier2 = 6, GOTOU = 20 };
                   };

                   if ( GOTOU == 0 && distance == 9 ) {
                       if ( attenteA > 50 ) { levier2 = 6, GOTOU = 20 };
                       if ( GOTOU == 0 && joueurA == 9150 ) { joueurB = 96, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && Aoccupe == 1 ) { levier2 = 6, GOTOU = 20 };

                   };

                   if ( GOTOU == 0 && distance < 9 && distance > 6 ) { // distance de combat 1;
                      // pour autoriser les croisements;
                       if ( demo == 0 && joueurA == 915 ) { joueurB = 916, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                      // pour se rapprocher;
                       if ( GOTOU == 0 && joueurA == 9150 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && levier1 == 6 ) { joueurB = 918, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                      //pour eviter les degats repetitifs;

                       if ( GOTOU == 0 && IA > 1 ) {
                           if ( infoBdegatG > 4 ) {
                               if ( joueurA ==9102 || joueurA == 98 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 9102 || joueurA == 915 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatT > 2 ) {
                               if ( joueurA == 93 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatF > 2 ) {
                               if ( joueurA == 97 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                       };


                      //pour alterner les attaques;
                       if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 911, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 94, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 918, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 94, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 9102, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 5 ) { joueurB = 98, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 6 ) { levier2 = 6, infocoupB = 0, GOTOU = 20 };

                   };

                   if ( GOTOU == 0 && distance <= 6 ) {

                      // pour autoriser les croisements;
                       if ( demo == 0 && joueurA == 916 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                       if ( GOTOU == 0 && IA == 3 ) {
                           if ( joueurA == 96 ) { joueurB = 912, reftempsB = temps, GOTOU = 24 };
                       };

                       if ( GOTOU == 0 && IA == 2 ) {
                           if ( joueurA == 98 ) { joueurB = 916, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       };


                       if ( GOTOU == 0 && IA > 1 ) {
                           if ( infoBdegatG > 4 ) {
                               if ( joueurA == 9102 || joueurA == 98 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0 && IA > 2 ) {
                                   if ( joueurA == 918 ) { joueurB = 918, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 911 ) { joueurB = 911, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0  ) {
                                  if ( joueurA == 9102 || joueurA == 911 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };
                       };

                       if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 911, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 917, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 918, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 94, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 9102, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 5 ) { joueurB = 98, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 6 ) { joueurB = 94, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                       if ( GOTOU == 0 && infocoupB == 7 ) { levier2 = 6, infocoupB = 0, GOTOU = 20 };

                   };
               };

           };


          // ************************* IA de 4,5,6,7;

           if ( GOTOU == 0 ) {
               if ( IA == 4 || IA == 5 || IA == 6 || IA == 7 ) {

                   if ( sens == 6 ) {
                      distance = xB - xA;

                       if ( GOTOU == 0 && distance >= 15 ) { //  quand trop loin;
                          joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24;
                       };


                       if ( GOTOU == 0 && distance == 12 && joueurA == 64 ) { joueurB = 61400, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                       if ( GOTOU == 0 && distance > 9 && distance < 15 ) { // pour se rapprocher;
                           if ( levier1 == 4 ) { joueurB = 64, GOTOU = 24 };
                           if ( GOTOU == 0 ) { levier2 = 4, GOTOU = 20 };
                       };

                       if ( GOTOU == 0 && distance == 9 ) {
                           if ( attenteA > 50 ) { joueurB = 61400, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && demo == 1 ) {
                               if ( attenteA > 50 ) { joueurB = 61400, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && joueurA == 6150 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                          // if ( GOTOU == 0 && IA < 7 ) {
                          //     if ( GOTOU == 0 && Aoccupe == 1 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                          // };
                           if ( GOTOU == 0 && IA == 7 ) {
                               if ( Aoccupe == 1 ) { levier2 = 4, GOTOU = 20 };
                           };
                       };



                       if ( GOTOU == 0 && distance < 9 && distance > 6 ) { // distance de combat 1;
                          // pour autoriser les croisements;
                           if ( demo == 0 && joueurA == 615 ) { joueurB = 616, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                          // pour se rapprocher;
                           if ( GOTOU == 0 && joueurA == 6150 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && levier1 == 4 ) { joueurB = 618, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                          //plus l IA est forte, plus il y des des coups imposes avant infocoupB ou infodegat;

                           if ( GOTOU == 0 && IA == 5 ) {
                               if ( joueurA == 67 ) { joueurB = 613, reftempsB = temps, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && distance < 15 && demo == 1 ) {
                              joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24;
                           };

                          //pour eviter les degats repetitifs;
                           if ( GOTOU == 0 && infoBdegatG > 4 ) {
                               if ( joueurA == 61002 || joueurA == 68 || joueurA == 618 ) { joueurB = 618, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 61002 || joueurA == 68 || joueurA == 618 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatT > 2 ) {
                               if ( joueurA == 63 ) { joueurB = 68, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatF > 2 ) {
                               if ( IA < 7 ) {
                                   if ( joueurA == 67 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };


                          //pour alterner les attaques;

                           if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 66, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 67, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 618, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 618, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 63, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 5 ) { levier2 = 4, infocoupB = 0, GOTOU = 20 };

                       };

                       if ( GOTOU == 0 && distance <= 6 ) {

                          // pour autoriser les croisements;
                           if ( demo == 0 && joueurA == 616 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                           if ( GOTOU == 0 && IA > 4 ) {
                               if ( joueurA == 66 ) { joueurB = 612, reftempsB = temps, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && IA > 4 && IA < 7 ) {
                               if ( joueurA == 68 ) { joueurB = 616, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatG > 4 ) {
                               if ( joueurA == 61002 || joueurA == 68 || joueurA == 618 ) { joueurB = 618, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 611 ) { joueurB = 611, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0 ) {
                                   if ( joueurA == 61002 || joueurA == 68 || joueurA == 618 ) { joueurB = 615, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };

                           if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 611, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 617, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 618, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 68, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 68, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 5 ) { levier2 = 4, infocoupB = 0, GOTOU = 20 };

                       };

                   };


                   if ( GOTOU == 0 && sens == 9 ) {

                      distance = xA - xB;

                       if ( GOTOU == 0 && distance >= 15 ) { //  quand trop loin;
                          joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24;
                       };

                      // if ( GOTOU == 0 && distance < 15 ) {
                      // if ( GOTOU == 0 && IA == 7 ) {
                      // if ( GOTOU == 0 && joueurA == 9140 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                      // };
                      // };

                       if ( GOTOU == 0 && distance == 12 && joueurA == 94 ) { joueurB = 9140, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                       if ( GOTOU == 0 && distance > 9 && distance < 15 ) { // pour se rapprocher;
                           if ( GOTOU == 0 && levier1 == 6 ) { joueurB = 94, GOTOU = 24 };
                           if ( GOTOU == 0 ) { levier2 = 6, GOTOU = 20 };
                       };

                       if ( GOTOU == 0 && distance == 9 ) {
                           if ( GOTOU == 0 && attenteA > 50 ) { joueurB = 9140, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && demo == 1 ) {
                               if ( attenteA > 50 ) { joueurB = 9140, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && joueurA == 9150 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                          // if ( GOTOU == 0 && IA < 7 ) {
                          // if ( GOTOU == 0 && Aoccupe == 1 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                          // };
                           if ( GOTOU == 0 && IA == 7 ) {
                               if ( Aoccupe == 1 ) { levier2 = 6, GOTOU = 20 };
                           };
                       };

                       if ( GOTOU == 0 && distance < 9 && distance > 6 ) { // distance de combat 1;
                          // pour autoriser les croisements;
                           if ( GOTOU == 0 && demo == 0 && joueurA == 615 ) { joueurB = 916, reftempsB = temps, Boccupe = 1, GOTOU = 24 };

                          // pour se rapprocher;
                           if ( GOTOU == 0 && joueurA == 9150 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && levier1 == 6 ) { joueurB = 918, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                          //plus l IA est forte, plus il y des des coups imposes avant infocoupB ou infodegat;

                           if ( GOTOU == 0 && IA == 5 ) {
                               if ( GOTOU == 0 && joueurA == 97 ) { joueurB = 913, reftempsB = temps, GOTOU = 24 };
                           };

                          //pour eviter les degats repetitifs;
                           if ( GOTOU == 0 && infoBdegatG > 4 ) {
                               if ( joueurA == 9102 || joueurA == 98 || joueurA == 918 ) { joueurB = 918, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( joueurA == 9102 || joueurA == 98 || joueurA == 918 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatT > 2 ) {
                               if ( GOTOU == 0 && joueurA == 93 ) { joueurB = 98, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatF > 2 ) {
                               if ( GOTOU == 0 && IA < 7 ) {
                                   if ( GOTOU == 0 && joueurA == 97 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };


                          //pour alterner les attaques;

                           if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 96, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 97, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 918, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 918, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 93, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 5 ) { levier2 = 6, infocoupB = 0, GOTOU = 20 };

                       };

                       if ( GOTOU == 0 && distance <= 6 ) {

                          // pour autoriser les croisements;
                           if ( GOTOU == 0 && demo == 0 && joueurA == 916 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };


                           if ( GOTOU == 0 && IA > 4 ) {
                               if ( GOTOU == 0 && joueurA == 96 ) { joueurB = 912, reftempsB = temps, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && IA > 4 && IA < 7 ) {
                               if ( GOTOU == 0 && joueurA == 98 ) { joueurB = 916, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           };

                           if ( GOTOU == 0 && infoBdegatG > 4 ) {
                               if ( GOTOU == 0  ) {
                                  if ( joueurA == 9102 || joueurA == 98 || joueurA == 918 ) { joueurB = 918, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };
                           if ( GOTOU == 0 && infoBdegatG > 2 ) {
                               if ( GOTOU == 0 && joueurA == 911 ) { joueurB = 911, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               if ( GOTOU == 0 ) {
                                   if ( joueurA == 9102 || joueurA == 98 || joueurA == 918 ) { joueurB = 915, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                               };
                           };

                           if ( GOTOU == 0 && infocoupB == 0 ) { joueurB = 911, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 1 ) { joueurB = 917, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 2 ) { joueurB = 918, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 3 ) { joueurB = 98, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 4 ) { joueurB = 98, infocoupB = infocoupB + 1, reftempsB = temps, Boccupe = 1, GOTOU = 24 };
                           if ( GOTOU == 0 && infocoupB == 5 ) { levier2 = 6, infocoupB = 0, GOTOU = 20 };


                       };

                   };

               };
           };

       };




     //                       redirection suivant les touches;

      if ( GOTOU == 0 && levier2 == 1 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 3 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 7 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 9 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 8 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 2 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 4 ) { GOTOU = 20 };
      if ( GOTOU == 0 && levier2 == 6 ) { GOTOU = 20 };


     //                       actions si aucune touche n//a ete touchee;

      if ( GOTOU == 0 ) {
         spriteavanceB = 0;
         spritereculeB = 0;

         protegeDB = 0, protegeHB = 0;

         attenteB = attenteB + 1;
         levier2 = 5;
      };

     // pour se relever;
      if ( GOTOU == 0 ) { assisB = 0 };
      if ( GOTOU == 0 && joueurB == 61002 ) { joueurB = 61000, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
      if ( GOTOU == 0 && joueurB == 9102 ) { joueurB = 9106, Boccupe = 1, reftempsB = temps, GOTOU = 24 };


     //attente des 5 secondes;
       if ( GOTOU == 0 && sens == 6 ) {
          if ( attenteB > 300 ) { joueurB = 61, Boccupe = 1, reftempsB = temps, GOTOU = 24; }
      };
      if ( GOTOU == 0 && sens == 9 ) {
          if ( attenteB > 300 ) { joueurB = 91, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
      };

      if ( GOTOU == 0 && sens == 6 ) { joueurB = 64 };
      if ( GOTOU == 0 && sens == 9 ) { joueurB = 94 };

     if ( GOTOU == 0 ) { GOTOU = 24 };


     //                       *****************************************;
     //                       *************actions joueur 2************;
     //                       *****************************************;
     //actionB ;
      if ( GOTOU == 20 ) { GOTOU = 0 };

      if ( GOTOU == 0 ) { attenteB = 1 };


     //                       droite,gauche, decapite, devant (normal);


      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier2 == 4 ) {
             protegeDB = 0;
              if ( GOTOU == 0 && spriteavanceB == 1 ) { joueurB = 691, GOTOU = 24 };
              if ( GOTOU == 0 && spriteavanceB == 2 ) { joueurB = 692, GOTOU = 24 };
              if ( GOTOU == 0 && spriteavanceB == 3 ) { joueurB = 693, GOTOU = 24 };
              if ( GOTOU == 0 && spriteavanceB == 4 ) { joueurB = 694, GOTOU = 24 };              
              if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24};		
	      if ( GOTOU == 0 ) { joueurB = 69, reftempsB = temps, GOTOU = 24 };
          };

          if ( GOTOU == 0 && levier2 == 6 ) {
             protegeHB = 0;
              if ( GOTOU == 0 && spritereculeB == 1 ) { joueurB = 6901, GOTOU = 24 };
              if ( GOTOU == 0 && spritereculeB == 2 ) { joueurB = 6902, GOTOU = 24 };
              if ( GOTOU == 0 && spritereculeB == 3 ) { joueurB = 6903, GOTOU = 24 };
              if ( GOTOU == 0 && spritereculeB == 4 ) { joueurB = 6904, GOTOU = 24 };
              if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24};
              if ( GOTOU == 0 ) { joueurB = 690, reftempsB = temps, GOTOU = 24};
          };
      };


      //                       droite, gauche, decapite, devant (inverse);

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 6 ) {
              protegeDB = 0;
               if ( GOTOU == 0 && spriteavanceB == 1 ) { joueurB = 991, GOTOU = 24 };
               if ( GOTOU == 0 && spriteavanceB == 2 ) { joueurB = 992, GOTOU = 24 };
               if ( GOTOU == 0 && spriteavanceB == 3 ) { joueurB = 993, GOTOU = 24 };
               if ( GOTOU == 0 && spriteavanceB == 4 ) { joueurB = 994, GOTOU = 24 };
               if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24};
               if ( GOTOU == 0 ) { joueurB = 99, reftempsB = temps, GOTOU = 24};
           };

           if ( GOTOU == 0 && levier2 == 4 ) {
              protegeHB = 0;
               if ( GOTOU == 0 && spritereculeB == 1 ) { joueurB = 9901, GOTOU = 24 };
               if ( GOTOU == 0 && spritereculeB == 2 ) { joueurB = 9902, GOTOU = 24 };
               if ( GOTOU == 0 && spritereculeB == 3 ) { joueurB = 9903, GOTOU = 24 };
               if ( GOTOU == 0 && spritereculeB == 4 ) { joueurB = 9904, GOTOU = 24 };
               if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24};
               if ( GOTOU == 0 ) { joueurB = 990, reftempsB = temps, GOTOU = 24};
           };
       };


     //                           saute, attaque cou;

      if ( GOTOU == 0 && sens == 6 ) {
          if ( levier2 == 2 ) {
             protegeDB = 0, protegeHB = 0;
             joueurB = 616, Boccupe = 1, reftempsB = temps, GOTOU = 24;
          };
      };

      if ( GOTOU == 0 && sens == 9 ) {
          if ( levier2 == 2 ) {
             protegeDB = 0, protegeHB = 0;
             joueurB = 916, Boccupe = 1, reftempsB = temps, GOTOU = 24;
          };
      };


      //                               assis, attaque genou;
       if ( GOTOU == 0 && sens == 6 ) {
           if ( levier2 == 8 ) {
               if ( attaqueB == 1 ) { joueurB = 68, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( GOTOU == 0 && assisB == 1 ) { joueurB = 61002, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 6100, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };
       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 8 ) {
               if ( attaqueB == 1 ) { joueurB = 98, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( GOTOU == 0 && assisB == 1 ) { joueurB = 9102, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 9100, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };


      //                               roulade AV, coup de pied;
       if ( GOTOU == 0 && sens == 6 ) {
           if ( levier2 == 7 ) {
               if ( attaqueB == 1 ) { joueurB = 611, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
              if ( GOTOU == 0 ) { joueurB = 615, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 9 ) {
               if ( attaqueB == 1 ) { joueurB = 911, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
              if ( GOTOU == 0 ) { joueurB = 915, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };


      //                               roulade AR, coup sur front;
       if ( GOTOU == 0 && sens == 6 ) {
           if ( levier2 == 9 ) {
               if ( attaqueB == 1 ) { joueurB = 67, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
              if ( GOTOU == 0 ) { joueurB = 6150, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 7 ) {
               if ( attaqueB == 1 ) { joueurB = 97, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
              if ( GOTOU == 0 ) { joueurB = 9159, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };

      //                                   protection Haute, araignee;
       if ( GOTOU == 0 && sens == 6 ) {
           if ( levier2 == 3 ) {
               if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 618, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( protegeHB == 1 ) { joueurB = 613, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 6131, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 1 ) {
               if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 918, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( protegeHB == 1 ) { joueurB = 913, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 9131, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };


      //                                   protection devant, coup de tete;
       if ( GOTOU == 0 && sens == 6 ) {
           if ( levier2 == 1 ) {
               if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 617, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( GOTOU == 0 && protegeDB == 1 ) { joueurB = 612, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 6121, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };

       if ( GOTOU == 0 && sens == 9 ) {
           if ( levier2 == 3 ) {
               if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 917, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( protegeDB == 1 ) { joueurB = 912, GOTOU = 24 };
               if ( GOTOU == 0 ) { joueurB = 9121, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           };
       };


     //                       ***********************************;
     //                       *********gestion joueur 2**********;
     //                       ***********************************;


     //gestionB ;
      if ( GOTOU == 24 ) { GOTOU = 0 };

      if ( GOTOU == 0 && joueurB == 64 ) { //debout;
         spriteB = 64;
         // if ( GOTOU == 0 && marianna == 1 ) { spriteB = 6969 };
         decapiteB = 1;
         sangB = 0;
         xAttB = xB + 4, yAttB = 14 ;
         yFB = 15, yTB = 16, yMB = 18, yGB = 20;
         xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          if ( GOTOU == 0 && partie == 1 ) {
              if ( temps > reftempsB + 10 ) { Boccupe = 0 };
          };
         GOTOU = 2;
      }; 

      if ( GOTOU == 0 && joueurB == 94 ) { // deboutR;
         spriteB = 94;
         decapiteB = 1;
         sangB = 0;
         xAttB = xB, yAttB = 14;
         yFB = 15, yTB = 16, yMB = 18, yGB = 20;
         xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          if ( GOTOU == 0 && partie == 1 ) {
              if ( temps > reftempsB + 10 ) { Boccupe = 0 };
          };
         GOTOU = 2;
     };

      if ( GOTOU == 0 && joueurB == 61 ) { // attente;
         xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          if ( GOTOU == 0 && temps > reftempsB + 100 ) { Boccupe = 0, attenteB = 1, joueurB = 64, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 74 ) { spriteB = 62001, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 60 ) { spriteB = 62002, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 46 ) { spriteB = 62003, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 62002, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 20 ) { GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 19 ) { attente.play(), spriteB = 62001, GOTOU = 2 };
         GOTOU = 2;
      };

      if ( GOTOU == 0 && joueurB == 91 ) { // attenteR;
         xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          if ( GOTOU == 0 && temps > reftempsB + 100 ) { Boccupe = 0, attenteB = 1, joueurB = 94, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 74 ) { spriteB = 921, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 60 ) { spriteB = 922, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 46 ) { spriteB = 923, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 922, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 20 ) { GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 19 ) { attente.play(), spriteB = 921, GOTOU = 2 };
         GOTOU = 2;
      };

     //                                   avance;
      if ( GOTOU == 0 && joueurB == 69 ) {
	 if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 ) { xFB = xB, xTB = xB, xMB = xB, xGB = xB, xAttB = xB + 4 };
         if ( GOTOU == 0 ) { spriteB = 691, spriteavanceB = 1, xB = xB - 1, GOTOU = 2 };         
      };

     if ( GOTOU == 0 && joueurB == 691 ) {
        if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
        if ( GOTOU == 0 ) { xFB = xB, xTB = xB, xMB = xB, xGB = xB, xAttB = xB + 4 };
        if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB - 1, spriteB = 692, spriteavanceB = 2, GOTOU = 2 };
     };

     if ( GOTOU == 0 && joueurB == 692 ) {
        if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
        if ( GOTOU == 0 ) { xFB = xB, xTB = xB, xMB = xB, xGB = xB, xAttB = xB + 4, spriteB = 692 };
        if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB - 1, spriteB = 693, spriteavanceB = 3, GOTOU = 2 };
     };

     if ( GOTOU == 0 && joueurB == 693 ) {
         if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 ) { xFB = xB, xTB = xB, xMB = xB, xGB = xB, xAttB = xB + 4, spriteB = 693 };
         if ( GOTOU == 0 && temps > reftempsB + 27 ) { xB = xB - 1, spriteB = 64, spriteavanceB = 4, GOTOU = 2 };
     };

     if ( GOTOU == 0 && joueurB == 694 ) {
        if ( GOTOU == 0 && attaqueB == 1 && entree == 0 ) { joueurB = 66, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
        if ( GOTOU == 0 ) { xFB = xB, xTB = xB, xMB = xB, xGB = xB, xAttB = xB + 4, spriteB = 64 };
        if ( GOTOU == 0 && temps > reftempsB + 36 ) { joueurB = 64, reftempsB = temps, spriteavanceB = 0, GOTOU = 2 };
     };



       if ( GOTOU == 0 && joueurB == 99 ) { // avanceR;
          if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
          if ( GOTOU == 0 ) { xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4, xAttB = xB };
          if ( GOTOU == 0 ) { spriteB = 991, spriteavanceB = 1, xB = xB + 1, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 991 ) {
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 ) { xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4, xAttB = xB };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB + 1, spriteB = 992, spriteavanceB = 2, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 992 ) {
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 ) { xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4, xAttB = xB, spriteB = 992 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB + 1, spriteB = 993, spriteavanceB = 3, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 993 ) {
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 ) { xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4, xAttB = xB, spriteB = 993 };
           if ( GOTOU == 0 && temps > reftempsB + 27 ) { xB = xB + 1, spriteB = 94, spriteavanceB = 4, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 994 ) {
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 96, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 ) { xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4, xAttB = xB, spriteB = 94 };
           if ( GOTOU == 0 && temps > reftempsB + 36 ) { joueurB = 94, reftempsB = temps, spriteavanceB = 0, GOTOU = 2 };
       };


     //                                        recule;
      if ( GOTOU == 0 && joueurB == 690 ) {
         xFB = xB, xTB = xB, xMB = xB, xGB = xB;
         xAttB = xB + 4;
          if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 ) { spriteB = 693, spritereculeB = 1, xB = xB + 1 };
         GOTOU = 2;
      };

     if ( GOTOU == 0 && joueurB == 6901 ) {
        xFB = xB, xTB = xB, xMB = xB, xGB = xB;
        xAttB = xB + 4;
         if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB + 1, spriteB = 692, spritereculeB = 2 };
        GOTOU = 2;
     };
     if ( GOTOU == 0 && joueurB == 6902 ) {
        xFB = xB, xTB = xB, xMB = xB, xGB = xB;
        xAttB = xB + 4;
        spriteB = 692;
         if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB + 1, spriteB = 691, spritereculeB = 3 };
        GOTOU = 2;
     };
     if ( GOTOU == 0 && joueurB == 6903 ) {
        xFB = xB, xTB = xB, xMB = xB, xGB = xB;
        xAttB = xB + 4;
        spriteB = 691;
         if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 && temps > reftempsB + 27 ) { xB = xB + 1, spriteB = 64, spritereculeB = 4 };
        GOTOU = 2;
     };
     if ( GOTOU == 0 && joueurB == 6904 ) {
        xFB = xB, xTB = xB, xMB = xB, xGB = xB;
        xAttB = xB + 4;
        spriteB = 64;
         if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 61400, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
         if ( GOTOU == 0 && temps > reftempsB + 36 ) { joueurB = 64, reftempsB = temps, spritereculeB = 0 };
        GOTOU = 2;
     };


      //                               recule inverse;
       if ( GOTOU == 0 && joueurB == 990 ) {
          xAttB = xB;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
           if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
          if ( GOTOU == 0 ) { spriteB = 993, spritereculeB = 1, xB = xB - 1 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 9901 ) {
          xAttB = xB;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
           if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB - 1, spriteB = 992, spritereculeB = 2 };
          GOTOU = 2;
       };
       if ( GOTOU == 0 && joueurB == 9902 ) {
          xAttB = xB;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          spriteB = 992;
           if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB - 1, spriteB = 991, spritereculeB = 3 };
          GOTOU = 2;
       };
       if ( GOTOU == 0 && joueurB == 9903 ) {
          xAttB = xB;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          spriteB = 991;
           if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 27 ) { xB = xB - 1, spriteB = 94, spritereculeB = 4 };
          GOTOU = 2;
       };
       if ( GOTOU == 0 && joueurB == 9904 ) {
          xAttB = xB;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          spriteB = 94;
           if ( GOTOU == 0 && attaqueB == 1 && sortieB == 0 ) { joueurB = 9140, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 36 ) { joueurB = 94, reftempsB = temps, spritereculeB = 0 };
          GOTOU = 2;
       };


      if ( GOTOU == 0 && joueurB == 616 ) { // saute;
        xAttB = xB + 4, xFB = xB, xTB = xB, xMB = xB, xGB = xB;
         yGB = yMB, yAttB = 14;
         decapiteB = 0;
          if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 63, Boccupe = 1, reftempsB = temps, GOTOU = 2 };

          if ( GOTOU == 0 && temps > reftempsB + 51 ) { Boccupe = 0, spriteB = 64, joueurB = 64, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 50 ) { spriteB = 64, xMB = xB, xGB = xB, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 6161, xMB = xB, xGB = xB + 1, decapiteB = 1, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 6162, xMB = xB + 3, xGB = xB + 3, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 1 ) { spriteB = 6161, xMB = xB, xGB = xB + 3, GOTOU = 2 };
          if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6161, GOTOU = 2 };
     };

       if ( GOTOU == 0 && joueurB == 916 ) { //sauteR;
          xAttB = xB, xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yGB = yMB, yAttB = 14;
          decapiteB = 0;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 93, Boccupe = 1, reftempsB = temps, GOTOU = 2 };

           if ( GOTOU == 0 && temps > reftempsB + 51 ) { Boccupe = 0, spriteB = 94, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 50 ) { spriteB = 94, xMB = xB + 4, xGB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 9161, xMB = xB + 4, xGB = xB + 1, decapiteB = 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 9162, xMB = xB + 1, xGB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { spriteB = 9161, xMB = xB + 4, xGB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9161, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 6100 ) { // assis;
          xAttB = xB + 4;
          xFB = xB + 4, xTB = xB + 4, xMB = xB, xGB = xB;
          spriteB = 61;
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { joueurB = 61002, GOTOU = 2 };
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 68, Boccupe = 1, reftempsB = temps };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 61002 ) { // assis2;
          assisB = 1;
          xAttB = xB + 4;
          xFB = xB + 4, xTB = xB + 4, xMB = xB, xGB = xB;
          spriteB = 61002;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 68, Boccupe = 1, reftempsB = temps, GOTOU = 2 };
           if ( GOTOU == 0 && partie == 1 ) {
               if ( GOTOU == 0 && temps > reftempsB + 10 ) { Boccupe = 0 };
              GOTOU = 2;
           };
          if ( GOTOU == 0 ) { Boccupe = 0, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 61000 ) { //releve;
          xAttB = xB + 4, yAttA = 14;
          xFB = xB + 4, xTB = xB + 4, xMB = xB, xGB = xB;
          spriteB = 61;
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { joueurB = 64, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 68, Boccupe = 1, reftempsB = temps };
          GOTOU = 2;
       };


       if ( GOTOU == 0 && joueurB == 9100 ) { // assisR;
          xAttB = xB;
          xFB = xB, xTB = xB, xMB = xB + 4, xGB = xB + 4;
          spriteB = 91;
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { joueurB = 9102, GOTOU = 2 };
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 98, Boccupe = 1, reftempsB = temps };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 9102 ) { // assis2R;
          assisB = 1;
          xAttB = xB;
          xFB = xB, xTB = xB, xMB = xB + 4, xGB = xB + 4;
          spriteB = 9102;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 98, Boccupe = 1, reftempsB = temps, GOTOU = 2 };
           if ( GOTOU == 0 && partie == 1 ) {
               if ( GOTOU == 0 && temps > reftempsB + 10 ) { Boccupe = 0 };
              GOTOU = 2;
           };
          if ( GOTOU == 0 ) { Boccupe = 0, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 9106 ) { // releveR;
          xAttB = xB, yAttA = 14;
          xFB = xB, xTB = xB, xMB = xB + 4, xGB = xB + 4;
          spriteB = 91;
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { joueurB = 94, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 98, Boccupe = 1, reftempsB = temps };
          GOTOU = 2;
       };


       if ( GOTOU == 0 && joueurB == 615 ) { // rouladeAV;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB;
          yGB = 20, yAttB = yGB, xAttB = xB + 4;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 611, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 49 ) {
              spriteB = 64, xTB = xB, xMB = xB ;
              Boccupe = 0, xB = xB - 1, joueurB = 61500, GOTOU = 6;
           };
           if ( GOTOU == 0 && temps > reftempsB + 45 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 42 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 41 ) { xB = xB - 1, spriteB = 6156, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 38 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { xB = xB - 1, spriteB = 6155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 33 ) { xB = xB - 1, spriteB = 6155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 29 ) { xB = xB - 1, spriteB = 6154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB - 1, spriteB = 6154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB - 1, xAttB = xB - 1, spriteB = 6153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { xB = xB - 1, xAttB = xB - 1, spriteB = 6153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { xB = xB - 1, spriteB = 6152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB - 1, spriteB = 6152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB - 1, spriteB = 6151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { xB = xB - 1, spriteB = 6151, roule.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6151, GOTOU = 2 };
       };

      //finderouladeB ;
       if ( GOTOU == 6 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurB == 61500 ) {
           if ( GOTOU == 0 && xB > xA ) {
              joueurB = 64;
              spriteB = 64;
              xAttB = xB + 4, yAttB = 17;
              yFB = 15, yTB = 16, yMB = 18, yGB = 20;
              xFB = xB, xTB = xB, xMB = xB, xGB = xB;
              GOTOU = 2;
           };
           if ( GOTOU == 0 && xB < xA + 1 ) {
              joueurA = 614, yAttA = 14, Aoccupe = 1, reftemps = temps;
              joueurB = 614, yAttB = 14, Boccupe = 1, reftempsB = temps;
              GOTOU = 31;
           };
       };

       if ( GOTOU == 0 && joueurB == 915 ) { //rouladeAVR;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB + 4;
          yGB = 20, yAttB = yGB, xAttB = xB;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 911, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 49 ) {
              spriteB = 94, xTB = xB + 4, xMB = xB + 4 ;
              Boccupe = 0, xB = xB + 1, joueurB = 9150, GOTOU = 7;
           };
           if ( GOTOU == 0 && temps > reftempsB + 45 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 42 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 41 ) { xB = xB + 1, spriteB = 9156, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 38 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { xB = xB + 1, spriteB = 9155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 33 ) { xB = xB + 1, spriteB = 9155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 29 ) { xB = xB + 1, spriteB = 9154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB + 1, spriteB = 9154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB + 1, xAttB = xB + 5, spriteB = 9153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { xB = xB + 1, xAttB = xB + 5, spriteB = 9153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { xB = xB + 1, spriteB = 9152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB + 1, spriteB = 9152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB + 1, spriteB = 9151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { xB = xB + 1, spriteB = 9151, roule.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9151, GOTOU = 2 };
       };

      //finderouladeBR ;
       if ( GOTOU == 7 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurB == 9150 ) {
           if ( GOTOU == 0 && xB < xA ) {
              joueurB = 94;
              spriteB = 94;
              xAttB = xB, yAttB = 17;
              yFB = 15, yTB = 16, yMB = 18, yGB = 20;
              xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
              GOTOU = 2;
           };
           if ( GOTOU == 0 && xB > xA - 1 ) {
              joueurA = 914, Aoccupe = 1, reftemps = temps;
              joueurB = 914, Boccupe = 1, reftempsB = temps;
              GOTOU = 31;
           };
       };

       if ( GOTOU == 0 && joueurB == 6150 ) { //rouladeAR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB;
          yGB = 20, yAttB = yGB, xAttB = xB + 4;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 67, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 44 ) {
              spriteB = 64, xTB = xB, xMB = xB ;
              Boccupe = 0, joueurB = 64, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 41 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 38 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { xB = xB + 1, spriteB = 6151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 33 ) { xB = xB + 1, spriteB = 6151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 29 ) { xB = xB + 1, spriteB = 6152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB + 1, spriteB = 6152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB + 1, spriteB = 6153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { xB = xB + 1, spriteB = 6153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { xB = xB + 1, spriteB = 6154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB + 1, spriteB = 6154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB + 1, spriteB = 6155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { xB = xB + 1, spriteB = 6156, roule.play(), GOTOU = 2 };         
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6156, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 9159 ) { //rouladeARR;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB + 4;
          yGB = 20, yAttB = yGB, xAttB = xB;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 97, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
           if ( GOTOU == 0 && temps > reftempsB + 44 ) {
              spriteB = 94, xTB = xB + 4, xMB = xB + 4 ;
              Boccupe = 0, joueurB = 94, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 41 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 38 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { xB = xB - 1, spriteB = 9151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 33 ) { xB = xB - 1, spriteB = 9151, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 29 ) { xB = xB - 1, spriteB = 9152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB - 1, spriteB = 9152, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB - 1, spriteB = 9153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { xB = xB - 1, spriteB = 9153, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { xB = xB - 1, spriteB = 9154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { xB = xB - 1, spriteB = 9154, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB - 1, spriteB = 9155, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { xB = xB - 1, spriteB = 9156, roule.play(), GOTOU = 2 };           
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9156, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 6131 ) { //protegeH1;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 618, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
	   if ( GOTOU == 0 ) {
	          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
	          xAttB = xB + 4;
	          yGB = 20;
	   };
           if ( GOTOU == 0 && temps > reftempsB + 3 ) { protegeHB = 1, joueurB = 613, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { protege.play(), xB = xB + 1, spriteB = 691, GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 691, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 613 ) { //protegeH;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 618, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
	   if ( GOTOU == 0 ) {
	          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
	          xAttB = xB + 4;
	          yGB = 20;
	          spriteB = 613;
	          GOTOU = 2;
	   };
       };

       if ( GOTOU == 0 && joueurB == 9131 ) { //protegeH1R;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 918, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
	   if ( GOTOU == 0 ) {
	          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
	          xAttB = xB;
	          yGB = 20;
	   };
           if ( GOTOU == 0 && temps > reftempsB + 3 ) { protegeHB = 1, joueurB = 913, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { protege.play(), xB = xB - 1, spriteB = 991, GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 991, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 913 ) { //protegeHR;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 918, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
	   if ( GOTOU == 0 ) {
	          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
	          xAttB = xB;
	          yGB = 20;
	          spriteB = 913;
	          GOTOU = 2;
	   };
       };

       if ( GOTOU == 0 && joueurB == 6121 ) { // protegeD1;
          if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 617, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
	  if ( GOTOU == 0 ) {
		  xAttB = xB + 4;
	          yGB = 20;
	          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
	          decapiteB = 0;
	          spriteB = 613;
          }; 
           if ( GOTOU == 0 && temps > reftempsB + 3 ) { joueurB = 612, protegeDB = 1, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { protege.play(), GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 612 ) { //protedeD;
          if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 617, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
          if ( GOTOU == 0 ) {
		  xAttB = xB + 4;
	          yGB = 20;
	          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
	          decapiteB = 0;
	          spriteB = 612;
		  GOTOU = 2;
	  };
          
       };

       if ( GOTOU == 0 && joueurB == 9121 ) { //protegeD1R;
          if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 917, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
          if ( GOTOU == 0 ) {
		  xAttB = xB;
	          yGB = 20;
	          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
	          decapiteB = 0;
	          spriteB = 913;
	   };
           if ( GOTOU == 0 && temps > reftempsB + 3 ) { joueurB = 912, protegeDB = 1, Boccupe = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { protege.play(), GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 912 ) { //protegeDR;
           if ( GOTOU == 0 && attaqueB == 1 ) { joueurB = 917, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
          if ( GOTOU == 0 ) {           
		xAttB = xB;
	           yGB = 20;
	           xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
	           decapiteB = 0;
	           spriteB = 912;
	           GOTOU = 2;
	   };
       };


       if ( GOTOU == 0 && joueurB == 63 ) { // cou;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 632, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) {
              spriteB = 633;
               if ( GOTOU == 0 && joueurA == 63 ) { GOTOU = 2 };
              xTB = xB + 4, xAttB = xB - 3, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 632, yAttB = yTB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 631, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 93 ) { // couR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 932, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) {
              spriteB = 933;
               if ( GOTOU == 0 && joueurA == 93 ) { GOTOU = 2 };
              xTB = xB, xAttB = xB + 7, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 932, yAttB = yTB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 931, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 66 ) { // devant;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 662, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 663, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) {
              spriteB = 663;
               if ( joueurA == 66 ) { GOTOU = 2 };
               if ( GOTOU == 0 && joueurA == 612 && distance < 7 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xMB = xB + 4, xAttB = xB - 2, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 662, yAttB = yMB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 661, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 96 ) { // devantR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 962, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 963, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) {
              spriteB = 963;
               if ( joueurA == 96 ) { GOTOU = 2 };
               if ( GOTOU == 0 && joueurA == 912 && distance < 7 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xMB = xB, xAttB = xB + 6, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 962, yAttB = yMB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 961, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 68 ) { //genou;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 61002, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { spriteB = 682, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 683, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) {
              spriteB = 683;
               if ( GOTOU == 0 && joueurA == 68 ) { GOTOU = 2 };
              xGB = xB + 4, xAttB = xB - 3, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 682, yAttB = yGB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 681, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 98 ) { // genouR;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB + 4;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { Boccupe = 0, joueurB = 9102, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { spriteB = 982, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 983, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) {
              spriteB = 983;
               if ( GOTOU == 0 && joueurA == 98 ) { GOTOU = 2 };
              xGB = xB, xAttB = xB + 7, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 982, yAttB = yGB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 981, GOTOU = 2 };
       };


       if ( GOTOU == 0 && joueurB == 618 ) { // araignee;
          xFB = xB, xTB = xB, xMB = xB + 4, xGB = xB;
          yAttB = yGB, xAttB = xB + 4, yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { Boccupe = 0, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) {
              epee.play();
              spriteB = 6184;
              xAttB = xB - 1, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { spriteB = 6183, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 6182, xAttB = xB + 4, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6181, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 918 ) { // araigneeR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB, xGB = xB + 4;
          yAttB = yGB, xAttB = xB, yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { Boccupe = 0, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) {
              epee.play();
              spriteB = 9184;
              xAttB = xB + 5, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { spriteB = 9183, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 9182, xAttB = xB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9181, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 611 ) { //coupdepied;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          spriteB = 6111, yAttB = yGB, yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { Boccupe = 0, spriteB = 64, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 6111, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { spriteB = 6112, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { spriteB = 6112, xAttB = xB - 1, GOTOU = 2 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 911 ) { //coupdepiedR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          spriteB = 9111, yAttB = yGB, yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { Boccupe = 0, spriteB = 64, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 9111, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { spriteB = 9112, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { spriteB = 9112, xAttB = xB + 5, GOTOU = 2 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 617 ) { //coupdetete;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { Boccupe = 0, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB + 1, spriteB = 6171, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { spriteB = 6172, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { xB = xB - 1, spriteB = 6172, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { spriteB = 6171, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6171, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 917 ) { // coupdeteteR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { Boccupe = 0, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { xB = xB - 1, spriteB = 9171, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { spriteB = 9172, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { xB = xB + 1, spriteB = 9172, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { spriteB = 9171, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9171, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 61400 ) { //decapite;
          decapiteB = 0;
          xFB = xB + 1, xTB = xB + 2, xMB = xB + 2, xGB = xB;
           if ( GOTOU == 0 && temps > reftempsB + 44 ) { Boccupe = 0, spriteB = 64, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { spriteB = 632, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { spriteB = 633, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { spriteB = 633, xTB = xB + 4, xAttB = xB - 2, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 32 ) { spriteB = 633, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 632, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 27 ) { spriteB = 631, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 24 ) { xB = xB - 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { spriteB = 6143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB - 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) { spriteB = 6143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB - 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 6142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { xB = xB - 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { spriteB = 6142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 12 ) { xB = xB - 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { spriteB = 6141, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) { xB = xB - 1, spriteB = 6141, decapite.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6141, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 9140 ) { //decapiteR;
          decapiteB = 0;
          xFB = xB + 3, xTB = xB + 2, xMB = xB + 2, xGB = xB + 4;
           if ( GOTOU == 0 && temps > reftempsB + 44 ) { Boccupe = 0, spriteB = 94, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { spriteB = 932, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { spriteB = 933, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 34 ) { spriteB = 933, xTB = xB, xAttB = xB + 6, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 32 ) { spriteB = 933, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 932, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 27 ) { spriteB = 931, yAttB = yTB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 24 ) { xB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 22 ) { spriteB = 9143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { xB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 19 ) { spriteB = 9143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { xB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 9142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { xB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 13 ) { spriteB = 9142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 12 ) { xB = xB + 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { spriteB = 9141, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) { xB = xB + 1, spriteB = 9141, decapite.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9141, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 67 ) { //front;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          yGB = 20;
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { Boccupe = 0, joueurB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { spriteB = 672, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 673, xAttB = xB + 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) {
              spriteB = 673, distance = xB - xA;
               if ( joueurA == 67 ) { GOTOU = 2 };
               if ( GOTOU == 0 && joueurA == 613 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xFB = xB + 4, xAttB = xB - 3, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 672, yAttB = yFB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 671, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 97 ) { //frontR;
          yGB = 20;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { Boccupe = 0, joueurB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 25 ) { spriteB = 972, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 17 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 973, xAttB = xB, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) {
              spriteB = 973, distance = xA - xB;
               if ( joueurA == 97 ) { GOTOU = 2 };
               if ( GOTOU == 0 && joueurA == 913 && distance < 9 ) {
                  choixCLING = choixCLING + 1;
                   if ( choixCLING > 3 ) { choixCLING = 1 };
                   if ( choixCLING == 1 ) { cling.play() };
                   if ( choixCLING == 2 ) { cling2.play() };
                   if ( choixCLING == 3 ) { cling3.play() };
               };
              xFB = xB, xAttB = xB + 7, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) {
              epee.play();
              songrogne = songrogne + 1;
               if ( songrogne > 6 ) { songrogne = 0 };
               if ( songrogne == 3 ) { grogne1.play() };
               if ( songrogne == 6 ) { grogne2.play() };
              spriteB = 972, yAttB = yFB, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 971, GOTOU = 2 };
       };

      if ( GOTOU == 0 && joueurB == 614 ) { //retourne;
         xAttB = xB + 4, xFB = xB, xTB = xB, xMB = xB, xGB = xB;
         yAttB = 14 ;
         spriteB = 6141;
          if ( GOTOU == 0 && temps > reftempsB + 21 ) { joueurB = 94, Boccupe = 0, sens = 9, spriteA = 94, spriteB = 94, couleurok = 0, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 14 ) { spriteB = 6143, GOTOU = 2 };
          if ( GOTOU == 0 && temps > reftempsB + 7 ) { spriteB = 6142, GOTOU = 2 };
         GOTOU = 2;
      };

       if ( GOTOU == 0 && joueurB == 914 ) { //retourneR;
          xAttB = xB, xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yAttB = 14 ;
          spriteB = 9141;
           if ( GOTOU == 0 && temps > reftempsB + 21 ) { joueurB = 64, Boccupe = 0, sens = 6, spriteA = 64, spriteB = 64, couleurok = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { spriteB = 9143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 7 ) { spriteB = 9142, GOTOU = 2 };
          GOTOU = 2;
       };


       if ( GOTOU == 0 && joueurB == 621 ) { //vainqueur;
          spriteB = 6211;
          decapiteB = 1;
          sangB = 0;
          xAttB = xB + 4, yAttB = 14, yGB = 20;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          //psgvol 0,0;
           if ( GOTOU == 0 && temps > reftempsB + 100 ) { spriteB = 6211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 86 ) { spriteB = 6212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { spriteB = 6213, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { spriteB = 6212, GOTOU = 2 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 921 ) { //vainqueurR;
          spriteB = 9211;
          decapiteB = 1;
          sangB = 0;
          xAttB = xB, yAttB = 14, yGB = 20;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          //psgvol 0,0;
           if ( GOTOU == 0 && temps > reftempsB + 100 ) { spriteB = 9211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 86 ) { spriteB = 9212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 37 ) { spriteB = 9213, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 18 ) { spriteB = 9212, GOTOU = 2 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 62100 ) { //vainqueurKO;
          decapiteB = 1;
          sangB = 0;
          xAttB = xB + 4, yGB = 20, //yAttB = 14 ;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;

           if ( GOTOU == 0 && temps > reftemps + 230 ) {
              gnome = 1, reftemps = temps;
              xGNOME = 3;
              xSPRt = 270;
              GOTOU = 31;
           };

           if ( GOTOU == 0 && temps > reftempsB + 205 ) { spriteB = 6211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 195 ) { spriteB = 6212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 140 ) { spriteB = 6213, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 123 ) { spriteB = 6212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 105 ) { spriteB = 6211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 100 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 75 ) { spriteB = 6111, spriteA = 6104, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 71 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 70 ) { spriteB = 6112, spriteA = 6103, xA = xA - 2, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 55 ) { spriteB = 6111, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 36 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 35 ) {
              distance = xB - xA;
               if ( GOTOU == 0 && distance < 5 ) { spriteB = 693, xB = xB + 1 };
               if ( GOTOU == 0 && distance > 5 ) { spriteB = 693, xB = xB - 1 };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 64, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 23 ) { spriteB = 6143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { spriteB = 6142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) { spriteB = 6141 };
          GOTOU = 2;
       };

       if ( GOTOU == 0 && joueurB == 9210 ) { // vainqueurKOR;
          decapiteB = 1;
          sangB = 0;
          xAttB = xB, yGB = 20, // yAttB = 14;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;

           if ( GOTOU == 0 && temps > reftemps + 230 ) {
              gnome = 1, reftemps = temps;
              xGNOME = 3;
              xSPRt = 270;
              GOTOU = 31;
           };

           if ( GOTOU == 0 && temps > reftempsB + 205 ) { spriteB = 9211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 195 ) { spriteB = 9212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 140 ) { spriteB = 9213, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 123 ) { spriteB = 9212, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 105 ) { spriteB = 9211, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 100 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 75 ) { spriteB = 9111, spriteA = 9104, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 71 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 70 ) { spriteB = 9112, spriteA = 9103, xA = xA + 2, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 55 ) { spriteB = 9111, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 36 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 35 ) {
              distance = xA - xB;
               if ( GOTOU == 0 && distance < 5 ) { spriteB = 993, xB = xB - 1 };
               if ( GOTOU == 0 && distance > 5 ) { spriteB = 993, xB = xB + 1 };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 94, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 23 ) { spriteB = 9143, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 15 ) { spriteB = 9142, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) { spriteB = 9141 };
          GOTOU = 2;
       };

      //                               ******degats B ******;
       if ( GOTOU == 0 && joueurB == 620 ) { //touche;
          //psgvol 2,0;
          attenteB = 0;
          xAttB = xB + 4;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
          yFB = 15, yTB = 16, yMB = 18, yGB = 20;
           if ( GOTOU == 0 && joueurA == 611 ) { joueurB = 619, GOTOU = 24 };

           if ( GOTOU == 0 ) { sangB = 1, serpentB = 1 };

           if ( GOTOU == 0 && joueurA == 61400 && decapiteB == 1 ) {
              joueurB = 65, Boccupe = 1, reftempsB = temps;
              xSPRt = xB + 3, scoreA = scoreA + 250;
              sangB = 0, GOTOU = 33;
           };

           if ( GOTOU == 0 ) { vieB = vieB - 1 };

           if ( GOTOU == 0 && vieB <= 0 ) {
              //psgvol 2,0;
              joueurB = 610, Boccupe = 1, reftempsB = temps, sangB = 1, GOTOU = 33;
           };
           if ( GOTOU == 0 ) {
              joueurB = 6201, Boccupe = 1, reftempsB = temps, decapiteB = 1;
              GOTOU = 2;
           };
       };

       if ( GOTOU == 0 && joueurB == 6201 ) { // touche1;
           if ( GOTOU == 0 && temps > reftempsB + 20 ) {
              spriteB = 64, Boccupe = 0;
              joueurB = 64, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 6204, GOTOU = 2 };
          // pour serpent;
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { xB = xB + 1, sangB = 0, spriteB = 6203, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB + 2, spriteB = 6202, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) {
              xB = xB + 1, spriteB = 6201;
              choixTOUCHE = choixTOUCHE + 1;
               if ( choixTOUCHE > 3 ) { choixTOUCHE = 1 };
               if ( choixTOUCHE == 1 ) { touche.play() };
               if ( choixTOUCHE == 2 ) { touche2.play() };
               if ( choixTOUCHE == 3 ) { touche3.play() };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6201, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 920 ) { //toucheR;
          attenteB = 0;
          xAttB = xB;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
          yFB = 15, yTB = 16, yMB = 18, yGB = 20;
           if ( GOTOU == 0 && joueurA == 911 ) { joueurB = 919, GOTOU = 24 };

           if ( GOTOU == 0 ) { sangB = 1, serpentB = 1 };

           if ( GOTOU == 0 && joueurA == 9140 && decapiteB == 1 ) {
              joueurB = 95, Boccupe = 1, reftempsB = temps;

              xSPRt = xB + 3, scoreA = scoreA + 250;
              sangB = 0, GOTOU = 33;
           };

           if ( GOTOU == 0 ) { vieB = vieB - 1 };

           if ( GOTOU == 0 && vieB <= 0 ) {
              //psgvol 2,0;
              joueurB = 910, Boccupe = 1, reftempsB = temps, sangB = 1, GOTOU = 33;
           };
           if ( GOTOU == 0 ) {
              joueurB = 9201, Boccupe = 1, reftempsB = temps, decapiteB = 1;
              GOTOU = 2;
           };
       };

       if ( GOTOU == 0 && joueurB == 9201 ) { //touche1R;
           if ( GOTOU == 0 && temps > reftempsB + 20 ) {
              spriteB = 94, Boccupe = 0;
              joueurB = 94, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 9204, GOTOU = 2 };
          //pour serpent;
           if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { xB = xB - 1, sangB = 0, spriteB = 9203, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { xB = xB - 2, spriteB = 9202, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) {
              xB = xB - 1, spriteB = 9201;
              choixTOUCHE = choixTOUCHE + 1;
               if ( choixTOUCHE > 3 ) { choixTOUCHE = 1 };
               if ( choixTOUCHE == 1 ) { touche.play() };
               if ( choixTOUCHE == 2 ) { touche2.play() };
               if ( choixTOUCHE == 3 ) { touche3.play() };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9201, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 619 ) { //tombe;
          //psgvol 2,0;
          attenteB = 0;
          xAttB = xB + 4;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;

          sangB = 1;
          serpentB = 1;
          vieB = vieB - 1, scoreA = scoreA + 100;

           if ( GOTOU == 0 && joueurA == 615 ) { vieB = vieB + 1, sangB = 0, serpentB = 0, scoreA = scoreA - 100 };
           if ( GOTOU == 0 && vieB <= 0 ) {
              //psgvol 2,0;
              joueurB = 610, Boccupe = 1, reftempsB = temps, sangB = 1;
               if ( GOTOU == 0  ) {
				   if ( joueurA == 617 || joueurA == 611 ) { sangB = 0 };
			   };
              GOTOU = 33;
           };

           if ( GOTOU == 0  ) {
			   if ( joueurA == 617 || joueurA == 611 ) { scoreA = scoreA + 150, sangB = 0 };			   
           };

           if ( GOTOU == 0 ) { joueurB = 6191, Boccupe = 1, reftempsB = temps, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 6191 ) { // tombe1;
          attenteB = 0;
          xAttB = xB + 4;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
           if ( GOTOU == 0 && temps > reftempsB + 25 ) {
              spriteB = 64, xB = xB + 1, joueurB = 64, Boccupe = 0, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 6194, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 6193, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { sangB = 0, xB = xB + 2, spriteB = 6192, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) {
              xB = xB + 2;
              tombe.play() ;
               if ( joueurA == 611 ) { tombe.stop(), coupdepied.play() };
               if ( joueurA == 617 ) { tombe.stop(), coupdetete.play() };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6191, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 919 ) { //tombeR;
          //psgvol 2,0;
          xAttB = xB;
          attenteB = 0;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;

          sangB = 1;
          serpentB = 1;
          vieB = vieB - 1, scoreA = scoreA + 100;

           if ( GOTOU == 0 && joueurA == 915 ) { vieB = vieB + 1, sangB = 0, serpentB = 0, scoreA = scoreA - 100 };
           if ( GOTOU == 0 && vieB <= 0 ) {
              //psgvol 2,0;
              joueurB = 910, Boccupe = 1, reftempsB = temps, sangB = 1;
               if ( GOTOU == 0  ) {
				   if ( joueurA == 917 || joueurA == 911 ) { sangB = 0 };
			    };
              GOTOU = 33;
           };

           if ( GOTOU == 0  ) {
			   if ( joueurA == 917 || joueurA == 911 ) { scoreA = scoreA + 150, sangB = 0 };
		   };

           if ( GOTOU == 0 ) { joueurB = 9191, Boccupe = 1, reftempsB = temps, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 9191 ) { // tombe1R;
          xAttB = xB;
          attenteB = 0;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
           if ( GOTOU == 0 && temps > reftempsB + 25 ) {
              spriteB = 94, xB = xB - 1, joueurB = 94, Boccupe = 0, GOTOU = 2;
           };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { spriteB = 9194, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 16 ) { spriteB = 9193, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 9 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 8 ) { sangB = 0, xB = xB - 2, spriteB = 9192, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) {
              xB = xB - 2;
              tombe.play();
               if ( joueurA == 911 ) { tombe.stop(), coupdepied.play() };
               if ( joueurA == 917 ) { tombe.stop(), coupdetete.play() };
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9191, GOTOU = 2 };
       };


      //                               bruit des epees  et decapitations loupees;
       if ( GOTOU == 0 && sens == 6 ) {

           if ( GOTOU == 0 && joueurB == 2000 ) {
               if ( GOTOU == 0 && joueurA == 61400 && decapiteB == 0 ) { joueurB = 620, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( GOTOU == 0 && joueurA == 68 ) { joueurB = 620, Boccupe = 1, reftempsB = temps, GOTOU = 24 };

               if ( GOTOU == 0 ) { joueurB = 612, GOTOU = 2 };
           };

           if ( GOTOU == 0 && joueurB == 20002 ) {

              joueurB = 613, GOTOU = 2;
           };

       };

       if ( GOTOU == 0 && sens == 9 ) {

           if ( GOTOU == 0 && joueurB == 2000 ) {

               if ( GOTOU == 0 && joueurA == 9140 && decapiteB == 0 ) { joueurB = 920, Boccupe = 1, reftempsB = temps, GOTOU = 24 };
               if ( GOTOU == 0 && joueurA == 98 ) { joueurB = 920, Boccupe = 1, reftempsB = temps, GOTOU = 24 };

               if ( GOTOU == 0 ) { joueurB = 912, GOTOU = 2 };
           };

           if ( GOTOU == 0 && joueurB == 20002 ) {

              joueurB = 913, GOTOU = 2;
           };

       };

      //                                   *************************************;
      //                                   **********gestion de la mort*********;
      //                                   *************************************;
      //mortB ;
       if ( GOTOU == 33 ) { GOTOU = 0 };

       if ( GOTOU == 0 && joueurB == 610 ) { //mort;
          xFB = xB, xTB = xB, xMB = xB, xGB = xB;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { sangB = 0, spriteB = 6102, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { spriteB = 6101, mortKO.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 6101, joueurA = 62100, Aoccupe = 1, reftemps = temps, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 910 ) { //mortR;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;
           if ( GOTOU == 0 && temps > reftempsB + 35 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { sangB = 0, spriteB = 9662, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 2 ) {  GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 1 ) { spriteB = 9101, mortKO.play(), GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) { spriteB = 9101, joueurA = 9210, Aoccupe = 1, reftemps = temps, GOTOU = 2 };
       };

       if ( GOTOU == 0 && joueurB == 65 ) { //mortdecap;
           if ( GOTOU == 0 && temps > reftempsB + 90 ) { spriteB = 654, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 80 ) { spriteB = 653, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 70 ) { sangdecapB = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 60 ) { sangdecapB = 6, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 50 ) { sangdecapB = 5, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { sangdecapB = 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 652, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { sangdecapB = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { sangdecapB = 3, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { sangdecapB = 2, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { sangdecapB = 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) {
              spriteB = 651, joueurA = 621, Aoccupe = 1, reftemps = temps, mortdecap.play();
           };
          GOTOU = 2;
       };
	   
       if ( GOTOU == 0 && joueurB == 95 ) { //mortdecapR;
           if ( GOTOU == 0 && temps > reftempsB + 90 ) { spriteB = 954, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 80 ) { spriteB = 953, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 70 ) { sangdecapB = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 60 ) { sangdecapB = 6, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 50 ) { sangdecapB = 5, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 40 ) { sangdecapB = 4, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 30 ) { spriteB = 952, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 20 ) { sangdecapB = 0, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 14 ) { sangdecapB = 3, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 10 ) { sangdecapB = 2, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 6 ) { sangdecapB = 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 5 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps >= reftempsB ) {
              spriteB = 951, joueurA = 921, Aoccupe = 1, reftemps = temps, mortdecap.play();
           };
          GOTOU = 2;
       };


      //                   ***************************************;
      //                   ***********   SORCIER    **************;
      //                   ***************************************;

       if ( GOTOU == 0 && joueurB == 666 ) {

          gnome = 0;
          xFB = xB + 4, xTB = xB + 4, xMB = xB + 4, xGB = xB + 4;

           if ( GOTOU == 0 && temps > reftempsB + 291 ) { spriteB = 6661, reftempsB = temps, GOTOU = 2 };


           if ( GOTOU == 0 && temps > reftempsB + 290 ) { xAttB = 3, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 280 ) { xAttB = 27, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 270 ) { xAttB = 24, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 260 ) { xAttB = 21, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 250 ) { xAttB = 18, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 240 ) { xAttB = 15, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 230 ) { xAttB = 12, spriteB = 6661, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 220 ) { xAttB = 9, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 211 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 210 ) {
              spriteB = 6662, yAttB = 16;
              feu.play();
              GOTOU = 2;
           };

           if ( GOTOU == 0 && temps > reftempsB + 130 ) { xAttB = 1, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 120 ) { xAttB = 27, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 110 ) { xAttB = 24, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 100 ) { xAttB = 21, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 90 ) { xAttB = 18, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 80 ) { xAttB = 15, yAttB = 20, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 70 ) { xAttB = 12, spriteB = 6661, yAttB = 18, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 60 ) { xAttB = 9, GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 51 ) { GOTOU = 2 };
           if ( GOTOU == 0 && temps > reftempsB + 50 ) {
              spriteB = 6662;
              feu.play();
              GOTOU = 2;
           };
           if ( GOTOU == 0 && temps >= reftempsB ) {
              spriteB = 6661;
              xAttB = xB, yAttB = 16, yGB = 20;
              sangB = 0;
           };
       };



    //                   ***************************************;
    //                   ***********   COLISION   **************;
    //                   ***************************************;
    //colision ;
      if ( GOTOU == 2 ) { GOTOU = 0 };

     if ( GOTOU == 0 && sens == 9 ) { GOTOU = 3 };

     if ( GOTOU == 0 && joueurA == 616 && joueurB == 615 ) { GOTOU = 28 };
     if ( GOTOU == 0 && joueurB == 616 && joueurA == 615 ) { GOTOU = 28 };

 

     if ( GOTOU == 0 ) {

      //                               pour empecher que A entre dans B;

	if ( levier1 == 6 || joueurA == 615 || joueurA == 61400 ) {
        	distance = xB - xA;
         if ( distance < 4 ) { xA = xA - 1 };
	};

      //                                pour empecher que B entre dans A;

      if ( levier2 == 4 || joueurB == 615 || joueurB == 61400 ) {
	distance = xB - xA;
        if ( distance < 4 ) { xB = xB + 1 };
      };


      //                               garder la distance debout;
      if ( joueurB == 64 && joueurA == 64 ) {
        distance = xB - xA;
         if ( distance < 4 ) { xA = xA - 1, xB = xB + 1 };
      };

     };

    //                               sortie du cadre;
    //sortiecadre ;
     if ( GOTOU == 28 ) { GOTOU = 0 };

     if ( GOTOU == 0 && entree == 1 ) {
         if ( xA < 0 ) { xA = 0 };
         if ( xB < 0 ) { xB = 0 };
         if ( xA > 40 ) { xA = 40 };
         if ( xB > 40 ) { xB = 40 };
        GOTOU = 30;
     };

     if ( GOTOU == 0 ) {
         if ( sortieA == 1 || sortieB == 1 ) {
             if ( xA < 0 ) { xA = 0 };
             if ( xB > 40 ) { xB = 40 };
            GOTOU = 30;
         };
     };

     if ( GOTOU == 0 && entree == 0 ) {
         if ( xA < 5 ) { xA = 5 };
         if ( xA > 32 ) { xA = 32 };
         if ( xB < 5 ) { xB = 5 };
         if ( xB > 32 ) { xB = 32 };
     };


     if ( GOTOU == 0 ) { GOTOU = 30 };


     //                   ***************************************;
     //                   ***********   COLISION INVERSE ********;
     //                   ***************************************;

      if ( GOTOU == 0 && sens == 6 ) { GOTOU = 31 };

     //colisionR ;
      if ( GOTOU == 3 ) { GOTOU = 0 };

      if ( GOTOU == 0 && joueurA == 916 && joueurB == 915 ) { GOTOU = 27 };
      if ( GOTOU == 0 && joueurB == 916 && joueurA == 915 ) { GOTOU = 27 };

     //                               pour empecher que A entre dans B (inverse);

      if ( GOTOU == 0 ) {
          if ( levier1 == 4 || joueurA == 915 || joueurA == 9140 ) {
             distance = xA - xB;
              if ( distance < 4 ) { xA = xA + 1 };
          };
      }; 


     //                                pour empecher que B entre dans A (inverse);

      if ( GOTOU == 0 ) {
          if ( levier2 == 6 || joueurB == 915 || joueurB == 9140 ) {
             distance = xA - xB;
              if ( distance < 4 ) { xB = xB - 1 };
          };
      };

     //                               garder la distance debout;
      if ( GOTOU == 0 && joueurB == 94 && joueurA == 94 ) {
         distance = xA - xB;
          if ( distance < 4 ) { xA = xA + 1, xB = xB - 1 };
      }; 


     //sortiecadreR ;
      if ( GOTOU == 27 ) { GOTOU = 0 };

      if ( GOTOU == 0 ) {
          if ( sortieA == 1 || sortieB == 1 || entreesorcier == 1 ) {
              if ( xB < 0 ) { xB = 0 };
              if ( xA > 40 ) { xA = 40 };
             GOTOU = 30;
          };
      };

      if ( GOTOU == 0 ) {
          if ( xA < 5 ) { xA = 5 };
          if ( xA > 31 ) { xA = 32 };
          if ( xB < 5 ) { xB = 5 };
          if ( xB > 32 ) { xB = 32 };
      };


     //                       ****************************************;
     //                       ********* les tetes volantes ! *********;
     //                       ****************************************;
     //tetesvolantes ;
      if ( GOTOU == 30 ) { GOTOU = 0 };

       if ( GOTOU == 0 ) {
           if ( sortieA == 1 || sortieB == 1 ) { GOTOU = 31 };
       };

       if ( GOTOU == 0 ) {

           if ( xA > 19 && xB > 20 ) { GOTOU = 29 };

           if ( GOTOU == 0 ) {
               if ( joueurA == 65 || joueurA == 95 ) {


                   if ( GOTOU == 0 && temps > reftemps + 125 ) {
                      gnome = 1, reftemps = temps;
                      xGNOME = 3;
                      GOTOU = 12;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 56 ) { ySPRt = 164, xSPRt = xA + 16, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 52 ) { ySPRt = 157, xSPRt = xA + 15, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 48 ) { ySPRt = 159, xSPRt = xA + 14, numerotete = 1, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 45 ) { ySPRt = 157, xSPRt = xA + 13, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 44 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 157, xSPRt = xA + 13, numerotete = 6, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 40 ) { ySPRt = 159, xSPRt = xA + 12, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 36 ) { ySPRt = 159, xSPRt = xA + 11, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 32 ) { ySPRt = 159, xSPRt = xA + 10, numerotete = 3, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 29 ) { ySPRt = 159, xSPRt = xA + 9, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 28 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 159, xSPRt = xA + 9, numerotete = 2, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 24 ) { ySPRt = 139, xSPRt = xA + 8, numerotete = 1, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 20 ) { ySPRt = 125, xSPRt = xA + 7, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 16 ) { ySPRt = 125, xSPRt = xA + 6, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 12 ) { ySPRt = 118, xSPRt = xA + 5, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 8 ) { ySPRt = 111, xSPRt = xA + 4, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 4 ) { ySPRt = 111, xSPRt = xA + 3, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps >= reftemps ) { ySPRt = 111, xSPRt = xA + 2, numerotete = 1, GOTOU = 31 };

               };
           };


           if ( GOTOU == 0 ) {
               if ( joueurB == 65 || joueurB == 95 ) {

                   if ( GOTOU == 0 && temps > reftemps + 125 ) {
                      gnome = 1, reftemps = temps;
                      xGNOME = 3;
                      GOTOU = 12;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 56 ) { ySPRt = 164, xSPRt = xB + 16, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 52 ) { ySPRt = 157, xSPRt = xB + 15, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 48 ) { ySPRt = 159, xSPRt = xB + 14, numerotete = 1, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 45 ) { ySPRt = 157, xSPRt = xB + 13, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 44 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 157, xSPRt = xB + 13, numerotete = 6, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 40 ) { ySPRt = 159, xSPRt = xB + 12, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 36 ) { ySPRt = 159, xSPRt = xB + 11, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 32 ) { ySPRt = 159, xSPRt = xB + 10, numerotete = 3, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 29 ) { ySPRt = 159, xSPRt = xB + 9, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 28 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 159, xSPRt = xB + 9, numerotete = 2, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 24 ) { ySPRt = 139, xSPRt = xB + 8, numerotete = 1, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 20 ) { ySPRt = 125, xSPRt = xB + 7, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 16 ) { ySPRt = 125, xSPRt = xB + 6, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 12 ) { ySPRt = 118, xSPRt = xB + 5, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 8 ) { ySPRt = 111, xSPRt = xB + 4, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 4 ) { ySPRt = 111, xSPRt = xB + 3, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps >= reftemps ) { ySPRt = 111, xSPRt = xB + 2, numerotete = 1, GOTOU = 31 };
                  GOTOU = 31;
               };
           };

          //teteagauche ;
           if ( GOTOU == 29 ) { GOTOU = 0 };

           if ( GOTOU == 0 ) {
               if ( joueurA == 65 || joueurA == 95 ) {

                   if ( GOTOU == 0 && temps > reftemps + 125 ) {
                      gnome = 1, reftemps = temps;
                      xGNOME = 3;
                      GOTOU = 12;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 56 ) { ySPRt = 164, xSPRt = xA - 12, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 52 ) { ySPRt = 157, xSPRt = xA - 11, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 48 ) { ySPRt = 159, xSPRt = xA - 10, numerotete = 1, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 45 ) { ySPRt = 157, xSPRt = xA - 9, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 44 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 157, xSPRt = xA - 9, numerotete = 6, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 40 ) { ySPRt = 159, xSPRt = xA - 8, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 36 ) { ySPRt = 159, xSPRt = xA - 7, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 32 ) { ySPRt = 159, xSPRt = xA - 6, numerotete = 3, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 29 ) { ySPRt = 159, xSPRt = xA - 5, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 28 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 159, xSPRt = xA - 5, numerotete = 2, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 24 ) { ySPRt = 139, xSPRt = xA - 4, numerotete = 1, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 20 ) { ySPRt = 125, xSPRt = xA - 3, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 16 ) { ySPRt = 125, xSPRt = xA - 2, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 12 ) { ySPRt = 118, xSPRt = xA - 1, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 8 ) { ySPRt = 111, xSPRt = xA, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 4 ) { ySPRt = 111, xSPRt = xA + 1, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps >= reftemps ) { ySPRt = 111, xSPRt = xA + 2, numerotete = 1, GOTOU = 31 };

               };
           };

           if ( GOTOU == 0 ) {
               if ( joueurB == 65 || joueurB == 95 ) {

                   if ( GOTOU == 0 && temps > reftemps + 125 ) {
                      gnome = 1, reftemps = temps;
                      xGNOME = 3;
                      GOTOU = 12;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 56 ) { ySPRt = 164, xSPRt = xB - 14, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 52 ) { ySPRt = 157, xSPRt = xB - 13, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 48 ) { ySPRt = 159, xSPRt = xB - 12, numerotete = 1, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 45 ) { ySPRt = 157, xSPRt = xB - 11, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 44 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 157, xSPRt = xB - 11, numerotete = 6, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 40 ) { ySPRt = 159, xSPRt = xB - 10, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 36 ) { ySPRt = 159, xSPRt = xB - 9, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 32 ) { ySPRt = 159, xSPRt = xB - 8, numerotete = 3, GOTOU = 31 };

                   if ( GOTOU == 0 && temps > reftemps + 29 ) { ySPRt = 159, xSPRt = xB - 7, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 28 ) {
                       if ( xSPRt < 273 ) { tete.play() };
                      ySPRt = 159, xSPRt = xB - 7, numerotete = 2, GOTOU = 31;
                   };

                   if ( GOTOU == 0 && temps > reftemps + 24 ) { ySPRt = 139, xSPRt = xB - 6, numerotete = 1, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 20 ) { ySPRt = 125, xSPRt = xB - 5, numerotete = 6, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 16 ) { ySPRt = 125, xSPRt = xB - 4, numerotete = 5, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 12 ) { ySPRt = 118, xSPRt = xB - 3, numerotete = 4, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 5 ) { ySPRt = 111, xSPRt = xB - 2, numerotete = 3, GOTOU = 31 };
                   if ( GOTOU == 0 && temps > reftemps + 4 ) { ySPRt = 111, xSPRt = xB - 1, numerotete = 2, GOTOU = 31 };
                   if ( GOTOU == 0 && temps >= reftemps ) { ySPRt = 111, xSPRt = xB, numerotete = 1, GOTOU = 31 };

               };
           };


       };


      //                   *********************************;
      //                   *******  PASSAGE DU GNOME *******;
      //                   *********************************;

      //gnome ;
       if ( GOTOU == 12 ) { GOTOU = 0 };
       if ( gnome == 1 ) {

          numerognome = 4;
           if ( GOTOU == 0 && temps > reftemps + 6 ) { numerognome = 1 };
           if ( GOTOU == 0 && temps > reftemps + 12 ) { numerognome = 2 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { numerognome = 3 };

           if ( GOTOU == 0 && temps > reftemps + 24 ) { reftemps = temps, GOTOU = 31 };
           if ( GOTOU == 0 && temps > reftemps + 19 ) { GOTOU = 31 };
           if ( GOTOU == 0 && temps > reftemps + 18 ) { xGNOME = xGNOME + 1, GOTOU = 31 };
           if ( GOTOU == 0 && temps > reftemps + 7 ) { GOTOU = 31 };
           if ( GOTOU == 0 && temps > reftemps + 6 ) { xGNOME = xGNOME + 1, GOTOU = 31 };



       };



     //                   **********************************************;
     //                   ************      AFFICHAGE        ***********;
     //                   **********************************************;

     //affichage ;
      if ( GOTOU == 31 ) { GOTOU = 0 };


      if ( GOTOU == 0 ) { // affichage du decor

         //affichage du fond;
         if ( decorS == 1 ) { canvasContext.drawImage(decor1, 0, 0) };
         if ( decorS == 2 ) { canvasContext.drawImage(decor2, 0, 0) };
         if ( decorS == 3 ) { canvasContext.drawImage(decor3, 0, 0) };
         if ( decorS == 4 ) { canvasContext.drawImage(decor4, 0, 0) };

         // messages du bas d ecran;
         canvasContext.fillStyle = "rgb(0,0,0)";

          if ( partie == 1 && demo == 0 ) { canvasContext.fillText("one player", 268, 375) };
          if ( partie == 2 ) { canvasContext.fillText("two player", 268, 375) };
          if ( demo == 1 ) { canvasContext.fillText("demonstration", 245, 375) };

      


      if ( transition == 1 ) {
          if ( temps > reftemps + 60 ) { transition = 0, transitionfinie = 1 };
      };


         if ( sorcier == 1 ) {

              //cache des points de vie;
		  canvasContext.fillStyle = "rgb(0,0,0)";

                  canvasContext.fillRect (0, 22, 86, 18);
              	  canvasContext.fillRect (0, 0, 86, 18);

		canvasContext.fillRect (554, 22, 86, 18);
		canvasContext.fillRect (554, 0, 86, 18);


              // cache Drax;
                  canvasContext.fillRect (228, 190, 32, 24);
                  canvasContext.fillRect (218, 214, 52, 16);

              //cache marianna;
              if ( marianna == 1 ) {
                  canvasContext.fillRect (372, 190, 30, 36);
                  canvasContext.fillRect (370, 226, 34, 4);
              };
           };


	};


    //                               affichage du temps;


      if ( GOTOU == 0 ) {

		canvasContext.fillStyle = "rgb(0,0,0)";

	          if ( joueurA == 65 || joueurA == 95 || joueurB == 65 || joueurB == 95 ) { GOTOU = 13 };
        	  if ( joueurA == 610 || joueurA == 910 || joueurB == 610 || joueurB == 910 ) { GOTOU = 13 };
	};

	if ( GOTOU == 0 ) {

	      	if ( temps > chrono + 60 ) { chronometre = chronometre - 1, chrono = temps };

	          if ( chronometre < 1 || chronometre > 90 ) {
        		chronometre = 0;
	              	if ( partie == 2 ) { sortieA = 1, sortieB = 1, tempsfini = 1, Aoccupe = 0, Boccupe = 0 };
        	  }; 
	};
       

     //affichetemps ;
      if ( GOTOU == 13 ) { GOTOU = 0 };

	
	if ( GOTOU == 0 ) { 

	canvasContext.fillStyle = "rgb(0,0,0)"; 
    
		if ( partie == 1 ) { canvasContext.fillText(IA, 308, 108) };

        	if ( partie == 2 ) {
          		if ( chronometre >= 10 ) { canvasContext.fillText(chronometre, 304, 108) };
          		if ( chronometre < 10 ) {
				canvasContext.fillText("0", 304, 108), canvasContext.fillText(chronometre, 317, 108);
			};
        	};
	};


     //                                  affichage du score;

	if ( GOTOU == 0 ) {

		canvasContext.fillStyle = "rgb(0,0,0)";

      		if ( scoreA > 99999 ) { scoreA = 0 };
      		if ( scoreB > 99999 ) { scoreB = 0 };

      		if ( scoreA == 0 ) { canvasContext.fillText("00000", 196, 108) };
      		if ( scoreB == 0 ) { canvasContext.fillText("00000", 380, 108) };



          if ( scoreA > 99 && scoreA < 999 ) {
                  canvasContext.fillText("00", 196, 108);
                  canvasContext.fillText(scoreA, 222, 108);
          };
          if ( scoreA > 999 && scoreA < 9999 ) {
                 canvasContext.fillText("0", 196, 108);
                 canvasContext.fillText(scoreA, 209, 108);
          };
          if ( scoreA > 9999 && scoreA < 99999 ) {
                canvasContext.fillText(scoreA, 196, 108);
          };


          if ( scoreB > 99 && scoreB < 999 ) {
                  canvasContext.fillText("00", 380, 108);
                  canvasContext.fillText(scoreB, 406, 108);
          };
          if ( scoreB > 999 && scoreB < 9999 ) {
                  canvasContext.fillText("0", 380, 108);
                  canvasContext.fillText(scoreB, 393, 108);
          };
          if ( scoreB > 9999 && scoreB < 99999 ) {
                canvasContext.fillText(scoreB, 380, 108)
          };




          //                                  effacement des points de vie;

		canvasContext.fillStyle = "rgb(0,0,0)";	

       if ( vieA == 11 ) { canvasContext.fillRect (76, 22, 10, 18) };
       if ( vieA == 10 ) { canvasContext.fillRect (66, 22, 20, 18) };
       if ( vieA == 9 ) { canvasContext.fillRect (44, 22, 42, 18) };
       if ( vieA == 8 ) { canvasContext.fillRect (34, 22, 52, 18) };
       if ( vieA == 7 ) { canvasContext.fillRect (12, 22, 74, 18) };
       if ( vieA <= 6 ) { canvasContext.fillRect (0, 22, 86, 18) };
       if ( vieA == 5 ) { canvasContext.fillRect (76, 0, 10, 18) };
       if ( vieA == 4 ) { canvasContext.fillRect (66, 0, 20, 18) };
       if ( vieA == 3 ) { canvasContext.fillRect (44, 0, 42, 18) };
       if ( vieA == 2 ) { canvasContext.fillRect (34, 0, 52, 18) };
       if ( vieA == 1 ) { canvasContext.fillRect (12, 0, 74, 18) };
       if ( vieA == 0 ) { canvasContext.fillRect (0, 0, 86, 18) };

       if ( vieB == 11 ) { canvasContext.fillRect (628, 22, 10, 18) };
       if ( vieB == 10 ) { canvasContext.fillRect (618, 22, 20, 18) };
       if ( vieB == 9 ) { canvasContext.fillRect (596, 22, 42, 18) };
       if ( vieB == 8 ) { canvasContext.fillRect (586, 22, 52, 18) };
       if ( vieB == 7 ) { canvasContext.fillRect (564, 22, 74, 18) };
       if ( vieB <= 6 ) { canvasContext.fillRect (554, 22, 86, 18) };
       if ( vieB == 5 ) { canvasContext.fillRect (628, 0, 10, 18) };
       if ( vieB == 4 ) { canvasContext.fillRect (618, 0, 20, 18) };
       if ( vieB == 3 ) { canvasContext.fillRect (596, 0, 42, 18) };
       if ( vieB == 2 ) { canvasContext.fillRect (586, 0, 52, 18) };
       if ( vieB == 1 ) { canvasContext.fillRect (564, 0, 74, 18) };
       if ( vieB == 0 ) { canvasContext.fillRect (554, 0, 86, 18) };




     };


     //                       ****************************************;
     //                       *********** affichage sprite A**********;
     //                       ****************************************;

      if ( GOTOU == 0 ) {
        if ( spriteA == 64 ) { imageA = deboutA, sensimageA = 6 };
        if ( spriteA == 61 ) { imageA = assis1A, sensimageA = 6 };
        if ( spriteA == 61002 ) { imageA = assis2A, sensimageA = 6 };
        if ( spriteA == 62001 ) { imageA = attente1A, sensimageA = 6 };
        if ( spriteA == 62002 ) { imageA = attente2A, sensimageA = 6 };
        if ( spriteA == 62003 ) { imageA = attente3A, sensimageA = 6 };
        if ( spriteA == 631 ) { imageA = protegeHautA, sensimageA = 6 }; // COU1;
        if ( spriteA == 632 ) { imageA = cou2A, sensimageA = 6 };
        if ( spriteA == 633 ) { imageA = cou3A, sensimageA = 6 };
        if ( spriteA == 661 ) { imageA = devant1A, sensimageA = 6 };
        if ( spriteA == 662 ) { imageA = devant2A, sensimageA = 6 };
        if ( spriteA == 663 ) { imageA = devant3A, sensimageA = 6 };
        if ( spriteA == 681 ) { imageA = genou1A, sensimageA = 6 };
        if ( spriteA == 682 ) { imageA = assis2A, sensimageA = 6 }; // GENOU2;
        if ( spriteA == 683 ) { imageA = genou3A, sensimageA = 6 };
        if ( spriteA == 691 ) { imageA = marche1A, sensimageA = 6 };
        if ( spriteA == 692 ) { imageA = marche2A, sensimageA = 6 };
        if ( spriteA == 693 ) { imageA = marche3A, sensimageA = 6 };
        if ( spriteA == 6161 ) { imageA = saut1A, sensimageA = 6 };
        if ( spriteA == 6162 ) { imageA = saut2A, sensimageA = 6 };
        if ( spriteA == 6211 ) { imageA = vainqueur1A, sensimageA = 6 };
        if ( spriteA == 6212 ) { imageA = vainqueur2A, sensimageA = 6 };
        if ( spriteA == 6213 ) { imageA = vainqueur3A, sensimageA = 6 };
        if ( spriteA == 6141 ) { imageA = retourne1A, sensimageA = 6 };
        if ( spriteA == 6142 ) { imageA = retourne2A, sensimageA = 6 };
        if ( spriteA == 6143 ) { imageA = retourne3A, sensimageA = 6 };
        if ( spriteA == 671 ) { imageA = front1A, sensimageA = 6 };
        if ( spriteA == 672 ) { imageA = front2A, sensimageA = 6 };
        if ( spriteA == 673 ) { imageA = front3A, sensimageA = 6 };
        if ( spriteA == 6181 ) { imageA = toile1A, sensimageA = 6 };
        if ( spriteA == 6182 ) { imageA = toile2A, sensimageA = 6 };
        if ( spriteA == 6183 ) { imageA = toile3A, sensimageA = 6 };
        if ( spriteA == 6184 ) { imageA = toile4A, sensimageA = 6 };
        if ( spriteA == 6191 ) { imageA = tombe1A, sensimageA = 6 };
        if ( spriteA == 6192 ) { imageA = tombe2A, sensimageA = 6 };
        if ( spriteA == 6193 ) { imageA = tombe3A, sensimageA = 6 };
        if ( spriteA == 612 ) { imageA = protegeDevantA, sensimageA = 6 };
        if ( spriteA == 613 ) { imageA = protegeHautA, sensimageA = 6 };
        if ( spriteA == 6171 ) { imageA = couptete1A, sensimageA = 6 };
        if ( spriteA == 6172 ) { imageA = couptete2A, sensimageA = 6 };
        if ( spriteA == 6201 ) { imageA = touche2A, sensimageA = 6 };
        if ( spriteA == 6202 ) { imageA = touche1A, sensimageA = 6 };
        if ( spriteA == 6203 ) { imageA = touche2A, sensimageA = 6 };

        if ( spriteA == 6111 ) { imageA = pied1A, sensimageA = 6 };
        if ( spriteA == 6112 ) { imageA = pied2A, sensimageA = 6 };
        if ( spriteA == 651 ) { imageA = decap1A, sensimageA = 6 };
        if ( spriteA == 652 ) { imageA = decap2A, sensimageA = 6 };
        if ( spriteA == 653 ) { imageA = decap3A, sensimageA = 6 };
        if ( spriteA == 654 ) { imageA = decap4A, sensimageA = 6 };
        if ( spriteA == 6101 ) { imageA = assis1A, sensimageA = 6 }; //MORT1;
        if ( spriteA == 6102 ) { imageA = mort2A, sensimageA = 6 };
        if ( spriteA == 6103 ) { imageA = mort3A, sensimageA = 6 };
        if ( spriteA == 6104 ) { imageA = mort4A, sensimageA = 6 };


        if ( spriteA == 6151 ) { imageA = roulade1A, sensimageA = 6 };
        if ( spriteA == 6152 ) { imageA = roulade2A, sensimageA = 6 };
        if ( spriteA == 6153 ) { imageA = roulade3A, sensimageA = 6 };
        if ( spriteA == 6154 ) { imageA = roulade4A, sensimageA = 6 };
        if ( spriteA == 6155 ) { imageA = roulade5A, sensimageA = 6 };
        if ( spriteA == 6156 ) { imageA = roulade6A, sensimageA = 6 };


        if ( spriteA == 94 ) { imageA = deboutA, sensimageA = 9 };
        if ( spriteA == 91 ) { imageA = assis1A, sensimageA = 9 };
        if ( spriteA == 9102 ) { imageA = assis2A, sensimageA = 9 };
        if ( spriteA == 921 ) { imageA = attente1A, sensimageA = 9 };
        if ( spriteA == 922 ) { imageA = attente2A, sensimageA = 9 };
        if ( spriteA == 923 ) { imageA = attente3A, sensimageA = 9 };
        if ( spriteA == 931 ) { imageA = protegeHautA, sensimageA = 9 }; // COU1;
        if ( spriteA == 932 ) { imageA = cou2A, sensimageA = 9 };
        if ( spriteA == 933 ) { imageA = cou3A, sensimageA = 9 };
        if ( spriteA == 961 ) { imageA = devant1A, sensimageA = 9 };
        if ( spriteA == 962 ) { imageA = devant2A, sensimageA = 9 };
        if ( spriteA == 963 ) { imageA = devant3A, sensimageA = 9 };
        if ( spriteA == 981 ) { imageA = genou1A, sensimageA = 9 };
        if ( spriteA == 982 ) { imageA = assis2A, sensimageA = 9 }; // GENOU2;
        if ( spriteA == 983 ) { imageA = genou3A, sensimageA = 9 };
        if ( spriteA == 991 ) { imageA = marche1A, sensimageA = 9 };
        if ( spriteA == 992 ) { imageA = marche2A, sensimageA = 9 };
        if ( spriteA == 993 ) { imageA = marche3A, sensimageA = 9 };
        if ( spriteA == 9161 ) { imageA = saut1A, sensimageA = 9 };
        if ( spriteA == 9162 ) { imageA = saut2A, sensimageA = 9 };
        if ( spriteA == 9211 ) { imageA = vainqueur1A, sensimageA = 9 };
        if ( spriteA == 9212 ) { imageA = vainqueur2A, sensimageA = 9 };
        if ( spriteA == 9213 ) { imageA = vainqueur3A, sensimageA = 9 };
        if ( spriteA == 9141 ) { imageA = retourne1A, sensimageA = 9 };
        if ( spriteA == 9142 ) { imageA = retourne2A, sensimageA = 9 };
        if ( spriteA == 9143 ) { imageA = retourne3A, sensimageA = 9 };
        if ( spriteA == 971 ) { imageA = front1A, sensimageA = 9 };
        if ( spriteA == 972 ) { imageA = front2A, sensimageA = 9 };
        if ( spriteA == 973 ) { imageA = front3A, sensimageA = 9 };
        if ( spriteA == 9181 ) { imageA = toile1A, sensimageA = 9 };
        if ( spriteA == 9182 ) { imageA = toile2A, sensimageA = 9 };
        if ( spriteA == 9183 ) { imageA = toile3A, sensimageA = 9 };
        if ( spriteA == 9184 ) { imageA = toile4A, sensimageA = 9 };
        if ( spriteA == 9191 ) { imageA = tombe1A, sensimageA = 9 };
        if ( spriteA == 9192 ) { imageA = tombe2A, sensimageA = 9 };
        if ( spriteA == 9193 ) { imageA = tombe3A, sensimageA = 9 };
        if ( spriteA == 912 ) { imageA = protegeDevantA, sensimageA = 9 };
        if ( spriteA == 913 ) { imageA = protegeHautA, sensimageA = 9 };
        if ( spriteA == 9171 ) { imageA = couptete1A, sensimageA = 9 };
        if ( spriteA == 9172 ) { imageA = couptete2A, sensimageA = 9 };
        if ( spriteA == 9201 ) { imageA = touche2A, sensimageA = 9 };
        if ( spriteA == 9202 ) { imageA = touche1A, sensimageA = 9 };
        if ( spriteA == 9203 ) { imageA = touche2A, sensimageA = 9 };
        if ( spriteA == 9111 ) { imageA = pied1A, sensimageA = 9 };
        if ( spriteA == 9112 ) { imageA = pied2A, sensimageA = 9 };
        if ( spriteA == 951 ) { imageA = decap1A, sensimageA = 9 };
        if ( spriteA == 952 ) { imageA = decap2A, sensimageA = 9 };
        if ( spriteA == 953 ) { imageA = decap3A, sensimageA = 9 };
        if ( spriteA == 954 ) { imageA = decap4A, sensimageA = 9 };
        if ( spriteA == 9101 ) { imageA = assis1A, sensimageA = 9 }; // MORT1;
        if ( spriteA == 9662 ) { imageA = mort2A, sensimageA = 9 };
        if ( spriteA == 9103 ) { imageA = mort3A, sensimageA = 9 };
        if ( spriteA == 9104 ) { imageA = mort4A, sensimageA = 9 };


        if ( spriteA == 9151 ) { imageA = roulade1A, sensimageA = 9 };
        if ( spriteA == 9152 ) { imageA = roulade2A, sensimageA = 9 };
        if ( spriteA == 9153 ) { imageA = roulade3A, sensimageA = 9 };
        if ( spriteA == 9154 ) { imageA = roulade4A, sensimageA = 9 };
        if ( spriteA == 9155 ) { imageA = roulade5A, sensimageA = 9 };
        if ( spriteA == 9156 ) { imageA = roulade6A, sensimageA = 9 };


         a2 = (xA - 1) * 16, b2 = ((yFA - 2) * 16);

          if ( xA < 39 ) {

              if ( sensimageA == 6 ) { // affichage normal;
			canvasContext.drawImage(imageA, a2, b2, 144, 160);			
              };


              if ( sensimageA == 9 ) { // affichage inverse;
			canvasContext.save(); // sauvegarde l'etat du canvas
			canvasContext.translate(a2,b2); // recentre le canvas 
			canvasContext.scale(-1 ,1); // retourne le canvas	
			canvasContext.drawImage(imageA, -80, 0, 144, 160); // affiche l'image au milieu du canvas
			canvasContext.restore(); // restaure l'etat du canvas
              };

          }; 


      }; 

     //                       ****************************************;
     //                       *********** affichage sprite B**********;
     //                       ****************************************;


      if ( GOTOU == 0 ) {

          if ( spriteB == 64 ) { imageB = deboutB, sensimageB = 6 };
        if ( spriteB == 61 ) { imageB = assis1B, sensimageB = 6 };
        if ( spriteB == 61002 ) { imageB = assis2B, sensimageB = 6 };
        if ( spriteB == 62001 ) { imageB = attente1B, sensimageB = 6 };
        if ( spriteB == 62002 ) { imageB = attente2B, sensimageB = 6 };
        if ( spriteB == 62003 ) { imageB = attente3B, sensimageB = 6 };
        if ( spriteB == 631 ) { imageB = protegeHautB, sensimageB = 6 };
        if ( spriteB == 632 ) { imageB = cou2B, sensimageB = 6 };
        if ( spriteB == 633 ) { imageB = cou3B, sensimageB = 6 };
        if ( spriteB == 661 ) { imageB = devant1B, sensimageB = 6 };
        if ( spriteB == 662 ) { imageB = devant2B, sensimageB = 6 };
        if ( spriteB == 663 ) { imageB = devant3B, sensimageB = 6 };
        if ( spriteB == 681 ) { imageB = genou1B, sensimageB = 6 };
        if ( spriteB == 682 ) { imageB = assis2B, sensimageB = 6 };
        if ( spriteB == 683 ) { imageB = genou3B, sensimageB = 6 };
        if ( spriteB == 691 ) { imageB = marche1B, sensimageB = 6 };
        if ( spriteB == 692 ) { imageB = marche2B, sensimageB = 6 };
        if ( spriteB == 693 ) { imageB = marche3B, sensimageB = 6 };
        if ( spriteB == 6161 ) { imageB = saut1B, sensimageB = 6 };
        if ( spriteB == 6162 ) { imageB = saut2B, sensimageB = 6 };
        if ( spriteB == 6211 ) { imageB = vainqueur1B, sensimageB = 6 };
        if ( spriteB == 6212 ) { imageB = vainqueur2B, sensimageB = 6 };
        if ( spriteB == 6213 ) { imageB = vainqueur3B, sensimageB = 6 };
        if ( spriteB == 6141 ) { imageB = retourne1B, sensimageB = 6 };
        if ( spriteB == 6142 ) { imageB = retourne2B, sensimageB = 6 };
        if ( spriteB == 6143 ) { imageB = retourne3B, sensimageB = 6 };
        if ( spriteB == 671 ) { imageB = front1B, sensimageB = 6 };
        if ( spriteB == 672 ) { imageB = front2B, sensimageB = 6 };
        if ( spriteB == 673 ) { imageB = front3B, sensimageB = 6 };
        if ( spriteB == 6181 ) { imageB = toile1B, sensimageB = 6 };
        if ( spriteB == 6182 ) { imageB = toile2B, sensimageB = 6 };
        if ( spriteB == 6183 ) { imageB = toile3B, sensimageB = 6 };
        if ( spriteB == 6184 ) { imageB = toile4B, sensimageB = 6 };
        if ( spriteB == 6191 ) { imageB = tombe1B, sensimageB = 6 };
        if ( spriteB == 6192 ) { imageB = tombe2B, sensimageB = 6 };
        if ( spriteB == 6193 ) { imageB = tombe3B, sensimageB = 6 };
        if ( spriteB == 612 ) { imageB = protegeDevantB, sensimageB = 6 };
        if ( spriteB == 613 ) { imageB = protegeHautB, sensimageB = 6 };
        if ( spriteB == 6171 ) { imageB = couptete1B, sensimageB = 6 };
        if ( spriteB == 6172 ) { imageB = couptete2B, sensimageB = 6 };
        if ( spriteB == 6201 ) { imageB = touche2B, sensimageB = 6 };
        if ( spriteB == 6202 ) { imageB = touche1B, sensimageB = 6 };
        if ( spriteB == 6203 ) { imageB = touche2B, sensimageB = 6 };
        if ( spriteB == 6111 ) { imageB = pied1B, sensimageB = 6 };
        if ( spriteB == 6112 ) { imageB = pied2B, sensimageB = 6 };
        if ( spriteB == 651 ) { imageB = decap1B, sensimageB = 6 };
        if ( spriteB == 652 ) { imageB = decap2B, sensimageB = 6 };
        if ( spriteB == 653 ) { imageB = decap3B, sensimageB = 6 };
        if ( spriteB == 654 ) { imageB = decap4B, sensimageB = 6 };
        if ( spriteB == 6101 ) { imageB = assis1B, sensimageB = 6 };
        if ( spriteB == 6102 ) { imageB = mort2B, sensimageB = 6 };
        if ( spriteB == 6103 ) { imageB = mort3B, sensimageB = 6 };
        if ( spriteB == 6104 ) { imageB = mort4B, sensimageB = 6 };


        if ( spriteB == 6151 ) { imageB = roulade1B, sensimageB = 6 };
        if ( spriteB == 6152 ) { imageB = roulade2B, sensimageB = 6 };
        if ( spriteB == 6153 ) { imageB = roulade3B, sensimageB = 6 };
        if ( spriteB == 6154 ) { imageB = roulade4B, sensimageB = 6 };
        if ( spriteB == 6155 ) { imageB = roulade5B, sensimageB = 6 };
        if ( spriteB == 6156 ) { imageB = roulade6B, sensimageB = 6 };


        if ( spriteB == 94 ) { imageB = deboutB, sensimageB = 9 };
        if ( spriteB == 91 ) { imageB = assis1B, sensimageB = 9 };
        if ( spriteB == 9102 ) { imageB = assis2B, sensimageB = 9 };
        if ( spriteB == 921 ) { imageB = attente1B, sensimageB = 9 };
        if ( spriteB == 922 ) { imageB = attente2B, sensimageB = 9 };
        if ( spriteB == 923 ) { imageB = attente3B, sensimageB = 9 };
        if ( spriteB == 931 ) { imageB = protegeHautB, sensimageB = 9 };
        if ( spriteB == 932 ) { imageB = cou2B, sensimageB = 9 };
        if ( spriteB == 933 ) { imageB = cou3B, sensimageB = 9 };
        if ( spriteB == 961 ) { imageB = devant1B, sensimageB = 9 };
        if ( spriteB == 962 ) { imageB = devant2B, sensimageB = 9 };
        if ( spriteB == 963 ) { imageB = devant3B, sensimageB = 9 };
        if ( spriteB == 981 ) { imageB = genou1B, sensimageB = 9 };
        if ( spriteB == 982 ) { imageB = assis2B, sensimageB = 9 };
        if ( spriteB == 983 ) { imageB = genou3B, sensimageB = 9 };
        if ( spriteB == 991 ) { imageB = marche1B, sensimageB = 9 };
        if ( spriteB == 992 ) { imageB = marche2B, sensimageB = 9 };
        if ( spriteB == 993 ) { imageB = marche3B, sensimageB = 9 };
        if ( spriteB == 9161 ) { imageB = saut1B, sensimageB = 9 };
        if ( spriteB == 9162 ) { imageB = saut2B, sensimageB = 9 };
        if ( spriteB == 9211 ) { imageB = vainqueur1B, sensimageB = 9 };
        if ( spriteB == 9212 ) { imageB = vainqueur2B, sensimageB = 9 };
        if ( spriteB == 9213 ) { imageB = vainqueur3B, sensimageB = 9 };
        if ( spriteB == 9141 ) { imageB = retourne1B, sensimageB = 9 };
        if ( spriteB == 9142 ) { imageB = retourne2B, sensimageB = 9 };
        if ( spriteB == 9143 ) { imageB = retourne3B, sensimageB = 9 };
        if ( spriteB == 971 ) { imageB = front1B, sensimageB = 9 };
        if ( spriteB == 972 ) { imageB = front2B, sensimageB = 9 };
        if ( spriteB == 973 ) { imageB = front3B, sensimageB = 9 };
        if ( spriteB == 9181 ) { imageB = toile1B, sensimageB = 9 };
        if ( spriteB == 9182 ) { imageB = toile2B, sensimageB = 9 };
        if ( spriteB == 9183 ) { imageB = toile3B, sensimageB = 9 };
        if ( spriteB == 9184 ) { imageB = toile4B, sensimageB = 9 };
        if ( spriteB == 9191 ) { imageB = tombe1B, sensimageB = 9 };
        if ( spriteB == 9192 ) { imageB = tombe2B, sensimageB = 9 };
        if ( spriteB == 9193 ) { imageB = tombe3B, sensimageB = 9 };
        if ( spriteB == 912 ) { imageB = protegeDevantB, sensimageB = 9 };
        if ( spriteB == 913 ) { imageB = protegeHautB, sensimageB = 9 };
        if ( spriteB == 9171 ) { imageB = couptete1B, sensimageB = 9 };
        if ( spriteB == 9172 ) { imageB = couptete2B, sensimageB = 9 };
        if ( spriteB == 9201 ) { imageB = touche2B, sensimageB = 9 };
        if ( spriteB == 9202 ) { imageB = touche1B, sensimageB = 9 };
        if ( spriteB == 9203 ) { imageB = touche2B, sensimageB = 9 };

        if ( spriteB == 9111 ) { imageB = pied1B, sensimageB = 9 };
        if ( spriteB == 9112 ) { imageB = pied2B, sensimageB = 9 };
        if ( spriteB == 951 ) { imageB = decap1B, sensimageB = 9 };
        if ( spriteB == 952 ) { imageB = decap2B, sensimageB = 9 };
        if ( spriteB == 953 ) { imageB = decap3B, sensimageB = 9 };
        if ( spriteB == 954 ) { imageB = decap4B, sensimageB = 9 };
        if ( spriteB == 9101 ) { imageB = assis1B, sensimageB = 9 };
        if ( spriteB == 9662 ) { imageB = mort2B, sensimageB = 9 };
        if ( spriteB == 9103 ) { imageB = mort3B, sensimageB = 9 };
        if ( spriteB == 9104 ) { imageB = mort4B, sensimageB = 9 };


        if ( spriteB == 9151 ) { imageB = roulade1B, sensimageB = 9 };
        if ( spriteB == 9152 ) { imageB = roulade2B, sensimageB = 9 };
        if ( spriteB == 9153 ) { imageB = roulade3B, sensimageB = 9 };
        if ( spriteB == 9154 ) { imageB = roulade4B, sensimageB = 9 };
        if ( spriteB == 9155 ) { imageB = roulade5B, sensimageB = 9 };
        if ( spriteB == 9156 ) { imageB = roulade6B, sensimageB = 9 };

        if ( spriteB == 6661 ) { imageB = drax1B, sensimageB = 9 };
        if ( spriteB == 6662 ) { imageB = drax2B, sensimageB = 9 };

        if ( spriteB == 6969 ) { imageB = mariannaB, sensimageB = 9 };




          if ( xB < 39 ) {

              if ( sensimageB == 6 ) { // affichage normal
			  
			         a4 = (xB - 5) * 16, b4 = ((yFB - 2) * 16);
			  
					canvasContext.drawImage(imageB, a4, b4, 144, 160);
              };


              if ( sensimageB == 9 ) { // affichage inverse	


						a4 = (xB + 3) * 16, b4 = ((yFB - 2) * 16);
			  
			canvasContext.save(); 
			canvasContext.translate(a4,b4); // retirer 64  (4*16)-1 a a4;
			canvasContext.scale(-1 ,1); 	
			canvasContext.drawImage(imageB, -80, 0, 144, 160) 
			canvasContext.restore(); 
              }; 
			  
			  
          }; 


      };

      //                           ***********************************************;
      //                           re-affichage du spriteA en cas de chevauchement;



       if ( GOTOU == 0 ) {
           if ( joueurA == 610 || joueurA == 910 || joueurA == 65 || joueurA == 95 || joueurA == 68 || joueurA == 98 ) {


              a2 = (xA - 1) * 16, b2 = ((yFA - 2) * 16);

               if ( xA < 39 ) {
                   if ( sensimageA == 6 ) { // affichage normal;
			canvasContext.drawImage(imageA, a2,b2,144,160);
                   };

                   if ( sensimageA == 9 ) { // affichage inverse;
			canvasContext.save(); 
			canvasContext.translate(a2,b2);
			canvasContext.scale(-1 ,1);
			canvasContext.drawImage(imageA, -80,0,144,160);
			canvasContext.restore();
                   };
               };
           };
       };





     //                       ****************************************;
     //                       ********* affichage du sang ************;
     //                       ****************************************;

     //                    giclees de sang de decapitation;

      if ( GOTOU == 0 ) {
           if ( joueurA == 65 || joueurA == 95 ) {
               if ( sangdecapA == 1 ) {
                  Xgicle = (xA * 16) + 3, Ygicle = (yFA - 1) * 16;
                  canvasContext.drawImage(gicle1, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapA == 2 ) {
                  Xgicle = (xA * 16) + 3, Ygicle = (yFA - 1) * 16;
                  canvasContext.drawImage(gicle2, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapA == 3 ) {
                  Xgicle = (xA * 16) + 3, Ygicle = (yFA - 1) * 16;
                  canvasContext.drawImage(gicle3, Xgicle, Ygicle , 48, 48);
               };

               if ( sangdecapA == 4 ) {
                  Xgicle = (xA * 16) + 2, Ygicle = ((yMA - 2) * 16) - 2;
                  canvasContext.drawImage(gicle1, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapA == 5 ) {
                  Xgicle = (xA * 16) + 2, Ygicle = ((yMA - 2) * 16) - 2;
                  canvasContext.drawImage(gicle2, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapA == 6 ) {
                  Xgicle = (xA * 16) + 2, Ygicle = ((yMA - 2) * 16) - 2;
                  canvasContext.drawImage(gicle3, Xgicle, Ygicle , 48, 48);
               };
           };

           if ( joueurB == 65 || joueurB == 95 ) {
               if ( sangdecapB == 1 ) {
                  Xgicle = (xB * 16) + 3, Ygicle = (yFB - 1) * 16;
                  canvasContext.drawImage(gicle1, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapB == 2 ) {
                  Xgicle = (xB * 16) + 3, Ygicle = (yFB - 1) * 16;
                  canvasContext.drawImage(gicle2, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapB == 3 ) {
                  Xgicle = (xB * 16) + 3, Ygicle = (yFB - 1) * 16;
                  canvasContext.drawImage(gicle3, Xgicle, Ygicle , 48, 48);
               };

               if ( sangdecapB == 4 ) {
                  Xgicle = (xB * 16) + 1, Ygicle = ((yMB - 2) * 16) - 2;
                  canvasContext.drawImage(gicle1, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapB == 5 ) {
                  Xgicle = (xB * 16) + 1, Ygicle = ((yMB - 2) * 16) - 2;
                  canvasContext.drawImage(gicle2, Xgicle, Ygicle , 48, 48);
               };
               if ( sangdecapB == 6 ) {
                  Xgicle = (xB * 16) + 1, Ygicle = ((yMB - 2) * 16) - 2;
                  canvasContext.drawImage(gicle3, Xgicle, Ygicle , 48, 48);
               };
           };

      };

     //                           taches de sang au combat;

      if ( GOTOU == 0 && sangA == 0 ) { GOTOU = 15 };


       if ( GOTOU == 0 ) {
           if ( joueurA == 6201 || joueurA == 9201 ) {
              xS1 = xA + 2, yS1 = yAttB;
           };

           if ( joueurA == 610 || joueurA == 910 ) {
              xS1 = xA + 2, yS1 = yAttB;
               if ( GOTOU == 0 && yS1 < 17 ) { yS1 = 17 };
           };

           if ( joueurA == 6191 || joueurA == 9191 ) {
              xS1 = xA + 2, yS1 = yAttB;
           };

          xS1 = (xS1 - 1) * 16, yS1 = yS1 * 16;

	  canvasContext.drawImage(tachesang, xS1, yS1 , 32, 32);

       };


     //sang2 ;
      if ( GOTOU == 15 ) { GOTOU = 0 };

      if ( GOTOU == 0 && sangB == 0 ) { GOTOU = 11 };


       if ( GOTOU == 0 ) {
           if ( joueurB == 6201 || joueurB == 9201 ) {
              xS1 = xB, yS1 = yAttA;
           };

           if ( joueurB == 610 || joueurB == 910 ) {
              xS1 = xB, yS1 = yAttA;
               if ( yS1 < 17 ) { yS1 = 17 };
           };

           if ( joueurB == 6191 || joueurB == 9191 ) {
              xS1 = xB, yS1 = yAttA;
           };

          xS1 = xS1 * 16, yS1 = yS1 * 16;

          canvasContext.drawImage(tachesang, xS1, yS1 , 32, 32);

       };



     //                       ****************************************;
     //                       ********* affichage du serpent *********;
     //                       ****************************************;
     //serpent ;
      if ( GOTOU == 11 ) { GOTOU = 0 };

      if ( GOTOU == 0 && entree == 1 && marianna == 0 ) {

          //canvasContext.drawImage(serpent1A, 22, 46, 64, 64 );
           if ( xA == 3 ) { canvasContext.drawImage(serpent2A, 22, 40, 64, 64 ) };
           if ( xA == 4 ) { canvasContext.drawImage(serpent3A, 22, 40, 64, 64 ) };
           if ( xA == 5 ) { canvasContext.drawImage(serpent2A, 22, 40, 64, 64 ) };
           //if ( xA == 6 ) { canvasContext.drawImage(serpent1A, 22, 40, 64, 64 ) };

          //canvasContext.drawImage(serpent1B, 550, 46, 64, 64 );
           if ( xB == 34 ) { canvasContext.drawImage(serpent2B, 550, 40, 64, 64 ) };
           if ( xB == 33 ) { canvasContext.drawImage(serpent3B, 550, 40, 64, 64 ) };
           if ( xB == 32 ) { canvasContext.drawImage(serpent2B, 550, 40, 64, 64 ) };
           //if ( xB == 31 ) { canvasContext.drawImage(serpent1B, 550, 40, 64, 64 ) };


          GOTOU = 9;
      };

       if ( GOTOU == 0 && entreesorcier == 1 ) {

           if ( xA == 34 ) { canvasContext.drawImage(serpent2A, 22, 40, 64, 64 ) };
           if ( xA == 33 ) { canvasContext.drawImage(serpent3A, 22, 40, 64, 64 ) };
           if ( xA == 32 ) { canvasContext.drawImage(serpent4A, 22, 40, 64, 64 ) };
	   if ( xA == 31 ) { canvasContext.drawImage(serpent3A, 22, 40, 64, 64 ) };
	   if ( xA == 30 ) { canvasContext.drawImage(serpent2A, 22, 40, 64, 64 ) };

           if ( xA == 34 ) { canvasContext.drawImage(serpent2B, 550, 40, 64, 64 ) };
           if ( xA == 33 ) { canvasContext.drawImage(serpent3B, 550, 40, 64, 64 ) };
           if ( xA == 32 ) { canvasContext.drawImage(serpent4B, 550, 40, 64, 64 ) };
           if ( xA == 31 ) { canvasContext.drawImage(serpent3B, 550, 40, 64, 64 ) };
           if ( xA == 30 ) { canvasContext.drawImage(serpent2B, 550, 40, 64, 64 ) };

          GOTOU = 9; // bouledefeu;
       };


      //                                   selection tete serpentA;

       if ( GOTOU == 0 && serpentA == 0 ) { GOTOU = 10 };

       if ( GOTOU == 0 ) {
           if ( spriteA == 6201 || spriteA == 9201 ) {
              canvasContext.drawImage(serpent2A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6202 || spriteA == 9202 ) {
              canvasContext.drawImage(serpent3A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6203 || spriteA == 9203 ) {
              canvasContext.drawImage(serpent4A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6204 || spriteA == 9204 ) {
              canvasContext.drawImage(serpent2A, 22, 40, 64, 64 );
           };

           if ( spriteA == 6191 || spriteA == 9191 ) {
              canvasContext.drawImage(serpent2A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6192 || spriteA == 9192 ) {
              canvasContext.drawImage(serpent3A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6193 || spriteA == 9193 ) {
              canvasContext.drawImage(serpent4A, 22, 40, 64, 64 );
           };
           if ( spriteA == 6194 || spriteA == 9194 ) {
              canvasContext.drawImage(serpent2A, 22, 40, 64, 64 );
           };

       };


     //                                   selection tete serpentB;
     //serpent2 ;
      if ( GOTOU == 10 ) { GOTOU = 0 };

      if ( GOTOU == 0 && serpentB == 0 ) { GOTOU = 17 };

      if ( GOTOU == 0 ) {
           if ( spriteB == 6201 || spriteB == 9201 ) {
              canvasContext.drawImage(serpent2B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6202 || spriteB == 9202 ) {
              canvasContext.drawImage(serpent3B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6203 || spriteB == 9203 ) {
              canvasContext.drawImage(serpent4B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6204 || spriteB == 9204 ) {
              canvasContext.drawImage(serpent2B, 550, 40, 64, 64 );
           };

           if ( spriteB == 6191 || spriteB == 9191 ) {
              canvasContext.drawImage(serpent2B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6192 || spriteB == 9192 ) {
              canvasContext.drawImage(serpent3B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6193 || spriteB == 9193 ) {
              canvasContext.drawImage(serpent4B, 550, 40, 64, 64 );
           };
           if ( spriteB == 6194 || spriteB == 9194 ) {
              canvasContext.drawImage(serpent2B, 550, 40, 64, 64 );
           };

      };

      //                       ****************************************;
      //                       ********* affichage des tetes **********;
      //                       ****************************************;
      //tete2 ;
       if ( GOTOU == 17 ) { GOTOU = 0 };


       if ( GOTOU == 0 && gnome == 1 ) {

           if ( GOTOU == 0  ) {
			   if ( joueurA == 610 || joueurB == 610 || joueurA == 910 || joueurB == 910 ) { GOTOU = 14 };
		   };

           if ( GOTOU == 0 && football == 1 ) { GOTOU = 18 };

           if ( GOTOU == 0 && xGNOME < 35 && (xGNOME * 8) > xSPRt - 16 ) { football = 1, reftempsB = temps };

           if ( GOTOU == 0 ) { GOTOU = 19 };

          //gnometapetete ;
           if ( GOTOU == 18 ) { GOTOU = 0 };

           if ( GOTOU == 0 && football == 1 ) {

               if ( GOTOU == 0 && temps > reftempsB + 81 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 80 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 5, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 76 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 75 ) { ySPRt = 151, xSPRt = xSPRt + 16, numerotete = 6, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 71 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 70 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 1, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 66 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 65 ) { ySPRt = 157, xSPRt = xSPRt + 16, numerotete = 2, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 61 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 60 ) {
                   if ( xGNOME < 33 && xSPRt < 273 ) { tete.play() };
                  ySPRt = 159, xSPRt = xSPRt + 16, numerotete = 3, GOTOU = 19;
               };
               if ( GOTOU == 0 && temps > reftempsB + 56 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 55 ) { ySPRt = 157, xSPRt = xSPRt + 16, numerotete = 4, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 51 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 50 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 5, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 46 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 45 ) { ySPRt = 151, xSPRt = xSPRt + 16, numerotete = 6, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 41 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 40 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 1, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 36 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 35 ) { ySPRt = 157, xSPRt = xSPRt + 16, numerotete = 2, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 31 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 30 ) {
                   if ( xGNOME < 33 && xSPRt < 273 ) { tete.play() };
                  ySPRt = 159, xSPRt = xSPRt + 16, numerotete = 3, GOTOU = 19;
               };
               if ( GOTOU == 0 && temps > reftempsB + 26 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 25 ) { ySPRt = 157, xSPRt = xSPRt + 16, numerotete = 4, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 21 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 20 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 5, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 16 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 15 ) { ySPRt = 151, xSPRt = xSPRt + 16, numerotete = 6, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 11 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 10 ) { ySPRt = 153, xSPRt = xSPRt + 16, numerotete = 1, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 6 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 5 ) { ySPRt = 157, xSPRt = xSPRt + 16, numerotete = 2, GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 2 ) { GOTOU = 19 };
               if ( GOTOU == 0 && temps > reftempsB + 1 ) {
                   if ( xGNOME < 33 && xSPRt < 273 ) { tete.play() };
                  GOTOU = 19;
               };

           };

          //afficheteombre ;
           if ( GOTOU == 19 ) { GOTOU = 0 };

           if ( GOTOU == 0 ) {
               if ( joueurA == 65 || joueurA == 95 ) {

                  // choix du sprite tete decap A;

                   if ( numerotete == 1 ) { objet = tete1A };
                   if ( numerotete == 2 ) { objet = tete2A };
                   if ( numerotete == 3 ) { objet = tete3A };
                   if ( numerotete == 4 ) { objet = tete4A };
                   if ( numerotete == 5 ) { objet = tete5A };
                   if ( numerotete == 6 ) { objet = tete6A };
               };

               if ( joueurB == 65 || joueurB == 95 ) {

                  // choix du sprite tete decap B;
                   if ( numerotete == 1 ) { objet = tete1B };
                   if ( numerotete == 2 ) { objet = tete2B };
                   if ( numerotete == 3 ) { objet = tete3B };
                   if ( numerotete == 4 ) { objet = tete4B };
                   if ( numerotete == 5 ) { objet = tete5B };
                   if ( numerotete == 6 ) { objet = tete6B };
               };

           };

          // affichage des tetes;

           if ( GOTOU == 0 ) {
              xSPRt2 = xSPRt * 2, ySPRt2 = (ySPRt * 2) + 16;

               if ( xSPRt2 < 640 ) { canvasContext.drawImage ( spriteombre, xSPRt2, 351, 32, 16 ) };

               if ( xSPRt2 < 640 ) { canvasContext.drawImage ( objet, xSPRt2, ySPRt2, 32, 32 ) };
           };

          GOTOU = 14;

       };

       if ( GOTOU == 0 ) {
           if ( joueurA == 65 || joueurA == 95 || joueurB == 65 || joueurB == 95 ) {

               if ( joueurA == 65 || joueurA == 95 ) {
                   if ( numerotete == 1 ) { objet = tete1A };
                   if ( numerotete == 2 ) { objet = tete2A };
                   if ( numerotete == 3 ) { objet = tete3A };
                   if ( numerotete == 4 ) { objet = tete4A };
                   if ( numerotete == 5 ) { objet = tete5A };
                   if ( numerotete == 6 ) { objet = tete6A };
               };
               if ( joueurB == 65 || joueurB == 95 ) {
                   if ( numerotete == 1 ) { objet = tete1B };
                   if ( numerotete == 2 ) { objet = tete2B };
                   if ( numerotete == 3 ) { objet = tete3B };
                   if ( numerotete == 4 ) { objet = tete4B };
                   if ( numerotete == 5 ) { objet = tete5B };
                   if ( numerotete == 6 ) { objet = tete6B };
               };

              // affichage des tetes;

               if ( GOTOU == 0 ) {
                  xSPRt = (xSPRt - 1) * 8; // laisser en 8 pour le football ,);

                  xSPRt2 = xSPRt * 2, ySPRt2 = (ySPRt * 2) + 16;

                   if ( xSPRt2 < 640 ) { canvasContext.drawImage ( spriteombre, xSPRt2, 351, 32, 16 ) };
                   
                   if ( xSPRt2 < 640 ) { canvasContext.drawImage ( objet, xSPRt2, ySPRt2, 32, 32 ) };
               };

           };


       };



    //                       ****************************************;
    //                       ********* affichage du gnome  **********;
    //                       ****************************************;
    //gnome2 ;
     if ( GOTOU == 14 ) { GOTOU = 0 };

      if ( GOTOU == 0 && gnome == 1 ) {

          // choix du sprite;
           if ( numerognome == 1 ) { objet = gnome1 };
           if ( numerognome == 2 ) { objet = gnome2 };
           if ( numerognome == 3 ) { objet = gnome3 };
           if ( numerognome == 4 ) { objet = gnome4 };

          // affichage du gnome;
          xGNOME2 = ((xGNOME - 2) * 16);
           if ( xGNOME < 40 ) { canvasContext.drawImage(objet, xGNOME2, 303, 48, 64) };


           if ( xGNOME > 39 ) {

               if ( joueurB == 65 || joueurB == 95 ) {
                   if ( partie == 2 ) { bonusA = 1 };
                   if ( partie == 1 ) {
                       if ( xB >= 39 ) { sortieA = 1, Aoccupe = 0 };
                   };
               };
               if ( joueurB == 610 || joueurB == 910 ) {
                   if ( partie == 2 ) { bonusA = 1 };
                   if ( partie == 1 ) {
                       if ( xB >= 39 ) { sortieA = 1, Aoccupe = 0 };
                   };
               };

               if ( joueurA == 65 || joueurA == 95 ) {
                   if ( partie == 2 ) { bonusB = 1 };
                   if ( partie == 1 ) {
                       if ( xA >= 39 ) { sortieB = 1, Boccupe = 0 };
                   };
               };
               if ( joueurA == 610 || joueurA == 910 ) {
                   if ( partie == 2 ) { bonusB = 1 };
                   if ( partie == 1 ) {
                       if ( xA >= 39 ) { sortieB = 1, Boccupe = 0 };
                   };
               };
           };


          // cadavre tire par le gnome;

           if ( joueurA == 65 || joueurA == 610 ) {
               if ( xGNOME > xA + 5 ) {
                  gnometire = 0;
                  xA = xA + 1;
               };
           };
           if ( joueurA == 95 || joueurA == 910 ) {
               if ( xGNOME > xA + 4 ) {
                  gnometire = 0;
                  xA = xA + 1;
               };
           };

           if ( joueurB == 65 || joueurB == 610 ) {
               if ( xGNOME > xB + 4 ) {
                  gnometire = 0;
                  xB = xB + 1;
               };
           };
           if ( joueurB == 95 || joueurB == 910 ) {
               if ( xGNOME > xB + 4 ) {
                  gnometire = 0;
                  xB = xB + 1;
               };
           };

      };


     //                       ****************************************;
     //                       ************ affichage du feu **********;
     //                       ****************************************;
     //boulefeu ;
      if ( GOTOU == 9 ) { GOTOU = 0 };

       if ( GOTOU == 0 && jeu == 1 && sorcier == 1 && xAttB > xB + 4 ) {

          xfeu = (xAttB - 2) * 16, yfeu = yAttB * 16;

           if ( xAttB == 9 || xAttB == 18 || xAttB == 27 ) {
              objet = feu1;
              canvasContext.drawImage ( objet, xfeu, yfeu, 32, 32 );
           };
          
           if ( xAttB == 12 || xAttB == 21 ) {
              objet = feu2;
              canvasContext.drawImage ( objet, xfeu, yfeu, 32, 32 );
           };

           if ( xAttB == 15 || xAttB == 24 ) {
              objet = feu3;
              canvasContext.drawImage ( objet, xfeu, yfeu, 32, 32 );
           };


       };







     //                       ****************************************;
     //                       ********* affichage des arbres**********;
     //                       ****************************************;
      if ( GOTOU == 0 ) {

          if ( xA <= 6 || xB <= 6 ) { 
            if ( decorS == 1 ) { canvasContext.drawImage ( arbreG1, 0, 208 , 96, 160 ) };
            if ( decorS == 2 ) { canvasContext.drawImage ( arbreG2, 0, 208 , 96, 160 ) };
            if ( decorS == 3 ) { canvasContext.drawImage ( arbreG3, 0, 208 , 96, 160 ) };
            if ( decorS == 4 ) { canvasContext.drawImage ( arbreG4, 0, 208 , 96, 160 ) };
         };

          if ( gnome == 1 && xGNOME <= 12 ) { 
             if ( decorS == 1 ) { canvasContext.drawImage ( arbreG1, 0, 208 , 96, 160 ) };
             if ( decorS == 2 ) { canvasContext.drawImage ( arbreG2, 0, 208 , 96, 160 ) };
             if ( decorS == 3 ) { canvasContext.drawImage ( arbreG3, 0, 208 , 96, 160 ) };
             if ( decorS == 4 ) { canvasContext.drawImage ( arbreG4, 0, 208 , 96, 160 ) };
          };

          if ( xB >= 29 || xA >= 29 || xGNOME >= 32 || xSPRt2 >= 526 ) {
             if ( decorS == 1 ) { canvasContext.drawImage ( arbreD1, 544, 208 , 96, 160 ) };
             if ( decorS == 2 ) { canvasContext.drawImage ( arbreD2, 544, 208 , 96, 160 ) };
             if ( decorS == 3 ) { canvasContext.drawImage ( arbreD3, 544, 208 , 96, 160 ) };
             if ( decorS == 4 ) { canvasContext.drawImage ( arbreD4, 544, 208 , 96, 160 ) };
          };

      };

     //                       ****************************************;
     //                       ********* jeu gagne - jeu perdu ********;
     //                       ****************************************;


      	if ( GOTOU == 0 && version == 1 ) { // easter egg :)
		canvasContext.fillStyle = "rgb(255,255,255)";
      	   	canvasContext.fillText("  FL ", 288, 288);
      	   	canvasContext.fillText("2015", 288, 308);
      	};

       if ( GOTOU == 0 ) {

           if ( jeu == 2 ) {

		canvasContext.fillStyle = "rgb(34, 34, 153)"; // dessiner un rectangle
		canvasContext.fillRect (226, 149, 175, 23);

		canvasContext.fillStyle = "rgb(0,0,0)";
		canvasContext.fillText("Thanks big boy.", 226, 145);

           };

           if ( jeu == 0 && joueurA == 6660 ) {

		canvasContext.fillStyle = "rgb(34, 34, 153)"; // dessiner un rectangle
		canvasContext.fillRect (210, 149, 217, 19);

		canvasContext.fillStyle = "rgb(0,0,0)";
		canvasContext.fillText("Your end has come!", 210, 145);

           };

       };




     //                        gestion du temps et retour;



      if ( arret == 1 ) {




          if ( jeu == 1 && temps > 30 ) {


             mortKO.stop(), mortdecap.stop(); prepare.stop();// pour aretter les sons;
		scoreA = 0;
		scoreB = 0;

               if ( GOTOU == 0 && demo == 1 ) {
                  partie = 1, decorS = 2, IA = 0, sorcier = 0, marianna = 0, demo = 0;
                  GOTOU = 8;
               };

               if ( GOTOU == 0 && partie == 1 ) {
                  partie = 2, decorS = 2, IA = 0, sorcier = 0, marianna = 0, chronometre = 60;
                  GOTOU = 8;
               };

               if ( GOTOU == 0 && partie == 2 ) {
                  partie = 1, decorS = 2, IA = 4, sorcier = 0, marianna = 0, demo = 1;
                  GOTOU = 8;
               };

          };

           if ( jeu == 2 || jeu == 0 ) {
		scoreA = 0;
		scoreB = 0;
              partie = 1, decorS = 2, IA = 0, sorcier = 0, marianna = 0;
              GOTOU = 8;
           };


      };



};




// boucle d'affichage
var main = function () {


	(function animloop(){
  	requestAnimFrame(animloop);
  	render();
	})();

};
main();


/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {
		
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
		
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
		'eliosad':'elio-sad.png',
		'elio':'elio.png',
		'ninapleur':'nina-pleure.png',
		'ninacolere':'nina-colere.png',
		'nina':'nina.png',
		'ninacolere':'ninacolere.png',
		'jupiter-tresses':'jupiter-tresses.png',

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
		'CHAMBRE':'Chambre.png',
		'JARDIN':'jardin.png',
		'FONDNINA':'Fond-nina.png',
		'FONDELIO':'Fond-elio.png',
		'MAISONCONECTEE':'maison-connectee.png',
		'HALL': 'Hall.png',
		'VOITURE':'Voiture.png',
		'RUE':'rue.png',
		'PARC':'Parc.png',
		'LAPIFIAC':'Lapifiak.png',
		'ROBOTJARDINIER':'Robot-jardinier.png',
		'DECHARGE':'Decharge.png',
		'ZOOMTROU':'Zoom-trou.png',
		'ZOOMTROUNINA':'Zoom-trou-nina.png',
		'ZOOMCARTON':'Zoom-carton.png',
		'LETTRE':'Lettre.png',
		'TROU':'Zoom-trou.png',
		'TROUNINA':'Zoom-trou-nina.png',
		'SALON':'Salon.png',
		'CUISINE':'Cuisine.png',
		//elispe
		'LESOIR':'elispe-ecole.png',
		'HORLOGE':'Horloge.png',
		'HORLOGE2':'Horloge2.png',
		'PLUSTARD':'After-devoir.png',
		'REPASSOIR':'Repas-soir.png',
		'DODO':'Lendemain.png',

});


// Define the Characters
monogatari.characters ({
	'n': {
		name: 'Nina',
		color: '#EAB13D',
	},
	'e' :{
		name: 'Elio',
		color:'#49B6D7',
	},
	'r':{
		name: 'Robot Jardinier',
		color: '#3AAE17',
	},
	'j':{
		name: 'Jupiter',
		color:'#f4a5a8'
	},
	'ne':{
		name: 'Nina et Elio',
		color: '#5500AA',
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		//jardin nina jupiter puis elio avant ecole
		'show scene JARDIN with fadeIn',
		'show image elio right',
		'e Nina ! Peux-tu venir sil te pla??t ?!',
		'hide image elio right with fadeOut',
		'En 2121, au nord du quartier Miraflores, dans le jardin fleuri d???un pavillon, une petite fille courait apr??s son chien. ',
		//Description Nina
		'show scene FONDNINA with fadeIn',
		'Nina poss??dait de longs cheveux blancs, toujours coiff??s en tresses, et orn??s de ses chouchous rouges favoris. Elle ??tait v??tue de sa fid??le marini??re, elle-m??me dissimul??e derri??re sa salopette en jean.',
		'Du haut de ses 8 ans, elle passait rarement inaper??ue. La fillette avait un caract??re bien tremp?? et savait toujours ce qu&rsquo;elle voulait. Malgr?? sa grande affection pour Elio, elle le laissait rarement d??cider, bien consciente que sa tendresse l&rsquo;emp??chait souvent de s&rsquo;opposer ?? elle, ceci au grand d??sarroi de ce dernier qui avait souvent du mal ?? la canaliser. ',
		//Desciption Elio
		'show scene ACHATELIO with fadeIn',
		'Cest pourtant dans ce but que les parents de Nina l&rsquo;avaient acquis. Tous deux commer??ants dans un grand magasin, leurs horaires matinaux et tardifs ne leur permettaient pas de s???occuper d???elle apr??s l?????cole. C?????tait donc le travail d???Elio, un robot nounou programm?? pour prendre soin de Nina, lorsque ses parents ??taient absents. ',
		'Elio ??tait issu d&rsquo;une nouvelle g??n??ration de robots intelligents, dot??s ?? la fois d&rsquo;un esprit ind??pendant et empathique. Cette nouvelle technologie fut une v??ritable r??volution, aussi bien terrifiante qu&rsquo;exaltante pour la population mondiale.' ,
		'L&rsquo;entreprise cr??atrice avait d??cid?? de produire ces robots en quantit?? minime, afin d&rsquo;??viter toute panique robophobe. Au premier abord, les parents de Nina ??taient plut??t sceptiques ?? l&rsquo;id??e de laisser la garde de leur fillette ?? un robot. Toutefois, ils s&rsquo;??taient laiss??s conqu??rir en rencontrant Elio.',
		'show scene FONDELIO with fadeIn',
		'C?????tait un petit robot d&rsquo;?? peine un m??tre, ?? la t??te disproportionnellement large, aux grands yeux ronds, ?? la voix aigu??, et dont le clavier num??rique sur son torse trahissait le moindre de ses sentiments.  Les parents de Nina s&rsquo;??taient rapidement rendus compte qu&rsquo;il n&rsquo;y avait rien ?? craindre d&rsquo;Elio (El10-2050 de son nom d&rsquo;origine). ',
		//Maison parent
		'show scene MAISONCONECTEE with fadeIn',
		'Les parents de Nina ??taient plut??t f??rus de technologie. Leur maison ??tait du genre ultra-connect??e. De la fermeture des volets ?? la pr??paration des repas, tout ??tait automatis??. Bien s??r, aucune de leurs machines n&rsquo;??taient comparables ?? Elio. Elles n&rsquo;??taient que des automates programm??s, sans libert?? de penser ou d&rsquo;agir.',
		//Hall elio nina jupiter
		'show scene HALL with fadeIn',
		'show image elio right',
		'show image nina left',
		'n ???Je suis l?? ! Jupiter avait besoin d&rsquo;une nouvelle coiffure, j&rsquo;allais quand m??me pas le faire attendre???',
		'show image jupiter-tresses with fadeIn',
		'En se retournant vers le chien, Elio constata que Nina venait de tresser, de part et d&rsquo;autre son joli pelage.',
		'j WOUAF',
		'n tu te d??peche Elio ? On va a etre en retard a l&rsquo;??cole',
		'e Et c&rsquo;est reparti...',
		//elispe
		'show scene LESOIR with fadeIn',
		'',
		//jardin nina elio et jupiter avant devoir
		'show scene JARDIN with fadeIN',
		'show image elio right',
		'e Nina ! Arr??te de jouer avec Jupiter, il est l???heure de faire tes devoirs.',
		'show image nina left with fadeIn',
		'n  Encore deux minutes, s&rsquo;il te plait, Jupiter est parti chercher son os.',
		'e D&rsquo;accord, mais d??s que tu as r??cup??r?? son jouet, il faut que tu termines tes exercices.',
		// plan horloge (elispe 30 mins)
		'show scene HORLOGE with fadeIn',
		'',
		'show scene HORLOGE2 with fadeIn',
		'',
		//jardin nina elio et jupiter apres attente
		'show scene JARDIN with fadeIN',
		'show image elio right',
		'show image nina left',
		'e Nina, qu???as-tu ?? faire comme devoirs ?',
		'n J???ai juste un exercice de maths.',
		'e Il faut que tu les fasses maintenant, nous n???allons pas tarder ?? manger.',
		'n  Je les ferai plus tard, j???en ai pas beaucoup.',
		'e Nina tu sais, les devoirs sont tr??s importants. Ils te permettent de conna??tre tout ce dont tu as besoin pour r??aliser le m??tier de tes r??ves plus tard. Si tu as des difficult??s dans un exercice, il faut t???y confronter maintenant pour comprendre la solution que tu verras en classe',
		'n Oui mais le probl??me avec les maths, c???est que je n???y arrive jamais',
		'e Que voudrais-tu faire quand tu seras plus grande ?',
		'n Moi ce que j???aime c???est l???espace. Je veux travailler dans les fus??es et les plan??tes.',
		'e C&rsquo;est une merveilleuse id??e, Nina ! Mais, tu sais que pour faire ce m??tier, il faut que tu travailles les math??matiques. Ils sont tr??s importants dans ce domaine, car il y a beaucoup de probl??mes ?? r??soudre.',
		'n C???est vrai Elio ? T???es s??r? On doit faire des math??matiques pour travailler dans les fus??es ?',
		'e Bien s??r, les m??tiers li??s ?? l???espace sont des m??tiers scientifiques. C???est pour cette raison qu???il faut que tu fasses tes devoirs maintenant pour comprendre le secret des math??matiques et travailler dans les fus??es quand tu seras plus grande.',
		'n Je ne savais pas, je m???y mets tout de suite alors ! Tu pourras m???aider si je n???y arrive pas ?',
		'e ??videmment que je vais t???aider si tu ne comprends pas, mais il faut d???abord que tu cherches et que tu te concentres',
		//elipse
		'show scene PLUSTARD with fadeIn',
		'',
		//jardin nina seule
		'show scene JARDIN with fadeIn',
		'show image nina left',
		'n Jupiter ! Viens ici mon chien, j???ai un cadeau pour toi ! Jupiter ? Juju ?',
		'...',
		'n Jupiter ! Dis Elio, o?? est Juju ? Tu l???as crois?? aujourd???hui ?',
		'show image elio right with fadeIn',
		'e Jupiter jouait dans le jardin avant que je parte te chercher. Il a bien d?? rentrer depuis. Il ne t???a probablement pas entendue. Peut-??tre qu???il fait une sieste dans son panier, ou qu???il est encore occup?? ?? faire le bazar dans ta chambre.',
		'n Allons le chercher alors ! Je suis s??re qu???il sera trop content quand il verra mon morceau de bois.',
		//recherche
		'show scene RECHERCHE1 with fadeIN',
		'',
		'show scene RECHERCHE2',
		'',
		'show scene RECHERCHE3',
		'',
		'show scene RECHERCHE4',
		'',
		//enguelade nina elio
		'show scene SALON with fadeIN',
		'Apres avoir fouill?? la maison de la cave au grenier, toujours pas la moindre trace de Jupiter. Le duo de chercheur se retrouva dans le salon',
		'show image elio right',
		'show image nina left',
		'e Allons nous occuper de ta chambre! Jupiter sera s??rement de retour d&rsquo;ici-l??, le temps que nous ayons fini de la ranger. Apr??s tout, il ne manquerait pour rien au monde ses croquettes du soir???',
		'n Comment tu veux que je me concentre sur le rangement alors que Jupiter est perdu, et peut-??tre en danger ? On n???a pas le temps pour ??a ! Il faut le retrouver au plus vite !',
		'e C???est un chien, il peut retrouver son chemin tu sais. Jupiter et ses semblables sont des animaux tr??s intelligents... Et tes parents me font confiance pour que ta chambre soit impeccable avant le d??ner.',
		'n Donc tu me demandes de rester ici les bras crois??s pendant que mon animal de compagnie ador?? est peut-??tre bless??, ou m??me pire ? Elio, tu ne comprends vraiment rien aux humains ! Si quelque chose arrivait ?? Jupiter, je ne te le pardonnerais JAMAIS !',
		'hide image nina left with fadeOut',
		//elispe
		'show scene REPASSOIR with fadeIn',
		'',
		//cuisine repas du soir
		'show scene CUISINE with fadeIN',
		'show image elio right',
		'show image nina left',
		'n Qu???est-ce qu???on va faire si Juju ne revient pas ? Il n???a jamais quitt?? la maison sans nous ! Pourquoi est-ce qu???il s???est enfui ? Il ne m???aime plus ? Ou peut-??tre que quelqu???un l???a enlev??, ou m??me pire?',
		'e Nina ne dis pas de b??tises, voyons. Je suis s??re que tout va rentrer dans l???ordre, je te le promets. Pour quelles raisons Jupiter ne reviendrait-il pas ? Toi et tes parents lui donnez tout l???amour du monde, vous le rendez incroyablement heureux. Puis je crois que tu oublies quelque chose???Ce n???est pas n???importe quel chien, c???est LE chien de la famille. Crois-moi, je suis s??r qu???il va rentrer ?? la maison !',
		//nina triste
		'show scene NINA-TRISTE with fadeIN',
		'La fillette ??tait inconsolable. Elio souhaitait plus que tout au monde pouvoir essuyer ses larmes, mais Nina continuait de clamer, sous le regard de ses parents attrist??s. Elle craignait que son chien ait ??t?? dognapp?? par de dangereux voleurs, en s&rsquo;imaginant m??me que ceux-ci pourraient lui demander une ran??on en ??change de sa lib??ration.',
		//chambre nina heure du dodo
		'show scene CHAMBRE with fadeIN',
		'show image elio right',
		'show image nina left',
		'e Je te le promets. Nous irons le chercher ensemble demain. Jupiter doit encore ??tre dans les environs. Nous pourrons aussi interroger les voisins, si tu le veux. Ce soir, il est un peu tard pour leur rendre visite. Il ne faudrait pas les importuner.',
		//elispe
		'show scene DODO with fadeIn',
		'',
		//recherche dans la ville
		'show scene SALON with fadeIn',
		'Le lendemain, les deux amis se lanc??rent ?? la recherche du compagnon perdu, en commen??ant par r??colter des indices qui pourraient les aider sur les conditions de sa disparition.',
		'Ses croquettes de la veille ne semblaient pas avoir boug??es de sa gamelle. Ses jouets ??taient toujours au m??me endroit, l?? o?? ils avaient ??t?? laiss??s, et aucun nouveau trou n???avait ??t?? creus?? dans le jardin.',
		'Les deux chercheurs en herbe d??cid??rent de se rendre chez les voisins, afin de leur demander s???ils avaient des informations sur la disparition du canid??.',
		'Les Aldrin n&rsquo;avaient pas vu la moindre trace de Jupiter, tout comme les Terechkova qui avaient pourtant l&rsquo;habitude de l&rsquo;entendre aboyer. Ils se dirig??rent vers la maison des Armstrong.',
		'show scene ROBOTJARDINIER with fadeIn',
		'show image nina left with fadeIn',
		'n Monsieur ? Est-ce que Jupiter est revenu faire des trous dans votre jardin r??cemment ? Ou vous l???avez peut-??tre aper??u pr??s des haies ? O?? ??tiez-vous hier ? Vous avez-vu des gens suspects, comme des dognappeurs, tra??ner dans les environs ?',
		'r Je doit encore arroser les tulipes et les g??raniums avant l&rsquo;arriv??e de Mme Armstrong !',
		'Ne voulant pas l&rsquo;importuner plus longtemps, le duo d??cida d&rsquo;??largir son terrain de recherche.',
		'show scene RUE',
		'show image elio right',
		'show image nina left',
		'n Je comptais vraiment sur le robot jardinier pour qu???il nous donne des informations.',
		'e Ne t???inqui??te pas, nous allons retracer son parcours, et nous allons le retrouver.',
		'Leur prochaine destination ne fut autre que le parc non loin de l?????cole primaire que fr??quentait la jeune fille. Nina et Elio s???y ??taient rendus la veille, afin de jouer au ballon avec les amis de la fillette.',
		'S&rsquo;ils n&rsquo;??taient pas all??s au parc avant de rentrer ?? la maison, peut-??tre que Jupiter ne se serait pas enfui. Peut-??tre qu&rsquo;ils auraient regagn?? la maison avant qu&rsquo;il n???ait pu passer le portail. Ils seraient rentr??s, auraient ferm?? le portail et pass?? du temps ?? jouer ?? attraper Jupiter, comme d???habitude. Et pourtant???',
		'n Attends, tu te souviens quand on a emmen?? Jupiter au parc pour jouer ?? la balle la semaine derni??re ? Peut-??tre qu&rsquo;il a voulu y rejouer pendant mon absence ?',
		'show scene PARC',
		'Ce grand espace vert ??tait en effet un lieu tr??s pris?? par les canid??s du quartier et leurs ma??tres. Ses ??tendues d???herbes et d???arbres ??taient l???endroit parfait pour les laisser courir librement, et passer des moments complices.',
		'show image elio right',
		'show image nina left',
		'ne Jupiter ! Jupi ! Viens l?? mon chien ! R??ponds !',
		'hide image elio right with fadeOut',
		'hide image nina left with fadeOut',
		'show scene TROU',
		'Un trou, dans un grillage ??loign?? du sentier, finit par attirer l???attention de la fillette.',
		'show image elio right',
		'show image nina left',
		'n Elio regarde ce trou dans la cl??ture !  Jupiter aurait pu entrer par ici, il est assez petit pour y passer sans probl??me. Je suis s??re qu???on peut aussi s???y faufiler ! Allez viens ! Il nous attend de l???autre c??t?? !',
		'Nina n???attendit m??me pas la r??ponse du robot. Elle s???agenouilla pr??s de l???entr??e du passage, avant de commencer ?? ramper dans le trou, salissant sa salopette avec de l???herbe et de la terre par la m??me occasion.',
		'e Nina ! Tu ne peux pas entrer ici, ??a peut ??tre dangereux ! A-attends-moi ! ',
		'show scene TROUNINA',
		'Comme toujours, Elio n???eut d???autre choix que de suivre la jeune fille, ?? travers le grillage, puis la haie, esp??rant qu???aucun danger ne les attendait de l???autre c??t??.',
		//decharge
		'show scene DECHARGE',
		'Ils arriv??rent ?? l???arri??re d???un grand hangar en briques rouges, surplomb?? par un toit m??tallique, que la pluie avait ??rod?? au fil du temps. L???entrep??t ??tait visiblement abandonn?? depuis un bon moment.',
		'La jeune fille entra finalement ?? l???int??rieur d???un pas d??cid??. Le petit robot la suivit d???un pas bien moins confiant.',
		'Il y r??gnait une atmosph??re pesante. Le vent, soufflant ?? travers les carcasses m??talliques, cr??ait un bruit crissant ?? faire frissonner les fils ??lectriques du plus impassible des robots.',
		'Elio sentit une dr??le de sensation, en s???introduisant dans ce qui ??tait manifestement une d??charge : une sensation qu???il ne pouvait d??crire. Une charge ??lectrique douloureuse, emplie de tristesse, parcourait ses circuits.',
		'Il se tenait debout. Autour de lui, des centaines de machines ??taient entass??es, ou peut-??tre des milliers. D??t??rior??es par l???usage, le temps, et surtout l???abandon, elles ??taient rouill??es, s?????taient d??compos??es, et ??taient devenues inutilisables???',
		'show image elio right',
		'show image nina left',
		'n Je ne connaissais pas cette zone???',
		'e Moi non plus, et j???ai l???impression que peu de gens la connaissent, ou y mettent encore les pieds. Les bureaux, que nous avons vu dehors, avaient les fen??tres cass??es.',
		'hide image elio right with fadeOut',
		'hide image nina left with fadeOut',
		'Elio avan??a doucement, inspectant chaque plaque m??tallique, scrutant chaque pi??ce m??canique, examinant chaque carte ??lectronique. Il imaginait quelles avaient pu ??tre leurs fonctions et surtout quelles nouvelles technologies les avaient remplac??es.',
		'Toutes ces machines avaient ??t?? des innovations, avant que de meilleures leurs succ??dent. L???Homme pense, cr??e, innove, invente. Chaque ann??e des progr??s sont r??alis??s tant en m??decine, que dans le milieu du travail.',
		'show image nina left',
		'n Regarde l??-bas ! Celui-ci ne te rappelle pas quelque chose ?',
		'hide image nina left with fadeOut',
		'Ce dernier ressemblait trait pour trait au robot jardinier des Armstrong qu???ils avaient interrog?? plus t??t dans la journ??e.',
		'Ceci signifiait que des humains avaient un jour offert une maison ?? ce robot, avaient utilis?? ses services, et s???en ??taient d??barrass??s lorsqu???un meilleur mod??le ??tait arriv?? sur le march??, ou tout simplement qu???il avait perdu toute utilit?? ?? leurs yeux.',
		'show scene FONDELIO with fadeIn',
		'Elio ??tait l???une de ses avanc??es spectaculaires : une de ces inventions qui bouleversent le monde, un robot intelligent dot?? d?????motions.',
		'show scene DECHARGE',
		'Alors qu???il parcourait les all??es sinueuses du hangar, enjambant les restes de technologies pass??es, une id??e terrifiante traversa son esprit. Et si chaque innovation ??tait vou??e ?? ??tre d??tr??n??e par une autre ?',
		'Si chaque d??couverte ne cr??ait seulement qu???un effet de mode ??ph??m??re ? Ce destin sera-t-il un jour celui d???Elio ? Le robot n?????tait pas dupe, et il savait qu???un jour Nina allait grandir, et que ses parents n???auraient plus besoin de lui pour veiller sur elle.',
		'Cependant, il avait toujours esp??r??, peut-??tre candidement, que sa pr??sence ??tait devenue indispensable pour la famille, et qu???ils le consid??raient (presque) comme un membre ?? part enti??re du foyer.',
		'show image elio right',
		'show image nina left',
		'n J-je ne suis pas s??re que Jupiter ait pu rentrer ici... On regarde vite fait, et apr??s d??p??chons-nous de sortir de l??, d???accord ',
		'Le petit robot fixa la d??charge encore une fois. Il n???aurait jamais pens?? qu???un tel endroit puisse exister. Comment est-ce que les humains avaient pu abandonner tous ces robots ? La plupart ??tait des mod??les qu???il croisait tous les jours dans les rues.',
		'show scene ZOOMCARTON with fadeIn',
		'show image elio right',
		'show image nina left',
		'n Oh ! Regarde Elio ! C???est quoi ces dr??les de choses ? ??a a l???air vachement vieux ! Tu pense que ??a, c???est les vieux trucs pour mettre les cartes bancaires ? Tu sais, comme ils avaient au 21??me si??cle. J???ai vu ??a ?? la t??l?? avec papa, hier !',
		'e Selon mes donn??es, il s???agit d???une ?? game boy ??. Console portable de jeu vid??o de quatri??me g??n??ration d??velopp??e et fabriqu??e par Nintendo, une ancienne entreprise sp??cialis??e dans la fabrication de consoles',
		'n Non, tu rigoles ? Waouh, c???est m??ga ancien ! Par contre, je ne comprends vraiment pas le principe d???ins??rer une carte bancaire dans une console.',
		'e Oh non, la fente servait en fait ?? ins??rer ce qu???ils appelaient des ?? cartouches ??. Une cartouche ??quivalait ?? un jeu. En l???ins??rant dans la console, ils pouvaient ensuite jouer au jeu correspondant.',
		'n Dingue ! Je ne vois pas pourquoi on ne voit pas ??a ?? l?????cole, ce serait quand m??me plus int??ressant. Et pourquoi il y a un ??cran ?',
		'e A l?????poque, il jouait sur des ??crans. La r??alit?? augment??e que nous utilisons est arriv??e plus tard. Et leur premier prototype n???a rien ?? voir avec celle d???aujourd???hui. En fait, c???est ?? partir des ann??es??? Nina, tu m?????coutes ?',
		'La r??ponse ??tait non. Se concentrer longuement sur les explications th??oriques du robot cultiv??, n?????tait pas vraiment le passe-temps favori de la fillette. Elle pr??f??rait s???affairer ?? des activit??s qu???elle trouvait plus divertissantes, telles que se jeter corps et ??me dans un carton d???antiquit??s poussi??reuses.',
		'n J???ai trouv?? autre chose !! C???est une sorte de??? de???. Bah je sais pas en fait. ',
		'e Hmm???Bonne question???Je recherche l???information???',
		'Le clavier num??rique d???Elio clignota. Signe que le robot ??tait en pleine r??flexion.',
		'e  Il s???agit de sacs ?? dos ??lectroniques, install??s sur le dos des pigeons, et s???adaptant ?? leur morphologie. Ils avaient pour vocation de mesurer la qualit?? de l???air de certaines grandes villes au 21??me si??cle.',
		'n Ils ne pouvaient pas faire ??a avec des drones ou des antennes sp??ciales ?',
		'e Si??? Mais, le cerveau humain n???a fait qu?????voluer avec les ann??es. De plus, la p??riode o?? fut cr???? cet objet, a ??t?? marqu??e par un virus persistant. Les habitants ont d?? rester enferm??s pendant de longs mois.',
		'e Certains livres ??voquent la folie et l???absurdit?? qui ont alors frapp?? les homo sapiens de ce si??cle. C???est d???ailleurs assez effrayant ?? lire, dit Elio d???un air dubitatif. Donc, c???est vrai que certaines cr??ations de tes anc??tres peuvent para??tre??? comment dire ? insens??es ?',
		'show scene DECHARGE',
		'Nina hocha la t??te, et perdit soudainement son int??r??t pour le carton. Les deux amis poursuivirent donc leur exp??dition. ',
		'Elio ??tait de plus en plus d??sempar?? face ?? ce spectacle lugubre. Cette d??charge ??tait le cimeti??re de tr??sors historiques. Ces technologies avaient marqu?? des g??n??rations d???humains, et fait ??voluer la soci??t??.',
		'Le petit robot ??tait ??tonn?? que les Hommes, pourtant tr??s attach??s ?? leur patrimoine, et mettant un point d???honneur ?? le pr??server, ??taient les m??mes personnes qui avaient abandonn?? tous ces objets.',
		'show scene DECAHRGEPORTE',
		'Parcourant les all??es tortueuses de l???entrep??t, les deux camarades arriv??rent finalement ?? l???entr??e du b??timent. Ils pouss??rent ensemble la grande porte grin??ante qui les s??paraient de l???ext??rieur.',
		'show scene DECHARGE2',
		'Ils d??couvrirent l??, un vaste terrain d??sert, o?? la nature avait repris ses droits. Les ronces avaient envahi les conteneurs. La mousse avait recouvert les v??hicules d??laiss??s, et les oiseaux s?????taient install??s sous la toiture.',
		'Le caract??re aventurier de Nina la fit courir vers les voitures abandonn??es, ce qui, au passage, fit fuir tous les valeureux volatiles qui avaient os?? y rester. Son premier r??flexe avait ??t?? de s???installer sur le si??ge conducteur, de saisir le volant et de simuler, apr??s examen d???Elio, une course poursuite.',
		'Celui-ci s???assit ?? c??t?? d???elle sur le si??ge passager, et se pr??ta au jeu. Il ??tait habitu?? aux folies de l???enfant.',
		'show scene VOITURE',
		'n Les m??chants sont ?? nos trousses ! Vrrrrr. Vrrrr ! Passe-moi vite la carte qui est dans la bo??te ?? gants, cher co-pilote !',
		'e La carte ?',
		'n La carte !!!',
		'e Euh oui, la carte !',
		'Il fouilla parmi les d??bris et la poussi??re afin de trouver quelque chose ressemblant approximativement ?? une carte. Chose qu???on ne voyait plus que dans les vieux films. Les humains aimaient la nostalgie du papier. Il trouva ?? la place des permis holographiques datant de 2121. Nina lui retira des mains.',
		'n Tiens, ils datent de cette ann??e ! C???est bizarre comment sont-ils arriv??s dans ce vieux tacot tout ab??m?? ?',
		'e En effet, c???est tr??s ??trange??? On ne devrait peut-??tre pas s?????terniser dans les parages. Cet endroit ne me dit rien qui vaille. Allez Nina, rentrons ?? la maison, il se fait tard. Jupiter n???est clairement pas ici. Il est peut-??tre rentr?? ?? la maison entre-temps. Apr??s tout, il n???est pas du genre ?? s???absenter longtemps.',
		'La jeune fille approuva. Les quelques distractions qu???elle avait su trouver l&rsquo;avaient bien amus??e, mais le hangar la rendait toute de m??me mal ?? l???aise.',
		//retour
		'show scene RUE',
		'Une bonne partie du chemin du retour s?????tait d??roul??e dans un silence pesant, tandis que le soleil se couchait ?? l???horizon, illuminant le ciel de teintes orang??es et ros??es.',
		'Elio, lui, ??tait perdu dans ses pens??es, son disque dur se remplissant de milliers de questions.',
		'En effet, le petit robot s&rsquo;interrogeait anxieusement sur tout ce qu&rsquo;il avait vu dans cette d??charge. Ces andro??des avaient, tout comme lui, ??t?? recueillis par des familles comme celle de Nina, puis jet??s lorsque les humains avaient fait l???acquisition de mod??les am??lior??s, ou n&rsquo;en avaient plus besoin.',
		'show image elio right',
		'show image nina left',
		'n Tu sais Elio... Tu n???es pas comme eux du tout...',
		'e Comme eux ?',
		'n Toi tu n???es pas qu???un robot, tu es mon ami ! On ne jette pas les amis !',
		'e Mais un jour tu vas grandir, et je ne pense pas que tes parents trouveront encore une utilit?? ?? un robot comme moi???',
		'n Papa et maman t???adorent ! Ils disent tout le temps que tu fais du bon travail ! Et puis, je n???aurai peut-??tre plus besoin d???une nounou quand je serai plus grande, mais j???aurai toujours besoin de mon meilleur ami ! Sinon, avec qui est-ce que je vivrais des aventures comme aujourd???hui ? ',
		'e Tu n???es pas trop triste de ne pas avoir retrouv?? Jupiter aujourd???hui ? J???aurais aim?? pouvoir te le ramener???',
		'n Bien s??r que si je suis triste, mais on ne va pas abandonner ! Demain, on y retourne ! Tu sais, Jupi ne va pas se laisser faire, il a du caract??re ! Les voleurs ne perdent rien pour attendre ! On dirait pas comme ??a, mais Jupiter est un combattant, tout comme moi !',
		'e On pourra aussi demander de l???aide ?? tes parents en rentrant. Les adultes collent souvent des affiches lorsqu???un animal est perdu, je suis certain qu???ils sont aussi tristes que toi. On pourra choisir ensemble une photo de Jupiter, comme ??a les voisins pourront le reconna??tre et appeler tes parents s???ils le retrouvent.',
		'n On aura qu????? promettre une r??compense aussi ! Pourquoi pas un nouveau v??lo tout neuf pour celui qui nous rapportera mon chien ! Ou encore des bonbons ! Tout le monde aime les bonbons ! Et pourquoi pas???',
		'e  Oui, oui, on pourra faire ??a ! Apr??s tout, peut-??tre qu???une r??compense motivera quelqu???un ?? nous aider... Ah! Regarde, on est presque arriv??s ! Je vois le portail du jardin, d???ici !',
		'show scene HALL',
		'Lorsque les deux compagnons pass??rent la porte d???entr??e, Elio ne put qu???esp??rer entendre Jupiter aboyer afin de c??l??brer le retour de Nina. Il n???en fut rien. Le silence r??gnait toujours dans la maison, car ni Jupiter, ni les parents de Nina n?????taient encore rentr??s.',
		'show image elio right',
		'show image nina left',
		'e En attendant que tes parents rentrent, nous devrions nous occuper de ranger ta chambre, nous ne l???avons pas fait hier.',
		'n Oui oui... Mais avant, laisse-moi faire un tour dans le jardin.',
		'e  D???accord, mais d??p??che-toi ! Je ne vais pas me faire avoir cette fois-ci, tu ne me feras pas ranger toute ta chambre tout seul !',
		'show scene CHAMBRE',
		'La chambre de la fillette ??tait dans un ??tat d??solant. Plus rien n?????tait ?? sa place, des jouets et v??tements en tout genre jonchaient le sol au point que la moquette ??tait devenue presque invisible sous ce d??sordre.',
		'Les tiroirs de la commode ??taient tous ouverts, laissant s?????chapper encore davantage de v??tements d??pli??s et jouets qui n???avaient rien ?? faire ici.',
		'Elio d??cida de commencer son grand nettoyage par la remise en ??tat du lit de Nina, ce qui semblait ??tre la t??che la plus simple, m??me s???il devait avant cela remettre en ordre la pile de peluches que la fillette laissait sur son lit.',
		'show image elio center',
		'e Comment c???est possible de mettre autant le bazar !',
		'hide image elio with fadeOut',
		'show image elio-lapinou center',
		'Au sommet de cette pile se trouvait Lapinou, la peluche f??tiche de la petite fille. Elle l???avait depuis ses 2 mois. Il ??tait dans un pi??tre ??tat.',
		'Il lui manquait une oreille et une des pattes n???allait pas tarder ?? s???arracher, mais Elio saurait le rafistoler, comme toujours ! En d??posant le doudou en dessous de son oreiller, il s&rsquo;aper??ut qu???un petit bout de mousse venait de tomber.',
		'e Oh non... Un autre trou??? ',
		'show scene LAPIFIAC',
		'Il ausculta Lapinou de tous les c??t??s pour reboucher le trou qui se trouvait dans le dos. En voulant remettre la mousse, Elio remarqua un petit papier rose pli?? en quatre. Il l&rsquo;ouvrit et commen??a la lecture :',
		'show scene LETTRE',
		'',
		'show scene NOIR',
		'show image elio-sad center',
		'Plus rien n???avait de sens, jusqu&rsquo;?? ce que les pi??ces du puzzle finissent par s&rsquo;embo??ter dans la t??te du petit robot. Il d??t enfin faire face ?? la r??alit?? qu&rsquo;il avait, autrefois, enfoui au plus profond de son disque-dur.',
		'Nina n?????tait pas l??. Elle n&rsquo;avait pas ??t?? l?? depuis si longtemps qu&rsquo;il commen??a ?? se demander si le souvenir qu&rsquo;il avait d&rsquo;elle ??tait bien r??el, ou si le temps l???avait d??form??.',
		'show scene FONDELIO with fadeIn',
		'Alors, tous les souvenirs douloureux se bousculaient dans son syst??me : les valises de la famille qui s&rsquo;emballent, les photos qui s&rsquo;enl??vent des murs, la voiture qui quitte l&rsquo;all??e un matin, Nina qui fait un signe d&rsquo;adieu au petit robot. Et puis plus rien, ?? part un silence assourdissant.',
		'La petite Nina, comme tous les autres humains, avait quitt?? la Terre il y a des dizaines d???ann??es, apr??s que les scientifiques aient fait la plus grande d??couverte du 22??me si??cle, si ce n???est de toute l&rsquo;Histoire de l???humanit??.',
		'show scene DEPART with fadeIn',
		'Cent ans apr??s les grands d??bats des ann??es 2020 concernant le climat, une nouvelle plan??te habitable avait ??t?? d??couverte ?? une distance atteignable de la Terre. Bient??t les fus??es avaient commenc?? ?? quitter la stratosph??re, alors que la population commen??ait ?? construire une nouvelle soci??t??.',
		'Loin de tous les dommages qu&rsquo;ils avaient caus??s ?? l&rsquo;environnement de leur plan??te d???origine. En laissant la plupart de leurs possessions et constructions sur Terre, pour tout recommencer dans ce nouvel Eldorado.',
		'Ceci inclut les robots qu???ils avaient construit, afin de faciliter leur quotidien. Les parents de Nina n???avaient plus besoin d???Elio pour veiller sur elle, car une nouvelle vie les attendait.',
		'show scene FONDELIO with fadeIn',
		'Rien n&rsquo;??tait plus pareil. Le ciel s???assombrit, et la maison, autrefois remplie de cris et de rires joyeux, ??tait devenue silencieuse. La joie avait disparu. Qui avait pens?? que donner aux robots des sentiments similaires ?? ceux des humains serait une bonne id??e ?',
		'Contrairement aux autres robots travaillant dans la maison, Elio ne pouvait pas reprendre les t??ches pour lesquelles il ??tait programm??, car sans Nina, il n&rsquo;avait aucun but, aucun int??r??t.',
		'Quand le syst??me d???Elio avait cr???? cette copie de Nina ? Quand a-t-il commenc?? ?? parler ?? cette image, ?? s&rsquo;occuper d&rsquo;elle comme comme une meilleure amie? Quand a-t-il perdu sa raison d?????tre ? Qu&rsquo;est-ce qu&rsquo;un robot nounou sans un enfant dont il doit prendre soin ?',
		'show scene NOIR with fadeIn',
		'show image elio-extinction center',
		'Une erreur syst??me fatale est survenue. Le processeur est incapable de traiter les donn??es. Surcharge. Dysfonctionnement de la carte-m??re. Arr??t du syst??me dans 3...........2.........1.',
		'show scene FIN2 with fadeIn',
		//fin
	]
});
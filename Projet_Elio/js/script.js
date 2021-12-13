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
		'e Nina ! Peux-tu venir sil te plaît ?!',
		'hide image elio right with fadeOut',
		'En 2121, au nord du quartier Miraflores, dans le jardin fleuri d’un pavillon, une petite fille courait après son chien. ',
		//Description Nina
		'show scene FONDNINA with fadeIn',
		'Nina possédait de longs cheveux blancs, toujours coiffés en tresses, et ornés de ses chouchous rouges favoris. Elle était vêtue de sa fidèle marinière, elle-même dissimulée derrière sa salopette en jean.',
		'Du haut de ses 8 ans, elle passait rarement inaperçue. La fillette avait un caractère bien trempé et savait toujours ce qu&rsquo;elle voulait. Malgré sa grande affection pour Elio, elle le laissait rarement décider, bien consciente que sa tendresse l&rsquo;empêchait souvent de s&rsquo;opposer à elle, ceci au grand désarroi de ce dernier qui avait souvent du mal à la canaliser. ',
		//Desciption Elio
		'show scene ACHATELIO with fadeIn',
		'Cest pourtant dans ce but que les parents de Nina l&rsquo;avaient acquis. Tous deux commerçants dans un grand magasin, leurs horaires matinaux et tardifs ne leur permettaient pas de s’occuper d’elle après l’école. C’était donc le travail d’Elio, un robot nounou programmé pour prendre soin de Nina, lorsque ses parents étaient absents. ',
		'Elio était issu d&rsquo;une nouvelle génération de robots intelligents, dotés à la fois d&rsquo;un esprit indépendant et empathique. Cette nouvelle technologie fut une véritable révolution, aussi bien terrifiante qu&rsquo;exaltante pour la population mondiale.' ,
		'L&rsquo;entreprise créatrice avait décidé de produire ces robots en quantité minime, afin d&rsquo;éviter toute panique robophobe. Au premier abord, les parents de Nina étaient plutôt sceptiques à l&rsquo;idée de laisser la garde de leur fillette à un robot. Toutefois, ils s&rsquo;étaient laissés conquérir en rencontrant Elio.',
		'show scene FONDELIO with fadeIn',
		'C’était un petit robot d&rsquo;à peine un mètre, à la tête disproportionnellement large, aux grands yeux ronds, à la voix aiguë, et dont le clavier numérique sur son torse trahissait le moindre de ses sentiments.  Les parents de Nina s&rsquo;étaient rapidement rendus compte qu&rsquo;il n&rsquo;y avait rien à craindre d&rsquo;Elio (El10-2050 de son nom d&rsquo;origine). ',
		//Maison parent
		'show scene MAISONCONECTEE with fadeIn',
		'Les parents de Nina étaient plutôt férus de technologie. Leur maison était du genre ultra-connectée. De la fermeture des volets à la préparation des repas, tout était automatisé. Bien sûr, aucune de leurs machines n&rsquo;étaient comparables à Elio. Elles n&rsquo;étaient que des automates programmés, sans liberté de penser ou d&rsquo;agir.',
		//Hall elio nina jupiter
		'show scene HALL with fadeIn',
		'show image elio right',
		'show image nina left',
		'n “Je suis là ! Jupiter avait besoin d&rsquo;une nouvelle coiffure, j&rsquo;allais quand même pas le faire attendre”',
		'show image jupiter-tresses with fadeIn',
		'En se retournant vers le chien, Elio constata que Nina venait de tresser, de part et d&rsquo;autre son joli pelage.',
		'j WOUAF',
		'n tu te dépeche Elio ? On va a etre en retard a l&rsquo;école',
		'e Et c&rsquo;est reparti...',
		//elispe
		'show scene LESOIR with fadeIn',
		'',
		//jardin nina elio et jupiter avant devoir
		'show scene JARDIN with fadeIN',
		'show image elio right',
		'e Nina ! Arrête de jouer avec Jupiter, il est l’heure de faire tes devoirs.',
		'show image nina left with fadeIn',
		'n  Encore deux minutes, s&rsquo;il te plait, Jupiter est parti chercher son os.',
		'e D&rsquo;accord, mais dès que tu as récupéré son jouet, il faut que tu termines tes exercices.',
		// plan horloge (elispe 30 mins)
		'show scene HORLOGE with fadeIn',
		'',
		'show scene HORLOGE2 with fadeIn',
		'',
		//jardin nina elio et jupiter apres attente
		'show scene JARDIN with fadeIN',
		'show image elio right',
		'show image nina left',
		'e Nina, qu’as-tu à faire comme devoirs ?',
		'n J’ai juste un exercice de maths.',
		'e Il faut que tu les fasses maintenant, nous n’allons pas tarder à manger.',
		'n  Je les ferai plus tard, j’en ai pas beaucoup.',
		'e Nina tu sais, les devoirs sont très importants. Ils te permettent de connaître tout ce dont tu as besoin pour réaliser le métier de tes rêves plus tard. Si tu as des difficultés dans un exercice, il faut t’y confronter maintenant pour comprendre la solution que tu verras en classe',
		'n Oui mais le problème avec les maths, c’est que je n’y arrive jamais',
		'e Que voudrais-tu faire quand tu seras plus grande ?',
		'n Moi ce que j’aime c’est l’espace. Je veux travailler dans les fusées et les planètes.',
		'e C&rsquo;est une merveilleuse idée, Nina ! Mais, tu sais que pour faire ce métier, il faut que tu travailles les mathématiques. Ils sont très importants dans ce domaine, car il y a beaucoup de problèmes à résoudre.',
		'n C’est vrai Elio ? T’es sûr? On doit faire des mathématiques pour travailler dans les fusées ?',
		'e Bien sûr, les métiers liés à l’espace sont des métiers scientifiques. C’est pour cette raison qu’il faut que tu fasses tes devoirs maintenant pour comprendre le secret des mathématiques et travailler dans les fusées quand tu seras plus grande.',
		'n Je ne savais pas, je m’y mets tout de suite alors ! Tu pourras m’aider si je n’y arrive pas ?',
		'e Évidemment que je vais t’aider si tu ne comprends pas, mais il faut d’abord que tu cherches et que tu te concentres',
		//elipse
		'show scene PLUSTARD with fadeIn',
		'',
		//jardin nina seule
		'show scene JARDIN with fadeIn',
		'show image nina left',
		'n Jupiter ! Viens ici mon chien, j’ai un cadeau pour toi ! Jupiter ? Juju ?',
		'...',
		'n Jupiter ! Dis Elio, où est Juju ? Tu l’as croisé aujourd’hui ?',
		'show image elio right with fadeIn',
		'e Jupiter jouait dans le jardin avant que je parte te chercher. Il a bien dû rentrer depuis. Il ne t’a probablement pas entendue. Peut-être qu’il fait une sieste dans son panier, ou qu’il est encore occupé à faire le bazar dans ta chambre.',
		'n Allons le chercher alors ! Je suis sûre qu’il sera trop content quand il verra mon morceau de bois.',
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
		'Apres avoir fouillé la maison de la cave au grenier, toujours pas la moindre trace de Jupiter. Le duo de chercheur se retrouva dans le salon',
		'show image elio right',
		'show image nina left',
		'e Allons nous occuper de ta chambre! Jupiter sera sûrement de retour d&rsquo;ici-là, le temps que nous ayons fini de la ranger. Après tout, il ne manquerait pour rien au monde ses croquettes du soir…',
		'n Comment tu veux que je me concentre sur le rangement alors que Jupiter est perdu, et peut-être en danger ? On n’a pas le temps pour ça ! Il faut le retrouver au plus vite !',
		'e C’est un chien, il peut retrouver son chemin tu sais. Jupiter et ses semblables sont des animaux très intelligents... Et tes parents me font confiance pour que ta chambre soit impeccable avant le dîner.',
		'n Donc tu me demandes de rester ici les bras croisés pendant que mon animal de compagnie adoré est peut-être blessé, ou même pire ? Elio, tu ne comprends vraiment rien aux humains ! Si quelque chose arrivait à Jupiter, je ne te le pardonnerais JAMAIS !',
		'hide image nina left with fadeOut',
		//elispe
		'show scene REPASSOIR with fadeIn',
		'',
		//cuisine repas du soir
		'show scene CUISINE with fadeIN',
		'show image elio right',
		'show image nina left',
		'n Qu’est-ce qu’on va faire si Juju ne revient pas ? Il n’a jamais quitté la maison sans nous ! Pourquoi est-ce qu’il s’est enfui ? Il ne m’aime plus ? Ou peut-être que quelqu’un l’a enlevé, ou même pire?',
		'e Nina ne dis pas de bêtises, voyons. Je suis sûre que tout va rentrer dans l’ordre, je te le promets. Pour quelles raisons Jupiter ne reviendrait-il pas ? Toi et tes parents lui donnez tout l’amour du monde, vous le rendez incroyablement heureux. Puis je crois que tu oublies quelque chose…Ce n’est pas n’importe quel chien, c’est LE chien de la famille. Crois-moi, je suis sûr qu’il va rentrer à la maison !',
		//nina triste
		'show scene NINA-TRISTE with fadeIN',
		'La fillette était inconsolable. Elio souhaitait plus que tout au monde pouvoir essuyer ses larmes, mais Nina continuait de clamer, sous le regard de ses parents attristés. Elle craignait que son chien ait été dognappé par de dangereux voleurs, en s&rsquo;imaginant même que ceux-ci pourraient lui demander une rançon en échange de sa libération.',
		//chambre nina heure du dodo
		'show scene CHAMBRE with fadeIN',
		'show image elio right',
		'show image nina left',
		'e Je te le promets. Nous irons le chercher ensemble demain. Jupiter doit encore être dans les environs. Nous pourrons aussi interroger les voisins, si tu le veux. Ce soir, il est un peu tard pour leur rendre visite. Il ne faudrait pas les importuner.',
		//elispe
		'show scene DODO with fadeIn',
		'',
		//recherche dans la ville
		'show scene SALON with fadeIn',
		'Le lendemain, les deux amis se lancèrent à la recherche du compagnon perdu, en commençant par récolter des indices qui pourraient les aider sur les conditions de sa disparition.',
		'Ses croquettes de la veille ne semblaient pas avoir bougées de sa gamelle. Ses jouets étaient toujours au même endroit, là où ils avaient été laissés, et aucun nouveau trou n’avait été creusé dans le jardin.',
		'Les deux chercheurs en herbe décidèrent de se rendre chez les voisins, afin de leur demander s’ils avaient des informations sur la disparition du canidé.',
		'Les Aldrin n&rsquo;avaient pas vu la moindre trace de Jupiter, tout comme les Terechkova qui avaient pourtant l&rsquo;habitude de l&rsquo;entendre aboyer. Ils se dirigèrent vers la maison des Armstrong.',
		'show scene ROBOTJARDINIER with fadeIn',
		'show image nina left with fadeIn',
		'n Monsieur ? Est-ce que Jupiter est revenu faire des trous dans votre jardin récemment ? Ou vous l’avez peut-être aperçu près des haies ? Où étiez-vous hier ? Vous avez-vu des gens suspects, comme des dognappeurs, traîner dans les environs ?',
		'r Je doit encore arroser les tulipes et les géraniums avant l&rsquo;arrivée de Mme Armstrong !',
		'Ne voulant pas l&rsquo;importuner plus longtemps, le duo décida d&rsquo;élargir son terrain de recherche.',
		'show scene RUE',
		'show image elio right',
		'show image nina left',
		'n Je comptais vraiment sur le robot jardinier pour qu’il nous donne des informations.',
		'e Ne t’inquiète pas, nous allons retracer son parcours, et nous allons le retrouver.',
		'Leur prochaine destination ne fut autre que le parc non loin de l’école primaire que fréquentait la jeune fille. Nina et Elio s’y étaient rendus la veille, afin de jouer au ballon avec les amis de la fillette.',
		'S&rsquo;ils n&rsquo;étaient pas allés au parc avant de rentrer à la maison, peut-être que Jupiter ne se serait pas enfui. Peut-être qu&rsquo;ils auraient regagné la maison avant qu&rsquo;il n’ait pu passer le portail. Ils seraient rentrés, auraient fermé le portail et passé du temps à jouer à attraper Jupiter, comme d’habitude. Et pourtant…',
		'n Attends, tu te souviens quand on a emmené Jupiter au parc pour jouer à la balle la semaine dernière ? Peut-être qu&rsquo;il a voulu y rejouer pendant mon absence ?',
		'show scene PARC',
		'Ce grand espace vert était en effet un lieu très prisé par les canidés du quartier et leurs maîtres. Ses étendues d’herbes et d’arbres étaient l’endroit parfait pour les laisser courir librement, et passer des moments complices.',
		'show image elio right',
		'show image nina left',
		'ne Jupiter ! Jupi ! Viens là mon chien ! Réponds !',
		'hide image elio right with fadeOut',
		'hide image nina left with fadeOut',
		'show scene TROU',
		'Un trou, dans un grillage éloigné du sentier, finit par attirer l’attention de la fillette.',
		'show image elio right',
		'show image nina left',
		'n Elio regarde ce trou dans la clôture !  Jupiter aurait pu entrer par ici, il est assez petit pour y passer sans problème. Je suis sûre qu’on peut aussi s’y faufiler ! Allez viens ! Il nous attend de l’autre côté !',
		'Nina n’attendit même pas la réponse du robot. Elle s’agenouilla près de l’entrée du passage, avant de commencer à ramper dans le trou, salissant sa salopette avec de l’herbe et de la terre par la même occasion.',
		'e Nina ! Tu ne peux pas entrer ici, ça peut être dangereux ! A-attends-moi ! ',
		'show scene TROUNINA',
		'Comme toujours, Elio n’eut d’autre choix que de suivre la jeune fille, à travers le grillage, puis la haie, espérant qu’aucun danger ne les attendait de l’autre côté.',
		//decharge
		'show scene DECHARGE',
		'Ils arrivèrent à l’arrière d’un grand hangar en briques rouges, surplombé par un toit métallique, que la pluie avait érodé au fil du temps. L’entrepôt était visiblement abandonné depuis un bon moment.',
		'La jeune fille entra finalement à l’intérieur d’un pas décidé. Le petit robot la suivit d’un pas bien moins confiant.',
		'Il y régnait une atmosphère pesante. Le vent, soufflant à travers les carcasses métalliques, créait un bruit crissant à faire frissonner les fils électriques du plus impassible des robots.',
		'Elio sentit une drôle de sensation, en s’introduisant dans ce qui était manifestement une décharge : une sensation qu’il ne pouvait décrire. Une charge électrique douloureuse, emplie de tristesse, parcourait ses circuits.',
		'Il se tenait debout. Autour de lui, des centaines de machines étaient entassées, ou peut-être des milliers. Détériorées par l’usage, le temps, et surtout l’abandon, elles étaient rouillées, s’étaient décomposées, et étaient devenues inutilisables…',
		'show image elio right',
		'show image nina left',
		'n Je ne connaissais pas cette zone…',
		'e Moi non plus, et j’ai l’impression que peu de gens la connaissent, ou y mettent encore les pieds. Les bureaux, que nous avons vu dehors, avaient les fenêtres cassées.',
		'hide image elio right with fadeOut',
		'hide image nina left with fadeOut',
		'Elio avança doucement, inspectant chaque plaque métallique, scrutant chaque pièce mécanique, examinant chaque carte électronique. Il imaginait quelles avaient pu être leurs fonctions et surtout quelles nouvelles technologies les avaient remplacées.',
		'Toutes ces machines avaient été des innovations, avant que de meilleures leurs succèdent. L’Homme pense, crée, innove, invente. Chaque année des progrès sont réalisés tant en médecine, que dans le milieu du travail.',
		'show image nina left',
		'n Regarde là-bas ! Celui-ci ne te rappelle pas quelque chose ?',
		'hide image nina left with fadeOut',
		'Ce dernier ressemblait trait pour trait au robot jardinier des Armstrong qu’ils avaient interrogé plus tôt dans la journée.',
		'Ceci signifiait que des humains avaient un jour offert une maison à ce robot, avaient utilisé ses services, et s’en étaient débarrassés lorsqu’un meilleur modèle était arrivé sur le marché, ou tout simplement qu’il avait perdu toute utilité à leurs yeux.',
		'show scene FONDELIO with fadeIn',
		'Elio était l’une de ses avancées spectaculaires : une de ces inventions qui bouleversent le monde, un robot intelligent doté d’émotions.',
		'show scene DECHARGE',
		'Alors qu’il parcourait les allées sinueuses du hangar, enjambant les restes de technologies passées, une idée terrifiante traversa son esprit. Et si chaque innovation était vouée à être détrônée par une autre ?',
		'Si chaque découverte ne créait seulement qu’un effet de mode éphémère ? Ce destin sera-t-il un jour celui d’Elio ? Le robot n’était pas dupe, et il savait qu’un jour Nina allait grandir, et que ses parents n’auraient plus besoin de lui pour veiller sur elle.',
		'Cependant, il avait toujours espéré, peut-être candidement, que sa présence était devenue indispensable pour la famille, et qu’ils le considéraient (presque) comme un membre à part entière du foyer.',
		'show image elio right',
		'show image nina left',
		'n J-je ne suis pas sûre que Jupiter ait pu rentrer ici... On regarde vite fait, et après dépêchons-nous de sortir de là, d’accord ',
		'Le petit robot fixa la décharge encore une fois. Il n’aurait jamais pensé qu’un tel endroit puisse exister. Comment est-ce que les humains avaient pu abandonner tous ces robots ? La plupart était des modèles qu’il croisait tous les jours dans les rues.',
		'show scene ZOOMCARTON with fadeIn',
		'show image elio right',
		'show image nina left',
		'n Oh ! Regarde Elio ! C’est quoi ces drôles de choses ? Ça a l’air vachement vieux ! Tu pense que ça, c’est les vieux trucs pour mettre les cartes bancaires ? Tu sais, comme ils avaient au 21ème siècle. J’ai vu ça à la télé avec papa, hier !',
		'e Selon mes données, il s’agit d’une « game boy ». Console portable de jeu vidéo de quatrième génération développée et fabriquée par Nintendo, une ancienne entreprise spécialisée dans la fabrication de consoles',
		'n Non, tu rigoles ? Waouh, c’est méga ancien ! Par contre, je ne comprends vraiment pas le principe d’insérer une carte bancaire dans une console.',
		'e Oh non, la fente servait en fait à insérer ce qu’ils appelaient des « cartouches ». Une cartouche équivalait à un jeu. En l’insérant dans la console, ils pouvaient ensuite jouer au jeu correspondant.',
		'n Dingue ! Je ne vois pas pourquoi on ne voit pas ça à l’école, ce serait quand même plus intéressant. Et pourquoi il y a un écran ?',
		'e A l’époque, il jouait sur des écrans. La réalité augmentée que nous utilisons est arrivée plus tard. Et leur premier prototype n’a rien à voir avec celle d’aujourd’hui. En fait, c’est à partir des années… Nina, tu m’écoutes ?',
		'La réponse était non. Se concentrer longuement sur les explications théoriques du robot cultivé, n’était pas vraiment le passe-temps favori de la fillette. Elle préférait s’affairer à des activités qu’elle trouvait plus divertissantes, telles que se jeter corps et âme dans un carton d’antiquités poussiéreuses.',
		'n J’ai trouvé autre chose !! C’est une sorte de… de…. Bah je sais pas en fait. ',
		'e Hmm…Bonne question…Je recherche l’information…',
		'Le clavier numérique d’Elio clignota. Signe que le robot était en pleine réflexion.',
		'e  Il s’agit de sacs à dos électroniques, installés sur le dos des pigeons, et s’adaptant à leur morphologie. Ils avaient pour vocation de mesurer la qualité de l’air de certaines grandes villes au 21ème siècle.',
		'n Ils ne pouvaient pas faire ça avec des drones ou des antennes spéciales ?',
		'e Si… Mais, le cerveau humain n’a fait qu’évoluer avec les années. De plus, la période où fut créé cet objet, a été marquée par un virus persistant. Les habitants ont dû rester enfermés pendant de longs mois.',
		'e Certains livres évoquent la folie et l’absurdité qui ont alors frappé les homo sapiens de ce siècle. C’est d’ailleurs assez effrayant à lire, dit Elio d’un air dubitatif. Donc, c’est vrai que certaines créations de tes ancêtres peuvent paraître… comment dire ? insensées ?',
		'show scene DECHARGE',
		'Nina hocha la tête, et perdit soudainement son intérêt pour le carton. Les deux amis poursuivirent donc leur expédition. ',
		'Elio était de plus en plus désemparé face à ce spectacle lugubre. Cette décharge était le cimetière de trésors historiques. Ces technologies avaient marqué des générations d’humains, et fait évoluer la société.',
		'Le petit robot était étonné que les Hommes, pourtant très attachés à leur patrimoine, et mettant un point d’honneur à le préserver, étaient les mêmes personnes qui avaient abandonné tous ces objets.',
		'show scene DECAHRGEPORTE',
		'Parcourant les allées tortueuses de l’entrepôt, les deux camarades arrivèrent finalement à l’entrée du bâtiment. Ils poussèrent ensemble la grande porte grinçante qui les séparaient de l’extérieur.',
		'show scene DECHARGE2',
		'Ils découvrirent là, un vaste terrain désert, où la nature avait repris ses droits. Les ronces avaient envahi les conteneurs. La mousse avait recouvert les véhicules délaissés, et les oiseaux s’étaient installés sous la toiture.',
		'Le caractère aventurier de Nina la fit courir vers les voitures abandonnées, ce qui, au passage, fit fuir tous les valeureux volatiles qui avaient osé y rester. Son premier réflexe avait été de s’installer sur le siège conducteur, de saisir le volant et de simuler, après examen d’Elio, une course poursuite.',
		'Celui-ci s’assit à côté d’elle sur le siège passager, et se prêta au jeu. Il était habitué aux folies de l’enfant.',
		'show scene VOITURE',
		'n Les méchants sont à nos trousses ! Vrrrrr. Vrrrr ! Passe-moi vite la carte qui est dans la boîte à gants, cher co-pilote !',
		'e La carte ?',
		'n La carte !!!',
		'e Euh oui, la carte !',
		'Il fouilla parmi les débris et la poussière afin de trouver quelque chose ressemblant approximativement à une carte. Chose qu’on ne voyait plus que dans les vieux films. Les humains aimaient la nostalgie du papier. Il trouva à la place des permis holographiques datant de 2121. Nina lui retira des mains.',
		'n Tiens, ils datent de cette année ! C’est bizarre comment sont-ils arrivés dans ce vieux tacot tout abîmé ?',
		'e En effet, c’est très étrange… On ne devrait peut-être pas s’éterniser dans les parages. Cet endroit ne me dit rien qui vaille. Allez Nina, rentrons à la maison, il se fait tard. Jupiter n’est clairement pas ici. Il est peut-être rentré à la maison entre-temps. Après tout, il n’est pas du genre à s’absenter longtemps.',
		'La jeune fille approuva. Les quelques distractions qu’elle avait su trouver l&rsquo;avaient bien amusée, mais le hangar la rendait toute de même mal à l’aise.',
		//retour
		'show scene RUE',
		'Une bonne partie du chemin du retour s’était déroulée dans un silence pesant, tandis que le soleil se couchait à l’horizon, illuminant le ciel de teintes orangées et rosées.',
		'Elio, lui, était perdu dans ses pensées, son disque dur se remplissant de milliers de questions.',
		'En effet, le petit robot s&rsquo;interrogeait anxieusement sur tout ce qu&rsquo;il avait vu dans cette décharge. Ces androïdes avaient, tout comme lui, été recueillis par des familles comme celle de Nina, puis jetés lorsque les humains avaient fait l’acquisition de modèles améliorés, ou n&rsquo;en avaient plus besoin.',
		'show image elio right',
		'show image nina left',
		'n Tu sais Elio... Tu n’es pas comme eux du tout...',
		'e Comme eux ?',
		'n Toi tu n’es pas qu’un robot, tu es mon ami ! On ne jette pas les amis !',
		'e Mais un jour tu vas grandir, et je ne pense pas que tes parents trouveront encore une utilité à un robot comme moi…',
		'n Papa et maman t’adorent ! Ils disent tout le temps que tu fais du bon travail ! Et puis, je n’aurai peut-être plus besoin d’une nounou quand je serai plus grande, mais j’aurai toujours besoin de mon meilleur ami ! Sinon, avec qui est-ce que je vivrais des aventures comme aujourd’hui ? ',
		'e Tu n’es pas trop triste de ne pas avoir retrouvé Jupiter aujourd’hui ? J’aurais aimé pouvoir te le ramener…',
		'n Bien sûr que si je suis triste, mais on ne va pas abandonner ! Demain, on y retourne ! Tu sais, Jupi ne va pas se laisser faire, il a du caractère ! Les voleurs ne perdent rien pour attendre ! On dirait pas comme ça, mais Jupiter est un combattant, tout comme moi !',
		'e On pourra aussi demander de l’aide à tes parents en rentrant. Les adultes collent souvent des affiches lorsqu’un animal est perdu, je suis certain qu’ils sont aussi tristes que toi. On pourra choisir ensemble une photo de Jupiter, comme ça les voisins pourront le reconnaître et appeler tes parents s’ils le retrouvent.',
		'n On aura qu’à promettre une récompense aussi ! Pourquoi pas un nouveau vélo tout neuf pour celui qui nous rapportera mon chien ! Ou encore des bonbons ! Tout le monde aime les bonbons ! Et pourquoi pas…',
		'e  Oui, oui, on pourra faire ça ! Après tout, peut-être qu’une récompense motivera quelqu’un à nous aider... Ah! Regarde, on est presque arrivés ! Je vois le portail du jardin, d’ici !',
		'show scene HALL',
		'Lorsque les deux compagnons passèrent la porte d’entrée, Elio ne put qu’espérer entendre Jupiter aboyer afin de célébrer le retour de Nina. Il n’en fut rien. Le silence régnait toujours dans la maison, car ni Jupiter, ni les parents de Nina n’étaient encore rentrés.',
		'show image elio right',
		'show image nina left',
		'e En attendant que tes parents rentrent, nous devrions nous occuper de ranger ta chambre, nous ne l’avons pas fait hier.',
		'n Oui oui... Mais avant, laisse-moi faire un tour dans le jardin.',
		'e  D’accord, mais dépêche-toi ! Je ne vais pas me faire avoir cette fois-ci, tu ne me feras pas ranger toute ta chambre tout seul !',
		'show scene CHAMBRE',
		'La chambre de la fillette était dans un état désolant. Plus rien n’était à sa place, des jouets et vêtements en tout genre jonchaient le sol au point que la moquette était devenue presque invisible sous ce désordre.',
		'Les tiroirs de la commode étaient tous ouverts, laissant s’échapper encore davantage de vêtements dépliés et jouets qui n’avaient rien à faire ici.',
		'Elio décida de commencer son grand nettoyage par la remise en état du lit de Nina, ce qui semblait être la tâche la plus simple, même s’il devait avant cela remettre en ordre la pile de peluches que la fillette laissait sur son lit.',
		'show image elio center',
		'e Comment c’est possible de mettre autant le bazar !',
		'hide image elio with fadeOut',
		'show image elio-lapinou center',
		'Au sommet de cette pile se trouvait Lapinou, la peluche fétiche de la petite fille. Elle l’avait depuis ses 2 mois. Il était dans un piètre état.',
		'Il lui manquait une oreille et une des pattes n’allait pas tarder à s’arracher, mais Elio saurait le rafistoler, comme toujours ! En déposant le doudou en dessous de son oreiller, il s&rsquo;aperçut qu’un petit bout de mousse venait de tomber.',
		'e Oh non... Un autre trou… ',
		'show scene LAPIFIAC',
		'Il ausculta Lapinou de tous les côtés pour reboucher le trou qui se trouvait dans le dos. En voulant remettre la mousse, Elio remarqua un petit papier rose plié en quatre. Il l&rsquo;ouvrit et commença la lecture :',
		'show scene LETTRE',
		'',
		'show scene NOIR',
		'show image elio-sad center',
		'Plus rien n’avait de sens, jusqu&rsquo;à ce que les pièces du puzzle finissent par s&rsquo;emboîter dans la tête du petit robot. Il dût enfin faire face à la réalité qu&rsquo;il avait, autrefois, enfoui au plus profond de son disque-dur.',
		'Nina n’était pas là. Elle n&rsquo;avait pas été là depuis si longtemps qu&rsquo;il commença à se demander si le souvenir qu&rsquo;il avait d&rsquo;elle était bien réel, ou si le temps l’avait déformé.',
		'show scene FONDELIO with fadeIn',
		'Alors, tous les souvenirs douloureux se bousculaient dans son système : les valises de la famille qui s&rsquo;emballent, les photos qui s&rsquo;enlèvent des murs, la voiture qui quitte l&rsquo;allée un matin, Nina qui fait un signe d&rsquo;adieu au petit robot. Et puis plus rien, à part un silence assourdissant.',
		'La petite Nina, comme tous les autres humains, avait quitté la Terre il y a des dizaines d’années, après que les scientifiques aient fait la plus grande découverte du 22ème siècle, si ce n’est de toute l&rsquo;Histoire de l’humanité.',
		'show scene DEPART with fadeIn',
		'Cent ans après les grands débats des années 2020 concernant le climat, une nouvelle planète habitable avait été découverte à une distance atteignable de la Terre. Bientôt les fusées avaient commencé à quitter la stratosphère, alors que la population commençait à construire une nouvelle société.',
		'Loin de tous les dommages qu&rsquo;ils avaient causés à l&rsquo;environnement de leur planète d’origine. En laissant la plupart de leurs possessions et constructions sur Terre, pour tout recommencer dans ce nouvel Eldorado.',
		'Ceci inclut les robots qu’ils avaient construit, afin de faciliter leur quotidien. Les parents de Nina n’avaient plus besoin d’Elio pour veiller sur elle, car une nouvelle vie les attendait.',
		'show scene FONDELIO with fadeIn',
		'Rien n&rsquo;était plus pareil. Le ciel s’assombrit, et la maison, autrefois remplie de cris et de rires joyeux, était devenue silencieuse. La joie avait disparu. Qui avait pensé que donner aux robots des sentiments similaires à ceux des humains serait une bonne idée ?',
		'Contrairement aux autres robots travaillant dans la maison, Elio ne pouvait pas reprendre les tâches pour lesquelles il était programmé, car sans Nina, il n&rsquo;avait aucun but, aucun intérêt.',
		'Quand le système d’Elio avait créé cette copie de Nina ? Quand a-t-il commencé à parler à cette image, à s&rsquo;occuper d&rsquo;elle comme comme une meilleure amie? Quand a-t-il perdu sa raison d’être ? Qu&rsquo;est-ce qu&rsquo;un robot nounou sans un enfant dont il doit prendre soin ?',
		'show scene NOIR with fadeIn',
		'show image elio-extinction center',
		'Une erreur système fatale est survenue. Le processeur est incapable de traiter les données. Surcharge. Dysfonctionnement de la carte-mère. Arrêt du système dans 3...........2.........1.',
		'show scene FIN2 with fadeIn',
		//fin
	]
});
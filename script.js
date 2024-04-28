

function cambiarIdioma() {
    var idiomaActual = document.documentElement.lang;
    var boton = document.querySelector('button');
    if (idiomaActual === 'it') {
        document.documentElement.lang = 'es';
        boton.textContent = 'Español';
        document.getElementById('Oracion').innerHTML = `Oración a Santa Maria Salome`;
        document.getElementById('Historia').innerHTML = `Salome, mujer evangelica`
        document.getElementById('textoStoria').innerHTML = `
        <p>Las principales noticias sobre Nuestra Santa las hallamos precisamente en los Evangelios Canónicos de Marcos y Mateo, donde la encontramos siguiendo al Maestro por las calles de Galilea, junto a sus dos hijos, Santiago y Juan.</p>
        <p>Es Ella, esposa de Zebedeo, quien le recomienda a Jesús sus hijos para que puedan tener los primeros lugares en el Reino.</p>
        <p>Y Ella está presente en el calvario, bajo la Cruz de Jesús, para estar cerca de María, su prima (... la hermana de su Madre ... en Jn. 19,25), y es siempre Ella quien está en el Sepulcro, el Domingo de Pascua, para constatar y anunciar la Resurrección del Señor.</p>
        <p>Es una de las piadosas mujeres que con el frasco de aromas se dirige al Sepulcro llorando, temprano por la mañana, para luego regresar llena de asombro y gran alegría para anunciar a los Apóstoles y a la humanidad que una visión de ángeles le ha revelado que el Maestro está vivo, ha resucitado, ha vencido a la muerte y al pecado.</p>
        <p>Misionera del resucitado, según antiguas testimonianzas, llegó a Italia, a Roma, para intentar ver a su hijo Juan, pero cansada de viajes y años se refugió en Veroli junto con algunos compañeros donde comenzó a difundir la buena nueva del Evangelio.</p>
        <p>Fue enterrada en un lugar seguro, cerca del lugar llamado Madonna degli Angeli, en espera de que sus restos mortales fueran encontrados y venerados.</p>
        <p>La tradición, omitiendo otras hipótesis, termina en 1209 y a partir de esta fecha comienza la historia con sus documentos.</p>
        <p>Tras continuas insistencias del piadoso Tomás, custodio de la antigua Iglesia de San Pedro (según otra tradición, en el lugar de esta antigua Iglesia Pedro se habría detenido de paso en Veroli ...), el Obispo Oddone ordenó una inspección oficial en el lugar inaccesible indicado por el custodio.</p>
        <p>El devoto Tomás, de hecho, había soñado varias veces con el mismo Príncipe de los Apóstoles, quien le revelaba el lugar exacto donde se conservaban los restos de Santa Salomé: un lugar casi inaccesible debido a la aspereza del terreno, situado fuera de las murallas urbanas y casi a pique sobre el valle debajo.</p>

        <p>El 25 de mayo de 1209, personas resistentes excavaron en el lugar indicado y, después de cierta altura, apareció la anhelada tumba entre la alegría y el regocijo de los presentes, incluidos el Obispo y el Abad de Casamari.</p>
        
        <p>El Sumo Pontífice Inocencio III fue informado del hallazgo del sagrado cuerpo por el Abad de Casamari, Giraldo, quien envió una detallada relación sobre los acontecimientos en ese lugar aislado, fuera del área urbana, escarpado e inhóspito, sobre el cual luego se erigió el primer oratorio, con un considerable gasto de fuerzas y energías.</p>
        
        <p>Hasta el día de hoy, bajo el Altar de la cripta, se puede acceder a ese lugar que hace 800 años revelaba a los devotos verolanos las reliquias de Salomé, identificadas por un antiguo pergamino cosido en el paño que envolvía los huesos: Maria Yacoby est. Es María de Santiago, la madre del apóstol que primero testificó a Cristo dando su propia vida.-</p>
        `;

        document.getElementById('textoStoria').style.textAlign = 'justify';

        document.getElementById('textoPreghiera').innerHTML = `<p>Con los aromas de delicada piedad <br> en la aurora de una mañana de primavera, <br> tu acudiste al sepulcro de Jesús de Nazaret <br> y encontraste el anuncio de una Vida eterna. <br> En el camino por las sendas del mundo, <br> como misionera del Maestro Resucitado, <br> llegaste entre nosotros. <br> Madre de la ciudad y de nuestra civilización, <br> junto al Lugar sagrado a Ti <br> te imploramos nuevamente: <br>'Cuéntanos, oh María Salomé, <br> ¿qué viste en el camino?'. <br> Como a los primeros hijos Verolanos <br> engendrados en la fe cristiana <br> cerca de la antigua Cona de San Mauro, <br> la Santa mirrofora anuncia aún: <br> 'La tumba del Cristo Viviente, <br> la gloria del Cristo Resucitado <br> y sus ángeles testigos, <br> el sudario y sus vestiduras. <br> ¡Cristo, mi esperanza, ha resucitado!' <br> Ayúdanos a todos a caminar siempre <br> en la fe del Señor Resucitado, <br> nuestra esperanza. Amen</p>`;
    } else {
        document.documentElement.lang = 'it';
        boton.textContent = 'Italiano';
        document.getElementById('textoStoria').innerHTML = `
    <p>Le notizie principali, sulla nostra santa, le troviamo proprio nei vangeli canonici di Marco e Matteo, dove la troviamo al seguito del Maestro per le vie di Galilea, insieme ai suoi due figli Giacomo e Giovanni.</p>
    <p>È lei, moglie di Zebedèo, a raccomandare a Gesù i suoi figli perché possano avere i primi posti nel Regno.</p>
    <p>E lei presente sul calvario, sotto la croce di Gesù, ad essere vicina a Maria, sua cugina (... la sorella di sua Madre ... in Gv. 19,25), ed è sempre lei al sepolcro, la domenica di Pasqua, a constatare e annunciare la risurrezione del Signore.</p>
    <p>È una delle pie donne che con il vaso degli aromi si reca al sepolcro piangendo, di buon mattino, per poi tornare piena di stupore e gioia grande ad annunciare agli apostoli e all'umanità che una visione di angeli le ha rivelato che il Maestro è vivo, è risorto, ha vinto la morte e il peccato.</p>
    <p>Missionaria del risorto, secondo antichissime testimonianze, giunse in Italia, a Roma, per cercare di rivedere suo figlio Giovanni, ma stanca di viaggi e di anni si rifugiò in Veroli insieme ad alcuni compagni dove incominciò a diffonde la buona novella del Vangelo.</p>
    <p>Fu sepolta in un luogo sicuro, presso la località Madonna degli Angeli, nell'attesa che le sue spoglie mortali venissero ritrovate e venerate.</p>
    <p>La tradizione, omettendo altre ipotesi, termina nel 1209 e da questa data incomincia la storia con i suoi documenti.</p>
    <p>Dietro continue insistenze del pio Tommaso, custode dell'antica chiesa di S. Pietro (secondo un'altra tradizione, sul luogo di questa antica chiesa Pietro si sarebbe fermato ospite nel suo passaggio in Veroli ...) il vescovo Oddone fece fare una ispezione ufficiale sul luogo impervio indicato dal custode.</p>
    <p>Il pio Tommaso, infatti, aveva sognato più volte lo stesso Principe degli Apostoli che gli rivelava il luogo esatto ove erano conservate le spoglie di Santa Salome: un luogo quasi inaccessibile per l'asperità del territorio, posto fuori le mura urbane e quasi a strapiombo sulla vallata sottostante.</p>
    <p>Persone robuste, il 25 maggio 1209, scavarono nel punto indicato e dopo una certa altezza usci fuori il desiderato avello tra la gioia e l'esultanza dei presenti, compresi il vescovo e l'abate di Casamari.</p>
    <p>Lo stesso Sommo Pontefice Innocenzo III venne informato del ritrovamento del sacro corpo dall'abate di Casamari Giraldo, il quale spedi una dettagliata relazione circa i fatti accaduti in quel luogo isolato, fuori dell'abitato cittadino, scosceso e inospitale, sul quale fu poi innalzato il primo oratorio, con non lieve dispendio di forze ed energie.</p>
    <p>Ancora oggi sotto l'altare della cripta si può accedere a quel luogo che 800 anni fa rivelava ai devoti verolani le reliquie di Salome, identificate da una antica pergamena cucita nel panno che avvolgeva le ossa: Maria Yacoby est. È Maria di Giacomo, la madre dell'apostolo che per primo ha testimoniato Cristo donando la propria vita!</p>
`;


        document.getElementById('textoPreghiera').innerHTML = `<p>Con gli aromi di delicata pietà<br>
        su l'alba d'un mattino di primavera <br>
        tu accorresti al sepolcro di Gesù di Nazaret <br>
        e incontrasti l'annuncio di una Vita perenne. <br>
   
        In cammino sulle vie del mondo <br>
        Missionaria del Maestro Risorto <br>
        giungesti tra noi. <br>
 
        Madre della città e della nostra civiltà <br>
        presso il Luogo sacro a Te <br>
        imploriamo ancora: <br>
        "Raccontaci o Maria Salome,<br>
        che hai visto sulla via?".<br>

        Come ai primi figli Verolani<br>
        generati nella fede cristiana<br>
        presso l'antica Cona di S. Mauro<br>
        la Santa mirrofora annuncia ancora:<br>
        "La tomba del Cristo Vivente<br>
        la gloria del Cristo Risorto<br>
        e gli angeli suoi testimoni<br>
        il sudario e le sue vesti.<br>
        Cristo, mia speranza, è risorto"<br>

        Aiutaci tutti a camminare sempre<br>
        nella fede del Signore Risorto<br>
        speranza nostra.</p>`;
    }
}

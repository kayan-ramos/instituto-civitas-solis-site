const fs = require("fs");
const path = require("path");

const root = process.cwd();
const inputName = "index-i18n-selector-d9754a4.js";
const outputName = "index-i18n-stable-8f6c2d1.js";
const input = path.join(root, "assets", inputName);
const outputAssets = path.join(root, "assets", outputName);
const outputDist = path.join(root, "dist", "assets", outputName);

const source = fs.readFileSync(input, "utf8");
const start = source.indexOf(";(()=>{const dictionaries=");
const end = source.indexOf("Wd(document.getElementById");

if (start < 0 || end < 0 || end <= start) {
  throw new Error("Could not find the existing i18n runtime block.");
}

const dictStart = source.indexOf("const dictionaries=", start) + "const dictionaries=".length;
const dictEnd = source.indexOf(";const langMeta=", dictStart);
const existing = JSON.parse(source.slice(dictStart, dictEnd));

const additions = {
  en: {
    "© 2026 Instituto Civitas Solis": "© 2026 Civitas Solis Institute",
    "Menu": "Menu",
    "Siga-nos": "Follow us",
    "Nossa missão transcende fronteiras geográficas e culturais, conectando corações e mentes em busca de uma consciência planetária unificada.": "Our mission transcends geographical and cultural borders, connecting hearts and minds in search of a unified planetary consciousness.",
    "Nossa missão": "Our mission",
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.": "To internationally foster integral human development in its material, emotional, rational and spiritual aspects, individually through self-development and collectively through culture, promoting dialogue and an open space for encounter.",
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.": "To become a reference in the national landscape and begin internationalization through activities that foster the integral development of the human being, individually and collectively. To be an attracting hub for specialists and opinion leaders in an open dialogue between different views, aiming at constructive collaboration.",
    "Uma Visão Planetária": "A Planetary Vision",
    "Nosso trabalho global se manifesta através de diversas iniciativas que buscam promover a evolução da consciência humana em escala planetária:": "Our global work takes shape through several initiatives that seek to promote the evolution of human consciousness on a planetary scale:",
    "O Instituto Civitas Solis reconhece que os desafios contemporâneos da humanidade são de natureza global e requerem soluções que transcendam as divisões tradicionais entre nações, culturas e tradições espirituais. Nosso trabalho é fundamentado na compreensão de que existe uma unidade subjacente que conecta todos os seres e que a verdadeira transformação social só pode ocorrer através do despertar dessa consciência universal.": "The Civitas Solis Institute recognizes that humanity's contemporary challenges are global in nature and require solutions that transcend traditional divisions between nations, cultures and spiritual traditions. Our work is grounded in the understanding that there is an underlying unity connecting all beings, and that true social transformation can only occur through the awakening of this universal consciousness.",
    "Através de publicações multilíngues, conferências internacionais, workshops transformacionais e plataformas digitais, alcançamos pessoas em todos os continentes, oferecendo ferramentas práticas para o desenvolvimento pessoal e a transformação social positiva.": "Through multilingual publications, international conferences, transformational workshops and digital platforms, we reach people on every continent, offering practical tools for personal development and positive social transformation.",
    "Através de uma abordagem integral que honra tanto a diversidade cultural quanto os princípios universais da sabedoria perene, trabalhamos para construir pontes entre Oriente e Ocidente, entre tradição e modernidade, entre ciência e espiritualidade.": "Through an integral approach that honors both cultural diversity and the universal principles of perennial wisdom, we work to build bridges between East and West, between tradition and modernity, between science and spirituality.",
    "Intercâmbio Cultural": "Cultural Exchange",
    "Facilitamos o intercâmbio de conhecimentos entre diferentes tradições culturais e espirituais, promovendo o diálogo inter-religioso e intercultural.": "We facilitate the exchange of knowledge between different cultural and spiritual traditions, promoting interreligious and intercultural dialogue.",
    "Iniciativas Transformadoras": "Transformative Initiatives",
    "Desenvolvemos programas educacionais que integram conhecimento intelectual, desenvolvimento emocional e crescimento espiritual.": "We develop educational programs that integrate intellectual knowledge, emotional development and spiritual growth.",
    "Impacto e Perspectivas Futuras": "Impact and Future Perspectives",
    "Nosso trabalho global já tocou a vida de milhares de pessoas em dezenas de países, contribuindo para o despertar de uma nova geração de líderes conscientes e agentes de transformação. Vemos evidências crescentes de que uma nova consciência planetária está emergindo, uma consciência que reconhece a interconexão fundamental de toda vida e a necessidade urgente de cooperação global.": "Our global work has already touched the lives of thousands of people in dozens of countries, contributing to the awakening of a new generation of conscious leaders and agents of transformation. We see growing evidence that a new planetary consciousness is emerging, one that recognizes the fundamental interconnection of all life and the urgent need for global cooperation.",
    "Olhando para o futuro, continuamos expandindo nossa rede de parceiros internacionais, desenvolvendo novas tecnologias educacionais e criando espaços cada vez mais inclusivos para o diálogo entre diferentes tradições de sabedoria. Nossa visão é de um mundo onde a sabedoria perene informe as decisões globais e onde a espiritualidade autêntica seja reconhecida como fundamental para o bem-estar da humanidade e do planeta.": "Looking to the future, we continue to expand our network of international partners, develop new educational technologies and create increasingly inclusive spaces for dialogue between different wisdom traditions. Our vision is of a world where perennial wisdom informs global decisions and where authentic spirituality is recognized as fundamental to the well-being of humanity and the planet.",
    "Esta parceria exemplifica nosso compromisso com a cooperação internacional no campo dos estudos filosóficos e espirituais. Juntos, desenvolvemos projetos de pesquisa, eventos educacionais e publicações que contribuem para a compreensão mais profunda das tradições de sabedoria da humanidade.": "This partnership exemplifies our commitment to international cooperation in philosophical and spiritual studies. Together, we develop research projects, educational events and publications that contribute to a deeper understanding of humanity's wisdom traditions.",
    "Junte-se à Nossa Missão": "Join Our Mission",
    "Explora os padrões energéticos mediante os quais todas as formas foram criadas com base na unidade (J. Zatón)": "Explores the energetic patterns through which all forms were created on the basis of unity (J. Zatón)",
    "Explora um livro de doze especialistas que contam, como um grande mosaico, a história da Gnose Ocidental": "Explores a book by twelve specialists who tell, like a great mosaic, the story of Western Gnosis",
    "Movimento cristão ascético (1100–1200), influenciado por paulicianos e bogomilos.": "Ascetic Christian movement (1100-1200), influenced by Paulicians and Bogomils.",
    "Entrevistas realizadas pelo Instituto Civitas Solis sobre diversos temas e com diversos convidados!": "Interviews conducted by the Civitas Solis Institute on various topics with many guests.",
    "A Renascença Oculta": "The Hidden Renaissance",
    "Redescobrindo os Mistérios Herméticos que Transformaram o Mundo": "Rediscovering the Hermetic Mysteries that Transformed the World",
    "Uma jornada fascinante através dos conhecimentos secretos que influenciaram os grandes mestres da Renascença, revelando como a sabedoria hermética moldou nossa civilização moderna.": "A fascinating journey through the secret knowledge that influenced the great masters of the Renaissance, revealing how Hermetic wisdom shaped our modern civilization.",
    "Comprar Agora": "Buy Now",
    "Assistir Explicação": "Watch Explanation",
    "(4.8/5 - 127 avaliações)": "(4.8/5 - 127 reviews)",
    "Sobre o Livro": "About the Book",
    "Este não é apenas um livro de história, mas um convite à reflexão sobre como os conhecimentos perenes podem informar nossa busca contemporânea por significado e transformação. Uma obra essencial para estudantes de filosofia, história da arte, esoterismo occidental e todos aqueles interessados em compreender as raízes ocultas de nossa civilização.": "This is not just a history book, but an invitation to reflect on how perennial knowledge can inform our contemporary search for meaning and transformation. An essential work for students of philosophy, art history, Western esotericism and all those interested in understanding the hidden roots of our civilization.",
    "O que você descobrirá:": "What you will discover:",
    "• As sociedades secretas por trás da Renascença": "• The secret societies behind the Renaissance",
    "• Símbolos herméticos nas obras de arte": "• Hermetic symbols in works of art",
    "• A influência da Cabala cristã": "• The influence of Christian Kabbalah",
    "• Alquimia e transformação espiritual": "• Alchemy and spiritual transformation",
    "• Conexões com tradições orientais": "• Connections with Eastern traditions",
    "Características:": "Features:",
    "• 320 páginas ricamente ilustradas": "• 320 richly illustrated pages",
    "• Mais de 100 imagens em cores": "• More than 100 color images",
    "• Capa dura com acabamento premium": "• Hardcover with premium finish",
    "• Bibliografia extensa": "• Extensive bibliography",
    "• Índice remissivo completo": "• Complete index",
    "Comprar na Loja Oficial": "Buy from the Official Store",
    "Garanta já o seu exemplar": "Get your copy now",
    "Mergulhe nos mistérios da Renascença e descubra os segredos que transformaram o mundo.": "Dive into the mysteries of the Renaissance and discover the secrets that transformed the world.",
    "Nossa missão transcende fronteiras geográficas e culturais, conectando corações e mentes em busca de uma consciência planetária unificada.": "Our mission transcends geographical and cultural boundaries, connecting hearts and minds in search of a unified planetary consciousness.",
    "Nosso trabalho global se manifesta através de diversas iniciativas que buscam promover a evolução da consciência humana em escala planetária:": "Our global work takes shape through several initiatives that seek to promote the evolution of human consciousness on a planetary scale:",
    "Uma Visão Planetária": "A Planetary Vision",
    "Intercâmbio Cultural": "Cultural Exchange",
    "Iniciativas Transformadoras": "Transformative Initiatives",
    "Impacto e Perspectivas Futuras": "Impact and Future Perspectives",
    "Através de publicações multilíngues, conferências internacionais, workshops transformacionais e plataformas digitais, alcançamos pessoas em todos os continentes, oferecendo ferramentas práticas para o desenvolvimento pessoal e a transformação social positiva.": "Through multilingual publications, international conferences, transformational workshops and digital platforms, we reach people on every continent, offering practical tools for personal development and positive social transformation.",
    "Através de uma abordagem integral que honra tanto a diversidade cultural quanto os princípios universais da sabedoria perene, trabalhamos para construir pontes entre Oriente e Ocidente, entre tradição e modernidade, entre ciência e espiritualidade.": "Through an integral approach that honors both cultural diversity and the universal principles of perennial wisdom, we work to build bridges between East and West, tradition and modernity, science and spirituality.",
    "Facilitamos o intercâmbio de conhecimentos entre diferentes tradições culturais e espirituais, promovendo o diálogo inter-religioso e intercultural.": "We facilitate the exchange of knowledge between different cultural and spiritual traditions, promoting interreligious and intercultural dialogue.",
    "Desenvolvemos programas educacionais que integram conhecimento intelectual, desenvolvimento emocional e crescimento espiritual.": "We develop educational programs that integrate intellectual knowledge, emotional development and spiritual growth.",
    "Esta parceria exemplifica nosso compromisso com a cooperação internacional no campo dos estudos filosóficos e espirituais. Juntos, desenvolvemos projetos de pesquisa, eventos educacionais e publicações que contribuem para a compreensão mais profunda das tradições de sabedoria da humanidade.": "This partnership exemplifies our commitment to international cooperation in the field of philosophical and spiritual studies. Together, we develop research projects, educational events and publications that contribute to a deeper understanding of humanity's wisdom traditions.",
    "Nosso trabalho global já tocou a vida de milhares de pessoas em dezenas de países, contribuindo para o despertar de uma nova geração de líderes conscientes e agentes de transformação. Vemos evidências crescentes de que uma nova consciência planetária está emergindo, uma consciência que reconhece a interconexão fundamental de toda vida e a necessidade urgente de cooperação global.": "Our global work has already touched the lives of thousands of people in dozens of countries, contributing to the awakening of a new generation of conscious leaders and agents of transformation. We see growing evidence that a new planetary consciousness is emerging, one that recognizes the fundamental interconnection of all life and the urgent need for global cooperation.",
    "O Instituto Civitas Solis reconhece que os desafios contemporâneos da humanidade são de natureza global e requerem soluções que transcendam as divisões tradicionais entre nações, culturas e tradições espirituais. Nosso trabalho é fundamentado na compreensão de que existe uma unidade subjacente que conecta todos os seres e que a verdadeira transformação social só pode ocorrer através do despertar dessa consciência universal.": "The Civitas Solis Institute recognizes that humanity's contemporary challenges are global in nature and require solutions that transcend traditional divisions between nations, cultures and spiritual traditions. Our work is grounded in the understanding that there is an underlying unity connecting all beings and that true social transformation can only occur through the awakening of this universal consciousness.",
    "Olhando para o futuro, continuamos expandindo nossa rede de parceiros internacionais, desenvolvendo novas tecnologias educacionais e criando espaços cada vez mais inclusivos para o diálogo entre diferentes tradições de sabedoria. Nossa visão é de um mundo onde a sabedoria perene informe as decisões globais e onde a espiritualidade autêntica seja reconhecida como fundamental para o bem-estar da humanidade e do planeta.": "Looking to the future, we continue expanding our network of international partners, developing new educational technologies and creating increasingly inclusive spaces for dialogue between different wisdom traditions. Our vision is of a world where perennial wisdom informs global decisions and authentic spirituality is recognized as fundamental to the well-being of humanity and the planet.",
    "Junte-se à Nossa Missão": "Join Our Mission",
    "Imprensa e Mídia": "Press and Media",
    "Parcerias e Colaborações": "Partnerships and Collaborations",
    "Interessado em estabelecer parcerias acadêmicas, culturais ou espirituais? Entre em contato conosco para explorar oportunidades de colaboração.": "Interested in establishing academic, cultural or spiritual partnerships? Contact us to explore collaboration opportunities.",
    "Para solicitações de entrevistas, materiais de imprensa ou informações para mídia, utilize nosso canal dedicado.": "For interview requests, press materials or media information, use our dedicated channel.",
    "Mensagem simulada com sucesso!": "Message simulated successfully!",
    "Este formulário simula o envio de e-mail. A integração real poderá ser conectada posteriormente.": "This form simulates sending an email. The real integration can be connected later.",
    "Ver mais no Instagram": "See more on Instagram",
    "Redescobrindo os Mistérios Herméticos que Transformaram o Mundo": "Rediscovering the Hermetic Mysteries that Transformed the World",
    "Uma jornada fascinante através dos conhecimentos secretos que influenciaram os grandes mestres da Renascença, revelando como a sabedoria hermética moldou nossa civilização moderna.": "A fascinating journey through the secret knowledge that influenced the great masters of the Renaissance, revealing how Hermetic wisdom shaped our modern civilization.",
    "O que dizem os leitores": "What readers say",
    "— Dr. Maria Santos, Historiadora": "— Dr. Maria Santos, Historian",
    "— Prof. João Silva, Filosofia": "— Prof. João Silva, Philosophy",
    "— Ana Costa, Leitora": "— Ana Costa, Reader",
    "parcerias@civitassolis.org.br": "parcerias@civitassolis.org.br",
    "imprensa@civitassolis.org.br": "imprensa@civitassolis.org.br",
    "contato@civitassolis.org.br": "contato@civitassolis.org.br"
  },
  es: {
    "© 2026 Instituto Civitas Solis": "© 2026 Instituto Civitas Solis",
    "Menu": "Menú",
    "Siga-nos": "Síguenos",
    "Acompanhe nossa jornada diária de descobertas e reflexões sobre filosofia, cultura e espiritualidade.": "Acompaña nuestro recorrido diario de descubrimientos y reflexiones sobre filosofía, cultura y espiritualidad.",
    "Acompanhe nossas últimas postagens diretamente do perfil @institutocivitassolis": "Sigue nuestras publicaciones más recientes directamente desde el perfil @institutocivitassolis",
    "Através de palestras, entrevistas e conteúdos educacionais, buscamos contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.": "A través de conferencias, entrevistas y contenidos educativos, buscamos contribuir al despertar de una nueva conciencia planetaria, basada en la sabiduría ancestral y los descubrimientos contemporáneos.",
    "Através de publicações, palestras, workshops e projetos culturais, trabalhamos para disseminar conhecimentos que possam transformar positivamente a vida das pessoas e da sociedade como um todo.": "A través de publicaciones, conferencias, talleres y proyectos culturales, trabajamos para difundir conocimientos que puedan transformar positivamente la vida de las personas y de la sociedad en su conjunto.",
    "Construímos pontes entre culturas, tradições e formas de conhecimento.": "Construimos puentes entre culturas, tradiciones y formas de conocimiento.",
    "Conteúdos sobre filosofia, cultura e espiritualidade para uma nova consciência planetária": "Contenidos sobre filosofía, cultura y espiritualidad para una nueva conciencia planetaria",
    "Cultivamos a expressão artística como forma de despertar a beleza, a sensibilidade e a percepção simbólica da experiência humana.": "Cultivamos la expresión artística como forma de despertar la belleza, la sensibilidad y la percepción simbólica de la experiencia humana.",
    "Desenvolvemos iniciativas que integram conhecimento, sensibilidade e transformação interior.": "Desarrollamos iniciativas que integran conocimiento, sensibilidad y transformación interior.",
    "Embassy of the Free Mind": "Embassy of the Free Mind",
    "Entrevistas realizadas pelo Instituto Civitas Solis sobre diversos temas e com diversos convidados!": "Entrevistas realizadas por el Instituto Civitas Solis sobre diversos temas y con diversos invitados.",
    "Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos.": "Establecemos cooperaciones para ampliar el alcance de proyectos culturales y filosóficos.",
    "Estamos aqui para ouvir você. Compartilhe suas ideias, dúvidas ou interesse em nossos projetos.": "Estamos aquí para escucharte. Comparte tus ideas, dudas o interés en nuestros proyectos.",
    "Explore nosso conteúdo mais recente sobre filosofia, espiritualidade e desenvolvimento humano": "Explora nuestro contenido más reciente sobre filosofía, espiritualidad y desarrollo humano",
    "Exploramos as fronteiras do conhecimento científico, integrando descobertas modernas com sabedorias ancestrais.": "Exploramos las fronteras del conocimiento científico, integrando descubrimientos modernos con sabidurías ancestrales.",
    "Feed Oficial do Instagram": "Feed Oficial de Instagram",
    "Fundado com o propósito de promover a síntese entre ciência, arte e espiritualidade, nosso instituto busca contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.": "Fundado con el propósito de promover la síntesis entre ciencia, arte y espiritualidad, nuestro instituto busca contribuir al despertar de una nueva conciencia planetaria, basada en la sabiduría ancestral y los descubrimientos contemporáneos.",
    "Inscreva-se no canal e ative o sino para receber notificações de novos conteúdos": "Suscríbete al canal y activa la campana para recibir notificaciones de nuevos contenidos",
    "O canal do YouTube do Instituto Civitas Solis é dedicado à disseminação de conhecimentos sobre filosofia perene, tradições espirituais e o desenvolvimento integral do ser humano.": "El canal de YouTube del Instituto Civitas Solis está dedicado a difundir conocimientos sobre filosofía perenne, tradiciones espirituales y el desarrollo integral del ser humano.",
    "O Instituto Civitas Solis é uma organização filosófico-cultural e sem fins lucrativos dedicada ao desenvolvimento humano integral através do estudo e da prática dos conhecimentos perenes da humanidade.": "El Instituto Civitas Solis es una organización filosófico-cultural sin fines de lucro dedicada al desarrollo humano integral mediante el estudio y la práctica de los conocimientos perennes de la humanidad.",
    "Temos a honra de manter uma parceria estratégica com a Embassy of the Free Mind, uma organização internacional dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos occidentais. Esta colaboração nos permite expandir nosso alcance e impacto, conectando-nos com uma rede global de pesquisadores, filósofos e buscadores da verdade.": "Tenemos el honor de mantener una alianza estratégica con Embassy of the Free Mind, una organización internacional dedicada a la preservación y difusión de la tradición hermética y de los conocimientos esotéricos occidentales. Esta colaboración nos permite ampliar nuestro alcance e impacto, conectándonos con una red global de investigadores, filósofos y buscadores de la verdad.",
    "Explora os padrões energéticos mediante os quais todas as formas foram criadas com base na unidade (J. Zatón)": "Explora los patrones energéticos mediante los cuales todas las formas fueron creadas con base en la unidad (J. Zatón)",
    "Explora um livro de doze especialistas que contam, como um grande mosaico, a história da Gnose Ocidental": "Explora un libro de doce especialistas que cuentan, como un gran mosaico, la historia de la Gnosis Occidental",
    "Movimento cristão ascético (1100–1200), influenciado por paulicianos e bogomilos.": "Movimiento cristiano ascético (1100-1200), influenciado por paulicianos y bogomilos.",
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.": "Fomentar internacionalmente el desarrollo humano integral en sus aspectos material, emocional, racional y espiritual, individualmente mediante el autodesarrollo y colectivamente mediante la cultura, promoviendo el diálogo y un espacio abierto de encuentro.",
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.": "Convertirse en referencia en el escenario nacional e iniciar la internacionalización con actividades que propicien el desarrollo integral del ser humano, en su aspecto individual y colectivo. Ser un polo de atracción para especialistas y formadores de opinión para un diálogo abierto entre visiones distintas, orientado a la colaboración constructiva."
  },
  fr: {
    "© 2026 Instituto Civitas Solis": "© 2026 Institut Civitas Solis",
    "Menu": "Menu",
    "Siga-nos": "Suivez-nous",
    "Filosofia, Cultura e Espiritualidade para uma Nova Consciência": "Philosophie, Culture et Spiritualité pour une Nouvelle Conscience",
    "Filosofia, Cultura e Espiritualidade para uma Nova Consciência.": "Philosophie, Culture et Spiritualité pour une Nouvelle Conscience.",
    "Explore nossos conteúdos sobre filosofia, cultura e espiritualidade.": "Explorez nos contenus sur la philosophie, la culture et la spiritualité.",
    "Vídeos atualizados automaticamente do canal oficial": "Vidéos mises à jour automatiquement depuis la chaîne officielle",
    "Preencha os campos abaixo enviar um e-mail ao Instituto Civitas Solis": "Remplissez les champs ci-dessous pour envoyer un e-mail à l'Institut Civitas Solis",
    "Remetente / seu e-mail *": "Expéditeur / votre e-mail *",
    "Assunto *": "Sujet *",
    "Mensagem *": "Message *",
    "E-mail": "E-mail",
    "Horário": "Horaires",
    "Segunda a Sexta": "Du lundi au vendredi",
    "9h às 18h": "9 h à 18 h",
    "Outras Formas de Conexão": "Autres formes de connexion",
    "Sete princípios fundamentais que guiam todas as nossas ações e decisões.": "Sept principes fondamentaux guident toutes nos actions et décisions.",
    "Últimas Postagens do Instagram": "Dernières publications Instagram",
    "Seguir no Instagram": "Suivre sur Instagram",
    "Junte-se à Nossa Comunidade": "Rejoignez notre communauté",
    "Acompanhe nossa jornada diária de descobertas e reflexões sobre filosofia, cultura e espiritualidade.": "Suivez notre parcours quotidien de découvertes et de réflexions sur la philosophie, la culture et la spiritualité.",
    "Acompanhe nossas últimas postagens diretamente do perfil @institutocivitassolis": "Suivez nos dernières publications directement depuis le profil @institutocivitassolis",
    "Através de palestras, entrevistas e conteúdos educacionais, buscamos contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.": "À travers des conférences, des entretiens et des contenus éducatifs, nous cherchons à contribuer à l'éveil d'une nouvelle conscience planétaire, fondée sur la sagesse ancestrale et les découvertes contemporaines.",
    "Através de publicações, palestras, workshops e projetos culturais, trabalhamos para disseminar conhecimentos que possam transformar positivamente a vida das pessoas e da sociedade como um todo.": "À travers des publications, des conférences, des ateliers et des projets culturels, nous travaillons à diffuser des connaissances capables de transformer positivement la vie des personnes et de la société dans son ensemble.",
    "Construímos pontes entre culturas, tradições e formas de conhecimento.": "Nous construisons des ponts entre les cultures, les traditions et les formes de connaissance.",
    "Conteúdos sobre filosofia, cultura e espiritualidade para uma nova consciência planetária": "Contenus sur la philosophie, la culture et la spiritualité pour une nouvelle conscience planétaire",
    "Cultivamos a expressão artística como forma de despertar a beleza, a sensibilidade e a percepção simbólica da experiência humana.": "Nous cultivons l'expression artistique comme moyen d'éveiller la beauté, la sensibilité et la perception symbolique de l'expérience humaine.",
    "Desenvolvemos iniciativas que integram conhecimento, sensibilidade e transformação interior.": "Nous développons des initiatives qui intègrent connaissance, sensibilité et transformation intérieure.",
    "Promovemos o desenvolvimento espiritual através do estudo das tradições filosóficas universais e da busca por sentido interior.": "Nous promouvons le développement spirituel à travers l'étude des traditions philosophiques universelles et la recherche de sens intérieur.",
    "Embassy of the Free Mind": "Embassy of the Free Mind",
    "Entrevistas realizadas pelo Instituto Civitas Solis sobre diversos temas e com diversos convidados!": "Entretiens réalisés par l'Institut Civitas Solis sur différents thèmes avec divers invités.",
    "Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos.": "Nous établissons des coopérations pour élargir la portée de projets culturels et philosophiques.",
    "Estamos aqui para ouvir você. Compartilhe suas ideias, dúvidas ou interesse em nossos projetos.": "Nous sommes là pour vous écouter. Partagez vos idées, vos questions ou votre intérêt pour nos projets.",
    "Explore nosso conteúdo mais recente sobre filosofia, espiritualidade e desenvolvimento humano": "Explorez nos contenus les plus récents sur la philosophie, la spiritualité et le développement humain",
    "Exploramos as fronteiras do conhecimento científico, integrando descobertas modernas com sabedorias ancestrais.": "Nous explorons les frontières de la connaissance scientifique, en intégrant les découvertes modernes aux sagesses ancestrales.",
    "Feed Oficial do Instagram": "Fil Instagram officiel",
    "Fundado com o propósito de promover a síntese entre ciência, arte e espiritualidade, nosso instituto busca contribuir para o despertar de uma nova consciência planetária, baseada na sabedoria ancestral e nas descobertas contemporâneas.": "Fondé dans le but de promouvoir la synthèse entre science, art et spiritualité, notre institut cherche à contribuer à l'éveil d'une nouvelle conscience planétaire, fondée sur la sagesse ancestrale et les découvertes contemporaines.",
    "Inscreva-se no canal e ative o sino para receber notificações de novos conteúdos": "Abonnez-vous à la chaîne et activez la cloche pour recevoir les notifications des nouveaux contenus",
    "O canal do YouTube do Instituto Civitas Solis é dedicado à disseminação de conhecimentos sobre filosofia perene, tradições espirituais e o desenvolvimento integral do ser humano.": "La chaîne YouTube de l'Institut Civitas Solis est consacrée à la diffusion de connaissances sur la philosophie pérenne, les traditions spirituelles et le développement intégral de l'être humain.",
    "O Instituto Civitas Solis é uma organização filosófico-cultural e sem fins lucrativos dedicada ao desenvolvimento humano integral através do estudo e da prática dos conhecimentos perenes da humanidade.": "L'Institut Civitas Solis est une organisation philosophico-culturelle à but non lucratif dédiée au développement humain intégral à travers l'étude et la pratique des connaissances pérennes de l'humanité.",
    "Temos a honra de manter uma parceria estratégica com a Embassy of the Free Mind, uma organização internacional dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos occidentais. Esta colaboração nos permite expandir nosso alcance e impacto, conectando-nos com uma rede global de pesquisadores, filósofos e buscadores da verdade.": "Nous avons l'honneur de maintenir un partenariat stratégique avec Embassy of the Free Mind, une organisation internationale dédiée à la préservation et à la diffusion de la tradition hermétique et des connaissances ésotériques occidentales. Cette collaboration nous permet d'élargir notre portée et notre impact, en nous reliant à un réseau mondial de chercheurs, de philosophes et de quêteurs de vérité.",
    "Explora os padrões energéticos mediante os quais todas as formas foram criadas com base na unidade (J. Zatón)": "Explore les motifs énergétiques par lesquels toutes les formes ont été créées à partir de l'unité (J. Zatón)",
    "Explora um livro de doze especialistas que contam, como um grande mosaico, a história da Gnose Ocidental": "Explore un livre de douze spécialistes qui racontent, comme une grande mosaïque, l'histoire de la Gnose occidentale",
    "Movimento cristão ascético (1100–1200), influenciado por paulicianos e bogomilos.": "Mouvement chrétien ascétique (1100-1200), influencé par les pauliciens et les bogomiles.",
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.": "Favoriser internationalement le développement humain intégral dans ses aspects matériel, émotionnel, rationnel et spirituel, individuellement par l'autodéveloppement et collectivement par la culture, en promouvant le dialogue et un espace ouvert de rencontre.",
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.": "Devenir une référence sur la scène nationale et amorcer l'internationalisation par la réalisation d'activités favorisant le développement intégral de l'être humain, dans ses dimensions individuelle et collective. Être un pôle d'attraction pour les spécialistes et les leaders d'opinion dans un dialogue ouvert entre visions différentes, visant une collaboration constructive."
  },
  de: {
    "© 2026 Instituto Civitas Solis": "© 2026 Civitas Solis Institut",
    "Menu": "Menü",
    "Siga-nos": "Folgen Sie uns",
    "Explore nossos conteúdos sobre filosofia, cultura e espiritualidade.": "Entdecken Sie unsere Inhalte zu Philosophie, Kultur und Spiritualität.",
    "Vídeos atualizados automaticamente do canal oficial": "Videos werden automatisch vom offiziellen Kanal aktualisiert",
    "Preencha os campos abaixo enviar um e-mail ao Instituto Civitas Solis": "Füllen Sie die Felder unten aus, um eine E-Mail an das Civitas Solis Institut zu senden",
    "Remetente / seu e-mail *": "Absender / Ihre E-Mail *",
    "Assunto *": "Betreff *",
    "Mensagem *": "Nachricht *",
    "E-mail": "E-Mail",
    "Horário": "Öffnungszeiten",
    "Segunda a Sexta": "Montag bis Freitag",
    "9h às 18h": "9 bis 18 Uhr",
    "Outras Formas de Conexão": "Weitere Kontaktmöglichkeiten",
    "Sete princípios fundamentais que guiam todas as nossas ações e decisões.": "Sieben grundlegende Prinzipien leiten all unser Handeln und unsere Entscheidungen.",
    "Últimas Postagens do Instagram": "Neueste Instagram-Beiträge",
    "Seguir no Instagram": "Auf Instagram folgen",
    "Junte-se à Nossa Comunidade": "Werden Sie Teil unserer Gemeinschaft",
    "Através de publicações, palestras, workshops e projetos culturais, trabalhamos para disseminar conhecimentos que possam transformar positivamente a vida das pessoas e da sociedade como um todo.": "Durch Publikationen, Vorträge, Workshops und Kulturprojekte verbreiten wir Wissen, das das Leben der Menschen und der Gesellschaft als Ganzes positiv verändern kann.",
    "Construímos pontes entre culturas, tradições e formas de conhecimento.": "Wir bauen Brücken zwischen Kulturen, Traditionen und Wissensformen.",
    "Cultivamos a expressão artística como forma de despertar a beleza, a sensibilidade e a percepção simbólica da experiência humana.": "Wir pflegen den künstlerischen Ausdruck als Weg, Schönheit, Sensibilität und symbolische Wahrnehmung der menschlichen Erfahrung zu wecken.",
    "Desenvolvemos iniciativas que integram conhecimento, sensibilidade e transformação interior.": "Wir entwickeln Initiativen, die Wissen, Sensibilität und innere Transformation verbinden.",
    "Entrevistas realizadas pelo Instituto Civitas Solis sobre diversos temas e com diversos convidados!": "Interviews des Civitas Solis Instituts zu verschiedenen Themen mit unterschiedlichen Gästen.",
    "Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos.": "Wir etablieren Kooperationen, um die Reichweite kultureller und philosophischer Projekte zu erweitern.",
    "Exploramos as fronteiras do conhecimento científico, integrando descobertas modernas com sabedorias ancestrais.": "Wir erforschen die Grenzen wissenschaftlicher Erkenntnis und verbinden moderne Entdeckungen mit alten Weisheiten.",
    "O Instituto Civitas Solis é uma organização filosófico-cultural e sem fins lucrativos dedicada ao desenvolvimento humano integral através do estudo e da prática dos conhecimentos perenes da humanidade.": "Das Civitas Solis Institut ist eine philosophisch-kulturelle, gemeinnützige Organisation, die der ganzheitlichen menschlichen Entwicklung durch Studium und Praxis des dauerhaften Wissens der Menschheit gewidmet ist.",
    "Temos a honra de manter uma parceria estratégica com a Embassy of the Free Mind, uma organização internacional dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos occidentais. Esta colaboração nos permite expandir nosso alcance e impacto, conectando-nos com uma rede global de pesquisadores, filósofos e buscadores da verdade.": "Wir haben die Ehre, eine strategische Partnerschaft mit Embassy of the Free Mind zu pflegen, einer internationalen Organisation zur Bewahrung und Verbreitung der hermetischen Tradition und westlicher esoterischer Kenntnisse. Diese Zusammenarbeit ermöglicht es uns, unsere Reichweite und Wirkung zu erweitern und uns mit einem globalen Netzwerk von Forschern, Philosophen und Wahrheitssuchenden zu verbinden.",
    "Explora os padrões energéticos mediante os quais todas as formas foram criadas com base na unidade (J. Zatón)": "Erforscht die energetischen Muster, durch die alle Formen auf Grundlage der Einheit geschaffen wurden (J. Zatón)",
    "Explora um livro de doze especialistas que contam, como um grande mosaico, a história da Gnose Ocidental": "Erforscht ein Buch von zwölf Fachleuten, die wie ein großes Mosaik die Geschichte der westlichen Gnosis erzählen",
    "Movimento cristão ascético (1100–1200), influenciado por paulicianos e bogomilos.": "Asketische christliche Bewegung (1100-1200), beeinflusst von Paulikianern und Bogomilen.",
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.": "Die ganzheitliche menschliche Entwicklung international in ihren materiellen, emotionalen, rationalen und spirituellen Aspekten fördern, individuell durch Selbstentwicklung und kollektiv durch Kultur, mit Dialog und einem offenen Raum der Begegnung.",
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.": "Eine Referenz auf nationaler Ebene werden und die Internationalisierung durch Aktivitäten beginnen, die die ganzheitliche Entwicklung des Menschen individuell und kollektiv fördern. Ein Anziehungspunkt für Fachleute und Meinungsbildner für einen offenen Dialog zwischen unterschiedlichen Sichtweisen mit dem Ziel konstruktiver Zusammenarbeit sein."
  },
  it: {
    "© 2026 Instituto Civitas Solis": "© 2026 Istituto Civitas Solis",
    "Menu": "Menu",
    "Siga-nos": "Seguici",
    "Explore nossos conteúdos sobre filosofia, cultura e espiritualidade.": "Esplora i nostri contenuti su filosofia, cultura e spiritualità.",
    "Vídeos atualizados automaticamente do canal oficial": "Video aggiornati automaticamente dal canale ufficiale",
    "Preencha os campos abaixo enviar um e-mail ao Instituto Civitas Solis": "Compila i campi qui sotto per inviare un'e-mail all'Istituto Civitas Solis",
    "Remetente / seu e-mail *": "Mittente / la tua e-mail *",
    "Assunto *": "Oggetto *",
    "Mensagem *": "Messaggio *",
    "E-mail": "E-mail",
    "Horário": "Orario",
    "Segunda a Sexta": "Dal lunedì al venerdì",
    "9h às 18h": "Dalle 9 alle 18",
    "Outras Formas de Conexão": "Altre forme di connessione",
    "Sete princípios fundamentais que guiam todas as nossas ações e decisões.": "Sette principi fondamentali guidano tutte le nostre azioni e decisioni.",
    "Últimas Postagens do Instagram": "Ultimi post di Instagram",
    "Seguir no Instagram": "Segui su Instagram",
    "Junte-se à Nossa Comunidade": "Unisciti alla nostra comunità",
    "Através de publicações, palestras, workshops e projetos culturais, trabalhamos para disseminar conhecimentos que possam transformar positivamente a vida das pessoas e da sociedade como um todo.": "Attraverso pubblicazioni, conferenze, workshop e progetti culturali, lavoriamo per diffondere conoscenze capaci di trasformare positivamente la vita delle persone e della società nel suo insieme.",
    "Construímos pontes entre culturas, tradições e formas de conhecimento.": "Costruiamo ponti tra culture, tradizioni e forme di conoscenza.",
    "Cultivamos a expressão artística como forma de despertar a beleza, a sensibilidade e a percepção simbólica da experiência humana.": "Coltiviamo l'espressione artistica come modo per risvegliare la bellezza, la sensibilità e la percezione simbolica dell'esperienza umana.",
    "Desenvolvemos iniciativas que integram conhecimento, sensibilidade e transformação interior.": "Sviluppiamo iniziative che integrano conoscenza, sensibilità e trasformazione interiore.",
    "Entrevistas realizadas pelo Instituto Civitas Solis sobre diversos temas e com diversos convidados!": "Interviste realizzate dall'Istituto Civitas Solis su diversi temi e con diversi ospiti.",
    "Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos.": "Stabiliamo cooperazioni per ampliare la portata di progetti culturali e filosofici.",
    "Exploramos as fronteiras do conhecimento científico, integrando descobertas modernas com sabedorias ancestrais.": "Esploriamo le frontiere della conoscenza scientifica, integrando scoperte moderne e saggezze ancestrali.",
    "O Instituto Civitas Solis é uma organização filosófico-cultural e sem fins lucrativos dedicada ao desenvolvimento humano integral através do estudo e da prática dos conhecimentos perenes da humanidade.": "L'Istituto Civitas Solis è un'organizzazione filosofico-culturale senza fini di lucro dedicata allo sviluppo umano integrale attraverso lo studio e la pratica delle conoscenze perenni dell'umanità.",
    "Temos a honra de manter uma parceria estratégica com a Embassy of the Free Mind, uma organização internacional dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos occidentais. Esta colaboração nos permite expandir nosso alcance e impacto, conectando-nos com uma rede global de pesquisadores, filósofos e buscadores da verdade.": "Abbiamo l'onore di mantenere una partnership strategica con Embassy of the Free Mind, un'organizzazione internazionale dedicata alla preservazione e diffusione della tradizione ermetica e delle conoscenze esoteriche occidentali. Questa collaborazione ci permette di ampliare la nostra portata e il nostro impatto, collegandoci a una rete globale di ricercatori, filosofi e cercatori della verità.",
    "Explora os padrões energéticos mediante os quais todas as formas foram criadas com base na unidade (J. Zatón)": "Esplora i modelli energetici mediante i quali tutte le forme sono state create sulla base dell'unità (J. Zatón)",
    "Explora um livro de doze especialistas que contam, como um grande mosaico, a história da Gnose Ocidental": "Esplora un libro di dodici specialisti che raccontano, come un grande mosaico, la storia della Gnosi Occidentale",
    "Movimento cristão ascético (1100–1200), influenciado por paulicianos e bogomilos.": "Movimento cristiano ascetico (1100-1200), influenzato da pauliciani e bogomili.",
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.": "Promuovere a livello internazionale lo sviluppo umano integrale nei suoi aspetti materiale, emotivo, razionale e spirituale, individualmente attraverso l'autosviluppo e collettivamente attraverso la cultura, promuovendo il dialogo e uno spazio aperto di incontro.",
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.": "Diventare un riferimento nello scenario nazionale e avviare l'internazionalizzazione con attività che favoriscano lo sviluppo integrale dell'essere umano, individualmente e collettivamente. Essere un polo attrattore per specialisti e opinion leader in un dialogo aperto tra visioni diverse, orientato alla collaborazione costruttiva."
  }
};

for (const [lang, entries] of Object.entries(additions)) {
  existing[lang] = { ...(existing[lang] || {}), ...entries };
}

for (const lang of ["es", "fr", "de", "it"]) {
  existing[lang] = { ...(existing[lang] || {}) };
  for (const [key, value] of Object.entries(existing.en || {})) {
    if (existing[lang][key] === undefined) existing[lang][key] = value;
  }
}

const runtime = `;(()=>{const dictionaries=${JSON.stringify(existing)};const langMeta={pt:{code:"BR",name:"Português"},en:{code:"US",name:"English"},es:{code:"ES",name:"Español"},fr:{code:"FR",name:"Français"},de:{code:"DE",name:"Deutsch"},it:{code:"IT",name:"Italiano"}};const attrNames=["placeholder","aria-label","alt","title"];const normalizeLang=()=>{const raw=((window.i18next&&window.i18next.language)||ge.language||localStorage.getItem("i18nextLng")||"pt").toLowerCase();const short=raw.split("-")[0];return dictionaries[short]?short:"pt"};const canonical=new Map;const addCanonical=(value,key)=>{if(!value||typeof value!=="string")return;const normalized=value.replace(/\\s+/g," ").trim();if(normalized&&!canonical.has(normalized))canonical.set(normalized,key)};Object.values(dictionaries).forEach(dict=>Object.entries(dict).forEach(([key,value])=>{addCanonical(key,key);addCanonical(value,key)}));const findKey=value=>{if(!value)return null;const compact=value.replace(/\\s+/g," ").trim();return canonical.get(compact)||canonical.get(value.trim())||null};const translateString=(value,lang)=>{if(!value)return value;const key=findKey(value);if(!key)return value;if(lang==="pt")return key;const dict=dictionaries[lang]||{};return dict[key]||dictionaries.en[key]||key};const preserve=(value,translated)=>{const leading=(value.match(/^\\s*/)||[""])[0],trailing=(value.match(/\\s*$/)||[""])[0];return leading+translated+trailing};const textNodes=root=>{const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue||!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;const parent=node.parentElement;if(!parent||["SCRIPT","STYLE","NOSCRIPT","IFRAME"].includes(parent.tagName))return NodeFilter.FILTER_REJECT;if(parent.closest&&parent.closest(".elfsight-app-a0895143-ea93-4311-9987-4bd3b9f4ee8d"))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);return nodes};const updateLanguageButton=lang=>{const meta=langMeta[lang]||langMeta.pt;document.querySelectorAll("button").forEach(button=>{const spans=[...button.querySelectorAll("span")];const labels=spans.map(s=>s.textContent.trim());const looksLikeToggle=button.querySelector("svg")&&labels.some(v=>Object.values(langMeta).some(m=>v===m.name||v===m.code));if(looksLikeToggle&&spans.length>=2){spans[0].textContent=meta.code;spans[1].textContent=meta.name}});document.querySelectorAll("button").forEach(button=>{const text=button.textContent.trim();const entry=Object.entries(langMeta).find(([,m])=>text.includes(m.name));if(entry){button.setAttribute("aria-pressed",entry[0]===lang?"true":"false");button.classList.toggle("ics-language-active",entry[0]===lang)}})};const translateAttributes=lang=>{document.querySelectorAll("[placeholder],[aria-label],[alt],[title]").forEach(el=>{attrNames.forEach(attr=>{if(!el.hasAttribute(attr))return;const current=el.getAttribute(attr);const translated=translateString(current,lang);if(translated!==current)el.setAttribute(attr,translated)})})};const translateValues=lang=>{document.querySelectorAll("textarea,input").forEach(el=>{if(document.activeElement===el)return;const current=el.value||"";if(!current.trim())return;const translated=translateString(current,lang);if(translated!==current){el.value=translated;el.dispatchEvent(new Event("input",{bubbles:true}))}})};const apply=()=>{const lang=normalizeLang();document.documentElement.lang=lang==="pt"?"pt-BR":lang;textNodes(document.body).forEach(node=>{const current=node.nodeValue;const translated=translateString(current,lang);if(translated!==current)node.nodeValue=preserve(current,translated)});translateAttributes(lang);translateValues(lang);updateLanguageButton(lang)};const schedule=()=>{clearTimeout(window.__icsTranslateTimer);window.__icsTranslateTimer=setTimeout(apply,50)};document.addEventListener("click",event=>{const button=event.target.closest&&event.target.closest("button");if(!button)return;const text=button.textContent.trim();const entry=Object.entries(langMeta).find(([,m])=>text.includes(m.name));if(entry){setTimeout(()=>{try{ge.changeLanguage(entry[0])}catch{};localStorage.setItem("i18nextLng",entry[0]);schedule()},0)}});ge.on("languageChanged",schedule);document.addEventListener("DOMContentLoaded",schedule);new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:attrNames});window.__icsApplyTranslation=schedule;schedule()})();`;

const next = source.slice(0, start) + runtime + source.slice(end);

fs.writeFileSync(outputAssets, next);
fs.copyFileSync(outputAssets, outputDist);

for (const htmlPath of [path.join(root, "index.html"), path.join(root, "dist", "index.html")]) {
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html
    .replace(/(<meta name="viewport" content=")[^"]*(" \/>)/, '$1width=device-width, initial-scale=1.0$2')
    .replace(/(<meta name="deploy-revision" content=")[^"]*(" \/>)/, '$1i18n-stable-2026-07-14$2')
    .replace(/\/assets\/index-[^"]+\.js/, `/assets/${outputName}`)
    .replace(/\/assets\/index-[^"]+\.css/, "/assets/index-i18n-selector-d9754a4.css");
  fs.writeFileSync(htmlPath, html);
}

console.log(outputName);

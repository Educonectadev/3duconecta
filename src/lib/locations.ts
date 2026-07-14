export interface Province {
  name: string;
  districts: string[];
}

export interface Region {
  name: string;
  provinces: Record<string, Province>;
}

export const PERU_REGIONS: Record<string, Region> = {
  "01": {
    name: "Amazonas",
    provinces: {
      "0101": { name: "Chachapoyas", districts: ["Chachapoyas", "Asunción", "Balsas", "Cheto", "Chiliquín", "Cuembí", "Gran Pajón", "Huancabamba", "La Jalca", "Leimebamba", "Levanto", "Magdalena", "Mariscal Castilla", "Molinopampa", "Montevideo", "Queros", "Santiago", "Santodomingo", "Tingo", "Tribugá"] },
      "0102": { name: "Bagua", districts: ["Bagua", "Aramango", "Copallín", "El Parco", "Imaza", "La Peca"] },
      "0103": { name: "Bongará", districts: ["Jumbilla", "Chisquilla", "Churuja", "Corosha", "Cuispes", "Florida", "Jazán", "Recta", "San Carlos", "Shipasbamba", "Valera", "Yambrasbamba"] },
      "0104": { name: "Condorcanqui", districts: ["Nieva", "El Cenepa", "Río Santiago"] },
      "0105": { name: "Luya", districts: ["Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Conila", "Inguilpata", "Longuita", "Lonya Chico", "Luya", "Luya Viejo", "María", "Ocalli", "Omia", "Providencia", "San Cristóbal", "San Nicolás", "Sapno", "Tulpo", "Vascones"] },
      "0106": { name: "Rodríguez de Mendoza", districts: ["Mendoza P", "San Fernando", "San Ignacio", "San Nicolás", "Ocho Apucu", "Rosario P", "Lucma", "Fermín Tangüis", "Punta Arenas", "Amina", "Margos", "Miguel Grau", "José Manuel Quevedo", "Saúl"] },
      "0107": { name: "Utcubamba", districts: ["Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", "Lonya Grande", "Yamón"] },
    },
  },
  "02": {
    name: "Ancash",
    provinces: {
      "0201": { name: "Huaraz", districts: ["Huaraz", "Cochabamba", "Colcabamba", "Huanchay", "Jangas", "La Libertad", "Olleros", "Pira", "San Francisco", "San Juan", "San Pedro", "Santiago de Pucuyalba", "Yaucar"] },
      "0202": { name: "Aija", districts: ["Aija", "Coris", "Huacllán", "La Merced", "San Juan", "Siquilla", "Ticapampa"] },
      "0203": { name: "Antonio Raymondi", districts: ["Acopampa", "Amashca", "Anta", "Aquia", "Cajacay", "Canis", "Colquioc", "Huallanca", "Huasta", "Huayllacayán", "La Primavera", "Mangas", "Pacllón", "San Miguel de Corpanqui", "Ticllos"] },
      "0204": { name: "Asunción", districts: ["Chacas", "Acochaca"] },
      "0205": { name: "Bolognesi", districts: ["Chiquián", "Abelardo Pardo Lezameta", "Antonio Raymondi", "Aquia", "Cajacay", "Canis", "Colquioc", "Huallanca", "Huasta", "Huayllacayán", "La Primavera", "Mangas", "Pacllón", "San Miguel de Corpanqui", "Ticllos"] },
      "0206": { name: "Carhuaz", districts: ["Carhuaz", "Acopampa", "Amashca", "Anta", "Ataquero", "Marcara", "Pariahuanca", "San Miguel de Aco", "Shilla", "Tinco", "Yungar"] },
      "0207": { name: "Carlos Fermín Fitzcarrald", districts: ["San Luis", "San Nicolás", "Yauya"] },
      "0208": { name: "Casma", districts: ["Casma", "Buena Vista Alta", "Comandante Noel", "Yaután"] },
      "0209": { name: "Corongo", districts: ["Corongo", "Aco", "Bambas", "Cusca", "La Pampa", "Llipa", "San Cristóbal", "Santa Rosa", "Yusupi"] },
      "0210": { name: "Huari", districts: ["Huari", "Anra", "Cajay", "Chavín de Huantar", "Huacachi", "Huacchis", "Huachac", "Huayllacayán", "La Pampa", "Llamellín", "Macate", "Moro", "Raphra", "San Marcos", "San Pedro de Chana", "Uco"] },
      "0211": { name: "Huarmey", districts: ["Huarmey", "Cocochan", "Corzonada", "La Pampa", "Rosario de Rada", "San Cayetano", "Siete Rios"] },
      "0212": { name: "Huaylas", districts: ["Santuario de Pucyura", "Caraz", "Huallanca", "Huaylas", "Mato", "Pamparomás", "Pueblo Libre", "Santa Cruz", "Santiago del Norte", "Yuracmar"] },
      "0213": { name: "Mariscal Luzuriaga", districts: ["Piscobamba", "Casca", "Eleazar Guzmán Barrón", "Fidel Olivas Escudero", "Llama", "Lluchac", "Oto", "San Pedro de Deán", "San Vicente de Cañete", "Ulloa"] },
      "0214": { name: "Ocros", districts: ["Ocros", "Acas", "Cajamarquilla", "Carhuapampa", "Cochas", "Congas", "Llipa", "San Cristóbal", "San Pedro", "Santiago de Chilcos"] },
      "0215": { name: "Pallasca", districts: ["Cabana", "Bolognesi", "Conchucos", "Huacaschuque", "Huandoval", "Lacabamba", "Llaco", "Pallasca", "Pampas", "Santa Rosa", "Tauca"] },
      "0216": { name: "Pomabamba", districts: ["Pomabamba", "Huayllán", "Pararí", "Progreso", "San Pedro"] },
      "0217": { name: "Recuay", districts: ["Recuay", "Catac", "Cotaparaco", "Huayllapampa", "Llacllín", "Marcará", "Pariahuanca", "San Martín", "Ticapampa", "Ticapampa"] },
      "0218": { name: "Santa", districts: ["Chimbote", "Cáceres del Perú", "Coishco", "Macate", "Moro", "Nepeña", "Samanco", "Santa", "Nuevo Chimbote"] },
      "0219": { name: "Sihuas", districts: ["Sihuas", "Acobamba", "Alfonso Ugarte", "Cashapampa", "Chingalpo", "Huayllabamba", "Quiches", "San Agustín", "Santibáñez", "Sicsibamba", "Yungay"] },
      "0220": { name: "Yungay", districts: ["Yungay", "Cascapara", "Mancos", "Matacoto", "Quillo", "Ranrahirca", "Shupluy", "Yanama"] },
    },
  },
  "03": {
    name: "Apurímac",
    provinces: {
      "0301": { name: "Abancay", districts: ["Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"] },
      "0302": { name: "Andahuaylas", districts: ["Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", "Huayana", "Kishuara", "Pacobamba", "Pacucha", "Pampachiri", "Pomacocha", "San Antonio de Cachi", "San Jerónimo", "San Miguel de Chaccrampa", "Santa María de Chicmo", "Talavera", "Tumay Huaraca", "Turpo"] },
      "0303": { name: "Antabamba", districts: ["Antabamba", "El Oro", "Huaquirca", "Juan Espinoza Medrano", "Oropesa", "Pachaconas", "Sabaino"] },
      "0304": { name: "Aymaraes", districts: ["Chalhuanca", "Capaya", "Caraybamba", "Chapimarca", "Colcabamba", "Cotaruse", "Ihuayllo", "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", "San Juan de Chacña", "Sañayca", "Soraya", "Tapairihua", "Tintay", "Toraya", "Yanaca"] },
      "0305": { name: "Cotabambas", districts: ["Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Salcahuasi"] },
      "0306": { name: "Grau", districts: ["Chuquibamba", "Andaray", "Cayarani", "Chichas", "Iquipi", "Machalí", "San Antonio", "Santiago de Chuco", "Tintaya"] },
    },
  },
  "04": {
    name: "Arequipa",
    provinces: {
      "0401": { name: "Arequipa", districts: ["Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", "Chiguata", "Jacobo Hunter", "La Joya", "Mariano Melgar", "Miraflores", "Mollebaya", "Paucarpata", "Pocsi", "Polobaya", "Quequeña", "Sabandía", "Sachaca", "San Juan de Siguas", "San Juan de Tarucani", "Santa Isabel de Siguas", "Santa Rita de Siguas", "Socabaya", "Tiabaya", "Uchumayo", "Vítor", "Yanahuara", "Yarabamba", "Yura"] },
      "0402": { name: "Camaná", districts: ["Camaná", "Jose María Quimper", "Mariano Valcárcel", "Octavio de Guzmán", "Punta de Bombón", "San Juan de Tarucani"] },
      "0403": { name: "Caravelí", districts: ["Caravelí", "Achacachi", "Acari", "Atico", "Atiquipa", "Bella Unión", "Cahuacho", "Chala", "Chaparra", "Huancahuacha", "Laramaira", "Ligüi", "Maca", "San Fernando", "San Juan de Chuccho", "San Martín", "San Pedro de Huancané", "San Pedro de Inocencio", "Santa Rosa de Quives"] },
      "0404": { name: "Castilla", districts: ["Aplao", "Andagua", "Ayo", "Chachas", "Chilcaymarca", "Chuquibamba", "Guanuco", "Huanca", "Huangascar", "Huaynócaro", "Los Cháñares", "Sabandía", "Santiago de Chocorvos", "Santiago de Quirahuara", "Sorcos", "Tocota", "Uchumayo", "Vítor", "Yanahuara", "Yanqui"] },
      "0405": { name: "Caylloma", districts: ["Chivay", "Achoma", "Cabanaconde", "Callalli", "Caylloma", "Coporaque", "Huambo", "Huanca", "Hutchins", "Maca", "Madrigal", "San Antonio de Chuca", "Sibayo", "Tapay", "Tisco", "Tuti", "Yanque"] },
      "0406": { name: "Condesuyos", districts: ["Chuquibamba", "Andaray", "Cayarani", "Chichas", "Condoroma", "Coporaque", "Iquipi", "Las Huarinas", "Machagui", "Pampamarca", "San Antonio", "San Fernando", "Yurimarca"] },
      "0407": { name: "Islay", districts: ["Mollendo", "Cocachacra", "Deán Valdivia", "Isla Meiggs", "La Curva", "Mejia", "Punta de Bombón"] },
      "0408": { name: "La Unión", districts: ["Cotahuasi", "Alca", "Arcuy", "Ayo", "Cachana", "Cancaraca", "Chaca", "Chapimarca", "Colcap", "Hualla", "Huarango", "Maca", "Pulpera", "Quishuara", "San Antonio", "San Francisco de Chacuán", "San Juan de Chuccho", "San Juan de Tiahuanaco", "San Rafael", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas", "Tacsa", "Tambo", "Tisco", "Tutupaca", "Yanaqué"] },
    },
  },
  "05": {
    name: "Ayacucho",
    provinces: {
      "0501": { name: "Huamanga", districts: ["Ayacucho", "Acocro", "Acos Vinchos", "Carmen Alto", "Chiara", "Jesús Nazareno", "Ocros", "Pacaycasa", "Quinua", "San José de Ticllas", "San Juan Bautista", "Santiago de Pischa", "Vinchos", "Carmen Alto"] },
      "0502": { name: "Cangallo", districts: ["Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", "Paras", "Totos"] },
      "0503": { name: "Huanca Sancos", districts: ["Sancos", "Carapo", "Sacsamarca", "Santiago de Lucanamarca"] },
      "0504": { name: "Huanta", districts: ["Huanta", "Ayahuanco", "Huamanguilla", "Iguaín", "Lauricocha", "Santillana", "Sivia", "Llochegua", "Miguel Castro"] },
      "0505": { name: "La Mar", districts: ["San Miguel", "Anco", "Ayna", "Chilca", "Chungui", "Tambo", "Lusuru", "Sampu", "Uchuraccay", "Pucacolpa"] },
      "0506": { name: "Lucanas", districts: ["Puquio", "Aucará", "Cabana", "Carmen Salcedo", "Chaviña", "Chipao", "Huac-Huas", "Laramate", "Llauta", "Lucanas", "Ocaña", "Otoca", "Saisa", "San Cristóbal", "San Juan", "San Pedro", "San Pedro de Palco", "Santar"] },
      "0507": { name: "Parinacochas", districts: ["Coracora", "Chumpi", "Coronel Castañeda", "Pacapoja", "Puyusca", "San Francisco de Ravacayco", "Upahuacho"] },
      "0508": { name: "Víctor Fajardo", districts: ["Huancapi", "Alcamenca", "Apongo", "Asquipata", "Canaria", "Cayara", "Colca", "Huamanquiriquilla", "Huamanguilla", "Huancaraylla", "Huaya", "Sarhua", "Vilcanchos"] },
      "0509": { name: "Vilcas Huamán", districts: ["Vilcas Huamán", "Accomarca", "Carhuanca", "Conpausa", "Quinualla", "San Antonio de Cacha", "Santiago de Chilcas"] },
    },
  },
  "06": {
    name: "Cajamarca",
    provinces: {
      "0601": { name: "Cajamarca", districts: ["Cajamarca", "Asunción", "Chetilla", "Cospán", "Encañada", "Jesús", "Los Baños del Inca", "Llacanora", "San Juan", "San Pablo", "Santa Rosa", "Calderón"] },
      "0602": { name: "Cajabamba", districts: ["Cajabamba", "Cachachi", "Condebamba", "Sitabamba"] },
      "0603": { name: "Celendín", districts: ["Celendín", "Chumuch", "Cortegana", "Huasmín", "Jorgé Chávez", "Miguel Iglesias", "Oxamarca", "Sorochuco", "Sucre", "Uticyacu", "Yauyucan"] },
      "0604": { name: "Chota", districts: ["Chota", "Anguía", "Chadin", "Chiguirip", "Chumán", "Cochabamba", "Conchán", "Huambos", "Lajas", "Lama", "Miras", "Paccha", "Pión", "Querocoto", "San Juan de Licupis", "Tacabamba", "Tocmoche"] },
      "0605": { name: "Contumazá", districts: ["Contumazá", "Chilete", "Cupisnique", "Guzmango", "San Benito", "San Cristóbal de Raján", "San Martín", "Santa Rosa de Ocopa"] },
      "0606": { name: "Cutervo", districts: ["Cutervo", "Callayuc", "Choros", "Cujillo", "La Ramada", "Pimpingos", "Querocotillo", "San Andrés de Cutervo", "San Juan de Cutervo", "San Luis de Lucma", "San Pedro de Casta", "Santuario", "Socota", "Toribengoa", "Toriborny"] },
      "0607": { name: "Hualgayoc", districts: ["Bambamarca", "Chugur", "Hualgayoc"] },
      "0608": { name: "Jaén", districts: ["Jaén", "Bellavista", "Chontali", "Colasay", "Huabal", "Las Pirias", "Pomahuaca", "Pucará", "Sallique", "San Felipe", "San José del Alto", "Santa Rosa"] },
      "0609": { name: "San Ignacio", districts: ["San Ignacio", "Chirinos", "Huarango", "La Coipa", "Namballe", "San José de Lourdes", "Tabaconas"] },
      "0610": { name: "San Marcos", districts: ["San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San José", "San Miguel", "San Silvestre", "Saña", "Santiago de Cao", "Casa Grande"] },
      "0611": { name: "San Miguel", districts: ["San Miguel", "Bolívar", "Calquis", "Catilluc", "El Prado", "La Florida", "Llapa", "Nanchoc", "Nieve Nima", "San Gregorio", "San Silvestre", "Tongod", "Unión Agua Blanca"] },
      "0612": { name: "San Pablo", districts: ["San Pablo", "San Bernardino", "San Luis", "Tumbaden"] },
      "0613": { name: "Santa Cruz", districts: ["Santa Cruz", "Andabamba", "Catache", "Chancaybaños", "La Esperanza", "Ninabamba", "Pulán", "Santa Rosa", "Saúl", "Spinto", "Uticyacu", "Yauyucan"] },
    },
  },
  "07": {
    name: "Cusco",
    provinces: {
      "0701": { name: "Cusco", districts: ["Cusco", "Ccorca", "Poroy", "San Jerónimo", "San Sebastián", "Santiago", "Saylla", "Wanchaq"] },
      "0702": { name: "Acomayo", districts: ["Acomayo", "Acopia", "Acos", "Moscoc", "Pomacanchi", "Rondocan", "Sangarará"] },
      "0703": { name: "Anta", districts: ["Anta", "Ancahuasi", "Cachimayo", "Chinchaypujio", "Huaro Condor", "Limatambo", "Mollepampa", "San Juan", "San Pedro", "Toccareta"] },
      "0704": { name: "Calca", districts: ["Calca", "Coya", "Lamay", "Lares", "Loyra", "Ollantaytambo", "Pisac", "San Salvador", "Taray", "Yanatile"] },
      "0705": { name: "Canas", districts: ["Yanaoca", "Checca", "Kunturkanki", "Langui", "Layo", "Pampamarca", "Quehue", "Túpac Amaru", "Santiago de Chuco"] },
      "0706": { name: "Canchis", districts: ["Sicuani", "Checacupe", "Combapata", "Langui", "Layo", "Pampamarca", "Ranchi", "Tinta"] },
      "0707": { name: "Chumbivilcas", districts: ["Santo Tomás", "Capacmarca", "Chamaca", "Colquemarca", "Livitaca", "Lusco", "Salitre", "Vitoc"] },
      "0708": { name: "Espinar", districts: ["Espinar", "Ccorca", "Coyor", "Chachayoc", "Huaccana", "Ocororo", "Oyancay", "San Francisco", "San Antonio", "Tentación"] },
      "0709": { name: "La Convención", districts: ["Quillabamba", "Echarate", "Huayopata", "Maranura", "Ocobamba", "Quellouno", "Kimbiri", "Santa Teresa", "Vilcabamba", "Pichari"] },
      "0710": { name: "Paruro", districts: ["Paruro", "Accha", "Ccauya", "Chuschi", "Huaccaray", "Huancapi", "Paccha", "Pillpinto", "Yaurisque"] },
      "0711": { name: "Paucartambo", districts: ["Paucartambo", "Carmenca", "Challabamba", "Colquepata", "Huancarani", "Kosñipata"] },
      "0712": { name: "Quispicanchi", districts: ["Urcos", "Andahuaylillas", "Camanti", "Ccarhuayo", "Ccatca", "Cusipata", "Huaro", "Lucre", "Marcapata", "Ocongate", "Oropesa", "Quiquijana", "San Salvador", "San Vicente"] },
      "0713": { name: "Urubamba", districts: ["Urubamba", "Chinchero", "Huayrapata", "Mahuaypampa", "Maras", "Ollantaytambo", "Yucay"] },
    },
  },
  "08": {
    name: "Huancavelica",
    provinces: {
      "0801": { name: "Huancavelica", districts: ["Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huachocolpa", "Huayllahuara", "Izcuchaca", "Laria", "Manta", "María Ccoalla", "San Antonio de Ocoña", "San Cristóbal", "San Esteban", "San Francisco de Sangayaico", "San Isidro", "San Pedro de Corpanqui", "San Pedro de Huancavelica", "Tutocpac", "Victoria"] },
      "0802": { name: "Acobamba", districts: ["Acobamba", "Andabamba", "Anta", "Cajamarquilla", "Ccolacruscc", "Ccochaccasa", "Churcampa", "El Rosario", "Huanca Huanca", "San Miguel de Mayocc", "San Pedro de Casta", "Tantas", "Ticrapo"] },
      "0803": { name: "Angaraes", districts: ["Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", "Congalla", "Huanca-Huanca", "Huayllay Grande", "Julcanmarcal", "Llamara", "San Antonio de Cusicancha", "San Francisco de Sangayaico", "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas", "Talavera", "Tambo", "Ticrapo"] },
      "0804": { name: "Castrovirreyna", districts: ["Castrovirreyna", "Arma", "Huancapi", "Huayllay", "Santas", "Tintay", "Túpac Amaru", "Vilca", "Yaurisque"] },
      "0805": { name: "Churcampa", districts: ["Churcampa", "Anco", "Chinchihuasi", "El Carmen", "La Merced", "Locroja", "Pácsa", "Paucarbamba", "San Miguel de Mayocc", "San Pedro de Corpanqui", "San Pedro de Huancavelica", "Ticas"] },
      "0806": { name: "Huaytará", districts: ["Huaytará", "Acobambilla", "Anccallo", "Andaychagua", "Cajarcucho", "Carhuacalla", "Ccosipata", "Huayacundo Arma", "Huambalpa", "Huaribamba", "Pampamarca", "Pazos", "Pichos", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Capillas", "Socos", "Tambo", "Tantara", "Ticrapo"] },
      "0807": { name: "Tayacaja", districts: ["Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", "Daniel Hernández", "Huachocolpa", "Huaribamba", "Ñahuimpuquio", "Pazos", "Potosí", "Pichos", "Santiago de Chocorvos", "Santibáñez", "Tintaya", "Torre", "Tambo", "Ticrapo"] },
    },
  },
  "09": {
    name: "Huánuco",
    provinces: {
      "0901": { name: "Huánuco", districts: ["Huánuco", "Amarilis", "Chinchao", "Churubamba", "Margos", "Quisqui", "San Francisco de Cayrán", "San Pedro de Chaulán", "Santa María del Valle", "Yarumayo", "Pillco Marca", "Yacus"] },
      "0902": { name: "Ambo", districts: ["Ambo", "Cayna", "Colpash", "Chapillo", "Huacar", "San Francisco de Asís", "San Miguel de Cauri"] },
      "0903": { name: "Dos de Mayo", districts: ["La Unión", "Chuquis", "Marías", "Pachas", "Quivilla", "Ripan", "Shunqui", "Sillapata", "Yanas"] },
      "0904": { name: "Huacaybamba", districts: ["Huacaybamba", "Canchabamba", "Cóndor Marca", "Huacrachuco", "San Pedro de Palma"] },
      "0905": { name: "Huamalíes", districts: ["Llata", "Arancay", "Chavín de Pariarco", "El Porvenir", "Maspuq", "Ollon", "Puncuyán", "San Buenaventura", "San Pedro de Chaulán", "Santiago de Chucus", "Toribio"] },
      "0906": { name: "Leoncio Prado", districts: ["Tingo María", "Alto Panguana", "Chincha Baja", "Chuvizal", "La Unión", "María Dantas", "Padre Abad", "Quabina", "San Antonio de Cusicancha", "Santa Rosa de Alto Juanomayo", "Santibáñez", "Sinchi Roca"] },
      "0907": { name: "Marañón", districts: ["Huacrachuco", "Cholga", "Curguy", "Huallanca Grande", "Huamancaca Chico", "Huancabamba", "Mendoza", "Ragash", "San Juan de Morope", "San Nicolás", "Uchucuca"] },
      "0908": { name: "Pachitea", districts: ["Pucayacu", "Canchaque", "Chinchao", "Chupán", "Lauricocha", "Pillco Marca", "San Francisco de Asís", "San Miguel de Cauri", "Yacus", "Yuyumayas"] },
      "0909": { name: "Puerto Inca", districts: ["Puerto Inca", "Codo del Pozuzo", "Honoria", "Huacrachuco", "Palcazú", "Pozuzo", "Tournavista", "Yuyapichis"] },
      "0910": { name: "Lauricocha", districts: ["Jesús", "Baños", "Jivia", "Queropalca", "Rondos", "San Francisco de Asís", "San Miguel de Cauri", "Yarumayo"] },
      "0911": { name: "Yarowilca", districts: ["Chavinillo", "Cauri", "Chacabamba", "Chapar", "Otinche", "Pillco Marca", "Queropalca", "Rondos", "San Francisco de Asís", "San Jerónimo de Tunan", "San Miguel de Cauri", "Yarumayo"] },
    },
  },
  "10": {
    name: "Ica",
    provinces: {
      "1001": { name: "Ica", districts: ["Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacutec", "Parcona", "Pueblo Nuevo", "Salas", "San José de Los Molinos", "San Juan Grande", "San Luis", "Santiago", "Subtanjalla", "Tate", "Yauca del Rosario", "La Victoria"] },
      "1002": { name: "Chincha", districts: ["Chincha Alta", "Alto Laran", "Chavín", "Chincha Baja", "El Carmen", "Grocio Prado", "Pueblo Nuevo", "San Juan de Yanac", "San Pedro de Huacarpana", "Sunampe", "Tambo de Mora"] },
      "1003": { name: "Nazca", districts: ["Nazca", "Changuillo", "El Ingenio", "Marcona", "Vista Alegre", "La Tinguiña"] },
      "1004": { name: "Palpa", districts: ["Palpa", "Llipata", "Río Grande", "Santa Cruz", "Tibillo", "Yauca del Rosario"] },
      "1005": { name: "Pisco", districts: ["Pisco", "Huancano", "Humay", "Independencia", "Paracas", "San Clemente", "San Martín de Porres", "Túpac Amaru", "Yala Yala"] },
    },
  },
  "11": {
    name: "Junín",
    provinces: {
      "1101": { name: "Huancayo", districts: ["Huancayo", "Carhuacallanga", "Chacapampa", "Chicche", "Chilca", "Chongos Alto", "Chupuro", "Colca", "Cullhuas", "El Tambo", "Huacrapuquio", "Hualhuas", "Huancán", "Huasicancha", "Huayucachi", "Ingenio", "Pariahuanca", "Pilcomayo", "Pucará", "Quichuay", "Quilcas", "San Agustín", "San Jerónimo de Tunán", "San Pedro de Saño", "San Pedro de Huancayloc", "Sapallanga", "Sicaya", "Viques", "Yacus"] },
      "1102": { name: "Concepción", districts: ["Concepción", "Aco", "Andamarca", "Chambara", "Comas", "Cochas", "Huamanmarca", "Huasahuasi", "La Unión", "Orcotuna", "San José de Quero", "Santa Rosa de Ocopa"] },
      "1103": { name: "Chanchamayo", districts: ["San Ramón", "Chanchamayo", "Perené", "Pichanaqui", "San Luis de Shuaro", "San Martín de Pangoa", "Vitoc"] },
      "1104": { name: "Jauja", districts: ["Jauja", "Acolla", "Apata", "Ataura", "Canchayllo", "Curicaca", "El Mantaro", "Huamalí", "Huaripampa", "Huertas", "Janajua", "San Lorenzo de Quinti", "San Pedro de Apulca", "San Sebastián", "Santo Tomás", "Tunanmarca", "Yauli"] },
      "1105": { name: "Junín", districts: ["Junín", "Carhuamayo", "Ondores", "Ulcumayo"] },
      "1106": { name: "Satipo", districts: ["Satipo", "Coviriali", "Lllata", "Mazamari", "Pampa Hermosa", "Pangoa", "Río Negro", "Río Tambo", "Vizcatan del Ene"] },
      "1107": { name: "Tarma", districts: ["Tarma", "Acobamba", "Huaricolca", "Huasahuasi", "La Unión", "Palca", "Palcamayo", "San Pedro de Cajas", "Tapo", "La Paz"] },
      "1108": { name: "Yauli", districts: ["La Oroya", "Chucaro", "Marcapomacocha", "Morococha", "Paccha", "Santa Rosa de Sajona", "Tantamayo", "Valladolid"] },
      "1109": { name: "Chupaca", districts: ["Chupaca", "Ahuac", "Chongos Bajo", "Huachac", "Huamancaca Chico", "San Juan de Iscos", "San Juan de Jarpa", "Tres de Diciembre", "Yanacancha"] },
    },
  },
  "12": {
    name: "La Libertad",
    provinces: {
      "1201": { name: "Trujillo", districts: ["Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", "La Esperanza", "Laredo", "Moche", "Poroto", "Salaverry", "Simbal", "Victor Larco Herrera", "Ucupe"] },
      "1202": { name: "Ascope", districts: ["Chicama", "Ascope", "Chocope", "El Carmen", "Magdalena de Cao", "Paiján", "Rázuri", "Santiago de Cao", "Casa Grande"] },
      "1203": { name: "Bolívar", districts: ["Bambamarca", "Bolognesi", "Colcamar", "Conopacha", "Cumbemayo", "Guadalupe", "San Benito", "San Pedro", "Santuario"] },
      "1204": { name: "Chepen", districts: ["Chepén", "Pacanga", "Pueblo Nuevo", "San Pedro de Lloc"] },
      "1205": { name: "Julcán", districts: ["Julcán", "Calamarca", "Carabamba", "Huaso", "Tambo"] },
      "1206": { name: "Otuzco", districts: ["Otuzco", "Agallpampa", "Charat", "Huarupampa", "Huasmín", "Jequetepeque", "La Cueva", "Oyotún", "Pauranga", "Salaverry", "San Agustín de Cajas", "San José de Quero", "Santiago de Chuco", "Sarma", "Usquill", "Víctor Larco Herrera"] },
      "1207": { name: "Pacasmayo", districts: ["San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San José", "San Miguel", "Saña", "Santiago de Cao"] },
      "1208": { name: "Pataz", districts: ["Tayabamba", "Buldibuyo", "Chillia", "Huancaspata", "Huaylillas", "Huayo", "Ongón", "Parcoy", "Pataz", "Pías", "Santiago de Challas", "Taurija", "Tayabamba", "Urpay"] },
      "1209": { name: "Sánchez Carrión", districts: ["San Martín de Porres", "Chugay", "Cochorco", "Curgos", "Marcabal", "Sanagorán", "Sarín", "Santiago de Chuco", "Santino"] },
      "1210": { name: "Santiago de Chuco", districts: ["Santiago de Chuco", "Angasmarca", "Cachicadán", "Cadambara", "Chillia", "Huamachuco", "Mollepampa", "Quiruvilca", "San Juan de Chucar", "San Pedro de Chucar", "Santa Cruz de Chuca", "Sitiabamba", "Usquill"] },
      "1211": { name: "Virú", districts: ["Virú", "Chao", "Guadalupito", "San Pedro de Lloc", "Sarabanda"] },
    },
  },
  "13": {
    name: "Lambayeque",
    provinces: {
      "1301": { name: "Chiclayo", districts: ["Chiclayo", "Chongoyape", "Eten", "Eten Puerto", "Laguna", "La Victoria", "Moche", "Monsefú", "Nueva Arica", "Oyotún", "Pomalca", "Pucalá", "Pimentel", "Reque", "Saña", "San José", "Santa Rosa", "Tumán", "Cayaltí", "Patapo", "Picsi", "Pucalá", "Santander"] },
      "1302": { name: "Ferreñafe", districts: ["Ferreñafe", "Cáñaris", "Incahuasi", "Manuel Antonio Mesones Muro", "Pitipo", "Pueblo Nuevo", "Solórzano"] },
      "1303": { name: "Lambayeque", districts: ["Chiclayo", "Chongoyape", "Eten", "Eten Puerto", "Laguna", "La Victoria", "Lambayeque", "Monsefú", "Nueva Arica", "Oyotún", "Pomalca", "Pucalá", "Pimentel", "Reque", "Saña", "San José", "Santa Rosa", "Tumán"] },
    },
  },
  "14": {
    name: "Lima",
    provinces: {
      "1401": { name: "Lima", districts: ["Lima", "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos", "Cieneguilla", "Comas", "El Agustino", "Independencia", "Jesús María", "Jesús María", "La Molina", "La Victoria", "Lince", "Los Olivos", "Lurigancho", "Lurín", "Magdalena del Mar", "Magdalena Vieja", "Miraflores", "Pachacámac", "Pachacútec", "Punta Hermosa", "Punta Negra", "Rímac", "San Bartolo", "San Borja", "San Isidro", "San Martín de Porres", "San Miguel", "Santa Anita", "Santa María del Mar", "Santa Rosa", "Santiago de Surco", "Surco", "Surquillo", "Villa El Salvador", "Villa María del Triunfo", "San Juan de Lurigancho", "San Juan de Miraflores", "Villa María del Triunfo", "Cercado de Lima"] },
      "1402": { name: "Barranca", districts: ["Barranca", "Paramonga", "Pativilca", "Supe", "Supe Puerto"] },
      "1403": { name: "Cajatambo", districts: ["Cajatambo", "Copa", "Gorgor", "Huancapampa", "Ocros"] },
      "1404": { name: "Canta", districts: ["Canta", "Arahuay", "Huamantanga", "Huaros", "Lachaqui", "San Buenaventura", "Santa Rosa de Quives"] },
      "1405": { name: "Cañete", districts: ["San Vicente de Cañete", "Altimira", "Cuyos", "Hualcará", "Huacho", "Huancapi", "Huantán", "Huayucachi", "Imperial", "Lunahuaná", "Mala", "Mariscal Castilla", "San Antonio", "San Clemente", "San Pedro de Huancayloc", "San Pedro de Pilas", "Santa Cruz de Flores", "Zúñiga"] },
      "1406": { name: "Huaral", districts: ["Huaral", "Atavillos Alto", "Atavillos Bajo", "Aucallama", "Chancay", "Ihuari", "Lampián", "Pacaraos", "San Miguel de Acos", "Santa Cruz de Andamarca", "Sumbilca", "Veintisiete de Noviembre"] },
      "1407": { name: "Huarochirí", districts: ["Matucana", "Antioquía", "Callahuanca", "Carampoma", "Cueva", "Huachupampa", "Huanza", "Huarochirí", "Jatun Salcahuasi", "Liclle", "Pachacámac", "Paccho", "San Antonio de Chunta", "San Bartolo", "San Damián", "San Juan de Estiga", "San Luis de Shuaro", "San Mateo", "San Mateo de Otao", "San Pedro de Casta", "San Pedro de Huancayloc", "Sangallaya", "Santa Cruz de Cocachacra", "Santa Eulalia", "Santiago de Anchucaya", "Santiago de Anucap", "Santiago de Chocorvos", "Santiago de Quirahuara", "Santo Domingo de Los Olleros", "Surco", "Huachupampa"] },
      "1408": { name: "Yauyos", districts: ["Yauyos", "Alis", "Allauca", "Ayavirí", "Azángaro", "Cacra", "Carania", "Catahuasi", "Chocos", "Cochas", "Colonia", "Hongos", "Huampara", "Huancaya", "Huángaro", "Huáscar", "Huayos", "Jirís", "Quincha", "San Francisco de Saga", "San Juan de Salcahuasi", "San Pedro de Pilas", "Santo Domingo de Los Olleros", "Tanta", "Tauripampa", "Tomas", "Tupe", "Víñac", "Vitis"] },
    },
  },
  "15": {
    name: "Loreto",
    provinces: {
      "1501": { name: "Maynas", districts: ["Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", "Las Amazonas", "Mazán", "Napo", "Omagua", "Punchana", "Torres Causana", "San Juan Bautista", "Teniente Manuel Clavero"] },
      "1502": { name: "Alto Amazonas", districts: ["Yurimaguas", "Balsapuerto", "Barranca", "Cahuapanas", "Jeberos", "Lagunas", "Manseriche", "Morona", "Mazán", "Pastaza", "Santa Cruz", "Teniente Clavero", "Torres Causana"] },
      "1503": { name: "Loreto", districts: ["Nauta", "Borja", "Cahuapanas", "Carrascal", "Constitución", "Fernando Lores", "Huambo", "Lagunas", "Manseriche", "Morona", "Omias", "Pinto Recodo", "Rumisapa", "San Roque", "Soplin", "Tarapoto", "Teniente Clavero", "Torres Causana", "Yurimaguas"] },
      "1504": { name: "Mariscal Ramón Castilla", districts: ["Ramón Castilla", "Cahuapanas", "Fernando Lores", "Lagunas", "Manseriche", "Morona", "Omias", "San Pablo", "Teniente Clavero", "Torres Causana"] },
      "1505": { name: "Requena", districts: ["Requena", "Alto Tapiche", "Capelo", "Emilio San Martín", "Huancabamba", "Maquipambo", "Puinahua", "Saquena", "Soplin", "Tapiche", "Jenaro Herrera", "Yaquerana"] },
      "1506": { name: "Ucayali", districts: ["Contamana", "Callanga", "Caxias", "Chaupiyarco", "Chazuta", "Cosanga", "Cumariba", "Ipisa", "Lamas", "Magaz", "Mazuko", "Pampa Hermosa", "Sandia", "Tabalosos", "Tarapoto", "Tongoy", "Tres Unidas"] },
    },
  },
  "16": {
    name: "Madre de Dios",
    provinces: {
      "1601": { name: "Tambopata", districts: ["Puerto Maldonado", "Federico Basadre", "Huaypetue", "Infierno", "Laberinto", "Las Piedras", "Tambopata"] },
      "1602": { name: "Manu", districts: ["Manu", "Fitzcarrald", "Huadquiña", "Huepetuhe", "Madre de Dios", "Salvador"] },
      "1603": { name: "Tahuamanu", districts: ["Inapari", "Boca Manu", "Boca Colorado", "Crevaux", "Iberia", "San Antonio del Estrecho"] },
    },
  },
  "17": {
    name: "Moquegua",
    provinces: {
      "1701": { name: "Mariscal Nieto", districts: ["Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristóbal", "Torata", "Omate"] },
      "1702": { name: "General Sánchez Cerro", districts: ["Omate", "Chocata", "Inclán", "Ichuña", "La Capilla", "Lloque", "Matalaque", "Puerto Quesada", "Quinistaquillas", "Ubina", "Yumbas", "Santiago de Quirahuara"] },
      "1703": { name: "Ilo", districts: ["Ilo", "El Algarrobal", "Pacocha", "Chaparra"] },
    },
  },
  "18": {
    name: "Pasco",
    provinces: {
      "1801": { name: "Daniel Alcides Carrión", districts: ["Cerro de Pasco", "Chacayán", "Goyllarisquizga", "Huachac", "Huayllay", "Páucar de Sara Sara", "Querecotillo", "San Cristóbal de Raján", "San Pedro de Chicaj", "Santa Ana de Tusi", "Tápuc", "Vicco"] },
      "1802": { name: "Oxapampa", districts: ["Oxapampa", "Chontabamba", "Huancabamba", "Palcazú", "Pozuzo", "Puerto Bermúdez", "Villa Rica", "Constitución"] },
    },
  },
  "19": {
    name: "Piura",
    provinces: {
      "1901": { name: "Piura", districts: ["Piura", "Castilla", "Catacaos", "Cura Mori", "El Tallán", "La Arena", "La Unión", "Las Lomas", "Tambo Grande", "Veintiséis de Octubre", "Yove"] },
      "1902": { name: "Ayabaca", districts: ["Ayabaca", "Canezos", "Cruce de Pucyá", "Frijes", "Jililí", "Paiján", "Papayas", "Pillizonte", "Sapalache", "Sicorizo", "Suyo", "Tambalocal"] },
      "1903": { name: "Huancabamba", districts: ["Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", "Lalaquiz", "San Ignacio", "San Lorenzo de Piura", "Sondor", "Sondorillo"] },
      "1904": { name: "Morropon", districts: ["Chulucanas", "Buenos Aires", "Chalaco", "Francesa", "La Matanza", "Morropon", "Salitral", "San Juan de Bigote", "Santa Catalina de Mossa", "Santo Domingo", "Yamango"] },
      "1905": { name: "Paita", districts: ["Paita", "Amotape", "Arenal", "Colán", "El Arenal", "La Huaca", "Tamarindo", "Vichayal"] },
      "1906": { name: "Sullana", districts: ["Sullana", "Bellavista", "Buenos Aires", "Chalaco", "Colan", "La Concha", "Miguel Checa", "Querecotillo", "Salitral", "San Juan de Longarí"] },
      "1907": { name: "Talara", districts: ["Talara", "El Alto", "La Brea", "Máncora", "Cancasari", "El Arenal", "Negritos", "Pariní"] },
      "1908": { name: "Sechura", districts: ["Sechura", "Bellavista de la Unión", "Bernal", "Cristo Nos Valga", "Vice", "Rinconada Lícuar"] },
    },
  },
  "20": {
    name: "Puno",
    provinces: {
      "2001": { name: "Puno", districts: ["Puno", "Acora", "Amantaní", "Atuncolla", "Capachica", "Chucuito", "Coata", "Cuata", "Huata", "Mañazo", "Paucarcolla", "Pichacani", "Platería", "San Antonio", "San José", "San Juan de Salinas", "Santiago de Pupuja", "Tiquillaca", "Vilquechico"] },
      "2002": { name: "Azángaro", districts: ["Azángaro", "Achaya", "Arapa", "Asillo", "Caminaca", "Chupata", "Cuadros", "José Domínguez Choquehuanca", "La Rinconada", "San Pablo de Pinalluto", "San Rafael", "San Antonio", "Santiago de Chocan", "Syra"] },
      "2003": { name: "Carabaya", districts: ["Macusani", "Ajoyani", "Ayapata", "Coasa", "Corani", "Crucero", "Ituata", "Ollachea", "San Gabán", "San Juan de Ocona", "Tinicru"] },
      "2004": { name: "Chucuito", districts: ["Juli", "Desaguadero", "Hatuncolla", "Kelluyo", "Pacarani", "San Pedro de Pilcomayo", "San Julián", "Santiago de Pupuja"] },
      "2005": { name: "El Collao", districts: [] },
      "2006": { name: "Huancané", districts: ["Huancané", "Cojata", "Huancané", "Huatasani", "Inchupalla", "Pusi", "Ramos", "Tinicachi", "Tambocomuco", "Uchumata", "Vilque Chico"] },
      "2007": { name: "Lampa", districts: ["Lampa", "Cabanilla", "Calapuja", "Nicasio", "Ocuviri", "Palca", "Paratía", "Pucará", "Santa Lucía", "Vilavila"] },
      "2008": { name: "Melgar", districts: [] },
      "2009": { name: "Moho", districts: ["Moho", "Conima", "Huilacapqui", "Huayrapata", "Tilali"] },
      "2010": { name: "San Antonio de Putina", districts: ["Putina", "Ananea", "Pedro Vilca Apaza", "Quilcapuncu", "Sina"] },
      "2011": { name: "San Román", districts: ["Juliaca", "Cabana", "Cabanillas", "Caracoto", "San Miguel", "San Ramón"] },
      "2012": { name: "Sandia", districts: ["Sandia", "Cuyocuyos", "Limpia", "Macari", "San Pedro", "Quiscapuncu"] },
      "2013": { name: "Yunguyo", districts: ["Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", "Tinicachi"] },
    },
  },
  "21": {
    name: "San Martín",
    provinces: {
      "2101": { name: "Moyobamba", districts: ["Moyobamba", "Calzada", "Habana", "Jepelacio", "Soritor", "Yantalo"] },
      "2102": { name: "Bellavista", districts: ["Bellavista", "Alto Biavo", "Bajo Biavo", "Huallaga", "San Pablo", "San Rafael"] },
      "2103": { name: "El Dorado", districts: ["San José de Sisa", "Aguaytía", "Bocota", "Buenos Aires", "El Dorado", "Huayabamba", "San Martín", "Santa Rosa"] },
      "2104": { name: "Huallaga", districts: ["Saposoa", "El Eslabón", "Piscoyacu", "Sacanche", "Tingo de Saposoa", "San Pablo", "San Hilarion"] },
      "2105": { name: "Lamas", districts: ["Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi", "Cuñumbuqui", "Pinto Recodo", "Rumisapa", "San Roque de Cumbaza", "Shanao", "Tabalosos", "Tantaco", "Tingo"] },
      "2106": { name: "Mariscal Cáceres", districts: ["Juanjuí", "Campanilla", "Huicungo", "Pachiza", "Pajarillo", "San Hilarión", "Santander"] },
      "2107": { name: "Picota", districts: ["Picota", "Buenos Aires", "Caspisapa", "Pilluana", "Pucacaca", "San Hilarion", "San Roque", "Sapzaro", "Tingo de Ponasa", "Tres Unidos"] },
      "2108": { name: "Rioja", districts: ["Rioja", "Awajún", "Elías Soplín Vargas", "Nueva Cajamarca", "Paraiso", "Pardo Miguel", "Posic", "San Fernando", "San Juan", "San Juan de Lopecancha", "San Martín"] },
      "2109": { name: "San Martín", districts: ["Tarapoto", "Alberto Leveau", "Cacatachi", "Chazuta", "Chipurana", "El Porvenir", "Huimbayoc", "Juan Guerra", "La Banda de Shilcayo", "Morales", "Papaplaya", "San Antonio", "Sauce", "Shapaja"] },
      "2110": { name: "Tocache", districts: ["Tocache", "Nuevo Progreso", "Pólvora", "Shunte", "Uchiza"] },
    },
  },
  "22": {
    name: "Tacna",
    provinces: {
      "2201": { name: "Tacna", districts: ["Tacna", "Alto de la Alianza", "Calana", "Ciudad Nueva", "Coronel Gregorio Albarracín Lanchipa", "Inclán", "La Yarada Los Palos", "Manuel Bonilla", "Pocollay", "Sama", "San Pedro de Atacama", "Tacna", "Victoria"] },
      "2202": { name: "Candarave", districts: ["Candarave", "Cairani", "Camilaca", "Curibaya", "Huanuara", "Quilahuani", "San Pedro de Pilas"] },
      "2203": { name: "Jorge Basadre", districts: ["Locumba", "Ilabaya", "Ite", "San Antonio"] },
      "2204": { name: "Tarata", districts: ["Tarata", "Ancahuasi", "Chucatamani", "Estique", "Estique Pampa", "Horajira", "Quinuata", "San Pedro de Lloc", "Susapaya", "Ticaco", "Torata", "Vila Vila"] },
    },
  },
  "23": {
    name: "Tumbes",
    provinces: {
      "2301": { name: "Tumbes", districts: ["Tumbes", "Corrales", "El Porvenir", "La Pesca", "Pampas de Hospital", "San Jacinto", "San Juan de la Virgen"] },
      "2302": { name: "Contralmirante Villar", districts: ["Zorritos", "Casitas", "Canoas de Punta Sal", "San Martín de Villar"] },
      "2303": { name: "Zarumilla", districts: ["Zarumilla", "Aguas Verdes", "Matapalo", "Papayal"] },
    },
  },
  "24": {
    name: "Ucayali",
    provinces: {
      "2401": { name: "Coronel Portillo", districts: ["Pucallpa", "Callaria", "Ccapacmarca", "Chavaría", "Indigenous", "Masisea", "Nueva Requena", "Santa Rosa", "Yarinacocha", "Manantay", "San Pablo"] },
      "2402": { name: "Atalaya", districts: ["Atalaya", "Campoverde", "Huayana", "Iñapari", "Manuel T. Osejo", "Padre Abad", "Neshuya", "Alexander von Humboldt", "Purús"] },
      "2403": { name: "Padre Abad", districts: ["Aguaytía", "Curimana", "Irazola", "Padre Abad", "Purús", "Neshuya", "Alexander von Humboldt"] },
      "2404": { name: "Purús", districts: ["Eirunepé", "Emilio San Martín", "Itamarati", "Manuel Osejo", "San Luis de Shuaro", "San Martín", "Teniente Manuel Clavero"] },
    },
  },
};

export const REGION_LIST = Object.entries(PERU_REGIONS).map(([id, region]) => ({
  id,
  name: region.name,
}));

export function getProvinces(regionId: string): { id: string; name: string }[] {
  const region = PERU_REGIONS[regionId];
  if (!region) return [];
  return Object.entries(region.provinces).map(([id, prov]) => ({
    id,
    name: prov.name,
  }));
}

export function getDistricts(regionId: string, provinceId: string): string[] {
  const region = PERU_REGIONS[regionId];
  if (!region) return [];
  const province = region.provinces[provinceId];
  if (!province) return [];
  return province.districts ?? [];
}

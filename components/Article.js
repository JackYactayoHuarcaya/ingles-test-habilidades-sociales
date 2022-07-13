const d = document;
const Preguntas = [
  "Prefiero quedarme callado (a) para evitar problema",
  "Si un amigo (a)habla mal de mi persona le insulto",
  "Si necesito ayuda la pido de buena manera",
  "Si un amigo(a) se saca una buena nota en el examen no le felicito",
  "Agradezco cuando alguien me ayuda",
  "Me acerco a abrazar a mi amigo(a) cuando cumple años",
  "Si un amigo (a) falta a una cita acordada le expreso mi amargura",
  "Cuando me siento triste evito contar lo que me pasa",
  "Le digo a mi amigo(a) cuando hace algo que no me agrada",
  "Si una persona mayor me insulta me defiendo sin agredirlo",
  "Reclamo agresivamente con insultos, cuando alguien quiere entrar al cine sin hacer su cola",
  "No hago caso cuando mis amigos(as) me presionan para consumir alcohol",
  "Me distraigo fácilmente cuando una persona habla",
  "Pregunto cada vez que sea necesario para entender lo que me dicen",
  "Miro a los ojos cuando alguien me habla",
  "No pregunto a las personas si me he dejado comprender",
  "Me dejo entender con facilidad cuando hablo",
  "Utilizo un tono de voz con gestos apropiados para que me escuchen y me entiendan mejor",
  "Expreso mis opiniones sin calcular las consecuencias",
  "Si estoy nervioso(a) trato de relajarme para ordenar mis pensamientos",
  "Antes de opinar ordeno mis ideas con calma",
  "Evito hacer cosas que puedan dañar mi salud",
  "No me siento contento con mi aspecto físico",
  "Me gusta verme arreglado (a)",
  "Puedo cambiar mi comportamiento cuando me doy cuenta que estoy equivocado(a)",
  "Me da vergüenza felicitar a un amigo(a) cuando realiza algo",
  "Reconozco fácilmente mis cualidades positivas y negativas",
  "Puedo hablar sobre mis temores",
  "Cuando algo me sale mal no sé cómo expresar mi cólera",
  "Comparto mi alegría con mis amigos(as)",
  "Me esfuerzo para ser mejor estudiante",
  "Puedo guardar los secretos de mis amigos (as)",
  "Rechazo hacer las tareas de la casa",
  "Pienso en varias soluciones frente a un problema",
  "Dejo que otros decidan por mi cuando no puedo solucionar un problema",
  "Pienso en las posibles consecuencias de mis decisiones",
  "Tomo decisiones importantes para mi futuro sin el apoyo de otras personas",
  "Hago planes para mis vacaciones",
  "Realizo cosas positivas que me ayudarán en mi futuro",
  "Me cuesta decir no, por miedo a ser criticado (a)",
  "Defiendo mis ideas cuando veo que mis amigos(as) están equivocados (as)",
  "Si me presionan para ir a la playa escapándome del colegio, puedo rechazarlo sin sentir temor y vergüenza a los insultos",
];
const RespuestaEnIngles = [
  "I prefer to stay quiet to avoid problems",
  "If a friend speaks ill of me, I insult him",
  "If I need help I ask for it in a good way",
  "If a friend gets a good grade in the exam, I don't congratulate him",
  "I appreciate when someone helps me",
  "I go to hug my friend on their birthday",
  "If a friend misses an agreed appointment I express my bitterness",
  "When I feel sad I avoid telling what happens to me",
  "I tell my friend when they do something I don't like",
  "If an older person insults me, he defends me without attacking him",
  "I aggressively complain with insults, when someone wants to enter the cinema without standing in line",
  "I don't pay attention when my friends pressure me to consume alcohol",
  "I am easily distracted when a person speaks",
  "I ask whenever necessary to understand what they tell me",
  "I look into the eyes when someone talks to me",
  "I don't ask people if they let me understand",
  "I let myself be understood easily when I speak",
  "I use a tone of voice with appropriate gestures so that they listen to me and understand me better",
  "I express my opinions without calculating the consequences",
  "If I'm nervous, I try to relax to order my thoughts",
  "Before giving an opinion, I organize my ideas calmly",
  "I avoid doing things that can harm my health",
  "I'm not happy with my physical appearance",
  "I like to see myself arranged (a)",
  "I can change my behavior when I realize I'm wrong",
  "I'm embarrassed to congratulate a friend when they do something",
  "I easily recognize my positive and negative qualities",
  "I can talk about my fears",
  "When something goes wrong I don't know how to express my anger",
  "I share my joy with my friends",
  "I strive to be a better student",
  "I can keep the secrets of my friends (as)",
  "I refuse to do housework",
  "I think of several solutions to a problem",
  "I let others decide for me when I can't solve a problem",
  "I think about the possible consequences of my decisions",
  "I make important decisions for my future without the support of other people",
  "I make airplanes for my vacations",
  "I do positive things that will help me in my future",
  "It's hard for me to say no, for fear of being criticized",
  "I defend my ideas when I see that my friends are wrong",
  "If they pressure me to go to the beach escaping from school, I can reject it without feeling fear and shame of insults",
];
const Respuestas = ["Nunca", "Rara vez", "A veces", "A menudo", "Siempre"];
const RespuestasEnIngles = ["Never", "Rarely", "Sometimes", "Often", "Always"];
let Articles = (indice, final, inglesEspañol) => {
  const $container = d.querySelector(".container-for-articles");
  const fragment = d.createDocumentFragment();
  let contador = 0;
  for (let i = indice; i <= final; i++) {
    let $article = d.createElement("article");
    let $h3 = d.createElement("h3");
    if (inglesEspañol == "español") {
      $h3.textContent = Preguntas[i - 1];
    } else {
      $h3.textContent = RespuestaEnIngles[i - 1];
    }
    let $form = d.createElement("form");
    $article.appendChild($h3);
    for (let j = 1; j <= 5; j++) {
      contador++;
      let $inputRadio = d.createElement("input");
      $inputRadio.type = "radio";
      let $label = d.createElement("label");
      $inputRadio.name = `res-${i}`;
      $label.htmlFor = `res-${contador}`;
      $inputRadio.id = `res-${contador}`;
      $inputRadio.classList.add(`res-${j}`);
      if (inglesEspañol == "español") {
        $label.textContent = `${Respuestas[j - 1]}`;
      } else {
        $label.textContent = `${RespuestasEnIngles[j - 1]}`;
      }
      $form.appendChild($inputRadio);
      $form.appendChild($label);
    }
    $article.appendChild($form);
    fragment.appendChild($article);
  }
  $container.appendChild(fragment);
};
export default Articles;

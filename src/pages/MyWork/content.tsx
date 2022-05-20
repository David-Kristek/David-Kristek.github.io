import { FaRegCalendarAlt } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
type prTypes = "MOBILNÍ APLIKACE" | "WEBOVÁ APLIKACE";

export type ProjectType = {
  id: number;
  title: string;
  types: prTypes;
  titleHtml: JSX.Element;
  icon: JSX.Element;
  mainText: string;
  forText: string;
  ul: string[];
  forImage: string;
  githubLinks: string[];
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "chatgen", // title + -for.png
    types: "WEBOVÁ APLIKACE",
    icon: <img src="/davidkristek-website/projects/chatgen/logo.png" className="h-8 m-auto" alt="chatgen logo"/>,

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <img src="/davidkristek-website/projects/chatgen/logo.png" className="h-8" alt="chatgen logo"/>
        <h3 className="text-2xl font-mono">ChatGen</h3>
      </div>
    ),
    forText:
      "ChatGen je moje nejnovější webová aplikace, kterou jsem programoval hlavně za účelem naučit se NextJS, a také graphql a apollo. Nejdříve jsem měl  jako backend firebase, ale nakonec  jsem zvolil právě graphql ... ",
    forImage: "projects/chatgen/for.jpg",
    mainText:
      "ChatGen je moje nejnovější webová aplikace, kterou jsem programoval hlavně za účelem naučit se NextJS, a také graphql a apollo. Nejdříve jsem měl  jako backend firebase, ale nakonec  jsem zvolil právě graphql. Je to vlastně chatová aplikace inspirovaná messengrem a discordem. Získal jsem zde hodně zkušeností například se “subscribtions” pro real time data, ty mi daly zabrat.  Ovšem je zde mnoho features jako přečtení zprávy, povolení chatu, právě píšu apod. Ovšem dalo by se zde ještě mnoho dodělat. ",
    ul: [
      "NextJS, apollo client, graphql-yoga na backendu",
      "mongodb databáze",
      "správa cache pomocí apollo client",
      "third party auth providers pomocí NextAuth - Google, Github",
      "Celá stránka responsivní",
      "Cypress testování, není úplně ideální pro Real time chat app",
    ],
    githubLinks: ["/David-Kristek/ChatGen"],
  },
  {
    id: 2,
    title: "pisemkar", // title + -for.png
    types: "MOBILNÍ APLIKACE",
    icon: (
      <FaRegCalendarAlt className="text-white text-xl md:text-3xl m-auto" />
    ),

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <FaRegCalendarAlt className="text-white text-2xl" />
        <h3 className="text-2xl">Písemkář</h3>
      </div>
    ),
    forText:
      "Písemkář je mobilní aplikace vytvořená v React native s Expressem na backendu a Mongodb databází. Slouží na zapisování testů  a domácích úkolů do kalendáře...",
    forImage: "projects/pisemkar-for.jpg",
    mainText:
      "Písemkář je mobilní aplikace vytvořená v React native s Expressem na backendu a Mongodb databází. Slouží na zapisování testů  a domácích úkolů do kalendáře. Můžete se zde připojit pomocí hesla ke skupině nebo skupinu (třídu) vytvořit. Pokud vytvoříte skupinu, automaticky se přidají rozvrhy pro jednotlivé dny z vašich bakalářů. V dané skupině vidí všichni následující úkoly a testy a každý je může přidávat či upravovat. Díky socket.io probíhá všechna úprava údajů real time. Pro state managment je zde použit redux toolkit. Aplikace je plně v provozu.",
    ul: [
      "MERN stack",
      "moje nejlepší mobilní aplikace",
      "nyní plně v provozu, server hostovaný na heroku",
      "vytvoření vlastní skupiny, a zde možnost přidávat do vlastně vygenerovaného kalenáře následující testy, domácí úkoly",
      "čistý a přehledný kod, animace, přátelské rozhraní",
      "není zde nutnost hesla - authentikace pomocí emailu",
      "spolupráce s Bakaláří API - rozvrhy pro jednotlivé dny",
    ],
    githubLinks: [
      "/David-Kristek/Testar",
      "/David-Kristek/Pisemkar-server",
    ],
  },
  {
    id: 3,
    title: "meteor", // title + -for.png
    types: "WEBOVÁ APLIKACE",
    icon: (
      <SiHomebridge className="text-[#7EAD75] text-xl md:text-3xl m-auto" />
    ),

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <SiHomebridge className="text-[#7EAD75] text-2xl" />
        <h3 className="text-2xl font-thin">Meteor</h3>
      </div>
    ),
    forText:
      "Krycím názvem Meteor je označená moje webová aplikace, která teprve čeká na svůj potenciál. Bude sloužit pro komunikaci s čipem Esp32 ...",
    forImage: "projects/meteor/meteor_for.jpg",
    mainText:
      "Krycím názvem Meteor je označená moje webová aplikace, která teprve čeká na svůj potenciál. Bude sloužit pro komunikaci s čipem Esp32, který bude měřit na chatě teplotu apod... pomocí různých senzorů a bude moct ovládat topení. Již je zde authentikace a aplikace je stavěna tak, aby si zde mohl každý přidat svůj Esp32 čip a k němu zvolit své přihl. údaje.  ",
    ul: [
      "Next JS",
      "vlastní authentikace pomocí JWT a bcrypt",
      "práce s cookies",
      "hlavní výpočty se budou executovat v pythonu",
      "Grafy pomocí Chart.js",
      "Socket.io",
    ],
    githubLinks: ["David-Kristek/esp32-website"],
  },
  {
    id: 4,
    title: "simplesocial",
    types: "MOBILNÍ APLIKACE",
    icon: <img src="/davidkristek-website/projects/simplesocial/logo.png" className="h-6 m-auto" alt="simplesocial logo"/>,

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <img src="/davidkristek-website/projects/simplesocial/logo.png" className="h-12 w-auto" alt="simplesocial logo"/>
      </div>
    ),
    forText:
      "Simple Social byla jedna z mých prvních větších aplikací v react native a reactu vůbec. Nejdříve jsem zamýšlel jako webovou aplikaci ...",
    forImage: "projects/simplesocial/simplesocial-for.jpg",
    mainText:
      "Simple Social byla jedna z mých prvních větších aplikací v react native a reactu vůbec. Nejdříve jsem zamýšlel jako webovou aplikaci, ale poté jsem přešel na mobilní aplikaci. Slouží k posílání příspěvků v dané skupině, ke které se lze připojit nebo ji lze vytvořit. U příspěvků lze komentovat a likovat apod. Dále je zde také chat. Všechny fotky se nahrávají na Cloudinary. Jelikož to byla jedna z mých prvních aplikací, mnoho věcí bych již změnil a udělal lépe. Má i vlastní webovou stránku pro stahování .apk souborů : viz github readme",
    ul: [
      "MERN",
      "vlastní authentikace pomocí JWT a bcrypt",
      "vlastní webová stránka v php s mysql a se systémem přidávání nových verzí",
      "Cloudinary pro nahrávání fotek",
      "všechny data jsou spravované v contextech",
      "fungující oznámení ",
      "server hostovaný na heroku",
      "real time data se Socket.io",
    ],
    githubLinks: [
      "David-Kristek/React-native-social-app",
      "/David-Kristek/Heroku-host-social-site",
      "/David-Kristek/React-node-social-site",
    ],
  },
  {
    id: 5,
    title: "larave-todolist",
    types: "WEBOVÁ APLIKACE",
    icon: (
      <img src="/davidkristek-website/projects/larave-todolist/logo.png" className="h-6 m-auto" alt="laravel logo"/>
    ),

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <img src="/davidkristek-website/projects/larave-todolist/logo.png" className="h-12" alt="laravel logo"/>
        <h3 className="text-2xl font-thin">Laravel todolist</h3>
      </div>
    ),
    forText:
      "I já jsem začínal u php. Jako perličku jsem se naučil laravel ... ",
    forImage: "",
    mainText:
      "I já jsem začínal u php. Jako perličku jsem se naučil laravel. Toto je todo list aplikace s přihlašováním a dokonce, úpravou tasků apod. Také jsem používal laravel čistě jako api s reactem (další odkazy) - dokonce i admin sekce. Pro více informací mrkněte na source code. Je to už delší doba.",
    ul: [""],
    githubLinks: [
      "/David-Kristek/Laravel-todo-list",
      "/David-Kristek/laravel-api-todolist",
      "/David-Kristek/react-api-list",
    ],
  },
  {
    id: 6,
    title: "bikemeter",
    types: "WEBOVÁ APLIKACE",
    icon: (
      <img src="/davidkristek-website/projects/bikemeter/logo.png" className="h-6 m-auto" alt="bikemeter logo"/>
    ),

    titleHtml: (
      <div className="flex gap-x-2 items-center mt-5">
        <img src="/davidkristek-website/projects/bikemeter/logo.png" className="h-12" alt="bikemeter logo"/>
        <h3 className="text-2xl">Bike meter</h3>
      </div>
    ),
    forText:
      "Webová stránka pouze html, css, js. Vytvářeli jsme na kroužku ...",
    forImage: "projects/bikemeter/logo.png",
    mainText:
      "Webová stránka pouze html, css, js. Vytvářeli jsme na kroužku. Práce s tabulkami – vlastní malá knihovna. Mapy.cz – API, náhodné generování trasy, provázanost s tabulkou. Bootstrap je použit pro styly. Knihovna ChartJS je použita pro zobrazování grafů.  ",
    ul: [""],
    githubLinks: [
      "/David-Kristek/html-css-js-chart-mapycz",
    ],
  },

  
];
export default projects;

const ADD_FRASE = 'ADD-FRASE';
const ON_CHANGE_FRASE = 'ON-CHANGE-FRASE';

export const addFraseActionCreator = (n) => ({
    type: ADD_FRASE,
    num: n,
});

export const onChangeFraseActionCreator = (t) => {
    return {
        type: ON_CHANGE_FRASE,
        text: t,
    }
};

let initialState = {
    friends: [{
        id: 1,
        name: "Patricio Mitie",
        status: "seenToday",
        seenTime: "9:04 PM",
        lastDay: "16-Jul-2021",
        email: "pmitie0@reuters.com",
        skype: "pmitie0",
        country: "Jamaica",
        time: "8:44 PM",
        phone: "+1 (119) 839-5311",
        avatarMini: "https://robohash.org/aperiamnonquaerat.png?size=40x40&set=set1",
        avatar: "https://robohash.org/ipsaporroet.png?size=400x400&set=set1"
    },
    {
        id: 2,
        name: "Puck Siss",
        status: "online",
        seenTime: "10:15 PM",
        lastDay: "08-Feb-2020",
        email: "psiss1@tinyurl.com",
        skype: "psiss1",
        country: "China",
        time: "8:13 PM",
        phone: "+86 (155) 787-3418",
        avatarMini: "https://robohash.org/utfugaest.png?size=40x40&set=set1",
        avatar: "https://robohash.org/noninprovident.png?size=400x400&set=set1"
    },
    {
        id: 3,
        name: "Chris Edwick",
        status: "seenToday",
        seenTime: "8:44 PM",
        lastDay: "06-Oct-2020",
        email: "cedwick2@hubpages.com",
        skype: "cedwick2",
        country: "France",
        time: "9:04 PM",
        phone: "+33 (220) 663-3909",
        avatarMini: "https://robohash.org/dignissimosabnecessitatibus.png?size=40x40&set=set1",
        avatar: "https://robohash.org/autquiaquo.png?size=400x400&set=set1"
    },
    {
        id: 4,
        name: "Angus Children",
        status: "offline",
        seenTime: "1:50 PM",
        lastDay: "06-Sep-2020",
        email: "achildren3@psu.edu",
        skype: "achildren3",
        country: "Indonesia",
        time: "10:15 PM",
        phone: "+62 (700) 190-2333",
        avatarMini: "https://robohash.org/blanditiisquibusdamest.png?size=40x40&set=set1",
        avatar: "https://robohash.org/animirationedicta.png?size=400x400&set=set1"
    },
    {
        id: 5,
        name: "Odelinda Haryngton",
        status: "offline",
        seenTime: "11:51 PM",
        lastDay: "24-Mar-2020",
        email: "oharyngton4@google.com.hk",
        skype: "oharyngton4",
        country: "China",
        time: "8:44 PM",
        phone: "+86 (840) 820-7393",
        avatarMini: "https://robohash.org/idperferendisab.png?size=40x40&set=set1",
        avatar: "https://robohash.org/inuttenetur.png?size=400x400&set=set1"
    },
    {
        id: 6,
        name: "Bertie Paull",
        status: "offline",
        seenTime: "12:03 PM",
        lastDay: "05-Nov-2020",
        email: "bpaull5@opensource.org",
        skype: "bpaull5",
        country: "Cuba",
        time: "1:50 PM",
        phone: "+53 (457) 966-5506",
        avatarMini: "https://robohash.org/animinesciuntdolor.png?size=40x40&set=set1",
        avatar: "https://robohash.org/utvelitporro.png?size=400x400&set=set1"
    },
    {
        id: 7,
        name: "Beilul Iacomini",
        status: "seenToday",
        seenTime: "11:45 PM",
        lastDay: "05-Sep-2020",
        email: "biacomini6@google.nl",
        skype: "biacomini6",
        country: "Ecuador",
        time: "11:51 PM",
        phone: "+593 (127) 819-4100",
        avatarMini: "https://robohash.org/accusamusdelectusdignissimos.png?size=40x40&set=set1",
        avatar: "https://robohash.org/quiacupiditatesit.png?size=400x400&set=set1"
    },
    {
        id: 8,
        name: "Emilio Kennion",
        status: "seenToday",
        seenTime: "3:33 PM",
        lastDay: "23-Jun-2021",
        email: "ekennion7@cnbc.com",
        skype: "ekennion7",
        country: "Indonesia",
        time: "12:03 PM",
        phone: "+62 (516) 830-1109",
        avatarMini: "https://robohash.org/esteosaut.png?size=40x40&set=set1",
        avatar: "https://robohash.org/utlaborecorporis.png?size=400x400&set=set1"
    },
    {
        id: 9,
        name: "Gwenneth Palin",
        status: "seenToday",
        seenTime: "6:21 PM",
        lastDay: "03-May-2021",
        email: "gpalin8@php.net",
        skype: "gpalin8",
        country: "China",
        time: "11:45 PM",
        phone: "+86 (838) 524-8232",
        avatarMini: "https://robohash.org/quismolestiaeest.png?size=40x40&set=set1",
        avatar: "https://robohash.org/adeasit.png?size=400x400&set=set1"
    },
    {
        id: 10,
        name: "Romola Jonczyk",
        status: "seenToday",
        seenTime: "3:14 PM",
        lastDay: "11-Mar-2021",
        email: "rjonczyk9@phoca.cz",
        skype: "rjonczyk9",
        country: "China",
        time: "3:33 PM",
        phone: "+86 (160) 281-8563",
        avatarMini: "https://robohash.org/illoveritatisfugiat.png?size=40x40&set=set1",
        avatar: "https://robohash.org/porroquaeratmaxime.png?size=400x400&set=set1"
    },
    {
        id: 11,
        name: "Roby Ludovico",
        status: "online",
        seenTime: "5:06 PM",
        lastDay: "04-Jun-2021",
        email: "rludovicoa@cam.ac.uk",
        skype: "rludovicoa",
        country: "Indonesia",
        time: "6:21 PM",
        phone: "+62 (651) 706-9438",
        avatarMini: "https://robohash.org/voluptatemvoluptasomnis.png?size=40x40&set=set1",
        avatar: "https://robohash.org/aveldeleniti.png?size=400x400&set=set1"
    },
    {
        id: 12,
        name: "Ali Whinray",
        status: "offline",
        seenTime: "8:31 PM",
        lastDay: "24-Mar-2020",
        email: "awhinrayb@domainmarket.com",
        skype: "awhinrayb",
        country: "Greece",
        time: "3:14 PM",
        phone: "+30 (354) 254-4706",
        avatarMini: "https://robohash.org/iddelectussint.png?size=40x40&set=set1",
        avatar: "https://robohash.org/nullautassumenda.png?size=400x400&set=set1"
    },
    {
        id: 13,
        name: "Norry Starie",
        status: "online",
        seenTime: "4:42 PM",
        lastDay: "13-Aug-2020",
        email: "nstariec@fema.gov",
        skype: "nstariec",
        country: "China",
        time: "5:06 PM",
        phone: "+86 (281) 193-1300",
        avatarMini: "https://robohash.org/etofficiaunde.png?size=40x40&set=set1",
        avatar: "https://robohash.org/consecteturoditnesciunt.png?size=400x400&set=set1"
    },
    {
        id: 14,
        name: "Maureen Doulton",
        status: "seenToday",
        seenTime: "12:34 PM",
        lastDay: "05-May-2020",
        email: "mdoultond@pagesperso-orange.fr",
        skype: "mdoultond",
        country: "Venezuela",
        time: "8:31 PM",
        phone: "+58 (841) 135-1534",
        avatarMini: "https://robohash.org/laborenatusdignissimos.png?size=40x40&set=set1",
        avatar: "https://robohash.org/voluptatemnobisaliquam.png?size=400x400&set=set1"
    },
    {
        id: 15,
        name: "Chico Fawloe",
        status: "seenToday",
        seenTime: "2:24 PM",
        lastDay: "14-Jan-2021",
        email: "cfawloee@umn.edu",
        skype: "cfawloee",
        country: "Russia",
        time: "4:42 PM",
        phone: "+7 (579) 686-7981",
        avatarMini: "https://robohash.org/quisbeataeeligendi.png?size=40x40&set=set1",
        avatar: "https://robohash.org/quoseiusoptio.png?size=400x400&set=set1"
    },
    {
        id: 16,
        name: "Letty Darcey",
        status: "seenToday",
        seenTime: "4:54 PM",
        lastDay: "11-Mar-2020",
        email: "ldarceyf@ed.gov",
        skype: "ldarceyf",
        country: "Botswana",
        time: "12:34 PM",
        phone: "+267 (676) 631-5270",
        avatarMini: "https://robohash.org/occaecatidolorquia.png?size=40x40&set=set1",
        avatar: "https://robohash.org/eosvoluptatemnostrum.png?size=400x400&set=set1"
    },
    {
        id: 17,
        name: "Pegeen Wytchard",
        status: "seenToday",
        seenTime: "9:12 PM",
        lastDay: "23-Mar-2020",
        email: "pwytchardg@pagesperso-orange.fr",
        skype: "pwytchardg",
        country: "Poland",
        time: "2:24 PM",
        phone: "+48 (227) 616-9365",
        avatarMini: "https://robohash.org/quamfugaat.png?size=40x40&set=set1",
        avatar: "https://robohash.org/recusandaeabdolorem.png?size=400x400&set=set1"
    },
    {
        id: 18,
        name: "Brandice Grangier",
        status: "offline",
        seenTime: "2:01 PM",
        lastDay: "25-Jan-2021",
        email: "bgrangierh@edublogs.org",
        skype: "bgrangierh",
        country: "Portugal",
        time: "4:54 PM",
        phone: "+351 (173) 538-6891",
        avatarMini: "https://robohash.org/velitaautem.png?size=40x40&set=set1",
        avatar: "https://robohash.org/maximedoloressuscipit.png?size=400x400&set=set1"
    },
    {
        id: 19,
        name: "Tuesday Bamborough",
        status: "offline",
        seenTime: "8:44 PM",
        lastDay: "10-Dec-2020",
        email: "tbamboroughi@so-net.ne.jp",
        skype: "tbamboroughi",
        country: "Portugal",
        time: "9:12 PM",
        phone: "+351 (906) 331-6127",
        avatarMini: "https://robohash.org/commodiquiconsectetur.png?size=40x40&set=set1",
        avatar: "https://robohash.org/animietsit.png?size=400x400&set=set1"
    },
    {
        id: 20,
        name: "Manuel Dumblton",
        status: "offline",
        seenTime: "8:13 PM",
        lastDay: "02-Mar-2021",
        email: "mdumbltonj@bizjournals.com",
        skype: "mdumbltonj",
        country: "Indonesia",
        time: "2:01 PM",
        phone: "+62 (702) 693-6062",
        avatarMini: "https://robohash.org/etrepudiandaequi.png?size=40x40&set=set1",
        avatar: "https://robohash.org/oditdoloremqueeos.png?size=400x400&set=set1"
    }],
    messages: [
        {
            id: 1,
            messages: [{ isMy: true, text: "interdum in ante vestibulum ante" },
            { isMy: false, text: "bibendum felis sed interdum venenatis" },
            { isMy: false, text: "tincidunt in leo maecenas pulvinar" },
            { isMy: true, text: "purus sit amet" },
            { isMy: false, text: "iaculis congue vivamus" },
            { isMy: true, text: "pulvinar nulla pede ullamcorper augue a suscipit" },
            { isMy: true, text: "gravida nisi at nibh in hac" },
            { isMy: true, text: "in faucibus" },
            { isMy: true, text: "ultrices mattis odio donec vitae nisi nam" },
            { isMy: true, text: "blandit ultrices" },
            { isMy: false, text: "in est risus auctor sed tristique in" },
            { isMy: false, text: "urna pretium nisl" },
            { isMy: false, text: "sed nisl nunc" },
            { isMy: true, text: "non velit nec" },
            { isMy: false, text: "neque sapien placerat ante nulla" },
            { isMy: false, text: "odio odio elementum eu interdum eu tincidunt" },
            { isMy: true, text: "nisl duis bibendum felis sed interdum venenatis" },
            { isMy: false, text: "augue vel accumsan tellus" }]
        },
        {
            id: 2,
            messages: [{ isMy: true, text: "aenean fermentum donec ut mauris" },
            { isMy: false, text: "praesent lectus vestibulum quam sapien" },
            { isMy: true, text: "nibh in lectus pellentesque at" },
            { isMy: false, text: "pulvinar nulla pede" }]
        },
        {
            id: 3,
            messages: [{ isMy: true, text: "luctus cum sociis" },
            { isMy: true, text: "mauris ullamcorper purus sit amet" },
            { isMy: false, text: "in quam fringilla rhoncus mauris" },
            { isMy: false, text: "auctor sed tristique in tempus sit amet" },
            { isMy: true, text: "sodales scelerisque mauris sit amet eros suspendisse" },
            { isMy: false, text: "nulla neque libero convallis eget eleifend luctus" },
            { isMy: true, text: "consequat varius" },
            { isMy: false, text: "neque vestibulum eget vulputate ut ultrices" },
            { isMy: false, text: "ornare imperdiet sapien" },
            { isMy: true, text: "ut nunc vestibulum ante ipsum primis in" },
            { isMy: false, text: "phasellus id sapien in sapien iaculis" },
            { isMy: false, text: "justo morbi ut" },
            { isMy: true, text: "sed tristique in tempus sit amet sem" },
            { isMy: false, text: "molestie nibh in" },
            { isMy: true, text: "lobortis est phasellus sit amet erat nulla" },
            { isMy: false, text: "duis bibendum morbi non quam" },
            { isMy: false, text: "eget eros elementum" },
            { isMy: true, text: "nec euismod scelerisque quam" },
            { isMy: false, text: "vestibulum aliquet" }]
        },
        {
            id: 4,
            messages: [{ isMy: false, text: "habitasse platea dictumst morbi vestibulum velit" },
            { isMy: true, text: "venenatis lacinia aenean sit amet justo morbi" },
            { isMy: true, text: "primis in faucibus orci" },
            { isMy: true, text: "hac habitasse platea dictumst morbi vestibulum" },
            { isMy: true, text: "metus arcu adipiscing molestie hendrerit at" },
            { isMy: true, text: "convallis tortor risus dapibus augue vel" },
            { isMy: false, text: "cras in purus eu" },
            { isMy: true, text: "habitasse platea dictumst maecenas ut massa" },
            { isMy: false, text: "tincidunt lacus at velit vivamus vel" },
            { isMy: true, text: "in est risus" },
            { isMy: true, text: "rutrum ac lobortis vel dapibus at" },
            { isMy: false, text: "quis turpis sed ante vivamus" },
            { isMy: false, text: "vitae consectetuer eget rutrum at lorem integer" },
            { isMy: true, text: "sit amet nulla quisque arcu libero" }]
        },
        {
            id: 5,
            messages: [{ isMy: true, text: "nulla tempus vivamus in" },
            { isMy: true, text: "tempus vivamus in felis eu sapien" },
            { isMy: true, text: "leo pellentesque ultrices mattis" },
            { isMy: true, text: "in faucibus orci" },
            { isMy: true, text: "mauris morbi non" },
            { isMy: false, text: "facilisi cras non velit nec" }]
        },
        {
            id: 6,
            messages: [{ isMy: false, text: "odio consequat varius" },
            { isMy: false, text: "varius ut blandit non interdum in" },
            { isMy: false, text: "quis tortor" },
            { isMy: false, text: "libero rutrum" },
            { isMy: false, text: "dui luctus" },
            { isMy: false, text: "lectus vestibulum quam sapien varius ut blandit" },
            { isMy: false, text: "cras in purus eu" },
            { isMy: true, text: "viverra diam vitae quam" },
            { isMy: true, text: "mauris sit amet eros suspendisse accumsan tortor" },
            { isMy: true, text: "potenti in eleifend" },
            { isMy: false, text: "placerat praesent blandit nam" },
            { isMy: true, text: "elit proin" },
            { isMy: true, text: "dignissim vestibulum vestibulum" },
            { isMy: true, text: "consequat lectus in est risus" },
            { isMy: false, text: "blandit lacinia erat vestibulum sed magna" }]
        },
        {
            id: 7,
            messages: [{ isMy: true, text: "consectetuer adipiscing elit" },
            { isMy: true, text: "amet justo morbi ut odio cras mi" },
            { isMy: false, text: "nullam orci" },
            { isMy: false, text: "sit amet consectetuer adipiscing elit proin" },
            { isMy: true, text: "elit proin interdum" },
            { isMy: false, text: "dis parturient montes nascetur" },
            { isMy: false, text: "nulla sed accumsan felis" },
            { isMy: false, text: "sit amet sapien dignissim vestibulum vestibulum ante" },
            { isMy: true, text: "odio cras mi pede malesuada" },
            { isMy: true, text: "vestibulum ante ipsum primis in faucibus" },
            { isMy: true, text: "interdum venenatis turpis enim blandit mi in" },
            { isMy: true, text: "tempor convallis nulla neque libero convallis" },
            { isMy: true, text: "molestie nibh in lectus pellentesque" },
            { isMy: true, text: "orci pede" },
            { isMy: true, text: "in hac habitasse" },
            { isMy: false, text: "vestibulum proin eu mi nulla" },
            { isMy: true, text: "non velit nec nisi vulputate nonummy" },
            { isMy: false, text: "suspendisse potenti nullam porttitor lacus at" },
            { isMy: false, text: "feugiat et eros vestibulum" },
            { isMy: false, text: "lacinia eget tincidunt" }]
        },
        {
            id: 8,
            messages: [{ isMy: false, text: "amet justo" },
            { isMy: true, text: "vel augue vestibulum" },
            { isMy: false, text: "nam ultrices" },
            { isMy: false, text: "suscipit nulla elit" },
            { isMy: true, text: "odio curabitur convallis duis consequat dui nec" },
            { isMy: false, text: "pellentesque ultrices mattis odio" },
            { isMy: true, text: "quam a odio in" },
            { isMy: false, text: "ante ipsum primis in" },
            { isMy: false, text: "ac enim in tempor turpis nec" }]
        },
        {
            id: 9,
            messages: [{ isMy: false, text: "vestibulum sagittis sapien cum sociis" },
            { isMy: true, text: "iaculis diam erat fermentum justo nec condimentum" },
            { isMy: false, text: "aenean auctor gravida sem praesent id" },
            { isMy: false, text: "odio consequat varius integer ac leo pellentesque" },
            { isMy: false, text: "ornare imperdiet sapien" },
            { isMy: true, text: "quis turpis" },
            { isMy: true, text: "quis orci eget orci vehicula" },
            { isMy: true, text: "sapien arcu sed augue aliquam erat volutpat" },
            { isMy: false, text: "pellentesque ultrices phasellus" },
            { isMy: false, text: "blandit lacinia erat vestibulum sed magna at" },
            { isMy: false, text: "nunc vestibulum ante ipsum primis in" },
            { isMy: false, text: "mattis nibh" },
            { isMy: false, text: "nisl nunc rhoncus dui vel" },
            { isMy: false, text: "adipiscing elit proin risus praesent lectus" },
            { isMy: false, text: "platea dictumst" },
            { isMy: false, text: "platea dictumst morbi vestibulum velit id pretium" },
            { isMy: true, text: "vel nisl duis" },
            { isMy: false, text: "justo aliquam quis" }]
        },
        {
            id: 10,
            messages: [{ isMy: false, text: "lorem quisque" },
            { isMy: true, text: "donec odio" },
            { isMy: true, text: "tortor duis" },
            { isMy: false, text: "suspendisse potenti cras in purus eu magna" },
            { isMy: true, text: "ut suscipit" },
            { isMy: false, text: "rutrum nulla nunc purus phasellus in felis" },
            { isMy: true, text: "nisl duis bibendum felis sed" },
            { isMy: false, text: "penatibus et magnis" },
            { isMy: true, text: "diam erat" },
            { isMy: false, text: "luctus cum sociis" },
            { isMy: true, text: "quam a odio" },
            { isMy: false, text: "phasellus in felis donec" },
            { isMy: true, text: "ligula nec" },
            { isMy: true, text: "metus vitae ipsum aliquam non" },
            { isMy: false, text: "nisl nunc rhoncus dui vel sem sed" },
            { isMy: true, text: "massa donec" },
            { isMy: true, text: "vulputate justo in blandit ultrices enim lorem" },
            { isMy: true, text: "pellentesque ultrices phasellus" },
            { isMy: false, text: "vulputate ut ultrices vel augue vestibulum" }]
        },
        {
            id: 11,
            messages: [{ isMy: true, text: "vehicula consequat morbi a ipsum integer a" },
            { isMy: false, text: "ipsum ac tellus semper interdum mauris" },
            { isMy: false, text: "nec dui luctus rutrum nulla tellus" },
            { isMy: true, text: "nunc proin at turpis a pede posuere" },
            { isMy: true, text: "sit amet" },
            { isMy: false, text: "vel est donec" },
            { isMy: true, text: "erat volutpat in congue" },
            { isMy: true, text: "in sapien iaculis congue" }]
        },
        {
            id: 12,
            messages: [{ isMy: true, text: "mattis pulvinar nulla pede ullamcorper augue a" },
            { isMy: true, text: "enim leo rhoncus sed vestibulum sit" },
            { isMy: false, text: "mi nulla" },
            { isMy: true, text: "lobortis sapien sapien non" }]
        },
        {
            id: 13,
            messages: [{ isMy: true, text: "commodo placerat" },
            { isMy: false, text: "volutpat sapien arcu sed augue aliquam erat" },
            { isMy: false, text: "in sagittis dui vel nisl duis" },
            { isMy: true, text: "eu est congue elementum in hac habitasse" },
            { isMy: true, text: "ante ipsum primis in faucibus" },
            { isMy: true, text: "in felis donec semper sapien a" },
            { isMy: false, text: "quis libero nullam sit amet turpis" },
            { isMy: false, text: "ut mauris eget massa tempor convallis nulla" },
            { isMy: false, text: "etiam vel augue vestibulum rutrum rutrum" },
            { isMy: true, text: "ac nibh fusce lacus" },
            { isMy: false, text: "erat fermentum justo nec condimentum" }]
        },
        {
            id: 14,
            messages: [{ isMy: false, text: "cubilia curae mauris viverra diam" },
            { isMy: false, text: "elementum pellentesque quisque" },
            { isMy: false, text: "vel dapibus at diam nam" },
            { isMy: true, text: "turpis donec posuere metus vitae" }]
        },
        {
            id: 15,
            messages: [{ isMy: true, text: "in libero ut" },
            { isMy: false, text: "potenti in eleifend quam" },
            { isMy: false, text: "lacus at velit vivamus vel nulla" },
            { isMy: false, text: "a suscipit nulla elit" },
            { isMy: false, text: "adipiscing elit" },
            { isMy: false, text: "ut erat id" },
            { isMy: false, text: "sem fusce consequat nulla nisl nunc" },
            { isMy: true, text: "venenatis non" },
            { isMy: false, text: "ipsum primis in faucibus orci" },
            { isMy: true, text: "consequat nulla nisl nunc nisl duis bibendum" },
            { isMy: true, text: "nunc purus phasellus in felis donec" },
            { isMy: true, text: "curae nulla dapibus dolor vel est donec" },
            { isMy: false, text: "eu massa donec dapibus duis at velit" },
            { isMy: true, text: "sit amet sapien dignissim vestibulum vestibulum ante" },
            { isMy: false, text: "in ante vestibulum" }]
        },
        {
            id: 16,
            messages: [{ isMy: false, text: "viverra pede ac diam" },
            { isMy: true, text: "lorem vitae" },
            { isMy: true, text: "metus aenean fermentum" },
            { isMy: true, text: "nisl duis bibendum felis sed interdum" },
            { isMy: true, text: "rutrum nulla tellus" },
            { isMy: false, text: "venenatis turpis" },
            { isMy: false, text: "lectus suspendisse potenti in eleifend quam" },
            { isMy: false, text: "morbi non" },
            { isMy: true, text: "sem duis aliquam convallis nunc proin" },
            { isMy: false, text: "felis eu sapien cursus vestibulum proin eu" },
            { isMy: false, text: "velit eu est congue" },
            { isMy: true, text: "cubilia curae mauris viverra diam vitae quam" },
            { isMy: false, text: "platea dictumst etiam faucibus" },
            { isMy: true, text: "mauris laoreet" },
            { isMy: true, text: "at lorem integer tincidunt" },
            { isMy: true, text: "eget eros elementum pellentesque quisque porta volutpat" },
            { isMy: true, text: "felis fusce posuere felis" }]
        },
        {
            id: 17,
            messages: [{ isMy: false, text: "odio elementum eu interdum eu tincidunt in" },
            { isMy: true, text: "risus praesent" },
            { isMy: false, text: "sit amet eros" },
            { isMy: false, text: "curabitur gravida nisi at nibh" },
            { isMy: true, text: "sit amet nunc viverra dapibus nulla" },
            { isMy: true, text: "libero rutrum ac lobortis vel dapibus at" },
            { isMy: false, text: "ultrices enim lorem" }]
        },
        {
            id: 18,
            messages: [{ isMy: false, text: "nulla justo aliquam" },
            { isMy: false, text: "nullam orci pede" },
            { isMy: false, text: "maecenas leo odio condimentum id luctus" },
            { isMy: true, text: "vivamus vel nulla eget eros elementum" },
            { isMy: true, text: "erat quisque erat eros viverra" },
            { isMy: true, text: "erat volutpat in congue etiam justo etiam" },
            { isMy: false, text: "risus semper porta volutpat quam pede" },
            { isMy: true, text: "diam cras pellentesque" }]
        },
        {
            id: 19,
            messages: [{ isMy: false, text: "eget nunc donec quis orci" },
            { isMy: false, text: "blandit lacinia" },
            { isMy: true, text: "duis ac nibh" },
            { isMy: true, text: "eget congue eget semper rutrum" },
            { isMy: true, text: "blandit lacinia erat vestibulum sed" },
            { isMy: false, text: "nisi eu orci mauris" },
            { isMy: true, text: "amet diam" }]
        },
        {
            id: 20,
            messages: [{ isMy: false, text: "in ante vestibulum" },
            { isMy: false, text: "molestie nibh in" },
            { isMy: true, text: "vestibulum sed" },
            { isMy: true, text: "dui vel nisl" },
            { isMy: false, text: "justo aliquam quis" },
            { isMy: false, text: "sapien dignissim vestibulum vestibulum ante ipsum" },
            { isMy: true, text: "sed magna" },
            { isMy: false, text: "et ultrices posuere cubilia curae" },
            { isMy: true, text: "et ultrices posuere cubilia curae mauris viverra" },
            { isMy: false, text: "magna ac consequat metus sapien ut" },
            { isMy: false, text: "curae mauris" },
            { isMy: false, text: "nibh fusce lacus" },
            { isMy: false, text: "volutpat erat" },
            { isMy: false, text: "pretium iaculis justo in" },
            { isMy: false, text: "sociis natoque" },
            { isMy: false, text: "tristique est" },
            { isMy: false, text: "molestie nibh in lectus pellentesque at" },
            { isMy: true, text: "amet consectetuer adipiscing elit proin risus praesent" }]
        }
    ],
    newFraseText: '',
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRASE:
            if (state.newFraseText === '') return state;
            return {
                ...state,
                messages: state.messages.map((item, ind) => {
                    if (ind !== action.num) return item;
                    else {
                        item.messages = [
                            ...state.messages[action.num].messages,
                            {
                                isMy: true,
                                text: state.newFraseText,
                            },
                        ];
                        return item;
                    }
                }),
                newFraseText: '',
            };
        case ON_CHANGE_FRASE:
            return {
                ...state,
                newFraseText: action.text,
            }
        default:
            return state;
    }
}

export default messagesReducer;
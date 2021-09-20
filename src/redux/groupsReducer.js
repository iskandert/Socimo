const ON_JOINED = 'ON-JOINED';
const ON_CHANGE_PAGE = 'ON_CHANGE-PAGE';
const ON_SHIFT_PAGE = 'ON-SHIFT-PAGE';
const SHOW_MORE = 'SHOW-MORE';
const SHOW_LESS = 'SHOW-LESS';

export const onJoinedActionCreator = (id) => ({
    type: ON_JOINED,
    id: id,
});

export const onChangePageActionCreator = (value) => ({
    type: ON_CHANGE_PAGE,
    interval: [value - 1, value],
});

export const onShiftPageActionCreator = (value) => ({
    type: ON_SHIFT_PAGE,
    direction: value,
});

export const showMoreActionCreator = () => ({
    type: SHOW_MORE,
});
export const showLessActionCreator = () => ({
    type: SHOW_LESS,
});

let initialState = {
    groupsData: [
        {
            id: 1,
            name: "Turquoise neural-net",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "454M",
            joined: true
        },
        {
            id: 2,
            name: "Blue Re-engineered",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "739K",
            joined: false
        },
        {
            id: 3,
            name: "Mauv incremental",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "255M",
            joined: false
        },
        {
            id: 4,
            name: "Puce Face to face",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "268M",
            joined: false
        },
        {
            id: 5,
            name: "Yellow content-based",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "435M",
            joined: true
        },
        {
            id: 6,
            name: "Red analyzer",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "514M",
            joined: true
        },
        {
            id: 7,
            name: "Indigo client-driven",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "848K",
            joined: false
        },
        {
            id: 8,
            name: "Khaki dedicated",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "381K",
            joined: false
        },
        {
            id: 9,
            name: "Violet Automated",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "767M",
            joined: false
        },
        {
            id: 10,
            name: "Teal circuit",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "286M",
            joined: false
        },
        {
            id: 11,
            name: "Turquoise Re-engineered",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "749K",
            joined: true
        },
        {
            id: 12,
            name: "Purple Synchronised",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "313K",
            joined: true
        },
        {
            id: 13,
            name: "Pink Organized",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "248K",
            joined: false
        },
        {
            id: 14,
            name: "Khaki neural-net",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "227M",
            joined: true
        },
        {
            id: 15,
            name: "Teal hybrid",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "854M",
            joined: false
        },
        {
            id: 16,
            name: "Fuscia neutral",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "288K",
            joined: false
        },
        {
            id: 17,
            name: "Orange Optimized",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "32K",
            joined: true
        },
        {
            id: 18,
            name: "Purple Polarised",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "700K",
            joined: true
        },
        {
            id: 19,
            name: "Puce hub",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "844M",
            joined: true
        },
        {
            id: 20,
            name: "Red cohesive",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "865M",
            joined: true
        },
        {
            id: 21,
            name: "Aquamarine content-based",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "825K",
            joined: true
        },
        {
            id: 22,
            name: "Purple static",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "644K",
            joined: true
        },
        {
            id: 23,
            name: "Green 4th generation",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "101K",
            joined: false
        },
        {
            id: 24,
            name: "Indigo asynchronous",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "547K",
            joined: false
        },
        {
            id: 25,
            name: "Purple 5th generation",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "837K",
            joined: true
        },
        {
            id: 26,
            name: "Crimson User-friendly",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "656M",
            joined: true
        },
        {
            id: 27,
            name: "Goldenrod zero defect",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "11K",
            joined: false
        },
        {
            id: 28,
            name: "Mauv Synchronised",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "969K",
            joined: true
        },
        {
            id: 29,
            name: "Teal implementation",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "198M",
            joined: false
        },
        {
            id: 30,
            name: "Pink Ameliorated",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "944K",
            joined: true
        },
        {
            id: 31,
            name: "Mauv optimal",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "735K",
            joined: true
        },
        {
            id: 32,
            name: "Orange Profit-focused",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "89M",
            joined: true
        },
        {
            id: 33,
            name: "Aquamarine Multi-lateral",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "272K",
            joined: false
        },
        {
            id: 34,
            name: "Violet optimal",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "303K",
            joined: false
        },
        {
            id: 35,
            name: "Pink Upgradable",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "245M",
            joined: false
        },
        {
            id: 36,
            name: "Purple productivity",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "902K",
            joined: true
        },
        {
            id: 37,
            name: "Puce system engine",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "423K",
            joined: false
        },
        {
            id: 38,
            name: "Green array",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "625K",
            joined: true
        },
        {
            id: 39,
            name: "Violet tangible",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "203K",
            joined: false
        },
        {
            id: 40,
            name: "Puce Profit-focused",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "965K",
            joined: true
        },
        {
            id: 41,
            name: "Pink Integrated",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "820M",
            joined: false
        },
        {
            id: 42,
            name: "Turquoise functionalities",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "547K",
            joined: false
        },
        {
            id: 43,
            name: "Blue approach",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "815M",
            joined: true
        },
        {
            id: 44,
            name: "Crimson capability",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "213M",
            joined: false
        },
        {
            id: 45,
            name: "Fuscia conglomeration",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "881M",
            joined: true
        },
        {
            id: 46,
            name: "Purple multimedia",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "594K",
            joined: true
        },
        {
            id: 47,
            name: "Red architecture",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "667K",
            joined: false
        },
        {
            id: 48,
            name: "Red composite",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "949K",
            joined: true
        },
        {
            id: 49,
            name: "Goldenrod Front-line",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "3M",
            joined: true
        },
        {
            id: 50,
            name: "Puce exuding",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "662M",
            joined: true
        },
        {
            id: 51,
            name: "Red firmware",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "884M",
            joined: true
        },
        {
            id: 52,
            name: "Purple Advanced",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "703K",
            joined: true
        },
        {
            id: 53,
            name: "Blue Synergized",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "827M",
            joined: false
        },
        {
            id: 54,
            name: "Goldenrod De-engineered",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "594M",
            joined: false
        },
        {
            id: 55,
            name: "Orange model",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "883K",
            joined: false
        },
        {
            id: 56,
            name: "Mauv 5th generation",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "272M",
            joined: true
        },
        {
            id: 57,
            name: "Maroon holistic",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "416M",
            joined: false
        },
        {
            id: 58,
            name: "Aquamarine orchestration",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "361M",
            joined: true
        },
        {
            id: 59,
            name: "Teal Optional",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "552M",
            joined: false
        },
        {
            id: 60,
            name: "Purple mobile",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "975M",
            joined: true
        },
        {
            id: 61,
            name: "Blue hardware",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "926M",
            joined: false
        },
        {
            id: 62,
            name: "Teal function",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "745K",
            joined: true
        },
        {
            id: 63,
            name: "Puce Upgradable",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "708K",
            joined: false
        },
        {
            id: 64,
            name: "Pink upward-trending",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "356K",
            joined: true
        },
        {
            id: 65,
            name: "Aquamarine installation",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "604M",
            joined: false
        },
        {
            id: 66,
            name: "Pink firmware",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "155M",
            joined: false
        },
        {
            id: 67,
            name: "Fuscia real-time",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "824K",
            joined: false
        },
        {
            id: 68,
            name: "Purple complexity",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "403M",
            joined: false
        },
        {
            id: 69,
            name: "Purple extranet",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "404M",
            joined: false
        },
        {
            id: 70,
            name: "Red fault-tolerant",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "952M",
            joined: false
        },
        {
            id: 71,
            name: "Orange motivating",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "735M",
            joined: false
        },
        {
            id: 72,
            name: "Green database",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "765K",
            joined: true
        },
        {
            id: 73,
            name: "Yellow tertiary",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "404K",
            joined: false
        },
        {
            id: 74,
            name: "Red zero administration",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "193M",
            joined: false
        },
        {
            id: 75,
            name: "Green portal",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "216M",
            joined: true
        },
        {
            id: 76,
            name: "Pink Focused",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "492K",
            joined: false
        },
        {
            id: 77,
            name: "Indigo Intuitive",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "53M",
            joined: false
        },
        {
            id: 78,
            name: "Puce budgetary management",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "535K",
            joined: true
        },
        {
            id: 79,
            name: "Mauv Horizontal",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "490K",
            joined: true
        },
        {
            id: 80,
            name: "Teal parallelism",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "482K",
            joined: true
        },
        {
            id: 81,
            name: "Crimson Implemented",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "392M",
            joined: false
        },
        {
            id: 82,
            name: "Turquoise Business-focused",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "480K",
            joined: false
        },
        {
            id: 83,
            name: "Violet Right-sized",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "916K",
            joined: false
        },
        {
            id: 84,
            name: "Khaki logistical",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "892M",
            joined: false
        },
        {
            id: 85,
            name: "Orange Assimilated",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "737K",
            joined: false
        },
        {
            id: 86,
            name: "Aquamarine Front-line",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "489K",
            joined: false
        },
        {
            id: 87,
            name: "Violet pricing structure",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "818K",
            joined: false
        },
        {
            id: 88,
            name: "Yellow Object-based",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "211K",
            joined: false
        },
        {
            id: 89,
            name: "Indigo array",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "620K",
            joined: true
        },
        {
            id: 90,
            name: "Indigo bottom-line",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "781K",
            joined: true
        },
        {
            id: 91,
            name: "Aquamarine zero defect",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "860M",
            joined: false
        },
        {
            id: 92,
            name: "Red Public-key",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "318K",
            joined: true
        },
        {
            id: 93,
            name: "Blue workforce",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "259M",
            joined: true
        },
        {
            id: 94,
            name: "Yellow bi-directional",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "732M",
            joined: true
        },
        {
            id: 95,
            name: "Mauv Function-based",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "496K",
            joined: false
        },
        {
            id: 96,
            name: "Teal software",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "883K",
            joined: false
        },
        {
            id: 97,
            name: "Violet info-mediaries",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "198M",
            joined: false
        },
        {
            id: 98,
            name: "Red multi-tasking",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "414K",
            joined: false
        },
        {
            id: 99,
            name: "Goldenrod Monitored",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "738M",
            joined: true
        },
        {
            id: 100,
            name: "Indigo help-desk",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "448K",
            joined: false
        },







        {
            id: 1,
            name: "Turquoise neural-net",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "454M",
            joined: true
        },
        {
            id: 2,
            name: "Blue Re-engineered",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "739K",
            joined: false
        },
        {
            id: 3,
            name: "Mauv incremental",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "255M",
            joined: false
        },
        {
            id: 4,
            name: "Puce Face to face",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "268M",
            joined: false
        },
        {
            id: 5,
            name: "Yellow content-based",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "435M",
            joined: true
        },
        {
            id: 6,
            name: "Red analyzer",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "514M",
            joined: true
        },
        {
            id: 7,
            name: "Indigo client-driven",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "848K",
            joined: false
        },
        {
            id: 8,
            name: "Khaki dedicated",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "381K",
            joined: false
        },
        {
            id: 9,
            name: "Violet Automated",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "767M",
            joined: false
        },
        {
            id: 10,
            name: "Teal circuit",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "286M",
            joined: false
        },
        {
            id: 11,
            name: "Turquoise Re-engineered",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "749K",
            joined: true
        },
        {
            id: 12,
            name: "Purple Synchronised",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "313K",
            joined: true
        },
        {
            id: 13,
            name: "Pink Organized",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "248K",
            joined: false
        },
        {
            id: 14,
            name: "Khaki neural-net",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "227M",
            joined: true
        },
        {
            id: 15,
            name: "Teal hybrid",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "854M",
            joined: false
        },
        {
            id: 16,
            name: "Fuscia neutral",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "288K",
            joined: false
        },
        {
            id: 17,
            name: "Orange Optimized",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "32K",
            joined: true
        },
        {
            id: 18,
            name: "Purple Polarised",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "700K",
            joined: true
        },
        {
            id: 19,
            name: "Puce hub",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "844M",
            joined: true
        },
        {
            id: 20,
            name: "Red cohesive",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "865M",
            joined: true
        },
        {
            id: 21,
            name: "Aquamarine content-based",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "825K",
            joined: true
        },
        {
            id: 22,
            name: "Purple static",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "644K",
            joined: true
        },
        {
            id: 23,
            name: "Green 4th generation",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "101K",
            joined: false
        },
        {
            id: 24,
            name: "Indigo asynchronous",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "547K",
            joined: false
        },
        {
            id: 25,
            name: "Purple 5th generation",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "837K",
            joined: true
        },
        {
            id: 26,
            name: "Crimson User-friendly",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "656M",
            joined: true
        },
        {
            id: 27,
            name: "Goldenrod zero defect",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "11K",
            joined: false
        },
        {
            id: 28,
            name: "Mauv Synchronised",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "969K",
            joined: true
        },
        {
            id: 29,
            name: "Teal implementation",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "198M",
            joined: false
        },
        {
            id: 30,
            name: "Pink Ameliorated",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "944K",
            joined: true
        },
        {
            id: 31,
            name: "Mauv optimal",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "735K",
            joined: true
        },
        {
            id: 32,
            name: "Orange Profit-focused",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "89M",
            joined: true
        },
        {
            id: 33,
            name: "Aquamarine Multi-lateral",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "272K",
            joined: false
        },
        {
            id: 34,
            name: "Violet optimal",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "303K",
            joined: false
        },
        {
            id: 35,
            name: "Pink Upgradable",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "245M",
            joined: false
        },
        {
            id: 36,
            name: "Purple productivity",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "902K",
            joined: true
        },
        {
            id: 37,
            name: "Puce system engine",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "423K",
            joined: false
        },
        {
            id: 38,
            name: "Green array",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "625K",
            joined: true
        },
        {
            id: 39,
            name: "Violet tangible",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "203K",
            joined: false
        },
        {
            id: 40,
            name: "Puce Profit-focused",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "965K",
            joined: true
        },
        {
            id: 41,
            name: "Pink Integrated",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "820M",
            joined: false
        },
        {
            id: 42,
            name: "Turquoise functionalities",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "547K",
            joined: false
        },
        {
            id: 43,
            name: "Blue approach",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "815M",
            joined: true
        },
        {
            id: 44,
            name: "Crimson capability",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "213M",
            joined: false
        },
        {
            id: 45,
            name: "Fuscia conglomeration",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "881M",
            joined: true
        },
        {
            id: 46,
            name: "Purple multimedia",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "594K",
            joined: true
        },
        {
            id: 47,
            name: "Red architecture",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "667K",
            joined: false
        },
        {
            id: 48,
            name: "Red composite",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "949K",
            joined: true
        },
        {
            id: 49,
            name: "Goldenrod Front-line",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "3M",
            joined: true
        },
        {
            id: 50,
            name: "Puce exuding",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "662M",
            joined: true
        },
        {
            id: 51,
            name: "Red firmware",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "884M",
            joined: true
        },
        {
            id: 52,
            name: "Purple Advanced",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "703K",
            joined: true
        },
        {
            id: 53,
            name: "Blue Synergized",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "827M",
            joined: false
        },
        {
            id: 54,
            name: "Goldenrod De-engineered",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "594M",
            joined: false
        },
        {
            id: 55,
            name: "Orange model",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "883K",
            joined: false
        },
        {
            id: 56,
            name: "Mauv 5th generation",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "272M",
            joined: true
        },
        {
            id: 57,
            name: "Maroon holistic",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "416M",
            joined: false
        },
        {
            id: 58,
            name: "Aquamarine orchestration",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "361M",
            joined: true
        },
        {
            id: 59,
            name: "Teal Optional",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "552M",
            joined: false
        },
        {
            id: 60,
            name: "Purple mobile",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "975M",
            joined: true
        },
        {
            id: 61,
            name: "Blue hardware",
            avatar: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            membersCount: "926M",
            joined: false
        },
        {
            id: 62,
            name: "Teal function",
            avatar: "https://images.unsplash.com/photo-1627573933477-a3a513183546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "745K",
            joined: true
        },
        {
            id: 63,
            name: "Puce Upgradable",
            avatar: "https://images.unsplash.com/photo-1627798012595-4ee8cbc47905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "708K",
            joined: false
        },
        {
            id: 64,
            name: "Pink upward-trending",
            avatar: "https://images.unsplash.com/photo-1627681796069-8fce519c5671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "356K",
            joined: true
        },
        {
            id: 65,
            name: "Aquamarine installation",
            avatar: "https://images.unsplash.com/photo-1627855009513-5afd56fd600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            membersCount: "604M",
            joined: false
        },
        {
            id: 66,
            name: "Pink firmware",
            avatar: "https://images.unsplash.com/photo-1627876649351-45b0a0f34ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "155M",
            joined: false
        },
        {
            id: 67,
            name: "Fuscia real-time",
            avatar: "https://images.unsplash.com/photo-1627890331214-cf70578152f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "824K",
            joined: false
        },
        {
            id: 68,
            name: "Purple complexity",
            avatar: "https://images.unsplash.com/photo-1627888464504-42e134a45637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "403M",
            joined: false
        },
        {
            id: 69,
            name: "Purple extranet",
            avatar: "https://images.unsplash.com/photo-1627669729462-2be44dc77c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "404M",
            joined: false
        },
        {
            id: 70,
            name: "Red fault-tolerant",
            avatar: "https://images.unsplash.com/photo-1627751492473-0a7235db91c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "952M",
            joined: false
        },
        {
            id: 71,
            name: "Orange motivating",
            avatar: "https://images.unsplash.com/photo-1627771229107-fcda56350331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "735M",
            joined: false
        },
        {
            id: 72,
            name: "Green database",
            avatar: "https://images.unsplash.com/photo-1627481977083-943d02e8736f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "765K",
            joined: true
        },
        {
            id: 73,
            name: "Yellow tertiary",
            avatar: "https://images.unsplash.com/photo-1627530930207-983280fd1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "404K",
            joined: false
        },
        {
            id: 74,
            name: "Red zero administration",
            avatar: "https://images.unsplash.com/photo-1627798446696-677a6de45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "193M",
            joined: false
        },
        {
            id: 75,
            name: "Green portal",
            avatar: "https://images.unsplash.com/photo-1627729115511-f5673a4e0568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "216M",
            joined: true
        },
        {
            id: 76,
            name: "Pink Focused",
            avatar: "https://images.unsplash.com/photo-1627788116192-461ebc6ab954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "492K",
            joined: false
        },
        {
            id: 77,
            name: "Indigo Intuitive",
            avatar: "https://images.unsplash.com/photo-1627819459557-dd8e1b7a3b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "53M",
            joined: false
        },
        {
            id: 78,
            name: "Puce budgetary management",
            avatar: "https://images.unsplash.com/photo-1627767432758-7a1db21ab302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "535K",
            joined: true
        },
        {
            id: 79,
            name: "Mauv Horizontal",
            avatar: "https://images.unsplash.com/photo-1627766372386-074a6fe2f622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "490K",
            joined: true
        },
        {
            id: 80,
            name: "Teal parallelism",
            avatar: "https://images.unsplash.com/photo-1627781760908-6610db331874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "482K",
            joined: true
        },
        {
            id: 81,
            name: "Crimson Implemented",
            avatar: "https://images.unsplash.com/photo-1627773523235-a1c39dc40513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "392M",
            joined: false
        },
        {
            id: 82,
            name: "Turquoise Business-focused",
            avatar: "https://images.unsplash.com/photo-1627766063836-c7bda2cf3f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "480K",
            joined: false
        },
        {
            id: 83,
            name: "Violet Right-sized",
            avatar: "https://images.unsplash.com/photo-1627754667765-2959eec52bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "916K",
            joined: false
        },
        {
            id: 84,
            name: "Khaki logistical",
            avatar: "https://images.unsplash.com/photo-1627727240076-04a1551d2f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "892M",
            joined: false
        },
        {
            id: 85,
            name: "Orange Assimilated",
            avatar: "https://images.unsplash.com/photo-1627782795575-17460e8ee221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "737K",
            joined: false
        },
        {
            id: 86,
            name: "Aquamarine Front-line",
            avatar: "https://images.unsplash.com/photo-1627715822732-b0156d3e00df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "489K",
            joined: false
        },
        {
            id: 87,
            name: "Violet pricing structure",
            avatar: "https://images.unsplash.com/photo-1627727240149-bb27822b0355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "818K",
            joined: false
        },
        {
            id: 88,
            name: "Yellow Object-based",
            avatar: "https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "211K",
            joined: false
        },
        {
            id: 89,
            name: "Indigo array",
            avatar: "https://images.unsplash.com/photo-1627729115525-29cee2ee5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "620K",
            joined: true
        },
        {
            id: 90,
            name: "Indigo bottom-line",
            avatar: "https://images.unsplash.com/photo-1627687524956-568b846af653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            membersCount: "781K",
            joined: true
        },
    ],
    interval: [0, 15],
    elementsOnPage: 15,
}

const groupsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ON_JOINED:
            return {
                ...state,
                groupsData: state.groupsData.map((item) => {
                    if (item.id === action.id) item.joined = !item.joined;
                    return item;
                }),
            }
        case ON_CHANGE_PAGE:
            return {
                ...state,
                interval: action.interval.map(num => num * state.elementsOnPage),
                // interval: [action.],
            }
        case ON_SHIFT_PAGE:
            if (action.direction === 0
                && state.interval[0] > 0) return {
                    ...state,
                    interval: [...state.interval.map(num => num - state.elementsOnPage)],
                };
            if (action.direction === 1
                && state.interval[1] < state.groupsData.length) return {
                    ...state,
                    interval: [...state.interval.map(num => num + state.elementsOnPage)],
                };
            return state;
        case SHOW_MORE:
            if (state.interval[1] < state.groupsData.length) return {
                ...state,
                elementsOnPage: state.elementsOnPage + 15,
                // interval: ,
            }
            return state;
        case SHOW_LESS:
            if (state.interval[1] - state.interval[0] > 15) return {
                ...state,
                elementsOnPage: state.elementsOnPage - 15,
                // interval: ,
            }
            return state;
        default:
            return state;
    }
}

export default groupsReducer;
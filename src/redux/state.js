// import { rerenderEntireTree } from "../render";
import friends from "./friends";
import messages from "./messages"

const ADD_FRASE = 'ADD-FRASE';
const ON_CHANGE_FRASE = 'ON-CHANGE-FRASE';
// let rerenderEntireTree;
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

let store = {
    _state: {
        secNavPart: {
            follInfo: { rate: "4", count: "101" },
            // follInfo: store._state.profilePage.profileInfo.followers,
        },
        profilePage: {
            profileInfo: {
                name: "Georg Peeter",
                email: 'gpeeter@hubpages.com',
                avatar: 'https://wpkixx.com/html/socimo/images/resources/user.jpg',
                // avatar:
                posts: '4',
                followers: { rate: "4", count: "101" },
                follow: '549',
                joined: 'April 2020',
                profileBackground: 'https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg',
            },
            postData: [
                {
                    id: 0,
                    name: "Georg Peter",
                    action: "added image album",
                    date: "Jul,22 2021",
                    statistic: "1.2k, 54, 5k, 205",
                    content: {
                        link: '',
                        captureLink: [],
                        pictures: [
                            'https://for-pet.ru/wp-content/uploads/2020/04/kanarskij-dog-3.jpg',
                            'http://myplanet-ua.com/wp-content/uploads/2015/06/8706540306_89e30f5337_k.jpg',
                            'https://wildfrontier.ru/wp-content/uploads/2015/07/Kanarskij-dog6.jpg',
                            'https://cdn.vashurok.ru/ckeditor_assets/pictures/32247/content_scale_1200_%289%29.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                            'https://lapkins.ru/upload/uf/365/365ef6fafa73b58a20d8ffa898a1a843.jpg',
                        ],
                        videos: [], //TODO
                        header: '',
                        text: '',
                    }
                },
                {
                    id: 1,
                    name: "Georg Peter",
                    action: "shared link",
                    date: "Oct,3 2020",
                    statistic: "0.8k, 71, 4.2k, 198",
                    content: {
                        link: 'https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538',
                        captureLink: ['https://wpkixx.com/html/socimo/images/resources/laptop.png'],
                        pictures: [],
                        videos: [], //TODO
                        header: 'Look at this',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    }
                },
                {
                    id: 2,
                    name: "Georg Peter",
                    action: "create post",
                    date: "Sep,15 2020",
                    statistic: "0.9k, 47, 3.8k, 176",
                    content: {
                        link: '',
                        captureLink: [],
                        pictures: [],
                        videos: [], //TODO
                        header: 'My first post',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

                    }
                },
            ],
        },
        messagesPage: {
            friends: friends,
            messages: messages,
            newFraseText: '',
        },
    },
    _callSubscriber: () => { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        // debugger;
        return store._state;
    },
    wrapper: (f, arg) => {
        return f(arg);
    },
    addFraseToState(num) {
        // 'use strict';
        // let nullSpace = '';
        if (this._state.messagesPage.newFraseText === '') return;
        let newFrase = {
            isMy: true,
            text: this._state.messagesPage.newFraseText,
        };
        this._state.messagesPage.messages[num].messages.push(newFrase);
        this._state.messagesPage.newFraseText = '';
        this._callSubscriber(this._state);

    },
    dispatch(action) {
        switch (action.type) {
            case ADD_FRASE:
                this.addFraseToState(action.num);
                break;
            case ON_CHANGE_FRASE:
                this._state.messagesPage.newFraseText = action.text;
                this._callSubscriber(this._state);
                break;
        }
        // if (action.type === ADD_FRASE) {
        //     store.addFraseToState(action.num);
        //     console.log(store._state.messagesPage, 6);
        // }
        // if (action.type === ON_CHANGE_FRASE) {
        //     this._state.messagesPage.newFraseText = action.text;
        //     // debugger;
        //     this._callSubscriber(this._state);
        // }
    }
}
// export const addFraseToState = (num) => {
//     let newFrase = {
//         isMy: true,
//         text: store._state.messagesPage.newFraseText,
//     };
//     store._state.messagesPage.messages[num].messages.push(newFrase);
//     // console.log(store._state.messagesPage.newFraseText);
//     store._state.messagesPage.newFraseText = '';
//     // debugger;
//     // console.log(store._state.messagesPage.newFraseText);
//     store._callSubscriber(store._state);
// }
export const addFraseActionCreator = (n) => ({
    type: ADD_FRASE,
    // fraseText: text,
    num: n,
});

export const onChangeFraseActionCreator = (t) => {
    return {
        type: ON_CHANGE_FRASE,
        text: t,
    }
};

export const setClassFromScroll = (select, className, h) => {
    return function () {
        let elem = document.querySelectorAll(select)[0];
        let top = document.querySelectorAll('.appWrapper')[0].getBoundingClientRect().top;
        let isContein = elem.classList.contains(className);
        if ((top < -h && !isContein) || (top >= -h && isContein)) {
            elem.classList.toggle(className);
        }
    }
}

window.store = store;
export default store;

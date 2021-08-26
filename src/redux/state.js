import { rerenderEntireTree } from "../render";
import friends from "./friends";
import messages from "./messages"

let state = {
    secNavPart: {
        follInfo: { rate: "4", count: "101" },
    },
    profilePage: {
        postData: [
            {
                id: 0,
                name: "Georg Peter",
                action: "added image album",
                date: "Jul,22 2021",
                statistic: "1.2k, 54, 5k, 205",
            },
            {
                id: 1,
                name: "Georg Peter",
                action: "shared link",
                date: "Oct,3 2020",
                statistic: "0.8k, 71, 4.2k, 198",
            },
            {
                id: 2,
                name: "Georg Peter",
                action: "create post",
                date: "Sep,15 2020",
                statistic: "0.9k, 47, 3.8k, 176",
            },
        ],
    },
    messagesPage: {
        friends: friends,
        messages: messages,
        newFraseText: '',
        addFrase: (fraseText, num) => {
            let newFrase = {
                isMy: true,
                text: fraseText,
            };

            state.messagesPage.messages[num].messages.push(newFrase);
            state.messagesPage.newFraseText = '';
            rerenderEntireTree(state);
        },
        onChangeFrase: (text) => {
            state.messagesPage.newFraseText = text;
            rerenderEntireTree(state);
        },
    }
}

// console.log(state);
export default state;
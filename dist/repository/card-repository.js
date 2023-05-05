"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
class CardRepository {
    constructor() {
        this.list = [];
        this.counterID = 0;
    }
    add(newCards) {
        for (let newCard of newCards) {
            if (this.isExist(newCard.cardNumber))
                throw new Error(`${newCard.cardNumber} is already exist`);
            newCard.setId(++this.counterID);
            this.list.push(newCard);
        }
    }
    isExist(cardNumber) {
        for (let card of this.list) {
            if (card.cardNumber === cardNumber)
                return true;
        }
        return false;
    }
    getCardsByOwnerID(ownerID) {
        const cards = [];
        for (let card of this.list) {
            if (card.ownerId === ownerID)
                cards.push(card);
        }
        return cards;
    }
    getList() {
        return this.list;
    }
    transactionCard(senderCard, recieverCard, funds) {
        if (senderCard.balance < funds)
            throw new Error(`${senderCard.cardNumber} is not enough funds`);
        senderCard.balance -= funds;
        recieverCard.balance += funds;
    }
    ;
}
exports.CardRepository = CardRepository;

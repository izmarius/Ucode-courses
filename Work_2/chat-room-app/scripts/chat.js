// adding new chat documents to db
// setting up a real time listener to get new chats
// updaing username
// updating the room

class Chatroom {
    constructor (room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat (message) {
        const now  = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        await this.chats.add(chat);
    }
}

const chatroom1 = new Chatroom('gaming',  'shaun');
// chatroom1.addChat('lets play minecraft');
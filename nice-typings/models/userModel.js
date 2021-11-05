export default class UserModel{
    displayName;
    email;
    emailVerified;
    photoUrl;
    uid;
    constructor(displayName, email, emailVerified, photoUrl, uid){
        this.displayName = displayName;
        this.email = email;
        this.emailVerified = emailVerified;
        this.photoUrl = photoUrl;
        this.uid = uid;
    }
}
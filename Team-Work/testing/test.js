function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;

    var alive = true;

    this.showInfo = function () {
        console.log(this.name);

        console.log("name: %s \nemail: %s", this.name, this.email);
    }


}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    },
    isAlive: function () {

    }

};

function Man() {
    console.log(Man.constructor);
}
Man();
//
//var user1 = new User('Deyan','myMail@gmail.com');
//user1.name = 10;
//user1.showInfo();


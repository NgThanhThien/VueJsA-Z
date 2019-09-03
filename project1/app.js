new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            //monster
            if (this.checkPlayAgain()) {
                return;
            }
            damage = this.inputDamage(4, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                    isPlayer: true,
                    textLogs: 'Player hits Monster for: ' + damage
                }
            )
            //player
            this.monsterAttack();
        },
        specialAttack: function () {
            if (this.checkPlayAgain()) {
                return;
            }
            damage = this.inputDamage(7, 15);
            this.monsterHealth -= damage;
            this.turns.unshift({
                    isPlayer: true,
                    textLogs: 'Player hits Monster for: ' + damage
                }
            )
        },
        heal: function () {
            //    player
            if (this.playerHealth > 70) return false;
            else if (this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 70;
            }
            this.turns.unshift({
                    isPlayer: true,
                    textLogs: 'Player heal: 10 '
                }
            )
            // monster
            this.monsterAttack();

        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.turns = [];
            alert('You Lost!');
        },
        monsterAttack: function () {
            damage = this.inputDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                    isPlayer: false,
                    textLogs: 'Monster hits player for: ' + damage
                }
            )
            this.checkPlayAgain();
        },
        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage + 1, minDamage));
        },
        checkPlayAgain: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You Wont, New game ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.monsterHealth <= 0) {
                if (confirm('You Lost, New game ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
        }
    }
});

/**
 * Created by PC on 30.7.2014 г..
 */
var levelObjects= {
    1: {
        matrix: [
            [1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1]],
        sqSize: 100,
        player: new Player(2,2),
        boxes: [new Box(3, 2)],
        targets: [new Target(4,2)]
    },
    2: {
        matrix: [
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,0,1,1],
            [1,1,0,1,1],
            [1,1,0,1,1],
            [1,1,1,1,1]],
        sqSize: 100,
        player: new Player(2,4),
        boxes: [new Box(2, 3)],
        targets: [new Target(3,1)]
    }
};
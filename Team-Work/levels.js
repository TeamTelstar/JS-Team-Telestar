/**
 * Created by PC on 30.7.2014 г..
 */
var levelObjects= {
    0: {
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
    1: {
        matrix: [
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,0,1,1],
            [1,1,0,1,1],
            [-1,1,0,1,-1],
            [-1,1,1,1,-1]],
        sqSize: 80,
        player: new Player(2,4),
        boxes: [new Box(2, 3)],
        targets: [new Target(3,1)]
    },
    2:{
        matrix: [
            [1,1,1,1,1,1,1],
            [1,0,0,0,0,0,1],
            [1,0,0,0,0,0,1],
            [1,0,0,1,0,0,1],
            [1,1,1,1,0,0,1],
            [1,0,0,1,0,0,1],
            [1,0,0,0,0,0,1],
            [1,0,0,0,0,0,1],
            [1,1,1,1,1,1,1]],
        sqSize:90,
        player: new Player(2,5),
        boxes: [new Box(2,6)],
        targets: [new Target(2,3)]
    },
    3:{
        matrix: [
            [1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1]],
        sqSize:90,
        player: new Player(1,1),
        boxes: [new Box(2,1), new Box(4,1)],
        targets: [new Target(5,1),new Target(6,1)]
    },
    4:{
        matrix: [
            [1,1,1,1,1,1,1],
            [1,1,1,0,0,0,1],
            [1,0,0,0,0,0,1],
            [1,0,0,1,0,0,1],
            [1,0,0,1,1,1,1],
            [1,1,1,1,1,1,1]],
        sqSize:90,
        player: new Player(2,4),
        boxes:[new Box(2,3),new Box(2,2)],
        targets:[new Target(4,1), new Target(5,2)]
    }
};
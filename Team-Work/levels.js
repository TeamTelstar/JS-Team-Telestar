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
            [1,1,0,1,-1],
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
            [-1,-1,1,1,1,1,1],
            [1,1,1,0,0,0,1],
            [1,0,0,0,0,0,1],
            [1,0,0,1,0,0,1],
            [1,0,0,1,1,1,1],
            [1,1,1,1,-1,-1,-1]],
        sqSize:90,
        player: new Player(2,4),
        boxes:[new Box(2,3),new Box(2,2)],
        targets:[new Target(4,1), new Target(5,2)]
    },
    5:{
      matrix:[
          [-1,1,1,1,1,1,1,1],
          [-1,1,0,0,0,0,0,1],
          [-1,1,0,0,0,0,0,1],
          [1,1,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,1],
          [1,0,0,0,0,0,0,1],
          [1,1,1,1,1,1,1,1]],
        sqSize:90,
        player: new Player(4,3),
        boxes:[new Box(4,4),new Box(4,2),new Box(3,3),new Box(5,3)],
        targets:[new Target(3,2), new Target(5,2), new Target(3,4), new Target(5,4)]
    },
    6:{
        matrix:[
            [1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1],
            [1,0,0,0,1,1,-1,-1,-1,-1,-1,-1],
            [1,0,0,0,0,1,-1,-1,-1,-1,-1,-1],
            [1,1,0,0,0,0,1,1,1,1,1,1],
            [-1,1,1,0,0,0,0,1,0,0,0,1],
            [-1,-1,1,1,0,0,0,0,0,0,0,1],
            [-1,-1,-1,1,1,1,1,1,0,0,0,1],
            [-1,-1,-1,-1,-1,-1,1,1,1,1,1,1],
        ],

        sqSize:80,
        player: new Player(7,5),
        boxes:[new Box(6,5),new Box(5,4),new Box(4,3),new Box(3,2)],
        targets:[new Target(8,4), new Target(9,4), new Target(10,4), new Target(10,5)]
    },
    7:{
        matrix:[
            [-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1],
            [-1,-1,1,1,1,1,1,1,0,0,0,1],
            [-1,1,1,0,0,0,0,0,0,0,0,1],
            [-1,1,0,0,1,1,1,1,1,0,1,1],
            [-1,1,0,0,0,0,0,0,1,0,0,1],
            [-1,1,0,0,1,0,0,0,0,0,0,1],
            [-1,1,0,1,1,1,0,1,1,0,0,1],
            [1,1,0,1,1,1,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,-1,-1,-1],
            [1,0,0,0,1,0,0,0,1,-1,-1,-1],
            [1,1,1,1,1,1,1,1,1,-1,-1,-1],
        ],
        sqSize:65,
        player: new Player(3,2),
        boxes:[new Box(8,2),new Box(2,4),new Box(9,4),new Box(6,7)],
        targets:[new Target(4,4), new Target(5,4), new Target(6,4), new Target(7,4)]
    },
    8:{
        matrix:[
            [1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1],
            [1,1,1,1,1,0,1,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,1],
            [1,0,0,0,1,1,1,1],
            [1,1,1,1,1,-1,-1,-1],

        ],

        sqSize:80,
        player: new Player(6,2),
        boxes:[new Box(3,2),new Box(5,2),new Box(2,5),new Box(4,5)],
        targets:[new Target(2,1), new Target(3,1), new Target(4,1), new Target(5,1)]
    },
    9:{
        matrix:[
            [-1,-1,1,1,1,1,-1,-1],
            [1,1,1,0,0,1,-1,-1],
            [1,0,0,0,0,1,1,1],
            [1,0,0,0,0,0,0,1],
            [1,1,0,0,0,0,0,1],
            [-1,1,1,0,0,1,1,1],
            [-1,-1,1,1,1,1,-1,-1],
        ],
        sqSize:80,
        player: new Player(4,5),
        boxes:[new Box(2,2),new Box(4,2),new Box(5,3)],
        targets:[new Target(3,2), new Target(3,3), new Target(3,4)]
    },
    10:{
        matrix:[
            [-1,-1,1,1,1,1,-1,-1,-1],
            [-1,-1,1,0,0,1,-1,-1,-1],
            [-1,-1,1,0,0,1,1,1,1],
            [1,1,1,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,1,1,1],
            [1,1,1,1,0,0,1,-1,-1],
            [-1,-1,-1,1,0,0,1,-1,-1],
            [-1,-1,-1,1,1,1,1,-1,-1],
        ],
        sqSize:80,
        player: new Player(4,4),
        boxes:[new Box(3,3),new Box(3,5),new Box(5,3),new Box(5,5)],
        targets:[new Target(3,4), new Target(4,3), new Target(5,4),new Target(4,5)]
    },
    11:{
    matrix:[
        [1,1,1,1,1,1,1,1,1,1,1,1,-1,-1],
        [1,0,0,0,0,1,0,0,0,0,0,1,1,1],
        [1,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,1,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,1,0,0,1],
        [1,0,0,0,0,1,0,1,0,0,0,0,1,1],
        [1,1,1,1,1,1,0,1,1,0,0,0,0,1],
        [-1,-1,1,0,0,0,0,0,0,0,0,0,0,1],
        [-1,-1,1,0,0,0,0,1,0,0,0,0,0,1],
        [-1,-1,1,1,1,1,1,1,1,1,1,1,1,1]],

        sqSize:60,
        player: new Player(11,4),
        boxes:[new Box(7,2),new Box(9,2),new Box(11,3),new Box(10,6),new Box(9,6),new Box(11,7),new Box(9,7),new Box(7,7),new Box(4,7),new Box(1,1)],
        targets:[new Target(1,1),new Target(1,2),new Target(1,3),new Target(1,4),new Target(1,5),new Target(2,1),new Target(2,2),new Target(2,3),new Target(2,4),new Target(2,5)]
    },
    12:{
        matrix:[
            [-1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,1,1,1,0,0,0,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,1,0,0,0,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [1,1,1,0,1,0,1,1,0,1,1,-1,-1,1,1,1,1,1,1],
            [1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1],
            [-1,-1,-1,-1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [-1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1],
        ],

        sqSize:60,
        player: new Player(11,8),
        boxes:[new Box(5,2),new Box(5,4),new Box(5,7),new Box(2,7),new Box(7,3),new Box(7,4)],
        targets:[new Target(16,6), new Target(17,6),new Target(16,7),new Target(17,7),new Target(16,8),new Target(17,8)]
    },
    13:{
        matrix:[
            [-1,-1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,1,0,0,0,1,1,1,1,-1,-1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,1,0,0,0,0,0,0,1,-1,-1,1,0,0,0,1,1,1,1,1,1,1,-1],
            [-1,-1,-1,-1,1,1,0,0,0,0,0,1,-1,-1,1,0,0,0,0,0,0,0,0,0,1,-1],
            [-1,-1,-1,1,1,1,1,0,0,0,1,1,-1,-1,1,1,0,0,0,0,0,0,0,0,1,-1],
            [-1,-1,-1,1,0,0,0,0,0,0,1,1,-1,-1,-1,1,1,1,0,0,1,0,0,0,1,-1],
            [1,1,1,1,0,1,1,0,1,0,0,1,-1,-1,-1,-1,-1,1,0,0,1,0,0,0,1,-1],
            [1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
            [1,1,1,1,1,-1,1,0,0,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,1,1],
            [-1,-1,-1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
        ],
        sqSize:45,
        player: new Player(9,10),
        boxes:[new Box(7,3),new Box(8,3),new Box(7,5),new Box(8,5),new Box(9,4),new Box(4,7),new Box(7,8),],
        targets:[new Target(21,5),new Target(21,6),new Target(23,4),new Target(23,5),new Target(20,4),new Target(19,4),new Target(18,4)]
    },
    14:{
        matrix:[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1],
            [1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1],
            [1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1],
            [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1],
            [1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1],
            [1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1],
            [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
            [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1],
            [1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1],
            [1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
            [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

        ],
        sqSize:45,
        player: new Player(1,4),
        boxes: [new Box(1,3)],
        targets:[ new Target(16,4), new Target(17,4), new Target(17,5), new Target(16,6), new Target(17,6)]

    }
};
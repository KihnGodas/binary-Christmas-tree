let colorfulTree = [["blue", "red", "white", "orange", "purple", "yellow"], ["gold"], ["green"]];
let whiteTree = [["white"], ["white"], ["white"]]

function getRandomInt(maxNum) { 
    return Math.floor(Math.random() * Math.floor(maxNum));
}

function treeBuilder(Branches, colors) { 
    let a = [];
    let Tree = [];
    for (let i = 0; i < Branches; i++) { 
        for (let j = 0; j <= i; j++) { 
            let ornamentChance = Math.floor(Math.random() * 10)
            if (i == 0) {
                a.push("<a style='color:" + colors[1][0] + "'>☆</a>");
            }
            else if (ornamentChance <= 2) {
                a.push("<a onClick='clickableColorChanger(this)' style='cursor: pointer;color:" + colors[0][getRandomInt(colors[0].length)] + "'>0</a>");
            }
            else {
                a.push("<a style='color:" + colors[2][0] + "'>1</a>");
            }
        }
        Tree.push(a);
        a = [];
    }
    for (let i = 0; i < Branches; i++) { 
        document.getElementById("treeHolder").innerHTML += "<div id='branch' class='center'>" + Tree[i].join(" ") + "</div>"
        //document.write("<div id='tree' class='center'>"+Tree[i].join(" ")+"</div>")
    }
}
function clickableColorChanger(e) {
    e.style.color = colorfulTree[0][getRandomInt(colorfulTree[0].length)]
}
function redrawTree(Branches, colors) {
    console.log("New Tree Created");
    document.getElementById("treeHolder").innerHTML = ""
    treeBuilder(Branches, colors)
}

// Main Runner: 
treeBuilder(30, colorfulTree) // Builds tree with given parameters. How to use: treeBuilder(tree-size, color-type).
setInterval(redrawTree, 1000, 30, colorfulTree); // Changes tree with given parameters. 
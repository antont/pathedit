var l = new QLabel();

//g = new $jit.Graph();
//g = new $jit.ForceDirected();
//g.loadJSON(data);
g = Loader.construct(data);

n = g.getNode('x');
n.pos.x = n.data.posx;
n.pos.y = n.data.posy;

var adjnames = "";
n.eachAdjacency(function(adj) { 
  adjnames += adj.nodeTo.name;
  }
);

l.text = n.id + ": " + n.pos.x + ", " + n.pos.y + '\n';
l.text += adjnames;

l.show();
print('x');

QCoreApplication.exec();

/*
console commands used to create the graph and save the graph in editor:

g = graph.graph
xdata = {'id': 'x', 'name': 'node x'}
x = g.addNode(ndata)
n1 = g.getNode('graphnode1')
g.addAdjacence(x, n1)

x.data.posx = x.pos.x
x.data.posy = x.pos.y
JSON.stringify(graph.toJSON("graph"))

map.png center: 1086, 571
*/

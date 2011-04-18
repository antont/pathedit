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
p2 = g.addNode({'id': 'path2', 'name': 'path2'})
n1 = g.getNode('graphnode1')
g.addAdjacence(x, n1)

x.data.posx = x.pos.x
x.data.posy = x.pos.y
JSON.stringify(graph.toJSON("graph"))

map.png center: 1086, 571

function addposdata(n) { n.data.posx = n.pos.x; n.data.posy = n.pos.y; }
g.eachNode(addposdata)

offset calc:
origo:
-1.0648120130503267, -54.95458387873319
==>
+x: 1.0648120130503267
+y: 54.95458387873319

topleft: 
graph:
x: -1014.0854424181147
y: -449.01010552874095

scene:
-113
44

==>
(-1014.0854424181147 + 1.0648120130503267) / -113
/x: 8.964784339867826

(-449.01010552874095 + 54.95458387873319) / 44
/y: -8.95580731022745

*/

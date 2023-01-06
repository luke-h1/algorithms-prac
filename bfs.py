graph = {
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}

visited = [] # List to keep track of visited nodes.
queue = []   # Initialize a queue

def bfs(visited, graph, node):
    visited.append(node)
    queue.append(node)

    # create a loop to iterate through the queue & visit each node
    while queue:
        m = queue.pop(0)
        print(m, end = " ")

        for neighbour in graph[m]:
            if neighbour not in visited:
                # add the neighbour to the visited list and queue for further traversal
                visited.append(neighbour)
                queue.append(neighbour)


bfs(visited, graph, '5')
print('BFS traversal of the graph is:', visited)

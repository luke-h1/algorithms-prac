class BFSGraph {
  public adj: number[][];
  public size: number;
}

class BFS {
  public bfs(G: BFSGraph, startVert: number) {
    let visited: boolean[] = Array<boolean>();

    // pre-populate array with false
    for (let i = 0; i < G.size; i++) {
      visited.push(false);
    }

    // use an array as our queue
    let q: number[] = new Array<number>();

    visited[startVert] = true;

    q.push(startVert);

    while (q.length > 0) {
      const v = q.shift();
      for (let adjV of G.adj[v as number]) {
        if (!visited[adjV]) {
          visited[adjV] = true;
          q.push(adjV);
        }
      }
    }
  }
}

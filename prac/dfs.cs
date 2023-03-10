  /*
*               1
*             / | \
*            2  5  9
*           /  / \   \
*          3  6   8   10
*         /  / 
*        4  7
*
*/

/* 
  start from the source node, go in depth as much as possible. Visit all children 
  in a single branch before moving to the other branch
*/


Graph = graph = new Graph(11);
graph.AddEdge(1, 2, false);
graph.AddEdge(2, 3, false);
graph.AddEdge(3, 4, false);
graph.AddEdge(1, 5, false);
graph.AddEdge(5, 6, false);
graph.AddEdge(6, 7, false);
graph.AddEdge(5, 8, false);
graph.AddEdge(1, 9, false);
graph.AddEdge(9, 10, false);
graph.DFS();

  public class Graph
  {
    private LinkedList<int>[] linkedListArray;

    public Graph(int v)
    {
      linkedListArray = new linkedListArray<int>[v];
    }
    
    /*
     * The method takes two nodes for which an edge is to be added
     */

    public void AddEdge(int u, int v, bool blnBiDir = true)
    {
      if (linkedListArray[u] == null)
      {
        linkedListArray[u] = new linkedList<int>();
        linkedListArray[u].AddFirst(v);
      }
      else
      {
        var last = linkedListArray[u].Last;
        linkedListArray[u].AddAfter(last, v);
      }

      if (blnBiDir)
      {
        if (linkedListArray[v] == null)
        {
          linkedListArray[v] = new linkedList<int>();
          linkedListArray[v].AddFirst(u);
        }
        else
        {
          var last = linkedListArray[v].Last;
          linkedListArray[v].AddAfter(last, u);
        }
      }
    }

    internal void DFSHelper(int src, bool[] visited)
    {
      visited[src] = true;
      Console.WriteLine(src + '->');
      if (linkedListArray[src] != null)
      {
        foreach (var item in linkedListArray[src])
        {
          if (!visited[item] == true)
          {
            DFSHelper(item, visited);
          }
        }
      }
    }

    internal void DFS()
    {
      Console.WriteLine("DFS");
      bool[] visited = new bool[linkedListArray.Length + 1];
      DFSHelper(1, visited);
    }
    
  };
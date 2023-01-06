namespace BreadthFirst
{
    class Program
    {
        public class Employee
        {
            public Employee(string name)
            {
                this.name = name;
            }
            
            public string name { get; set; }

            public List<Employee> Employees
            {
                get
                {
                    return EmployeesList;
                }
            }

            public void isEmployeeOf(Employee p)
            {
                EmployeeList.Add(p);
            }
            
            List<Employee> EmployeesList = new List<Employee>();

            public override string ToString()
            {
                return name;
            }
        }

        public class BreadthFirstAlgorithm
        {
            public Employee BuildEmployeeGraph()
            {
                Employee Eva = new Employee("Eva");
                Employee Sophia = new Employee("Sophia");
                Employee Brian = new Employee("Brian");
                Eva.isEmployeeOf(Sophia);
                Eva.isEmployeeOf(Brian);

                Employee Lisa = new Employee("Lisa");
                Employee Tina = new Employee("Tina");
                Employee John = new Employee("John");
                Employee Mike = new Employee("Mike");
                Sophia.isEmployeeOf(Lisa);
                Sophia.isEmployeeOf(John);
                Brian.isEmployeeOf(Tina);
                Brian.isEmployeeOf(Mike);

                return Eva;                Employee Eva = new Employee("Eva");
                Employee Sophia = new Employee("Sophia");
                Employee Brian = new Employee("Brian");
                Eva.isEmployeeOf(Sophia);
                Eva.isEmployeeOf(Brian);

                Employee Lisa = new Employee("Lisa");
                Employee Tina = new Employee("Tina");
                Employee John = new Employee("John");
                Employee Mike = new Employee("Mike");
                Sophia.isEmployeeOf(Lisa);
                Sophia.isEmployeeOf(John);
                Brian.isEmployeeOf(Tina);
                Brian.isEmployeeOf(Mike);

                return Eva;
            }

            public Employee Search(Employee root, string name)
            {
                Queue<Employee> Q = new Queue<Employee>();
                HashSet<Employee> S = new HashSet<Employee>();
                Q.Enqueue(root);
                S.Add(root);

                while (Q.Count > 0)
                {
                    Employee e = Q.Dequeue();
                    if (e.name == name)
                    {
                        return e;
                    }

                    foreach (Employee f in e.Employees)
                    {
                        if (!S.Contains(f))
                        {
                            Q.Enqueue(f);
                            S.Add(f);
                        }
                    }
                }
                return null
            }

            public void Traverse(Employee root)
            {
                Queue<Employee> traverseOrder = new Queue<Employee>();
                Queue<Employee> Q = new Queue<Employee>();
                HashSet<Employee> S = new HashSet<Employee>();
                
                Q.Enqueue(root);
                S.Add(root);

                while (Q.Count > 0)
                {
                    Employee e = Q.Dequeue();
                    traverseOrder.Enqueue(e);

                    foreach (Employee e in e.Employees)
                    {
                        if (!S.Contains(e))
                        {
                            Q.Enqueue(e);
                            S.Add(e);
                        }
                    }
                }

                while (traverseOrder.Count > 0)
                {
                    Employee e = traverseOrder.Dequeue();
                    Console.WriteLine(e);
                }
            }
        }

        static void Main(string[] args)
        {
            BreadthFirstAlgorithm b = new BreadthFirstAlgorithm();
            Employee root = b.BuildEmployeeGraph();
            Console.WriteLine("Traverse Graph\n------");
            b.Traverse(root);

            Console.WriteLine("\nSearch in Graph\n------");
            Employee e = b.Search(root, "Eva");
            Console.WriteLine(e == null ? "Employee not found" : e.name);
            e = b.Search(root, "Brian");
            Console.WriteLine(e == null ? "Employee not found" : e.name);
            e = b.Search(root, "Soni");
            Console.WriteLine(e == null ? "Employee not found" : e.name);
        }
    }
}

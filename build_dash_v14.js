const fs = require('fs');

let filesJsonPath = './files.json';
if (!fs.existsSync(filesJsonPath) && fs.existsSync('C:/Users/loq/.gemini/antigravity/scratch/files.json')) {
    filesJsonPath = 'C:/Users/loq/.gemini/antigravity/scratch/files.json';
}


let fileList = [];
try {
    if (fs.existsSync(filesJsonPath)) {
        let raw = fs.readFileSync(filesJsonPath, 'utf8');
        if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
        fileList = JSON.parse(raw);
    }
} catch (e) {
    console.log("No local files.json found.");
}

const subjectsData = {
    "S.E": {
        id: "se", icon: "fa-laptop-code", title: "Intro to Software Engineering (CSE2001)",
        examDate: "Sunday, June 07, 2026 - 12:30 PM", 
        videos: [
            {title: "🇸🇦 هندسة البرمجيات (Arabic - GeekHood)", id: "PdER1jZ9nVI", embed: true},
            {title: "Introduction to Software Engineering (Gate Smashers)", id: "PlI0v37s33I", embed: true},
            {title: "UML Use Case Diagrams (Gate Smashers)", id: "k4Tq06s6R5w", embed: true},
            {title: "UML Class Diagrams (Gate Smashers)", id: "WJ-UaAaumNA", embed: true},
            {title: "UML Activity Diagrams (Gate Smashers)", id: "kY0nQ_y298w", embed: true},
            {title: "Unit Testing & Testing Types (Gate Smashers)", id: "9gu4BsqjQrA", embed: true}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. Software Engineering is the systematic application of engineering principles to the development, operation, and maintenance of software.
2. The Software Development Life Cycle (SDLC) includes Requirements, Design, Implementation, Testing, Deployment, and Maintenance.
3. Waterfall Model: A linear, sequential approach. Good for well-understood requirements, bad for changing environments.
4. Agile Methodology: Iterative and incremental development. Focuses on customer collaboration and responding to change.
5. Scrum Framework: Includes Sprints, Daily Stand-ups, Sprint Reviews, and Retrospectives. Roles: Scrum Master, Product Owner, Team.
6. Requirements Engineering: The process of defining, documenting, and maintaining requirements.
7. Functional Requirements: What the system should do (e.g., "The system shall allow users to log in").
8. Non-Functional Requirements: How the system performs (e.g., Security, Performance, Usability, Reliability).
9. Use Case Diagrams: Capture functional requirements from a user's perspective. Components: Actors, Use Cases, System Boundary.
10. Activity Diagrams: Model the workflow or business processes. Similar to flowcharts. Includes forks, joins, and decision nodes.
11. Object-Oriented Analysis and Design (OOAD): Modeling software using objects.
12. Class Diagrams: Static structure of the system. Shows classes, attributes, methods, and relationships (Associations, Inheritance, Aggregation, Composition).
13. Sequence Diagrams: Dynamic behavior. Shows object interactions arranged in time sequence. Uses lifelines and activation boxes.
14. State Machine Diagrams: Models the discrete stages (states) an object goes through during its lifecycle in response to events.
15. Software Architecture: The high-level structure of a system. Patterns include Client-Server, MVC (Model-View-Controller), Layered, and Microservices.
16. Design Principles: SOLID principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).
17. Coupling and Cohesion: Good design aims for Low Coupling (modules are independent) and High Cohesion (modules have a single, well-defined purpose).
18. Software Testing: Verification (Are we building the product right?) and Validation (Are we building the right product?).
19. Unit Testing: Testing individual components or functions in isolation (usually done by developers).
20. Integration Testing: Testing how modules work together.
21. System Testing: Testing the complete, integrated system to evaluate compliance with requirements.
22. Acceptance Testing: Formal testing by the client/user to determine whether to accept the system (UAT).
23. White-Box Testing: Testing internal structures/logic (e.g., path testing, branch coverage).
24. Black-Box Testing: Testing functionality without knowing internal structure (e.g., boundary value analysis, equivalence partitioning).
25. Regression Testing: Re-testing after changes to ensure no new bugs were introduced.
26. Software Quality Assurance (SQA): Process to ensure software engineering processes, methods, activities, and work items are monitored and comply with standards.
27. Configuration Management: Tracking and controlling changes in the software (Version Control like Git).
28. Software Maintenance: Corrective (fixing bugs), Adaptive (adapting to new OS), Perfective (enhancing performance), Preventive (refactoring).
29. Risk Management: Identifying, analyzing, and mitigating project risks.
30. Project Scheduling: Tools include Gantt Charts and PERT/CPM charts.
31. Estimation Techniques: COCOMO (Constructive Cost Model), Function Points, Story Points (Agile).
32. Software Metrics: Lines of Code (LOC), Cyclomatic Complexity (measures independent paths through code).
33. Prototyping: Creating an incomplete model of the software to explore requirements or technical feasibility.
34. Spiral Model: Risk-driven iterative model. Combines prototyping and waterfall.
35. V-Model: Extension of waterfall emphasizing verification and validation at each stage.
36. Traceability Matrix: Maps requirements to test cases to ensure complete coverage.
37. Code Smells: Indicators of poor design or implementation (e.g., duplicated code, long methods). Refactoring fixes them.
38. Continuous Integration/Continuous Deployment (CI/CD): Automating the building, testing, and deployment of software.
39. Architectural Views: Logical, Process, Development, Physical (e.g., 4+1 View Model).
40. User Interface Design: Focuses on usability, accessibility, and user experience (UX).
41. Security Engineering: Building systems to remain dependable in the face of malice, error, or mischance.
42. Reliability vs Availability: Reliability is probability of failure-free operation; Availability is probability the system is operational when needed.
43. Component-Based Software Engineering: Building systems by assembling reusable components.
44. Legacy Systems: Older systems that remain useful but are difficult to maintain.
45. Technical Debt: The implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.
46. Code Reviews/Peer Reviews: Systematic examination of code by other developers to find mistakes.
47. Pair Programming: Agile technique where two programmers work together at one workstation.
48. Test-Driven Development (TDD): Writing tests before writing the code that makes the tests pass.
49. Software Evolution: The process of updating software to adapt to changing environments and requirements over its lifecycle.
50. Ethics in SE: Software engineers must adhere to professional codes of ethics (e.g., ACM/IEEE) ensuring public safety and confidentiality.</li></ul>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: UML RELATIONSHIPS IN JAVA
// ==========================================

// 1. INHERITANCE (IS-A Relationship)
// The child class inherits fields and methods from the parent.
public class Employee {
    protected String name;
    protected double salary;
    public void calculatePay() { /* Base logic */ }
}
public class Developer extends Employee {
    private String programmingLanguage;
    @Override
    public void calculatePay() { /* Developer specific logic */ }
}

// 2. AGGREGATION (HAS-A, Weak Relationship)
// The child can exist independently of the parent.
public class Department {
    private String deptName;
    // Department HAS Professors. If Department is deleted, Professors still exist.
    private List<Professor> professors; 
    
    public Department(String name, List<Professor> profs) {
        this.deptName = name;
        this.professors = profs;
    }
}

// 3. COMPOSITION (Part-Of, Strong Relationship)
// The child is strictly bound to the lifecycle of the parent.
public class University {
    // The University creates the Engine. If University is destroyed, Engine is destroyed.
    private Library mainLibrary;
    
    public University() {
        this.mainLibrary = new Library("Central Library"); 
    }
}
        `,
        files: []
    },
    "WEB": {
        id: "web", icon: "fa-globe", title: "Web Programming (CCS2305)",
        examDate: "Tuesday, June 09, 2026 - 12:30 PM", 
        videos: [
            {title: "🇸🇦 PHP 8 بالعربي - Elzero Web School", id: "R3NlO6XgT6E", playlist: "PLDoPjvoNmBAy41LaT8q3683aT7L5m6U3B", embed: true},
            {title: "PHP Crash Course (Traversy Media)", id: "TAGzZ5Y7d40", embed: true},
            {title: "JS DOM Manipulation Full Course", id: "y17MRr04a9I", embed: true},
            {title: "CSS Flexbox Crash Course (Traversy)", id: "JJSoEo8JSnc", embed: true},
            {title: "Fetch API / AJAX Intro (Traversy)", id: "Oive66jrwBs", embed: true}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. The World Wide Web relies on the client-server model. The client (browser) sends HTTP requests, and the server returns HTTP responses.
2. HTML (HyperText Markup Language) defines the structure and content of a web page using elements and tags.
3. HTML5 introduced semantic elements like \`&lt;header&gt;\`, \`&lt;footer&gt;\`, \`&lt;article&gt;\`, and \`&lt;nav&gt;\` to improve accessibility and SEO.
4. CSS (Cascading Style Sheets) controls the presentation and layout of HTML elements.
5. The CSS Box Model consists of Margins, Borders, Padding, and the actual Content area. Understanding this is crucial for layout.
6. CSS Selectors (element, class \`.\`, ID \`#\`, pseudo-classes \`:hover\`) allow targeted styling. Specificity determines which rules apply.
7. Flexbox is a one-dimensional CSS layout model that makes it easy to align items in rows or columns dynamically.
8. CSS Grid is a two-dimensional layout system for creating complex grid-based designs.
9. Responsive Web Design ensures pages look good on all devices using media queries (\`@media screen and (max-width: 600px)\`).
10. JavaScript is a dynamic, interpreted scripting language used to add interactivity and logic to web pages.
11. The DOM (Document Object Model) is a tree-like representation of the HTML document that JavaScript can manipulate.
12. JS Event Listeners (\`addEventListener('click', ...)\`) wait for user interactions to trigger functions.
13. JS Variables are declared using \`let\` (block-scoped, mutable), \`const\` (block-scoped, immutable), and \`var\` (function-scoped, legacy).
14. Arrays in JS are zero-indexed and come with methods like \`.push()\`, \`.pop()\`, \`.map()\`, and \`.filter()\`.
15. JS Objects store data in key-value pairs (e.g., \`{ name: "Ali", age: 20 }\`).
16. Functions in JS can be declared traditionally (\`function name() {}\`) or as arrow functions (\`() =&gt; {}\`).
17. DOM Manipulation involves selecting elements (e.g., \`document.getElementById\`) and changing properties (e.g., \`element.innerHTML\`, \`element.style\`).
18. Asynchronous JavaScript prevents blocking the main thread, utilizing Callbacks, Promises, and \`async/await\`.
19. JSON (JavaScript Object Notation) is a lightweight data-interchange format, heavily used in APIs (\`JSON.stringify\`, \`JSON.parse\`).
20. AJAX (Asynchronous JavaScript and XML) allows web pages to update asynchronously by exchanging data with a web server behind the scenes.
21. The modern way to perform AJAX requests in JS is the \`fetch()\` API, which returns Promises.
22. Server-Side Scripting runs on the web server, generating dynamic HTML before sending it to the client. PHP is a common server-side language.
23. PHP (Hypertext Preprocessor) code is executed on the server, and the result is returned to the browser as plain HTML.
24. PHP Variables start with a \`$\` sign and are dynamically typed (e.g., \`$name = "Ali";\`).
25. PHP Superglobals like \`$_GET\`, \`$_POST\`, \`$_SESSION\`, and \`$_COOKIE\` are built-in arrays always accessible.
26. Form Handling in PHP: The \`method\` attribute (\`GET\` or \`POST\`) dictates how data is sent. \`POST\` is secure and hidden in the HTTP body; \`GET\` is appended to the URL.
27. Security: User input from forms must always be sanitized and validated to prevent Cross-Site Scripting (XSS).
28. SQL Injection is a vulnerability where malicious SQL code is inserted into input fields. Prevented using Prepared Statements in PHP/PDO.
29. PHP Arrays can be indexed (numeric keys) or associative (named keys, similar to JS objects or dictionaries).
30. PHP Sessions (\`session_start()\`) store user information (e.g., login state) across multiple pages on the server.
31. PHP Cookies store small amounts of data directly on the user's browser, sent back with every request.
32. Connecting PHP to MySQL databases is typically done using PDO (PHP Data Objects) or MySQLi. PDO is preferred for its flexibility.
33. A typical database operation in PHP involves: Connect -&gt; Prepare Statement -&gt; Bind Parameters -&gt; Execute -&gt; Fetch Results -&gt; Close.
34. HTTP Status Codes: 200 (OK), 404 (Not Found), 500 (Internal Server Error), 403 (Forbidden).
35. HTTP Methods: GET (retrieve data), POST (submit data), PUT (update data), DELETE (remove data).
36. RESTful APIs rely on stateless HTTP requests and return data usually in JSON format.
37. jQuery is a legacy JavaScript library that simplifies DOM manipulation and AJAX (\`$.ajax()\`). Modern vanilla JS has largely replaced it.
38. Front-End vs Back-End: Front-end (Client-side) is what the user sees (HTML/CSS/JS). Back-end (Server-side) is logic and database (PHP/MySQL).
39. CSS Positioning: \`static\` (default), \`relative\` (offset from normal), \`absolute\` (offset from closest positioned ancestor), \`fixed\` (relative to viewport).
40. Form Validation can happen on the client-side (using HTML5 \`required\` or JS) and MUST happen on the server-side (PHP) for security.
41. Bootstrap/Tailwind: Popular CSS frameworks that provide pre-built classes to speed up responsive design.
42. LocalStorage vs SessionStorage vs Cookies: LocalStorage persists indefinitely. SessionStorage clears on tab close. Cookies are sent to the server.
43. JS Error Handling: Handled using \`try { ... } catch (error) { ... }\` blocks.
44. PHP \`include\` vs \`require\`: Both insert the content of one PHP file into another, but \`require\` causes a fatal error if the file is missing, while \`include\` only issues a warning.
45. Web Accessibility (a11y) ensures websites are usable by people with disabilities (e.g., using \`alt\` tags on images).
46. The \`window\` object in JS represents the browser window, while the \`document\` object represents the HTML page inside it.
47. Event Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up.
48. Hoisting in JS: Variable and function declarations are moved to the top of their scope before code execution.
49. PHP Object-Oriented Programming supports Classes, Objects, Inheritance (\`extends\`), and Access Modifiers (\`public\`, \`private\`, \`protected\`).
50. Web Hosting involves placing your HTML/CSS/JS and PHP files on a server (like Apache or Nginx) connected to the internet.</li></ul>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: SECURE PHP FORM REGISTRATION
// ==========================================

<?php
// 1. Establish Database Connection using PDO (Secure against SQL Injection)
$host = '127.0.0.1';
$db   = 'university_db';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}

// 2. Handle POST Request Securely
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize Input (Prevent XSS)
    $username = htmlspecialchars(trim($_POST["username"]));
    $raw_password = $_POST["password"];
    
    // Hash Password (Never store plaintext)
    $hashed_password = password_hash($raw_password, PASSWORD_DEFAULT);
    
    // 3. Prepare and Execute SQL Statement (Prevent SQL Injection)
    $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    if ($stmt->execute([$username, $hashed_password])) {
        echo "<p style='color:green'>Registration Successful!</p>";
    } else {
        echo "<p style='color:red'>Registration Failed.</p>";
    }
}
?>

<!-- ========================================== -->
<!-- FULL CONTEXT: AJAX FETCH API DATA LOAD     -->
<!-- ========================================== -->
<script>
document.getElementById('loadBtn').addEventListener('click', () => {
    fetch('api/get_students.php')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('studentList');
            container.innerHTML = ''; // Clear existing
            data.forEach(student => {
                const li = document.createElement('li');
                li.textContent = student.name + ' (GPA: ' + student.gpa + ')';
                container.appendChild(li);
            });
        })
        .catch(error => console.error("Fetch error:", error));
});
</script>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: SECURE PHP FORM REGISTRATION
// ==========================================

<?php
// 1. Establish Database Connection using PDO (Secure against SQL Injection)
$host = '127.0.0.1';
$db   = 'university_db';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}

// 2. Handle POST Request Securely
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize Input (Prevent XSS)
    $username = htmlspecialchars(trim($_POST["username"]));
    $raw_password = $_POST["password"];
    
    // Hash Password (Never store plaintext)
    $hashed_password = password_hash($raw_password, PASSWORD_DEFAULT);
    
    // 3. Prepare and Execute SQL Statement (Prevent SQL Injection)
    $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    if ($stmt->execute([$username, $hashed_password])) {
        echo "<p style='color:green'>Registration Successful!</p>";
    } else {
        echo "<p style='color:red'>Registration Failed.</p>";
    }
}
?>

<!-- ========================================== -->
<!-- FULL CONTEXT: AJAX FETCH API DATA LOAD     -->
<!-- ========================================== -->
<script>
document.getElementById('loadBtn').addEventListener('click', () => {
    fetch('api/get_students.php')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('studentList');
            container.innerHTML = ''; // Clear existing
            data.forEach(student => {
                const li = document.createElement('li');
                li.textContent = student.name + ' (GPA: ' + student.gpa + ')';
                container.appendChild(li);
            });
        })
        .catch(error => console.error("Fetch error:", error));
});
</script>
        `,
        files: []
    },
    "DATA STRUCTURE": {
        id: "dsa", icon: "fa-network-wired", title: "Data Structures & Algorithms (CCS2401)",
        examDate: "Thursday, June 11, 2026 - 10:00 AM",
        videos: [
            {title: "Data Structures - Easy to Advanced (freeCodeCamp)", id: "RBSGKlAoiM", embed: true},
            {title: "Big O Notation Explained (CS Dojo)", id: "bum_19loj9A", embed: true},
            {title: "Intro to Linked List (mycodeschool)", id: "NobHlGUjV3g", embed: true},
            {title: "Binary Search Tree (Abdul Bari)", id: "HqPJF2L5h9U", embed: true},
            {title: "Algorithms Intro (Abdul Bari)", id: "0IAPZzGSbME", embed: true},
            {title: "15 Sorting Algorithms in 6 Minutes (Visual)", id: "kPRA0W1kECg", embed: true},
            {title: "🧠 VisuAlgo Interactive Sorting", url: "https://visualgo.net/en/sorting", embed: "link"},
            {title: "🧠 VisuAlgo Interactive BST", url: "https://visualgo.net/en/bst", embed: "link"}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. Data Structures organize data in memory for efficient access, modification, and storage. Algorithms are the step-by-step procedures that operate on them.
2. Big O Notation measures algorithm efficiency: O(1) Constant, O(log n) Logarithmic, O(n) Linear, O(n log n) Linearithmic, O(n²) Quadratic.
3. Arrays: Fixed-size, contiguous memory blocks. Access by index is O(1). Insertion/Deletion in the middle is O(n).
4. Linked List: A chain of nodes, each containing data and a pointer (next). Non-contiguous memory. Dynamic size.
5. Singly Linked List: Each node has one pointer (next). Traversal is one-directional only.
6. Doubly Linked List: Each node has two pointers (prev and next). Allows bidirectional traversal.
7. Circular Linked List: The tail node's next pointer points back to the head node, forming a circle.
8. Linked List insertAtHead: O(1) — simply create a new node and point its next to the current head. Update head.
9. Linked List insertAtTail: O(n) without tail pointer — must traverse all nodes. O(1) with a tail pointer.
10. Linked List deleteAtHead: O(1) — save head reference for freeing, move head to head.next.
11. Pointer: A variable that stores a memory address. In C/C++: int *ptr = &amp;x; dereferences with *ptr.
12. Pass by Value: A copy of the variable is passed. Changes inside the function do NOT affect the original.
13. Pass by Reference: The memory address is passed. Changes inside the function DO affect the original.
14. Stack: Linear data structure following LIFO (Last In, First Out). Operations: push(), pop(), peek(), isEmpty().
15. Queue: Linear data structure following FIFO (First In, First Out). Operations: enqueue(), dequeue(), front(), isEmpty().
16. Stack applications: Function call stack, expression evaluation (infix to postfix), undo/redo operations, browser back button.
17. Queue applications: Process scheduling, printer queues, BFS graph traversal.
18. Recursion: A function that calls itself. MUST have: (1) Base Case to stop, (2) Recursive Case that moves toward base case.
19. Recursion uses the Call Stack. Each recursive call adds a stack frame. Risk: StackOverflow if base case is never reached.
20. Binary Search: Efficient search on a SORTED array. Repeatedly halves the search space. Time: O(log n), Space: O(1).
21. Linear Search: Checks each element one by one. Works on unsorted arrays. Time: O(n). Simple but slow.
22. Bubble Sort: Repeatedly compares adjacent elements and swaps if out of order. O(n²) worst-case. Stable sort.
23. Selection Sort: Finds the minimum element and places it at the beginning each pass. O(n²). Not stable.
24. Insertion Sort: Builds sorted array one item at a time by inserting each new item in correct position. O(n²) worst, O(n) best (nearly sorted). Stable.
25. Merge Sort: Divide and Conquer. Recursively splits array in half, sorts each half, then merges. O(n log n) always. Stable. Space: O(n).
26. Quick Sort: Divide and Conquer. Picks a pivot, partitions elements around it. O(n log n) average, O(n²) worst case. Not stable. Space: O(log n).
27. Tree: Hierarchical, non-linear data structure with a root node and subtrees of children.
28. Binary Tree: Each node has at most TWO children (left and right).
29. Binary Search Tree (BST): A binary tree where: left child &lt; parent &lt; right child. Enables efficient search in O(log n).
30. BST Insertion: Compare with root. Go left if smaller, right if larger. Insert as a leaf node.
31. BST Search: Compare with root. Return true if match. Go left if target &lt; node, right if target &gt; node. O(log n) average.
32. Inorder Traversal (Left → Root → Right): Produces SORTED output for a BST.
33. Preorder Traversal (Root → Left → Right): Useful for copying or serializing the tree.
34. Postorder Traversal (Left → Right → Root): Useful for deleting a tree (children before parent).
35. Balanced BST: Height is O(log n). An unbalanced BST degrades to O(n) in worst case (like a linked list).
36. Graph: A collection of vertices (nodes) and edges (connections). Can be directed or undirected.
37. Adjacency Matrix: 2D array to represent graph. Space: O(V²). Edge check: O(1).
38. Adjacency List: Array of linked lists. Space: O(V+E). More efficient for sparse graphs.
39. BFS (Breadth-First Search): Uses a QUEUE. Explores level by level. Finds shortest path in unweighted graphs.
40. DFS (Depth-First Search): Uses a STACK (or recursion). Explores as deep as possible before backtracking.
41. Hash Table: Data structure that maps keys to values using a hash function. Average O(1) for insert/search/delete.
42. Collision: When two keys hash to the same index. Resolved by Chaining (linked list at bucket) or Open Addressing.
43. Heap: A complete binary tree. Max-Heap: parent ≥ children. Min-Heap: parent ≤ children. Used in Priority Queues.
44. Dynamic Array: Array that resizes itself when full (e.g., Java ArrayList). Amortized O(1) for append.
45. Two-Pointer Technique: Use two pointers moving through data to solve problems in O(n) instead of O(n²).
46. Sliding Window: Maintain a window over data and slide it to compute results without re-processing. O(n).
47. Space-Time Tradeoff: Using more memory (e.g., a HashSet) to achieve faster time complexity.
48. Stable Sort: Maintains the relative order of equal elements. Merge Sort and Insertion Sort are stable.
49. In-place Sort: Uses O(1) extra space. Quick Sort and Bubble Sort are in-place.
50. VisuAlgo (visualgo.net): Interactive visualizer for all data structures and sorting algorithms. USE IT to understand BST, Linked Lists, and Sorting visually.</li></ul>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: BINARY SEARCH TREE (JAVA)
// ==========================================

class Node {
    int key;
    Node left, right;

    public Node(int item) {
        key = item;
        left = right = null;
    }
}

class BinarySearchTree {
    Node root;

    BinarySearchTree() { root = null; }

    // 1. INSERTION ALGORITHM (O(log N))
    void insert(int key) { root = insertRec(root, key); }
    
    Node insertRec(Node root, int key) {
        // Base Case: If tree is empty, return a new node
        if (root == null) {
            root = new Node(key);
            return root;
        }
        // Traverse down the tree
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);
        return root;
    }

    // 2. INORDER TRAVERSAL (Prints sorted!)
    void inorder() { inorderRec(root); }
    
    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key + " ");
            inorderRec(root.right);
        }
    }
}

// ==========================================
// FULL CONTEXT: MERGE SORT ALGORITHM (O(N log N))
// ==========================================

void sort(int arr[], int l, int r) {
    if (l < r) {
        // Find the middle point
        int m = l + (r - l) / 2;

        // Sort first and second halves
        sort(arr, l, m);
        sort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[] = new int[n1];
    int R[] = new int[n2];

    for (int i = 0; i < n1; ++i) L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) { arr[k] = L[i]; i++; } 
        else { arr[k] = R[j]; j++; }
        k++;
    }

    while (i < n1) { arr[k] = L[i]; i++; k++; }
    while (j < n2) { arr[k] = R[j]; j++; k++; }
}
        `,
        files: []
    },
    "INTRO CYBER": {
        id: "cyber", icon: "fa-shield-halved", title: "Intro to Cybersecurity (CCY2001)",
        examDate: "Saturday, June 13, 2026 - 12:30 PM",
        videos: [
            {title: "Cybersecurity Full Course for Beginners", id: "U_P23SqJaDc", embed: true},
            {title: "OSI Reference Model Layer 1-7 (Neso Academy)", id: "vv-p8bT2o1k", embed: true},
            {title: "AES Encryption Explained (Computerphile)", id: "gq83m5QJ_mE", embed: true},
            {title: "How HTTPS Works (TLS Explained)", id: "AlE5X1NlHgg", embed: true},
            {title: "Ethical Hacking Full Course (freeCodeCamp)", id: "3Kq1z-CRU64", embed: true},
            {title: "Hacker's Roadmap 2025 (NetworkChuck)", id: "5xWnmUEi1Qw", embed: true}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access.
2. CIA Triad: The three core principles of cybersecurity — Confidentiality (only authorized access), Integrity (data is accurate and unaltered), Availability (systems are accessible when needed).
3. Authentication: Verifying the identity of a user (e.g., password, fingerprint). Authorization: Granting access rights after authentication.
4. Multi-Factor Authentication (MFA): Uses two or more of: Something you know (password), Something you have (OTP token), Something you are (biometric).
5. Symmetric Encryption: Same key is used for encryption and decryption. Fast but key distribution is challenging. Example: AES.
6. Asymmetric Encryption: Uses a key pair — Public Key (encrypt or verify) and Private Key (decrypt or sign). Example: RSA. Used in HTTPS.
7. AES (Advanced Encryption Standard): The gold standard symmetric cipher. Block sizes: 128-bit. Key sizes: 128, 192, or 256 bits.
8. RSA: Most widely used asymmetric algorithm. Security based on difficulty of factoring large prime numbers.
9. Hashing: One-way function that converts data into a fixed-size digest. Cannot be reversed. Used for password storage. Examples: SHA-256, MD5 (BROKEN).
10. MD5 is considered cryptographically broken — do NOT use it for passwords or security. SHA-256 is the minimum standard.
11. XOR Cipher: Bitwise operation. P XOR K = C (Ciphertext). C XOR K = P (Decryption). Same key for both operations.
12. Caesar Cipher: Simple substitution cipher that shifts letters by a fixed number. Easily broken by frequency analysis.
13. Digital Signature: Uses Private Key to SIGN, Public Key to VERIFY. Provides authentication and non-repudiation.
14. PKI (Public Key Infrastructure): System for managing digital certificates and public-key encryption. Certificate Authority (CA) issues trusted certificates.
15. TLS/SSL: Protocol that secures communication over networks. HTTPS = HTTP over TLS. Provides confidentiality and integrity.
16. Firewall: Network security device that monitors and filters incoming/outgoing traffic based on predefined rules.
17. IDS (Intrusion Detection System): Monitors network traffic for suspicious activity and alerts administrators.
18. IPS (Intrusion Prevention System): Like IDS but actively blocks detected threats.
19. DMZ (Demilitarized Zone): A network segment between the external internet and internal network that hosts public-facing servers.
20. VPN (Virtual Private Network): Creates an encrypted tunnel over a public network, making private communication possible.
21. OSI Model (7 Layers — BOTTOM to TOP): Physical, Data Link, Network, Transport, Session, Presentation, Application.
22. Transport Layer (Layer 4): Provides end-to-end communication. TCP (reliable, connection-oriented), UDP (fast, connectionless).
23. Network Layer (Layer 3): Handles routing and IP addressing. Firewalls and routers operate here.
24. Application Layer (Layer 7): Protocols like HTTP, HTTPS, FTP, SMTP, DNS operate here.
25. Social Engineering: Manipulating people to divulge information. Most common: Phishing (fake emails), Vishing (voice), Smishing (SMS).
26. Phishing: Fraudulent emails/websites designed to steal credentials. Spear Phishing targets specific individuals.
27. Malware: Malicious software. Types: Virus (attaches to files), Worm (self-replicates across networks), Trojan (disguised as legitimate), Ransomware (encrypts files for ransom), Spyware (monitors user).
28. DoS (Denial of Service): Floods a server with requests to make it unavailable. DDoS uses multiple compromised systems.
29. Man-in-the-Middle (MitM) Attack: Attacker secretly intercepts and potentially alters communication between two parties.
30. SQL Injection: Malicious SQL code inserted into form fields to manipulate databases. Prevented with Prepared Statements.
31. XSS (Cross-Site Scripting): Injects malicious scripts into web pages viewed by other users. Prevented with output escaping.
32. Buffer Overflow: Writing more data than a buffer can hold, overwriting adjacent memory. Can allow arbitrary code execution.
33. OWASP Top 10: A standard awareness document listing the 10 most critical web application security risks. Includes SQLi, XSS, Broken Access Control.
34. Principle of Least Privilege: Users and programs should only have the minimum access rights necessary to perform their function.
35. Defense in Depth: Layered security approach — if one control fails, others remain. Multiple barriers at different levels.
36. Zero Trust: Security model that assumes no user or device is inherently trusted, even inside the network. "Never trust, always verify."
37. Penetration Testing (Ethical Hacking): Authorized, simulated cyber attack to find vulnerabilities before malicious actors do.
38. Vulnerability Assessment: Identifies security weaknesses without actively exploiting them.
39. Incident Response Phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.
40. SIEM (Security Information and Event Management): Collects and analyzes security data from across the organization in real time.
41. Honeypot: A decoy system designed to attract attackers to study their methods and distract them from real systems.
42. Access Control Models: DAC (Discretionary — owner controls access), MAC (Mandatory — system enforces policies), RBAC (Role-Based — access by role).
43. Data Encryption at Rest vs In Transit: Encrypt data stored on disk (at rest) AND data traveling over networks (in transit).
44. Certificate Authority (CA): A trusted entity that issues digital certificates binding public keys to identities (e.g., DigiCert, Let's Encrypt).
45. Cryptographic Key Management: Generating, storing, distributing, rotating, and revoking cryptographic keys securely.
46. Steganography: Hiding secret data within non-secret files (e.g., hiding a message inside an image).
47. Port Numbers: HTTP=80, HTTPS=443, FTP=21, SSH=22, DNS=53, SMTP=25.
48. Ransomware Defense: Regular backups (3-2-1 rule), email filtering, endpoint protection, user training.
49. Biometric Authentication: Uses physical characteristics (fingerprint, face, iris). Convenient but cannot be changed if compromised.
50. Cybersecurity Frameworks: NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover). ISO 27001 for information security management.</li></ul>
        `,
        codeVault: `
# ==========================================
# FULL CONTEXT: ESSENTIAL LINUX COMMANDS
# ==========================================

# 1. FILE & DIRECTORY PERMISSIONS (chmod)
# Format: chmod [User][Group][Others] file
# Read(r)=4, Write(w)=2, Execute(x)=1
$ chmod 755 script.sh  
# User: 7 (4+2+1) -> rwx
# Group: 5 (4+1) -> r-x
# Others: 5 (4+1) -> r-x

$ chmod 600 private_key.pem 
# User: 6 (4+2) -> rw-
# Group: 0 -> ---
# Others: 0 -> ---

# 2. NETWORKING COMMANDS
$ ping 8.8.8.8           # Check ICMP connectivity to Google DNS
$ ifconfig               # View network interfaces and IP addresses (deprecated, use 'ip a')
$ netstat -tulpn         # Show active listening ports and processes
$ nmap -sV 192.168.1.1   # Scan open ports and service versions on a target

# 3. TEXT MANIPULATION & SEARCHING
$ grep "Failed password" /var/log/auth.log   # Find SSH brute force attempts
$ cat /etc/passwd | cut -d: -f1              # List all user accounts on the system
        `,
        files: []
    },
    "COMPUTER ARCHITECTURE": {
        id: "arch", icon: "fa-microchip", title: "Computer Architecture (CCS2103)",
        examDate: "Monday, June 15, 2026 - 12:30 PM",
        videos: [
            {title: "⭐ MARIE Assembly (Neso Academy)", id: "dkGXVMRNhD8", embed: true},
            {title: "CPU Fetch-Decode-Execute Cycle Explained", id: "jFDMZpkUWCw", embed: true},
            {title: "Logic Gates & Boolean Algebra (Neso Academy)", id: "g3LEK3P_h74", embed: true},
            {title: "Introduction to Cache Memory (Neso Academy)", id: "J3Q2zVb1_40", embed: true},
            {title: "Cache Memory Mapping Techniques (Neso Academy)", id: "s1R-r63_D-o", embed: true},
            {title: "How Computer Memory Works (Crash Course CS)", id: "XETZoRYdtkw", embed: true},
            {title: "RISC vs CISC (Simply Explained)", id: "g16wZWKcao4", embed: true}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. Computer Architecture defines the functional structure of a computer system: how hardware components work together to execute programs.
2. Von Neumann Architecture: The foundational model. A single shared memory holds BOTH instructions and data. Includes CPU, Memory, and I/O.
3. Harvard Architecture: Separate memory and buses for instructions and data, allowing simultaneous access. Used in modern CPUs and microcontrollers.
4. CPU (Central Processing Unit): The brain of the computer. Performs the Fetch-Decode-Execute cycle for every instruction.
5. MARIE (Machine Architecture that is Really Intuitive and Easy): A simplified, educational computer used to teach assembly language and architecture concepts.
6. MARIE Registers: AC (Accumulator), PC (Program Counter), IR (Instruction Register), MAR (Memory Address Register), MBR (Memory Buffer Register), InREG, OutREG.
7. PC (Program Counter): Always holds the address of the NEXT instruction to be fetched. Auto-increments after each fetch.
8. MAR (Memory Address Register): Holds the address in memory that is about to be read from or written to.
9. MBR (Memory Buffer Register): Temporarily holds data being transferred to/from memory.
10. IR (Instruction Register): Holds the current instruction being decoded and executed.
11. AC (Accumulator): The main general-purpose register in MARIE. All arithmetic results are stored here.
12. MARIE Instruction Format: 16 bits total — upper 4 bits = Opcode, lower 12 bits = Operand (memory address).
13. The Universal Fetch Cycle (RTN): MAR ← PC → MBR ← M[MAR] → IR ← MBR → PC ← PC + 1.
14. RTN for LOAD X: MAR ← X; MBR ← M[MAR]; AC ← MBR.
15. RTN for ADD X: MAR ← X; MBR ← M[MAR]; AC ← AC + MBR.
16. RTN for STORE X: MAR ← X; MBR ← AC; M[MAR] ← MBR.
17. RTN for JUMP X: PC ← X. (Simply overwrites the Program Counter — no memory access needed.)
18. SKIPCOND Instruction: Skips the next instruction based on AC: 000 = skip if AC &lt; 0; 400 = skip if AC = 0; 800 = skip if AC &gt; 0.
19. MARIE Assembly: Uses labels, LOAD, STORE, ADD, SUB, JUMP, SKIPCOND, INPUT, OUTPUT, HALT, DEC, ORG directives.
20. Direct Addressing: The operand field of the instruction directly contains the effective address of the data.
21. Indirect Addressing: The operand field contains the address of the address of the data — requires an extra memory access.
22. Immediate Addressing: The operand IS the data itself, not an address. Faster but limited value size.
23. Indexed Addressing: Effective address = operand + value of an index register. Useful for arrays.
24. Boolean Algebra: Mathematical system using 0 and 1. Operations: AND (·), OR (+), NOT (¬).
25. Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR. The fundamental building blocks of all digital circuits.
26. NAND and NOR are Universal Gates — any Boolean function can be built using only NAND gates or only NOR gates.
27. XOR (Exclusive OR): Output is 1 only when inputs differ. Key component in adders and parity checkers.
28. Half Adder: Adds two single bits. Outputs: Sum = A XOR B, Carry = A AND B.
29. Full Adder: Adds three bits (two inputs + carry-in). Outputs Sum and Carry-out. Built from two Half Adders.
30. Ripple Carry Adder: Chains multiple Full Adders to add multi-bit numbers. Carry ripples from LSB to MSB.
31. Flip-Flops: 1-bit memory elements. Types: SR, JK, D, T. D Flip-Flop: on clock edge, Q = D.
32. Registers: A group of flip-flops storing multiple bits as a unit. A 16-bit register has 16 flip-flops.
33. Memory Hierarchy (Fastest to Slowest/Cheapest): Registers → Cache (SRAM) → Main Memory (DRAM) → Secondary Storage (HDD/SSD).
34. Cache Memory: Small, very fast SRAM between CPU and main memory. Exploits temporal and spatial locality.
35. Cache Hit: Data is found in cache. Cache Miss: Data must be fetched from slower main memory.
36. Locality of Reference: Temporal Locality (recently used data will likely be used again), Spatial Locality (nearby data will likely be used soon).
37. SRAM (Static RAM): Used for CPU cache. Fast, expensive, no refresh needed. Data stored in flip-flops.
38. DRAM (Dynamic RAM): Used for main memory. Slower, cheaper, requires periodic refresh. Data stored in capacitors.
39. ROM (Read-Only Memory): Non-volatile memory used for firmware/BIOS. Cannot be easily modified.
40. Pipeline: Overlapping execution of multiple instructions by dividing the instruction cycle into stages (Fetch, Decode, Execute).
41. Pipeline Hazards: Structural (resource conflict), Data (instruction depends on previous result), Control (branch causes wrong fetch).
42. RISC (Reduced Instruction Set Computer): Simple, fixed-length instructions. Many registers. Load/Store architecture. Examples: ARM, MIPS.
43. CISC (Complex Instruction Set Computer): Complex, variable-length instructions. Fewer but more powerful instructions. Example: Intel x86.
44. RISC vs CISC: RISC executes 1 instruction per cycle (pipelined). CISC may take multiple cycles per instruction.
45. Input/Output (I/O): Mechanisms for CPU to communicate with peripherals. Methods: Programmed I/O (busy-wait), Interrupt-Driven I/O, DMA.
46. Interrupts: Signals from hardware/software that stop the CPU's current task and run an Interrupt Service Routine (ISR).
47. DMA (Direct Memory Access): A controller that handles data transfer between I/O devices and memory without CPU involvement. Frees CPU.
48. Bus: Shared communication pathway connecting CPU, memory, and I/O. Types: Data Bus, Address Bus, Control Bus.
49. Clock Speed (GHz): Number of clock cycles per second. Higher clock = more instructions per second.
50. Moore's Law: Observation that transistor count on a chip doubles approximately every two years, leading to exponential growth in computing power.</li></ul>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: CPU FETCH-DECODE-EXECUTE RTN
// ==========================================

// THE UNIVERSAL FETCH CYCLE (Executes before EVERY instruction)
MAR <- PC          // Step 1: Copy Program Counter to Memory Address Register
MBR <- M[MAR]      // Step 2: Fetch the actual instruction from Memory into Buffer Register
IR <- MBR          // Step 3: Move instruction from Buffer to Instruction Register
PC <- PC + 1       // Step 4: Increment PC to point to the NEXT instruction

// ------------------------------------------
// THE EXECUTE CYCLES (Depends on Opcode in IR)
// ------------------------------------------

// Instruction: LOAD X (Load memory value at address X into Accumulator)
MAR <- X           // Address X sent to MAR
MBR <- M[MAR]      // Data fetched from Memory at address X into MBR
AC <- MBR          // Data moved from MBR into Accumulator

// Instruction: ADD X (Add memory value at X to Accumulator)
MAR <- X           // Address X sent to MAR
MBR <- M[MAR]      // Data fetched into MBR
AC <- AC + MBR     // Accumulator is updated with the sum

// Instruction: STORE X (Store Accumulator value into Memory at address X)
MAR <- X           // Address X sent to MAR
MBR <- AC          // Accumulator data moved to Buffer Register
M[MAR] <- MBR      // Buffer data written to Memory at address X

// Instruction: JUMP X (Unconditional branch to address X)
PC <- X            // Simply overwrite the Program Counter with X!
        `,
        files: []
    },
    "ADVANCED PROG": {
        id: "advprog", icon: "fa-code", title: "Advanced Programming Apps (CCS2304)",
        examDate: "Wednesday, June 17, 2026 - 12:30 PM",
        videos: [
            {title: "Java OOP Full Course (Bro Code)", id: "xk4_1vDrzzo", embed: true},
            {title: "JavaFX GUI Full Course (Bro Code)", id: "FLkOX4Eez6o", embed: true},
            {title: "Java Exception Handling (Alex Lee)", id: "kYJvM91lQz0", embed: true},
            {title: "Java Multithreading (Coding with John)", id: "r_MbozD32eo", embed: true},
            {title: "Java JDBC MySQL Full Tutorial", id: "2i4t-MinRcg", embed: true},
            {title: "MVC Design Pattern Explained", id: "DUg2SWWK18I", embed: true}
        ],
        summary: `
<ul style='margin-left: 20px; list-style-type: disc; margin-bottom: 20px;'><li style='margin-bottom: 8px;'>1. Java is a strongly-typed, object-oriented programming language that runs on the Java Virtual Machine (JVM), making it platform-independent ("Write Once, Run Anywhere").
2. OOP Pillars in Java: Encapsulation (hiding data with private fields + getters/setters), Inheritance (extends keyword), Polymorphism (overriding/overloading), Abstraction (abstract classes/interfaces).
3. Classes and Objects: A Class is a blueprint. An Object is an instance of a class, created with the new keyword.
4. Constructor: A special method with the same name as the class. Called automatically when an object is created. Used for initialization.
5. Access Modifiers: public (accessible everywhere), private (accessible only within the class), protected (accessible within package and subclasses), default (package-level).
6. Inheritance: A subclass (child) inherits the fields and methods of a superclass (parent) using extends. Only single inheritance of classes is allowed in Java.
7. Method Overriding: Subclass provides a specific implementation for a method already defined in the superclass. Must use @Override annotation.
8. Method Overloading: Multiple methods with the same name but different parameter lists (different number or types). Resolved at compile time.
9. Abstract Class: Cannot be instantiated. Can have abstract methods (no body) that must be implemented by subclasses. Uses abstract keyword.
10. Interface: A contract specifying what a class MUST do (without saying how). Uses implements. A class can implement multiple interfaces.
11. Interface vs Abstract Class: Interface = pure contract, multiple inheritance. Abstract Class = partial implementation, single inheritance with code reuse.
12. Polymorphism: An object can take many forms. A parent class reference can hold a child class object.
13. super Keyword: Refers to the parent class. Used to call parent's constructor (super()) or override methods (super.method()).
14. static Keyword: Belongs to the class, not an instance. Static methods can be called without creating an object (e.g., Math.sqrt()).
15. final Keyword: final variable = constant. final method = cannot be overridden. final class = cannot be extended.
16. Generics: Allow classes and methods to work with any data type specified at compile time. Example: ArrayList&lt;String&gt;.
17. Java Collections Framework: Key interfaces: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue.
18. ArrayList vs LinkedList: ArrayList uses dynamic arrays (fast random access O(1)). LinkedList uses doubly-linked list (fast insert/delete at ends O(1)).
19. HashMap: Stores key-value pairs. put(K, V), get(K), containsKey(K). Average O(1) for operations. Does NOT maintain order.
20. Exception Handling: try { risky code } catch (ExceptionType e) { handle } finally { always runs }.
21. Checked Exceptions: Must be caught or declared with throws (e.g., IOException, SQLException). Compile-time enforcement.
22. Unchecked Exceptions (RuntimeException): Do not need to be caught (e.g., NullPointerException, ArrayIndexOutOfBoundsException).
23. Custom Exceptions: Create by extending Exception (checked) or RuntimeException (unchecked).
24. Multithreading: Running multiple threads concurrently within a single program to improve performance.
25. Thread Creation Method 1 — extends Thread: Override run() method. Call .start() to launch thread.
26. Thread Creation Method 2 — implements Runnable (PREFERRED): Separates task from thread. Pass Runnable to new Thread(task). Allows implementing other interfaces.
27. Thread Lifecycle: NEW → RUNNABLE → RUNNING → BLOCKED/WAITING → TERMINATED.
28. Thread.sleep(ms): Pauses the current thread for the specified number of milliseconds.
29. thread.join(): Waits for a thread to finish before continuing. Used to synchronize threads.
30. Race Condition: Occurs when multiple threads access shared data concurrently and the result depends on thread scheduling order.
31. synchronized keyword: Ensures only one thread executes a block of code at a time. Prevents race conditions.
32. JDBC (Java Database Connectivity): Standard Java API for connecting to relational databases (MySQL, Oracle, etc.).
33. JDBC Steps: (1) Load Driver, (2) DriverManager.getConnection(url, user, pass), (3) Create Statement/PreparedStatement, (4) Execute, (5) Process ResultSet, (6) Close.
34. PreparedStatement: Precompiled SQL query that prevents SQL Injection. Use ? placeholders and setString/setInt methods.
35. ResultSet: The object returned by executeQuery(). Iterate with while(rs.next()). Access data with rs.getString("col").
36. MVC (Model-View-Controller) Pattern: Separates application into three components. Model = data/logic, View = UI, Controller = mediates between Model and View.
37. Design Patterns: Reusable solutions to common design problems. Categories: Creational (Singleton, Factory), Structural (Decorator, Adapter), Behavioral (Observer, Strategy).
38. Singleton Pattern: Ensures a class has only ONE instance. Private constructor + static getInstance() method.
39. Observer Pattern: One object (Subject) notifies many (Observers) when its state changes. Foundation of event-driven programming.
40. Lambda Expressions (Java 8+): Short syntax for anonymous functions. (params) -> expression. Used with functional interfaces.
41. Stream API (Java 8+): Process collections of data in a declarative way. Methods: .filter(), .map(), .collect(), .forEach().
42. File I/O: Java uses FileReader/BufferedReader for reading, FileWriter/BufferedWriter for writing. Always close streams in a finally block or use try-with-resources.
43. ArrayList common methods: add(), remove(), get(), size(), contains(), set(), clear(), sort().
44. String class: Immutable in Java. Key methods: length(), charAt(), substring(), equals(), contains(), toUpperCase(), split(), trim().
45. StringBuilder: Mutable string buffer. More efficient than String concatenation in loops.
46. Wrapper Classes: Convert primitives to objects: int → Integer, double → Double. Enable use in Collections. Autoboxing/unboxing handles conversion automatically.
47. Comparable vs Comparator: Comparable (implements compareTo()) is for natural ordering. Comparator is for custom ordering passed to sort methods.
48. Networking in Java: Socket and ServerSocket classes for TCP communication. URL and HttpURLConnection for HTTP requests.
49. Java Annotations: Metadata added to code with @. Built-in: @Override, @Deprecated, @SuppressWarnings. Custom annotations also possible.
50. Java Memory Management: Automatic Garbage Collection (GC) reclaims memory from objects no longer referenced. Stack holds primitives/references; Heap holds objects.</li>
<li style='margin-bottom: 8px;'>8. Multithreading: A Thread is a lightweight sub-process. Java enables concurrent execution via the <code>Thread</code> class or <code>Runnable</code> interface. Always invoke <code>start()</code>, never <code>run()</code> directly.</li>
</ul>
        `,
        codeVault: `
// ==========================================
// FULL CONTEXT: MULTI-THREADING (RUNNABLE)
// ==========================================

// Implementing Runnable is preferred over extending Thread
// because Java only supports single inheritance.
class MyTask implements Runnable {
    private String threadName;
    
    public MyTask(String name) {
        this.threadName = name;
    }

    @Override
    public void run() {
        try {
            for(int i = 5; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                Thread.sleep(1000); // Pause for 1 second
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " + threadName + " interrupted.");
        }
        System.out.println("Thread " + threadName + " exiting.");
    }
}

public class Main {
    public static void main(String args[]) {
        MyTask task1 = new MyTask("Alpha");
        MyTask task2 = new MyTask("Beta");
        
        Thread t1 = new Thread(task1);
        Thread t2 = new Thread(task2);
        
        t1.start(); // This calls the run() method asynchronously
        t2.start(); 
        
        try {
            t1.join(); // Main thread waits for t1 to finish
            t2.join(); // Main thread waits for t2 to finish
        } catch (Exception e) {
            System.out.println("Main interrupted.");
        }
        System.out.println("Main thread ending.");
    }
}

// ==========================================
// FULL CONTEXT: CUSTOM EXCEPTIONS
// ==========================================

// Creating a custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

class BankAccount {
    private double balance;
    
    // The throws keyword warns callers they must handle this!
    public void withdraw(double amount) throws InsufficientFundsException {
        if(amount > balance) {
            // Actively throwing the exception
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}
        `,
        files: []
    }
};

fileList.forEach(file => {
    for (let key in subjectsData) {
        if (file.FullName.includes("" + key + "") || file.FullName.endsWith("" + key)) {
            subjectsData[key].files.push(file);
            break;
        }
    }
});

function generateExamsHtml(id, subjectTitle) {
    let html = '';
    const variants = ['A', 'B', 'C'];
    
    html += `<div class="exam-tabs">`;
    variants.forEach((v, i) => {
        html += `<button class="exam-tab-btn ${i===0?'active':''}" onclick="switchExam(event, this, '${v}')">Exam ${v}</button>`;
    });
    html += `</div>`;

    const customExams = {
        'se_A': {
            q1: "Which SDLC model is most appropriate when requirements are well-understood and unlikely to change? <br><input type='radio' name='se_eAq1'> A) Agile <input type='radio' name='se_eAq1'> B) Waterfall &check; <input type='radio' name='se_eAq1'> C) Scrum",
            q2: "What does the 'O' in SOLID stand for? <br><input type='radio' name='se_eAq2'> A) Object <input type='radio' name='se_eAq2'> B) Open-Closed &check; <input type='radio' name='se_eAq2'> C) Oriented",
            q3: "Which UML diagram shows object interactions over time? <br><input type='radio' name='se_eAq3'> A) Class Diagram <input type='radio' name='se_eAq3'> B) Use Case <input type='radio' name='se_eAq3'> C) Sequence &check;",
            q4: "What is a Non-Functional Requirement? <br><input type='radio' name='se_eAq4'> A) Login feature <input type='radio' name='se_eAq4'> B) System performance &check; <input type='radio' name='se_eAq4'> C) Use case",
            q5: "Which testing technique does NOT require knowledge of internal code? <br><input type='radio' name='se_eAq5'> A) White-Box <input type='radio' name='se_eAq5'> B) Black-Box &check; <input type='radio' name='se_eAq5'> C) Path Testing",
            q6: "Which is FALSE about Agile? <br><input type='radio' name='se_eAq6'> A) Iterative <input type='radio' name='se_eAq6'> B) Requires fixed requirements &check; <input type='radio' name='se_eAq6'> C) Values customer collaboration",
            short: "<p><strong>Q7 (7 pts):</strong> Draw a Class Diagram for a University system with Student, Course, and Professor classes. Show multiplicity.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain the difference between Aggregation and Composition in UML with a real-world example each.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> You are the software architect for an online banking system. Write a full Use Case description for the 'Transfer Money' use case. Include: Use Case Name, Actor, Preconditions, Main Flow (steps 1-7), Alternate Flows, and Postconditions.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'se_B': {
            q1: "In the V-Model, what is paired with the Requirements Analysis phase? <br><input type='radio' name='se_eBq1'> A) Unit Testing <input type='radio' name='se_eBq1'> B) Acceptance Testing &check; <input type='radio' name='se_eBq1'> C) Integration Testing",
            q2: "Cyclomatic Complexity measures: <br><input type='radio' name='se_eBq2'> A) Lines of code <input type='radio' name='se_eBq2'> B) Independent paths through code &check; <input type='radio' name='se_eBq2'> C) Class count",
            q3: "Which Agile role manages the product backlog? <br><input type='radio' name='se_eBq3'> A) Scrum Master <input type='radio' name='se_eBq3'> B) Product Owner &check; <input type='radio' name='se_eBq3'> C) Developer",
            q4: "Regression Testing is performed to: <br><input type='radio' name='se_eBq4'> A) Test new features <input type='radio' name='se_eBq4'> B) Ensure old features still work after changes &check; <input type='radio' name='se_eBq4'> C) Measure performance",
            q5: "Which SDLC model is BEST for projects with high risk and evolving requirements? <br><input type='radio' name='se_eBq5'> A) Waterfall <input type='radio' name='se_eBq5'> B) V-Model <input type='radio' name='se_eBq5'> C) Spiral &check;",
            q6: "Which is TRUE about Low Coupling? <br><input type='radio' name='se_eBq6'> A) Modules are heavily dependent <input type='radio' name='se_eBq6'> B) Modules are mostly independent &check; <input type='radio' name='se_eBq6'> C) A class has one purpose",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the 4 types of Software Maintenance with a brief example of each.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Draw a State Machine Diagram for a simple traffic light system (Red → Green → Yellow → Red).</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> A company is building a hospital management system. Identify 5 Functional Requirements and 5 Non-Functional Requirements. For each non-functional requirement, specify a measurable criteria.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'se_C': {
            q1: "What is Technical Debt? <br><input type='radio' name='se_eCq1'> A) Project budget <input type='radio' name='se_eCq1'> B) Cost of choosing quick/poor solutions now &check; <input type='radio' name='se_eCq1'> C) Bug count",
            q2: "Which is a Black-Box testing technique? <br><input type='radio' name='se_eCq2'> A) Branch Coverage <input type='radio' name='se_eCq2'> B) Boundary Value Analysis &check; <input type='radio' name='se_eCq2'> C) Path Testing",
            q3: "A Gantt Chart is used for: <br><input type='radio' name='se_eCq3'> A) Risk analysis <input type='radio' name='se_eCq3'> B) Project scheduling &check; <input type='radio' name='se_eCq3'> C) Requirement gathering",
            q4: "Pair Programming is a practice from which methodology? <br><input type='radio' name='se_eCq4'> A) Waterfall <input type='radio' name='se_eCq4'> B) V-Model <input type='radio' name='se_eCq4'> C) Agile/XP &check;",
            q5: "Which diagram models business WORKFLOW and process flow? <br><input type='radio' name='se_eCq5'> A) Class Diagram <input type='radio' name='se_eCq5'> B) Sequence Diagram <input type='radio' name='se_eCq5'> C) Activity Diagram &check;",
            q6: "Which is FALSE about Unit Testing? <br><input type='radio' name='se_eCq6'> A) Tests individual functions <input type='radio' name='se_eCq6'> B) Done by developers <input type='radio' name='se_eCq6'> C) Tests the complete integrated system &check;",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between Verification and Validation with examples. Which testing types belong to each?</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> You are evaluating risk for a software project. Identify 3 project risks, rate them (High/Medium/Low), and suggest one mitigation strategy for each.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Design the architecture for a simple e-commerce website. Describe which architectural pattern you chose (e.g., MVC, Layered, Microservices) and explain why. Draw the architectural layers/components and describe the responsibility of each layer.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'web_A': {
            q1: "Which CSS property controls the space BETWEEN an element's content and its border? <br><input type='radio' name='web_eAq1'> A) margin <input type='radio' name='web_eAq1'> B) padding &check; <input type='radio' name='web_eAq1'> C) border-spacing",
            q2: "Which HTTP method should be used to SUBMIT a login form securely? <br><input type='radio' name='web_eAq2'> A) GET <input type='radio' name='web_eAq2'> B) POST &check; <input type='radio' name='web_eAq2'> C) PUT",
            q3: "document.getElementById('box').style.display = 'none' does what? <br><input type='radio' name='web_eAq3'> A) Deletes the element <input type='radio' name='web_eAq3'> B) Hides the element &check; <input type='radio' name='web_eAq3'> C) Changes color",
            q4: "PHP superglobal $_SESSION is used to: <br><input type='radio' name='web_eAq4'> A) Get URL params <input type='radio' name='web_eAq4'> B) Store data server-side across pages &check; <input type='radio' name='web_eAq4'> C) Read cookies",
            q5: "Which is the CORRECT way to prevent SQL injection in PHP? <br><input type='radio' name='web_eAq5'> A) htmlspecialchars <input type='radio' name='web_eAq5'> B) Prepared Statements &check; <input type='radio' name='web_eAq5'> C) trim()",
            q6: "fetch() in JavaScript returns: <br><input type='radio' name='web_eAq6'> A) A string <input type='radio' name='web_eAq6'> B) A Promise &check; <input type='radio' name='web_eAq6'> C) An array",
            short: "<p><strong>Q7 (7 pts):</strong> Write valid PHP code to connect to a MySQL database named school_db using PDO. Include error handling.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain the CSS Box Model. Draw a labeled diagram showing all 4 components and explain what each does.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Write a complete HTML page with a registration form (Name, Email, Password). Using JavaScript, validate that no field is empty and the email contains '@' before submission. Show an error message under each invalid field without using alert().</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'web_B': {
            q1: "Which HTML5 element makes code more accessible and SEO-friendly by describing a major section? <br><input type='radio' name='web_eBq1'> A) &lt;div&gt; <input type='radio' name='web_eBq1'> B) &lt;section&gt; <input type='radio' name='web_eBq1'> C) &lt;article&gt; &check;",
            q2: "What does AJAX stand for? <br><input type='radio' name='web_eBq2'> A) Active Java and XML <input type='radio' name='web_eBq2'> B) Asynchronous JavaScript and XML &check; <input type='radio' name='web_eBq2'> C) Async Java Action XML",
            q3: "localStorage.setItem('user', 'Ali') — this data persists: <br><input type='radio' name='web_eBq3'> A) Until tab close <input type='radio' name='web_eBq3'> B) Until browser close <input type='radio' name='web_eBq3'> C) Until manually cleared &check;",
            q4: "In CSS Flexbox, which property aligns items along the CROSS axis? <br><input type='radio' name='web_eBq4'> A) justify-content <input type='radio' name='web_eBq4'> B) align-items &check; <input type='radio' name='web_eBq4'> C) flex-direction",
            q5: "Which PHP function starts a session? <br><input type='radio' name='web_eBq5'> A) begin_session() <input type='radio' name='web_eBq5'> B) session_start() &check; <input type='radio' name='web_eBq5'> C) start_session()",
            q6: "XSS (Cross-Site Scripting) is prevented by: <br><input type='radio' name='web_eBq6'> A) Prepared statements <input type='radio' name='web_eBq6'> B) Escaping/sanitizing user output &check; <input type='radio' name='web_eBq6'> C) Using HTTPS",
            short: "<p><strong>Q7 (7 pts):</strong> Write AJAX code using fetch() to send a GET request to api/users.php and display the JSON response (a list of user names) in a &lt;ul&gt; with id='user-list'.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain the difference between GET and POST HTTP methods. When should each be used? What are the security implications of using GET for form submission?</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Write a complete PHP script for a login page that: (1) Uses $_POST to receive username and password, (2) Uses PDO with a prepared statement to check credentials against a users table, (3) On success, starts a session and stores the username, (4) On failure, displays an error message.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'web_C': {
            q1: "Which CSS selector targets ALL &lt;p&gt; elements that are direct children of a &lt;div&gt;? <br><input type='radio' name='web_eCq1'> A) div p <input type='radio' name='web_eCq1'> B) div > p &check; <input type='radio' name='web_eCq1'> C) div + p",
            q2: "In JavaScript, const arr = [1,2,3]; arr.map(x => x*2) returns: <br><input type='radio' name='web_eCq2'> A) [1,2,3] <input type='radio' name='web_eCq2'> B) [2,4,6] &check; <input type='radio' name='web_eCq2'> C) 6",
            q3: "Which status code means 'Resource Not Found'? <br><input type='radio' name='web_eCq3'> A) 200 <input type='radio' name='web_eCq3'> B) 403 <input type='radio' name='web_eCq3'> C) 404 &check;",
            q4: "jQuery's $.ajax() is used for: <br><input type='radio' name='web_eCq4'> A) CSS animation <input type='radio' name='web_eCq4'> B) Asynchronous HTTP requests &check; <input type='radio' name='web_eCq4'> C) Form validation",
            q5: "PHP include vs require — the key difference is: <br><input type='radio' name='web_eCq5'> A) Performance <input type='radio' name='web_eCq5'> B) require causes fatal error if file missing &check; <input type='radio' name='web_eCq5'> C) Syntax",
            q6: "Which is TRUE about Cookies? <br><input type='radio' name='web_eCq6'> A) Stored on server <input type='radio' name='web_eCq6'> B) Sent with every HTTP request &check; <input type='radio' name='web_eCq6'> C) More secure than sessions",
            short: "<p><strong>Q7 (7 pts):</strong> Explain Event Bubbling in JavaScript with a code example. How do you stop an event from bubbling?</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> What is Responsive Web Design? Write a CSS media query that changes the body font-size to 14px when the screen width is less than 600px.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Build a complete, working JavaScript to-do list. The page should have: an input field, an 'Add' button, and a &lt;ul&gt;. When 'Add' is clicked, the typed text should appear as a new &lt;li&gt;. Each &lt;li&gt; should have a 'Delete' button that removes it. No frameworks allowed.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'dsa_A': {
            q1: "What is the time complexity of Binary Search on a sorted array of n elements? <br><input type='radio' name='dsa_eAq1'> A) O(n) <input type='radio' name='dsa_eAq1'> B) O(log n) &check; <input type='radio' name='dsa_eAq1'> C) O(n²)",
            q2: "Which linked list operation is O(1) regardless of list size? <br><input type='radio' name='dsa_eAq2'> A) Insert at tail <input type='radio' name='dsa_eAq2'> B) Insert at head &check; <input type='radio' name='dsa_eAq2'> C) Search",
            q3: "A Stack uses which principle? <br><input type='radio' name='dsa_eAq3'> A) FIFO <input type='radio' name='dsa_eAq3'> B) LIFO &check; <input type='radio' name='dsa_eAq3'> C) Priority",
            q4: "Inorder traversal of a BST produces: <br><input type='radio' name='dsa_eAq4'> A) Random output <input type='radio' name='dsa_eAq4'> B) Reverse sorted output <input type='radio' name='dsa_eAq4'> C) Sorted output &check;",
            q5: "Merge Sort's worst-case time complexity is: <br><input type='radio' name='dsa_eAq5'> A) O(n²) <input type='radio' name='dsa_eAq5'> B) O(n log n) &check; <input type='radio' name='dsa_eAq5'> C) O(n)",
            q6: "Which is FALSE about a Binary Search Tree? <br><input type='radio' name='dsa_eAq6'> A) Left child < parent <input type='radio' name='dsa_eAq6'> B) Can be unbalanced <input type='radio' name='dsa_eAq6'> C) Duplicates are always stored in right subtree &check;",
            short: "<p><strong>Q7 (7 pts):</strong> Trace the execution of Bubble Sort on the array [64, 34, 25, 12, 22]. Show each pass step-by-step.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Write the full Java code for a single linked list insertAtHead(int data) and deleteAtHead() method, including null checks.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Implement a full Binary Search Tree in Java with: (1) insert(int key), (2) search(int key) returning boolean, (3) inorderTraversal(). Trace the insertion of keys: 50, 30, 70, 20, 40 and draw the resulting tree.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'dsa_B': {
            q1: "The &amp; operator in C/C++ is used to: <br><input type='radio' name='dsa_eBq1'> A) Multiply <input type='radio' name='dsa_eBq1'> B) Get the memory address of a variable &check; <input type='radio' name='dsa_eBq1'> C) Dereference a pointer",
            q2: "What is the space complexity of Merge Sort? <br><input type='radio' name='dsa_eBq2'> A) O(1) <input type='radio' name='dsa_eBq2'> B) O(n) &check; <input type='radio' name='dsa_eBq2'> C) O(log n)",
            q3: "A Doubly Linked List node requires: <br><input type='radio' name='dsa_eBq3'> A) One pointer <input type='radio' name='dsa_eBq3'> B) Two pointers &check; <input type='radio' name='dsa_eBq3'> C) Three pointers",
            q4: "Which traversal visits Root FIRST, then left, then right? <br><input type='radio' name='dsa_eBq4'> A) Inorder <input type='radio' name='dsa_eBq4'> B) Postorder <input type='radio' name='dsa_eBq4'> C) Preorder &check;",
            q5: "Why do we use a temp pointer when deleting a linked list node? <br><input type='radio' name='dsa_eBq5'> A) Speed <input type='radio' name='dsa_eBq5'> B) To free the memory without losing the list connection &check; <input type='radio' name='dsa_eBq5'> C) Required by compiler",
            q6: "Which is TRUE about a Circular Linked List? <br><input type='radio' name='dsa_eBq6'> A) Last node's next is NULL <input type='radio' name='dsa_eBq6'> B) Last node's next points to head &check; <input type='radio' name='dsa_eBq6'> C) Cannot be traversed",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between Pass by Value and Pass by Reference in C/C++. Write a working swap(int *a, int *b) function using pointers.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> For the array [38, 27, 43, 3, 9, 82, 10], show the complete recursive division steps of Merge Sort and the final merge result.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Compare and contrast Quick Sort and Merge Sort in terms of: (a) Time complexity (best/average/worst), (b) Space complexity, (c) Stability, (d) When to prefer each. Then implement Quick Sort in Java including the partition function.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'dsa_C': {
            q1: "Graph BFS uses which data structure? <br><input type='radio' name='dsa_eCq1'> A) Stack <input type='radio' name='dsa_eCq1'> B) Queue &check; <input type='radio' name='dsa_eCq1'> C) Array",
            q2: "The height of a balanced BST with n nodes is approximately: <br><input type='radio' name='dsa_eCq2'> A) O(n) <input type='radio' name='dsa_eCq2'> B) O(log n) &check; <input type='radio' name='dsa_eCq2'> C) O(n²)",
            q3: "Which sorting algorithm is most efficient for nearly-sorted data? <br><input type='radio' name='dsa_eCq3'> A) Merge Sort <input type='radio' name='dsa_eCq3'> B) Quick Sort <input type='radio' name='dsa_eCq3'> C) Insertion Sort &check;",
            q4: "An Adjacency Matrix for a graph with V vertices requires: <br><input type='radio' name='dsa_eCq4'> A) O(V) <input type='radio' name='dsa_eCq4'> B) O(V+E) <input type='radio' name='dsa_eCq4'> C) O(V²) &check; space",
            q5: "A Hash Table with chaining handles collisions by: <br><input type='radio' name='dsa_eCq5'> A) Finding next empty slot <input type='radio' name='dsa_eCq5'> B) Using a linked list at each bucket &check; <input type='radio' name='dsa_eCq5'> C) Rehashing",
            q6: "Which is FALSE about Recursion? <br><input type='radio' name='dsa_eCq6'> A) Must have a base case <input type='radio' name='dsa_eCq6'> B) Uses the call stack <input type='radio' name='dsa_eCq6'> C) Always more efficient than iteration &check;",
            short: "<p><strong>Q7 (7 pts):</strong> A BST contains keys: 15, 10, 20, 8, 12, 17, 25. Draw the tree. Then write the output of: (a) Inorder, (b) Preorder, (c) Postorder traversal.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain the difference between a Stack and a Queue. Give a real-world example of each. Write pseudocode for a Stack implemented using an array.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Implement Graph BFS in Java. Your implementation should: (1) Represent the graph as an adjacency list, (2) Accept a start vertex, (3) Print all vertices in BFS order, (4) Handle disconnected graphs. Trace BFS starting from vertex 0 on this graph: 0-1, 0-2, 1-3, 2-4.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'cyber_A': {
            q1: "The CIA Triad stands for: <br><input type='radio' name='cyber_eAq1'> A) Code, Interface, Access <input type='radio' name='cyber_eAq1'> B) Confidentiality, Integrity, Availability &check; <input type='radio' name='cyber_eAq1'> C) Cipher, Integrity, Auth",
            q2: "XOR Cipher: 1010 XOR 1100 = ? <br><input type='radio' name='cyber_eAq2'> A) 0110 &check; <input type='radio' name='cyber_eAq2'> B) 1110 <input type='radio' name='cyber_eAq2'> C) 0010",
            q3: "Which attack floods a server to make it unavailable? <br><input type='radio' name='cyber_eAq3'> A) Phishing <input type='radio' name='cyber_eAq3'> B) DDoS &check; <input type='radio' name='cyber_eAq3'> C) XSS",
            q4: "AES is an example of: <br><input type='radio' name='cyber_eAq4'> A) Asymmetric Encryption <input type='radio' name='cyber_eAq4'> B) Hashing <input type='radio' name='cyber_eAq4'> C) Symmetric Encryption &check;",
            q5: "Which principle gives users only the access they need? <br><input type='radio' name='cyber_eAq5'> A) Defense in Depth <input type='radio' name='cyber_eAq5'> B) Least Privilege &check; <input type='radio' name='cyber_eAq5'> C) Zero Trust",
            q6: "Which is FALSE about Hashing? <br><input type='radio' name='cyber_eAq6'> A) One-way function <input type='radio' name='cyber_eAq6'> B) Fixed-size output <input type='radio' name='cyber_eAq6'> C) Can be reversed with the key &check;",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between Symmetric and Asymmetric encryption. Give one real-world use case for each (e.g., which is used in HTTPS and why).</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Using the XOR cipher with Key = 1011, encrypt the plaintext 1001. Then decrypt your ciphertext to verify the result. Show all steps.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> A company's web application was compromised by SQL Injection. (a) Explain exactly how this attack works with a code example of the malicious input. (b) Show the vulnerable PHP code. (c) Show the fixed PHP code using Prepared Statements with PDO. (d) Name two other security measures the company should implement.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'cyber_B': {
            q1: "Which OSI layer handles end-to-end communication and reliability (TCP/UDP)? <br><input type='radio' name='cyber_eBq1'> A) Network <input type='radio' name='cyber_eBq1'> B) Transport &check; <input type='radio' name='cyber_eBq1'> C) Session",
            q2: "A Firewall operates primarily at which layer? <br><input type='radio' name='cyber_eBq2'> A) Application <input type='radio' name='cyber_eBq2'> B) Network &check; <input type='radio' name='cyber_eBq2'> C) Physical",
            q3: "Which is an example of Multi-Factor Authentication? <br><input type='radio' name='cyber_eBq3'> A) Username+Password <input type='radio' name='cyber_eBq3'> B) Password+OTP &check; <input type='radio' name='cyber_eBq3'> C) Fingerprint only",
            q4: "A Honeypot is used to: <br><input type='radio' name='cyber_eBq4'> A) Store passwords <input type='radio' name='cyber_eBq4'> B) Lure and analyze attackers &check; <input type='radio' name='cyber_eBq4'> C) Encrypt traffic",
            q5: "Which attack intercepts communication between two parties without their knowledge? <br><input type='radio' name='cyber_eBq5'> A) DoS <input type='radio' name='cyber_eBq5'> B) Phishing <input type='radio' name='cyber_eBq5'> C) Man-in-the-Middle &check;",
            q6: "Which is TRUE about a DMZ? <br><input type='radio' name='cyber_eBq6'> A) Sits inside the internal network <input type='radio' name='cyber_eBq6'> B) Hosts public-facing servers between external and internal networks &check; <input type='radio' name='cyber_eBq6'> C) Has no firewall",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between a Virus, a Worm, and a Trojan. How does each spread? Give one real-world example of each type.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> List all 7 OSI model layers in order (Physical to Application). For each layer, give one protocol or technology that operates at that layer.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Design a layered security architecture (Defense in Depth) for a company's network. Include at least 5 different security controls, placed at different layers (perimeter, network, host, application, data). For each control, explain what threat it mitigates.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'cyber_C': {
            q1: "Digital Signatures use which key for signing? <br><input type='radio' name='cyber_eCq1'> A) Public Key <input type='radio' name='cyber_eCq1'> B) Private Key &check; <input type='radio' name='cyber_eCq1'> C) Shared Key",
            q2: "Which is a social engineering attack? <br><input type='radio' name='cyber_eCq2'> A) SQL Injection <input type='radio' name='cyber_eCq2'> B) Buffer Overflow <input type='radio' name='cyber_eCq2'> C) Phishing &check;",
            q3: "HTTPS uses which protocol for encryption? <br><input type='radio' name='cyber_eCq3'> A) HTTP <input type='radio' name='cyber_eCq3'> B) TLS &check; <input type='radio' name='cyber_eCq3'> C) FTP",
            q4: "Penetration Testing requires: <br><input type='radio' name='cyber_eCq4'> A) No permission needed <input type='radio' name='cyber_eCq4'> B) Explicit written authorization &check; <input type='radio' name='cyber_eCq4'> C) Government approval only",
            q5: "The OWASP Top 10 covers: <br><input type='radio' name='cyber_eCq5'> A) Linux commands <input type='radio' name='cyber_eCq5'> B) Critical web application security risks &check; <input type='radio' name='cyber_eCq5'> C) Network protocols",
            q6: "Which hashing algorithm is considered BROKEN and should NOT be used? <br><input type='radio' name='cyber_eCq6'> A) SHA-256 <input type='radio' name='cyber_eCq6'> B) SHA-3 <input type='radio' name='cyber_eCq6'> C) MD5 &check;",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the concept of Public Key Infrastructure (PKI). What is a Certificate Authority (CA)? How does HTTPS use PKI to establish a secure connection? Walk through the handshake process.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> What is a Buffer Overflow attack? Explain how it works at the memory level. What defensive coding practice prevents it? What OS-level mitigation exists?</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> A healthcare company suffered a ransomware attack. (a) Explain what ransomware is and how it typically enters a system. (b) Describe the full Incident Response process (all 6 phases) applied to this scenario. (c) Recommend 5 preventative measures the company should implement to avoid future attacks.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'arch_A': {
            q1: "In MARIE, which register holds the NEXT instruction's address? <br><input type='radio' name='arch_eAq1'> A) IR <input type='radio' name='arch_eAq1'> B) AC <input type='radio' name='arch_eAq1'> C) PC &check;",
            q2: "The RTN for the Fetch step starts with: <br><input type='radio' name='arch_eAq2'> A) IR ← MBR <input type='radio' name='arch_eAq2'> B) MAR ← PC &check; <input type='radio' name='arch_eAq2'> C) AC ← MBR",
            q3: "MARIE's instruction format is: <br><input type='radio' name='arch_eAq3'> A) 8-bit opcode + 8-bit address <input type='radio' name='arch_eAq3'> B) 4-bit opcode + 12-bit address &check; <input type='radio' name='arch_eAq3'> C) 16-bit opcode",
            q4: "SKIPCOND 800 skips the next instruction when: <br><input type='radio' name='arch_eAq4'> A) AC = 0 <input type='radio' name='arch_eAq4'> B) AC < 0 <input type='radio' name='arch_eAq4'> C) AC > 0 &check;",
            q5: "Which memory type is used for CPU Cache? <br><input type='radio' name='arch_eAq5'> A) DRAM <input type='radio' name='arch_eAq5'> B) SRAM &check; <input type='radio' name='arch_eAq5'> C) ROM",
            q6: "Which is FALSE about CISC vs RISC? <br><input type='radio' name='arch_eAq6'> A) CISC has complex instructions <input type='radio' name='arch_eAq6'> B) RISC needs fewer instructions per program &check; <input type='radio' name='arch_eAq6'> C) ARM is RISC",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between the two main paradigms discussed in class.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea><p><strong>Q8 (7 pts):</strong> Draw the related diagram or write the core algorithm for the primary topic of chapter 2.</p><textarea class='exam-textarea' placeholder='Write your answer or code here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Write a complete implementation or perform a full mathematical trace of the advanced concept. Include edge cases.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full implementation here...'></textarea>"
        },
        'arch_B': {
            q1: "Which logic gate outputs 0 only when all inputs are 1? <br><input type='radio' name='arch_eBq1'> A) NAND &check; <input type='radio' name='arch_eBq1'> B) NOR <input type='radio' name='arch_eBq1'> C) XOR",
            q2: "According to De Morgan's Laws, NOT (A AND B) is equal to: <br><input type='radio' name='arch_eBq2'> A) NOT A AND NOT B <input type='radio' name='arch_eBq2'> B) NOT A OR NOT B &check; <input type='radio' name='arch_eBq2'> C) A OR B",
            q3: "A Half Adder circuit adds two bits and produces which outputs? <br><input type='radio' name='arch_eBq3'> A) Sum and Carry &check; <input type='radio' name='arch_eBq3'> B) Quotient and Remainder <input type='radio' name='arch_eBq3'> C) Sum and Quotient",
            q4: "How many select lines does a 4-to-1 Multiplexer (MUX) require? <br><input type='radio' name='arch_eBq4'> A) 1 <input type='radio' name='arch_eBq4'> B) 2 &check; <input type='radio' name='arch_eBq4'> C) 4",
            q5: "Which sequential circuit element is triggered by a clock edge to store 1 bit of data? <br><input type='radio' name='arch_eBq5'> A) Decoder <input type='radio' name='arch_eBq5'> B) Flip-Flop &check; <input type='radio' name='arch_eBq5'> C) Multiplexer",
            q6: "What is the Boolean expression for an XOR gate with inputs A and B? <br><input type='radio' name='arch_eBq6'> A) A'B + AB' &check; <input type='radio' name='arch_eBq6'> B) AB + A'B' <input type='radio' name='arch_eBq6'> C) A + B",
            short: "<p><strong>Q7 (7 pts):</strong> Draw the truth table for a Full Adder. Write the Boolean expressions for the Sum and Carry-out outputs.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain why NAND and NOR gates are called 'Universal Gates'. Show how an OR gate can be constructed using only NAND gates.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Minimize the Boolean function F(A, B, C, D) = \u03A3(0, 2, 5, 7, 8, 10, 13, 15) using a 4-variable Karnaugh Map (K-Map). Show the grid, group the adjacent 1s (octets, quads, pairs), and write the minimized sum-of-products (SOP) expression step-by-step.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full K-Map minimization process here...'></textarea>"
        },
        'arch_C': {
            q1: "Which cache mapping technique allows a main memory block to be placed in ANY cache line? <br><input type='radio' name='arch_eCq1'> A) Direct Mapping <input type='radio' name='arch_eCq1'> B) Fully Associative Mapping &check; <input type='radio' name='arch_eCq1'> C) Set-Associative Mapping",
            q2: "What type of locality is exploited when a CPU accesses consecutive elements of a 1D array? <br><input type='radio' name='arch_eCq2'> A) Temporal Locality <input type='radio' name='arch_eCq2'> B) Spatial Locality &check; <input type='radio' name='arch_eCq2'> C) Register Locality",
            q3: "In a pipelined CPU, a resource conflict where two instructions need the same hardware unit is a: <br><input type='radio' name='arch_eCq3'> A) Data Hazard <input type='radio' name='arch_eCq3'> B) Structural Hazard &check; <input type='radio' name='arch_eCq3'> C) Control Hazard",
            q4: "Which cache replacement policy discards the block that has not been accessed for the longest time? <br><input type='radio' name='arch_eCq4'> A) FIFO <input type='radio' name='arch_eCq4'> B) LRU &check; <input type='radio' name='arch_eCq4'> C) LFU",
            q5: "What is the primary advantage of DMA (Direct Memory Access)? <br><input type='radio' name='arch_eCq5'> A) Fast cache hits <input type='radio' name='arch_eCq5'> B) Transfers data between I/O and RAM without CPU intervention &check; <input type='radio' name='arch_eCq5'> C) Multiplies clock speed",
            q6: "How does a write-through cache handle a write operation? <br><input type='radio' name='arch_eCq6'> A) Updates cache only <input type='radio' name='arch_eCq6'> B) Updates both cache and main memory simultaneously &check; <input type='radio' name='arch_eCq6'> C) Postpones the memory write",
            short: "<p><strong>Q7 (7 pts):</strong> A system has a main memory of 64MB and a cache of 128KB with 64-byte block size. For Direct Mapping, calculate the number of bits in the Tag, Line, and Word offset fields of a 26-bit address.</p><textarea class='exam-textarea' placeholder='Write your calculations here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain the difference between temporal locality and spatial locality in cache design. Give a brief code example showing high spatial locality.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Compare Direct Mapping, Fully Associative, and 4-way Set Associative Cache mapping. Walk through a sequence of memory block accesses: 0, 4, 8, 0, 4, 16 on a cache with 4 lines, showing hits, misses, and the final state of the cache for each method (assume LRU replacement policy).</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write comparison and step-by-step trace here...'></textarea>"
        },
        'advprog_A': {
            q1: "Which exception is thrown when attempting to cast an object to a subclass of which it is not an instance? <br><input type='radio' name='adv_eAq1'> A) NullPointerException <input type='radio' name='adv_eAq1'> B) ClassCastException &check; <input type='radio' name='adv_eAq1'> C) IllegalArgumentException",
            q2: "Which Java Collection does NOT allow duplicate elements? <br><input type='radio' name='adv_eAq2'> A) ArrayList <input type='radio' name='adv_eAq2'> B) HashSet &check; <input type='radio' name='adv_eAq2'> C) LinkedList",
            q3: "What is the average time complexity of looking up a key in a balanced HashMap? <br><input type='radio' name='adv_eAq3'> A) O(1) &check; <input type='radio' name='adv_eAq3'> B) O(log n) <input type='radio' name='adv_eAq3'> C) O(n)",
            q4: "Which keyword is used in a method signature to declare that it might throw checked exceptions? <br><input type='radio' name='adv_eAq4'> A) throw <input type='radio' name='adv_eAq4'> B) throws &check; <input type='radio' name='adv_eAq4'> C) transient",
            q5: "Which Collection class maintains its elements in sorted, natural ordering? <br><input type='radio' name='adv_eAq5'> A) HashSet <input type='radio' name='adv_eAq5'> B) TreeSet &check; <input type='radio' name='adv_eAq5'> C) LinkedHashSet",
            q6: "What is the function of the finally block in exception handling? <br><input type='radio' name='adv_eAq6'> A) Runs only on error <input type='radio' name='adv_eAq6'> B) Runs always to guarantee resource cleanup &check; <input type='radio' name='adv_eAq6'> C) Retries the execution",
            short: "<p><strong>Q7 (7 pts):</strong> Explain the difference between Checked and Unchecked exceptions in Java. Give a real-world code example of each.</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Write a simple custom exception class named InvalidAgeException that extends Exception, and show how to throw it inside a checkAge(int age) method.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Write a complete Java program that declares an ArrayList&lt;String&gt; of student names. Create two worker threads using Runnable that concurrently add names to a thread-safe list (using a synchronized block to prevent race conditions). Wait for both threads to finish using join(), and print the total count of names.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full Java implementation here...'></textarea>"
        },
        'advprog_B': {
            q1: "In JavaFX, what is the main container class that represents a physical window? <br><input type='radio' name='adv_eBq1'> A) Scene <input type='radio' name='adv_eBq1'> B) Stage &check; <input type='radio' name='adv_eBq1'> C) BorderPane",
            q2: "Which layout pane organizes nodes in a single horizontal row? <br><input type='radio' name='adv_eBq2'> A) VBox <input type='radio' name='adv_eBq2'> B) HBox &check; <input type='radio' name='adv_eBq2'> C) GridPane",
            q3: "In JavaFX, which method is overridden as the main execution entry point? <br><input type='radio' name='adv_eBq3'> A) main() <input type='radio' name='adv_eBq3'> B) start() &check; <input type='radio' name='adv_eBq3'> C) init()",
            q4: "Which control node is typically used to capture user text input? <br><input type='radio' name='adv_eBq4'> A) Label <input type='radio' name='adv_eBq4'> B) TextField &check; <input type='radio' name='adv_eBq4'> C) TextArea",
            q5: "How do you register a button click handler programmatically in JavaFX? <br><input type='radio' name='adv_eBq5'> A) btn.setOnClickListener <input type='radio' name='adv_eBq5'> B) btn.setOnAction &check; <input type='radio' name='adv_eBq5'> C) btn.addEvent",
            q6: "Which design tool is officially used to build FXML layouts visually? <br><input type='radio' name='adv_eBq6'> A) Scene Builder &check; <input type='radio' name='adv_eBq6'> B) Swing Designer <input type='radio' name='adv_eBq6'> C) Visual Studio Code",
            short: "<p><strong>Q7 (7 pts):</strong> Describe the hierarchical relationship of Stage, Scene, and Nodes (Scene Graph) in JavaFX. Illustrate with a text diagram.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea><p><strong>Q8 (7 pts):</strong> Write the complete JavaFX code to create a simple window with a Label that says 'Hello' and a Button that changes the label to 'Clicked!' when clicked.</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Design the user interface for a basic Login Form in JavaFX. Write a complete, valid class extending Application that uses a GridPane to align a Username field, a Password field, and a Submit button. Include basic event handling that prints 'Login Successful' if credentials are admin/123.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full JavaFX code here...'></textarea>"
        },
        'advprog_C': {
            q1: "Which JDBC class is used to execute precompiled parameterized queries securely? <br><input type='radio' name='adv_eCq1'> A) Statement <input type='radio' name='adv_eCq1'> B) PreparedStatement &check; <input type='radio' name='adv_eCq1'> C) ResultSet",
            q2: "Which method is called to execute a SELECT query in JDBC? <br><input type='radio' name='adv_eCq2'> A) executeUpdate() <input type='radio' name='adv_eCq2'> B) executeQuery() &check; <input type='radio' name='adv_eCq2'> C) executeSelect()",
            q3: "In the MVC pattern, which component represents the core business logic and database access? <br><input type='radio' name='adv_eCq3'> A) Model &check; <input type='radio' name='adv_eCq3'> B) View <input type='radio' name='adv_eCq3'> C) Controller",
            q4: "What does a ResultSet represent in JDBC database operations? <br><input type='radio' name='adv_eCq4'> A) The connection driver <input type='radio' name='adv_eCq4'> B) The tabular row data returned by a query &check; <input type='radio' name='adv_eCq4'> C) The SQL string",
            q5: "Which method is used to iterate through the rows returned in a ResultSet? <br><input type='radio' name='adv_eCq5'> A) next() &check; <input type='radio' name='adv_eCq5'> B) getRow() <input type='radio' name='adv_eCq5'> C) hasNext()",
            q6: "Which design pattern ensures that a database connection helper class has only ONE instance? <br><input type='radio' name='adv_eCq6'> A) Factory <input type='radio' name='adv_eCq6'> B) Singleton &check; <input type='radio' name='adv_eCq6'> C) Observer",
            short: "<p><strong>Q7 (7 pts):</strong> Walk through the 6 essential steps of executing a query using JDBC (from loading driver to closing connection).</p><textarea class='exam-textarea' placeholder='Write your answer here...'></textarea><p><strong>Q8 (7 pts):</strong> Explain how the MVC design pattern achieves 'separation of concerns' in a GUI application. What are the roles of the Model, View, and Controller?</p><textarea class='exam-textarea' placeholder='Write your explanation here...'></textarea>",
            long: "<p><strong>Q9 (14 pts):</strong> Write a complete JDBC Java method public void registerStudent(String name, double gpa) that connects to a local MySQL database university_db, prepares a secure INSERT statement using PreparedStatement to prevent SQL Injection, binds parameters, executes, and cleanly handles SQLExceptions inside a try-with-resources block.</p><textarea class='exam-textarea' style='height: 150px;' placeholder='Write full Java JDBC method here...'></textarea>"
        }
    };

    variants.forEach((v, i) => {
        const examKey = id + '_' + v;
        const exam = customExams[examKey];

        if (exam) {
            html += `<div class="exam-content ${i===0?'active':''}" data-exam="${v}">
                <h3 class="exam-header">${subjectTitle} - Full Mock Exam ${v} (40 Pts)</h3>
                <div class="exam-section">
                    <h4>Part 1: Multiple Choice (12 Points)</h4>
                    <div class="mcq-grid">
                        <div class="mcq-item"><strong>Q1:</strong> ${exam.q1}</div>
                        <div class="mcq-item"><strong>Q2:</strong> ${exam.q2}</div>
                        <div class="mcq-item"><strong>Q3:</strong> ${exam.q3}</div>
                        <div class="mcq-item"><strong>Q4:</strong> ${exam.q4}</div>
                        <div class="mcq-item"><strong>Q5:</strong> ${exam.q5}</div>
                        <div class="mcq-item"><strong>Q6:</strong> ${exam.q6}</div>
                    </div>
                </div>
                <div class="exam-section">
                    <h4>Part 2: Short Answer & Diagramming (14 Points)</h4>
                    ${exam.short}
                </div>
                <div class="exam-section">
                    <h4>Part 3: Long Form / Coding (14 Points)</h4>
                    ${exam.long}
                </div>
                <button class="action-btn" onclick="alert('Answers submitted for Exam ${v}! Check the grading rubric.')"><i class="fa-solid fa-check-double"></i> Submit & Grade Exam ${v}</button>
            </div>`;
        } else {
            html += `<div class="exam-content ${i===0?'active':''}" data-exam="${v}">
                <h3 class="exam-header">${subjectTitle} - Full Mock Exam ${v} (40 Pts)</h3>
                <div class="exam-section">
                    <h4>Part 1: Multiple Choice (12 Points)</h4>
                    <div class="mcq-grid">
                        <div class="mcq-item"><strong>Q1:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q1"> A) Option 1 <input type="radio" name="${id}_e${v}q1"> B) Option 2 <input type="radio" name="${id}_e${v}q1"> C) Option 3</div>
                        <div class="mcq-item"><strong>Q2:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q2"> A) Option 1 <input type="radio" name="${id}_e${v}q2"> B) Option 2 <input type="radio" name="${id}_e${v}q2"> C) Option 3</div>
                        <div class="mcq-item"><strong>Q3:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q3"> A) Option 1 <input type="radio" name="${id}_e${v}q3"> B) Option 2 <input type="radio" name="${id}_e${v}q3"> C) Option 3</div>
                        <div class="mcq-item"><strong>Q4:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q4"> A) Option 1 <input type="radio" name="${id}_e${v}q4"> B) Option 2 <input type="radio" name="${id}_e${v}q4"> C) Option 3</div>
                        <div class="mcq-item"><strong>Q5:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q5"> A) Option 1 <input type="radio" name="${id}_e${v}q5"> B) Option 2 <input type="radio" name="${id}_e${v}q5"> C) Option 3</div>
                        <div class="mcq-item"><strong>Q6:</strong> Placeholder? <br><input type="radio" name="${id}_e${v}q6"> A) Option 1 <input type="radio" name="${id}_e${v}q6"> B) Option 2 <input type="radio" name="${id}_e${v}q6"> C) Option 3</div>
                    </div>
                </div>
                <div class="exam-section">
                    <h4>Part 2: Short Answer & Diagramming (14 Points)</h4>
                    <p><strong>Q7 (7 pts):</strong> Draw diagram.</p>
                    <textarea class="exam-textarea" placeholder="Write your answer..."></textarea>
                    <p><strong>Q8 (7 pts):</strong> Explain.</p>
                    <textarea class="exam-textarea" placeholder="Write your explanation..."></textarea>
                </div>
                <div class="exam-section">
                    <h4>Part 3: Long Form (14 Points)</h4>
                    <p><strong>Q9 (14 pts):</strong> Implementation.</p>
                    <textarea class="exam-textarea" style="height: 150px;" placeholder="Write full implementation..."></textarea>
                </div>
                <button class="action-btn" onclick="alert('Answers submitted for Exam ${v}!')"><i class="fa-solid fa-check-double"></i> Submit & Grade Exam ${v}</button>
            </div>`;
        }
    });
    return html;
}

// Flashcard Generator Data
function getFlashcardsData(id) {
    const data = {
        se: [

  {"q": "What is the difference between Verification and Validation?", "a": "Verification asks 'Are we building the product right?' (meets specs). Validation asks 'Are we building the right product?' (meets user needs)."},
  {"q": "Describe the Agile methodology.", "a": "An iterative and incremental approach that emphasizes flexibility, customer collaboration, and rapid delivery of working software."},
  {"q": "What is a Functional Requirement?", "a": "A specific action or feature the system must perform (e.g., 'The system must email a receipt')."},
  {"q": "What is a Non-Functional Requirement?", "a": "A quality or constraint of the system, such as performance, security, or usability."},
  {"q": "In UML, what does an Activity Diagram show?", "a": "It models the dynamic workflow, business processes, or the flow of control from one activity to another."},
  {"q": "What is the difference between High Cohesion and Low Coupling?", "a": "High Cohesion means a module focuses on a single task. Low Coupling means modules are independent of each other. Both are goals of good design."},
  {"q": "What is White-Box Testing?", "a": "Testing where the internal logic and structure of the code are known to the tester (e.g., statement coverage, path testing)."},
  {"q": "What is Black-Box Testing?", "a": "Testing the software's functionality without any knowledge of its internal implementation (e.g., boundary value analysis)."},
  {"q": "What is Regression Testing?", "a": "Re-running previously passed tests after a code change to ensure the modification did not introduce new bugs."},
  {"q": "What does MVC stand for and what is its purpose?", "a": "Model-View-Controller. An architectural pattern that separates data (Model), UI (View), and logic (Controller)."},
  {"q": "What is a Use Case Diagram?", "a": "A UML diagram that captures system requirements by showing interactions between Actors (users) and Use Cases (system functions)."},
  {"q": "Define the Scrum Roles.", "a": "Product Owner (represents stakeholders), Scrum Master (facilitates process), and Development Team (builds the product)."},
  {"q": "What is Cyclomatic Complexity?", "a": "A software metric used to measure the logical complexity of a program, counting the number of linearly independent paths."},
  {"q": "What is the purpose of a Sequence Diagram?", "a": "To show how objects interact with each other in a specific sequential order over time."},
  {"q": "What is Continuous Integration (CI)?", "a": "A practice where developers frequently merge code changes into a central repository, followed by automated builds and tests."}

],
        web: [

  {"q": "What is the CSS Box Model?", "a": "A conceptual box wrapping every HTML element, consisting of margins, borders, padding, and the actual content."},
  {"q": "What is the difference between ID and Class in CSS?", "a": "An ID (#) is unique and can only be used once per page. A Class (.) can be used on multiple elements."},
  {"q": "How does `var` differ from `let` in JavaScript?", "a": "`var` is function-scoped and allows redeclaration. `let` is block-scoped and cannot be redeclared in the same scope."},
  {"q": "What does the DOM stand for?", "a": "Document Object Model. It is the programming interface representing the HTML structure as a tree of objects."},
  {"q": "What is AJAX?", "a": "Asynchronous JavaScript and XML. It allows a web page to request data from a server and update the UI without reloading the page."},
  {"q": "What is the difference between GET and POST methods?", "a": "GET appends data to the URL (visible, limited size). POST sends data inside the HTTP body (hidden, secure, larger size)."},
  {"q": "Why must server-side form validation be used even if client-side validation exists?", "a": "Client-side validation can be easily bypassed or disabled by the user. Server-side validation (PHP) guarantees security and data integrity."},
  {"q": "How do you prevent SQL Injection in PHP?", "a": "By using Prepared Statements and parameterized queries (via PDO or MySQLi) instead of directly concatenating user input into SQL strings."},
  {"q": "What is a Superglobal in PHP?", "a": "Built-in arrays like $_GET, $_POST, and $_SESSION that are always available in all scopes throughout a PHP script."},
  {"q": "What is the difference between `==` and `===` in JavaScript?", "a": "`==` checks for value equality (with type coercion). `===` checks for strict equality (both value and type must match)."},
  {"q": "What are PHP Sessions used for?", "a": "Sessions store user information (like a logged-in user ID) across multiple pages. The data is stored securely on the server."},
  {"q": "What does the JS `fetch()` API do?", "a": "It makes asynchronous HTTP requests to servers to retrieve or send data, returning a Promise."},
  {"q": "What is JSON?", "a": "JavaScript Object Notation. A lightweight, text-based data format used heavily for transmitting data between client and server."},
  {"q": "Explain Event Bubbling in JavaScript.", "a": "When an event occurs on a child element, it triggers the child's event handler, and then bubbles up to trigger the parents' handlers."},
  {"q": "What is the difference between PHP `include` and `require`?", "a": "Both load a file, but if the file is missing, `include` throws a warning and continues execution, while `require` throws a fatal error and stops execution."}

],
        dsa: [

  {"q": "Why is a swap function ineffective when passing variables by value?", "a": "It only manipulates local copies of the variables, leaving the original variables in the calling function unchanged."},
  {"q": "What is the primary purpose of the `&` and `*` operators in C/C++ pointer operations?", "a": "`&` retrieves the memory address of a variable, while `*` dereferences a pointer to access or modify the value at that address."},
  {"q": "Define a 'struct' in the context of C/C++.", "a": "A complex data type that groups multiple variables of potentially different types under a single unified name in a continuous block of memory."},
  {"q": "What is the time complexity for inserting a new node at the head of a Single Linked List?", "a": "O(1) constant time, as it only requires updating two pointers regardless of the list's total size."},
  {"q": "Describe the mechanism for inserting a node at the very end of a Single Linked List.", "a": "Traverse the list from the head until reaching the node where `next` is NULL, then set its `next` pointer to the newly created node."},
  {"q": "Why must a temporary pointer be utilized when deleting a node from the middle of a Linked List?", "a": "To maintain the connection between the preceding node and the succeeding node before safely freeing the target node's memory."},
  {"q": "What function is used in C to prevent memory leaks after deleting a node, and what is its C++ equivalent?", "a": "The `free()` function is used in C, whereas `delete` is utilized in C++."},
  {"q": "How does memory allocation differ between static arrays and linked lists?", "a": "Arrays have a fixed size allocated in contiguous memory at compile time, whereas linked lists dynamically allocate nodes in non-contiguous heap memory at runtime."},
  {"q": "What is the defining characteristic of a node in a Single Linked List?", "a": "It is a self-referential structure containing a data payload and a single pointer (`next`) directing to the subsequent node of the same type."},
  {"q": "What happens if the `head` pointer of a linked list is accidentally reassigned to NULL or lost?", "a": "Access to the entire linked list is severed, resulting in a memory leak since the nodes can no longer be referenced or freed."},
  {"q": "How do you identify the terminal (last) node in a standard Single Linked List?", "a": "Its `next` pointer evaluates to NULL."},
  {"q": "In C, what format specifier is used within `printf` to output a raw memory address?", "a": "The `%p` placeholder is used to print the memory address in hexadecimal format."},
  {"q": "What is a critical edge case to evaluate when attempting to delete an element from a Linked List?", "a": "Checking if the list is completely empty (`head == NULL`) to avoid a segmentation fault."},
  {"q": "How would one iterate through a Linked List to count its elements?", "a": "Initialize a pointer `p` to `head` and a counter to 0. Use a `while(p != NULL)` loop, incrementing the counter and setting `p = p->next` each iteration."},
  {"q": "What is the process for concatenating two Single Linked Lists?", "a": "Traverse the first list to its final node, and assign its `next` pointer to the `head` of the second list."}

],
        cyber: [

  {"q": "How do you securely SSH into 'bandit.labs.overthewire.org' as 'bandit0' on port 2220?", "a": "ssh bandit0@bandit.labs.overthewire.org -p 2220"},
  {"q": "What command reads a file named '-file07' without the shell misinterpreting it as an argument flag?", "a": "cat ./-file07"},
  {"q": "Write a `find` command that locates a file exactly 1033 bytes in size, which is not an executable, from the current directory.", "a": "find . -type f -size 1033c ! -executable"},
  {"q": "How do you search the entire filesystem ('/') for a file owned by user 'bandit7' and group 'bandit6', while suppressing permission denied errors?", "a": "find / -user bandit7 -group bandit6 -size 33c 2>/dev/null"},
  {"q": "What command sequence sorts a file and filters it to display only the uniquely occurring lines?", "a": "sort data.txt | uniq -u"},
  {"q": "What command extracts only the human-readable text from a binary file?", "a": "strings filename"},
  {"q": "How do you use grep to find a line that strictly begins with an equals sign ('=')?", "a": "grep '^='"},
  {"q": "What is the command to decode a base64 encoded string stored in data.txt?", "a": "base64 -d data.txt"},
  {"q": "How do you decrypt a ROT13 ciphered file using the `tr` command?", "a": "cat data.txt | tr '[A-Za-z]' '[N-ZA-Mn-za-m]'"},
  {"q": "What tool and flag are used to reverse a hexadecimal dump back into a binary file?", "a": "xxd -r"},
  {"q": "How do you verify the true file type of a file that lacks an extension?", "a": "file filename"},
  {"q": "What command extracts a bzip2 compressed archive?", "a": "bunzip2 filename.bz2"},
  {"q": "Which command streams the newest appended lines of a file dynamically?", "a": "tail -f filename"},
  {"q": "How do you output the human-readable total disk usage size of a specific directory?", "a": "du -sh directory_name/"},
  {"q": "What syntax redirects both standard output and standard error to the same file?", "a": "command > out.txt 2>&1"}

],
        arch: [

  {"q": "How does a Big Endian machine represent the 32-bit hexadecimal value 0x12345678 in byte-addressable memory?", "a": "It stores the most significant byte (0x12) at the lowest memory address, followed by 0x34, 0x56, and 0x78 at consecutively higher addresses."},
  {"q": "What is the primary advantage of Little Endian architecture when converting a 32-bit integer to a 16-bit integer?", "a": "The conversion does not require any address arithmetic; the 16-bit integer simply occupies the same base address as the 32-bit integer."},
  {"q": "In a Stack ISA, how is the infix expression Z = (X + Y) * (W + U) evaluated using Reverse Polish Notation?", "a": "The expression is written and evaluated as postfix: X Y + W U + *."},
  {"q": "What characterizes a Load-Store (Register-to-Register) GPR architecture?", "a": "Memory access is restricted to explicit load and store instructions; all arithmetic and logic operations must occur directly between registers."},
  {"q": "How does the Expanding Opcodes technique optimize instruction encoding in a fixed-length instruction architecture?", "a": "It uses variable-length opcodes where instructions with fewer operands are assigned longer opcodes, allowing a richer instruction set without increasing the overall instruction length."},
  {"q": "Given an 8-bit instruction format, how many unique bit patterns are required to encode two instructions with one 4-bit operand?", "a": "It requires 2 * 2^4 = 32 distinct bit patterns."},
  {"q": "What is the key difference between Indexed Addressing and Based Addressing?", "a": "Indexed addressing uses an index register to hold an offset relative to a base address given in the instruction, whereas Based addressing uses a base register to hold a base address, with the instruction providing a displacement."},
  {"q": "In an instruction pipeline, how is the total execution time calculated for n tasks running through a k-stage pipeline with clock cycle time tp?", "a": "The total execution time is calculated using the formula: (k + n - 1) * tp."},
  {"q": "What architectural enhancement is often employed to resolve resource conflicts caused by simultaneous instruction and data fetching?", "a": "A Harvard architecture or the implementation of separate Instruction and Data Caches prevents structural hazards during fetching."},
  {"q": "Describe the pipeline hazard known as a Data Dependency.", "a": "It occurs when an instruction relies on the result of a previous instruction that has not yet completed its execute or store stages, leading to potential read-after-write errors."},
  {"q": "Why is conditional branching particularly problematic for instruction pipelining?", "a": "Because the pipeline fetches and decodes subsequent instructions before the branch condition is resolved; if the branch is taken, the speculative instructions must be flushed, wasting cycles."},
  {"q": "What implicit advantage does an Accumulator architecture provide over a GPR architecture, and what is its main drawback?", "a": "It minimizes machine complexity and allows for short instructions since one operand is implicitly the accumulator; however, it leads to high memory traffic since all operations bottleneck through the single accumulator."},
  {"q": "In Indirect Addressing mode, what does the address field of the instruction explicitly contain?", "a": "It contains the memory address of a pointer, which in turn holds the effective address of the actual operand."},
  {"q": "What is the theoretical maximum speedup of a k-stage instruction pipeline processing an infinite number of instructions?", "a": "The theoretical maximum speedup approaches k, the number of stages in the pipeline."},
  {"q": "How does Auto-increment/decrement addressing streamline array and vector operations?", "a": "It automatically updates the register containing the address before or after memory access, removing the need for separate arithmetic instructions to step through sequential data structures."}

],
        advprog: [
            {q: "What is the difference between 'throw' and 'throws'?", a: "'throw' is used inside a method to actually trigger an exception object. 'throws' is used in the method signature to warn callers that the method might throw exceptions."},
            {q: "How do you implement Multithreading in Java?", a: "You can either extend the 'Thread' class or implement the 'Runnable' interface. Implementing 'Runnable' is highly preferred because Java doesn't support multiple class inheritance."},
            {q: "Explain the MVC Pattern briefly.", a: "Model: Handles data and database logic. View: The User Interface. Controller: Listens to user inputs from the View, updates the Model, and refreshes the View."}
        ]
    };
    return data[id];
}

function generateFlashcardsHtml(id) {
    const cards = getFlashcardsData(id);
    let html = '<div class="flashcard-grid">';
    cards.forEach(c => {
        html += `
            <div class="flashcard" onclick="this.classList.toggle('flipped')">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <i class="fa-solid fa-circle-question" style="font-size: 2rem; color: #38bdf8; margin-bottom: 15px;"></i>
                        <p>${c.q}</p>
                        <span class="flip-hint">Click to flip</span>
                    </div>
                    <div class="flashcard-back">
                        <i class="fa-solid fa-lightbulb" style="font-size: 2rem; color: #f59e0b; margin-bottom: 15px;"></i>
                        <p>${c.a}</p>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}


let subjectsHtml = '';
let navHtml = '';

// The Schedule Tab Navigation
navHtml += `<button class="nav-btn active" onclick="openTab('schedule_tab')">
    <i class="fa-solid fa-calendar-alt"></i> Master Schedule
</button>`;

// Sidebar Pomodoro Widget Integration
navHtml += `
<div class="sidebar-pomodoro">
    
    <h4 style="color: #94a3b8; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;"><i class="fa-solid fa-stopwatch"></i> Focus Timer</h4>
    <div class="timer-display" id="pomo-timer" style="cursor: pointer;" onclick="toggleTimer()">25:00</div>
    <div class="pomo-controls">
        <button id="pomo-start-btn" onclick="toggleTimer()">Start (Space)</button>
        <button onclick="resetTimer()">Reset</button>
    </div>
    <div id="pomo-sessions" class="pomo-sessions">Sessions: 0</div>
    <div class="global-progress"><div class="global-progress-bar" id="study-progress"></div></div>
    <div class="shortcut-hint">Press <b>Space</b> to toggle timer<br>Press <b>Esc</b> to close modals</div>

</div>
`;

let contentHtml = `
<div id="schedule_tab" class="tab-content active">
    <div class="subject-header">
        <h2 class="gradient-text">Ultimate Finals Schedule</h2>
        <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 600px;">Optimized day-by-day battle plan. Every exam eve is perfectly reserved.</p>
    </div>
    
    <div class="split-layout" style="grid-template-columns: 1fr;">
        <div class="summary-card">
            <h3 style="color: #34d399; margin-bottom: 20px;"><i class="fa-solid fa-map-location-dot"></i> Your Daily Master Plan</h3>
            <ul class="schedule-list">
                <li><span class="date-badge">May 31 - June 01</span> <strong>⭐ Advanced Prog & Beyond</strong> - No limits! Dive into the deep end!</li>
                <li><span class="date-badge">June 02</span> <strong>DSA & Cyber Basics</strong> - Watch full courses, summarize risk management.</li>
                <li><span class="date-badge">June 03</span> <strong>Arch & S.E. Basics</strong> - Logic Gates and UML diagrams.</li>
                <li><span class="date-badge">June 04</span> <strong>S.E. & Web Deep Dive</strong> - Practice AJAX, PHP, and Testing diagrams.</li>
                <li><span class="date-badge">June 05</span> <strong>DSA & Cyber Deep Dive</strong> - VisuAlgo practice for Trees/Graphs. Linux Commands.</li>
                <li class="exam-eve"><span class="date-badge">June 06</span> ⚠️ <strong>S.E. Final Review (Exam Tomorrow)</strong> - Only study Software Engineering today.</li>
                <li class="exam-day"><span class="date-badge">June 07</span> 🏆 <strong>S.E. EXAM</strong> | Evening: Start Web Review.</li>
                <li class="exam-eve"><span class="date-badge">June 08</span> ⚠️ <strong>Web Final Review (Exam Tomorrow)</strong> - Only study Web today.</li>
                <li class="exam-day"><span class="date-badge">June 09</span> 🏆 <strong>WEB EXAM</strong> | Evening: Start DSA Review.</li>
                <li class="exam-eve"><span class="date-badge">June 10</span> ⚠️ <strong>DSA Final Review (Exam Tomorrow)</strong> - Only study Data Structures today.</li>
                <li class="exam-day"><span class="date-badge">June 11</span> 🏆 <strong>DSA EXAM</strong> | Evening: Start Cyber Review.</li>
                <li class="exam-eve"><span class="date-badge">June 12</span> ⚠️ <strong>Cyber Final Review (Exam Tomorrow)</strong> - Only study Cybersecurity today.</li>
                <li class="exam-day"><span class="date-badge">June 13</span> 🏆 <strong>CYBER EXAM</strong> | Evening: Start Architecture Review.</li>
                <li class="exam-eve"><span class="date-badge">June 14</span> ⚠️ <strong>Arch Final Review (Exam Tomorrow)</strong> - Only study Computer Architecture today.</li>
                <li class="exam-day"><span class="date-badge">June 15</span> 🏆 <strong>ARCH EXAM</strong> | Evening: Start Advanced Prog Review.</li>
                <li class="exam-eve"><span class="date-badge">June 16</span> ⚠️ <strong>Adv Prog Final Review (Exam Tomorrow)</strong> - Only study Advanced Prog today.</li>
                <li class="exam-day" style="border-bottom: none;"><span class="date-badge">June 17</span> 🏆 <strong>ADV PROG EXAM</strong> | Freedom!</li>
            </ul>
        </div>
    </div>
</div>
`;

function renderSummaryHtml(summaryText) {
    return `
        <div class="master-summary-content">
            ${summaryText}
        </div>
    `;
}

for (const [key, data] of Object.entries(subjectsData)) {
    navHtml += `<button class="nav-btn" onclick="openTab('${data.id}')"><i class="fa-solid ${data.icon}"></i> ${data.title.split('(')[0].trim()}</button>`;

    // Videos — thumbnail cards (no iframe, no Error 153)
    let videosHtml = '';
    data.videos.forEach(vid => {
        if (vid.embed === true) {
            
            const ytUrl = vid.playlist
                ? `https://www.youtube.com/embed/${vid.id}?list=${vid.playlist}&autoplay=1`
                : `https://www.youtube.com/embed/${vid.id}?autoplay=1`;
            const watchUrl = vid.playlist
                ? `https://www.youtube.com/watch?v=${vid.id}&list=${vid.playlist}`
                : `https://www.youtube.com/watch?v=${vid.id}`;
            const thumb = `https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`;
            videosHtml += `<div class="video-card" onclick="openVideoModal('${ytUrl}', '${vid.title.replace(/'/g, "\'")}', '${watchUrl}')">
                <div class="vid-header">
                    <span class="vid-title"><i class="fa-brands fa-youtube" style="color: #f43f5e; margin-right: 8px;"></i>${vid.title}</span>
                </div>
                <div class="vid-thumb-wrap">
                    <img src="${thumb}" alt="${vid.title}" class="vid-thumb">
                    <div class="play-btn-overlay"><i class="fa-solid fa-circle-play"></i></div>
                </div>
            </div>`;

        } else if (vid.embed === 'link') {
            videosHtml += `<a href="${vid.url}" target="_blank" class="direct-vid-link">
                <i class="fa-brands fa-youtube" style="color: #f43f5e;"></i> ${vid.title} <i class="fa-solid fa-arrow-right arrow-icon"></i>
            </a>`;
        }
    });

    
    // Local Files - Smart Categorization
    let lecturesHtml = '';
    let sheetsHtml = '';
    let otherHtml = '';
    
    data.files.forEach((f, i) => {
        let relativePath = f.FullName;
        relativePath = relativePath.replace(/^[a-zA-Z]:\\(semester\s+4|Semester\s+4)\\/i, '');
        relativePath = relativePath.replace(/\\/g, '/');
        let fileUrl = relativePath.split('/').map(p => encodeURIComponent(p)).join('/');
        let isPdf = f.Name.endsWith('.pdf');
        let isPpt = f.Name.endsWith('.pptx') || f.Name.endsWith('.ppt');
        let isDoc = f.Name.endsWith('.docx') || f.Name.endsWith('.doc');
        
        let icon = isPdf ? 'fa-file-pdf' : (isPpt ? 'fa-file-powerpoint' : (isDoc ? 'fa-file-word' : 'fa-file'));
        let iconColor = isPdf ? '#ef4444' : (isPpt ? '#f97316' : (isDoc ? '#3b82f6' : '#94a3b8'));
        
        let checkboxId = 'chk_file_' + data.id + '_' + i;
        
        // Extract subfolder tag
        let parts = f.FullName.split('\\');
        let tagHtml = '';
        if (parts.length >= 4) {
            let parentFolder = parts[parts.length - 2];
            // If parent folder is not the subject itself
            if (!data.title.toUpperCase().includes(parentFolder.toUpperCase()) && parentFolder !== "semester 4") {
                tagHtml = `<span style="font-size: 0.7rem; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: #cbd5e1; margin-left: auto; white-space: nowrap;"><i class="fa-solid fa-folder"></i> ${parentFolder}</span>`;
            }
        }

        let cardHtml = `
            <div class="file-item-container" style="display:flex; align-items:center; background: rgba(15,23,42,0.4); border: 1px solid var(--border); border-radius: 12px; padding: 12px 15px; transition: all 0.2s; margin-bottom: 10px;">
                <label class="custom-checkbox" style="margin-right: 15px; margin-bottom: 0;">
                    <input type="checkbox" id="${checkboxId}">
                    <span class="checkmark"></span>
                </label>
                <a href="${fileUrl}" target="_blank" style="text-decoration: none; display: flex; align-items: center; flex-grow: 1; color: #e2e8f0; gap: 12px;" title="${f.FullName}">
                    <div style="font-size: 1.5rem; color: ${iconColor};"><i class="fa-solid ${icon}"></i></div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: 0.95rem; line-height: 1.2;">${f.Name}</span>
                    </div>
                    ${tagHtml}
                </a>
            </div>
        `;
        
        let nameLower = f.Name.toLowerCase();
        let pathLower = f.FullName.toLowerCase();
        
        if (nameLower.includes('lec') || nameLower.includes('chapter') || nameLower.includes('ch') || nameLower.includes('book') || nameLower.includes('intro')) {
            lecturesHtml += cardHtml;
        } else if (nameLower.includes('sheet') || nameLower.includes('sec') || nameLower.includes('lab') || pathLower.includes('\\sec\\') || pathLower.includes('\\section\\') || nameLower.includes('answered') || nameLower.includes('solved')) {
            sheetsHtml += cardHtml;
        } else {
            otherHtml += cardHtml;
        }
    });
    
    let filesHtml = '';
    if (lecturesHtml) filesHtml += '<h4 style="color: var(--accent); margin-top: 10px; margin-bottom: 15px;"><i class="fa-solid fa-book-open"></i> Lectures & Textbooks</h4><div class="file-grid">' + lecturesHtml + '</div>';
    if (sheetsHtml) filesHtml += '<h4 style="color: var(--accent); margin-top: 25px; margin-bottom: 15px;"><i class="fa-solid fa-pen-ruler"></i> Problem Sheets & Labs</h4><div class="file-grid">' + sheetsHtml + '</div>';
    if (otherHtml) filesHtml += '<h4 style="color: var(--accent); margin-top: 25px; margin-bottom: 15px;"><i class="fa-solid fa-folder-open"></i> Other Materials</h4><div class="file-grid">' + otherHtml + '</div>';
    
    if (!filesHtml) filesHtml = '<div class="empty-state">No local files indexed.</div>';
    
    

    const flashcardsHtml = generateFlashcardsHtml(data.id);
    const examsHtml = generateExamsHtml(data.id, data.title);

    contentHtml += `
    <div id="${data.id}" class="tab-content">
        <div class="subject-header">
            <h2><i class="fa-solid ${data.icon}"></i> ${data.title}</h2>
            <div class="exam-badge"><i class="fa-regular fa-calendar-check"></i> Final: ${data.examDate}</div>
        </div>
        <div class="inner-tabs">
            <button class="inner-tab-btn active" onclick="switchInnerTab(event, '${data.id}_materials')"><i class="fa-solid fa-photo-film"></i> Short Crash Courses</button>
            <button class="inner-tab-btn" onclick="switchInnerTab(event, '${data.id}_summary')"><i class="fa-solid fa-book-open"></i> Master Summary</button>
            <button class="inner-tab-btn" onclick="switchInnerTab(event, '${data.id}_code')"><i class="fa-solid fa-code"></i> Code Vault</button>
            <button class="inner-tab-btn" onclick="switchInnerTab(event, '${data.id}_flash')" style="color: #f59e0b;"><i class="fa-solid fa-layer-group"></i> AI Flashcards</button>
            <button class="inner-tab-btn" onclick="switchInnerTab(event, '${data.id}_exam')"><i class="fa-solid fa-file-pen"></i> Practice Exams (3)</button>
        </div>
        <div class="inner-tab-content active" id="${data.id}_materials">
            <div style="background: rgba(244,63,94,0.1); border-left: 4px solid #f43f5e; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h4 style="color: #f43f5e; margin-bottom: 5px;"><i class="fa-solid fa-triangle-exclamation"></i> Emergency Exam Mode</h4>
                <p style="color: #e2e8f0;">All videos below are <strong>short, high-yield crash courses</strong> from top channels. Click a thumbnail to watch on YouTube.</p>
            </div>
            <h3 style="color: white; margin-bottom: 20px;">Crash Courses &amp; Interactive Tools</h3>
            <div class="video-grid" style="margin-bottom: 40px;">${videosHtml}</div>
            <h3 style="color: white; margin-bottom: 20px;">Local Study Checklists</h3>
            ${filesHtml}
        </div>
        <div class="inner-tab-content" id="${data.id}_summary">
            <div class="summary-card">${renderSummaryHtml(data.summary)}</div>
        </div>
        <div class="inner-tab-content" id="${data.id}_code">
            <div class="code-card">
                <pre><code>${data.codeVault.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim()}</code></pre>
            </div>
        </div>
        <div class="inner-tab-content" id="${data.id}_flash">
            <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                <h3 style="color: #f59e0b; margin-bottom: 10px;"><i class="fa-solid fa-bolt"></i> Interactive AI Study Cards</h3>
                <p style="color: #cbd5e1; font-size: 1.1rem;">Click any card to flip it and reveal the expert answer.</p>
            </div>
            ${flashcardsHtml}
        </div>
        <div class="inner-tab-content" id="${data.id}_exam">
            ${examsHtml}
        </div>
    </div>
    `;
}



const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finals Pro | V5 Expert Edition</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root { --bg-main:#0f172a;--bg-sidebar:#1e293b;--bg-card:#1e293b;--text-main:#f8fafc;--text-muted:#94a3b8;--accent:#38bdf8;--accent-hover:#0ea5e9;--border:#334155;--success:#10b981; }
        * { box-sizing:border-box;margin:0;padding:0;font-family:'Inter',sans-serif; }
        body { background-color:var(--bg-main);color:var(--text-main);display:flex;height:100vh;overflow:hidden;line-height:1.8;letter-spacing:0.3px;font-size:1.05rem; }
        .sidebar { width:350px;background:var(--bg-sidebar);padding:40px 20px;display:flex;flex-direction:column;gap:15px;border-right:1px solid var(--border);box-shadow:4px 0 15px rgba(0,0,0,0.2);z-index:10;overflow-y:auto; }
        .logo { font-size:1.8rem;font-weight:800;color:white;text-align:center;margin-bottom:30px;letter-spacing:1px;background:linear-gradient(90deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent; }
        .nav-btn { background:transparent;color:var(--text-muted);border:none;padding:16px 20px;text-align:left;font-size:1.1rem;font-weight:600;cursor:pointer;border-radius:12px;transition:all 0.3s ease;display:flex;align-items:center;gap:15px; }
        .nav-btn:hover { background:rgba(56,189,248,0.1);color:var(--accent);transform:translateX(5px); }
        .nav-btn.active { background:var(--accent);color:#0f172a;box-shadow:0 4px 15px rgba(56,189,248,0.4); }
        .main-content { flex:1;padding:50px 60px;overflow-y:auto;position:relative; }
        .tab-content { display:none;animation:fadeIn 0.4s ease; }
        .tab-content.active { display:block; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .subject-header { margin-bottom:40px;padding-bottom:20px;border-bottom:2px solid var(--border); }
        .subject-header h2 { font-size:2.5rem;font-weight:800;margin-bottom:10px; }
        .exam-badge { display:inline-block;background:rgba(16,185,129,0.15);color:var(--success);padding:8px 16px;border-radius:20px;font-weight:600;font-size:1.1rem;border:1px solid rgba(16,185,129,0.3); }
        .inner-tabs { display:flex;gap:15px;margin-bottom:30px;border-bottom:1px solid var(--border);padding-bottom:15px; }
        .inner-tab-btn { background:var(--bg-card);color:var(--text-main);border:1px solid var(--border);padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600;font-size:1.05rem;transition:all 0.2s; }
        .inner-tab-btn.active { background:var(--border);border-bottom:3px solid var(--accent); }
        .inner-tab-btn:hover { background:var(--border); }
        .inner-tab-content { display:none; }
        .inner-tab-content.active { display:block;animation:fadeIn 0.3s ease; }
        
        /* SUMMARY CONTENT CSS */
        .master-summary-content { color: #e2e8f0; font-size: 1.1rem; line-height: 1.8; padding: 10px; }
        .master-summary-content ul { margin-left: 25px; margin-bottom: 25px; list-style-type: none; }
        .master-summary-content li { margin-bottom: 15px; position: relative; padding-left: 30px; background: rgba(15,23,42,0.4); border: 1px solid var(--border); border-radius: 12px; padding: 20px 20px 20px 45px; transition: all 0.3s ease; }
        .master-summary-content li:hover { transform: translateX(5px); background: rgba(56,189,248,0.05); border-color: var(--accent); }
        .master-summary-content li::before { content: '\\f101'; font-family: 'FontAwesome'; position: absolute; left: 15px; top: 22px; color: var(--accent); font-weight: 900; }
        .master-summary-content strong { color: var(--accent); font-weight: 700; letter-spacing: 0.5px; }
        
        
        /* ENHANCEMENTS CSS */
        .file-item-container:hover { transform: translateY(-2px); border-color: var(--accent) !important; background: rgba(56,189,248,0.05) !important; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
        body.zen-mode .sidebar { display: none !important; }
        body.zen-mode .main-content { width: 100vw; padding-left: 40px; padding-right: 40px; }
        .header-actions { display: flex; align-items: center; gap: 15px; }
        .zen-btn { background: rgba(56,189,248,0.1); border: 1px solid var(--accent); color: var(--accent); padding: 8px 15px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; font-weight: 600; font-size: 0.9rem; }
        .zen-btn:hover { background: var(--accent); color: #0f172a; box-shadow: 0 4px 12px rgba(56,189,248,0.3); }
        .pomo-sessions { color: var(--success); font-size: 0.85rem; margin-top: 8px; text-align: center; font-weight: 600; }
        .global-progress { height: 6px; background: rgba(255,255,255,0.1); border-radius: 10px; margin-top: 15px; overflow: hidden; position: relative; }
        .global-progress-bar { height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8); width: 0%; transition: width 0.5s ease; }
        .shortcut-hint { text-align: center; font-size: 0.75rem; color: #64748b; margin-top: 15px; }

        /* VIDEO MODAL CSS */
        .video-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(8px); opacity: 0; transition: opacity 0.3s ease; }
        .video-modal-overlay.active { display: flex; opacity: 1; }
        .video-modal-content { width: 90%; max-width: 1000px; background: #0f172a; border-radius: 16px; border: 1px solid var(--border); overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.5); position: relative; transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .video-modal-overlay.active .video-modal-content { transform: scale(1); }
        .video-modal-header { padding: 20px; background: #1e293b; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .video-modal-title { color: #f8fafc; font-weight: 600; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }
        .close-video-btn { background: none; border: none; color: #94a3b8; font-size: 1.5rem; cursor: pointer; transition: color 0.2s; }
        .close-video-btn:hover { color: #f43f5e; }
        .video-iframe-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000; }
        .video-iframe-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
        .video-fallback-bar { padding: 15px; background: rgba(245,158,11,0.1); border-top: 1px solid rgba(245,158,11,0.2); text-align: center; color: #cbd5e1; font-size: 0.95rem; }
        .video-fallback-link { color: #f59e0b; font-weight: 600; text-decoration: none; margin-left: 10px; padding: 5px 10px; border-radius: 6px; background: rgba(245,158,11,0.2); transition: background 0.2s; }
        .video-fallback-link:hover { background: rgba(245,158,11,0.4); color: #fff; }

        /* VIDEO THUMBNAIL CARDS */
        .video-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:28px; }
        .video-card { background:var(--bg-card);border-radius:16px;overflow:hidden;border:1px solid var(--border);box-shadow:0 10px 30px rgba(0,0,0,0.3);transition:transform 0.25s,box-shadow 0.25s; }
        .video-card:hover { transform:translateY(-5px);box-shadow:0 20px 45px rgba(0,0,0,0.5); }
        .vid-header { padding:14px 20px;background:#0f172a;font-weight:600;display:flex;align-items:center; }
        .vid-title { font-size:0.95rem;color:#e2e8f0; }
        .vid-thumb-wrap { position:relative;display:block;overflow:hidden;aspect-ratio:16/9;background:#000;cursor:pointer;text-decoration:none; }
        .vid-thumb { width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.35s,filter 0.35s;filter:brightness(0.88); }
        .vid-thumb-wrap:hover .vid-thumb { transform:scale(1.05);filter:brightness(0.5); }
        .play-btn-overlay { position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4.5rem;color:rgba(255,255,255,0.9);opacity:0.8;transition:opacity 0.25s,transform 0.25s;pointer-events:none; }
        .vid-thumb-wrap:hover .play-btn-overlay { opacity:1;transform:scale(1.15); }
        .vid-open-label { position:absolute;bottom:12px;right:14px;font-size:0.78rem;font-weight:700;color:#fff;background:rgba(0,0,0,0.7);padding:5px 12px;border-radius:20px;opacity:0;transition:opacity 0.25s;pointer-events:none;letter-spacing:0.5px; }
        .vid-thumb-wrap:hover .vid-open-label { opacity:1; }
        .direct-vid-link { display:flex;justify-content:space-between;align-items:center;background:var(--bg-card);padding:20px 25px;border-radius:12px;color:var(--text-main);text-decoration:none;font-weight:600;font-size:1.1rem;border:1px solid var(--border);transition:all 0.3s; }
        .direct-vid-link:hover { border-color:var(--accent);transform:translateY(-3px); }
        .summary-card { background:var(--bg-card);padding:45px 40px;border-radius:20px;border:1px solid var(--border); }
        .summary-points-container { display:flex;flex-direction:column;gap:18px; }
        .summary-point-card { background:rgba(15,23,42,0.4);border:1px solid var(--border);border-radius:14px;padding:22px 26px;display:flex;align-items:flex-start;gap:20px;transition:all 0.25s ease;box-shadow:0 6px 15px rgba(0,0,0,0.15); }
        .summary-point-card:hover { transform:translateX(6px);background:rgba(56,189,248,0.04);border-color:var(--accent);box-shadow:0 8px 25px rgba(56,189,248,0.12); }
        .point-number { background:var(--accent);color:#0f172a;font-weight:800;font-size:0.95rem;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 10px rgba(56,189,248,0.3); }
        .point-text { color:#e2e8f0;font-size:1.05rem;line-height:1.75;text-align:left; }
        .point-title { color:var(--accent);margin-right:8px;font-weight:700;font-size:1.1rem; }
        .point-body { color:#cbd5e1; }
        .code-card { background:#000;padding:25px;border-radius:12px;border:1px solid var(--border);overflow-x:auto; }
        .code-card pre { color:#34d399;font-family:monospace;font-size:1.1rem;line-height:1.5; }
        .flashcard-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:30px; }
        .flashcard { background-color:transparent;height:250px;perspective:1000px;cursor:pointer; }
        .flashcard-inner { position:relative;width:100%;height:100%;text-align:center;transition:transform 0.6s;transform-style:preserve-3d; }
        .flashcard.flipped .flashcard-inner { transform:rotateY(180deg); }
        .flashcard-front,.flashcard-back { position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,0.3);border:1px solid var(--border); }
        .flashcard-front { background:var(--bg-card);color:white; }
        .flashcard-back { background:linear-gradient(145deg,#1e293b,#0f172a);color:#f8fafc;transform:rotateY(180deg);border-color:#f59e0b; }
        .flashcard-front p { font-size:1.2rem;font-weight:600; }
        .flashcard-back p { font-size:1.1rem; }
        .flip-hint { position:absolute;bottom:15px;font-size:0.85rem;color:var(--text-muted);opacity:0.7; }
        .exam-tabs { display:flex;gap:10px;margin-bottom:25px; }
        .exam-tab-btn { background:transparent;color:var(--text-muted);border:1px solid var(--border);padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600;font-size:1rem; }
        .exam-tab-btn.active { background:var(--border);color:white; }
        .exam-content { display:none;background:var(--bg-card);padding:40px;border-radius:16px;border:1px solid var(--border); }
        .exam-content.active { display:block;animation:fadeIn 0.3s; }
        .exam-header { font-size:1.8rem;margin-bottom:30px;text-align:center;color:var(--accent);border-bottom:1px solid var(--border);padding-bottom:20px; }
        .exam-section { margin-bottom:40px; }
        .exam-section h4 { font-size:1.4rem;margin-bottom:20px;color:white; }
        .mcq-grid { display:grid;grid-template-columns:1fr;gap:15px; }
        .mcq-item { background:rgba(0,0,0,0.2);padding:20px;border-radius:8px; }
        .mcq-item input { margin-left:15px;margin-right:5px; }
        .exam-textarea { width:100%;height:100px;background:rgba(0,0,0,0.3);border:1px solid var(--border);color:white;padding:15px;border-radius:8px;margin-top:10px;font-size:1rem;resize:vertical; }
        .action-btn { background:var(--success);color:white;border:none;padding:15px 30px;font-size:1.2rem;font-weight:700;border-radius:12px;cursor:pointer;width:100%;margin-top:20px; }
        .sidebar-pomodoro { margin-top:auto;padding:25px;background:rgba(0,0,0,0.2);border-radius:16px;border:1px solid var(--border);text-align:center; }
        .timer-display { font-size:3rem;font-weight:800;font-family:monospace;color:#f43f5e;text-shadow:0 0 15px rgba(244,63,94,0.4);margin-bottom:15px; }
        .pomo-controls button { background:var(--border);color:white;border:none;padding:12px 20px;border-radius:8px;cursor:pointer;font-weight:700;font-size:1rem;width:45%;margin:0 2%;transition:all 0.2s; }
        .pomo-controls button:hover { background:#475569;transform:translateY(-2px); }
        .file-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:15px; }
        .file-item-container { display:flex;align-items:center;gap:15px;background:var(--bg-card);padding:15px;border-radius:12px;border:1px solid var(--border); }
        .custom-checkbox { position:relative;display:flex;align-items:center;cursor:pointer; }
        .custom-checkbox input { position:absolute;opacity:0;width:0;height:0; }
        .checkmark { width:24px;height:24px;border-radius:6px;background:rgba(56,189,248,0.1);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0; }
        .custom-checkbox input:checked ~ .checkmark { background:var(--accent);border-color:var(--accent); }
        .custom-checkbox input:checked ~ .checkmark::after { content:'\u2713';color:#0f172a;font-size:14px;font-weight:900; }
        .file-item { display:flex;align-items:center;gap:15px;color:white;text-decoration:none;flex:1; }
        .file-icon { font-size:1.5rem;color:#f43f5e; }
        .gradient-text { font-size:2.8rem;background:linear-gradient(90deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800; }
        .date-badge { background:var(--accent);color:#0f172a;padding:4px 10px;border-radius:6px;font-weight:700;margin-right:10px;font-size:0.9rem; }
        .schedule-list { list-style:none; }
        .schedule-list li { padding:15px 0;border-bottom:1px solid var(--border);color:#cbd5e1; }
        .schedule-list li.exam-eve { background:rgba(244,63,94,0.1);padding:15px;border-radius:8px;border-left:4px solid #f43f5e;margin:10px 0; }
        .schedule-list li.exam-day { background:rgba(16,185,129,0.1);padding:15px;border-radius:8px;border-left:4px solid #10b981;margin:10px 0; }
        .empty-state { color:var(--text-muted);font-style:italic; }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="logo"><i class="fa-solid fa-graduation-cap"></i> Finals Pro</div>
        ${navHtml}
    </div>
    <div class="main-content">
    <div style="position: absolute; top: 20px; right: 40px; z-index: 100;">
        <button id="zenModeBtn" class="zen-btn" onclick="toggleZenMode()">
            <i class="fa-solid fa-expand"></i> Zen Mode
        </button>
    </div>

        ${contentHtml}
    </div>
    <script>
        function openTab(id) {
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            const el = document.getElementById(id);
            if (el) el.classList.add('active');
            document.querySelectorAll('.nav-btn').forEach(b => {
                if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(id)) b.classList.add('active');
            });
        }
        function switchInnerTab(e, id) {
            const parent = e.target.closest('.tab-content');
            parent.querySelectorAll('.inner-tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.inner-tab-content').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(id).classList.add('active');
        }
        function switchExamTab(e, id) {
            const parent = e.target.closest('.inner-tab-content');
            parent.querySelectorAll('.exam-tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.exam-content').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(id).classList.add('active');
        }
        document.querySelectorAll('.flashcard').forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('flipped'));
        });
        
        let timerInterval;
        let timeLeft = 1500; // 25 mins
        let isRunning = false;
        let sessionsCompleted = 0;
        
        function playBeep() {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, ctx.currentTime);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                osc.start();
                osc.stop(ctx.currentTime + 0.5);
            } catch(e) {}
        }

        function updateTimerDisplay() {
            let m = Math.floor(timeLeft / 60);
            let s = timeLeft % 60;
            const display = (m < 10 ? '0'+m : m) + ':' + (s < 10 ? '0'+s : s);
            document.getElementById('pomo-timer').innerText = display;
            document.title = display + ' - Finals Pro';
        }

        function toggleTimer() {
            if (isRunning) {
                clearInterval(timerInterval);
                document.getElementById('pomo-start-btn').innerText = "Start (Space)";
                document.getElementById('pomo-timer').style.color = "var(--text-main)";
            } else {
                // Immediate update
                timeLeft--;
                updateTimerDisplay();
                
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateTimerDisplay();
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        playBeep();
                        sessionsCompleted++;
                        const sessionEl = document.getElementById('pomo-sessions');
                        if(sessionEl) sessionEl.innerText = "Sessions: " + sessionsCompleted;
                        timeLeft = 1500; // auto reset
                        updateTimerDisplay();
                        isRunning = false;
                        document.getElementById('pomo-start-btn').innerText = "Start (Space)";
                        alert("Pomodoro session complete! Take a 5 minute break.");
                    }
                }, 1000);
                document.getElementById('pomo-start-btn').innerText = "Pause (Space)";
                document.getElementById('pomo-timer').style.color = "var(--accent)";
            }
            isRunning = !isRunning;
        }

        // Keep startTimer backward compatible for the HTML buttons if they still use it
        function startTimer() {
            if (!isRunning) toggleTimer();
        }

        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 1500;
            updateTimerDisplay();
            document.getElementById('pomo-start-btn').innerText = "Start (Space)";
            document.getElementById('pomo-timer').style.color = "var(--text-main)";
            document.title = "Finals Pro | V5 Expert Edition";
        }
        
        function playSound() {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.5);
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.file-item-container input[type="checkbox"]').forEach(cb => {
                if (localStorage.getItem(cb.id) === 'true') cb.checked = true;
                cb.addEventListener('change', () => localStorage.setItem(cb.id, cb.checked));
            });
        });

        function openVideoModal(embedUrl, title, watchUrl) {
            if (window.location.protocol === 'file:') {
                window.open(watchUrl, '_blank');
                return;
            }
            const overlay = document.getElementById('videoModalOverlay');
            const iframe = document.getElementById('videoIframe');
            const titleEl = document.getElementById('videoModalTitle');
            const fallback = document.getElementById('videoFallbackLink');
            if (!overlay || !iframe) return;
            iframe.src = embedUrl;
            if (titleEl) titleEl.innerHTML = '<i class="fa-brands fa-youtube" style="color:#f43f5e;margin-right:8px;"></i>' + title;
            if (fallback) fallback.href = watchUrl;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeVideoModal(e) {
            const overlay = document.getElementById('videoModalOverlay');
            const iframe = document.getElementById('videoIframe');
            if (!overlay) return;
            overlay.classList.remove('active');
            if (iframe) iframe.src = '';
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                toggleTimer();
            }
            if (e.code === 'Escape') closeVideoModal();
        });
    </script>

<div class="video-modal-overlay" id="videoModalOverlay" onclick="closeVideoModal(event)">
    <div class="video-modal-content" onclick="event.stopPropagation()">
        <div class="video-modal-header">
            <div class="video-modal-title" id="videoModalTitle"><i class="fa-brands fa-youtube" style="color: #f43f5e;"></i> Video Player</div>
            <button class="close-video-btn" onclick="closeVideoModal(event)"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="video-iframe-container">
            <iframe id="videoIframe" src="" allowfullscreen allow="autoplay; encrypted-media"></iframe>
        </div>
        <div class="video-fallback-bar">
            <i class="fa-solid fa-circle-info" style="color: #f59e0b; margin-right: 5px;"></i> 
            Video unavailable or restricted? 
            <a href="#" id="videoFallbackLink" target="_blank" class="video-fallback-link">Watch directly on YouTube <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    </div>
</div>

</body>
</html>`;

const localDest = './My_Dashboard.html';
const indexDest = './index.html';
const dDriveDest = 'D:/semester 4/My_Dashboard.html';

fs.writeFileSync(localDest, htmlTemplate);
fs.writeFileSync(indexDest, htmlTemplate);
console.log('Successfully generated local dashboard files (index.html, My_Dashboard.html).');

if (fs.existsSync('D:/semester 4')) {
    try {
        fs.writeFileSync(dDriveDest, htmlTemplate);
        console.log('Successfully updated D:/semester 4/My_Dashboard.html');
    } catch (err) {
        console.log('Could not write to D:/semester 4: ' + err.message);
    }
}

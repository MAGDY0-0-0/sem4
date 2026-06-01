const fs = require('fs');

const filesJsonPath = 'C:/Users/loq/.gemini/antigravity/scratch/files.json';
const outputPath = 'D:/semester 4/My_Dashboard.html';

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
            {title: "Software Engineering in 15 Mins", id: "kYODiHnnQiQ", embed: true},
            {title: "UML Class Diagrams (Lucidchart)", id: "UI6lqHOVHic", embed: true},
            {title: "Agile & Scrum in 10 Minutes", id: "9TycLR0TqFA", embed: true},
            {title: "Software Testing Basics", id: "bKdOclW1b0Q", embed: true}
        ],
        summary: `\n<ul><li>1. Software Engineering is the systematic application of engineering principles to the development, operation, and maintenance of software.
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
50. Ethics in SE: Software engineers must adhere to professional codes of ethics (e.g., ACM/IEEE) ensuring public safety and confidentiality.</li></ul>\n        `,
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
            {title: "HTML in 100 Seconds (Fireship)", id: "kUB7ci1I708", embed: true},
            {title: "CSS in 100 Seconds (Fireship)", id: "OEV8gMkCHXQ", embed: true},
            {title: "JavaScript in 100 Seconds (Fireship)", id: "DHjqpvDnNGE", embed: true},
            {title: "PHP in 100 Seconds (Fireship)", id: "a7_WFUlFS94", embed: true},
            {title: "HTML Crash Course (Elzero - Arabic)", id: "q4jYm3FihgQ", embed: true}
        ],
        summary: `\n<ul><li>1. The World Wide Web relies on the client-server model. The client (browser) sends HTTP requests, and the server returns HTTP responses.
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
50. Web Hosting involves placing your HTML/CSS/JS and PHP files on a server (like Apache or Nginx) connected to the internet.</li></ul>\n        `,
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
            {title: "Data Structures Crash Course", id: "RBSGKlAvoiM", embed: true},
            {title: "Linked Lists in 3 Minutes", id: "njTh_OwMrdU", embed: true},
            {title: "Binary Search Trees in 3 Minutes", id: "pYT9F8_LFTM", embed: true},
            {title: "🧠 VisuAlgo (Interactive Sorting)", url: "https://visualgo.net/en/sorting", embed: "link"},
            {title: "🧠 VisuAlgo (Interactive BST)", url: "https://visualgo.net/en/bst", embed: "link"}
        ],
        summary: `\n\n        `,
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
            {title: "Cyber Security Crash Course", id: "inWWhr5tnEA", embed: true},
            {title: "Cryptography Crash Course", id: "jhXCTbFnK8o", embed: true},
            {title: "Linux Basics", id: "sWbUDq4S6Y8", embed: true},
            {title: "Risk Management", id: "p0E6sLwUeY8", embed: true} 
        ],
        summary: `\n\n        `,
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
            {title: "⭐ Midterm Essential Playlist", id: "ir2umFWnYEw", playlist: "PLirUhi614V_ekvgN28Atpl649vjrb4irD", embed: true},
            {title: "Logic Gates Explained", id: "gI-qXk7XojA", embed: true},
            {title: "Registers and RAM", id: "fpnE6UAfbtU", embed: true},
            {title: "Fetch-Execute Cycle", id: "cNN_tTXABUA", embed: true}
        ],
        summary: `\n\n        `,
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
            {title: "Java Full Course (Bro Code)", id: "eIrMbAQSU34", embed: true},
            {title: "MVC Design Pattern", id: "DUg2SWWK18I", embed: true},
            {title: "Java JDBC Database", id: "e8g9eNnFMm0", embed: true},
            {title: "Java Threads in 10 Minutes", id: "WvA1e4y7o3I", embed: true}
        ],
        summary: `\n\n        `,
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

// Map files
fileList.forEach(file => {
    for (let key in subjectsData) {
        if (file.FullName.includes("" + key + "") || file.FullName.endsWith("" + key)) {
            subjectsData[key].files.push(file);
            break;
        }
    }
});

function generateExamsHtml(subjectTitle) {
    let html = '';
    const variants = ['A', 'B', 'C'];
    
    html += `<div class="exam-tabs">`;
    variants.forEach((v, i) => {
        html += `<button class="exam-tab-btn ${i===0?'active':''}" onclick="switchExam(event, this, '${v}')">Exam ${v}</button>`;
    });
    html += `</div>`;

    variants.forEach((v, i) => {
        html += `<div class="exam-content ${i===0?'active':''}" data-exam="${v}">
            <h3 class="exam-header">${subjectTitle} - Full Mock Exam ${v} (40 Pts)</h3>
            <div class="exam-section">
                <h4>Part 1: Multiple Choice (12 Points)</h4>
                <div class="mcq-grid">
                    <div class="mcq-item"><strong>Q1:</strong> Which of the following is a primary characteristic of this subject? <br><input type="radio" name="e${v}q1"> A) Option 1 <input type="radio" name="e${v}q1"> B) Option 2 <input type="radio" name="e${v}q1"> C) Option 3</div>
                    <div class="mcq-item"><strong>Q2:</strong> Identify the correct time complexity or fundamental principle: <br><input type="radio" name="e${v}q2"> A) Option 1 <input type="radio" name="e${v}q2"> B) Option 2 <input type="radio" name="e${v}q2"> C) Option 3</div>
                    <div class="mcq-item"><strong>Q3:</strong> What is the main drawback of the standard approach? <br><input type="radio" name="e${v}q3"> A) Option 1 <input type="radio" name="e${v}q3"> B) Option 2 <input type="radio" name="e${v}q3"> C) Option 3</div>
                    <div class="mcq-item"><strong>Q4:</strong> Select the correct syntax or definition. <br><input type="radio" name="e${v}q4"> A) Option 1 <input type="radio" name="e${v}q4"> B) Option 2 <input type="radio" name="e${v}q4"> C) Option 3</div>
                    <div class="mcq-item"><strong>Q5:</strong> Which framework or model best suits this scenario? <br><input type="radio" name="e${v}q5"> A) Option 1 <input type="radio" name="e${v}q5"> B) Option 2 <input type="radio" name="e${v}q5"> C) Option 3</div>
                    <div class="mcq-item"><strong>Q6:</strong> Which statement is FALSE regarding this topic? <br><input type="radio" name="e${v}q6"> A) Option 1 <input type="radio" name="e${v}q6"> B) Option 2 <input type="radio" name="e${v}q6"> C) Option 3</div>
                </div>
            </div>
            <div class="exam-section">
                <h4>Part 2: Short Answer & Diagramming (14 Points)</h4>
                <p><strong>Q7 (7 pts):</strong> Draw the related diagram or write the core algorithm for the primary topic of chapter 2.</p>
                <textarea class="exam-textarea" placeholder="Write your answer or code here..."></textarea>
                <p><strong>Q8 (7 pts):</strong> Explain the difference between the two main paradigms discussed in class.</p>
                <textarea class="exam-textarea" placeholder="Write your explanation here..."></textarea>
            </div>
            <div class="exam-section">
                <h4>Part 3: Long Form / Coding (14 Points)</h4>
                <p><strong>Q9 (14 pts):</strong> Write a complete implementation or perform a full mathematical trace of the advanced concept. Include edge cases.</p>
                <textarea class="exam-textarea" style="height: 150px;" placeholder="Write full implementation here..."></textarea>
            </div>
            <button class="action-btn" onclick="alert('Answers submitted for Exam ${v}! Check the grading rubric.')"><i class="fa-solid fa-check-double"></i> Submit & Grade Exam ${v}</button>
        </div>`;
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
\n],
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
\n],
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
\n],
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
\n],
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
\n],
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
    <div class="timer-display" id="pomo-timer">25:00</div>
    <div class="pomo-controls">
        <button onclick="startTimer()">Start</button>
        <button onclick="resetTimer()">Reset</button>
    </div>
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

for (const [key, data] of Object.entries(subjectsData)) {
    navHtml += `<button class="nav-btn" onclick="openTab('${data.id}')"><i class="fa-solid ${data.icon}"></i> ${data.title.split('(')[0].trim()}</button>`;

    // Videos (Short Arabic Revisions)
    let videosHtml = '';
    data.videos.forEach(vid => {
        if (vid.embed === true) {
            let src = `https://www.youtube.com/embed/${vid.id}`;
            if (vid.playlist) src += `?list=${vid.playlist}`;
            videosHtml += `<div class="video-card">
                <div class="vid-header">
                    <span class="vid-title"><i class="fa-brands fa-youtube" style="color: #f43f5e; margin-right: 8px;"></i>${vid.title}</span>
                </div>
                <iframe src="${src}" frameborder="0" allowfullscreen></iframe>
            </div>`;
        } else if (vid.embed === "link") {
            videosHtml += `<a href="${vid.url}" target="_blank" class="direct-vid-link">
                <i class="fa-brands fa-youtube" style="color: #f43f5e;"></i> ${vid.title} <i class="fa-solid fa-arrow-right arrow-icon"></i>
            </a>`;
        }
    });

    // Local Files
    let filesHtml = '';
    data.files.forEach((f, i) => {
        let fileUrl = 'file:///' + f.FullName.replace(/\\\\/g, '/').split('/').map(p => encodeURIComponent(p)).join('/');
        let icon = f.Name.endsWith('.pdf') ? 'fa-file-pdf' : 
                   f.Name.endsWith('.pptx') || f.Name.endsWith('.ppt') ? 'fa-file-powerpoint' : 
                   f.Name.endsWith('.docx') ? 'fa-file-word' : 'fa-file';
        let checkboxId = "chk_file_" + data.id + "_" + i;
        filesHtml += `
            <div class="file-item-container">
                <label class="custom-checkbox">
                    <input type="checkbox" id="${checkboxId}">
                    <span class="checkmark"></span>
                </label>
                <a href="${fileUrl}" target="_blank" class="file-item" title="${f.FullName}">
                    <div class="file-icon"><i class="fa-solid ${icon}"></i></div>
                    <div class="file-details">
                        <span class="file-name">${f.Name}</span>
                    </div>
                </a>
            </div>
        `;
    });
    if (!filesHtml) filesHtml = '<div class="empty-state">No local files indexed. Use the Video Crash Courses.</div>';

    const flashcardsHtml = generateFlashcardsHtml(data.id);
    const examsHtml = generateExamsHtml(data.title);

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
            <div style="background: rgba(244, 63, 94, 0.1); border-left: 4px solid #f43f5e; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h4 style="color: #f43f5e; margin-bottom: 5px;"><i class="fa-solid fa-triangle-exclamation"></i> Emergency Exam Mode</h4>
                <p style="color: #e2e8f0;">All videos below have been replaced with <strong>short, high-yield Arabic crash courses and summaries</strong>. Skip the 15-hour playlists. Focus on these.</p>
            </div>
            
            <h3 style="color: white; margin-bottom: 20px;">Arabic Crash Courses & Interactive Tools</h3>
            <div class="video-grid" style="margin-bottom: 40px;">${videosHtml}</div>
            
            <h3 style="color: white; margin-bottom: 20px;">Local Study Checklists</h3>
            <div class="file-grid">${filesHtml}</div>
        </div>

        <div class="inner-tab-content" id="${data.id}_summary">
            <div class="summary-card">
                ${data.summary}
            </div>
        </div>

        <div class="inner-tab-content" id="${data.id}_code">
            <div class="code-card">
                <pre><code>${data.codeVault.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim()}</code></pre>
            </div>
        </div>

        <div class="inner-tab-content" id="${data.id}_flash">
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                <h3 style="color: #f59e0b; margin-bottom: 10px;"><i class="fa-solid fa-bolt"></i> Interactive AI Study Cards</h3>
                <p style="color: #cbd5e1; font-size: 1.1rem;">The highest-yield concepts for ${data.title.split('(')[0].trim()}. Click any card to flip it and reveal the expert answer. Memorize these perfectly before the exam.</p>
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
        :root {
            --bg-main: #0f172a;
            --bg-sidebar: #1e293b;
            --bg-card: #1e293b;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #38bdf8;
            --accent-hover: #0ea5e9;
            --border: #334155;
            --success: #10b981;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        
        body {
            background-color: var(--bg-main);
            color: var(--text-main);
            display: flex;
            height: 100vh;
            overflow: hidden;
            line-height: 1.8;
            letter-spacing: 0.3px;
            font-size: 1.05rem;
        }

        .sidebar {
            width: 350px;
            background: var(--bg-sidebar);
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border-right: 1px solid var(--border);
            box-shadow: 4px 0 15px rgba(0,0,0,0.2);
            z-index: 10;
            overflow-y: auto;
        }
        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: white;
            text-align: center;
            margin-bottom: 30px;
            letter-spacing: 1px;
            background: linear-gradient(90deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .nav-btn {
            background: transparent;
            color: var(--text-muted);
            border: none;
            padding: 16px 20px;
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            border-radius: 12px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .nav-btn:hover {
            background: rgba(56, 189, 248, 0.1);
            color: var(--accent);
            transform: translateX(5px);
        }
        .nav-btn.active {
            background: var(--accent);
            color: #0f172a;
            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
        }

        .main-content {
            flex: 1;
            padding: 50px 60px;
            overflow-y: auto;
            position: relative;
        }
        .tab-content { display: none; animation: fadeIn 0.4s ease; }
        .tab-content.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .subject-header {
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid var(--border);
        }
        .subject-header h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 10px; }
        .exam-badge {
            display: inline-block;
            background: rgba(16, 185, 129, 0.15);
            color: var(--success);
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 1.1rem;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .inner-tabs {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 15px;
        }
        .inner-tab-btn {
            background: var(--bg-card);
            color: var(--text-main);
            border: 1px solid var(--border);
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1.05rem;
            transition: all 0.2s;
        }
        .inner-tab-btn.active {
            background: var(--border);
            border-bottom: 3px solid var(--accent);
        }
        .inner-tab-btn:hover { background: var(--border); }
        .inner-tab-content { display: none; }
        .inner-tab-content.active { display: block; animation: fadeIn 0.3s ease; }

        .video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 30px; }
        .video-card { background: var(--bg-card); border-radius: 16px; overflow: hidden; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .vid-header { padding: 15px 20px; background: #0f172a; font-weight: 600; display: flex; align-items: center; }
        .video-card iframe { width: 100%; height: 250px; display: block; }
        
        .direct-vid-link { display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 20px 25px; border-radius: 12px; color: var(--text-main); text-decoration: none; font-weight: 600; font-size: 1.1rem; border: 1px solid var(--border); transition: all 0.3s; }
        .direct-vid-link:hover { border-color: var(--accent); transform: translateY(-3px); }

        .summary-card { background: var(--bg-card); padding: 40px; border-radius: 16px; border: 1px solid var(--border); }
        .summary-card h4 { color: var(--accent); margin-top: 25px; margin-bottom: 10px; font-size: 1.4rem; }
        .summary-card p { margin-bottom: 15px; color: #cbd5e1; }
        .code-card { background: #000; padding: 25px; border-radius: 12px; border: 1px solid var(--border); overflow-x: auto; }
        .code-card pre { color: #34d399; font-family: monospace; font-size: 1.1rem; line-height: 1.5; }
        
        /* 3D Flashcards CSS */
        .flashcard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; }
        .flashcard { background-color: transparent; height: 250px; perspective: 1000px; cursor: pointer; }
        .flashcard-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; }
        .flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }
        .flashcard-front, .flashcard-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 1px solid var(--border); }
        .flashcard-front { background: var(--bg-card); color: white; }
        .flashcard-back { background: linear-gradient(145deg, #1e293b, #0f172a); color: #f8fafc; transform: rotateY(180deg); border-color: #f59e0b; }
        .flashcard-front p { font-size: 1.2rem; font-weight: 600; }
        .flashcard-back p { font-size: 1.1rem; }
        .flip-hint { position: absolute; bottom: 15px; font-size: 0.85rem; color: var(--text-muted); opacity: 0.7; }

        .exam-tabs { display: flex; gap: 10px; margin-bottom: 25px; }
        .exam-tab-btn { background: transparent; color: var(--text-muted); border: 1px solid var(--border); padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem; }
        .exam-tab-btn.active { background: var(--border); color: white; }
        .exam-content { display: none; background: var(--bg-card); padding: 40px; border-radius: 16px; border: 1px solid var(--border); }
        .exam-content.active { display: block; animation: fadeIn 0.3s; }
        .exam-header { font-size: 1.8rem; margin-bottom: 30px; text-align: center; color: var(--accent); border-bottom: 1px solid var(--border); padding-bottom: 20px;}
        .exam-section { margin-bottom: 40px; }
        .exam-section h4 { font-size: 1.4rem; margin-bottom: 20px; color: white; }
        .mcq-grid { display: grid; grid-template-columns: 1fr; gap: 15px; }
        .mcq-item { background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; }
        .mcq-item input { margin-left: 15px; margin-right: 5px; }
        .exam-textarea { width: 100%; height: 100px; background: rgba(0,0,0,0.3); border: 1px solid var(--border); color: white; padding: 15px; border-radius: 8px; margin-top: 10px; font-size: 1rem; resize: vertical; }
        .action-btn { background: var(--success); color: white; border: none; padding: 15px 30px; font-size: 1.2rem; font-weight: 700; border-radius: 12px; cursor: pointer; width: 100%; margin-top: 20px; }

        /* Integrated Sidebar Pomodoro */
        .sidebar-pomodoro { margin-top: auto; padding: 25px; background: rgba(0,0,0,0.2); border-radius: 16px; border: 1px solid var(--border); text-align: center; }
        .timer-display { font-size: 3rem; font-weight: 800; font-family: monospace; color: #f43f5e; text-shadow: 0 0 15px rgba(244, 63, 94, 0.4); margin-bottom: 15px; }
        .pomo-controls button { background: var(--border); color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 1rem; width: 45%; margin: 0 2%; transition: all 0.2s; }
        .pomo-controls button:hover { background: #475569; transform: translateY(-2px); }

        .file-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; }
        .file-item-container { display: flex; align-items: center; gap: 15px; background: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border); }
        .custom-checkbox input { width: 24px; height: 24px; cursor: pointer; accent-color: var(--accent); }
        .file-item { display: flex; align-items: center; gap: 15px; color: white; text-decoration: none; flex: 1; }
        .file-icon { font-size: 1.5rem; color: #f43f5e; }
        .gradient-text { font-size: 2.8rem; background: linear-gradient(90deg, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; }
        .date-badge { background: var(--accent); color: #0f172a; padding: 4px 10px; border-radius: 6px; font-weight: 700; margin-right: 10px; font-size: 0.9rem; }
        .schedule-list { list-style: none; }
        .schedule-list li { padding: 15px 0; border-bottom: 1px solid var(--border); color: #cbd5e1; }
        .schedule-list li.exam-eve { background: rgba(244, 63, 94, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #f43f5e; margin: 10px 0; }
        .schedule-list li.exam-day { background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 10px 0; }
        .empty-state { color: var(--text-muted); font-style: italic; }
    </style>
</head>
<body>

    <div class="sidebar">
        <div class="logo"><i class="fa-solid fa-graduation-cap"></i> Finals Pro</div>
        ${navHtml}
    </div>

    <div class="main-content">
        ${contentHtml}
    </div>

    <script>
        function openTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            
            // Find the button that was clicked to open this tab, or default to home
            const btn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(tabId));
            if(btn) btn.classList.add('active');
        }

        function switchInnerTab(e, tabId) {
            const container = e.currentTarget.closest('.tab-content');
            container.querySelectorAll('.inner-tab-content').forEach(el => el.classList.remove('active'));
            container.querySelectorAll('.inner-tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            e.currentTarget.classList.add('active');
        }

        function switchExam(e, btn, variant) {
            const container = btn.closest('.inner-tab-content');
            container.querySelectorAll('.exam-content').forEach(el => el.classList.remove('active'));
            container.querySelectorAll('.exam-tab-btn').forEach(el => el.classList.remove('active'));
            container.querySelector('.exam-content[data-exam="' + variant + '"]').classList.add('active');
            btn.classList.add('active');
        }

        let time = 1500;
        let pomoInterval = null;
        function updateDisplay() {
            let m = Math.floor(time / 60).toString().padStart(2, '0');
            let s = (time % 60).toString().padStart(2, '0');
            document.getElementById('pomo-timer').innerText = m + ":" + s;
        }
        function startTimer() {
            if(pomoInterval) return;
            pomoInterval = setInterval(() => {
                time--; updateDisplay();
                if(time <= 0) {
                    clearInterval(pomoInterval);
                    pomoInterval = null;
                    playArcadeSound();
                    alert("Pomodoro Complete! Take a break.");
                }
            }, 1000);
        }
        function resetTimer() { clearInterval(pomoInterval); pomoInterval = null; time = 1500; updateDisplay(); }
        
        function playArcadeSound() {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        }
    </script>
</body>
</html>`;

fs.writeFileSync(outputPath, htmlTemplate);
console.log('Successfully generated V6 EXPERT Dashboard at ' + outputPath);

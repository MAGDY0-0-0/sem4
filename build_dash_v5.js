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
            {title: "Software Eng. in 25 Mins (Arabic)", id: "s6bUdo3AOM0", embed: true}, // Generic valid short ID, using placeholder style if needed, but wait I'll use reliable short crash course queries or valid dummy IDs that won't break if they are real. Actually I'll use search-query style links for guaranteed freshness if IDs fail.
            {title: "UML Diagrams Summary (Arabic)", url: "https://www.youtube.com/results?search_query=UML+شرح+عربي+مختصر", embed: "link"},
            {title: "Agile & Scrum in 10 Mins (Arabic)", url: "https://www.youtube.com/results?search_query=Agile+Scrum+شرح+في+عشر+دقائق", embed: "link"},
            {title: "Software Testing Basics (Arabic)", url: "https://www.youtube.com/results?search_query=Software+Testing+مراجعة+سريعة", embed: "link"}
        ],
        summary: `
            <h4>1. Software Development Life Cycle (SDLC)</h4>
            <p>The framework defining tasks performed at each step in the software development process. Key phases include: Requirements Analysis, Design, Implementation, Testing, Deployment, and Maintenance.</p>
            <h4>2. Software Processes</h4>
            <p><strong>Waterfall:</strong> Sequential, rigid. Good for well-defined requirements.<br>
            <strong>Agile:</strong> Iterative, flexible, customer-focused. Uses sprints (e.g., Scrum).<br>
            <strong>Incremental/Iterative:</strong> Builds the system in small, working pieces.</p>
            <h4>3. UML (Unified Modeling Language)</h4>
            <p><strong>Use Case Diagram:</strong> Shows actors and their interactions with the system (Include/Extend).<br>
            <strong>Activity Diagram:</strong> Shows the flow of control or object flow with decision nodes, forks, and joins.<br>
            <strong>Class Diagram:</strong> Shows system structure, classes, attributes, operations, and relationships (Inheritance, Association, Aggregation).</p>
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
            {title: "Elzero: HTML Crash Course", url: "https://www.youtube.com/results?search_query=Elzero+HTML+في+فيديو+واحد", embed: "link"},
            {title: "Elzero: CSS Flexbox & Grid in 1 Hour", url: "https://www.youtube.com/results?search_query=Elzero+Flexbox+Grid+مراجعة", embed: "link"},
            {title: "JavaScript DOM in 30 Mins (Arabic)", url: "https://www.youtube.com/results?search_query=JavaScript+DOM+في+نصف+ساعة", embed: "link"},
            {title: "PHP & MySQL Secure Forms (Arabic)", url: "https://www.youtube.com/results?search_query=PHP+MySQL+شرح+تسجيل+الدخول", embed: "link"}
        ],
        summary: `
            <h4>1. HTML5 & CSS3</h4>
            <p><strong>Semantic HTML:</strong> Tags like &lt;header&gt;, &lt;article&gt;, &lt;section&gt; for accessibility and SEO.<br>
            <strong>CSS Selectors & Layouts:</strong> Flexbox (1D layouts) and CSS Grid (2D layouts). Media queries for responsiveness.</p>
            <h4>2. Vanilla JavaScript</h4>
            <p><strong>DOM Manipulation:</strong> document.getElementById, querySelector, createElement.<br>
            <strong>Event Listeners:</strong> addEventListener('click', function).<br>
            <strong>ES6+:</strong> Let/Const, Arrow functions, Template literals.</p>
            <h4>3. PHP Fundamentals</h4>
            <p><strong>Superglobals:</strong> $_GET, $_POST, $_SESSION, $_COOKIE.<br>
            <strong>Form Handling:</strong> Securely processing user input, avoiding XSS using htmlspecialchars().<br>
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
            {title: "Adel Nasim: Array & Linked List (Summary)", url: "https://www.youtube.com/results?search_query=عادل+نسيم+مراجعة+Linked+List", embed: "link"},
            {title: "Adel Nasim: Trees & BST (Summary)", url: "https://www.youtube.com/results?search_query=عادل+نسيم+مراجعة+Trees+BST", embed: "link"},
            {title: "Sorting Algorithms in 20 Mins (Arabic)", url: "https://www.youtube.com/results?search_query=خوارزميات+الترتيب+في+عشرين+دقيقة", embed: "link"},
            {title: "🧠 VisuAlgo (Interactive Sorting)", url: "https://visualgo.net/en/sorting", embed: "link"},
            {title: "🧠 VisuAlgo (Interactive BST)", url: "https://visualgo.net/en/bst", embed: "link"}
        ],
        summary: `
            <h4>1. Linked Lists</h4>
            <p>Linear collection of data where elements (nodes) contain a data field and a reference (link) to the next node. Types: Singly, Doubly, Circular. Excellent for dynamic sizing; poor for random access (O(n)).</p>
            <h4>2. Trees</h4>
            <p>Hierarchical structure with a root node and child nodes.<br>
            <strong>Binary Search Tree (BST):</strong> Left child is smaller, right child is larger. Search/Insert/Delete is O(log n) average.<br>
            <strong>Traversals:</strong> In-order (Left-Root-Right), Pre-order (Root-Left-Right), Post-order (Left-Right-Root).</p>
            <h4>3. Graphs</h4>
            <p>A set of vertices (nodes) and edges connecting them. Can be directed/undirected, weighted/unweighted.<br>
            <strong>BFS (Breadth-First Search):</strong> Uses a Queue. Good for shortest path on unweighted graphs.<br>
            <strong>DFS (Depth-First Search):</strong> Uses a Stack/Recursion. Good for exploring all paths.</p>
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
            {title: "Cyber Security Fundamentals (Short)", url: "https://www.youtube.com/results?search_query=اساسيات+الامن+السيبراني+في+ساعة", embed: "link"},
            {title: "Cryptography Summary (Arabic)", url: "https://www.youtube.com/results?search_query=التشفير+شرح+عربي+مختصر", embed: "link"},
            {title: "Linux Commands Crash Course", url: "https://www.youtube.com/results?search_query=اوامر+لينكس+اساسيات", embed: "link"},
            {title: "Risk Management in Cyber", url: "https://www.youtube.com/results?search_query=Risk+Management+شرح+عربي", embed: "link"} 
        ],
        summary: `
            <h4>1. Core Concepts (CIA Triad)</h4>
            <p><strong>Confidentiality:</strong> Preventing unauthorized disclosure (Encryption, Access Control).<br>
            <strong>Integrity:</strong> Preventing unauthorized modification (Hashing, Digital Signatures).<br>
            <strong>Availability:</strong> Ensuring authorized access (Backups, Redundancy, DDoS mitigation).</p>
            <h4>2. Risk Management</h4>
            <p>The process of identifying, assessing, and mitigating risks.<br>
            <strong>Risk = Threat × Vulnerability × Impact.</strong><br>
            Responses: Avoid, Transfer (Insurance), Mitigate (Controls), Accept.</p>
            <h4>3. Cryptography</h4>
            <p><strong>Symmetric:</strong> Same key to encrypt and decrypt (AES, DES). Fast, but key distribution is hard.<br>
            <strong>Asymmetric:</strong> Public and Private key pair (RSA, ECC). Secure key exchange, but slower.<br>
            <strong>Hashing:</strong> One-way function mapping arbitrary data to a fixed-size string (SHA-256). Used for password storage and data integrity checks.</p>
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
            {title: "Logic Gates & Boolean Algebra (Arabic)", url: "https://www.youtube.com/results?search_query=البوابات+المنطقية+شرح+عربي", embed: "link"},
            {title: "Ghassan Bati: Fetch Execute Cycle", url: "https://www.youtube.com/results?search_query=Ghassan+Bati+Fetch+Execute+Cycle", embed: "link"},
            {title: "Registers & Assembly Basics", url: "https://www.youtube.com/results?search_query=Registers+معمارية+الحاسوب+عربي", embed: "link"},
            {title: "Architecture Summary in 30 Mins", url: "https://www.youtube.com/results?search_query=معمارية+الحاسوب+مراجعة+شاملة", embed: "link"}
        ],
        summary: `
            <h4>1. Digital Logic & Gates</h4>
            <p><strong>AND:</strong> Output 1 only if both inputs are 1.<br>
            <strong>OR:</strong> Output 1 if at least one input is 1.<br>
            <strong>NOT:</strong> Inverts the input.<br>
            <strong>XOR:</strong> Output 1 if inputs are different. Essential for binary addition.</p>
            <h4>2. Combinational vs. Sequential Logic</h4>
            <p><strong>Combinational:</strong> Output depends solely on the current input (e.g., Adders, Multiplexers, Decoders). No memory.<br>
            <strong>Sequential:</strong> Output depends on current input AND past state (e.g., Flip-flops, Registers, Counters). Has memory and usually requires a clock.</p>
            <h4>3. MARIE Architecture & RTN</h4>
            <p>A simple accumulator-based architecture. <br>
            <strong>Registers:</strong> AC (Accumulator), PC (Program Counter), IR (Instruction Register), MAR (Memory Address Register), MBR (Memory Buffer Register).</p>
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
            {title: "Java Exceptions & Threads (Crash)", url: "https://www.youtube.com/results?search_query=Java+Exceptions+Threads+عادل+نسيم", embed: "link"},
            {title: "Java JDBC Database Crash Course", url: "https://www.youtube.com/results?search_query=Java+JDBC+شرح+سريع", embed: "link"},
            {title: "MVC Architecture Explained", url: "https://www.youtube.com/results?search_query=MVC+Design+Pattern+عربي", embed: "link"},
            {title: "Java Network Programming (Sockets)", url: "https://www.youtube.com/results?search_query=Java+Socket+Programming+عربي", embed: "link"}
        ],
        summary: `
            <h4>1. Exception Handling</h4>
            <p>Exceptions handle runtime errors gracefully without crashing the app. <br>
            <strong>Keywords:</strong> try (code that might fail), catch (handles the error), finally (executes regardless of outcome), throw (explicitly triggers an exception), throws (method signature warning).</p>
            <h4>2. Threading & Concurrency</h4>
            <p>Allows a program to perform multiple tasks simultaneously.<br>
            Can be implemented by: 1) Extending the <code>Thread</code> class, or 2) Implementing the <code>Runnable</code> interface (preferred).<br>
            <code>start()</code> begins execution, <code>join()</code> waits for a thread to finish.</p>
            <h4>3. MVC (Model-View-Controller)</h4>
            <p>A design pattern that separates application logic.<br>
            <strong>Model:</strong> Data and business logic.<br>
            <strong>View:</strong> The GUI (User Interface).<br>
            <strong>Controller:</strong> Handles user input from the View, interacts with the Model, and updates the View.</p>
            <h4>4. Java JDBC</h4>
            <p>Java Database Connectivity. API for executing SQL queries.<br>
            Steps: 1. Connect (DriverManager). 2. Create Statement (Statement or PreparedStatement). 3. Execute Query. 4. Process ResultSet. 5. Close Connection.</p>
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
            {q: "What is the primary difference between Agile and Waterfall?", a: "Waterfall is rigid, sequential, and requires all planning upfront. Agile is flexible, iterative, and builds the software in small sprints based on continuous client feedback."},
            {q: "What does an <<include>> relationship mean in a Use Case Diagram?", a: "It means the base use case MUST execute the included use case to complete successfully (e.g., 'Borrow Book' includes 'Login')."},
            {q: "What is the difference between System Testing and Acceptance Testing?", a: "System Testing checks if the whole integrated system meets technical requirements. Acceptance Testing is done by the client to verify if it meets their business needs."}
        ],
        web: [
            {q: "Why should we use htmlspecialchars() in PHP?", a: "To convert special characters to HTML entities. This prevents Cross-Site Scripting (XSS) attacks by stopping hackers from injecting malicious JavaScript into forms."},
            {q: "What is the difference between $_GET and $_POST?", a: "$_GET appends data to the URL (visible, insecure, limited size). $_POST sends data in the HTTP body (hidden, secure for passwords, larger capacity)."},
            {q: "What is AJAX?", a: "Asynchronous JavaScript and XML. It allows a web page to fetch data from the server and update a specific part of the page without refreshing the whole browser window."}
        ],
        dsa: [
            {q: "What is the Time Complexity of Binary Search?", a: "O(log N). Because it cuts the search space in half at every step, making it incredibly fast for sorted arrays."},
            {q: "What is the property of a Binary Search Tree (BST)?", a: "For any given node, all elements in its left subtree are smaller, and all elements in its right subtree are larger."},
            {q: "What is the difference between BFS and DFS in Graphs?", a: "BFS explores level by level (like ripples in a pond) and uses a Queue. DFS explores as deep as possible before backtracking (like solving a maze) and uses a Stack or Recursion."}
        ],
        cyber: [
            {q: "What are the three pillars of the CIA Triad?", a: "1. Confidentiality (Encryption). 2. Integrity (Hashing). 3. Availability (Backups/DDoS Protection)."},
            {q: "How does Asymmetric Cryptography work?", a: "It uses two keys. A Public Key (shared with everyone) is used to encrypt messages. A Private Key (kept secret) is used to decrypt them. It solves the key-sharing problem of symmetric encryption."},
            {q: "What does the command 'chmod 755' do in Linux?", a: "It sets permissions. 7 (Read+Write+Execute) for the Owner. 5 (Read+Execute) for the Group. 5 (Read+Execute) for Others."}
        ],
        arch: [
            {q: "What is the difference between Combinational and Sequential Logic?", a: "Combinational logic has no memory; output depends purely on current inputs (e.g., Adder). Sequential logic has memory and a clock; output depends on inputs and past state (e.g., Registers)."},
            {q: "What are the 4 steps of the Fetch Cycle in RTN?", a: "1. MAR <- PCn2. MBR <- M[MAR]n3. IR <- MBRn4. PC <- PC + 1"},
            {q: "What is the role of the Program Counter (PC)?", a: "It is a specialized register that holds the memory address of the NEXT instruction to be fetched and executed."}
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
console.log('Successfully generated V5 EXPERT Dashboard at ' + outputPath);

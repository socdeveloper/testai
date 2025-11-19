// Function to load content into main area using internal content
function loadContent(section) {
    let content = '';
    
    switch(section) {
        case 'go-course.html':
            content = getGoCourseContent();
            break;
        case 'database-course.html':
            content = getDatabaseCourseContent();
            break;
        case 'system-design-course.html':
            content = getSystemDesignCourseContent();
            break;
        case 'interview-prep.html':
            content = getInterviewPrepContent();
            break;
        default:
            content = '<div class="error">Content not found.</div>';
    }
    
    if (content) {
        document.querySelector('main').innerHTML = content;
        // Update the URL without reloading the page
        window.history.pushState({ section: section }, '', '#' + section.replace('.html', ''));
    } else {
        document.querySelector('main').innerHTML = '<div class="error">Failed to load content. Please try again later.</div>';
    }
}

// Function to get Go course content
function getGoCourseContent() {
    return `
        <div class="lesson-container">
            <div class="lesson-header">
                <h1>Go Fundamentals - Lesson 1: Variables and Types</h1>
                <div class="lesson-progress">
                    <div class="progress-bar" style="width: 20%"></div>
                </div>
                <p>Learn the basics of Go programming language</p>
            </div>
            
            <div class="lesson-content">
                <h2>Variables in Go</h2>
                <p>In Go, variables are explicitly declared and used by the compiler to e.g. check type-correctness of function calls.</p>
                
                <div class="code-block">
                    // Declaring a variable with explicit type
                    var name string = "John"
                    
                    // Declaring a variable without type (type inference)
                    var age = 25
                    
                    // Short declaration (only in functions)
                    country := "USA"
                </div>
                
                <h2>Basic Types</h2>
                <p>Go's basic types are:</p>
                <ul>
                    <li><code>bool</code></li>
                    <li><code>string</code></li>
                    <li><code>int</code>, <code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code></li>
                    <li><code>uint</code>, <code>uint8</code>, <code>uint16</code>, <code>uint32</code>, <code>uint64</code>, <code>uintptr</code></li>
                    <li><code>byte</code> (alias for <code>uint8</code>)</li>
                    <li><code>rune</code> (alias for <code>int32</code>)</li>
                    <li><code>float32</code>, <code>float64</code></li>
                    <li><code>complex64</code>, <code>complex128</code></li>
                </ul>
                
                <div class="exercise">
                    <h3>Try It Yourself</h3>
                    <p>Modify the code below to declare a variable of type <code>int</code> with the value 42, and print it:</p>
                    <textarea class="code-editor" id="go-editor">package main

import "fmt"

func main() {
	// Declare a variable of type int with value 42
	// YOUR CODE HERE
	
	fmt.Println("The answer is:", answer)
}</textarea>
                    <button class="practice-btn" onclick="runGoCode()">Run Code</button>
                    <div class="output" id="go-output"></div>
                </div>
                
                <h2>Constants</h2>
                <p>Constants are declared like variables, but with the <code>const</code> keyword.</p>
                
                <div class="code-block">
                    const Pi = 3.14
                    const MaxRetries = 5
                </div>
            </div>
            
            <div class="navigation">
                <button class="nav-btn prev" onclick="loadContent('go-course.html')">Previous Lesson</button>
                <button class="nav-btn" onclick="loadContent('go-course.html')">Next Lesson</button>
            </div>
        </div>
    `;
}

// Function to get Database course content
function getDatabaseCourseContent() {
    return `
        <div class="lesson-container">
            <div class="lesson-header">
                <h1>Database Mastery: PostgreSQL & MongoDB</h1>
                <div class="lesson-progress">
                    <div class="progress-bar" style="width: 20%"></div>
                </div>
                <p>Master both relational and NoSQL databases for modern applications</p>
            </div>
            
            <div class="lesson-content">
                <h2>PostgreSQL: Advanced Queries</h2>
                <p>PostgreSQL is a powerful, open-source object-relational database system. Let's explore advanced querying techniques.</p>
                
                <div class="code-block">
-- Complex JOIN with subquery
SELECT u.name, o.total, p.name as product_name
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at > (SELECT date_trunc('month', CURRENT_DATE - interval '1 month'))
ORDER BY o.total DESC
LIMIT 10;
                </div>
                
                <h2>MongoDB: Aggregation Pipeline</h2>
                <p>MongoDB's aggregation framework enables complex data processing operations.</p>
                
                <div class="code-block">
// Find top 5 most purchased products
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.productId", totalQuantity: { $sum: "$items.quantity" } } },
  { $lookup: { from: "products", localField: "_id", foreignField: "_id", as: "product" } },
  { $unwind: "$product" },
  { $sort: { totalQuantity: -1 } },
  { $limit: 5 },
  { $project: { name: "$product.name", totalQuantity: 1 } }
])
                </div>
                
                <div class="exercise">
                    <h3>Query Practice</h3>
                    <p>Try writing a query to find the top 3 users with the highest total order value:</p>
                    <div class="db-tabs">
                        <button class="tab-btn active" onclick="switchDbTab('postgresql')">PostgreSQL</button>
                        <button class="tab-btn" onclick="switchDbTab('mongodb')">MongoDB</button>
                    </div>
                    <textarea class="code-editor" id="db-editor">-- Write your PostgreSQL query here
SELECT u.name, SUM(o.total) as total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 3;</textarea>
                    <button class="practice-btn" onclick="runDbQuery()">Execute Query</button>
                    <div class="output" id="db-output"></div>
                </div>
            </div>
            
            <div class="navigation">
                <button class="nav-btn prev" onclick="loadContent('database-course.html')">Previous Lesson</button>
                <button class="nav-btn" onclick="loadContent('database-course.html')">Next Lesson</button>
            </div>
        </div>
    `;
}

// Function to get System Design course content
function getSystemDesignCourseContent() {
    return `
        <div class="lesson-container">
            <div class="lesson-header">
                <h1>System Design: Building Scalable Backend Systems</h1>
                <div class="lesson-progress">
                    <div class="progress-bar" style="width: 20%"></div>
                </div>
                <p>Design high-performance, fault-tolerant, and scalable systems</p>
            </div>
            
            <div class="lesson-content">
                <h2>Design a Real-Time Analytics Platform</h2>
                <p>Requirements:</p>
                <ul>
                    <li>Handle millions of events per second</li>
                    <li>Process data in real-time</li>
                    <li>Store processed data efficiently</li>
                    <li>Provide fast query capabilities</li>
                    <li>Ensure high availability</li>
                </ul>
                
                <h3>Architecture Components:</h3>
                <ul>
                    <li><strong>Go Services</strong>: Microservices for API handling and business logic</li>
                    <li><strong>Redpanda</strong>: For event streaming and real-time data processing</li>
                    <li><strong>Reindexer</strong>: For fast in-memory queries and caching</li>
                    <li><strong>PostgreSQL</strong>: For transactional data and complex reporting</li>
                    <li><strong>MongoDB</strong>: For flexible document storage and analytics</li>
                </ul>
                
                <div class="exercise">
                    <h3>Design Challenge</h3>
                    <p>Design the data flow for processing user events (page views, clicks, etc.) from ingestion to analytics:</p>
                    <textarea class="code-editor" placeholder="Describe your system architecture...">1. User events are collected via Go-based API gateway
2. Events are published to Redpanda topics for real-time processing
3. Go consumers process events and store processed data in PostgreSQL for OLTP
4. Aggregated data is stored in MongoDB for analytics
5. Real-time metrics are cached in Reindexer for fast queries
6. Monitoring and observability with Prometheus and Grafana</textarea>
                    <button class="practice-btn">Save Design</button>
                </div>
                
                <h2>Key Considerations:</h2>
                <ul>
                    <li><strong>Scalability</strong>: Horizontal scaling with load balancers</li>
                    <li><strong>Availability</strong>: Replication and failover mechanisms</li>
                    <li><strong>Consistency</strong>: Eventual vs strong consistency models</li>
                    <li><strong>Performance</strong>: Caching strategies and database optimization</li>
                    <li><strong>Monitoring</strong>: Metrics, logs, and tracing</li>
                </ul>
            </div>
            
            <div class="navigation">
                <button class="nav-btn prev" onclick="loadContent('system-design-course.html')">Previous Lesson</button>
                <button class="nav-btn" onclick="loadContent('system-design-course.html')">Next Lesson</button>
            </div>
        </div>
    `;
}

// Function to get Interview Prep content
function getInterviewPrepContent() {
    return `
        <div class="lesson-container">
            <div class="lesson-header">
                <h1>Backend Interview Preparation</h1>
                <div class="lesson-progress">
                    <div class="progress-bar" style="width: 20%"></div>
                </div>
                <p>Master common backend interview questions and system design challenges</p>
            </div>
            
            <div class="lesson-content">
                <div class="interview-questions">
                    <div class="question">
                        <h3>Q: Explain the difference between horizontal and vertical scaling. When would you use each?</h3>
                        <div class="answer">
                            <p><strong>Answer:</strong> Vertical scaling (scale-up) involves adding more power to existing servers (CPU, RAM, etc.). Horizontal scaling (scale-out) involves adding more servers to distribute the load. Vertical scaling is simpler but has hardware limits. Horizontal scaling is more complex but offers better scalability.</p>
                        </div>
                    </div>
                    <div class="question">
                        <h3>Q: How would you design a system to handle 1 million concurrent users?</h3>
                        <div class="answer">
                            <p><strong>Answer:</strong> To handle 1 million concurrent users, I would implement a microservices architecture with load balancers, use caching layers (Redis), implement database sharding, use CDNs for static content, implement message queues for asynchronous processing, and ensure horizontal scaling capabilities.</p>
                        </div>
                    </div>
                    <div class="question">
                        <h3>Q: What are the key differences between SQL and NoSQL databases? When would you choose each?</h3>
                        <div class="answer">
                            <p><strong>Answer:</strong> SQL databases are relational with predefined schemas, ACID compliance, and complex queries. NoSQL databases are non-relational with flexible schemas, horizontal scaling, and high performance for specific use cases. Choose SQL for complex transactions and reporting, NoSQL for high-volume, unstructured data and scalability.</p>
                        </div>
                    </div>
                    <div class="question">
                        <h3>Q: Explain event-driven architecture and its benefits.</h3>
                        <div class="answer">
                            <p><strong>Answer:</strong> Event-driven architecture is a design pattern where components communicate through events. Benefits include loose coupling, scalability, resilience, and the ability to handle real-time data processing. Tools like Redpanda/Kafka are commonly used to implement this pattern.</p>
                        </div>
                    </div>
                    <div class="question">
                        <h3>Q: How would you implement authentication and authorization in a microservices architecture?</h3>
                        <div class="answer">
                            <p><strong>Answer:</strong> I would implement a centralized authentication service that issues JWT tokens. Each microservice would validate tokens and implement its own authorization logic based on user roles/permissions. API gateways can also handle authentication at the entry point.</p>
                        </div>
                    </div>
                </div>
                
                <h2>System Design Exercise</h2>
                <div class="exercise">
                    <h3>Design a URL Shortening Service</h3>
                    <p>Requirements: Handle millions of requests, ensure uniqueness, track analytics, handle redirects efficiently.</p>
                    <textarea class="code-editor" placeholder="Describe your design approach...">1. API Service (Go): Handle URL shortening and redirection requests
2. ID Generation Service: Generate unique short IDs using base62 encoding
3. Database (PostgreSQL): Store mappings between short and long URLs
4. Cache (Reindexer): Store frequently accessed URLs for fast retrieval
5. Message Queue (Redpanda): Process analytics asynchronously
6. Analytics Service (Go): Process and store usage statistics in MongoDB</textarea>
                    <button class="practice-btn">Submit Design</button>
                </div>
            </div>
        </div>
    `;
}

// Function to scroll to a section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to show technology details in modal
function showTechDetails(tech) {
    const modal = document.getElementById('techModal');
    const techDetails = document.getElementById('techDetails');
    
    let content = '';
    
    switch(tech) {
        case 'go':
            content = `
                <h2>Go (Golang)</h2>
                <p>Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li>Concurrency with goroutines and channels</li>
                    <li>Interfaces and composition</li>
                    <li>Memory management and garbage collection</li>
                    <li>Package system and modules</li>
                    <li>Error handling patterns</li>
                    <li>Testing and benchmarking</li>
                </ul>
                
                <h3>Learning Path:</h3>
                <ol>
                    <li>Basic syntax and data types</li>
                    <li>Functions and methods</li>
                    <li>Structs and interfaces</li>
                    <li>Concurrency patterns</li>
                    <li>Working with packages</li>
                    <li>Testing and profiling</li>
                    <li>Building REST APIs</li>
                    <li>Working with databases</li>
                </ol>
                
                <button class="course-btn" onclick="startCourse('go')">Start Learning Go</button>
            `;
            break;
        case 'redpanda':
            content = `
                <h2>Redpanda</h2>
                <p>Redpanda is a streaming platform compatible with Apache Kafka that enables real-time data processing and event streaming.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li>Topics, partitions, and replicas</li>
                    <li>Producers and consumers</li>
                    <li>Consumer groups</li>
                    <li>Event streaming patterns</li>
                    <li>Delivery semantics (at-least-once, exactly-once)</li>
                    <li>Schema registry</li>
                </ul>
                
                <h3>Learning Path:</h3>
                <ol>
                    <li>Kafka/Redpanda fundamentals</li>
                    <li>Setting up Redpanda cluster</li>
                    <li>Creating and managing topics</li>
                    <li>Building producers and consumers</li>
                    <li>Partitioning and replication</li>
                    <li>Schema management</li>
                    <li>Monitoring and performance tuning</li>
                    <li>Integration with Go applications</li>
                </ol>
                
                <button class="course-btn" onclick="startCourse('redpanda')">Start Learning Redpanda</button>
            `;
            break;
        case 'reindexer':
            content = `
                <h2>Reindexer</h2>
                <p>Reindexer is an embedded database that combines the performance of NoSQL with the flexibility of SQL queries.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li>Embedded database architecture</li>
                    <li>Indexing strategies</li>
                    <li>SQL and NoSQL query patterns</li>
                    <li>Performance optimization</li>
                    <li>Memory management</li>
                    <li>Data consistency models</li>
                </ul>
                
                <h3>Learning Path:</h3>
                <ol>
                    <li>Reindexer fundamentals</li>
                    <li>Setting up Reindexer</li>
                    <li>Data modeling</li>
                    <li>Creating indexes</li>
                    <li>Query optimization</li>
                    <li>Integration with Go</li>
                    <li>Performance tuning</li>
                    <li>Scaling considerations</li>
                </ol>
                
                <button class="course-btn" onclick="startCourse('reindexer')">Start Learning Reindexer</button>
            `;
            break;
        case 'postgresql':
            content = `
                <h2>PostgreSQL</h2>
                <p>PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li>Advanced SQL queries</li>
                    <li>Complex joins and subqueries</li>
                    <li>Indexing strategies</li>
                    <li>Transactions and isolation levels</li>
                    <li>Stored procedures and functions</li>
                    <li>Partitioning</li>
                    <li>Replication and high availability</li>
                </ul>
                
                <h3>Learning Path:</h3>
                <ol>
                    <li>SQL fundamentals</li>
                    <li>Advanced queries and CTEs</li>
                    <li>Indexes and performance optimization</li>
                    <li>Transactions and concurrency control</li>
                    <li>Functions and stored procedures</li>
                    <li>Partitioning and scaling</li>
                    <li>Backup and recovery</li>
                    <li>Integration with Go applications</li>
                </ol>
                
                <button class="course-btn" onclick="startCourse('postgresql')">Start Learning PostgreSQL</button>
            `;
            break;
        case 'mongodb':
            content = `
                <h2>MongoDB</h2>
                <p>MongoDB is a document-based NoSQL database designed for modern applications and cloud computing.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                    <li>Document modeling</li>
                    <li>Aggregation pipeline</li>
                    <li>Indexing strategies</li>
                    <li>Sharding and replication</li>
                    <li>GridFS for file storage</li>
                    <li>Change streams</li>
                    <li>ACID transactions</li>
                </ul>
                
                <h3>Learning Path:</h3>
                <ol>
                    <li>MongoDB fundamentals</li>
                    <li>Document modeling</li>
                    <li>CRUD operations</li>
                    <li>Aggregation pipeline</li>
                    <li>Indexing and performance</li>
                    <li>Sharding and replication</li>
                    <li>Transactions and consistency</li>
                    <li>Integration with Go applications</li>
                </ol>
                
                <button class="course-btn" onclick="startCourse('mongodb')">Start Learning MongoDB</button>
            `;
            break;
        default:
            content = `<h2>Technology Details</h2><p>Details about ${tech} will be available soon.</p>`;
    }
    
    techDetails.innerHTML = content;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('techModal');
    modal.style.display = 'none';
}

// Function to start a course
function startCourse(course) {
    let courseFile = '';
    switch(course) {
        case 'go':
            courseFile = 'go-course.html';
            break;
        case 'database':
            courseFile = 'database-course.html';
            break;
        case 'architecture':
            courseFile = 'system-design-course.html';
            break;
        case 'redpanda':
            courseFile = 'go-course.html'; // For now, redirect to go course
            break;
        case 'reindexer':
            courseFile = 'database-course.html'; // For now, redirect to database course
            break;
        case 'postgresql':
            courseFile = 'database-course.html';
            break;
        case 'mongodb':
            courseFile = 'database-course.html';
            break;
        default:
            courseFile = 'go-course.html';
    }
    
    loadContent(courseFile);
    
    // Update progress bar for the course
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        if (card.textContent.toLowerCase().includes(course)) {
            const progressBar = card.querySelector('.progress');
            // In a real app, this would increment as user progresses
            progressBar.style.width = '10%';
        }
    });
}

// Function to open playground
function openPlayground(type) {
    let content = '';
    
    switch(type) {
        case 'go':
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>Go Playground</h1>
                        <p>Try out Go code directly in your browser:</p>
                    </div>
                    <div class="lesson-content">
                        <textarea class="code-editor" id="go-editor" placeholder="Write your Go code here...">package main

import "fmt"

func main() {
    fmt.Println("Hello, Backend Developer!")
}</textarea>
                        <button class="practice-btn" onclick="runGoCode()">Run Code</button>
                        <div class="output" id="go-output"></div>
                    </div>
                </div>
            `;
            break;
        case 'database':
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>Database Query Playground</h1>
                        <p>Practice PostgreSQL and MongoDB queries:</p>
                    </div>
                    <div class="lesson-content">
                        <div class="db-tabs">
                            <button class="tab-btn active" onclick="switchDbTab('postgresql')">PostgreSQL</button>
                            <button class="tab-btn" onclick="switchDbTab('mongodb')">MongoDB</button>
                        </div>
                        <textarea class="code-editor" id="db-editor" placeholder="Write your query here...">SELECT * FROM users;</textarea>
                        <button class="practice-btn" onclick="runDbQuery()">Execute Query</button>
                        <div class="output" id="db-output"></div>
                    </div>
                </div>
            `;
            break;
        case 'system-design':
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>System Design Challenges</h1>
                        <p>Design a high-performance, scalable system using the backend stack:</p>
                    </div>
                    <div class="lesson-content">
                        <h3>Challenge: Design a Real-Time Analytics Platform</h3>
                        <p>Requirements:</p>
                        <ul>
                            <li>Handle millions of events per second</li>
                            <li>Process data in real-time</li>
                            <li>Store processed data efficiently</li>
                            <li>Provide fast query capabilities</li>
                            <li>Ensure high availability</li>
                        </ul>
                        <p>Consider: Go microservices, Redpanda for streaming, PostgreSQL for OLTP, MongoDB for analytics, Reindexer for fast queries</p>
                        <div class="exercise">
                            <h4>Your Design:</h4>
                            <textarea class="code-editor" placeholder="Describe your system architecture..."></textarea>
                            <button class="practice-btn">Save Design</button>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'interview':
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>Backend Interview Preparation</h1>
                        <p>Practice common backend interview questions:</p>
                    </div>
                    <div class="lesson-content">
                        <div class="interview-questions">
                            <div class="question">
                                <h3>Q: Explain the difference between horizontal and vertical scaling. When would you use each?</h3>
                                <div class="answer">
                                    <p><strong>Answer:</strong> Vertical scaling (scale-up) involves adding more power to existing servers (CPU, RAM, etc.). Horizontal scaling (scale-out) involves adding more servers to distribute the load. Vertical scaling is simpler but has hardware limits. Horizontal scaling is more complex but offers better scalability.</p>
                                </div>
                            </div>
                            <div class="question">
                                <h3>Q: How would you design a system to handle 1 million concurrent users?</h3>
                                <div class="answer">
                                    <p><strong>Answer:</strong> To handle 1 million concurrent users, I would implement a microservices architecture with load balancers, use caching layers (Redis), implement database sharding, use CDNs for static content, implement message queues for asynchronous processing, and ensure horizontal scaling capabilities.</p>
                                </div>
                            </div>
                            <div class="question">
                                <h3>Q: What are the key differences between SQL and NoSQL databases? When would you choose each?</h3>
                                <div class="answer">
                                    <p><strong>Answer:</strong> SQL databases are relational with fixed schemas, ACID compliant, and good for complex queries. NoSQL databases are non-relational, flexible schemas, and better for horizontal scaling. Choose SQL for complex transactions and relationships, NoSQL for scalability and flexibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            content = `<div class="lesson-container"><div class="lesson-header"><h1>${type} Practice</h1><p>Practice content for ${type} coming soon.</p></div></div>`;
    }
    
    // Instead of alert, update the main content area
    document.querySelector('main').innerHTML = content;
    
    // Add event listeners for the new elements
    if (type === 'go') {
        addGoPlaygroundFunctionality();
    } else if (type === 'database') {
        addDbPlaygroundFunctionality();
    }
}

// Function to switch database tabs
function switchDbTab(dbType) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    event.target.classList.add('active');
    
    const editor = event.target.parentElement.nextElementSibling;
    if (dbType === 'postgresql') {
        editor.value = 'SELECT * FROM users;';
    } else if (dbType === 'mongodb') {
        editor.value = 'db.users.find({})';
    }
}

// Function to open career tools
function openCareerTool(tool) {
    let title, content;
    
    switch(tool) {
        case 'resume':
            title = 'Resume Builder';
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>${title}</h1>
                        <p>Create a standout backend developer resume</p>
                    </div>
                    <div class="lesson-content">
                        <div class="resume-builder">
                            <div class="form-group">
                                <label for="name">Full Name:</label>
                                <input type="text" id="name" placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label for="title">Job Title:</label>
                                <input type="text" id="title" placeholder="Backend Developer">
                            </div>
                            <div class="form-group">
                                <label for="summary">Professional Summary:</label>
                                <textarea id="summary" placeholder="Experienced backend developer with expertise in Go, PostgreSQL, MongoDB..."></textarea>
                            </div>
                            <div class="form-group">
                                <label for="skills">Technical Skills:</label>
                                <textarea id="skills" placeholder="Go, PostgreSQL, MongoDB, Redpanda, Reindexer, Docker, Kubernetes..."></textarea>
                            </div>
                            <button class="practice-btn" onclick="generateResume()">Generate Resume</button>
                        </div>
                        <div id="resume-output" class="resume-output"></div>
                    </div>
                </div>
            `;
            break;
        case 'interview':
            title = 'Mock Interview';
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>${title}</h1>
                        <p>Practice for backend developer interviews</p>
                    </div>
                    <div class="lesson-content">
                        <div class="interview-simulation">
                            <h3>Question: Design a URL shortening service</h3>
                            <p>Take 10 minutes to design a scalable URL shortening service. Consider:</p>
                            <ul>
                                <li>How to generate unique short URLs</li>
                                <li>How to store mappings efficiently</li>
                                <li>How to handle redirects</li>
                                <li>How to track analytics</li>
                                <li>How to ensure high availability</li>
                            </ul>
                            <textarea id="interview-answer" placeholder="Your design approach..."></textarea>
                            <div class="interview-actions">
                                <button class="practice-btn" onclick="submitInterviewAnswer()">Submit Answer</button>
                                <button class="practice-btn prev" onclick="showInterviewFeedback()">Get Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'jobs':
            title = 'Job Search Resources';
            content = `
                <div class="lesson-container">
                    <div class="lesson-header">
                        <h1>${title}</h1>
                        <p>Resources to find backend developer positions</p>
                    </div>
                    <div class="lesson-content">
                        <div class="job-resources">
                            <h3>Top Job Boards for Backend Developers</h3>
                            <ul>
                                <li><a href="#" target="_blank">Stack Overflow Jobs</a></li>
                                <li><a href="#" target="_blank">GitHub Jobs</a></li>
                                <li><a href="#" target="_blank">AngelList</a></li>
                                <li><a href="#" target="_blank">RemoteOK</a></li>
                                <li><a href="#" target="_blank">We Work Remotely</a></li>
                            </ul>
                            
                            <h3>Companies Known for Using Go</h3>
                            <ul>
                                <li>Google</li>
                                <li>Uber</li>
                                <li>Lyft</li>
                                <li>Dropbox</li>
                                <li>Twitch</li>
                                <li>SendGrid</li>
                            </ul>
                            
                            <h3>Interview Preparation Resources</h3>
                            <ul>
                                <li><a href="#" target="_blank">System Design Primer</a></li>
                                <li><a href="#" target="_blank">Grokking the System Design Interview</a></li>
                                <li><a href="#" target="_blank">LeetCode (Backend-focused problems)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            title = 'Career Tools';
            content = `<div class="lesson-container"><div class="lesson-header"><h1>${title}</h1><p>Career resources coming soon.</p></div></div>`;
    }
    
    // Update the main content area
    document.querySelector('main').innerHTML = content;
}

// Function to generate resume
function generateResume() {
    const name = document.getElementById('name').value || 'Your Name';
    const title = document.getElementById('title').value || 'Backend Developer';
    const summary = document.getElementById('summary').value || 'Experienced backend developer with expertise in building scalable, high-performance systems.';
    const skills = document.getElementById('skills').value || 'Go, PostgreSQL, MongoDB, Redpanda, Reindexer, Docker, Kubernetes';
    
    const resumeHtml = `
        <div class="generated-resume">
            <h2>${name}</h2>
            <h3>${title}</h3>
            
            <h4>Professional Summary</h4>
            <p>${summary}</p>
            
            <h4>Technical Skills</h4>
            <p>${skills}</p>
            
            <h4>Experience</h4>
            <p>Relevant backend development experience...</p>
            
            <h4>Education</h4>
            <p>Your educational background...</p>
            
            <button class="practice-btn" onclick="downloadResume()">Download as PDF</button>
        </div>
    `;
    
    document.getElementById('resume-output').innerHTML = resumeHtml;
}

// Function to submit interview answer
function submitInterviewAnswer() {
    alert('Answer submitted! In a real application, this would be evaluated.');
}

// Function to show interview feedback
function showInterviewFeedback() {
    const feedback = `
        <div class="feedback">
            <h3>Interview Feedback</h3>
            <p><strong>Strengths:</strong> Good understanding of scalability concepts, appropriate use of database technologies.</p>
            <p><strong>Areas for improvement:</strong> Consider mentioning caching strategies, API design, and monitoring solutions.</p>
            <p><strong>Additional suggestions:</strong> Discuss consistency models, backup strategies, and security considerations.</p>
        </div>
    `;
    
    document.querySelector('.interview-actions').insertAdjacentHTML('afterend', feedback);
}

// Function to download resume
function downloadResume() {
    alert('Resume would be downloaded as PDF in a real application.');
}

// Function to run Go code (simulated)
function runGoCode() {
    // In a real implementation, this would send the code to a Go execution service
    // For this demo, we'll simulate the output
    const code = document.getElementById('go-editor') ? document.getElementById('go-editor').value : 
                 document.getElementById('editor') ? document.getElementById('editor').value : '';
    const output = document.getElementById('go-output') || document.getElementById('output');
    
    if (output) {
        output.innerHTML = "Program executed successfully!<br>Output: The answer is: 42";
    }
}

// Function to run database query (simulated)
function runDbQuery() {
    // In a real implementation, this would execute the query against a database
    // For this demo, we'll simulate the output
    const query = document.getElementById('db-editor').value;
    const output = document.getElementById('db-output');
    
    if (output) {
        output.innerHTML = "Query executed successfully!<br>Rows returned: 5";
    }
}

// Function to add Go playground functionality
function addGoPlaygroundFunctionality() {
    // Already handled by the runGoCode function
    console.log('Go playground functionality initialized');
}

// Function to add database playground functionality
function addDbPlaygroundFunctionality() {
    // Already handled by the runDbQuery function
    console.log('Database playground functionality initialized');
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('techModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('TechStack Mastery site loaded!');
});
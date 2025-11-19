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
    alert(`Starting course: ${course}. This is where you would begin your interactive learning journey!`);
    
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
    let title, content;
    
    switch(type) {
        case 'go':
            title = 'Go Playground';
            content = `
                <h3>Go Interactive Playground</h3>
                <p>Try out Go code directly in your browser:</p>
                <textarea class="code-editor" placeholder="Write your Go code here...">package main

import "fmt"

func main() {
    fmt.Println("Hello, Backend Developer!")
}</textarea>
                <button class="practice-btn">Run Code</button>
            `;
            break;
        case 'database':
            title = 'Database Playground';
            content = `
                <h3>Database Query Playground</h3>
                <p>Practice PostgreSQL and MongoDB queries:</p>
                <div class="db-tabs">
                    <button class="tab-btn active" onclick="switchDbTab('postgresql')">PostgreSQL</button>
                    <button class="tab-btn" onclick="switchDbTab('mongodb')">MongoDB</button>
                </div>
                <textarea class="code-editor" placeholder="Write your query here...">SELECT * FROM users;</textarea>
                <button class="practice-btn">Execute Query</button>
            `;
            break;
        case 'system-design':
            title = 'System Design Challenges';
            content = `
                <h3>System Design Challenge</h3>
                <p>Design a high-performance, scalable system using the backend stack:</p>
                <h4>Challenge: Design a Real-Time Analytics Platform</h4>
                <p>Requirements:</p>
                <ul>
                    <li>Handle millions of events per second</li>
                    <li>Process data in real-time</li>
                    <li>Store processed data efficiently</li>
                    <li>Provide fast query capabilities</li>
                    <li>Ensure high availability</li>
                </ul>
                <p>Consider: Go microservices, Redpanda for streaming, PostgreSQL for OLTP, MongoDB for analytics, Reindexer for fast queries</p>
                <button class="practice-btn">Start Designing</button>
            `;
            break;
        case 'interview':
            title = 'Interview Preparation';
            content = `
                <h3>Backend Interview Questions</h3>
                <p>Practice common backend interview questions:</p>
                <div class="interview-questions">
                    <div class="question">
                        <h4>Q: Explain the difference between horizontal and vertical scaling. When would you use each?</h4>
                        <div class="answer">
                            <p><strong>Answer:</strong> Vertical scaling (scale-up) involves adding more power to existing servers (CPU, RAM, etc.). Horizontal scaling (scale-out) involves adding more servers to distribute the load. Vertical scaling is simpler but has hardware limits. Horizontal scaling is more complex but offers better scalability.</p>
                        </div>
                    </div>
                    <div class="question">
                        <h4>Q: How would you design a system to handle 1 million concurrent users?</h4>
                        <button class="practice-btn">Show Approach</button>
                    </div>
                </div>
            `;
            break;
        default:
            title = 'Practice Area';
            content = `<h3>${type} Practice</h3><p>Practice content for ${type} coming soon.</p>`;
    }
    
    // In a real implementation, this would open a modal or navigate to a practice page
    alert(`Opening ${title} - ${content.substring(0, 100)}...`);
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
                <h3>Backend Developer Resume Builder</h3>
                <p>Build a standout resume for backend developer positions:</p>
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="john@example.com">
                </div>
                <div class="form-group">
                    <label for="experience">Years of Experience:</label>
                    <input type="number" id="experience" placeholder="3">
                </div>
                <div class="form-group">
                    <label for="skills">Key Skills:</label>
                    <textarea id="skills" placeholder="Go, PostgreSQL, MongoDB, etc.">Go, Redpanda, Reindexer, PostgreSQL, MongoDB</textarea>
                </div>
                <button class="career-btn">Generate Resume</button>
            `;
            break;
        case 'interview':
            title = 'Mock Interview';
            content = `
                <h3>Backend Developer Mock Interview</h3>
                <p>Practice with realistic interview questions:</p>
                <div class="interview-pair">
                    <div class="interviewer">
                        <h4>Interviewer:</h4>
                        <p>"Can you walk me through how you would design a high-performance API using Go that can handle 10,000 requests per second?"</p>
                    </div>
                    <div class="interviewee">
                        <h4>Your Response:</h4>
                        <textarea placeholder="Type your response here..."></textarea>
                        <button class="practice-btn">Submit Answer</button>
                    </div>
                </div>
            `;
            break;
        case 'jobs':
            title = 'Job Search';
            content = `
                <h3>Backend Developer Job Opportunities</h3>
                <p>Find opportunities that match your skills:</p>
                <div class="job-listings">
                    <div class="job-card">
                        <h4>Senior Backend Engineer</h4>
                        <p>Tech Company Inc. - Remote</p>
                        <p>Requirements: Go, PostgreSQL, MongoDB, Kafka/Redpanda</p>
                        <p>Salary: $120k - $160k</p>
                        <button class="practice-btn">Apply</button>
                    </div>
                    <div class="job-card">
                        <h4>Backend Developer</h4>
                        <p>Startup XYZ - San Francisco</p>
                        <p>Requirements: Go, system design, event streaming</p>
                        <p>Salary: $100k - $140k</p>
                        <button class="practice-btn">Apply</button>
                    </div>
                </div>
            `;
            break;
        default:
            title = 'Career Tools';
            content = `<h3>${tool} Tool</h3><p>Tool for ${tool} coming soon.</p>`;
    }
    
    alert(`Opening ${title} - ${content.substring(0, 100)}...`);
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
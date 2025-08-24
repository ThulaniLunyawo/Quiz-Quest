// Sample data
const subjects = [
    { id: "1", title: "Mathematics", icon: "bi-calculator" },
    { id: "2", title: "Physics", icon: "bi-atom" },
    { id: "3", title: "Chemistry", icon: "bi-flask" },
    { id: "4", title: "Biology", icon: "bi-dna" },
    { id: "5", title: "History", icon: "bi-clock-history" },
    { id: "6", title: "Literature", icon: "bi-book" }
];

const topicsBySubject = {
    "1": [
        { id: "math-1", title: "Algebra", desc: "Equations, functions, and graphs", icon: "bi-x-circle" },
        { id: "math-2", title: "Calculus", desc: "Derivatives, integrals, and limits", icon: "bi-graph-up" },
        { id: "math-3", title: "Geometry", desc: "Shapes, angles, and proofs", icon: "bi-triangle" },
        { id: "math-4", title: "Statistics", desc: "Data analysis and probability", icon: "bi-bar-chart" }
    ],
    "2": [
        { id: "physics-1", title: "Mechanics", desc: "Motion, forces, and energy", icon: "bi-speedometer2" },
        { id: "physics-2", title: "Thermodynamics", desc: "Heat, temperature, and entropy", icon: "bi-thermometer-high" },
        { id: "physics-3", title: "Electromagnetism", desc: "Electricity, magnetism, and light", icon: "bi-lightning-charge" }
    ],
    "3": [
        { id: "chemistry-1", title: "Organic Chemistry", desc: "Carbon compounds and reactions", icon: "bi-hexagon" },
        { id: "chemistry-2", title: "Inorganic Chemistry", desc: "Metals, minerals, and compounds", icon: "bi-bezier2" },
        { id: "chemistry-3", title: "Physical Chemistry", desc: "Energy, kinetics, and equilibrium", icon: "bi-bezier" }
    ],
    "4": [
        { id: "biology-1", title: "Cell Biology", desc: "Cellular structure and function", icon: "bi-circle" },
        { id: "biology-2", title: "Genetics", desc: "DNA, RNA, and heredity", icon: "bi-diagram-3" },
        { id: "biology-3", title: "Ecology", desc: "Ecosystems and environment", icon: "bi-tree" }
    ]
};

const notesByTopic = {
    "math-1": `
        <h2>Algebra Basics</h2>
        <p>Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols represent quantities without fixed values, known as variables.</p>
        
        <h3>Key Concepts</h3>
        <ul>
            <li><strong>Variables</strong>: Letters that represent unknown values (e.g., x, y, z)</li>
            <li><strong>Constants</strong>: Fixed values (e.g., numbers like 2, -5, 3.14)</li>
            <li><strong>Coefficients</strong>: Numbers multiplying variables (e.g., in 3x, 3 is the coefficient)</li>
            <li><strong>Expressions</strong>: Combinations of variables and constants (e.g., 2x + 3)</li>
            <li><strong>Equations</strong>: Statements that two expressions are equal (e.g., 2x + 3 = 7)</li>
        </ul>
        
        <h3>Solving Linear Equations</h3>
        <p>To solve a linear equation, follow these steps:</p>
        <ol>
            <li>Simplify both sides of the equation</li>
            <li>Move variable terms to one side and constants to the other</li>
            <li>Divide both sides by the coefficient of the variable</li>
        </ol>
        
        <p>Example:</p>
        <pre class="code-block">2x + 3 = 11
2x = 11 - 3
2x = 8
x = 4</pre>
    `,
    "math-2": `
        <h2>Introduction to Calculus</h2>
        <p>Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.</p>
        
        <h3>Two Main Branches</h3>
        <ul>
            <li><strong>Differential Calculus</strong>: Concerns instantaneous rates of change and slopes of curves</li>
            <li><strong>Integral Calculus</strong>: Concerns accumulation of quantities and areas under curves</li>
        </ul>
        
        <h3>Fundamental Theorem of Calculus</h3>
        <p>This theorem establishes the relationship between differentiation and integration, showing that these two operations are essentially inverses of each other.</p>
    `,
    "physics-1": `
        <h2>Mechanics</h2>
        <p>Mechanics is the branch of physics dealing with the motion of objects and the forces that affect that motion.</p>
        
        <h3>Newton's Laws of Motion</h3>
        <ol>
            <li><strong>First Law</strong>: An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.</li>
            <li><strong>Second Law</strong>: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass (F = ma).</li>
            <li><strong>Third Law</strong>: For every action, there is an equal and opposite reaction.</li>
        </ol>
    `
};

const testQuestions = {
    "math-1": [
        {
            question: "Solve for x: 3x + 5 = 14",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correctAnswer: "x = 3"
        },
        {
            question: "Simplify: 2(x + 3) - 4",
            options: ["2x + 2", "2x + 6", "2x - 2", "2x + 10"],
            correctAnswer: "2x + 2"
        }
    ],
    "physics-1": [
        {
            question: "What is Newton's First Law also known as?",
            options: ["Law of Acceleration", "Law of Inertia", "Law of Action-Reaction", "Law of Gravity"],
            correctAnswer: "Law of Inertia"
        }
    ]
};

const internetResources = {
    "math-1": [
        {
            title: "Khan Academy - Algebra",
            url: "https://www.khanacademy.org/math/algebra",
            description: "Free online courses and practice exercises for algebra"
        },
        {
            title: "Paul's Online Math Notes - Algebra",
            url: "http://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx",
            description: "Comprehensive algebra notes with examples"
        }
    ],
    "physics-1": [
        {
            title: "Physics Classroom - Mechanics",
            url: "https://www.physicsclassroom.com/class",
            description: "Interactive physics lessons and tutorials"
        }
    ]
};

// Application state
let isAuthenticated = false;
let selectedSubjectId = "1";
let selectedTopicId = "";

// DOM elements
const signInBtn = document.getElementById('signInBtn');
const subjectList = document.getElementById('subjectList');
const topicsGrid = document.getElementById('topicsGrid');
const emptyNotes = document.getElementById('emptyNotes');
const notesContent = document.getElementById('notesContent');
const resourcesSection = document.getElementById('resourcesSection');
const resourcesGrid = document.getElementById('resourcesGrid');
const questionsSection = document.getElementById('questionsSection');
const questionsContainer = document.getElementById('questionsContainer');

// Initialize the app
function initApp() {
    renderSubjects();
    renderTopics();
    
    // Add event listeners
    signInBtn.addEventListener('click', handleSignIn);
}

// Render subjects list
function renderSubjects() {
    subjectList.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectItem = document.createElement('a');
        subjectItem.className = `list-group-item list-group-item-action ${selectedSubjectId === subject.id ? 'active' : ''}`;
        subjectItem.innerHTML = `
            <i class="${subject.icon} me-2"></i> ${subject.title}
        `;
        subjectItem.addEventListener('click', () => {
            selectedSubjectId = subject.id;
            selectedTopicId = '';
            renderSubjects();
            renderTopics();
            hideNotes();
        });
        
        subjectList.appendChild(subjectItem);
    });
}

// Render topics grid
function renderTopics() {
    topicsGrid.innerHTML = '';
    const topics = topicsBySubject[selectedSubjectId] || [];
    
    if (topics.length === 0) {
        topicsGrid.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <i class="bi bi-info-circle me-2"></i>This subject doesn't have any topics yet.
                </div>
            </div>
        `;
        return;
    }
    
    topics.forEach(topic => {
        const topicCol = document.createElement('div');
        topicCol.className = 'col-md-6 col-lg-4 mb-3';
        
        topicCol.innerHTML = `
            <div class="card topic-card h-100 ${selectedTopicId === topic.id ? 'active border-primary' : ''}">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="${topic.icon} fs-4 text-primary me-2"></i>
                        <h5 class="card-title mb-0">${topic.title}</h5>
                    </div>
                    <p class="card-text text-muted">${topic.desc}</p>
                </div>
            </div>
        `;
        
        topicCol.querySelector('.topic-card').addEventListener('click', () => {
            selectedTopicId = topic.id;
            renderTopics();
            showNotes();
        });
        
        topicsGrid.appendChild(topicCol);
    });
}

// Show notes for selected topic
function showNotes() {
    if (!selectedTopicId) {
        hideNotes();
        return;
    }
    
    // Show notes content
    const notes = notesByTopic[selectedTopicId] || '';
    if (notes) {
        emptyNotes.classList.add('d-none');
        notesContent.classList.remove('d-none');
        notesContent.innerHTML = notes;
        notesContent.classList.add('fade-in');
    } else {
        emptyNotes.classList.remove('d-none');
        notesContent.classList.add('d-none');
    }
    
    // Show resources if available
    const resources = internetResources[selectedTopicId] || [];
    if (resources.length > 0) {
        resourcesSection.classList.remove('d-none');
        resourcesGrid.innerHTML = '';
        
        resources.forEach(resource => {
            const resourceCol = document.createElement('div');
            resourceCol.className = 'col-md-6 mb-3';
            resourceCol.innerHTML = `
                <div class="card resource-card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${resource.title}</h5>
                        <p class="card-text">${resource.description}</p>
                        <a href="${resource.url}" target="_blank" class="btn btn-outline-primary btn-sm">
                            <i class="bi bi-box-arrow-up-right me-1"></i> Visit Resource
                        </a>
                    </div>
                </div>
            `;
            resourcesGrid.appendChild(resourceCol);
        });
    } else {
        resourcesSection.classList.add('d-none');
    }
    
    // Show questions if available
    const questions = testQuestions[selectedTopicId] || [];
    if (questions.length > 0) {
        questionsSection.classList.remove('d-none');
        questionsContainer.innerHTML = '';
        
        questions.forEach((question, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'card question-card mb-3';
            questionCard.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title">${index + 1}. ${question.question}</h6>
                    <div class="options-list mt-3">
                        ${question.options.map(option => `
                            <div class="option-item p-2 mb-2 border rounded">${option}</div>
                        `).join('')}
                    </div>
                    <div class="correct-answer mt-3 p-2 bg-light rounded">
                        <strong>Correct answer:</strong> ${question.correctAnswer}
                    </div>
                </div>
            `;
            questionsContainer.appendChild(questionCard);
        });
    } else {
        questionsSection.classList.add('d-none');
    }
}

// Hide notes
function hideNotes() {
    emptyNotes.classList.remove('d-none');
    notesContent.classList.add('d-none');
    resourcesSection.classList.add('d-none');
    questionsSection.classList.add('d-none');
}

// Handle sign in
function handleSignIn() {
    isAuthenticated = true;
    signInBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Signed In';
    signInBtn.classList.remove('nav-link');
    signInBtn.classList.add('disabled');
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
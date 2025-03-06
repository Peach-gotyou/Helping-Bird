const questions = {
    research: [
{ question: "What is the primary focus of qualitative research?", 
  options: ["Measuring numerical data", "Exploring human experiences", "Testing hypotheses with statistics", "Determining cause-and-effect relationships"],
  answer: "Exploring human experiences",
  explanation: "Qualitative research aims to understand people’s experiences, behaviors, and social contexts through in-depth analysis."},
  {
    question: "Which of the following is a characteristic of quantitative research?",
    options: ["Subjective interpretation", "Statistical analysis", "Open-ended data", "Narrative descriptions"],
    answer: "Statistical analysis",
    explanation: "Quantitative research involves numerical data analyzed through statistical methods to determine patterns and relationships."
  },
  {
    question: "Which research method is commonly used in qualitative research?",
    options: ["Survey with closed-ended questions", "Experimental design", "Case study", "Statistical hypothesis testing"],
    answer: "Case study",
    explanation: "A case study provides an in-depth analysis of a specific individual, group, or situation to understand complex phenomena."
  },
  {
    question: "What is a major advantage of quantitative research?",
    options: ["Provides deep understanding of participants' experiences", "Ensures replicability and generalizability", "Focuses on subjective meaning", "Uses flexible and evolving research questions"],
    answer: "Ensures replicability and generalizability",
    explanation: "Quantitative research allows findings to be tested and generalized to larger populations due to its structured approach."
  },
  {
    question: "What is the main data collection method in qualitative research?",
    options: ["Experiments", "Surveys with closed-ended questions", "Interviews and observations", "Statistical modeling"],
    answer: "Interviews and observations",
    explanation: "Qualitative research often relies on interviews and observations to gather rich, detailed insights from participants."
  },
  {
    question: "What type of research focuses on understanding meanings and experiences?",
    options: ["Quantitative research", "Qualitative research", "Experimental research", "Correlational research"],
    answer: "Qualitative research",
    explanation: "Qualitative research explores meanings, interpretations, and experiences rather than numerical data."
  },
  {
    question: "Which type of sampling is often used in qualitative research?",
    options: ["Random sampling", "Stratified sampling", "Purposive sampling", "Systematic sampling"],
    answer: "Purposive sampling",
    explanation: "Purposive sampling is used to select participants who can provide in-depth and relevant insights into the research topic."
  },
{
  question: "What does the term ‘research gap’ refer to?",
  options: ["A missing area in existing literature", "A flaw in data analysis", "A study that is incomplete", "A study that is biased"],
  answer: "A missing area in existing literature",
  explanation: "A research gap refers to an area that has not been sufficiently explored in previous studies."
},
{question: "What is a conceptual framework?",
  options: ["A visual representation of research variables", "A summary of previous research", "A list of references", "A research problem"],
  answer: "A visual representation of research variables",
  explanation: "A conceptual framework outlines relationships between research variables to guide the study."
},
{
  question: "Which research method is best for studying a single individual or small group in-depth?",
  options: ["Survey research", "Experimental research", "Case study", "Correlational research"],
  answer: "Case study",
  explanation: "A case study provides an in-depth analysis of an individual, event, or small group."
},
{
    question: "What is the main function of inferential statistics in research?",
    options: "To describe trends in data, To summarize key findings, To draw conclusions about a population based on a sample, To manipulate research results",
    answer: "To draw conclusions about a population based on a sample",
    explanation: "Inferential statistics allow researchers to make predictions and generalizations from sample data to a larger population."
    },
   {question: "What is the importance of validity in research?",
    options: "Ensures the consistency of the study, Determines whether the research measures what it intends to, Controls for external variables, Increases the sample size",
    answer: "Determines whether the research measures what it intends to",
    explanation: "Validity ensures that the research accurately measures the intended variables, leading to meaningful results."
    },
   {
   question: "Which of the following research types focuses on solving a specific practical problem?",
    options: "Basic research, Applied research, Theoretical research, Exploratory research",
    answer: "Applied research",
    explanation: "Applied research seeks to address real-world problems by using scientific methods to develop practical solutions."
    },
   {
    question: "What is a key characteristic of action research?",
    options: "Focuses on theoretical knowledge, Conducted by practitioners to improve practices, Only involves large-scale studies, Does not require data collection",
    answer: "Conducted by practitioners to improve practices",
    explanation: "Action research is conducted by professionals, such as teachers or managers, to improve their practices and address specific issues."
    },
   {
    question: "What is the role of triangulation in research?",
    options: "To test multiple hypotheses, To cross-validate findings using multiple methods, To ensure large sample sizes, To eliminate bias completely",
    answer: "To cross-validate findings using multiple methods",
    explanation: "Triangulation strengthens research by using multiple sources, methods, or theories to validate findings."
    },
   {
    question: "Which ethical principle requires researchers to inform participants about the study and obtain their consent?",
    options: "Confidentiality, Anonymity, Informed consent, Objectivity",
    answer: "Informed consent",
    explanation: "Informed consent ensures participants voluntarily agree to participate after being informed about the study's nature and risks."
   },
   {
    question: "What is the difference between probability and non-probability sampling?",
    options: "Probability sampling involves random selection, while non-probability sampling does not; Probability sampling selects participants by convenience, while non-probability sampling is random; Both use systematic selection; Non-probability sampling ensures equal representation",
    answer: "Probability sampling involves random selection, while non-probability sampling does not",
    explanation: "Probability sampling gives each member of the population an equal chance of selection, reducing bias, while non-probability sampling does not follow this rule."
    },
   {
    question: "What is the purpose of a pilot study in research?",
    options: "To finalize the research report, To test the feasibility of a study, To replace the main study, To eliminate all potential errors",
    answer: "To test the feasibility of a study",
    explanation: "A pilot study is a small-scale preliminary study conducted to test research methods before the full study is carried out."
    },
   {
    question: "What is the primary characteristic of exploratory research?",
    options: "It seeks to explain cause-and-effect relationships, It provides conclusive results, It focuses on testing hypotheses, It aims to gain initial insights into a phenomenon",
    answer: "It aims to gain initial insights into a phenomenon",
    explanation: "Exploratory research is conducted to gather preliminary insights when little information is available about a topic."
    },
   {
    question: "Which of the following is a key feature of correlational research?",
    options: "It manipulates variables, It determines causality, It measures relationships between variables, It only uses qualitative data",
    answer: "It measures relationships between variables",
    explanation: "Correlational research examines the relationship between two or more variables without manipulating them."
    },
   {
    question: "What is the primary goal of an experimental research design?",
    options: "To explore unknown phenomena, To describe characteristics of a population, To establish cause-and-effect relationships, To analyze past research",
    answer: "To establish cause-and-effect relationships",
    explanation: "Experimental research manipulates independent variables to determine their causal effects on dependent variables."
    },
   {
    question: "What is the difference between independent and dependent variables in research?",
    options: "Independent variables are measured, while dependent variables are manipulated; Independent variables influence outcomes, while dependent variables are affected by them; Both are controlled by researchers; Dependent variables remain constant throughout the study",
    answer: "Independent variables influence outcomes, while dependent variables are affected by them",
    explanation: "Independent variables are manipulated to observe their effect on dependent variables, which change as a result."
    },
   {
    question: "What is the purpose of a literature review in research?",
    options: "To summarize existing studies related to the topic, To present new findings, To collect primary data, To avoid discussing past research",
    answer: "To summarize existing studies related to the topic",
    explanation: "A literature review provides background information and identifies gaps in existing research to justify a new study."
    },
   {
    question: "Which research method is best for studying cause-and-effect relationships?",
    options: "Descriptive research, Experimental research, Correlational research, Case study research",
    answer: "Experimental research",
    explanation: "Experimental research manipulates variables to establish causal relationships between them."
    },
   {
    question: "Which of the following is NOT an ethical consideration in research?",
    options: "Informed consent, Plagiarism, Confidentiality, Data integrity",
    answer: "Plagiarism",
    explanation: "Plagiarism is unethical because it involves using someone else's work without proper credit, violating academic integrity."
   },
   {
    question: "What type of data collection method involves face-to-face questioning?",
    options: "Surveys, Interviews, Observations, Case studies",
    answer: "Interviews",
    explanation: "Interviews involve direct interaction with respondents to gather detailed qualitative or quantitative data."
    },
   {
    question: "Which of the following best describes qualitative research?",
    options: "Focuses on numbers and statistics, Seeks to explore and understand experiences, Uses large sample sizes for accuracy, Tests hypotheses through experiments",
    answer: "Seeks to explore and understand experiences",
    explanation: "Qualitative research focuses on exploring behaviors, opinions, and experiences rather than numerical data."
    },
   {
    question: "What is the main objective of descriptive research?",
    options: "To manipulate variables, To describe characteristics of a phenomenon, To establish causal relationships, To conduct statistical tests",
    answer: "To describe characteristics of a phenomenon",
    explanation: "Descriptive research aims to provide an accurate portrayal of a subject without influencing it."
    },
    {
        question: "What is the importance of peer review in research?",
        options: ["To increase the length of a research paper", "To verify research quality and credibility", "To eliminate the need for data collection", "To ensure quick publication of findings"],
        answer: "To verify research quality and credibility",
        explanation: "Peer review helps ensure that research meets academic standards and is free from errors or biases."
      },
      {
        question: "Which of the following is an example of a primary data source?",
        options: ["A newspaper article summarizing research", "A published textbook", "A firsthand interview", "A review article"],
        answer: "A firsthand interview",
        explanation: "Primary data sources provide firsthand information collected directly from respondents or experiments."
      },
      {
        question: "What is the main goal of hypothesis testing in research?",
        options: ["To prove a hypothesis true", "To analyze data without conclusions", "To determine if there is enough evidence to support a claim", "To summarize literature review findings"],
        answer: "To determine if there is enough evidence to support a claim",
        explanation: "Hypothesis testing evaluates whether research data provide sufficient evidence to support or reject a proposed claim."
      },
      {
        question: "What is the main difference between qualitative and quantitative research?",
        options: ["Qualitative research focuses on numerical data, while quantitative research explores experiences", "Qualitative research collects textual data, while quantitative research collects numerical data", "Both types rely on statistical analysis", "Quantitative research is always more reliable than qualitative research"],
        answer: "Qualitative research collects textual data, while quantitative research collects numerical data",
        explanation: "Qualitative research explores meanings and experiences through text, while quantitative research uses numerical data for statistical analysis."
      },
      {
        question: "What is the primary purpose of a conceptual framework in research?",
        options: ["To provide a detailed literature review", "To visually illustrate relationships between variables", "To replace the methodology section", "To list all data sources used"],
        answer: "To visually illustrate relationships between variables",
        explanation: "A conceptual framework helps clarify the research process by visually representing how variables interact."
      },
      {
        question: "What type of research focuses on understanding meanings and experiences?",
        options: ["Quantitative research", "Mixed-method research", "Qualitative research", "Experimental research"],
        answer: "Qualitative research",
        explanation: "Qualitative research explores subjective experiences, emotions, and meanings through textual or observational data."
       },
       {
        question: "Which research design is best for determining cause-and-effect relationships?",
        options: ["Descriptive research", "Correlational research", "Experimental research", "Historical research"],
        answer: "Experimental research",
        explanation: "Experimental research manipulates variables to test causal relationships between factors."
       },
       {
        question: "What is the primary function of a hypothesis in research?",
        options: ["To prove a theory", "To guide data collection and analysis", "To replace the literature review", "To eliminate the need for experiments"],
        answer: "To guide data collection and analysis",
        explanation: "A hypothesis is a testable statement that directs research toward investigating relationships between variables."
       },
       {
        question: "Which of the following best describes action research?",
        options: ["Research conducted to improve practices", "Research focused on historical events", "Research to develop new theories", "Research that does not involve human subjects"],
        answer: "Research conducted to improve practices",
        explanation: "Action research aims to find solutions to practical problems and improve existing practices within organizations or communities."
       },
       {
        question: "What is the purpose of data analysis in research?",
        options: ["To manipulate results", "To interpret and draw conclusions from data", "To replace data collection", "To eliminate the need for surveys"],
        answer: "To interpret and draw conclusions from data",
        explanation: "Data analysis involves organizing and interpreting collected data to identify patterns, relationships, or significant findings."
       },
       {
        question: "Which research method involves collecting data from a large group of respondents using questionnaires?",
        options: ["Ethnography", "Case study", "Survey research", "Experimental research"],
        answer: "Survey research",
        explanation: "Survey research gathers information from a large sample using structured questionnaires or interviews."
       },
       {
        question: "What is the difference between primary and secondary data?",
        options: ["Primary data is collected firsthand, while secondary data is pre-existing", "Primary data is always more accurate", "Secondary data is more expensive to collect", "Primary and secondary data are interchangeable"],
        answer: "Primary data is collected firsthand, while secondary data is pre-existing",
        explanation: "Primary data is obtained directly from sources, while secondary data is gathered from existing records or publications."
       },
       {
        question: "Which ethical principle ensures that research participants voluntarily agree to participate?",
        options: ["Confidentiality", "Informed consent", "Anonymity", "Data validity"],
        answer: "Informed consent",
        explanation: "Informed consent ensures participants understand the research process and voluntarily agree to take part."
       },
       {
        question: "What does the term ‘research gap’ refer to?",
        options: ["A missing area in existing literature", "A flaw in data analysis", "A study that is incomplete", "A study that is biased"],
        answer: "A missing area in existing literature",
        explanation: "A research gap refers to an area that has not been sufficiently explored in previous studies."
       },
       {
        question: "What is the role of a literature review in research?",
        options: ["To summarize previous research", "To present new findings", "To replace data collection", "To eliminate the need for a hypothesis"],
        answer: "To summarize previous research",
        explanation: "A literature review provides an overview of existing studies to support the research problem and framework."
       }
          
    ],
    physical_education: [
        { 
            question: "Which component of fitness improves by jogging?", 
            options: ["Flexibility", "Muscular strength", "Cardiovascular endurance", "Speed"], 
            answer: "Cardiovascular endurance", explanation: "Jogging strengthens heart and lungs." },

        { question: "What is the best example of anaerobic exercise?", options: ["Long-distance running", "Yoga", "Weightlifting", "Swimming"], answer: "Weightlifting", explanation: "Anaerobic exercises involve short bursts of intense activity." }
    ]
};

let currentSubject = "";
let currentDifficulty = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedQuestions = [];

function selectDifficulty() {
    currentSubject = document.getElementById("subject").value;
    document.getElementById("home").style.display = "none";
    document.getElementById("difficulty").style.display = "block";
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById("difficulty").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    
    let questionPool = questions[currentSubject] || [];
    let questionCount = difficulty === "easy" ? 10 : difficulty === "medium" ? 50 : 100;
    
    if (questionPool.length < questionCount) {
        selectedQuestions = [...questionPool]; // Use all available questions if not enough
    } else {
        selectedQuestions = questionPool.sort(() => 0.5 - Math.random()).slice(0, questionCount);
    }
    
    currentQuestionIndex = 0;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }
    
    let questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(answer) {
    let correctAnswer = selectedQuestions[currentQuestionIndex].answer;
    let explanation = selectedQuestions[currentQuestionIndex].explanation;
    let isCorrect = answer === correctAnswer;
    userAnswers.push({ question: selectedQuestions[currentQuestionIndex].question, answer, correctAnswer, explanation, isCorrect });
    
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    let resultDiv = document.getElementById("result-details");
    resultDiv.innerHTML = "";
    
    let score = userAnswers.filter(entry => entry.isCorrect).length;
    let total = selectedQuestions.length;
    
    let scoreDisplay = document.createElement("h2");
    scoreDisplay.innerText = `Your Score: ${score} / ${total}`;
    resultDiv.appendChild(scoreDisplay);
    
    userAnswers.forEach(entry => {
        let questionBlock = document.createElement("div");
        questionBlock.innerHTML = `<strong>${entry.question}</strong><br> Your Answer: ${entry.answer}<br> Correct Answer: ${entry.correctAnswer}<br> Explanation: ${entry.explanation}<br><br>`;
        resultDiv.appendChild(questionBlock);
    });
}

function restartQuiz() {
    document.getElementById("results").style.display = "none";
    document.getElementById("home").style.display = "block";
}
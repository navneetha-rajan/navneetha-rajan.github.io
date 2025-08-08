'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QAPair {
  question: string;
  answer: string;
}

const qaData: QAPair[] = [
  {
    question: "What's your background?",
    answer: "I'm a Senior Software Engineer with 4+ years of experience in backend development, microservices architecture, and cloud technologies. I specialize in Java, Spring Boot, AWS, and building scalable systems."
  },
  {
    question: "Tell me about your experience with Java/Spring Boot",
    answer: "I have extensive experience with Java and Spring Boot, having built microservices, REST APIs, and distributed systems. I've worked on high-traffic applications, implemented caching strategies, and designed scalable architectures using Spring Cloud."
  },
  {
    question: "What projects have you worked on?",
    answer: "I've worked on several key projects including MindMate (AI-powered mental health app), Boolean Oracle (data processing platform), and various microservices architectures. I've also contributed to cloud-native applications and machine learning systems."
  },
  {
    question: "What's your experience with cloud technologies?",
    answer: "I have strong experience with AWS services including EC2, S3, Lambda, RDS, and CloudFormation. I've designed and deployed cloud-native applications, implemented CI/CD pipelines, and optimized infrastructure for cost and performance."
  },
  {
    question: "What are your career goals?",
    answer: "I'm passionate about building scalable systems and emerging technologies. I aim to lead technical teams, architect complex systems, and contribute to innovative solutions in the fintech and AI space."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me at connectwithnavneetha08@gmail.com or connect with me on LinkedIn. I'm always open to discussing new opportunities and interesting projects!"
  },
  {
    question: "What technologies do you know?",
    answer: "My tech stack includes Java, Spring Boot, Python, AWS, Docker, Kubernetes, React, Node.js, and various databases. I also have experience with machine learning, NLP, and building AI-powered applications."
  },
  {
    question: "Tell me about your education",
    answer: "I have a Master's degree in Computer Science from Arizona State University and a Bachelor's degree from Bengaluru, India. I'm passionate about continuous learning and staying updated with the latest technologies."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! I'm **Nova** ⭐✨ - Navneetha's digital wingman and professional hype machine! I've got the inside scoop on all things Navneetha: from her Java wizardry to cloud adventures, and everything in between. Think of me as your personal backstage pass to her tech journey! What would you like to know? 🚀",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const findBestMatch = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Direct matches
    for (const qa of qaData) {
      if (input.includes(qa.question.toLowerCase().replace("what's", "what is").replace("?", ""))) {
        return qa.answer;
      }
    }

    // Keyword matching
    if (input.includes('java') || input.includes('spring')) {
      return qaData.find(qa => qa.question.includes('Java/Spring Boot'))?.answer || "I have strong experience with Java and Spring Boot for building microservices and REST APIs.";
    }
    
    if (input.includes('cloud') || input.includes('aws')) {
      return qaData.find(qa => qa.question.includes('cloud technologies'))?.answer || "I have experience with AWS services and cloud-native application development.";
    }
    
    if (input.includes('project') || input.includes('work')) {
      return qaData.find(qa => qa.question.includes('projects'))?.answer || "I've worked on various projects including MindMate, Boolean Oracle, and microservices architectures.";
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return qaData.find(qa => qa.question.includes('contact'))?.answer || "You can reach me at connectwithnavneetha08@gmail.com or connect on LinkedIn!";
    }
    
    if (input.includes('background') || input.includes('experience')) {
      return qaData.find(qa => qa.question.includes('background'))?.answer || "I'm a Senior Software Engineer with 4+ years of experience in backend development and cloud technologies.";
    }

    return "Hmm, that's a bit outside my codebase! 🤔 Try asking about Navneetha's background, Java/Spring Boot wizardry, cloud adventures, epic projects, or how to reach out to her! I'm your tech gossip guru! 💻✨";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findBestMatch(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-accent" />
                <span className="font-semibold text-gray-900 dark:text-white">Nova ⭐</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Nova anything about Navneetha..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
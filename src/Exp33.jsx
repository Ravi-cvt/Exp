import React, { useState } from 'react';

class Person {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.role = "Person";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Student (Inheritance)
class Student extends Person {
  constructor(id, name, age, grade) {
    super(id, name, age);
    this.grade = grade;
    this.role = "Student";
  }

  // Method Overriding
  getDetails() {
    return `${super.getDetails()} | Grade: ${this.grade}`;
  }
}

// Subclass: Teacher (Inheritance)
class Teacher extends Person {
  constructor(id, name, age, subject) {
    super(id, name, age);
    this.subject = subject;
    this.role = "Teacher";
  }

  // Method Overriding
  getDetails() {
    return `${super.getDetails()} | Subject: ${this.subject}`;
  }
}

// --- REACT UI COMPONENT ---

const PersonHierarchy = () => {
  // Demonstration of Polymorphism: A list containing different types of objects
  const [people] = useState([
    new Student(1, "Alice Johnson", 20, "A+"),
    new Teacher(2, "Dr. Smith", 45, "Computer Science"),
    new Student(3, "Bob Miller", 22, "B"),
    new Teacher(4, "Prof. Sarah", 38, "Mathematics"),
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <h2 style={{ color: '#333' }}>Person Class Hierarchy</h2>
      <p>Demonstrating Inheritance, Overriding, and Polymorphism</p>
      
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {people.map((person) => (
          <div 
            key={person.id} 
            style={{
              padding: '15px',
              borderRadius: '8px',
              borderLeft: `5px solid ${person.role === 'Teacher' ? '#4A90E2' : '#50E3C2'}`,
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ 
              fontSize: '12px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              color: '#888' 
            }}>
              {person.role}
            </span>
            <h3 style={{ margin: '5px 0' }}>{person.name}</h3>
            {/* Polymorphic call: The UI doesn't care if it's a student or teacher */}
            <p style={{ color: '#555' }}>{person.getDetails()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonHierarchy;
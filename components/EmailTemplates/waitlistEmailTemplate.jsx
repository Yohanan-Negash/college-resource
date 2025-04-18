/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const WaitlistEmailTemplate = ({ firstName, lastName }) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.8',
      color: '#333',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ecf0f1',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      style={{
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>Welcome to the Waitlist!</h1>
    </div>
    <div style={{ padding: '20px' }}>
      <h2
        style={{
          color: '#2c3e50',
          borderBottom: '1px solid #ecf0f1',
          paddingBottom: '10px',
        }}
      >
        Hi {firstName} {lastName},
      </h2>
      <p>
        Thank you for signing up for our waitlist! We're thrilled to have you
        onboard as part of our growing community.
      </p>
      <p>
        Our team is working hard to bring you an incredible experience, and
        we’ll notify you as soon as the app is ready to launch. Stay tuned for
        updates!
      </p>
      <p
        style={{
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '5px',
          textAlign: 'center',
          color: '#2c3e50',
          fontWeight: 'bold',
        }}
      >
        Exciting things are coming your way!
      </p>
      <p>
        If you have any questions in the meantime, feel free to reach out. We’re
        here to help!
      </p>
      <p>
        Best regards,
        <br />
        <strong>The Team</strong>
      </p>
    </div>
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '15px',
        fontSize: '12px',
        color: '#7f8c8d',
        textAlign: 'center',
      }}
    >
      <p>
        This is an automated email. Please do not reply directly to this
        message.
      </p>
    </div>
  </div>
);

export const personalEmailTemplate = ({ firstName, lastName, email }) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.8',
      color: '#333',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ecf0f1',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      style={{
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ margin: 0 }}>NEW WAITLIST SIGNUP!</h2>
    </div>
    <div style={{ padding: '20px' }}>
      <h4
        style={{
          color: '#2c3e50',
          borderBottom: '1px solid #ecf0f1',
          paddingBottom: '10px',
        }}
      >
        Full Name: {firstName} {lastName}
      </h4>
      <h4
        style={{
          color: '#2c3e50',
          borderBottom: '1px solid #ecf0f1',
          paddingBottom: '10px',
        }}
      >
        Email: {email}
      </h4>
    </div>
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '15px',
        fontSize: '12px',
        color: '#7f8c8d',
        textAlign: 'center',
      }}
    >
      <p>
        This is an automated email. Please do not reply directly to this
        message.
      </p>
    </div>
  </div>
);

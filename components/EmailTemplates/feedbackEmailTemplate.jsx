export const FeedbackEmailTemplate = ({
  feedbackType,
  rating,
  subject,
  details,
  email,
  ...otherFields
}) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    }}
  >
    <h1
      style={{
        color: '#2c3e50',
        borderBottom: '1px solid #ecf0f1',
        paddingBottom: '10px',
      }}
    >
      New Feedback Received
    </h1>
    <p>
      A new feedback submission has been received with the following details:
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Feedback Type:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {feedbackType}
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Rating:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{rating}</td>
        </tr>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Subject:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {subject}
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Details:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {details}
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Email:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{email}</td>
        </tr>
        {Object.entries(otherFields).map(([key, value]) => (
          <tr key={key}>
            <td
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                fontWeight: 'bold',
              }}
            >
              {key}:
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p style={{ marginTop: '20px' }}>
      Please review this feedback and take appropriate action if necessary.
    </p>
    <div style={{ marginTop: '30px', fontSize: '12px', color: '#7f8c8d' }}>
      <p>
        This is an automated email. Please do not reply directly to this
        message.
      </p>
    </div>
  </div>
);

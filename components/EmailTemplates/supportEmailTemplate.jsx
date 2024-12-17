export const EmailTemplate = ({
  subject,
  email,
  category,
  priority,
  description,
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
      New Support Request
    </h1>
    <p>A new support request has been submitted with the following details:</p>
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
            Email:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{email}</td>
        </tr>
        <tr>
          <td
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              fontWeight: 'bold',
            }}
          >
            Category:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {category}
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
            Priority:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {priority}
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
            Description:
          </td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            {description}
          </td>
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
      Please respond to this request as soon as possible.
    </p>
    <div style={{ marginTop: '30px', fontSize: '12px', color: '#7f8c8d' }}>
      <p>
        This is an automated email. Please do not reply directly to this
        message.
      </p>
    </div>
  </div>
);

import React, { useState } from 'react';
import { Box, Container, Paper, TextField, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import logo from '../assets/image1.svg';

function About() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual backend call
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
      }}>
        <img src={logo} alt="logo" height={150} width={150} />
      </div>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Mission Statement Section */}
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Welcome to Code Complexity AI
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography>
              Thank you for choosing Code Complexity – Powered by AI. I am excited to have you here and truly appreciate your trust in my platform.
            </Typography>
            <Typography>
              My mission is to help developers like you understand and optimize your code by leveraging cutting-edge AI technology. I built this website to analyze your code’s complexity and provide valuable insights to help you write cleaner, more efficient, and maintainable software.
            </Typography>
            <Typography>
              I am Anurag Kashal, the sole creator of this platform. I am constantly working to improve and expand its capabilities, and your feedback plays a crucial role in that journey.
            </Typography>
            <Typography>
              If you have any questions, suggestions, or just want to connect, feel free to reach out to me on <a href="https://www.linkedin.com/in/anurag-kaushal-214786227/" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', textDecoration: 'none' }}>LinkedIn</a>. Thank you for being a part of the community!
            </Typography>
          </Box>
        </Paper>

        {/* Feedback Section */}
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Feedback
          </Typography>
          
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography color="success.main" sx={{ mb: 2 }}>
                Thank you for your feedback!
              </Typography>
              <Button
                onClick={() => setSubmitted(false)}
                color="primary"
              >
                Submit another feedback
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="subtitle1" color="text.secondary">
                  We'd love to hear your thoughts!
                </Typography>
                <TextField
                  multiline
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your experience, suggestions, or report issues..."
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SendIcon/>}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Submit Feedback
                </Button>
              </Box>
            </form>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default About;

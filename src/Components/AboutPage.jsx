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
              Thank you for choosing Code Complexity - Powered by AI! We're excited to have you here and appreciate your trust in our platform.
            </Typography>
            <Typography>
              Our mission is to help developers like you understand and optimize your code by leveraging cutting-edge AI technology. Our tool analyzes your code's complexity and provides valuable insights to help you write cleaner, more efficient, and maintainable software.
            </Typography>
            <Typography>
              This website was proudly built by Anurag Kashal. We're continually working to improve and expand our services, and your feedback is invaluable in that journey.
            </Typography>
            <Typography>
              Thank you for being part of our community and for helping us grow. We look forward to supporting you on your coding adventures and celebrating your successes along the way!
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

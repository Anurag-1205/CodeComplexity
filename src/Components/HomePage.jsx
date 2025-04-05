import React, { useState } from 'react';
import { Box, Container, Paper, TextField, Button, Typography } from '@mui/material';

function HomePage() {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const analyzeCode = async () => {
    // TODO: Replace with actual backend call
    fetch("http://localhost:3000/analyze", {
      method: "POST",
      body: JSON.stringify({
        code: code
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      res => res.json()
    ).then((data)=>{
      setAnalysis({
        timeComplexity: data.analysis.time_complexity,
        spaceComplexity: data.analysis.space_complexity,
        details: data.analysis.workflow
      });
    })
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Code Analysis
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            variant="outlined"
            sx={{ 
              fontFamily: 'monospace',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace'
              }
            }}
          />
          <Button
            variant="contained"
            onClick={analyzeCode}
            sx={{ mt: 2 }}
          >
            Analyze Code
          </Button>
        </Paper>

        {analysis && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Analysis Results
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography component="span" fontWeight="medium">
                  Time Complexity:
                </Typography>
                <Typography component="span" color="primary" sx={{ ml: 1 }}>
                  {analysis.timeComplexity}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" fontWeight="medium">
                  Space Complexity:
                </Typography>
                <Typography component="span" color="primary" sx={{ ml: 1 }}>
                  {analysis.spaceComplexity}
                </Typography>
              </Box>
              <Box>
                <Typography component="span" fontWeight="medium">
                  Details:
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {analysis.details}
                </Typography>
              </Box>
            </Box>
          </Paper>
        )}
      </Box>
    </Container>
  );
}

export default HomePage;
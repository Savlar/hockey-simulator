import { Box } from '@mui/material';
import Result from './Result';
import dataResults from './dataResults.json';

const ResultsPanel = () => {
  console.log(dataResults);
  return (
    <Box sx={{ display: 'flex' }}>
      {dataResults.map((result) => {
        return <Result key={result.id} {...result}></Result>;
      })}
    </Box>
  );
};

export default ResultsPanel;

import { colors } from '@material-ui/core';

export default
{

  datasets: [
    {
      backgroundColor: '#0093ff',
      data: [18, 5, 19, 27],
      label: 'Total'
    },
    {
      backgroundColor: colors.grey[200],
      data: [11, 20, 12, 29],
      label: 'Média'
    }
  ],
  labels: ['C1', 'C2', 'C3', 'C4']
};

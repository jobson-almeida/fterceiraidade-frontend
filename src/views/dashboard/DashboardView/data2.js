import { colors } from '@material-ui/core';

export default
{
  datasets: [
    // {
    //   label: 'Total',
    //   backgroundColor: '#0093ff',
    //   data: [18, 5, 19, 27, 29, 19, 20, 18, 5, 19]
    // },
    {
      label: 'Média',
      backgroundColor: colors.grey[200],
      data: [11, 20, 12, 29, 30, 25, 13, 11, 20, 12]
    }
  ],
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6',
    'T7', 'T8', 'T9', 'T10']
};

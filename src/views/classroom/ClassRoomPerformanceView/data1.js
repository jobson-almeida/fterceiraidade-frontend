import { colors } from '@material-ui/core';

export default
{

  datasets: [
    // {
    //   backgroundColor: '#0093ff',
    //   data: [18, 5, 19, 27, 29, 19, 20, 18, 5, 19, 27, 29, 19, 20, 18, 5, 19,
    //     27, 29, 19, 20, 18, 5, 19, 27, 29, 19, 20],
    //   label: 'Total'
    // },
    {
      backgroundColor: colors.grey[200],
      data: [11, 20, 12, 29, 30, 25, 13, 11, 20, 12, 29, 30, 25, 13, 11, 20,
        12, 29, 30, 25, 13, 11, 20, 12, 29, 30, 25, 13],
      label: 'Média'
    }
  ],
  labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6',
    'D11', 'D12', 'D13', 'D14', 'D15', 'D16',
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6',
    'D11', 'D12', 'D13', 'D14', 'D15', 'D16']
};

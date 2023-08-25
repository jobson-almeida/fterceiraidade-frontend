import React, { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const BlueTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#0093ff',
    color: 'rgba(255, 255, 255, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const CustomTooltip = forwardRef((props, ref) => {
  return (
    <BlueTooltip {...props} ref={ref} />
  );
});

export default CustomTooltip;

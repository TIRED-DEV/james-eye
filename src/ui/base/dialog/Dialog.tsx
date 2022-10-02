import {
  Dialog as MUIDialog,
  DialogContent,
  Grid,
  IconButton,
} from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Colors } from '../../theme';

interface IDialog {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
  fullScreen?: boolean;
}

export const Dialog = (params: IDialog) => {
  return (
    <MUIDialog
      open={params.open}
      maxWidth={params.maxWidth}
      fullScreen={params.fullScreen}
      fullWidth={params.fullWidth}
      BackdropProps={{ invisible: true }}
      sx={{
        '&>div>div': {
          overflow: 'unset',
          backgroundColor: `${Colors.backgroundOpacity} !important`,
        },
      }}
    >
      <Grid container justifyContent={'flex-end'}>
        <IconButton onClick={params.onClose}>
          <AiFillCloseCircle color={Colors.exit} size={30} />
        </IconButton>
      </Grid>
      <DialogContent sx={{ overflow: 'unset' }}>
        {params.children}
      </DialogContent>
    </MUIDialog>
  );
};

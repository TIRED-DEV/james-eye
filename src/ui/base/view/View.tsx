import { Container } from '@mui/material';

interface IView {
  children: React.ReactNode;
}

export const View = (params: IView) => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        padding: '0px !important',
        height: '100vh',
        minWidth: '100vw !important',
      }}
    >
      {params.children}
    </Container>
  );
};

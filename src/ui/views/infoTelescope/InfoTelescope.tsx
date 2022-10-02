import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { View } from '../../base/view/View';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdOutlineDescription } from 'react-icons/md';
import { BiWrench } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { BiRocket } from 'react-icons/bi';
import { IoIosPlanet } from 'react-icons/io';
import { padding } from '@mui/system';
import { Colors } from '../../theme';

export const InfoTelescope = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
        style={{
          position: 'relative',
          top: '-20px',
        }}
      >
        <Grid item xs={4}>
          <img
            width="400em"
            style={{
              position: 'relative',
              top: '-100px',
              marginBottom: '-100px',
            }}
            src={
              'https://webb.nasa.gov/content/features/educational/buildItYourself/game/assets/jwst.svg'
            }
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: Colors.primary }}
            textAlign="center"
          >
            JAMES WEBB
            <br />
            SPACE TELESCOPE
          </Typography>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              height: '21em !important',
              backgroundColor: Colors.background,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              <BiWrench size={'30px'} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                TECHNOLOGIES
              </Typography>
            </div>
            <div
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              <br />
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>Primary mirror</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Consists of 18 hexagonal mirror segments made of gold-plated
                    beryllium, with a diameter of 6.5m, compared with Hubble's
                    2.4m
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography>Differences with Hubble</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Unlike Hubble, which observes in the near ultraviolet and
                    visible spectra, Webb observes in a lower frequency range,
                    from long -wavelength visible light through mid-infrared
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography>Budget</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Although the initial estimated budget was 1$ billion, the
                    final cost was 10$ billion
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/*  <Masonry columns={2} spacing={{ xs: 1, sm: 2, md: 3 }}> */}
              <Paper
                elevation={3}
                sx={{ padding: 2, backgroundColor: Colors.primary }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}
                >
                  <MdOutlineDescription size={'30px'} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    DESCRIPTION
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                >
                  <br />
                  <Typography>
                    <span style={{ fontWeight: 'bold' }}>James Webb</span> is
                    the largest optical space telescope to date, and its high
                    infrared resolution and sensitivity, meant for infrared
                    astronomy research, allows it to view objects that are
                    either too early, distant or faint for the&nbsp;
                    <span style={{ fontWeight: 'bold' }}>
                      Hubble Space Telescope
                    </span>
                    .
                  </Typography>
                  <br />
                  <Typography>
                    It's expected these upgrades and features will empower
                    scientists across the globe with the tools required to
                    research and study subjects such as: the formation of
                    galaxies or finding potentially habitable exoplanets.
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{ padding: 2, backgroundColor: Colors.background }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}
                >
                  <BsShieldCheck size={'30px'} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    MISSION GOALS
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                >
                  <List
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <ListItem>
                      <ListItemIcon
                        style={{ width: '10px', color: Colors.secondary }}
                      >
                        <IoIosPlanet size={'70%'} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          To search for light from the first stars and galaxies
                          formed after the Big Bang
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        style={{ width: '10px', color: Colors.secondary }}
                      >
                        <IoIosPlanet size={'70%'} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          To study galaxy formation and evolution
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        style={{ width: '10px', color: Colors.secondary }}
                      >
                        <IoIosPlanet size={'70%'} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>
                          To understand star and planet formation
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        style={{ width: '10px', color: Colors.secondary }}
                      >
                        <IoIosPlanet size={'70%'} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography>To study the origins of life</Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
            {/*
             */}
            <Grid item xs={8}>
              <Paper
                elevation={3}
                sx={{ padding: 2, backgroundColor: Colors.primary }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}
                >
                  <BiRocket size={'30px'} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    LAUNCH VIDEO
                  </Typography>
                </div>
                <div
                  style={{
                    verticalAlign: 'middle',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <iframe
                    width="400"
                    height="200"
                    /* height="300" */
                    src="https://www.youtube.com/embed/9tXlqWldVVk"
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/*  </Masonry> */}
        </Grid>
      </Grid>
    </>
  );
};

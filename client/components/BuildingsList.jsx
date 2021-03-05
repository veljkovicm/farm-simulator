import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BuildingDetails from './BuildingDetails/BuildingDetails';
import BuildingUnits from './BuildingUnits/BuildingUnits';

const BuildingList = ({ buildings }) => {
  const classes = useStyles();
  let buildingsMarkup = 'This farm doesn\'t have any buildings yet';

  if(Object.keys(buildings).length) {
    buildingsMarkup = Object.values(buildings).map((building) => {
      return <Accordion key={building.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{building.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BuildingDetails building={building} />
        </AccordionDetails>
        <AccordionDetails>
          <BuildingUnits units={building.units} />
        </AccordionDetails>
      </Accordion>
    });
  }
  return buildingsMarkup;
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default BuildingList;

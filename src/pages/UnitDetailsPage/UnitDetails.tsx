import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Unit } from '../../types';

type UnitDetailsProps = {
  unit: Unit;
};

const UnitDetails = ({ unit }: UnitDetailsProps) => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemText primary={'ID: ' + unit.id} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Name: ' + unit.name} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Description: ' + unit.description} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Min. Required Age: ' + unit.age} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Wood Cost: ' + unit?.cost?.Wood} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Food Cost: ' + unit?.cost?.Food} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Gold Cost: ' + unit?.cost?.Gold} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Build Time: ' + unit.build_time} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Reload Time: ' + unit.reload_time} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Hit Points: ' + unit.hit_points} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Attack: ' + unit.attack} />
      </ListItem>
      <Divider></Divider>
      <ListItem>
        <ListItemText primary={'Accuracy: ' + unit.accuracy} />
      </ListItem>
    </List>
  );
};

export default UnitDetails;

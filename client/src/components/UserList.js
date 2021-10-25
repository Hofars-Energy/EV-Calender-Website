import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
  } from 'react-admin';
  import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles({
    table: {
        backgroundColor: 'Lavender',
    },
    headerCell: {
        backgroundColor: 'MistyRose',
    },
});
  
  const UserList = (props) => {
    const classes = useStyles();
    return (
      <List {...props}>
        <Datagrid classes={classes}>
          <TextField source='id' />
          <TextField source='name' />
          <EmailField source='email' />
          <EditButton basePath='/users' />
          <DeleteButton basePath='/users' />
        </Datagrid>
      </List>
    )
  }
  
  export default UserList
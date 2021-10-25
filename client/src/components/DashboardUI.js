import { Admin, Resource } from "react-admin";
import UserList from "../components/UserList";
import UserCreate from "../components/UserCreate";
import UserEdit from "../components/UserEdit";
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/People';


export default function DashboardUI(props) {
  return (
    <div className="dashboard">
        //dataprovider's job is to provide the API endpoint
        //for now using a placeholder data, need to get real user data from the backend
       //for initiating authentication, refer this: https://marmelab.com/react-admin/Authentication.html 
       //used to give edit access to only those required
      <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          icon={UserIcon}
        />
      </Admin>
    </div>
  );
}

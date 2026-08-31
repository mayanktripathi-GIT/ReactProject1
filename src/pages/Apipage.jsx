//import UsersApiExample from "../features/api/UsersApiExample";
import { UserapiSearchFilter } from "../features/api/UserapiSearchFilter";

function ApiPage() {
  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-primary">API Integration</h4>

      {/* <UsersApiExample /> */}
      <UserapiSearchFilter/>
    </div>
  );
}

export default ApiPage;

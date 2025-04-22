
import Info from "../components/Dashboard/info";
import SideBar from "../components/Dashboard/sidebar";

function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-2">
              <div className="col-span-4">
                <SideBar />
              </div>
               <div className="col-span-2">
                  <Info />
               </div>
            </div>
        </>
    );
}

export default Dashboard;
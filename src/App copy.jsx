import "./App.css";
import Protection from "./components/Adhkar/Protection";
import AsmaulHusna from "./components/AsmaulHusna/AsmaulHusna";
import AstaghfirullahHallazi from "./components/AstaghfirullahHallazi/AstaghfirullahHallazi";
import AyatulKursi from "./components/AyatulKursi/AyatulKursi";
import VpsDeploymentGuide from "./components/DeploymentVPS/VpsDeploymentGuide";
import Navbar from "./components/Header/Navbar/Navbar";
import Istighfaar from "./components/Istighfaar/Istighfaar";
import Rabbana from "./components/Rabbana/Rabbana";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Istighfaar></Istighfaar>
      <Protection></Protection>
      <AstaghfirullahHallazi />
      <AsmaulHusna></AsmaulHusna>
      <Rabbana></Rabbana>
      <AyatulKursi></AyatulKursi>
      <VpsDeploymentGuide />
    </>
  );
}

export default App;

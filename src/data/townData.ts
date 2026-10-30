import rawTownData from './townData.json';

export interface TownInfo {
  name: string;
  domain: string;
  motto: string;
  address: string;
  phone: string;
  serviceQueue311: string;
  email: string;
  hours: string;
  emergencyHotlines: {
    policeFireAmbulance: string;
    roadsEmergency: string;
    waterSewerEmergency: string;
    hydroDownedWires: string;
  };
}

export const townData = rawTownData;
export default rawTownData;


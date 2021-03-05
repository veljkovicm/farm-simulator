import { useRouter } from 'next/router';
import { API } from '../../../libs';
import styles from '../../../styles/Farm.module.css';
import { useEffect } from 'react';
import { setBuildings } from '../../../redux/actions/buildings';
import { connect } from 'react-redux';
import BuildingsList from '../../../components/BuildingsList';
import AddFarmBuilding from '../../../components/AddFarmBuilding/AddFarmBuilding';


const Farm = ({ fetchedBuildings, setBuildings, buildings, farmId }) => {


  useEffect(() => {
    setBuildings(fetchedBuildings);
  }, []);

  return (
    <div className={styles.container}>
      <AddFarmBuilding farmId={farmId} />
      <BuildingsList buildings={buildings} />
    </div>
  )
}


const mapStateToProps = (state) => ({
  buildings: state.buildings.buildings,
});

const mapDispatchToProps = {
  setBuildings: setBuildings,
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);


export const getServerSideProps = async (context) => {
  const res = await API({
    method: 'GET',
    path: 'building',
    params: { id: context.params.id } 
  });

  return {
    props: {
      fetchedBuildings: res.data,
      farmId: context.params.id,
    }
  }
}


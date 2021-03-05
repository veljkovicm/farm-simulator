import { connect } from 'react-redux';
import { useEffect } from 'react';
import { API } from '../../../libs';
import styles from '../../../styles/Farm.module.css';
import { setBuildings } from '../../../redux/actions/buildings';
import BuildingsList from '../../../components/BuildingsList';
import AddFarmBuilding from '../../../components/AddFarmBuilding/AddFarmBuilding';

const Farm = (props) => {
  const {
    fetchedBuildings,
    setBuildings,
    buildings,
    farmId,
  } = props;

  useEffect(() => {
    setBuildings(fetchedBuildings);
  }, [ fetchedBuildings, setBuildings ]);

  return (
    <div className={styles.container}>
      <AddFarmBuilding farmId={farmId} />
      <BuildingsList buildings={buildings} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  buildings: state.buildings.buildings,
});

const mapDispatchToProps = {
  setBuildings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

export const getServerSideProps = async (context) => {
  const res = await API({
    method: 'GET',
    path: 'building',
    params: { id: context.params.id },
  });

  return {
    props: {
      fetchedBuildings: res.data,
      farmId: context.params.id,
    },
  };
};

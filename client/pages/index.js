import Head from 'next/head';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { setFarms } from '../redux/actions/main';
import { API } from '../libs';
import AddFarmInput from '../components/AddFarmInput/AddFarmInput';
import FarmList from '../components/FarmList';

const Home = (props) => {
  const {
    fetchedFarms,
    setFarms,
    farms,
  } = props;

  useEffect(() => {
    setFarms(fetchedFarms);
  }, [fetchedFarms, setFarms]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <AddFarmInput />
        <FarmList farms={farms} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  farms: state.main.farms,
});

const mapDispatchToProps = {
  setFarms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export const getStaticProps = async () => {
  const { data: fetchedFarms } = await API({ method: 'GET', path: 'farms' });

  return {
    props: {
      fetchedFarms,
    },
  };
};

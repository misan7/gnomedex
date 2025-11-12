import React, { useState, useEffect } from 'react';

import 'normalize.css';
import './styles/index.scss';

import BrastlewarkAPI from './api/brastlewark.js';
import { Modal, Cards, Header } from './components';

function App() {
  const [Brastlewark, setBrastlewark] = useState([]);
  const [filteredGnomes, setFilteredGnomes] = useState([]);
  const [gnomeID, setGnomeID] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await BrastlewarkAPI.getData();
      setBrastlewark(data);
      setFilteredGnomes(data);
    } catch (error) {
      setErr(error);
    }
  };

  const filterGnome = e => {
    const filtered = Brastlewark.filter(gnome =>
      gnome.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredGnomes(filtered);
  };

  const filterProf = prof => {
    const professions = filteredGnomes.filter(gnome =>
      gnome.professions.includes(prof)
    );
    setFilteredGnomes(professions);
  };

  const clearData = e => {
    getData();
  };

  const handleOpenModal = e => {
    const gnome = Brastlewark.find(gnome => gnome.id === +e.target.id);
    setGnomeID(gnome);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="wrapper">
      <Header
        filterGnome={filterGnome}
        data={filteredGnomes}
        filterProf={filterProf}
        clearData={clearData}
      />
      {err ? (
        <div>[Error]: Run! The Orcs are comming!</div>
      ) : (
        <Cards data={filteredGnomes} idSelect={handleOpenModal} />
      )}
      <Modal
        data={gnomeID}
        isOpen={showModal}
        hideModal={handleCloseModal}
      />
    </div>
  );
}

export default App;

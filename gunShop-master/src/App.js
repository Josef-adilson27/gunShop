import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BaseContent from "./BaseContent/BaseContent";
import Header from "./Header/Header";
import RifledGun from "./Routes/RifledGun";
import SelectedCard from "./Routes/ProductCard/SelectedCard";
import Optics from "./Routes/Optics";
import Ammo from "./Routes/Ammo";
import Pistol from "./Routes/Pistol";
import Smoothbore from "./Routes/Smoothbore";
import Form from "./form/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { PutData, AddToLS } from "./redux/MainSlise";
import { Data } from "./redux/Data";
import Cart from "./Cart/Cart";

const App = () => {
  const [rifled, setriflefed] = useState([]);
  const [smoothbore, setSmoothbore] = useState([]);
  const [pistol, setPistol] = useState([]);
  const [optic, setOptic] = useState([]);
  const [ammunition, setAmmunition] = useState([]);
  const dispatch = useDispatch();




  
  useEffect(() => {
    dispatch(PutData(Data));
  }, [dispatch]);

  const { Products } = useSelector((state) => state.Data);
  
  useEffect(() => {
    [...Products]?.map((item) => {
      const text = item.type.toLocaleLowerCase();

      switch (text.slice(0, 3)) {
        case "rif":
          setriflefed((current) => [...current, item]);
          break;

        case "smo":
          setSmoothbore((current) => [...current, item]);
          break;

        case "pis":
          setPistol((current) => [...current, item]);
          break;

        case "opt":
          setOptic((current) => [...current, item]);
          break;

        case "amm":
          setAmmunition((current) => [...current, item]);
          break;
      }
    });
  }, [Products]);

  return (
    <div className="App">
      <Header />
      <Form />

      <Routes>
        <Route path="/" element={<BaseContent />} />
        <Route
          path="smoothbore"
          element={<Smoothbore products={smoothbore} />}
        />
        <Route path="rifledGun" element={<RifledGun products={rifled} />} />
        <Route path="optics" element={<Optics products={optic} />} />
        <Route path="pistol" element={<Pistol products={pistol} />} />
        <Route path="ammo" element={<Ammo products={ammunition} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="smoothbore/:id/" element={<SelectedCard />} />
        <Route path="rifledGun/:id/" element={<SelectedCard />} />
        <Route path="pistol/:id/" element={<SelectedCard />} />
        <Route path="optics/:id" element={<SelectedCard />} />
        <Route path="ammo/:id" element={<SelectedCard />} />
      </Routes>

      {/* The Footer is in the BaseContent for the possibilty of its hidding when routing uses 
           Компонент Footer находится в компоненте BaseContent (в  "/") ради возможнсти его сокрытия во время маршрутизации
      */}
    </div>
  );
};
export default App;

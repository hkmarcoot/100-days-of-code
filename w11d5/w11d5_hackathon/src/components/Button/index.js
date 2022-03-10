import React from 'react';
// import { useState } from 'react';
// import { useFetch } from '../../hooks/useFetch';
//mport '../../../node_modules/antd/dist/antd'
import { Button } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";

export const FightButton = () => {
  const { isAuthenticated } = useAuth0();
  
//     const[statA, setStatA] = useState();
//     const[statB, setStatB] = useState();

//    function handleClick(){
//        setStatA(data.stats[0].base_stat) 
       
//    }
  return (
    isAuthenticated && (
  <Button type="primary">FIGHT!</Button>
  ))
};

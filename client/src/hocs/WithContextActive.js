import React from 'react'
import {Redirect} from 'react-router-dom'
import { useWeb3Context, Web3Consumer } from "web3-react";
import CrowdlinkReferral from "../contracts/CrowdlinkReferral";
import { ethers } from "ethers";
import { SIGN_UP_FALLBACK_ROUTE } from '../routes-config';
 



export const WithContextActive = (ComposedComponent) => {
    const { library, networkId, active } = useWeb3Context();

    return(
        <Web3Consumer>
            {context => {
                  if(!active) {
                      return <Redirect to={SIGN_UP_FALLBACK_ROUTE} />
                  } else {
                    const crowdlinkAddress = networkId ? CrowdlinkReferral.networks[networkId].address : null
                    const contract = new ethers.Contract(
                      crowdlinkAddress,
                      CrowdlinkReferral.abi,
                      library.getSigner()
                    ); 

                    return <ComposedComponent contractInstance={contract} />

                  } 
                

            }}
        </Web3Consumer>
    )
    
}
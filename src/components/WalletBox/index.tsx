import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import arrowUpImg from '../../assets/arrow-up.svg';

import { Container } from './styles';

interface IWalletBoxProps {
    title: string,
    amount: number,
    footerlabel: string,
    icon: 'dolar' | 'arrowUp' | 'arrowDown' ;
    color: string;
}

const WalletBox: React.FC <IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo(() => {
        switch(icon){
            case 'dolar':
                return dollarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
        }
    },[icon]);


    return(
        <Container color={color} >
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}    
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    );
}

export default WalletBox;
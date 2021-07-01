import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';

import { gains } from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';
import { listOfMonths } from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import { 
    Container,
    Content,
 } from './styles';


const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    
        
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year);
            }

        });

        return uniqueYears.map( year => {
            return{
                value: year,
                label: year,
            }
        });

    },[]);


    const months = useMemo(() => {
        return listOfMonths.map(item => {
            return{
                value: item.value,
                label: item.label,
            }
        });
    },[]);

    const totalExpenses = useMemo (() => {
        let total:number = 0;

        expenses.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }

        });

        return total;

    }, [monthSelected, yearSelected] );

    const totalGains = useMemo (() => {
        let total:number = 0;

        gains.forEach(item =>{
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth()+1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount);
                }catch{
                    throw new Error('Invalid amount! Amount must be a number.');
                }
            }

        });

        return total;

    }, [monthSelected, yearSelected] );

    const totalBalance = useMemo (() => { 
        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);

    const message = useMemo(()=>{
        if(totalBalance < 0){
            return{
                title:"Que triste",
                description:"Neste mês você gastou mais do que ganhou",
                footerText:"Corte os gastos desnecessários",
                icon: sadImg
            }
        }else if(totalBalance === 0){
            return{
                title:"Ufa!",
                description:"Neste mês você gastou tanto quanto ganhou",
                footerText:"Corte os gastos desnecessários",
                icon: happyImg 
            }
        }else{
            return{
                title:"Que maravilha",
                description:"Neste mês você economizou",
                footerText:"Considere investir o dinheiro",
                icon: happyImg
            }
        }
    },[totalBalance]);


    const handleMonthSelected = (month:string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error('invalid month value. 0 - 24 Accepted');
        }
    }


    const handleYearSelected = (year:string) => {
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch{
            throw new Error('invalid year value. Only number accepted');
        }
    }


    return (
        <Container>

            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput 
                    options={months} 
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />

            </ContentHeader>

            <Content>

                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerlabel="Atualizado com base na movimentação"
                    icon="dolar" 
                    color="#4E41F0"
                />

                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerlabel="Atualizado com base na movimentação"
                    icon="arrowUp" 
                    color="#F7931B"
                />

                <WalletBox
                    title="saída"
                    amount={totalExpenses}
                    footerlabel="Atualizado com base na movimentação"
                    icon="arrowDown" 
                    color="#E44C4E"
                />

                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChart></PieChart>

            </Content>

        </Container>
    );
}

export default Dashboard;
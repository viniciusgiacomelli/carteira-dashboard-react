import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { gains } from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';

import { Container } from './styles';
import { listOfMonths } from '../../utils/months';


const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    
    const options = [
        {value: 'Vinicius', label: 'Vinicius'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Joaquim', label: 'Joaquim'}
    ]

    
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

    const handleMonthSelected = (month:string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch(error){
            throw new Error('invalid month value. 0 - 24 Accepted');
        }
    }

    const handleYearSelected = (year:string) => {
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch(error){
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
        </Container>
    );
}

export default Dashboard;
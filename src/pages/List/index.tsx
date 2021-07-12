import React, {useMemo, useState, useEffect} from 'react';
import { uuid } from 'uuidv4';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import {gains} from '../../repositories/gains';
import {expenses} from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match:{
        params:{
            type:string;
        }
    }
}

interface IData{
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC <IRouteParams> =  ({ match }) => {

    const [data, setData] = useState <IData[]> ([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente','eventual']);

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas':'Saídas'
    },[type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#4E41F0':'#E44C4E'
    },[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type]);


    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
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

    },[listData]);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return{
                value: index+1,
                label: month,
            }
        });
    },[]);

    const handleFrequencyClick = (frequency:string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered);
        }else{
            setSelectedFrequency((prev) => [...prev, frequency]);
        }

    }

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


    useEffect(() => {

        const filteredData = listData.filter(item => {
            const date = new Date( item.date);
            const month = date.getMonth() +1 ;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(formattedData);
    },[listData, monthSelected, yearSelected, data.length, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
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

            <Filters>

                <button 
                type="button"
                className={`tag-filter tag-filter-recurrent
                ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button 
                type="button"
                className={`tag-filter tag-filter-eventual
                ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>

            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key ={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }               
            </Content>

        </Container>
    );
}

export default List;
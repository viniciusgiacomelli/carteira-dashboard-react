import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'Vinicius', label: 'Vinicius'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Joaquim', label: 'Joaquim'}
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;
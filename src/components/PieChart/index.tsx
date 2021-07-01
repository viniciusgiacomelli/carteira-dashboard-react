import React from 'react';

/*
import { 
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer
} from 'recharts';
*/

import { 
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend
} from './styles';

const PieChart: React.FC = () => (
    <Container>

        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#F7931B">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>

        <SideRight>{/*
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={[]}
                        labelLine={false}
                        dataKey=
                    />
                </PieChart>
        </ResponsiveContainer> */}
        </SideRight>

    </Container>
);

export default PieChart;
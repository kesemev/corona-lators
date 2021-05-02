import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart } from 'react-vis';

const PieChart = () => {

    const data = [
        {angle: 900 ,label: 'Collaborators',className: 'Collaborators' ,color: '#d2f9ee'}, 
        {angle: 25 ,label: 'Incorrect locations',className: 'Incorrect locations' ,color: '#f0a71f'}, 
        {angle: 79 ,label: 'Incorrect identifications',className: 'Incorrect identifications' ,color: '#f1f37d'},
        {angle: 264 ,label: 'Uncooperatives',className: 'Uncooperatives' ,color: '#f8a0a7'}
    ];

    return (
        <div style={{ marginTop: '15px' }}>
            <RadialChart
                colorType="literal"
                className="progress-chart"
                data={data}
                width={680}
                height={300} 
                showLabels={true}
                padAngle={0.04}
                />
        </div>
    );
};

export default PieChart;
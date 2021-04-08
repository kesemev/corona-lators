import "../../../node_modules/react-vis/dist/style.css";
import { RadialChart } from 'react-vis';

const PieChart = () => {

    const data = [
        {angle: 900 ,label: 'Collaborators',className: 'Collaborators' ,color: '#98FB98'}, 
        {angle: 25 ,label: 'Incorrect locations',className: 'Incorrect locations' ,color: '#FFA07A'}, 
        {angle: 79 ,label: 'Incorrect identifications',className: 'Incorrect identifications' ,color: '#F0E68C'},
        {angle: 264 ,label: 'Uncooperatives',className: 'Uncooperatives' ,color: '#F08080'}
    ];

    return (
        <div style={{ marginTop: '15px' }}>
            <RadialChart
                colorType="literal"
                className="progress-chart"
                data={data}
                width={300}
                height={300} 
                showLabels={true}
                padAngle={0.04}
                />
        </div>
    );
};

export default PieChart;
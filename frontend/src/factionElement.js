import './App.css';

function factionElement(fName, tier, hold, rep) {
    return (
    <div className='faction-box'>
        <div align='left' className='faction-name'>{fName}</div>
        <div align='right' className='faction-tier'>Tier {tier}{' '}{hold}</div>
        <div align='right' className='faction-rep'>{rep}</div>
    </div>
    );
}

export default factionElement;
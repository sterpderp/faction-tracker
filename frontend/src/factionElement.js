import './App.css';

function factionElement(fName, tier, hold, rep, key) {
    return (
    <div className='faction-box' key={key}>
        <div align='left' className='faction-name' key={'name-'+key}>{fName}</div>
        <div align='right' className='faction-tier' key={'tier-'+key}>Tier {tier}{' '}{hold}</div>
        <div align='right' className='faction-rep' key={'rep-'+key}>{rep}</div>
    </div>
    );
}

export default factionElement;
import './App.css';

function factionElement(fName, tier, hold, rep) {
    return (
      //<div class='faction-box'>
      //  <div class='faction-name'>{fName}</div>|
      //  <div class='faction-tier'>Tier {tier}{' '}{hold}</div>|
      //  <div class='faction-rep'>{rep}</div>
      //</div>

    <div className='faction-box'>
        <div align='left' className='faction-name'>{fName}</div>
        <div align='right' className='faction-tier'>Tier {tier}{' '}{hold}</div>
        <div align='right' className='faction-rep'>{rep}</div>
    </div>
    );
}

export default factionElement;
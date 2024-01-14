import { DateRange } from 'react-date-range';
import chair from '../../assets/chair 1.png'
import { useState } from 'react';

const Appointment = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
           
        }
    ]);
    return (
        <div>
            <div className="flex min-h-[700px] w-full items-center justify-center px-8 " style={{ backgroundImage: 'url("https://i.ibb.co/MPhXGcj/landing-bg.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">

                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        />


                    </div>
                    <div className="relative">
                        <img src={chair} />
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <h2 className='text-color font-medium text-xl'>Available Services on {date[0].startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h2>
                    <p className='text-lg'>Please select a service.</p>
                </div>
            </div>
        </div>
    );
};

export default Appointment;